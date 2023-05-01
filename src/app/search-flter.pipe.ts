import { Student } from './models/student';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFlter'
})
export class SearchFlterPipe implements PipeTransform {

  transform(Students: Student[], searchValue: string): Student[] {
    if (!Students || !searchValue) { return Students; }
    return Students.filter(student =>
      student.first_name.toLowerCase().includes(searchValue.toLowerCase())
      ||
      student.last_name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }
}
