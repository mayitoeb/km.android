import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Ad } from '../../models/ad';
import { AdService } from '../../services/ad.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  ads: Ad[] = [];

  constructor(public navCtrl: NavController,
    private adService: AdService) {}

    ngOnInit(): void {
      this.adService.getAds()
      .subscribe(ads => {
        this.ads = ads;
      })
    }

    openPage() {
      console.log('button clicked');
      alert('clicked');
    }

}
