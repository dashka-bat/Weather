import Image from "next/image";

export function Card(props) {
  let status,
    date = "September 10, 2021",
    temp = "10",
    Background = null;

  // if (props.Value === "Night") {
  //   status === "text-yellow";
  // } else {
  //   status === "text-pink";
  // }

  if (props.Value === "Night") {
    status = props.status;

    Background = "bg-gradient-to-t from-[#111827] to-[#1F2937] ";
  } else {
    Background = "bg-white";

    status = props.status;
  }
  let weather = "/DaySun.png";
  if (status === "clear") {
    weather = "/DaySun.png";
  } else if (status === "Clear" && props.Value === "Night") {
    weather = "/Sun.png";
  } else if (status === "Cloudy" && props.Value === "Night") {
    weather = "/NightClouds.png";
  } else if (status === "Rainy" && props.Value === "Night") {
    weather = "/NightRain.png";
  } else if (status === "Snowy" && props.Value === "Night") {
    weather = "/NightSnow.png";
  } else if (status === "Stormy" && props.Value === "Night") {
    weather = "/NightStorm.png";
  } else if (status === "Windy" && props.Value === "Night") {
    weather = "/NightWind.png";
  } else if (status === "Cloudy") {
    weather = "/DayClouds.png";
  } else if (status === "Rainy") {
    weather = "/DayRain.png";
  } else if (status === "Stormy") {
    weather = "/DayStorm.png";
  } else if (status === "Wind") {
    weather = "/DayWind.png";
  } else if (status === "Snowy") {
    weather = "/DaySnow.png";
  }

  return (
    <div>
      <div
        className={`w-[412px] h-[832px] absolute  left-[193px] top-[216px] rounded-[50px] ${Background}  z-20`}
      >
        <div className="text-lg mt-[56px] ml-[40px]">{date}</div>
        <div className="text-5xl ml-[40px]">{props.city}</div>
        <Image
          className="mt-[24px] ml-[68.5px]"
          src={weather}
          alt={""}
          width={260}
          height={260}
        />
        <div>
          <div className={`text-9xl mt-[12px] ml-[48px] text-yellow-400`}>
            {props.temp}
          </div>
          <div className={`text-2xl ml-[48px] `}>{status}</div>
        </div>
      </div>
    </div>
  );
}
