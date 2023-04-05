import { useState } from "react";
import "../styles/MouseEffect.css";

function MouseEffect() {
  function spawnSpans() {
    let spans = [];
    for (let i = 0; i < 1000; i++) {
      spans.push(<span />);
    }
    spans[0];
    return spans;
  }
  return <div className="dotContainer">{spawnSpans()}</div>;
}

export default MouseEffect;
