export class Weather {
    lowest: number;
    highest: number;
    pressure: number;

    constructor(pressure: number) {
        this.lowest = 950;
        this.highest = 1100;
        this.pressure = pressure;
    }

    forecast() {
        if (this.pressure >= this.highest) {
            return 'Pressure too high for this planet!';
        } else if (this.pressure < this.lowest) {
            return 'Pressure is too low for this planet!';
        } else if (this.pressure < 990) {
            return 'Stormy weather!';
        } else if (990 <= this.pressure && this.pressure < 1010) {
            return 'Rainy weather!';
        } else if (1010 <= this.pressure && this.pressure < 1030) {
            return 'Sunny weather!';
        } else if (1030 <= this.pressure && this.pressure < 1050) {
            return 'Hot weather!';
        } else if (1050 <= this.pressure && this.pressure < 1100) {
            return 'Extreme hot!';
        } else return '';
    }
}

