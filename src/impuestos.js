//Clase constructora para Impuesto//
//Se exporta la clase
export class Impuesto { 
    constructor(montoBrutoAnual, deducciones) { 
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }
    //Getter para montoBrutoAnual
    get montoBrutoAnual() {
        return this._montoBrutoAnual;
    }
    //Setter para montoBrutoAnual
    set montoBrutoAnual(nuevomontoBrutoAnual) {
        this._montoBrutoAnual = nuevomontoBrutoAnual;
    }
    //Getter para deducciones
    get deducciones() {
        return this._deducciones;
    }
    //Setter para deducciones
    set deducciones(nuevoDeducciones) {
        this._deducciones = nuevoDeducciones;
    }
}