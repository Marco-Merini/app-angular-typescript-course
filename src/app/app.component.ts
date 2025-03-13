// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopoComponent } from './topo/topo.component';
import { PainelComponent } from './painel/painel.component';
import { TentativasComponent } from "./tentativas/tentativas.component";
import { ProgressoComponent } from "./progresso/progresso.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TopoComponent, PainelComponent, TentativasComponent, ProgressoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}