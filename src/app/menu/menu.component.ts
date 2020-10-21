import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // public sidenav: MatSidenavModule;

  private returnUrl = '/';

  constructor(
    // public sidenav: MatSidenavModule
  ) { }

  ngOnInit(): void {
  }

}
