import { SocialService } from './social.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { SocialModel } from './social-model';
import { Injectable } from '@angular/core';

@Injectable()
export class ProfileItemResolver implements Resolve<SocialModel> {
  constructor(private _service: SocialService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): SocialModel {
    console.log('resolved:', route.paramMap.get('id'));
    return this._service.getItem(+route.paramMap.get('id'));
  }

}
