import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { Register } from './register/register';
import { Counter } from './counter/counter';
import { List } from './list/list';
import { Todo } from './todo/todo';
// import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [Login,Register,Counter,List,Todo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-tutorial-1');
  name = 'Angular';
  dec = signal('This is a declaration signal');
}
