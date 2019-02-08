'use strict';

class Garden {
    plane: string[];
    waterlevel: number;



    constructor(plane: string[], water: number) {
        this.plane = plane;
        this.waterlevel = water;
    }


    thirsty(): any {
        if (this.waterlevel < 5) {
           return this.waterlevel += 
        }


    }
}
export { Garden };