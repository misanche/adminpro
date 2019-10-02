import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/service.index';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menus: any[];

  constructor(sidebarServie: SidebarService) {
     this.menus = sidebarServie.getMenu();
  }

  ngOnInit() {
  }

}
