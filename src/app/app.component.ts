import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterPageComponent } from "./pages/counter-page/counter-page.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Darwin';
}
