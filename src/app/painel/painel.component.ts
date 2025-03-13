import { Component, OnInit } from '@angular/core';
import { ProgressoComponent } from "../progresso/progresso.component";
import { TentativasComponent } from "../tentativas/tentativas.component";

@Component({
  selector: 'app-painel',
  imports: [ProgressoComponent, TentativasComponent],
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.css'
})
export class PainelComponent implements OnInit {
  constructor() {

  }

  ngOnInit() {
    
  }

}
