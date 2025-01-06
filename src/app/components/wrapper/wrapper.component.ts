import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
  imports: [IonicModule]
})
export class WrapperComponent implements OnInit {
  @Input() item:any

  constructor() { }

  ngOnInit() {}

}
