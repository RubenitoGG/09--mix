import { Pagina3PageModule } from './../pagina3/pagina3.module';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the Pagina2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  // *.42 Import e inject AlertController:
  // *.44 Import e inject LoadingController:
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private loadingCtrl:LoadingController) {
  }

  // *.10 Crear método que atiende al evento:
  ir_pagina3() {
    // *.11 Invocado el nombre que aparece en pagina3.module.ts
    //this.navCtrl.push("Pagina3Page");

    // *.13 Otra forma de refenrenciarla por el name de @IonicPage en pagina3.ts
    this.navCtrl.push("mi-pagina3");
  }

  ir_pagina4() {
    this.navCtrl.push("mi-pagina4");
  }

  // *.15 Ver en consola la ejecución del ciclo de vida de un página:
  ionViewDidLoad() {
    console.log("ionViewDidLoad");
  }

  ionViewWillEnter() {
    console.log("ionViewWillEnter");
  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter");
  }

  ionViewWillLeave() {
    console.log("ionViewWillLeave");
  }

  ionViewDidLeave() {
    console.log("ionViewDidLeave");
  }

  ionViewWillUnload() {
    console.log("ionViewWillUnload");
  }

  ionViewCanEnter_antiguo() {
    console.log("ionViewCanEnter");

    // *.16 Entrar de forna aleatoria:
    let numero = Math.round(Math.random() * 10);
    console.log(numero);
    if (numero >= 3)
      return true;
    else
      return false;
  }

  // *.41 Renombrar el ionViewCanEnter() anterior:
  ionViewCanEnter() {
    console.log("ionViewCanEnter");

    let promesa = new Promise((resolv, reject) => {
      // *.43 Copiar el esquema de la DOCU: https://ionicframework.com/docs/components/#alert-confirm
      let confirmar = this.alertCtrl.create({
        title: 'Seguro?',
        message: 'Quieres entrar?',
        buttons: [
          {
            text: 'Cancelar',
            handler: () => resolv(false)
          },
          {
            text: 'Aceptar',
            handler: () => resolv(true)
          }
        ]
      });
      confirmar.present();
    });

    return promesa;
  }

  ionViewCanLeave_antiguo() {
    console.log("ionViewCanLeave");
    // *.17 Dejamos salir después de 2 segundos:
    let promesa = new Promise((resolv, reject) => {
      setTimeout(() => {
        resolv(true);
      }, 2000);
    });
    return promesa;

    // *.18 Sintaxis alternativa return new promesa....
  }

  // *.44 Renombrar el ionViewCanLeave() anterior:
  ionViewCanLeave() {
    console.log("ionViewCanLeave");

    let loading = this.loadingCtrl.create({
      content: "Espere por favor..."
    })
    loading.present();

    let promesa = new Promise((resolv, reject) => {
      setTimeout(() => {
        resolv(true);
        loading.dismiss();
      }, 5000);
    });
    return promesa;
  }

}
