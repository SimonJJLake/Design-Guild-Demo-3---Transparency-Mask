import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [mousePosition, setMousePosition] = useState<{
    x: number | null;
    y: number | null;
  }>({ x: null, y: null });
  const handleMouse = (event: MouseEvent) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    setMousePosition({ x: mouseX, y: mouseY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouse);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <div className="App">
      <div className="textColour">
        <h1 className="text">HELLO WORLD</h1>
        <div
          className="mask2"
          style={{ top: mousePosition.y ?? 0, left: mousePosition.x ?? 0 }}
        />
      </div>
      <h1 className="text outline">HELLO WORLD</h1>
    </div>
  );
}

export default App;
