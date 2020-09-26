import React, { useContext, ReactNode } from 'react';
import { Context } from './index';
import styles from './Blinker.module.scss';

const Wrapper = ({ children } : { children: ReactNode }) => {
  const [isVisible, setVisible] = React.useState<boolean>(true);
  const msContext = useContext(Context);

  React.useEffect(() => {
    let id: NodeJS.Timeout;
    const timeout = () => {
      setVisible((prev) => !prev);
      id = setTimeout(timeout, +msContext);
    };

    timeout();

    return () => clearTimeout(id);
    }, [msContext]);

  return (
    <div className={styles.blink}>
      {isVisible ? children : null}
    </div>
  )
};

export default Wrapper;
