// import React from "react";
import { useEffect, useState } from "react";
import { Activity } from "../commons/types";

export const Reminder: React.FC<{ prompt: Activity }> = ({ prompt }) => {
  const [timeRemaining, setTimeRemaining] = useState(prompt.timer * 60); // Convert minutes to seconds

  useEffect(() => {
    let interval: number | undefined;

    if (timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(interval); // Clear interval only if it's defined
      setTimeRemaining(prompt.timer * 60);
      alert(prompt.text);
      chrome.runtime.sendMessage({
        action: "backgroundTaskCompleted",
        data: { message: prompt.text },
      });
    }

    return () => clearInterval(interval); // Clear interval when the component unmounts or when timeRemaining changes
  }, [timeRemaining]);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="flex gap-x-4 text-left w-full">
      <p> {prompt.emoji}</p>
      <h2> {prompt.text}</h2>
      <p>
        {`${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`}
      </p>
    </div>
  );
};
