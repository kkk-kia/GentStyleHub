import adidasParty from "../../images/adidasParty1.png";
import newCold from "../../images/newCold.png";
import lookAt from "../../images/lookAt1.png";
import react, { useEffect, useState } from "react";
import "./slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";

const imgUlrs = [
  {
    url: adidasParty,
    p: "Your style is your signature",
  },
  {
    url: newCold,
    p: "eihfoihefhqe",
  },
  {
    url: lookAt,
    p: "ejoieqfqofj",
  },
];

export const Slider = () => {
  const [indexSlider, setIndexSlider] = useState(0);
  const delay = 5000;

  if (indexSlider > imgUlrs.length - 1) {
    setIndexSlider(0);
  }
  if (indexSlider < 0) {
    setIndexSlider(imgUlrs.length - 1);
  }

  useEffect(() => {
    setTimeout(() => {
      setIndexSlider(indexSlider + 1);
    }, delay);
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndexSlider(indexSlider + 1);
    }, delay);
    return () => {
      clearInterval(timer);
    };
  }, [indexSlider]);

  const next = () => {
    setIndexSlider(indexSlider + 1);
  };
  const prev = () => {
    setIndexSlider(indexSlider + 1);
  };

  return (
    <div className="slider">
      <div className="slides">
        <div
          onClick={prev}
          className="slider-btn"
          style={{ borderRadius: "0 10px 10px 0", left: "0" }}
        >
          <FontAwesomeIcon icon={faCaretLeft} />
        </div>
        <div
          onClick={next}
          className="slider-btn"
          style={{ borderRadius: "10px 0 0 10px", right: "0" }}
        >
          <FontAwesomeIcon icon={faCaretRight} />
        </div>

        {imgUlrs.map((item, index) => (
          <div
            className={`slide ${index === indexSlider ? "show" : ""}`}
            key={index}
          >
            <img src={item.url}></img>
            {/* <p>{item.p}</p> */}
            {/* <div className="shadow"></div> */}
          </div>
        ))}

        <div className="dots">
          {imgUlrs.map((item, index) => (
            <div
              className={`dot ${index === indexSlider ? "active" : ""}`}
              key={index}
              onClick={() => {
                setIndexSlider(index);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
