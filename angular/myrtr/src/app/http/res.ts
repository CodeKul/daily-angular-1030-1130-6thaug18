interface Res {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    id: number;
    name: string;
    cod: number;
  }
  
  interface Sys {
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  }
  
  interface Clouds {
    all: number;
  }
  
  interface Wind {
    speed: number;
    deg: number;
  }
  
  interface Main {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
    sea_level: number;
    grnd_level: number;
  }
  
  interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
  }
  
  interface Coord {
    lon: number;
    lat: number;
  }