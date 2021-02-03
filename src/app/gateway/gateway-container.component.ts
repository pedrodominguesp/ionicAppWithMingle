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
    const options = { headers: { header_teste: `123456` }, body: { teste: 123 } };

    this.mingleService.gateway.get('clients', options).subscribe(response => {
      this.gatewayData = JSON.stringify(response);
      this.isHideLoading = true;
    }, error => {
      this.gatewayData = error;
      this.isHideLoading = true;
    });
  }


}
