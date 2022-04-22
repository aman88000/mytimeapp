import { useEffect, useState } from "react";

function TimeApp() {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [status, setstatus] = useState(false);

  useEffect(() => {
    if (sec < 0) {
      setSec(59);
      setMin((min) => min - 1);
    }
  });
  const onChangeMin = (event) => {
    if (event.target.value <= 0) {
      setMin(0);
      return;
    }
    setMin(event.target.value);
  };

  const onChangeSec = (event) => {
    if (event.target.value <= 0) {
      setSec(0);
      return;
    }
    setSec(event.target.value);
  };

  const onClickStart = () => {
    setInterval(() => {
      setSec((sec) => sec - 1);
      console.log(sec, "sec");
    }, 1000);
  };

  return (
    <div>
      <h2>My Time App</h2>
      <input type="number" onChange={onChangeMin} />
      <input type="number" onChange={onChangeSec} />
      <button type="button" onClick={onClickStart}>
        Start
      </button>
      <button type="button">Pause/Resume</button>
      <button type="button">Reset</button>
      <br />
      <br />
      <div>
        {min == 0 ? "00" : min} : {sec == 0 ? "00" : sec}
      </div>
    </div>
  );
}

export default TimeApp;
