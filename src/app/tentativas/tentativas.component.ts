import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tentativas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tentativas.component.html',
  styleUrl: './tentativas.component.css'
})
export class TentativasComponent implements OnChanges {
  @Input() public tentativas: number = 3;
  
  public coracoes: string[] = ['❤️', '❤️', '❤️'];
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tentativas'] && this.tentativas !== changes['tentativas'].previousValue) {
      this.coracoes = ['❤️', '❤️', '❤️'];
      
      // Ajusta o array de corações conforme o número de tentativas
      if (this.tentativas < 3) {
        this.coracoes = this.coracoes.fill('🖤', this.tentativas);
      }
    }
  }
}