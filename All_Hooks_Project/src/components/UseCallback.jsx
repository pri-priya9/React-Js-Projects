import React, { useState, useCallback } from "react";
import "./UseCallback.css";

function UseCallback() {
  const [text, setText] = useState("");

  const countCharacters = useCallback(() => {
    return text.length;
  }, [text]);

  return (
    <div>
      <h1 className="usecallback-h1">Character Counter</h1>
      <textarea className="usecallback-textarea"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="usecallback-p">Total Characters: {countCharacters()}</p>
    </div>
  );
}

export default UseCallback;
