import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SocialModel } from '../social-model';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.css']
})
export class ProfileItemComponent implements OnInit {
  @Input() public item: SocialModel;
  constructor(private _route: Router, private _router: ActivatedRoute) { }

  ngOnInit() {
    if (this._router.snapshot.data['item']) {
      this.item = this._router.snapshot['item'];
    }
  }
  redirectTo(id: any) {
    console.log('redirect id:', id);
    this._route.navigate(['/profile', id]);
  }
}
