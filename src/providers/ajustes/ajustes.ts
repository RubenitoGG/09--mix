import { Platform } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TitleCasePipe } from '@angular/common';

/*
  Generated class for the AjustesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AjustesProvider {
  // *.31 Creamos una propiedad (formato json):
  listaAjustes = {
    mostrar_tutorial: true
  }

  // *.30 Inyectamos storage y Platform (imports)
  constructor(private plataforma: Platform, private storage: Storage) {
  }

  // *.29 Crear el almacenamiento:
  cargar_storage() {
    // if (this.plataforma.is("cordova")) { // Estamos en el móvil.

    // } else { // Estamos en el navegador.
    //   // localStorage viene en html5 y soportado en navegadores modernos.
    //   if (localStorage.getItem("ajustes")) {
    //     this.listaAjustes = JSON.parse(localStorage.getItem("ajustes")); // Pasamos string a Json
    //   }
    // }

    // *.37 Reformular todo como una promesa:
    let promesa = new Promise((resolv, reject) => {
      if (this.plataforma.is("cordova")) { // Estamos en el móvil.
        this.storage.ready().then(
          () => {
            this.storage.get("ajustes").then(
              a => {
                if (a) {
                  this.listaAjustes = a;
                }
                resolv();
              });
          }
        );
      } else { // Estamos en el navegador.
        // localStorage viene en html5 y soportado en navegadores modernos.
        if (localStorage.getItem("ajustes")) {
          this.listaAjustes = JSON.parse(localStorage.getItem("ajustes")); // Pasamos string a Json
        }
        resolv();
      }
    });
    return promesa;
  }

  // *.32 Creamos el método que guarda un valor en el móvil/navegador:
  guardar_storage() {
    if (this.plataforma.is("cordova")) {
      // *.39 Si estamos en el movil:
      this.storage.ready().then(
        () => {
          this.storage.set("ajustes", this.listaAjustes)
        }
      )

    } else {
      localStorage.setItem("ajustes", JSON.stringify(this.listaAjustes)); // Aplanamos el JSON.
    }
  }
}
