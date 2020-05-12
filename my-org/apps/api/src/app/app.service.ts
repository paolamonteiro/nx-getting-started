import { Injectable } from '@nestjs/common';
import { Todo } from '@my-org/data';

@Injectable()
export class AppService {
  todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

  getData(): Todo[] {
    return this.todos;
  }

  addTodo() {
    this.todos.push({
      title: `Todo ${Math.floor(Math.random() * 100)}`
    });
  }
}