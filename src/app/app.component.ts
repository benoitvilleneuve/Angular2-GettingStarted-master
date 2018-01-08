import {Component} from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <div><H1>{{pageTitle}}</H1>
      <div>My first component</div>
    </div>
    `
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}