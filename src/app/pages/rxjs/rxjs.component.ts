import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
    this.subscription = this.returnObservable()/* .pipe(
      retry(2)
    ) */.subscribe(
      num => {
      console.log('Subs', num);
      },
      error => {
      console.error('Error', error);
      },
      () => {
      console.log('Complete');
      }
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('Page Destroyed');
    this.subscription.unsubscribe();
  }

  returnObservable(): Observable<any> {
    return new Observable( (observer: Subscriber<any>) => {
      let counter = 0;
      const interval = setInterval(() => {
        counter++;

        const exit = {
          value: counter
        };
        observer.next(exit);

        /* if (counter === 3) {
          clearInterval(interval);
          observer.complete();
        } */
        /* if (counter === 2) {
          observer.error('ErrorForzado');
        } */
      }, 1000);
    }).pipe(
      map(response => response.value),
      filter( (value, index) => {
        if ( (value % 2 === 1)) {
          return true;
        } else {
          return false;
        }
      })
    );

  }

}
