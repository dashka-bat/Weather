export default function CenterBoard() {
  return (
    <div className="z-10 w-[205px] h-[205px] bg-[#F3F4F6] rounded-[100%] absolute left-[704px] top-[497px] flex">
      <img
        className="w-[43px] h-[86px] ml-[54px] my-[55px]"
        src="left-logo.png"
      />
      <img
        className="w-[43px] h-[86px] mx-[15px] my-[55px]"
        src="right-logo.png"
      />
    </div>
  );
}
