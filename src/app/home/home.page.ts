import { Component, OnInit } from '@angular/core';

import { InfiniteScrollCustomEvent } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public nachrichtenArray: string[] = [];

  ngOnInit() {

    this.nachrichtenErzeugen();
  }

  private nachrichtenErzeugen() {

    const anzahl = this.nachrichtenArray.length + 1;

    for (let i = 0; i < 15; i++) {
      const nachricht = `Schlechte Nachricht ${anzahl + i}`;
      this.nachrichtenArray.push( nachricht );
    }
  }

  onIonInfinite( event: InfiniteScrollCustomEvent ) {

    this.nachrichtenErzeugen();
    setTimeout(() => { event.target.complete(); }, 500);
  }

}
