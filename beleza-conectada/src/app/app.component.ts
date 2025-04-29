import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { RouterModule } from '@angular/router'; // ✅ IMPORTAR ISSO

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent], // ✅ ADICIONAR AQUI
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
