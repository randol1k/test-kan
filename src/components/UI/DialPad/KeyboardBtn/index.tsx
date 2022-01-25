import { MouseEventHandler } from "react";

interface AppProps {
  btnId: string;
}

interface AppProps {
  updateFormHandler: MouseEventHandler;
}

const _KeyboardBtn = ({ btnId, updateFormHandler }: AppProps) => {
  return (
    <button id={btnId} value={btnId} type="button" onClick={updateFormHandler}>
      {btnId}
    </button>
  );
};

export const KeyboardBtn = _KeyboardBtn;
