"use client";
import { useState } from "react";

export default function IBCalculatorSection() {
  const [clients, setClients] = useState(0);
  const [volume, setVolume] = useState(0);

  const monthlyRevenue = (clients * volume * 0.05).toFixed(2);

  return (
    <section style={{ background: "#050208", padding: "80px 0" }}>
      <style>{`
        .ib-slider {
          -webkit-appearance: none;
          appearance: none;
          height: 10px;
          border-radius: 4px;
          background: rgba(255,255,255,0.15);
          outline: none;
          cursor: pointer;
        }
        .ib-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%);
          cursor: pointer;
          border: none;
        }
        .ib-slider::-moz-range-thumb {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%);
          cursor: pointer;
          border: none;
        }
      `}</style>

      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 80px" }}>
        <div style={{
          position: "relative",
          width: "1286px",
          height: "558px",
          background: "#050208",
          border: "1px solid #056FB4",
          borderRadius: "30px",
          boxSizing: "border-box",
          margin: "0 auto",
        }}>

          {/* Title */}
          <h2 style={{
            position: "absolute",
            top: "72px",
            left: "80px",
            width: "548px",
            height: "43px",
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "36px",
            lineHeight: "43px",
            letterSpacing: 0,
            color: "#FFFFFF",
            margin: 0,
          }}>
            Unlock Your Earning Potential
          </h2>

          {/* Subtitle */}
          <p style={{
            position: "absolute",
            top: "133px",
            left: "80px",
            width: "455px",
            height: "19px",
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "100%",
            letterSpacing: 0,
            color: "rgba(255,255,255,0.5)",
            margin: 0,
          }}>
            Specify the expected values of your partner network
          </p>

          {/* Slider 1 label */}
          <span className="slider-label" style={{ position: "absolute", top: "200px", left: "82px", width: "226px", height: "27px" }}>
            Active referral clients
          </span>
          {/* Slider 1 count */}
          <span style={{
            position: "absolute",
            top: "200px",
            left: "316px",
            width: "88px",
            height: "27px",
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 500,
            fontSize: "22px",
            lineHeight: "100%",
            letterSpacing: 0,
            color: "#FFFFFF",
          }}>
            {clients} trades
          </span>

          {/* Slider 1 */}
          <input
            type="range"
            className="ib-slider"
            min={0}
            max={500}
            value={clients}
            onChange={(e) => setClients(Number(e.target.value))}
            style={{
              position: "absolute",
              top: "254px",
              left: "82px",
              width: "625px",
              height: "10px",
            }}
          />

          {/* Slider 2 label */}
          <span className="slider-label" style={{ position: "absolute", top: "323px", left: "82px", width: "234px", height: "27px" }}>
            Average trade volume
          </span>
          {/* Slider 2 count */}
          <span style={{
            position: "absolute",
            top: "323px",
            left: "324px",
            width: "66px",
            height: "27px",
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 500,
            fontSize: "22px",
            lineHeight: "100%",
            letterSpacing: 0,
            color: "#FFFFFF",
          }}>
            {volume} Lots
          </span>

          {/* Slider 2 */}
          <input
            type="range"
            className="ib-slider"
            min={0}
            max={1000}
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            style={{
              position: "absolute",
              top: "377px",
              left: "82px",
              width: "625px",
              height: "10px",
            }}
          />

          {/* Revenue box */}
          <div style={{
            position: "absolute",
            top: "78px",
            left: "834px",
            width: "377px",
            height: "165px",
            borderRadius: "8px",
            border: "1px solid #056FB4",
            background: `
              linear-gradient(0deg, rgba(10,10,10,0.7), rgba(10,10,10,0.7)),
              linear-gradient(119.3deg, rgba(0,0,0,0) 23.34%, rgba(73,109,171,0.3) 96.36%)
            `,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
          }}>
            <p style={{
              fontFamily: "var(--font-inter, Inter)",
              fontSize: "14px",
              color: "rgba(255,255,255,0.5)",
              margin: "0 0 12px",
            }}>
              Monthly revenue will be*
            </p>
            <p style={{
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 700,
              fontSize: "40px",
              color: "#FFFFFF",
              margin: 0,
            }}>
              {monthlyRevenue} USD
            </p>
          </div>

          {/* Are you ready text */}
          <span style={{
            position: "absolute",
            top: "280px",
            left: "936px",
            width: "172px",
            height: "19px",
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "100%",
            letterSpacing: 0,
            color: "#FFFFFF99",
          }}>
            Are you ready to earn?
          </span>

          {/* Button */}
          <button style={{
            position: "absolute",
            top: "309px",
            left: "909px",
            width: "226.02px",
            height: "56.5px",
            borderRadius: "28.83px",
            background: "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
            border: "none",
            cursor: "pointer",
            fontFamily: "var(--font-sora, Sora)",
            fontSize: "16px",
            color: "#FFFFFF",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}>
            Yes, I&apos;m Ready! →
          </button>

          {/* Note */}
          <p style={{
            position: "absolute",
            top: "446px",
            left: "80px",
            width: "830px",
            height: "34px",
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "100%",
            letterSpacing: 0,
            color: "#FFFFFF99",
            margin: 0,
            overflow: "hidden",
          }}>
            *Please note that the following calculations are preliminary and based on the trading of one instrument (GOLD), serving solely as a reference and not representing final earnings.
          </p>

        </div>
      </div>
    </section>
  );
}
