import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estimation-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estimation-card.component.html',
  styleUrls: ['./estimation-card.component.css']
})
export class EstimationCardComponent {
  @Input() value!: number;
  @Input() selected = false;
  @Output() cardSelected = new EventEmitter<number>();

  onSelect() {
    this.cardSelected.emit(this.value);
  }
}