import styles from "./App.module.scss";
import { Routes, Route } from "react-router-dom";
import { MAIN_SCREEN_PATH, FINAL_SCREEN_PATH } from "src/utils";

import { MainScreen } from "src/components/Layout/MainScreen";

function _App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        {/* <Route path={`/${MAIN_SCREEN_PATH}`} />
        <Route path={`/${FINAL_SCREEN_PATH}`} /> */}
      </Routes>
    </div>
  );
}

export const App = _App;
