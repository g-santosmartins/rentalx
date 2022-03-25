import "reflect-metadata"
import {createConnection} from 'typeorm'
import { User } from "../modules/accounts/entities/user";
import { Category } from '../modules/cars/entities/Category';

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
    ],
    synchronize: true,
    logging: false
}).then(connection => {
    // here you can start to work with your entities
}).catch(error => console.log(error));