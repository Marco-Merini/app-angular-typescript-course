import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { TopoComponent } from './app/topo/topo.component';
import { PainelComponent } from './app/painel/painel.component';
import { TentativasComponent } from './app/tentativas/tentativas.component';
import { ProgressoComponent } from './app/progresso/progresso.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));