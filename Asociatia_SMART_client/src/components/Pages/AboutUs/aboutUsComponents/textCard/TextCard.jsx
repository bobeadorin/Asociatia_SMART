import "./TextCardStyles.css";
import { useState, useEffect } from "react";

export default function TextCard(props) {
  console.log();
  const [mediaTrigger, setMediaTrigger] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 1320) {
        setMediaTrigger(true);
      } else {
        setMediaTrigger(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={
        mediaTrigger
          ? { backgroundColor: `${props.styles.backgroundColor}` }
          : props.styles
      }
      className="textCard-container"
    >
      <div className="textCard-title-wrapper">
        <h2>{props.text.title}</h2>
        <hr />
      </div>
      <p>{props.text.description}</p>
    </div>
  );
}
