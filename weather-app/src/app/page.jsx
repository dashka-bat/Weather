"use client";
import "./style.css";
import { Card } from "@/components/card";
import { SearchInput } from "@/components/SearchInput";
import Nightside from "@/components/nightside";
import CenterBoard from "@/components/Center-border";
import { useEffect, useState } from "react";
const API_KEY = "0e6ef2cfb62c4bfaa5e72459241312";
export default function Home() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("Ulaanbaatar");
  const [dayWeather, setDayWeather] = useState({});
  const [NightWeather, setNightWeather] = useState({
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
        });

        console.log(data.forecast.forecastday[0].day.maxtemp_c);
        console.log(data.forecast.forecastday[0].day.mintemp_c);
        console.log(data.forecast.forecastday[0].day.condition.text);
      });
  }, [city]);

  return (
    <div className="bg-[#404040] h-screen">
      <div className="bg-[#F3F4F6] h-[1200px] w-[1600px] flex justify-between mx-auto ">
        <div className="bg-[#F3F4F6] h-[1200px] w-[800px] relative">
          <Card
            status={dayWeather.condition}
            city={city}
            temp={dayWeather.temp}
          />
          <CenterBoard />
          <SearchInput
            search={search}
            onChangetext={onChangetext}
            onPressEnter={onPressEnter}
          />
        </div>

        <div className="background-1"></div>
        <div className="relative ">
          <Card
            Value={"Night"}
            status={NightWeather.condition}
            city={city}
            temp={NightWeather.temp}
          />
          <Nightside />
        </div>
      </div>
    </div>
  );
}
