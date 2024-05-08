import { users } from "../../db";
import { ICredential } from "../../types/credential";
import { IUser } from "../../types/user";
import { checkCredential, generateCredential } from "../credential";

async function getAllUsersService(): Promise<IUser[]> {
    try {
        return users;
    } catch (error: any) {
        throw new Error(error);
    }
}

async function getUserByIdService(id: number): Promise<IUser | undefined> {
    try {
        const user = users.find((user)=> user.id === id);
        return user;
    } catch (error: any) {
        throw new Error(error)
    }
}

async function postUserRegisterService(user: any): Promise<IUser> {
    try {
        const credentialId = await generateCredential({username: user.username, password: user.password});
        const id = users.length + 1;
        const newUser: IUser = {
            id: user.id,
            name: user.name,
            email: user.email,
            birthdate: user.birthdate,
            dni_number: user.dni_number,
            appointments: [],
            credentialsId: credentialId,
        };
        users.push(newUser);
        return newUser;
    } catch (error: any) {
        throw new Error(error);
    }
}

async function postUserLoginService(credentials: ICredential) {
    try {
        await checkCredential(credentials);
    } catch (error: any) {
        throw new Error(error);
    }
}

export { 
    getAllUsersService,
    getUserByIdService, 
    postUserRegisterService, 
    postUserLoginService 
};