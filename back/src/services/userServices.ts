import { Request } from "express"
import { UserEntity } from "../entities/UserEntity";
import { CredentialEntity } from "../entities/CredentialEntity";
import UserDTO, { UserAuthResponseDTO, UserResponseDTO } from "../DTO/userDTO";
import { CredentialModel, createUserCredentials, verifyUserCredentials } from "./credentialServices";
import { AppDataSource } from "../config/data-source";

export const UserModel = AppDataSource.getRepository(UserEntity)

export const getUsersService = async ():Promise<UserEntity[]>=>{
    const users: UserEntity[] = await UserModel.find();
    return users;
}

export const getUserService = async (id: number):Promise<UserEntity | null>=>{
    const userFound: UserEntity | null = await UserModel.findOne({
        where: {id},
        relations: ['appointments']
    });
    return userFound;
}

export const createUsersService = async (userData: UserDTO):Promise<UserResponseDTO>=>{
    //servicio para crear IDs
    const newUserCreds: CredentialEntity = await createUserCredentials(userData.username, userData.password);
    const newUser: UserEntity = UserModel.create(userData);
    newUser.credential = newUserCreds;
    newUserCreds.user = newUser;
    await UserModel.save(newUser);
    await CredentialModel.save(newUserCreds);
    return {
        id:newUser.id,
        name:newUser.name,
        email:newUser.email,
        birthdate:newUser.birthdate,
        nDni:newUser.nDni,
        credentialsId:newUser.credential.id,
    };
}

export const loginUsersService = async (username:string, password:string):Promise<UserAuthResponseDTO | null>=>{
    //validar credenciales
    //encontrar al user
    //empaquetar respuesta
    return await verifyUserCredentials(username, password);
}