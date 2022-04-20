import { CONSTANTS, PxToRem } from "../../utils/constants";

const RenderTimer = ({ hours, minutes, seconds }) => {
  return (
    <div
      style={{
        ...CONSTANTS.CSS.FLEX("column").START,
        ...CONSTANTS.CSS.BLUR(3),
        width: PxToRem(200),
        opacity: 0.5,
        userSelect: "none",
      }}>
      <h1 style={{ fontSize: CONSTANTS.FONT[90] }}>{hours}</h1>
      <div
        style={{ ...CONSTANTS.CSS.FLEX().START_END, paddingTop: PxToRem(10) }}>
        <h1 style={{ fontSize: CONSTANTS.FONT[60] }}>{minutes}</h1>
        <h1 style={{ fontSize: CONSTANTS.FONT[42], paddingLeft: PxToRem(10) }}>
          {seconds}
        </h1>
      </div>
    </div>
  );
};

export default RenderTimer;
