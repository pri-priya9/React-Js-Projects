import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  // UseRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=(){}[]~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setpassword(pass);
  }, [length, numberAllowed, charAllowed, setpassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="container">
      <h1 className="heading">Password Generator</h1>

      <div className="password">
        <input
          type="text"
          value={password}
          placeholder="password"
          readOnly
          ref={passwordRef}
          className="passwordInput"
        />
        <button className="btn" onClick={copyPasswordToClipboard}>Copy</button>
      </div>

      <div>
        <div>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setlength(e.target.value)}
            className="slider"
          />
          <label className="label">Length: {length}</label>
        </div>

        <div className="checkboxes">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => setnumberAllowed((prev) => !prev)}
            className="numCheckbox"
          />
          <label htmlFor="numberInput" className="numLabel">Numbers</label>
        

        
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => setcharAllowed((prev) => !prev)}
            className="charCheckbox"
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;

