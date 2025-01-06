import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterLinkActive, RouterLink } from '@angular/router';
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    imports: [
        IonicModule,
        RouterLinkActive,
        RouterLink,
    ],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/home', icon: 'home' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Recent Searches', url: '/folder/recent search', icon: 'search' },
    // { title: 'Search', url: '/folder/search', icon: 'search' },
    
  ];
  handleClick() {
    console.log('IonicModule', IonicModule);
    setTimeout(() => {
      // window.location.reload()
    }, 500);
  }
  constructor() {}
}
