"use client";
import { Card } from "@/components/card";
import { SearchInput } from "@/components/SearchInput";
import Nightside from "@/components/nightside";
import CenterBoard from "@/components/Center-border";
import Circle from "@/components/circles";
import { useEffect, useState } from "react";
const API_KEY = "0e6ef2cfb62c4bfaa5e72459241312";
export default function Home() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("Ulaanbaatar");
  const [dayWeather, setDayWeather] = useState({});
  const [nightWeather, setNightWeather] = useState({
    temperature: 0,
    condition: ``,
  });
  const onChangetext = (e) => {
    setSearch(e.target.value);
  };
  const onPressEnter = (e) => {
    if (e.code === "Enter") {
      setCity(search);
    }
  };
  console.log(search, city);
  console.log(search);
  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        setDayWeather({
          temp: data.forecast.forecastday[0].day.maxtemp_c,
          condition: data.forecast.forecastday[0].day.condition.text,
          date: data.forecast.forecastday[0].date,
        });
        setNightWeather({
          temp: data.forecast.forecastday[0].day.mintemp_c,
          condition: data.forecast.forecastday[0].day.condition.text,
          date: data.forecast.forecastday[0].date,
        });
        console.log(data);
        console.log(data.forecast.forecastday[0].day.maxtemp_c);
        console.log(data.forecast.forecastday[0].day.mintemp_c);
        console.log(data.forecast.forecastday[0].day.condition.text);
      });
  }, [city]);

  return (
    <div className="bg-gray-900 h-[1200px]">
      <div className="bg-gray-200 h-[1200px] w-[1600px] flex justify-between mx-auto ">
        <div className="bg-gray-200 h-[1200px] w-[800px] relative ">
          <Circle />
          <Card
            status={dayWeather.condition}
            city={city}
            temp={dayWeather.temp}
            date={dayWeather.date}
          />
          <CenterBoard />
          <SearchInput
            search={search}
            onChangetext={onChangetext}
            onPressEnter={onPressEnter}
          />
        </div>
        <div></div>
        <div className="relative ">
          <Card
            Value={"Night"}
            status={nightWeather.condition}
            city={city}
            temp={nightWeather.temp}
            date={nightWeather.date}
          />
          <Nightside />
        </div>
      </div>
    </div>
  );
}
