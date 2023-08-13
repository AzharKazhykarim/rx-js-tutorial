import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { customIncrementAction } from '../state/counter.actions';

@Component({
  selector: 'app-custom-counter-output',
  templateUrl: './custom-counter-output.component.html',
  styleUrls: ['./custom-counter-output.component.css']
})
export class CustomCounterOutputComponent {
  number: number;
  constructor(private store: Store<CounterState>){

  }
  onAdd(){
   this.store.dispatch(customIncrementAction({value: +this.number}))
  }
}
