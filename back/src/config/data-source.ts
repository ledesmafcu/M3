import { DataSource } from "typeorm";
import { 
    DB_TYPE, 
    DB_HOST, 
    DB_PORT, 
    DB_USERNAME, 
    DB_PASSWORD, 
    DB_NAME 
} from ".";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: true,
    //dropSchema: true, 
    logging: true,
    entities: ["src/entities/*.ts"],
    subscribers: [],
    migrations: [],
});
