import { Component } from '@angular/core';

@Component({
  selector: 'header-app',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './../app.component.scss']
})
export class HeaderComponent {
  title = 'wiz-test';
}
