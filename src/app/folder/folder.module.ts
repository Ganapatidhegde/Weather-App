import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';
import { IonAlert, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/angular/standalone';
import { FolderPage } from './folder.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FolderPageRoutingModule,
        FolderPage,
        IonAlert,
        IonInfiniteScroll,
        IonInfiniteScrollContent,
    ]
})
export class FolderPageModule { }
