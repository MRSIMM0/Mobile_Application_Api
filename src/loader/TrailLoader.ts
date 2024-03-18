import { Trail } from "../model/Trail";

export default interface TrailService {
    load(): void;
    getAll(): Trail
    getById(id: string): Trail
}