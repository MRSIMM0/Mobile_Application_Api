import { Elysia } from "elysia";
import TrailService from "../service/TrailLoader";
import TrailServiceImpl from "../service/TrialServiceImpl";

const trailService: TrailServiceImpl = new TrailServiceImpl();

const trails = () => new Elysia({ prefix: '/trail' })
        .get('/list', () => trailService.getAll())
        .get('/:id', ({ params: { id } }) => trailService.getById(id))

export default trails;