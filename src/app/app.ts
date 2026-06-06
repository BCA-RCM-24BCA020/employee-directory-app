import { Component } from '@angular/core';
import { EmployeeDirectory } from './employee-directory/employee-directory';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmployeeDirectory],
  template: `<app-employee-directory></app-employee-directory>`
})
export class App {}