import { IUser } from "../../types/user";

export const users: IUser[] = [
    {
        id: 1,
        name: "John Doe",
        email: "john@mail.com",
        birthdate: new Date("1990-01-01"),
        dni_number: 12345678,
        appointments: [],
        credentialsId: 1,
    },
    {
        id: 2,
        name: "Juan Perez",
        email: "juan@mail.com",
        birthdate: new Date("1995-01-01"),
        dni_number: 12345679,
        appointments: [],
        credentialsId: 2,
    },
]