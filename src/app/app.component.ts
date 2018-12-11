import { AjustesProvider } from './../providers/ajustes/ajustes';
import { IntroduccionPage } from './../pages/introduccion/introduccion';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = HomePage;
  // *.23 Mostrar temporalmente la página de introducción:
  //rootPage:any = "IntroduccionPage";

  // *.35 Dejar el rootPage sin definir(any):
  rootPage: any;

  constructor(private platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private ajusteProvider: AjustesProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      // *.36 Cargar introduccion o home en función de lo que tenga en memoria del móvil o navegador:
      // Acordarse de inyectar AjustesProvider.

      // this.ajusteProvider.cargar_storage();
      // if(this.ajusteProvider.listaAjustes.mostrar_tutorial){
      //   this.rootPage= "IntroduccionPage";
      // }else{
      //   this.rootPage = HomePage;
      // }

      // *.38 Hacemos lo mismo pero suscribiendo con un then a cargar_storage():
      this.ajusteProvider.cargar_storage().then(
        () => {
          if (this.ajusteProvider.listaAjustes.mostrar_tutorial) {
            this.rootPage = "IntroduccionPage";
          } else {
            this.rootPage = HomePage;
          }
        }
      )
      
      statusBar.styleDefault();
      splashScreen.hide();

      // *.40 Operaciones de pausa y resume:
      this.platform.pause.subscribe(() => {
        console.log("la app se va a pausar")
      });

      this.platform.resume.subscribe(() => {
        console.log("la app se va a reanudar")
      });

    });
  }
}

