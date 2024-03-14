import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'winnerPipe'
})
export class WinnerPipe implements PipeTransform {

  transform(player: string,): string {
    if(player.length > 0) return `Ganó el jugador ${ player }`;
    return 'El juego terminó, pero se olvidaron de escribir el nombre del jugador :(';
  }

}
