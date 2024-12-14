// import { useState } from "react";
// const [focus, setFocus] = useState(false);
// const openSuggestion = () => {
//   setFocus(true);
// };
// const closeSuggestion = () => {
//   setFocus(false);
// };
// console.log(focus);
export function Suggestion() {
  return (
    <>
      <div
        className="w-[500px] h-[300px] bg-gray-400 rounded-[20px] ml-[85px] z-40 "
        // onFocus={() => openSuggestion(true)}
        // onBlur={() => closeSuggestion(false)}
      ></div>
    </>
  );
}
