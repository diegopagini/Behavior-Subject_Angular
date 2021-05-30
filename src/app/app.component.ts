import { Component } from '@angular/core';
import { SharingService } from './core/services/sharing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'behaviorSubject';
  constructor(sharingSErvice: SharingService) {
    sharingSErvice.sharingObservableData = { name: 'La información cambió' };
  }
}
