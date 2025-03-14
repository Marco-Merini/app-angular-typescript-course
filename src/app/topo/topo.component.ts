import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topo.component.html',
  styleUrl: './topo.component.css'
})
export class TopoComponent {
  public titulo: string = 'Aprendendo Inglês';
}