import React, { useContext } from 'react';
import { Context } from "./index";

const Slider = ({ onChange }: { onChange: (value: string) => void }) => {
  const context = useContext(Context);

  return (
    <div>
      <input
        onChange={e => onChange(e.target.value)}
        type="range"
        min="100"
        max="1000"
        value={context}
        className="slider"
        id="myRange" />
    </div>
  )
};

export default Slider;
