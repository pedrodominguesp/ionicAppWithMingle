import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MingleService } from '@totvs/mingle';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  set_alias: string;
  sessionInfo: any;
  constructor(private mingleService: MingleService,  private route: Router) { }

  ngOnInit(): void {
    this.loadSessionInfo();
  }

  loadSessionInfo() {
    this.sessionInfo = this.mingleService.getSessionInfo();
    this.sessionInfo.environmentUrl = 'https://hom-mingle.totvs.com.br'
    console.log(this.sessionInfo)
  }

  logout() {

    this.mingleService.auth.logout().subscribe(() => {
      console.log("usuario saiu");
      this.route.navigateByUrl('');
    })

  }

}