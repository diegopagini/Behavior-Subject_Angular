import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona, SharingService } from 'src/app/core/services/sharing.service';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss'],
})
export class LazyComponent implements OnInit {
  public data$: Observable<Persona>;

  constructor(private sharingService: SharingService) {
    this.data$ = sharingService.sharingObservable;
  }

  ngOnInit(): void {}
}
