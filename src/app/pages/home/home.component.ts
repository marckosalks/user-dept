import { Component } from '@angular/core';
import { UseCardComponent } from "../../components/use-card/use-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UseCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
