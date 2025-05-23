import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estimation-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="card" 
      [class.selected]="selected"
      (click)="onSelect()"
    >
      <div class="value">{{ value }}</div>
    </div>
  `,
  styles: [`
    .card {
      width: 80px;
      height: 120px;
      border: 2px solid #ccc;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin: 8px;
      transition: all 0.2s;
    }
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    .card.selected {
      border-color: #007bff;
      background-color: #e7f1ff;
    }
    .value {
      font-size: 24px;
      font-weight: bold;
    }
  `]
})
export class EstimationCardComponent {
  @Input() value!: number;
  @Input() selected = false;
  @Output() cardSelected = new EventEmitter<number>();

  onSelect() {
    this.cardSelected.emit(this.value);
  }
}