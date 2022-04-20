import Head from "next/head";
import Image from "next/image";
import Countdown from "../components/Countdown";
import Timer from "../components/Timer";
import RenderTimer from "../components/Timer/HomepageTimer";
import styles from "../styles/Home.module.css";
import { CONSTANTS, PxToRem } from "../utils/constants";

export default function Home() {
  const blob = (dim) => parseInt((dim * 1000).toFixed(0));
  return (
    <div
      className={styles.container}
      style={{
        background: CONSTANTS.COLORS.COLOR_0,
        color: CONSTANTS.COLORS.COLOR_8,
      }}
    >
      <Head>
        <title>Reflect</title>
        <meta name="description" content="Reflect is coming soon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div
          style={{
            ...CONSTANTS.CSS.FLEX().SPACE_BETWEEN_CENTER,
            width: "80%",
          }}
        >
          <div style={CONSTANTS.CSS.FLEX("column").START}>
            <h4>Someone rightly said...</h4>
            <h1
              style={{
                fontSize: CONSTANTS.FONT[48],
                padding: `${PxToRem(15)} 0`,
              }}
            >
              Time is money.
            </h1>
          </div>
          <Timer UI={RenderTimer} />
        </div>
        <div style={{ position: "relative", marginTop: PxToRem(80) }}>
          <div
            className={styles.marqueeWebsites}
            style={{
              height: PxToRem(188),
              ...CONSTANTS.CSS.BLUR(1),
            }}
          />
          <div
            style={{
              width: "50%",
              height: PxToRem(228),
              borderRadius: PxToRem(20),
              background: CONSTANTS.COLORS.COLOR_8,
              opacity: 0.07,
              top: PxToRem(-20),
              left: PxToRem(50),
              position: "absolute",
              ...CONSTANTS.CSS.BLUR(2),
            }}
          ></div>
        </div>
        {/* Blobs */}
        <div
          style={{ ...CONSTANTS.CSS.FLEX().CENTER, marginTop: PxToRem(-440) }}
        >
          <div
            style={{
              position: "relative",
              width: "98vw",
              height: PxToRem(690),
            }}
          >
            {[
              {
                id: 1,
                dim: [blob(0.27), blob(0.27)],
                pos: [170, 467.5],
                opacity: 0.7,
              },
              {
                id: 2,
                dim: [blob(0.27), blob(0.27)],
                pos: [350.5, 467.5],
                opacity: 0.7,
              },
              {
                id: 3,
                dim: [blob(0.131), blob(0.131)],
                pos: [1003, 419],
                opacity: 0.7,
              },
              {
                id: 4,
                dim: [blob(0.131), blob(0.131)],
                pos: [1032, 250.5],
                opacity: 0.7,
              },
              {
                id: 5,
                dim: [blob(0.068), blob(0.068)],
                pos: [763, 63],
                opacity: 0.3,
              },
              {
                id: 6,
                dim: [blob(0.22), blob(0.22)],
                pos: [602, 63],
                opacity: 0.7,
              },
              {
                id: 7,
                dim: [blob(0.87), blob(1.2)],
                pos: [0, 0],
                opacity: 0.7,
              },
            ].map((blob) => {
              return (
                <span
                  key={blob.id}
                  style={{
                    position: "absolute",
                    opacity: blob.opacity,
                    left: blob.pos[0],
                    top: blob.pos[1],
                    height: blob.dim[0],
                    width: blob.dim[0],
                    userSelect: "none",
                  }}
                >
                  <Image
                    height={blob.dim[0]}
                    width={blob.dim[1]}
                    style={{ userSelect: "none" }}
                    // layout="fill"
                    src={`/static/images/blobs/${blob.id}.png`}
                    alt={`blob ${blob.id}`}
                  />
                </span>
              );
            })}
          </div>
        </div>
        <section
          style={{
            ...CONSTANTS.CSS.FLEX().CENTER,
          }}
        >
          <p style={{ width: "80%" }}>
            <b>
              These all social platforms know this very well. Even though you
              don’t pay them $$$ you are indirectly paying them by spending your
              time⏳ That’s why they want you to spend your time in their
              platform so that they can earn money. As rightly said Time is
              money. But what about you? Your time?
            </b>
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
