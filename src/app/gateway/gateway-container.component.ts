import { Component, OnInit, Input } from '@angular/core';
import { MingleService } from '@totvs/mingle';

@Component({
  selector: 'app-gateway-container',
  templateUrl: './gateway-container.component.html',
  styleUrls: ['./gateway-container.component.scss'],
})
export class GatewayContainerComponent implements OnInit {
  gatewayData: String;
  constructor(private mingleService: MingleService) { }

  ngOnInit(): void {
  }
  isHideLoading = true;
  
  getClients() {

    this.isHideLoading = false;

    this.mingleService.gateway.get('clients').subscribe(response => {
      console.log(response)
      this.gatewayData = JSON.stringify(response);
      this.isHideLoading = true;
    }, error => {
      this.gatewayData = error;
      this.isHideLoading = true;
    });
  }


}
