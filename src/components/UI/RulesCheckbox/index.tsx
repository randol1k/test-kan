import { ChangeEventHandler } from "react";

interface AppProps {
  updateFormHandler: ChangeEventHandler;
  agreedToRules: boolean;
}

const _RulesCheckbox = ({ updateFormHandler, agreedToRules }: AppProps) => {
  return (
    <>
      <input
        type="checkbox"
        id="rules"
        checked={agreedToRules}
        onChange={updateFormHandler}
      />
      <label htmlFor="rules">Я согласен с Правилами</label>
    </>
  );
};

export const RulesCheckbox = _RulesCheckbox;
