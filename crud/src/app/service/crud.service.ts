import { Injectable } from '@angular/core';

//Observables
import { BehaviorSubject} from 'rxjs';

//Importando clase
import {Student} from '../models/student'

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  /*Output */
  private saveData = new BehaviorSubject({});
  public outputForm = this.saveData.asObservable();

  private editData = new BehaviorSubject({});
  public editForm = this.editData.asObservable();

  constructor() { }

  /*Input */
  inputDataForm(value:any){
    this.saveData.next(value)
  }

  inputDataEdit(value:any){
    this.editData.next(value)
  }


  createStudent(students:Student[], student:Student) {
    const students_aux = [...students]
    if(student.cod) students_aux.push(student);
    return students_aux;
  }

  editStudent(students:Student[], student:Student){
    return [...students].map((ele:Student)=>{
      let newData = ele;
      if(ele.cod === student.cod){
        newData = {...student};
      }
      return newData
    })  
  }

  deleteStudent (students:Student[] ,student: Student){
    return students.filter(ele=> ele.cod !== student.cod);
  }

}
