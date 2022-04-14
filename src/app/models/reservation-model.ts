export class ReservationModel{
    constructor(
        public vehiculo: string,
        public usuario: string,
        public dpi: string,
        public Fecha_Alquiler: string,
        public Fecha_Retorno: string,
        public Monto_Apagar: string,
    ){
    }

}