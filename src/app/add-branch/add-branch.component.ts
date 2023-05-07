import { Branch } from '../models/branch';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BranchService } from '../services/branch.service';
@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent {
  formData: any;
  myBranch: Branch = {
    code: '',
    name: '',
    description: ''
  }
  branchs: Branch[] = [];
  addBranchForm: FormGroup;
  constructor(private branchService: BranchService, private toastr: ToastrService) {
    this.addBranchForm = new FormGroup({
      code: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      description: new FormControl('', [
        Validators.required,
      ]),
    });
  }
  get code() {
    return this.addBranchForm.get('code');
  }
  get name() {
    return this.addBranchForm.get('name');
  }
  get description() {
    return this.addBranchForm.get('description');
  }

  addBranch(branch: Branch) {

    this.branchService.addBranch(branch).subscribe(branchs => {
      this.toastr.success('Branch added successfully');
    }, error => {
      this.toastr.error('error');

    });
  }
  onSubmit(): any {
    this.formData = this.addBranchForm.value;
    let branch: Branch;
    branch = {
      code: this.formData?.code,
      name: this.formData?.name,
      description: this.formData?.description,
    }

    console.log(branch);
    // let x = this.addHoliday(holiday);

  }
}
