import styles from "./KeyboardBtn.module.scss";
import { MouseEventHandler, useEffect, useRef } from "react";

interface AppProps {
  btnId: string;
  label?: string;
  updateFormHandler: MouseEventHandler;
  focusedElement: string;
  extended?: boolean;
}

const _KeyboardBtn = ({
  btnId,
  updateFormHandler,
  focusedElement,
  label,
  extended,
}: AppProps) => {
  const btnRef: any = useRef();
  useEffect(() => {
    if (btnId === focusedElement) {
      btnRef.current.focus();
    } else {
      btnRef.current.blur();
    }
    // eslint-disable-next-line
  }, [focusedElement]);

  return (
    <button
      className={`${styles.keyBtn} ${extended ? styles.extended : ""}`}
      ref={btnRef}
      id={btnId}
      value={btnId}
      type="button"
      onClick={updateFormHandler}
    >
      {label ? label.toUpperCase() : btnId}
    </button>
  );
};

export const KeyboardBtn = _KeyboardBtn;
