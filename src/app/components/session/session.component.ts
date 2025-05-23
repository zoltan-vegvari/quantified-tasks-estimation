import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EstimationCardComponent } from '../estimation-card/estimation-card.component';

@Component({
  selector: 'app-session',
  standalone: true,
  imports: [CommonModule, FormsModule, EstimationCardComponent],
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  sessionId: string = '';
  userName: string = '';
  nameSubmitted: boolean = false;
  workItems: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sessionId = this.route.snapshot.paramMap.get('id') || '';
  }

  submitName() {
    if (this.userName.trim()) {
      this.nameSubmitted = true;
      // Here we would typically connect to the session
      // and load existing work items
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