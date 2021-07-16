import { Weather } from "./weather";

describe('weather class', () => {
    it('should return the forecast', () => {
        expect(new Weather(900).forecast()).toEqual('Pressure is too low for this planet!');
        expect(new Weather(980).forecast()).toEqual('Stormy weather!');
        expect(new Weather(1000).forecast()).toEqual('Rainy weather!');
        expect(new Weather(1020).forecast()).toEqual('Sunny weather!');
        expect(new Weather(1040).forecast()).toEqual('Hot weather!');
        expect(new Weather(1070).forecast()).toEqual('Extreme hot!');
        expect(new Weather(1100).forecast()).toEqual('Pressure too high for this planet!');
    });
});