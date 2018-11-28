// *.5 Import pagina2:
import { Pagina2Page } from './../pages/pagina2/pagina2';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AjustesProvider } from '../providers/ajustes/ajustes';

// *.28 Importar el storage y meterlo en @NgModule-imports:
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    // *.3 Referencia a página: 
    Pagina2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // *28.5:
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    // *4. Referencia a página:
    Pagina2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AjustesProvider
  ]
})
export class AppModule { }
