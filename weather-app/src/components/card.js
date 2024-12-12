import Image from "next/image";

export function Card(props) {
  let weather = "/DaySun.png";
  if (props.status === "Sunny") {
    weather = "/DaySun.png";
  } else if (props.status === "Cloudy") {
    weather = "/DayClouds.png";
  } else if (props.status === "Rainny") {
    weather = "/DayRain.png";
  } else if (props.status === "Stormy") {
    weather = "/DayStorm.png";
  } else if (props.status === "Wind") {
    weather = "/DayWind.png";
  } else if (props.status === "Snowy") {
    weather = "/DaySnow.png";
  }
  return (
    <div>
      <div
        className={`w-[412px] h-[832px] absolute  left-[193px] top-[216px] rounded-[50px] ${props.bg} `}
      >
        <div>september10</div>
        <Image src={weather} alt={""} width={260} height={260} />
        <p>{props.status}</p>
      </div>
    </div>
  );
}
