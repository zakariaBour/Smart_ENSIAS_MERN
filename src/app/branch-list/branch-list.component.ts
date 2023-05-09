import { Component, OnInit } from '@angular/core';
import { HolidayService } from '../services/holiday.service';
import { saveAs } from 'file-saver';
import { SearchService } from '../search.service';
import { ToastrService } from 'ngx-toastr';
import { BranchService } from '../services/branch.service';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css']
})
export class BranchListComponent {

}
