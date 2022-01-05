import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx';
 
constructor(private store: Store<{app: IAppState}>) {}

  //counter = 0 ;
  //passo o alias do reducer acima
  counter$ = this.store.select('app');
}
