import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TasksComponent } from '../tasks.component'; // <-- Виправили шлях

@NgModule({
  declarations: [TasksComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: TasksComponent }
    ])
  ]
})
export class TasksModule { }
