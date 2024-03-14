import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';



@NgModule({
  exports: [
    CardModule,
    InputTextModule,
    ButtonModule,
    ConfirmDialogModule,
    ToastModule,
    DialogModule
  ]
})
export class PrimeModule { }
