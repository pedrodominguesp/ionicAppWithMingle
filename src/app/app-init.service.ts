import { Injectable } from '@angular/core';
import { ConfigMingleService } from './config-mingle.service';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  constructor(private configService: ConfigMingleService ) { }

  applyInitConfigMingle() {
    return this.configService.mingleConfiguration();
  }
}
