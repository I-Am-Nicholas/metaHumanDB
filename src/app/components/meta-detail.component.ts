import { Component, Input, OnInit } from '@angular/core';
import { Meta } from '../meta'

//for OBSERVABLES
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

//ROUTING
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

//SERVICE
import { DisableAliasBttnService } from '../disable-alias-bttn.service'
import { MetaService } from '../meta-service';



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
  message: Boolean;
  subscription: Subscription;

  constructor(
    private messageService: DisableAliasBttnService,
    private metaService: MetaService,
    private route: ActivatedRoute,
    private location: Location
  ) {

    this.subscription = this.messageService.messageOut().subscribe(fromService => {
      if (messageService.getState() == true){
        this.message = fromService;
      }
      else {
        this.message = null;
      }
    });
  }

  ngOnInit(): void {
    /*When the route changes ParamMap takes the id from the parameters and sends it to the service
    The service returns the corresponding Observable<Hero>
    switchMap flattens that Observable<Hero> into a usable Hero object.*/
    this.route.paramMap
      .switchMap((param: ParamMap) => this.metaService.getMeta(+param.get('id')))
      .subscribe(hero => this.clickedMeta = hero);
  }

}
