import { SocialModel } from '../social-model';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.css']
})
export class ProfilesListComponent implements OnInit {
  public items: SocialModel[];
  constructor(private route: ActivatedRoute) { }

  public ngOnInit() {
    this.items = this.route.snapshot.data['items'];
  }
}
