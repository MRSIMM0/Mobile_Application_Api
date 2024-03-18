import { Elysia } from "elysia";
import Trails from "./routes/trails";
const app = new Elysia()
  .use(Trails)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
