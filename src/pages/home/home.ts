import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AdPage }  from '../ad/ad';

import { Ad } from '../../models/ad';
import { AdService } from '../../services/ad.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
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
