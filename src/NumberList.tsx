import { useState } from "react";
import ClickMeButton from "./ClickMeButton";

export default function NumberList() {
  const [numbers, setNumbers] = useState<number[]>([]);

  return (
    <section className="flex flex-col my-4 ">
      <ClickMeButton
        onClick={(event) => {
          event.preventDefault();
          const lastNumber = numbers[numbers.length - 1] || 0;
          setNumbers([...numbers, lastNumber + 1]);
        }}
      />
      {numbers.length > 0 && (
        <ol className="grid grid-cols-5 gap-4 select-none p-4 border-2 border-purple-500 border-t-0">
          {numbers.map((number) => {
            const isOdd = number % 2 === 1;
            return (
              <li
                className={`flex justify-center ${
                  isOdd ? "font-black" : "font-thin"
                }`}
                key={number}
              >
                {number}
              </li>
            );
          })}
        </ol>
      )}
    </section>
  );
}
