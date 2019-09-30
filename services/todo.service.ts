import { Todo } from "../core/todo.model.ts";

export class TodoService {
    getTodos(): Promise<Todo[]> {
        return Promise.resolve([
            {
                id: 1,
                title: "Do homework",
                done: true
            },
            {
                id: 2,
                title: "Learn Deno",
                done: false
            }
        ]);
    }

    getTodo(id: number): Promise<Todo> {
        return Promise.resolve({
            id: id,
            title: "Do homework",
            done: true
        });
    }

    createTodo(todo: Todo): Promise<Todo> {
        return Promise.resolve({
            id: Math.round(Math.random() * 10),
            title: todo.title,
            done: todo.done
        });
    }

    markTodo(id: number, done: boolean): Promise<Todo> {
        return Promise.resolve({
            id: id,
            title: "Do homework",
            done: done
        });
    }

    deleteTodo(id: number): Promise<boolean> {
        return Promise.resolve(true);
    }
}