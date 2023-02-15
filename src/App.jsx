import { useState } from "react";
import Form from "./Form";

function App() {
  const [password, setPassword] = useState("");
  const [passRating, setPassRating] = useState(5);
  const [passChars, setPassChars] = useState({
    lower: true,
    upper: false,
    numeric: false,
    special: false,
    length: 16,
  });

  return (
    <div className="App">
      <h1 className="title" onClick={calculateRating}>
        Password Generator
      </h1>
      <Form
        passChars={passChars}
        setPassChars={setPassChars}
        passRating={passRating}
        password={password}
      />
    </div>
  );
}

export default App;
