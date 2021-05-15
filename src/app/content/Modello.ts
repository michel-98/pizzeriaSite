
export class VettoreTesti {
    header: string;
    testoHeader: string;
}

export class Elementi {
    elemento: string;
    prezzo: string;
    moneta: string;
    ingredienti: string;
    attributi: string[];
}

export class ElementiMenu {
    titolo: string;
    elementi: Elementi[];
}

export class Modello {
    nomePizzeria: string;
    sottoTitolo: string;
    vettoreTesti: VettoreTesti[];
    titoloMenu: string;
    elementiMenu: ElementiMenu[];
}
