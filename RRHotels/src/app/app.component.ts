import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    public appPages = [
        {
            title: 'Inicio',
            url: '/home',
            icon: 'clipboard'
        },
        {
            title: 'Búsqueda',
            url: '/search',
            icon: 'search'
        },
        {
            title: 'Perfil',
            url: '/profile',
            icon: 'person'
        }
    ];

    public uappPages = [
        {
            title: 'Login',
            url: '/home',
            icon: 'home'
        }
    ]

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    loggedin() {
        if (localStorage.getItem('token')) return true;
        return false;
    }
    logout() {
        localStorage.removeItem('token')
        location.href = '/'
    }
}
