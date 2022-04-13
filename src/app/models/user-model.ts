export class UserModel{
    constructor(
        public usuario: string,
        public password: string,
        public nombre: string,
        public apellido: string,
        public telefono: string,
        public dpi: string,
        public correo: string,
        public fechaDeNacimiento: string,
        public sexo: string,
    ){
    }
}