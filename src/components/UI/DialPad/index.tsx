import styles from "./DialPad.module.scss";
import { MouseEventHandler, useEffect, useRef } from "react";
import { KeyboardBtn } from "./KeyboardBtn";

interface AppProps {
  updateFormHandler: MouseEventHandler;
  focusedElement: string;
  isFormValid: boolean;
  setFocusedElement: Function;
}

const _DialPad = ({
  updateFormHandler,
  focusedElement,
  isFormValid,
  setFocusedElement,
}: AppProps) => {
  const inputLabelRef: any = useRef();
  const btnRef: any = useRef();

  useEffect(() => {
    if (focusedElement === "agreeBox") {
      inputLabelRef.current.focus();
    } else if (focusedElement === "submitBtn" && isFormValid) {
      btnRef.current.focus();
    } else if (focusedElement === "submitBtn" && !isFormValid) {
      setFocusedElement("agreeBox");
    }
    // eslint-disable-next-line
  }, [focusedElement]);

  return (
    <div className={styles.dialPad}>
      <div className={styles.btnsGrid}>
        <KeyboardBtn
          btnId="1"
          updateFormHandler={updateFormHandler}
          focusedElement={focusedElement}
        />
        <KeyboardBtn
          btnId="2"
          updateFormHandler={updateFormHandler}
          focusedElement={focusedElement}
        />
        <KeyboardBtn
          btnId="3"
          updateFormHandler={updateFormHandler}
          focusedElement={focusedElement}
        />
        <KeyboardBtn
          btnId="4"
          updateFormHandler={updateFormHandler}
          focusedElement={focusedElement}
        />
        <KeyboardBtn
          btnId="5"
          updateFormHandler={updateFormHandler}
          focusedElement={focusedElement}
        />
        <KeyboardBtn
          btnId="6"
          updateFormHandler={updateFormHandler}
          focusedElement={focusedElement}
        />
        <KeyboardBtn
          btnId="7"
          updateFormHandler={updateFormHandler}
          focusedElement={focusedElement}
        />
        <KeyboardBtn
          btnId="8"
          updateFormHandler={updateFormHandler}
          focusedElement={focusedElement}
        />
        <KeyboardBtn
          btnId="9"
          updateFormHandler={updateFormHandler}
          focusedElement={focusedElement}
        />
        <KeyboardBtn
          extended
          btnId="remove"
          label="Стереть"
          updateFormHandler={updateFormHandler}
          focusedElement={focusedElement}
        />
        <KeyboardBtn
          btnId="0"
          updateFormHandler={updateFormHandler}
          focusedElement={focusedElement}
        />
      </div>
      <div className={styles.inputContainer}>
        <input
          type="checkbox"
          required
          onClick={updateFormHandler}
          id="rules"
          className={styles.agreeInput}
          // Чтобы Форма не отправляла данные по нажатию на Enter
          onKeyDown={(event) => {
            if (event.key === "Enter") event.preventDefault();
          }}
        />
        <span />
        <label
          htmlFor="rules"
          ref={inputLabelRef}
          id="agreeBox"
          className={styles.agreeLabel}
        >
          Согласие на обработку
          <br />
          персональных данных
        </label>
      </div>

      <button
        className={`${styles.submitBtn} ${isFormValid ? styles.valid : null}`}
        disabled={!isFormValid}
        ref={btnRef}
        type="submit"
        id="submitBtn"
      >
        {"Подтвердить номер".toUpperCase()}
      </button>
    </div>
  );
};

export const DialPad = _DialPad;
