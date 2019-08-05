import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

import { Path } from '../model';

/*
  Path - Model

    protocol:"http:"
    hostname:"192.168.0.11"
    port:"4400"
    pathname:"/"

    hash:"#/profile"
    host:"192.168.0.11:4400"
    href:"http://192.168.0.11:4400/#/profile"
    origin:"http://192.168.0.11:4400"
*/

@Injectable()
export class PathService {
  private originPath: Path;
  private destinationPath: Path;

  public redirectAfterLogin: boolean = false;
  public pathAfterLogin: string = '/profile';
  public pathAfterFirstLogin: string = '/new';
  public pathAfterLogout: string = '/';
  public pathToLogin: string = '/login';
  public pathToLogout: string = '/logout';

  constructor(
    private location: Location
  ) {}


  // Serice features
  setDefaults(locObject:any):void {
    let tempPathObject:Path = new Path();

    // Required
    tempPathObject.protocol = locObject.protocol;
    tempPathObject.hostname = locObject.hostname;
    tempPathObject.port = locObject.port;
    tempPathObject.pathname = locObject.pathname;

    // Optional
    if (locObject.hash) {
      tempPathObject.hash = locObject.hash;
    }
    if (locObject.host) {
      tempPathObject.host = locObject.host;
    }
    if (locObject.href) {
      tempPathObject.href = locObject.href;
    }
    if (locObject.origin) {
      tempPathObject.origin = locObject.origin;
    }

    // set default state of path objects
    this.originPath = tempPathObject;
    this.destinationPath = tempPathObject;
  }

  setDestination(nextDestination:string):void {
    let nextPath = '#'+ nextDestination;

    this.destinationPath.hash = nextPath;
    this.destinationPath.href = '';
    this.destinationPath.origin = '';
  }

  // Hand over the whole object
  getOrigin ():Path {
    return this.originPath;
  }
  getDestination ():Path {
    return this.destinationPath;
  }

  // Return just the clean path based on hash param
  getOriginPath():string {
    let returnPath:string = '';
    returnPath = this.originPath.hash.replace('#', '');
    return returnPath;
  }
  getDestinationPath():string {
    let returnPath:string = '';
    returnPath = this.destinationPath.hash.replace('#', '');

    // If last path is logout then send user to their profile
    if (returnPath === this.pathToLogout) {
      returnPath = this.pathAfterLogin;
    }

    return returnPath;
  }
}
