import { BODY, HEAD, LEFT_ARM, LEFT_LEG, RIGHT_ARM, RIGHT_LEG } from "./Body";

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

interface HangmanDrawingProps {
  numberOfGuesses: number;
}

function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          background: "black",
          height: "50px",
          position: "absolute",
          right: 0,
          top: 0,
          width: "10px",
        }}
      />
      <div
        style={{
          background: "black",
          height: "10px",
          marginLeft: "120px",
          width: "200px",
        }}
      />
      <div
        style={{
          background: "black",
          height: "400px",
          marginLeft: "120px",
          width: "10px",
        }}
      />
      <div style={{ height: "10px", background: "black", width: "250px" }} />
    </div>
  );
}

export default HangmanDrawing;
