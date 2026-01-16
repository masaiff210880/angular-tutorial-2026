import { Component, signal } from '@angular/core';

interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  todo = signal<TodoItem>({
    id: Math.random() * 1000,
    title: '',
    completed: false,
  });

  todos = signal<TodoItem[]>([]);

  handleInputChange=(title:string)=>{
    this.todo.update((prev)=>({...prev,title}))
  }

  handleAddTodo=()=>{
    this.todos.update((prev)=>[...prev,this.todo()])
    this.todo.set({
      id: Math.random() * 1000,
      title: '',
      completed: false,
    })
  }


  handleCompleteTodo=(id:number)=>{
    this.todos.update((prev)=>prev.map((todo)=>todo.id === id ? {...todo,completed: !todo.completed} : todo))
  }

  handleDeleteTodo=(id:number)=>{
    this.todos.update((prev)=>prev.filter((todo)=>todo.id !== id))
  }


}
