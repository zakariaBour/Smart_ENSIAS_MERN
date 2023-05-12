import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStudentComponent } from './edit-student.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('EditStudentComponent', () => {
  let component: EditStudentComponent;
  let fixture: ComponentFixture<EditStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStudentComponent,NavbarComponent,
        SidebarComponent],
       imports: [RouterTestingModule, 
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        ReactiveFormsModule,
        FormsModule
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
