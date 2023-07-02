import Bored from "./Bored";
import "./styles.css";
import { useState } from "react";
export default function App() {
  const [showBored, setShowBored] = useState(false);
  return (
    <>
      {!showBored && (
        <div className="btn-container">
          <button className="btn" onClick={() => setShowBored(true)}>
            {" "}
            I'm bored
          </button>
        </div>
      )}

      {showBored && <Bored />}
    </>
  );
}
