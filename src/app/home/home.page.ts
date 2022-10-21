import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  num: number;
  list1 :number[] = [];
  suma: number = 0;
  media: number = 0;
  restart: boolean = false;

  
  constructor(private alertController: AlertController) {
  }

  numAleatorio(a,b){
    return Math.round(Math.random()*(b-a)+parseInt(a));
  }

  async presentAlert(cabecera,mensaje,instruccion,boton) {
    const alert = await this.alertController.create({
      header: cabecera,
      subHeader: mensaje,
      message: instruccion,
      buttons: [boton],
    });

    await alert.present();
  }

  introducirNumero(){
    if(this.num>=0 && Number.isInteger(this.num)){
      this.list1.push(this.num);
      console.log("El array contine los siguientes valores: "+this.list1);
    }else{
      this.presentAlert('Prueba otra vez...','El valor introducido no es válido','Debes introducir un valor mayor o igual a 0','Volver a intentar');
    }
  }

  calcularMedia(){
    for(var i=0;i<this.list1.length;i++){
      this.suma = this.suma+this.list1[i];
    }
    this.media = this.suma/this.list1.length;
    console.log("La media es "+this.media);
    this.restart = true;
  }

  reinicia(){
    // Reiniciamos las variables
    this.num = null;
    this.list1 = [];
    this.suma = 0;
    this.media = 0;
    this.restart = false;
    console.log("Partida reiniciada correctamente");
  }

}
