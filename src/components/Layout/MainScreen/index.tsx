import styles from "./MainScreen.module.scss";
import BgMain from "src/assets/bg-main.png";

import { EnterNumberComponent } from "src/components/UI/EnterNumberComponent";

const _MainScreen = () => {
  return (
    <div
      className={styles.mainScreen}
      style={{ backgroundImage: `url(${BgMain})` }}
    >
      <EnterNumberComponent />
    </div>
  );
};

export const MainScreen = _MainScreen;
