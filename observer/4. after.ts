import {Observer, Subject} from "./3. interfaces";

/*
[SUBJECT] 기상 정보를 가져오고, 관리한다. 구독 중인 객체들에게 최신 기상 정보를 전달한다.
[OBSERVER] 구독하고있는 기상 정보를 받아온다.
 */

class WeatherData implements Subject { // Subject 인터페이스를 구현한다.

    observers: Array<Observer>;
    temperature: number = 0;
    humidity: number = 0;
    pressure: number = 0;

    constructor() {
        this.observers = [];
    }

    getDataFromKMA() {
        // 대충 기상청으로부 데이터 받아와서 setMeasurements 실행하는 함수
    }

    setMeasurements(
        temperature: number,
        humidity: number,
        pressure: number
    ) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure
        this.measurementsChanged()
    }

    measurementsChanged() {
        this.notifyObserver()
    }

    // *** SUBJECT
    registerObserver() {

    }

    // *** SUBJECT
    removeObserver() {

    }

    // *** SUBJECT
    notifyObserver () {

    }

}


// *** OBSERVER
class CurrentDisplay implements Observer{
    temperature: number = 0;
    humidity: number = 0;
    pressure: number = 0;

    update() {

    }

}

// OBSERVER
class StatisticsDisplay implements Observer{
    update() {

    }

}

// OBSERVER
class ForecastDisplay implements  Observer {
    update() {

    }

}


const main = () => {
    const weatherData: WeatherData = new WeatherData();

    const currentDisplay: CurrentDisplay = new CurrentDisplay();
    const statisticDisplay: StatisticsDisplay = new StatisticsDisplay();
    const forecastDisplay: ForecastDisplay = new ForecastDisplay();

    weatherData.registerObserver(currentDisplay);
    weatherData.registerObserver(statisticDisplay);
    weatherData.registerObserver(forecastDisplay);
};
