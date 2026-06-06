import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-directory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-directory.html',
  styleUrl: './employee-directory.css'
})
export class EmployeeDirectory {
  employees = [
    { id: 101, name: 'Anuj Das', department: 'HR' },
    { id: 102, name: 'Vikash Mishra', department: 'Finance' },
    { id: 103, name: 'Junymaya rana', department: 'IT' },
    { id: 104, name: 'Vishal Majhi', department: 'Marketing' }
  ];
}