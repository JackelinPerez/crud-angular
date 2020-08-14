import { Component, OnInit } from '@angular/core';
import {Student} from '../models/student'
//incluyendo servicio formulario
import { CrudService} from '../service/crud.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  students: Student[] = [
    {
      cod: "20201005123",
      name: "julio",
      course: "math"
    },
    {
      cod: "202010051234",
      name: "sarita",
      course: "lenguage"
    },
    {
      cod: "2020100512345",
      name: "rodrigo",
      course: "art"
    }
  ];

  student_edit: Student = new Student();

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.outputForm.subscribe((data:Student)=>{
      if(this.student_edit.cod===""){
        this.students = this.crudService.createStudent(this.students, data)
      }
      else{
        this.students = this.crudService.editStudent(this.students, data);
        this.student_edit = new Student();
      }
    })
  }

  edit(student: Student){
    this.crudService.inputDataEdit(student);
    this.student_edit = student;
  }
  
  delete(student: Student){
    this.students = this.crudService.deleteStudent(this.students, student)
  }



}
