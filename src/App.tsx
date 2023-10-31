import React, { useState } from "react";

function App() {
  const [image, setImage] = useState<string>("dummy.png");
  const selectTank = () => {
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
  return (
    <div className="App">
      <div>ランダムヒーロー選択</div>
      <button onClick={selectTank}>Tank</button>
      <button onClick={selectDps}>DPS</button>
      <button onClick={selectSupport}>Support</button>
      <div>
        <img src={`${process.env.PUBLIC_URL}/hero/${image}`} alt={`${image}`} />
      </div>
    </div>
  );
}

export default App;
