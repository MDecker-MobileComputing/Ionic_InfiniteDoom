import { Injectable } from '@angular/core';


/**
 * Klasse für Service, der zufällige schlechte Nachrichten erzeugt.
 */
@Injectable({
  providedIn: 'root'
})
export class NachrichtenService {

  /**
   * Erzeugt eine oder mehrere zufällige schlechtenNachrichten.
   *
   * @param anzahl Anzahl zu erzeugender Nachrichten, Defaultwert: 1
   *
   * @returns Array mit zufällig erzeugten Nachrichten.
   *          Die Nachrichten entsprechen dem Muster ">Ereignis< in >Ort<".
   */
  public erzeugeNachrichten( anzahl: number = 1 ): string[] {

    const ergebnisArray: string[] = [];

    for ( let i = 0; i < anzahl; i++ ) {

      const index1          = Math.floor( Math.random() * this.ereignisArray.length );
      const zufallsEreignis = this.ereignisArray[ index1 ];

      const index2        = Math.floor( Math.random() * this.ortArray.length );
      const zufallsOrt    = this.ortArray[ index2 ];

      const nachricht = `${zufallsEreignis} in ${zufallsOrt}`;

      ergebnisArray.push( nachricht );
    }

    return ergebnisArray;
  }


  /** Schlimme Ereignisse in alphabetischer Reihenfolge */
  readonly ereignisArray = [ "Amoklauf",
                             "Ausschreitungen",
                             "Bankrott",
                             "Busunfall",
                             "Brandstiftung",
                             "Chemie-Unfall",
                             "Cyberangriff",
                             "Doping-Skandal",
                             "Dürre",
                             "Enführung",
                             "Erdbeben",
                             "Erdrutsch",
                             "Erpressung",
                             "Gewaltserie",
                             "Großbrand",
                             "Hitzewelle",
                             "Korruption",
                             "Lawine",
                             "Massenkarambolage",
                             "Mord",
                             "Ölkatastrophe",
                             "Regierungskrise",
                             "Rohstoffknappheit",
                             "Schiffskollision",
                             "Skandal",
                             "Tierseuche",
                             "Unwetter",
                             "Überfall",
                             "Überschwemmung",
                             "Wahlmanipulation",
                             "Wirtschaftskrise"
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
                        "Andorra",
                        "Belgien",
                        "Bosnien und Herzegowina",
                        "Bulgarien",
                        "Dänemark",
                        "Estland",
                        "Finnland",
                        "Frankreich",
                        "Griechenland",
                        "Irland",
                        "Island",
                        "Italien",
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
                        "Polen",
                        "Portugal",
                        "Rumänien",
                        "Russland",
                        "San Marino",
                        "Schweden",
                        "Schweiz",
                        "Serbien",
                        "Slowakei",
                        "Slowenien",
                        "Spanien",
                        "Tschechien",
                        "Türkei",
                        "Ukraine",
                        "Ungarn",
                        "Vatikanstadt",
                        "Vereinigtes Königreich",
                        "Weißrussland"
                      ];


}
