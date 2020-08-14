import { Component, OnInit } from '@angular/core';
//incluyendo clase
import {Student} from '../models/student'
//incluyendo servicio formulario
import { CrudService} from '../service/crud.service'
import { FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  student_: Student = new Student();
  student: any ;

  constructor(private formBuilder:FormBuilder, private crudService: CrudService) {
    this.student = this.formBuilder.group(this.student_);
   }

  ngOnInit(): void {
    this.crudService.editForm.subscribe((data:Student)=>{
      if(data.cod) this.student = this.formBuilder.group(data);
    })
  }

  onSubmit(data:any){   
    this.crudService.inputDataForm(data);
    this.student = this.formBuilder.group(this.student_);
  }

}
