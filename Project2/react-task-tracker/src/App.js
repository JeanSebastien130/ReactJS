import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "An appointment", day: "1 janvier", reminder: true },
    { id: 2, text: "An other appointment", day: "2 janvier", reminder: true },
    {
      id: 3,
      text: "An other other appointment",
      day: "3 janvier",
      reminder: true,
    },
  ]);

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
