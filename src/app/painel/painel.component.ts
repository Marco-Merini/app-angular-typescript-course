import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProgressoComponent } from '../progresso/progresso.component';
import { TentativasComponent } from '../tentativas/tentativas.component';

@Component({
  selector: 'app-painel',
  standalone: true,
  imports: [CommonModule, FormsModule, ProgressoComponent, TentativasComponent],
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.css'
})
export class PainelComponent implements OnInit {
  public frases: Array<{fraseEng: string, frasePtBr: string}> = [
    { fraseEng: 'How are you?', frasePtBr: 'Como você está?' },
    { fraseEng: 'I like to learn', frasePtBr: 'Eu gosto de aprender' },
    { fraseEng: 'I watch TV', frasePtBr: 'Eu assisto TV' },
    { fraseEng: 'I eat bread', frasePtBr: 'Eu como pão' },
    { fraseEng: 'The book is on the table', frasePtBr: 'O livro está sobre a mesa' }
  ];
  
  public instrucao: string = 'Traduza a frase:';
  public resposta: string = '';
  
  public rodada: number = 0;
  public rodadaFrase: {fraseEng: string, frasePtBr: string} = this.frases[0];
  
  public progresso: number = 0;
  public tentativas: number = 3;
  
  public jogoTerminado: boolean = false;
  public mensagemFinal: string = '';
  
  constructor() {
    this.atualizaRodada();
  }
  
  ngOnInit() {}
  
  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }
  
  public verificarResposta(): void {
    // Verifica se a resposta está correta
    if (this.rodadaFrase.frasePtBr.toLowerCase() === this.resposta.toLowerCase()) {
      // Se a resposta estiver correta, avança para a próxima frase
      this.rodada++;
      this.progresso += 20; // Aumenta 20% da barra (100% / 5 frases)
      
      if (this.rodada === this.frases.length) {
        this.jogoTerminado = true;
        this.mensagemFinal = 'Parabéns! Você completou o jogo!';
        return;
      }
      
      this.atualizaRodada();
    } else {
      // Se a resposta estiver errada, diminui as tentativas
      this.tentativas--;
      
      if (this.tentativas === 0) {
        this.jogoTerminado = true;
        this.mensagemFinal = 'Fim de jogo! Você perdeu todas as tentativas.';
      }
    }
    
    // Limpa a resposta para a próxima frase
    this.resposta = '';
  }
  
  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
  }
  
  public reiniciarJogo(): void {
    this.jogoTerminado = false;
    this.rodada = 0;
    this.progresso = 0;
    this.tentativas = 3;
    this.atualizaRodada();
    this.resposta = '';
    this.mensagemFinal = '';
  }
}