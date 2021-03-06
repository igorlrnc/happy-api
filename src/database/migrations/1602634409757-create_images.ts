import {MigrationInterface, QueryRunner} from "typeorm";
import {Table} from "typeorm/index";

export class createImages1602634409757 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'images',
            columns: [
                {
                    name: "id",
                    type: "integer",
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "path",
                    type: "varchar"
                },
                {
                    name: "orphanage_id",
                    type: "integer"
                }
            ],
            foreignKeys: [
                {
                    name: "imageOrphanage",
                    columnNames: ["orphanage_id"],
                    referencedTableName: "orphanages",
                    referencedColumnNames: ["id"],
                    onUpdate: "CASCADE",
                    onDelete: "CASCADE"
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("images");
    }

}
