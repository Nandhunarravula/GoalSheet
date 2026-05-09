import { Component } from '@angular/core';

interface Employee {
  name: string;
  empId: number;
  role: string;
  mobile: string;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  employees: Employee[] = [
    {
      name: 'Nandhini',
      empId: 3456,
      role: 'Web Developer',
      mobile: '9874563210'
    },
    {
      name: 'Durai',
      empId: 3478,
      role: 'Frontend Developer',
      mobile: '9874563210'
    },
    {
      name: 'Naresh',
      empId: 4564,
      role: 'Frontend Developer',
      mobile: '9874563210'
    },
    {
      name: 'Vicky ',
      empId: 789945,
      role: 'Full Stack Developer',
      mobile: '9874563210'
    },
    {
      name: 'vishnu',
      empId: 789945,
      role: 'Full Stack Developer',
      mobile: '9874563210'
    },
    {
      name: 'John',
      empId: 789945,
      role: 'Full Stack Developer',
      mobile: '9874563210'
    }

  ];

  showDetails(name: string) {
    alert("You clicked on " + name);
  }

  addEmployee() {
    alert("Add new employee clicked!");
  }
}
