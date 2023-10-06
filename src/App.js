import { useState } from "react";
import uniqueId from "./utils/generateId";

function App() {
  const [id, setId] = useState(0);

  const updateId = () => {
    setId(uniqueId);
  };
  return (
    <div className="App">
      <h1>{id}</h1>
      <button onClick={updateId}>get new unique ID</button>
    </div>
  );
}

export default App;
