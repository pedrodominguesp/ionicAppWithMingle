import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoNotificationService } from '@po-ui/ng-components';
import { PoPageLoginCustomField, PoPageLoginLiterals } from '@po-ui/ng-templates';
import { MingleService } from '@totvs/mingle';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private mingleService: MingleService, private route: Router,
    private poNotification: PoNotificationService) { }

  ngOnInit() {
  }

  loading: boolean = false;

  customField: PoPageLoginCustomField = {
    property: 'alias',
    placeholder: 'ALIAS'
  };
  welcomePt = "Bem vindo ao Aplicativo de Testes Mingle";
  customLiterals: PoPageLoginLiterals = {
    welcome: this.welcomePt
  };

  login(formData) {
    this.loading = true;
    this.mingleService.auth.login(formData.login,
      formData.password,
      formData.alias)
      .subscribe((dataLogin) => {
        console.log("dados do login", dataLogin);

        this.route.navigateByUrl('/tabs');
      }, (authError) => {
        console.log(authError);
        this.loading = false;
        this.poNotification.error('Falha na autenticação');
      });
  }

  translateWelcome(evento) {
    console.log(evento)
    switch (evento.language) {
      case 'en':
        this.customLiterals.welcome = "Welcome to the Mingle Test App"
        break;
      case 'es':
        this.customLiterals.welcome = "Bienvenido a la aplicación Mingle Test"
        break;
      case 'ru':
        this.customLiterals.welcome = "Добро пожаловать в тестовое приложение Mingle"
        break;
      case 'pt':
        this.customLiterals.welcome = this.welcomePt
        break;

      default:
        break;
    }
  }

}
