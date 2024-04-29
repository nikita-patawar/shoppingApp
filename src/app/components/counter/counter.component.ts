import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { Appstate } from '../../states/app.states';
import { Store } from '@ngrx/store';
import { selectCount } from '../../states/counter/counter.selectors';
import { AsyncPipe } from '@angular/common';
import { decrement, increment, reset } from '../../states/counter/counter.action';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [MatButtonModule,AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  count$:Observable<number>;
  constructor(private store: Store<Appstate>){
    this.count$ = this.store.select(selectCount)
    
  }

  increment(){
   this.store.dispatch(increment())
  }

  decrement(){
    this.store.dispatch(decrement())
    
  }

  reset(){
    this.store.dispatch(reset())

  }

}
