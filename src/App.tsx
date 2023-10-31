import React, { useState, useEffect } from "react";

function App() {
  const [image, setImage] = useState<string>("dummy.png");
  const [counter, setCounter] = useState<number>(300);
  const [role, setRole] = useState<string>();

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter < 300) {
        if (role === "tank") {
          selectTank();
        } else if (role === "dps") {
          selectDps();
        } else if (role === "support") {
          selectSupport();
        }
        setCounter(counter + 1);
      }
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, [counter, role]);

  const selectTank = () => {
    console.log("selectTank");
    const tank = [
      "ball",
      "doomfist",
      "dva",
      "junkerqueen",
      "orisa",
      "reinhardt",
      "roadhog",
      "sigma",
      "winston",
      "zarya",
      "ramattra",
    ];
    const selected = Math.floor(Math.random() * tank.length);
    setImage("tank/" + tank[selected] + ".png");
  };
  const selectSupport = () => {
    const support = [
      "ana",
      "baptist",
      "brigitte",
      "kiriko",
      "lucio",
      "mercy",
      "moira",
      "zenyatta",
      "lifeweaver",
      "illari",
    ];
    const selected = Math.floor(Math.random() * support.length);
    setImage("support/" + support[selected] + ".png");
  };

  const selectDps = () => {
    const dps = [
      "ashe",
      "bastion",
      "cassidy",
      "echo",
      "genji",
      "hanzo",
      "junkrat",
      "mei",
      "phara",
      "reaper",
      "sojourn",
      "soldier",
      "sombra",
      "symmetra",
      "torbjorn",
      "tracer",
      "widowmaker",
    ];
    const selected = Math.floor(Math.random() * dps.length);
    setImage("dps/" + dps[selected] + ".png");
  };

  const startTank = () => {
    setRole("tank");
    setCounter(0);
  };
  const startDps = () => {
    setRole("dps");
    setCounter(0);
  };
  const startSupport = () => {
    setRole("support");
    setCounter(0);
  };
  return (
    <div className="App">
      <div>ランダムヒーロー選択</div>
      <button onClick={startTank}>Tank</button>
      <button onClick={startDps}>DPS</button>
      <button onClick={startSupport}>Support</button>
      <div>
        <img src={`${process.env.PUBLIC_URL}/hero/${image}`} alt={`${image}`} />
      </div>
    </div>
  );
}

export default App;
