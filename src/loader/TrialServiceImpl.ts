import { Trail } from "../model/Trail";
import TrailService from "./TrailLoader";

export default class TrailServiceImpl implements TrailService {

    private static instance: TrailServiceImpl;

    static getInstance(): TrailServiceImpl{
        if(!TrailServiceImpl.instance){
            TrailServiceImpl.instance = new TrailServiceImpl();
        }
        return TrailServiceImpl.instance;
    }

    load(): void {
        throw new Error("Method not implemented.");
    }
    getAll(): Trail {
        throw new Error("Method not implemented.");
    }
    getById(id: string): Trail {
        throw new Error("Method not implemented.");
    }
}