import { AjustesProvider } from './../../providers/ajustes/ajustes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IntroduccionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
  //{name: "introPage"}
)
@Component({
  selector: 'page-introduccion',
  templateUrl: 'introduccion.html',
})
export class IntroduccionPage {
  // *.20 Creamos un array estructura para el slice:
  // *.21 Creamos/copiamos la carpeta de img en assets:
  slides:any[] = [
    {
      title: "Bienvenido!!!",
      description: "Esta <b>aplicación</b> nos ayudará a comprender muchos temas interesantes en ionic!",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "¿Qué es ionic?",
      description: "<b>Ionic Framework</b> es un SDK abierto que le permite a los desarrolladores crear aplicaciones móviles de alta calidad con el conocimiento de JavaScript, CSS y HTML.",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "¿Que hace esta app?",
      description: "Esta aplicación nos ayudará a conocer más sobre el ciclo de vida de un componente y el storage!",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];

  // *.33 Inyecto el servicio creado:
  constructor(public navCtrl: NavController, public navParams: NavParams, private ajusteProvider:AjustesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroduccionPage');
  }

  // *.25 Crear evento de click:
  // *.26 Instalar storage con 'ionic cordova plugin add cordova-sqlite-storage':
  // *.27 Generar un servicio (provider) con 'ionic g provider ajustes':
  saltar_tutorial(){
    // *.34
    this.ajusteProvider.listaAjustes.mostrar_tutorial = false;
    this.ajusteProvider.guardar_storage();
  }
}
