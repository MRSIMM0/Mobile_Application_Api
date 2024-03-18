import { Elysia } from "elysia";
import TrailService from "../loader/TrailLoader";
import TrailServiceImpl from "../loader/TrialServiceImpl";

const trailService: TrailService = TrailServiceImpl.getInstance();

const trails = () => new Elysia({ prefix: '/trail' })
        .get('/list', () => trailService.getAll())
        .get('/:id', ({ params: { id } }) => trailService.getById(id))

export default trails;