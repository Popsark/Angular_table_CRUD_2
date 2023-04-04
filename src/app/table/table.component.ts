import { Component} from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string [] = ['id', 'birthDate', 'firstName', 'lastName', 'gender', 'hireDate'];

  constructor(private restClient: EmployeeService)
  {
    this.loadData("http://localhost:8080/employees");
  }

  data: any;
  loadData(url:string):void
  {
    this.restClient.getDataRows("http://localhost:8080/employees").subscribe
    (
      web_data => this.data = web_data._embedded.employees
    )
  }
  nextPage(){
    if(this.data) this.loadData(this.data.Link.next.href)
  }
  firstPage(){
    if(this.data) this.loadData(this.data.Link.first.href)
  }
  prevPage(){
    if(this.data) this.loadData(this.data.Link.prev.href)

  }
  lastPage(){
    if(this.data) this.loadData(this.data.Link.last.href)
  }
}




  