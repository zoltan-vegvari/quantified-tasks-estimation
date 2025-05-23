import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstimationCardComponent } from '../estimation-card/estimation-card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, EstimationCardComponent, FormsModule],
  templateUrl: './home.component.html',
  styles: [`
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    .session-creation {
      margin: 20px 0;
    }
    .create-btn {
      padding: 12px 24px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .create-btn:hover {
      background-color: #0056b3;
    }
    .shareable-link {
      margin: 20px 0;
      padding: 15px;
      background-color: #f8f9fa;
      border-radius: 4px;
    }
    .link-container {
      display: flex;
      gap: 10px;
    }
    .link-input {
      flex: 1;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    .copy-btn {
      padding: 8px 16px;
      background-color: #28a745;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .work-item-input {
      margin: 20px 0;
      display: flex;
      gap: 10px;
    }
    .title-input {
      flex: 1;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    .add-btn {
      padding: 8px 16px;
      background-color: #28a745;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .add-btn:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
    .work-item {
      margin: 20px 0;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    .estimation-section {
      margin: 15px 0;
    }
    .cards {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
  `]
})
export class HomeComponent {
  sessionCreated = false;
  shareableLink = '';
  workItems: any[] = [];
  newItemTitle = '';

  createSession() {
    this.sessionCreated = true;
    this.shareableLink = `${window.location.origin}/session/${this.generateSessionId()}`;
  }

  generateSessionId(): string {
    return Math.random().toString(36).substring(2, 15);
  }

  copyLink(input: HTMLInputElement) {
    input.select();
    document.execCommand('copy');
  }

  addWorkItem() {
    if (this.newItemTitle) {
      this.workItems.push({
        id: Date.now().toString(),
        title: this.newItemTitle,
        distance: 0,
        friction: 0,
        relativity: 0
      });
      this.newItemTitle = '';
    }
  }

  updateDistance(item: any, value: number) {
    item.distance = value;
  }

  updateFriction(item: any, value: number) {
    item.friction = value;
  }

  updateRelativity(item: any, value: number) {
    item.relativity = value;
  }
}