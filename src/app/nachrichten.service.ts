import { Injectable } from '@angular/core';


/**
 * Service, der zufällige schlechte Nachrichten erzeugt.
 */
@Injectable({
  providedIn: 'root'
})
export class NachrichtenService {

  /**
   * Konstruktor, schreibt Anzahl der Ereignisse und Orte auf die Konsole.
   */
  constructor() {

    console.log( `Anzahl Ereignisse: ${this.ereignisArray.length}` );
    console.log( `Anzahl Orte      : ${this.ortArray.length}`      );
  }


  /**
   * Erzeugt eine oder mehrere zufällige Nachrichten.
   *
   * @param anzahl Anzahl zu erzeugender Nachrichten, Defaultwert: 1
   *
   * @returns Array mit zufällig erzeugten Nachrichten.
   *          Die Nachrichten entsprechen dem Muster ">Ereignis< in >Ort<",
   *          z.B. "Alterarmut in Bayern".
   */
  public erzeugeNachrichten( anzahl: number = 1 ): string[] {

    const ergebnisArray: string[] = [];

    for ( let i = 0; i < anzahl; i++ ) {

      const index1          = Math.floor( Math.random() * this.ereignisArray.length );
      const zufallsEreignis = this.ereignisArray[ index1 ];

      const index2     = Math.floor( Math.random() * this.ortArray.length );
      const zufallsOrt = this.ortArray[ index2 ];

      const nachricht = `${zufallsEreignis} in ${zufallsOrt}`;

      ergebnisArray.push( nachricht );
    }

    console.log( `${anzahl} Nachrichten erzeugt:`, anzahl );

    return ergebnisArray;
  }


  /** Schlimme Ereignisse in alphabetischer Reihenfolge */
  readonly ereignisArray = [ "Altersarmut",
                             "Amoklauf",
                             "Ausgangs-Sperre",
                             "Ärztemangel",
                             "Ausschreitungen",
                             "Bankrott",
                             "Bildungsnotstand",
                             "Busunfall",
                             "Brandstiftung",
                             "Chemie-Unfall",
                             "Cyberangriff",
                             "Doping-Skandal",
                             "Drogenkriminalität",
                             "Dürre",
                             "Entführung",
                             "Erdbeben",
                             "Erdrutsch",
                             "Erpressung",
                             "Explosion",
                             "Finanzkrise",
                             "Gasexplosion",
                             "Gewaltserie",
                             "Geflügerpest",
                             "Großbrand",
                             "Großschadenslage",
                             "Hausbesetzung",
                             "Handwerkermangel",
                             "Hitzewelle",
                             "Korruption",
                             "Lawine",
                             "Lebensmittelskandal",
                             "Lehrermangel",
                             "Massenkarambolage",
                             "Massenpanik",
                             "Mord",
                             "Ölkatastrophe",
                             "Regierungskrise",
                             "Rinderwahn",
                             "Rohstoffknappheit",
                             "Schiffskollision",
                             "Skandal",
                             "Smog-Alarm",
                             "Studierendenproteste",
                             "Stromausfall",
                             "Tierseuche",
                             "Unwetter",
                             "Überfall",
                             "Überschwemmung",
                             "Wahlmanipulation",
                             "Waldbrand",
                             "Waldsterben",
                             "Wirtschaftskrise",
                             "Vulkanausbruch"
                          ];


  /** Array mit verschiedenen Orten; zuerst die deutschen Bundesländer, dann Nationen. */
  readonly ortArray = [ "Baden-Württemberg",
                        "Bayern",
                        "Bremen",
                        "Berlin",
                        "Brandenburg",
                        "Hamburg",
                        "Hessen",
                        "Mecklenburg-Vorpommern",
                        "Niedersachsen",
                        "Nordrhein-Westfalen",
                        "Rheinland-Pfalz",
                        "Saarland",
                        "Sachsen",
                        "Sachsen-Anhalt",
                        "Schleswig-Holstein",
                        "Thüringen",
                        "Albanien", // ab jetzt Nationen
                        "Amerika",
                        "Andorra",
                        "Argentinien",
                        "Armenien",
                        "Belgien",
                        "Bosnien und Herzegowina",
                        "Bulgarien",
                        "China",
                        "Dänemark",
                        "Estland",
                        "Finnland",
                        "Frankreich",
                        "Griechenland",
                        "Irland",
                        "Island",
                        "Italien",
                        "Japan",
                        "Kanada",
                        "Kosovo",
                        "Kroatien",
                        "Lettland",
                        "Liechtenstein",
                        "Litauen",
                        "Luxemburg",
                        "Malta",
                        "Mazedonien",
                        "Moldawien",
                        "Monaco",
                        "Montenegro",
                        "Niederlande",
                        "Norwegen",
                        "Österreich",
                        "Panama",
                        "Polen",
                        "Portugal",
                        "Rumänien",
                        "Russland",
                        "San Marino",
                        "Schweden",
                        "Schweiz",
                        "Serbien",
                        "Singapur",
                        "Slowakei",
                        "Slowenien",
                        "Spanien",
                        "Taiwan",
                        "Tschechien",
                        "Türkei",
                        "Ukraine",
                        "Ungarn",
                        "Vatikanstadt",
                        "Vereinigtes Königreich",
                        "Weißrussland"
                      ];
}
