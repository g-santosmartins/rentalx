import "reflect-metadata"
import {createConnection} from 'typeorm'
import { User } from "../modules/accounts/entities/User";
import { Category } from '../modules/cars/entities/Category';
import { Specification } from "../modules/cars/entities/Specification";

// it's necessary to specificate the entities
createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "docker",
    password: "ignite",
    database: "rentx",
    // remember to always come here to put the entities
    entities: [
        Category,
        User,
        Specification
    ],
    synchronize: true,
    logging: false
}).then(connection => {
    // here you can start to work with your entities
}).catch(error => console.log("Houve um erro na conexão de banco de dados", "ERRO:",error));