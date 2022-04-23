import { useEffect, useState } from "react";
let clearInt, startMin, startSec;
function TimeApp() {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [status, setstatus] = useState(false);

  useEffect(() => {
    if (status) {
      clearInt = setInterval(() => {
        setSec((sec) => {
          if (sec <= 0) {
            if (min == 0 && sec == 0) {
              console.log(sec, min);
              clearInterval(clearInt);
              return;
            }
            setSec(59);
            setMin((min) => min - 1);
          }
          return sec - 1;
        });
      }, 1000);
    } else {
      clearInterval(clearInt);
    }
  }, [status]);
  const onChangeMin = (event) => {
    if (event.target.value <= 0) {
      setMin(0);
      return;
    }

    setMin(event.target.value);
    startMin = event.target.value;
  };

  const onChangeSec = (event) => {
    if (event.target.value <= 0) {
      setSec(0);

      return;
    }
    setSec(event.target.value);
    startSec = event.target.value;
  };

  const onClickStart = () => {
    setstatus(true);
  };

  const onClickPause = () => {
    setstatus(!status);
  };

  const onClickRest = () => {
    console.log(startMin, startSec);
    setMin(startMin);
    setSec(startSec);
    setstatus(true);
  };

  return (
    <div>
      <h2>My Time App</h2>
      <input type="number" onChange={onChangeMin} />
      <input type="number" onChange={onChangeSec} />
      <button type="button" onClick={onClickStart}>
        Start
      </button>
      <button type="button" onClick={onClickPause}>
        Pause/Resume
      </button>
      <button type="button" onClick={onClickRest}>
        Reset
      </button>
      <br />
      <br />

      <div>
        {min == 0 ? "00" : min} : {sec == 0 ? "00" : sec}
      </div>
    </div>
  );
}

export default TimeApp;
