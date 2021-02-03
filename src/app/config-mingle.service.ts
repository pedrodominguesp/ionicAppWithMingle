import { Injectable } from '@angular/core';

import { MingleService, Configuration } from '@totvs/mingle'

@Injectable({
  providedIn: 'root'
})
export class ConfigMingleService {

  constructor(private mingleService: MingleService) { }

  mingleConfiguration(): Promise<any> {
    return new Promise((resolve, reject) => {
      console.log("Mingle Service Configuration called");
      const config = new Configuration();
      config.modules.web = false;
      config.environment = 'DEV';
      config.modules.usage_metrics = true;
      config.modules.gateway = true;
      config.modules.push_notification = true;
      config.server = 'https://hom-mingle.totvs.com.br/api';
      config.app_identifier = '5e6b96bb20e1554a258b51ea';

      this.mingleService.setConfiguration(config);

      this.mingleService.init()
        .then(init => {
          resolve('Mingle Service Init');
        }).catch(error => {
          console.log("error", error);
          reject(error);
        });

      console.log("Mingle Service configuration completed");

    });
  }
}
