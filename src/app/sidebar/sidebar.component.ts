import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit{
  showOptions: boolean[] = new Array(100).fill(false);
   constructor(){
    
   }
   change(i : any){
    this.showOptions[i] = !this.showOptions[i];
   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}

