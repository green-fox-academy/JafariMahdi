'use strict ';

import {Garden} from './Garden';

class Flower extends Garden{

    constructor(color: string,water,watering = 5){
        super(color,water,watering);
        this.color=color;
        this.water=water;
        this.watering=watering;
    }



}