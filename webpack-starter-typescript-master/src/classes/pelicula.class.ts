export class Pelicula{
    //Valores
    constructor(
        public nombre:string,
        public director:string,
        public estreno:Date,
        public duracion:number,
        public familiar:boolean
    ){
        
    }
    //Convirtiendo la duracion a minutos
    converttoMinutes():string{ 
        let hour = Math.floor(this.duracion/ 60);  
        let min = this.duracion % 60;
        return hour + ":" + min;      
    }
    devuelvefoto():string{
       let urlImg ='assets/larocacartel.jpg';
       return urlImg;
    }
    //Validando y devolviendo Pelicula con sus atributos.
    presentaFilm(){
        if(this.familiar){
            console.log( ` ${this.nombre} fue dirigida por ${this.director} tiene una duración de ${this.converttoMinutes()}, se entrenó en el año ${this.estreno.getFullYear()+1} es apta para toda la familia`);
            document.body.innerHTML+="<h1>"+`${this.nombre} fue dirigida por ${this.director} tiene una duración de ${this.converttoMinutes()}, se entrenó en el año ${this.estreno.getFullYear()+1} es apta para toda la familia  ${this.devuelvefoto()}`;
         }
         else{
            console.log( `${this.nombre} fue dirigida por ${this.director} tiene una duración de ${this.converttoMinutes()}, se entrenó en el año ${this.estreno.getFullYear()+1} y es para mayores de 18 años`);  
            document.body.innerHTML+="<h1>"+`${this.nombre} fue dirigida por ${this.director} tiene una duración de ${this.converttoMinutes()}, se entrenó en el año ${this.estreno.getFullYear()+1} y es para mayores de 18 años`;
         }
    }

}