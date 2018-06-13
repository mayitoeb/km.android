import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AdPage }  from '../ad/ad.component';
import { Ad } from '../shared/ad.model';
import { AdService } from '../shared/ad.service';

@Component({
  selector: 'page-ads',
  templateUrl: 'ad-list.component.html'
})
export class AdListPage implements OnInit {
  adPage: any = AdPage;
  ads: Ad[] = [];

  constructor(public navCtrl: NavController,
    private adService: AdService) {}

    ngOnInit(): void {
      this.adService.getAds()
      .subscribe(ads => {
        this.ads = ads;
      })
    }

    openPage(id: string) {
      this.navCtrl.push(this.adPage);
    }
}