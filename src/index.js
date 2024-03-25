//Se importa la clase Cliente
import { Cliente } from './cliente.js'; 

// Crea dos instancias de Cliente: c1 y c2
let c1 = new Cliente('Natalia')
let c2 = new Cliente('Guillermo')

//Asigna valores para el montoBrutoAnual y deducciones para c1
c1.impuesto.montoBrutoAnual = 1000;
c1.impuesto.deducciones = 200;

//Asigna valores para el montoBrutoAnual y deducciones para c2
c2.impuesto.montoBrutoAnual = 3000;
c2.impuesto.deducciones = 400;

//Imprime en consola el objeto e impuesto
console.log(c1)
console.log(c1.calcularImpuesto())
console.log(c2)
console.log(c2.calcularImpuesto())