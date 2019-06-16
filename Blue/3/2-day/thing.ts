class Thing {
  private name: string;
  private completed: boolean;

  constructor(name: string) {
    this.name = name;
  }

  complete(): void {
    this.completed = true;
  }

  get Name(): string {
    return this.name;
  }

  get Completed(): boolean {
    return this.completed;
  }
}
export { Thing };


//  1- vaghti ke field Private darim bayd az methd estefadeh konim baray 
//  return fieldha va method ma hamishe ba GET shoro mishe baray private