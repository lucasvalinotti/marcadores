import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MoscaCardComponent } from '../../components/mosca-card/mosca-card.component';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-mosca-page',
  templateUrl: './mosca-page.component.html',
  styleUrls: ['./mosca-page.component.css']
})
export class MoscaPageComponent {
  
  public visibleDialog:boolean = false;
  @ViewChildren('player') childrenComponent!:QueryList<MoscaCardComponent>;
  @ViewChild('confirmationDialog') confirmationDialog: any;

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}
  
  public resetScore(){
    this.childrenComponent.forEach(player => {
    player.resetGame();
    })
  }

  confirm1() {
    this.confirmationService.confirm({
      message: '¿Estás seguro de reiniciar el juego?',
      header: 'Advertencia',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.resetScore();
          this.messageService.add({ severity: 'success', summary: ':)', detail: 'Juego reiniciado' });
      },
      reject: (type:ConfirmEventType) => {
          switch (type) {
              case ConfirmEventType.REJECT:
                  this.messageService.add({ severity: 'warn', summary: ':)', detail: 'No se reiniciara' });
                  break;
              case ConfirmEventType.CANCEL:
                  this.messageService.add({ severity: 'warn', summary: ':)', detail: 'No se reiniciará' });
                  break;
          }
      }
    });
  }
  

}
