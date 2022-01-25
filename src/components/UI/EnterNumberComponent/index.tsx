import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FINAL_SCREEN_PATH,
  NUMBER_LENGTH,
  BEGIN_LETTER_INDEX,
  END_LETTER_INDEX,
  NUMBERS_IN_BRACKETS,
  BEGIN_NUMBER_IN_BRACKETS,
  END_NUMBER_IN_BRACKETS,
} from "src/utils";

import { DialPad } from "src/components/UI/DialPad";
import { RulesCheckbox } from "src/components/UI/RulesCheckbox";
import { SubmitNumberBtn } from "src/components/UI/SubmitNumberBtn";
import { useEffect } from "react";

const _EnterNumberComponent = () => {
  const navigate = useNavigate();
  const [enteredNumber, setEnteredNumber] = useState("");
  const [agreedToRules, setAgreedToRules] = useState(false);
  const [isNumberValid, setIsNumberValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const keyPress = (event: any) => {
      switch (event.key) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
          event.target.id = event.key;
          break;
        case "Backspace":
          event.target.id = "remove";
          break;
        default:
          break;
      }

      if (event.target.id === event.key || event.target.id === "remove") {
        updateFormHandler({
          target: { id: event.target.id, value: event.target.id },
        });
      }
    };

    document.addEventListener("keydown", keyPress);

    return () => {
      document.removeEventListener("keydown", keyPress);
    };
  }, []);

  useEffect(() => {
    if (enteredNumber.length === NUMBER_LENGTH && agreedToRules) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [enteredNumber, agreedToRules]);

  const updateFormHandler = (event: any) => {
    switch (event.target.id) {
      case "remove":
        setEnteredNumber((prevState) => {
          return prevState.slice(BEGIN_LETTER_INDEX, END_LETTER_INDEX);
        });
        break;
      case "rules":
        setAgreedToRules((prevState) => {
          return !prevState;
        });
        break;
      default:
        if (enteredNumber.length < NUMBER_LENGTH) {
          setEnteredNumber((prevState) => {
            return prevState + event.target.value;
          });
        }
        break;
    }
  };

  const submitNumberHandler = (event: any) => {
    event.preventDefault();

    if (isFormValid) {
      navigate(`/${FINAL_SCREEN_PATH}`);
    }
  };

  return (
    <div>
      <p>
        Number: +7{" "}
        {enteredNumber.length <= NUMBERS_IN_BRACKETS
          ? `(${enteredNumber})`
          : `(${enteredNumber.slice(
              BEGIN_NUMBER_IN_BRACKETS,
              END_NUMBER_IN_BRACKETS
            )}) ${enteredNumber.slice(END_NUMBER_IN_BRACKETS)}`}
      </p>
      <form onSubmit={submitNumberHandler}>
        <DialPad updateFormHandler={updateFormHandler} />
        <RulesCheckbox
          agreedToRules={agreedToRules}
          updateFormHandler={updateFormHandler}
        />
        <SubmitNumberBtn isFormValid={isFormValid} />
      </form>
    </div>
  );
};

export const EnterNumberComponent = _EnterNumberComponent;
