import { Component, Input, OnInit } from '@angular/core';

//ROUTING
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

//for OBSERVABLES
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

//SERVICE
import { DisableAliasBttnService } from '../services/disable-alias-bttn.service'
import { MetaService } from '../services/meta-service';

import { Meta } from '../meta'


@Component({
  selector: 'meta-detail',
  styleUrls: ['../stylesheets/meta-detail.component.css',
   '../stylesheets/shared/translucentBG.css',
   '../stylesheets/flipper.css',
   '../stylesheets/shared/nav-bttns.css'
 ],
  templateUrl: '../templates/meta-detail.component.html'
})

export class MetaDetailComponent implements OnInit {

  @Input() clickedMeta: Meta;
  public messageToService: Boolean;
  private subscription: Subscription;
  public toggle: boolean;

  constructor(
    private messageService: DisableAliasBttnService,
    private metaService: MetaService,
    private route: ActivatedRoute,
    private location: Location
    ) {

    this.subscription = this.messageService.messageOut().subscribe(fromService => {
      if (messageService.getState() == true){
        this.messageToService = fromService;
      }
      else {
        this.messageToService = null;
      }
    })
  }

  ngOnInit(): void {
    /*When the route changes ParamMap takes the id from the parameters and sends it to the service
    The service returns the corresponding Observable<Hero>
    switchMap flattens that Observable<Hero> into a usable Hero object.*/
    this.route.paramMap
      .switchMap((param: ParamMap) => this.metaService.getMeta(+param.get('id')))
      .subscribe(hero => this.clickedMeta = hero);
  }

  showAltProperties(): void{
    if (this.toggle){
      this.clickedMeta.level = (this.clickedMeta.alt.level || this.clickedMeta.level);
    }
    else {
      this.ngOnInit()
      this.clickedMeta.level;
    }
  }

}
