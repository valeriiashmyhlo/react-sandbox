import React, {useState, useContext} from "react";
import Slider from './Slider';
import Wrapper from './Wrapper';
import styles from './Blinker.module.scss';

export const Context = React.createContext('100');

export const Blinker = () => {
  const [ms, setMs] = useState<string>('100');

  return (
    <Context.Provider value={ms}>
      <div className={styles.wrapper}>
        <Slider onChange={setMs} />
        <Wrapper>
          This is blinking text.
        </Wrapper>
      </div>
    </Context.Provider>
  )
};
