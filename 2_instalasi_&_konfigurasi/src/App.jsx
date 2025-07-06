import { useState } from "react";
import Header from "./components/header";

function App() {
  const student = ["andre", "zelina", "evan"];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  function hancleUnClick() {
    setLikes(likes - 1);
  }

  function handleReset() {
    setLikes(0);
  }
  return (
    <>
      <Header name="Zyuu" />
      <ul>
        {student.map((student) => (
          <li key={student}>{student}</li>
        ))}
      </ul>

      <button onClick={hancleUnClick}>-</button>
      <span>({likes})</span>
      <button onClick={handleClick}>+</button>
      <br />
      <br />
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default App;
