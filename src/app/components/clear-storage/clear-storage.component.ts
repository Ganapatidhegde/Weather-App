import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clear-storage',
  templateUrl: './clear-storage.component.html',
  styleUrls: ['./clear-storage.component.scss'],
})
export class ClearStorageComponent implements OnInit {
  @Input() setOpen: any;
  @Input() buttonText: any;
  @Input() title: any;
  constructor() { }

  ngOnInit() {}

}
