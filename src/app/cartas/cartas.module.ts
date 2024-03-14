import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MoscaPageComponent } from './pages/mosca-page/mosca-page.component';
import { TrucoPageComponent } from './pages/truco-page/truco-page.component';
import { ChinchonPageComponent } from './pages/chinchon-page/chinchon-page.component';
import { MaterialModule } from '../material/material.module';
import { MoscaCardComponent } from './components/mosca-card/mosca-card.component';
import { PrimeModule } from '../prime/prime.module';
import { WinnerPipe } from './pipes/winner-pipe.pipe';
import { ConfirmationService, MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    HomePageComponent,
    MoscaPageComponent,
    TrucoPageComponent,
    ChinchonPageComponent,
    MoscaCardComponent,
    WinnerPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PrimeModule
  ],
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class CartasModule { }
