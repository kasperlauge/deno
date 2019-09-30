import { Area } from "https://deno.land/x/alosaur/src/mod.ts";
import { TodoController } from "./controllers/todo.controller.ts";

// Declare module
@Area({
  controllers: [TodoController]
})
export class ApiArea {}