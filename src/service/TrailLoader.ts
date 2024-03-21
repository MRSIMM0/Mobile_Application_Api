import { Trail } from "../model/Trail";

export default interface TrailService {
    getAll(): Promise<Array<Trail> | undefined>
    getById(id: string): Promise<Trail>
}