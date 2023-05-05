import { Student } from './models/student';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFlter'
})
export class SearchFlterPipe implements PipeTransform {

  transform(Students: Student[], searchValue: string): Student[] {
    if (!Students || !searchValue) { return Students; }
    return Students.filter(student =>
      // student.firstname.toLowerCase().includes(searchValue.toLowerCase())
      // ||
      // student.lastname.toLowerCase().includes(searchValue.toLowerCase())
      // ||
      student.cne.toLowerCase().includes(searchValue.toLowerCase())
    );
  }
}
