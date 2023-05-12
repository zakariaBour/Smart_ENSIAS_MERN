import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHolidayComponent } from './add-holiday.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
describe('AddHolidayComponent', () => {
  let component: AddHolidayComponent;
  let fixture: ComponentFixture<AddHolidayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHolidayComponent,NavbarComponent,
        SidebarComponent],
       imports: [RouterTestingModule, 
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        ReactiveFormsModule,
        FormsModule
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
