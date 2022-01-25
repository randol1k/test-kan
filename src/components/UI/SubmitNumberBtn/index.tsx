interface AppProps {
  isFormValid: boolean;
}
const _SubmitNumberBtn = ({ isFormValid }: AppProps) => {
  return (
    <button disabled={!isFormValid} type="submit">
      Отправить Номер
    </button>
  );
};

export const SubmitNumberBtn = _SubmitNumberBtn;
