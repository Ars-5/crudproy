import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"crudrfbv2-app","appId":"1:739370718848:web:c891977cfdf62793267865","storageBucket":"crudrfbv2-app.appspot.com","locationId":"us-central","apiKey":"AIzaSyDS6ng6f69n1V29CNvX7RXPOmUPdx0SXaY","authDomain":"crudrfbv2-app.firebaseapp.com","messagingSenderId":"739370718848"}))), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideStorage(() => getStorage()))]
};
