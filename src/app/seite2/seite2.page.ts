import { Component, OnInit } from '@angular/core';

import { NachrichtenService } from '../nachrichten.service';

@Component({
  selector: 'app-seite2',
  templateUrl: './seite2.page.html',
  styleUrls: ['./seite2.page.scss'],
})
export class Seite2Page implements OnInit {

  /** Array mit schlechten Nachrichten */
  public nachrichtenArray: string[] = [];

  /** 
   * Während dieses Flag `true` ist ist die Fortschrittsanzeige für das Laden sichtbar und
   * der Button zum Laden weiterer Nachrichten ist deaktiviert.
   */
  public ladespinnerAnzeigen = false;


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
   * Event-Handler für Button zum Laden von weiteren Nachrichten.
   */
  public onWeitereNachrichtenButton() {

    const wartezeitMillisekunden = 1500;

    this.ladespinnerAnzeigen = true;

    setTimeout( () => { 
      this.nachrichtenErzeugen(); 
      this.ladespinnerAnzeigen = false;
    }, wartezeitMillisekunden ) ;    
  }

  /**
   * Erzeugt weitere neue schlechte Nachrichten und fügt sie dem Member-Array hinzu.
   */
  private nachrichtenErzeugen() {

    const neueNachrichten = this.nachrichtenService.erzeugeNachrichten( 15 );
    this.nachrichtenArray.push( ... neueNachrichten ); // Spread-Operator
  }


}
