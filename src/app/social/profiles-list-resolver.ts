import { SocialService } from './social.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { SocialModel } from './social-model';
import { Injectable } from '@angular/core';

@Injectable()
export class ProfilesListResolver implements Resolve<SocialModel[]> {
  constructor(private _service: SocialService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): SocialModel[] {
    return this._service.getItems();
  }

}
