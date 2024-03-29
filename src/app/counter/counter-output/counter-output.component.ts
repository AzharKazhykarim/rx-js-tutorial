import { Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CounterState } from '../state/counter.state';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs-compat';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit {
  counter$: Observable<{ counter: number }>;
  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit() {
    this.counter$ = this.store.select('counter');
  }

  
}
