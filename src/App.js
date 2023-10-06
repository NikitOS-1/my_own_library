import { useState } from "react";
import uniqueId from "./utils/generateId";
import convertToSlug from "./utils/convertSlug";

function App() {
  const [id, setId] = useState(0);
  const [text, setText] = useState("Hello");

  const updateId = () => {
    setId(uniqueId);
    setText(convertToSlug(text));
  };

  return (
    <div className="App">
      <h1>{text}</h1>
      <h1>{id}</h1>
      <input onChange={(e) => setText(e.target.value)} />
      <button onClick={updateId}>get new unique ID</button>
    </div>
  );
}

export default App;
