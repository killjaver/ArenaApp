import { Component, OnInit } from '@angular/core';
import { TasksService } from './services/tasks.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  newTaskTitle: string = '';

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.tasksService.getTasks().subscribe({
      next: (tasks: Task[]) => this.tasks = tasks,
      error: (err: any) => console.error('Помилка завантаження задач:', err)
    });
  }

  addTask(): void {
    if (!this.newTaskTitle.trim()) return;
    const newTask = { title: this.newTaskTitle, completed: false };
    this.tasksService.createTask(newTask).subscribe({
      next: (task: Task) => {
        this.tasks.push(task);
        this.newTaskTitle = '';
      },
      error: (err: any) => console.error('Помилка створення задачі:', err)
    });
  }

  toggleStatus(task: Task): void {
    const updatedTask = { ...task, completed: !task.completed };
    this.tasksService.updateTask(updatedTask).subscribe({
      next: () => task.completed = !task.completed,
      error: (err: any) => console.error('Помилка оновлення статусу задачі:', err)
    });
  }

  deleteTask(index: number): void {
    const task = this.tasks[index];
    this.tasksService.deleteTask(task.id).subscribe({
      next: () => this.tasks.splice(index, 1),
      error: (err: any) => console.error('Помилка видалення задачі:', err)
    });
  }
}
