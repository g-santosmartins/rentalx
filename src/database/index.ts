import "reflect-metadata"
import {createConnection} from 'typeorm'
import { Category } from '../modules/cars/entities/Category';

// it's necessary to specificate the entities
createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "docker",
    password: "ignite",
    database: "rentx",
    entities: [
        Category
    ],
    synchronize: true,
    logging: false
}).then(connection => {
    // here you can start to work with your entities
}).catch(error => console.log(error));