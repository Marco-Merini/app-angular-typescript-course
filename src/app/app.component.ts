// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopoComponent } from './topo/topo.component';
import { PainelComponent } from './painel/painel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TopoComponent, PainelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}