import { Component, Input, OnInit } from '@angular/core';
import { Card } from './card.type';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports:[IonicModule]
})
export class CardComponent  implements OnInit {
  @Input() item?: Card;
  constructor() { }

  ngOnInit() {}

}
