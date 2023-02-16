import { Component, Input } from '@angular/core';
import { Nano } from '../Nano';

@Component({
  selector: 'app-nani',
  templateUrl: './nani.component.html',
  styleUrls: ['./nani.component.css']
})
export class NaniComponent {
  @Input() n:Nano;
}
