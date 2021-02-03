import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PoModule, PoFieldModule } from '@po-ui/ng-components';

import { GatewayContainerComponent } from './gateway-container.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, PoModule, PoFieldModule],
  declarations: [GatewayContainerComponent],
  exports: [GatewayContainerComponent]
})
export class GatewayContainerComponentModule {}
