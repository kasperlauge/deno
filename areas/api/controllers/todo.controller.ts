import {
  Controller,
  Content,
  Get,
  Param,
  Post,
  Body,
  Delete
} from "https://deno.land/x/alosaur/src/mod.ts";
import { TodoService } from "../../../services/todo.service.ts";

@Controller("/api/todo")
export class TodoController {

  constructor(private todoService: TodoService) {}

  @Get("")
  async getTodos() {
    const todos = await this.todoService.getTodos();
    return Content(todos);
  }

  @Get("/:id")
  async getTodo(@Param('id') id) {
    const todo = await this.todoService.getTodo(id);
    return Content(todo);
  }

  @Post('')
  async postTodo(@Body() body) {
    const todo = await this.todoService.createTodo(body)
    return Content(todo);
  }

  @Delete('/:id')
  async deleteTodo(@Param('id') id) {
    const success = await this.todoService.deleteTodo(id)
    return Content("", 200);
  }
}