'use strict ';

export class Usable {
  status: string;

  constructor() {
    this.status = 'I\'m not used at all';
  }

  public use(): void {
    this.status = 'Now, I was used at least once.';
  }
}

let firstUsable = new Usable();
firstUsable.use();