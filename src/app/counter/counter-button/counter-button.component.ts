import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import {
  decrementAction,
  incrementAction,
  resetAction,
} from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css'],
})
export class CounterButtonComponent {
  constructor(private store: Store<{ counter: CounterState}>) {}

  onReset() {
    this.store.dispatch(resetAction());
  }

  onDecrement() {
    this.store.dispatch(decrementAction());
  }
  
  onIncrement() {
    this.store.dispatch(incrementAction());
  }
}
