"use client";
import "./style.css";

import { Card } from "@/components/card";
import { SearchInput } from "@/components/SearchInput";

export default function Home() {
  return (
    <div className="bg-green-700 h-screen">
      <div className="bg-[#F3F4F6] h-[1200px] w-[1600px] flex justify-between mx-auto ">
        <div className="bg-[#F3F4F6] h-[1200px] w-[800px] relative">
          <Card bg={"bg-white"} status={"Rainny"} />
          <div className="z-10 w-[205px] h-[205px] bg-yellow-500 rounded-[100%] absolute left-[700px] top-[495px] flex">
            <img
              className="w-[43px] h-[86px] ml-[50px] my-[50px]"
              src="left-logo.png"
            />
            <img
              className="w-[43px] h-[86px] mx-[15px] my-[50px]"
              src="right-logo.png"
            />
          </div>
          <SearchInput />
        </div>

        <div className="background-1"></div>
        <div className="relative">
          <Card bg={"bg-black"} status={"Snowy"} />
          <div className="w-[800px] h-[500px] bg-[#0F141E] rounded-bl-[25px]"></div>
          <div className="w-[800px] h-[200px] bg-[#0F141E]"></div>
          <div className="w-[800px] h-[500px] bg-[#0F141E] rounded-tl-[25px]">
            <div className="w-[128px] h-[128px] bg-[#6E72C9] absolute left-[550px] bottom-[90px] rounded-[100%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
