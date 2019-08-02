import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Location } from '@angular/common';

import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    public afAuth: AngularFireAuth,
    public userService: UserService,
    public location: Location
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Promise<boolean> {

    console.log ('canActivate - route', route);
    console.log ('canActivate - state', state);
    console.log ('canActivate - location', this.location);

    return new Promise((resolve, reject) => {


      this.userService.getCurrentUser()
        .then(user => {

          this.router.navigate(['/user']);
          return resolve(false);

        },
        err => {
          return resolve(true);
        });

    });

  }
}
