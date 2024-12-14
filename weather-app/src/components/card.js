import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { GrFavorite } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
export function Card(props) {
  let weather = "/DaySun.png";

  let status,
    date = "september",
    temp = 10,
    Background = null,
    cityColor = null,
    iconcolor = null,
    StatusColor = null;

  if (props.Value === "Night") {
    weather = "/Sun.png";
    status = props.status;
    StatusColor = " text-[#777CCE] ";
    Background = " bg-gradient-to-t from-[#111827] to-[#1F2937] ";
    cityColor = "text-white";
    iconcolor = "text-[#777CCE]";
  } else {
    weather = "/DaySun.png";
    Background = " bg-white";
    StatusColor = " text-[#FF8E27] ";
    status = props.status;
    cityColor = " text-[#111827] ";
    iconcolor = "text-[#FF8E27]";
  }
  // if (Background === "bg-gradient-to-t from-[#111827] to-[#1F2937] ") {
  //   StatusColor = "bg-pink";
  // } else {
  //   StatusColor = "bg-yellow";
  // }

  if (status === "Sunny" && props.Value === "Night") {
    weather = "/Sun.png";
  } else if (status === "Clear" && props.Value === "Night") {
    weather = "/Sun.png";
  } else if (status === "Partly cloudy" && props.Value === "Night") {
    weather = "/NightClouds.png";
  } else if (status === "Moderate rain" && props.Value === "Night") {
    weather = "/NightRain.png";
  } else if (
    status === "Moderate or heavy snow showers" &&
    props.Value === "Night"
  ) {
    weather = "/NightSnow.png";
  } else if (status === "Light rain" && props.Value === "Night") {
    weather = "/NightStorm.png";
  } else if (status === "Windy" && props.Value === "Night") {
    weather = "/NightWind.png";
  } else if (status === "Sunny") {
    weather = "/DaySun.png";
  } else if (status === "Partly cloudy") {
    weather = "/DayClouds.png";
  } else if (status === "Moderate rain") {
    weather = "/DayRain.png";
  } else if (status === "Light rain") {
    weather = "/DayStorm.png";
  } else if (status === "Wind") {
    weather = "/DayWind.png";
  } else if (status === "Moderate or heavy snow showers") {
    weather = "/DaySnow.png";
  }
  if (props.status === "Sunny" && props.Value === "Night") {
    status = "Clear";
  }
  return (
    <div>
      <div
        className={` backdrop-blur-3xl bg-white/30 w-[412px] h-[832px] absolute  left-[193px] top-[216px] rounded-[50px] ${Background} z-30 opacity-90`}
      >
        <div className="text-lg mt-[56px] ml-[40px] text-[24px] text-[#9CA3AF] flex gap-[120px] ">
          {props.date}
          <CiLocationOn className="w-[32px] h-[32px] " />
        </div>
        <div className={`text-5xl ml-[40px] mt-[24px]  ${cityColor}`}>
          {props.city}
        </div>
        <Image
          className="mt-[24px] ml-[68.5px] "
          src={weather}
          alt={""}
          width={260}
          height={260}
        />
        <div>
          <div
            className={`text-9xl mt-[12px] ml-[48px] bg-clip-text text-transparent bg-gradient-to-b from-[#F9FAFB] to-[#111827BF]`}
          >
            {props.temp}
          </div>
          <div className={`text-2xl ml-[48px] mt-[48px] ${StatusColor} `}>
            {status}
          </div>
        </div>
        <div className="flex gap-[64px] ml-[48px] mt-[64px]">
          <FaHome className={`w-[32px] h-[32px] ${iconcolor} `} />
          <CiLocationOn className={`w-[32px] h-[32px] ${iconcolor} `} />
          <GrFavorite className={`w-[32px] h-[32px] ${iconcolor}`} />
          <CgProfile className={`w-[32px] h-[32px] ${iconcolor}`} />
        </div>
      </div>
    </div>
  );
}
