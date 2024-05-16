import { Component, OnInit } from '@angular/core';

import { InfiniteScrollCustomEvent } from '@ionic/angular';

import { NachrichtenService } from '../nachrichten.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  /** Array mit schlechten Nachrichten */
  public nachrichtenArray: string[] = [];


  /**
   * Konstruktor für Dependency Injection.
   *
   * @param nachrichtenService Service für Erzeugung von schlechten Nachrichten
   */
  constructor( private nachrichtenService: NachrichtenService ) {}


  /**
   * Lifecycle-Methode, die beim Initialisieren der Seite aufgerufen wird;
   * ruft Methode zum Erzeugen von schlechten Nachrichten auf.
   */
  ngOnInit() {

    this.nachrichtenErzeugen();
  }


  /**
   * Erzeugt weitere neue schlechte Nachrichten und fügt sie dem Member-Array hinzu
   */
  private nachrichtenErzeugen() {

    const neueNachrichten = this.nachrichtenService.erzeugeNachrichten( 50 );
    this.nachrichtenArray.push( ... neueNachrichten ); // Spread-Operator
  }


  /**
   * Event
   * @param event
   */
  onIonInfinite( event: InfiniteScrollCustomEvent ) {

    this.nachrichtenErzeugen();
    setTimeout(() => { event.target.complete(); }, 500);
  }

}
