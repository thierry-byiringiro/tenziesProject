import { useState } from "react";
import Die from "./Die";

export default function Main() {
  function generateAllNewDice() {
    let newArr = [];
    for (let i = 1; i <= 10; i++) {
      newArr.push(Math.ceil(Math.random() * 6));
    }
    return newArr;
  }
  const [newDice, setNewDice] = useState(generateAllNewDice());

  const handleRandom  = () => {
    setNewDice(generateAllNewDice())
  }
  return (
    <>
      <main className="w-90 h-94.75 top-17 left-19 bg-[#0B2434] flex  items-center justify-center">
        <div className="w-[320px] h-80 bg-[#f5f5f5]   rounded-[10px] grid  grid-cols-5 gap-y-10 pt-25 place-items-center content-start">
          {newDice.map((element,index) => (
            <Die value={element}/>
          ))}
        <button onClick={handleRandom} className="w-23 h-9 bg-[#5035FF] rounded-md text-white flex justify-center items-center font-bold ml-60 cursor-pointer">Roll Dice</button>
        </div>
      </main>
    </>
  );
}
