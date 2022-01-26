export const MAIN_SCREEN_PATH = "main";
export const FINAL_SCREEN_PATH = "final";
export const NUMBER_LENGTH = 10;
export const BEGIN_LETTER_INDEX = 0;
export const END_LETTER_INDEX = -1;
export const NUMBERS_IN_BRACKETS = 3;
export const BEGIN_NUMBER_IN_BRACKETS = 0;
export const END_NUMBER_IN_BRACKETS = 3;
export const INITIAL_FOCUSED_ELEMENT = "5";

export const keyPressHandler = (
  event: any,
  updateFormHandler: any,
  setFocusedElement: any
) => {
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
      updateFormHandler({
        target: { id: "remove", value: "remove" },
      });
      break;
    case "ArrowUp":
      setFocusedElement((prevState: string) => {
        if (["4", "5", "6", "7", "8", "9"].includes(prevState)) {
          return (Number(prevState) - 3).toString();
        } else if (prevState === "remove") {
          return "7";
        } else if (prevState === "0") {
          return "9";
        } else if (prevState === "agreeBox") {
          return "remove";
        } else if (prevState === "submitBtn") {
          return "agreeBox";
        }
        return prevState;
      });
      break;
    case "ArrowDown":
      setFocusedElement((prevState: string) => {
        if (["1", "2", "3", "4", "5", "6"].includes(prevState)) {
          return (Number(prevState) + 3).toString();
        } else if (["7", "8"].includes(prevState)) {
          return "remove";
        } else if (prevState === "9") {
          return "0";
        } else if (prevState === "0" || prevState === "remove") {
          return "agreeBox";
        } else if (prevState === "agreeBox") {
          return "submitBtn";
        }
        return prevState;
      });
      break;
    case "ArrowRight":
      setFocusedElement((prevState: string) => {
        if (["1", "2", "4", "5", "7", "8"].includes(prevState)) {
          return (Number(prevState) + 1).toString();
        } else if (prevState === "remove") {
          return "0";
        }
        return prevState;
      });
      break;
    case "ArrowLeft":
      setFocusedElement((prevState: string) => {
        if (["2", "3", "5", "6", "8", "9"].includes(prevState)) {
          return (Number(prevState) - 1).toString();
        } else if (prevState === "0") {
          return "remove";
        }
        return prevState;
      });
      break;
    default:
      break;
  }

  if (event.target.id === event.key) {
    updateFormHandler({
      target: { id: event.target.id, value: event.target.id },
    });
  }
};
