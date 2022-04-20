import "../styles/globals.css";
import { CONSTANTS, PxToRem } from "../utils/constants";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div
        style={{
          ...CONSTANTS.CSS.FLEX().CENTER,
          width: "100%",
          height: PxToRem(40),
          position: "absolute",
          padding: PxToRem(20),
          color: CONSTANTS.COLORS.COLOR_8,
        }}
      >
        Reflect
        <ul>
          <li>Why Reflect</li>
          <li>Features</li>
        </ul>
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
