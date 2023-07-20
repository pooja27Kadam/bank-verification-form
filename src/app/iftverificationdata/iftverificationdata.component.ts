import { Component } from '@angular/core';

@Component({
  selector: 'app-iftverificationdata',
  templateUrl: './iftverificationdata.component.html',
  styleUrls: ['./iftverificationdata.component.css'],
})
export class IftverificationdataComponent {
  table = [
    {
      label: 'Not yet verified',
      count: '1',
    },
  ];
}
