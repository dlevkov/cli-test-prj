import { OnDestroy } from '@angular/core/core';
import { Observable } from 'rxjs/Rx';
import { SocialModel } from './social-model';
import { Injectable } from '@angular/core';

export let items = [
  {
    id: 1, fullName: 'Vasya'
  },
  {
    id: 2, fullName: 'Kolya'
  },
];

@Injectable()
export class SocialService implements OnDestroy {
  ngOnDestroy(): void {
    console.log('destroyed');
    console.log(items);
  }


  constructor() { }
  public getItems(): SocialModel[] {
    const result: SocialModel[] = [];
    items.forEach(element => {
      result.push(new SocialModel(element));
    });
    return result;
  }
  public addUser(user: SocialModel): Observable<boolean> {
    items.push({ id: (items.length + 1), fullName: user.fullName });
    console.log('added');
    console.log(items);
    return Observable.of(true);
  }
  public getItem(id: number): SocialModel {
    const found = new SocialModel(items.find(x => x.id === id));
    return found;
  }
}
