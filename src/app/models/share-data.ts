import { Injectable } from '@angular/core';

@Injectable()
export class SharedData {
  public countCart: any;
  public constructor() {
    this.countCart = 0;
  }
}
