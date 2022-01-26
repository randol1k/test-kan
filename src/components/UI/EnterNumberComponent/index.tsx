import styles from "./EnterNumberComponent.module.scss";
import NumberFormat from "react-number-format";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FINAL_SCREEN_PATH,
  NUMBER_LENGTH,
  BEGIN_LETTER_INDEX,
  END_LETTER_INDEX,
  NUMBERS_IN_BRACKETS,
  BEGIN_NUMBER_IN_BRACKETS,
  END_NUMBER_IN_BRACKETS,
  INITIAL_FOCUSED_ELEMENT,
  keyPressHandler,
} from "src/utils";

import { DialPad } from "src/components/UI/DialPad";

const _EnterNumberComponent = () => {
  const navigate = useNavigate();
  const [enteredNumber, setEnteredNumber] = useState("");
  const [agreedToRules, setAgreedToRules] = useState(false);
  // const [isNumberValid, setIsNumberValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [focusedElement, setFocusedElement] = useState(INITIAL_FOCUSED_ELEMENT);

  useEffect(() => {
    document.addEventListener("keydown", (event) =>
      keyPressHandler(event, updateFormHandler, setFocusedElement)
    );

    return () => {
      document.removeEventListener("keydown", (event) =>
        keyPressHandler(event, updateFormHandler, setFocusedElement)
      );
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
        setEnteredNumber((prevState) => {
          if (prevState.length < NUMBER_LENGTH) {
            return prevState + event.target.value;
          }
          return prevState;
        });
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
    <div className={styles.enterNumberComponent}>
      <h3>Введите ваш номер мобильного телефона</h3>
      <NumberFormat
        format="+7 (###) ###-##-##"
        mask="_"
        value={enteredNumber}
        allowEmptyFormatting={true}
        className={styles.phoneParagraph}
        readOnly
      />
      <p className={styles.headingParagraph}>
        и с Вами свяжется наш менеджер для дальнейшей консультации
      </p>
      <form onSubmit={submitNumberHandler}>
        <DialPad
          setFocusedElement={setFocusedElement}
          updateFormHandler={updateFormHandler}
          focusedElement={focusedElement}
          isFormValid={isFormValid}
        />
      </form>
    </div>
  );
};

export const EnterNumberComponent = _EnterNumberComponent;
