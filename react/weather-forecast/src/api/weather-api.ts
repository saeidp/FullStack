import { IWeatherDto } from "./weather-dto";
import { Weather } from "./weather-type";

export async function fetchWeather(): Promise<Weather[]> {
  const url = "https://localhost:44321/weatherforecast";
  const response = await fetch(url);
  let data: Weather[] = [];
  if (response.status === 200) {
    const json: IWeatherDto[] = await response.json();
    data = json.map((x: IWeatherDto) => new Weather(x));
  }
  return data;
}
