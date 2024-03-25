//Se importa la clase Impuesto
import { Impuesto } from './impuestos.js'; 
//Clase constructora para Cliente//
//Se exporta la clase
export class Cliente { 
    constructor(nombre) {
        this._nombre = nombre
        this._impuesto = new Impuesto()
    }
    //Getter para nombre
    get nombre() {
        return this._nombre
    }
    //Setter para nombre
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }
    //Getter para impuesto
    get impuesto() {
        return this._impuesto
    }
    //Setter para impuesto
    set impuesto(nuevoImpuesto) {
        this._impuesto = nuevoImpuesto
    }
    //Método para calcular Impuesto
    calcularImpuesto() {
        return (this._impuesto.montoBrutoAnual - this._impuesto.deducciones) * 0.21;
    }
}