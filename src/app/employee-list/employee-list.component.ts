import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  showDetails(name: string) {
    alert("You clicked on " + name);
  }
  addEmployee() {
  alert("Add new employee clicked!");
}

}
