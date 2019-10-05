import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {

  constructor() {
    this.countThree()
    .then( (result) => console.log('Finished', result))
    .catch( (error) => console.log('Error', error));
  }

  ngOnInit() {
  }

  countThree(): Promise<boolean> {
    return new Promise( (resolve, reject) => {
      let counter = 0;
      const interval = setInterval( () => {
        counter++;
        console.log(counter);
        if (counter === 3) {
          resolve(true);
          clearInterval(interval);
        }
      }, 1000);
    });
  }

}
