import { createUseStyles } from "react-jss";
import { MantraType } from "../types";
import info from "../assets/info.png";
import { useRef, useState } from "react";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    width: "25px",
    height: "25px",
    paddingLeft: "20px",
  },
  mantra: {
    fontSize: "1.5em",
    padding: "20px 0",
    whiteSpace: "pre-wrap",
    userSelect: "none",
  },
  meaning: {
    fontSize: "1.5em",
    padding: "20px",
    whiteSpace: "pre-wrap",
    userSelect: "none",
    textAlign: "left",
  },
});

interface MantraProps {
  currentPlaying: number;
  index: number;
  text: MantraType;
  play: (m: MantraType) => void;
  isEnglish: boolean;
}

export const Mantra = ({
  index,
  text,
  currentPlaying,
  play,
  isEnglish,
}: MantraProps) => {
  const classes = useStyles();
  const [showMeaning, setShowMeaning] = useState(false);
  const lastTap = useRef(0);
  const { mantra, meaning, english } = text;
  const source = isEnglish ? english : mantra;
  const parts = source.split("। ");
  const color = currentPlaying === index ? "red" : "";

  const handleTap = () => {
    const now = Date.now();
    const DOUBLE_TAP_DELAY = 300;

    if (now - lastTap.current < DOUBLE_TAP_DELAY) {
      setShowMeaning((prev) => !prev);
    } else {
      play(text);
    }

    lastTap.current = now;
  };

  const Row = () => {
    return (
      <div onClick={handleTap}>
        <div className={classes.mantra} style={{ color }}>
          <div>{parts[0] + "।"}</div>
          <div>{parts[1]}</div>
          <div>{parts[2]}</div>
        </div>

        {showMeaning && (
          <div className={classes.meaning} style={{ color }}>
            {meaning}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={classes.container}>
      <Row />
    </div>
  );
};
