import { Lugar } from "./lugar";
import { Vehiculo } from "./vehiculo";

export class Ticket{

    horaIngreso:Date | undefined;
    horaSalida:Date | undefined;
    precio:number=0.0;
    lugar!:Lugar;
    vehiculo!:Vehiculo;

}