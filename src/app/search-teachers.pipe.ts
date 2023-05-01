import { Pipe, PipeTransform } from '@angular/core';
import { Teacher } from './models/teacher';

@Pipe({
  name: 'searchTeachers'
})
export class SearchTeachersPipe implements PipeTransform {
  transform(Teachers: Teacher[], searchValue: string): Teacher[] {
    if (!Teachers || !searchValue) { return Teachers; }
    return Teachers.filter(teacher =>
      teacher.name.toLowerCase().includes(searchValue.toLowerCase())
      ||
      teacher.cin.includes(searchValue)
      ||
      teacher.emailId.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

}
