import { useState, useEffect } from "react";
import Form from "./Form";

function App() {
  const [password, setPassword] = useState("");
  const [passRating, setPassRating] = useState(5);
  const [passChars, setPassChars] = useState({
    lower: true,
    upper: true,
    numeric: true,
    special: true,
    length: 16,
  });

  useEffect(() => {
    generatePassword();
    calculateRating();
  }, [passChars]);

  const calculateRating = () => {
    const charRate =
      passChars.lower + passChars.upper + passChars.numeric + passChars.special;
    if (charRate === 0) {
      setPassRating(0);
    } else {
      const poolSize =
        (passChars.upper ? 26 : 0) +
        (passChars.lower ? 26 : 0) +
        (passChars.numeric ? 10 : 0) +
        (passChars.special ? 12 : 0);

      //Entropy = log2(Number of Possible Combinations)
      const entropy = Math.floor(Math.log2(poolSize ** passChars.length));

      let rating;

      if (entropy >= 74) rating = 5;
      else if (entropy >= 55 && entropy <= 73) rating = 4;
      else if (entropy >= 35 && entropy <= 54) rating = 3;
      else if (entropy >= 29 && entropy <= 34) rating = 2;
      else rating = 1;

      setPassRating(rating);
    }
  };

  const generatePassword = () => {
    const numeric = passChars.numeric ? "0123456789" : "";
    const upper = passChars.upper ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
    const lower = passChars.lower ? "abcdefghijklmnopqrstuvwxyz" : "";
    const special = passChars.special ? "@%+!?#$().-_" : "";
    const allChars = numeric + upper + lower + special;

    const result = Array.from(
      crypto.getRandomValues(new Uint32Array(passChars.length))
    )
      .map((c) => allChars[c % allChars.length])
      .join("");

    setPassword(result);
  };

  return (
    <div className="App">
      <h1 className="title">Password Generator</h1>
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
