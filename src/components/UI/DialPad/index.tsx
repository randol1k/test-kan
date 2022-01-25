import { MouseEventHandler } from "react";
import { KeyboardBtn } from "./KeyboardBtn";

interface AppProps {
  updateFormHandler: MouseEventHandler;
}

const _DialPad = ({ updateFormHandler }: AppProps) => {
  return (
    <div>
      <KeyboardBtn btnId="1" updateFormHandler={updateFormHandler} />
      <KeyboardBtn btnId="2" updateFormHandler={updateFormHandler} />
      <KeyboardBtn btnId="3" updateFormHandler={updateFormHandler} />
      <KeyboardBtn btnId="4" updateFormHandler={updateFormHandler} />
      <KeyboardBtn btnId="5" updateFormHandler={updateFormHandler} />
      <KeyboardBtn btnId="6" updateFormHandler={updateFormHandler} />
      <KeyboardBtn btnId="7" updateFormHandler={updateFormHandler} />
      <KeyboardBtn btnId="8" updateFormHandler={updateFormHandler} />
      <KeyboardBtn btnId="9" updateFormHandler={updateFormHandler} />
      <KeyboardBtn btnId="0" updateFormHandler={updateFormHandler} />
      <KeyboardBtn btnId="remove" updateFormHandler={updateFormHandler} />
    </div>
  );
};

export const DialPad = _DialPad;
