import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopoComponent } from './topo/topo.component';
import { PainelComponent } from "./painel/painel.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopoComponent, PainelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
