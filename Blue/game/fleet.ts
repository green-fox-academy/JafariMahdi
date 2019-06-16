import { Thing } from './thing';

class Fleet {
  private things: Thing[];

  add(thing: Thing): void {
    this.things.push(thing);
  }

  getThings(): Thing[] {
    return this.things;
  }

  print() {
    for (let i = 0; i < this.things.length; i++) {
      if (this.things[i].Completed) {
        console.log(`${i + 1}. [x] ${this.things[i].Name}`);
      } else {
        console.log(`${i + 1}. [ ] ${this.things[i].Name}`);
      }
    }
  }
}
export { Fleet };





