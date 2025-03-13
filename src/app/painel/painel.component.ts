// painel.component.ts
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
  constructor() {}

  ngOnInit() {}
}