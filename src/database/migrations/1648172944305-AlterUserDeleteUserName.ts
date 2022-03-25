import {Column, MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterUserDeleteUserName1648172944305 implements MigrationInterface {
    

    // how to drop a atribute from the table by using typeORM
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "username")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("users",
            new TableColumn({
                name: "username",
                type: "varchar",
            })
        )
    }

}
