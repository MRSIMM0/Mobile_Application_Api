import { Database } from "../db/Database";
import { Trail } from "../model/Trail";
import TrailService from "./TrailLoader";

export default class TrailServiceImpl implements TrailService {


    private database = Database.getInstance();

    async getAll(): Promise<Array<any> | undefined> {
        const db = await this.database;
        return db.findAll();
    }
    getById(id: string): Promise<Trail> {
       return this.database.then((db) => db.find('details', { id }));
    }
}