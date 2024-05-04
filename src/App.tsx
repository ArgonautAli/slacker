import "./App.css";
import logo from "./assets/noun-relax-4498343.png";
import { Activity } from "./commons/types";
import { Reminder } from "./components/reminder";

const reminderPrompts: Activity[] = [
  { emoji: "👀", text: "Relax your eyes", timer: 0.1 },
  { emoji: "🚰", text: "Hydrate", timer: 45 },
  { emoji: "🙆‍♂️", text: "Stretch", timer: 60 },
];

function App() {
  return (
    <>
      <div className="flex items-center	">
        {" "}
        <img src={logo} height={75} width={75} />
        <h1>Slacker</h1>
      </div>
      <div>
        {reminderPrompts.map((prompt: Activity) => {
          return (
            <>
              <Reminder prompt={prompt} />
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;
