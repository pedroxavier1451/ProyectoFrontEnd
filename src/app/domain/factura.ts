import { Ticket } from "./ticket";

export class Factura{

    idFactura: number=0;
    codigo:string='';
    fecha:Date | undefined;
    total: number=0.0;
    ticket:Ticket = new Ticket();

}