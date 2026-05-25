"use client";
import { useState } from "react";

export default function IBCalculatorSection() {
  const [clients, setClients] = useState(0);
  const [volume, setVolume] = useState(0);

  const monthlyRevenue = (clients * volume * 0.05).toFixed(2);

  return (
    <section style={{ background: "#050208", padding: "80px 0" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 80px" }}>
        <div style={{
          background: "linear-gradient(135deg, #0D1927 0%, #0a1628 100%)",
          border: "1px solid rgba(5,111,180,0.3)",
          borderRadius: "24px",
          padding: "60px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}>

          <div>
            <h2 className="section-title" style={{ marginBottom: "8px" }}>
              Unlock Your Earning Potential
            </h2>
            <p style={{
              fontFamily: "var(--font-inter, Inter)",
              fontSize: "14px",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "40px",
            }}>
              Specify the expected values of your partner network
            </p>

            <div style={{ marginBottom: "32px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span style={{ fontFamily: "var(--font-inter, Inter)", fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>
                  Active referral clients
                </span>
                <span style={{ fontFamily: "var(--font-inter, Inter)", fontSize: "14px", color: "#056FB4", fontWeight: 600 }}>
                  {clients} trades
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={500}
                value={clients}
                onChange={(e) => setClients(Number(e.target.value))}
                style={{ width: "100%", accentColor: "#056FB4" }}
              />
            </div>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span style={{ fontFamily: "var(--font-inter, Inter)", fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>
                  Average trade volume
                </span>
                <span style={{ fontFamily: "var(--font-inter, Inter)", fontSize: "14px", color: "#056FB4", fontWeight: 600 }}>
                  {volume} Lots
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={1000}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                style={{ width: "100%", accentColor: "#056FB4" }}
              />
            </div>
          </div>

          <div style={{
            background: "rgba(5,111,180,0.08)",
            border: "1px solid rgba(5,111,180,0.3)",
            borderRadius: "16px",
            padding: "40px",
            textAlign: "center",
          }}>
            <p style={{
              fontFamily: "var(--font-inter, Inter)",
              fontSize: "14px",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "16px",
            }}>
              Monthly revenue will be*
            </p>
            <p style={{
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 700,
              fontSize: "40px",
              color: "#FFFFFF",
              margin: "0 0 32px",
            }}>
              {monthlyRevenue} USD
            </p>
            <button style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 28px",
              borderRadius: "8px",
              background: "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--font-sora, Sora)",
              fontSize: "16px",
              color: "#FFFFFF",
            }}>
              Yes, I&apos;m Ready! →
            </button>
            <p style={{
              fontFamily: "var(--font-inter, Inter)",
              fontSize: "11px",
              color: "rgba(255,255,255,0.3)",
              marginTop: "16px",
            }}>
              *Please note that the following calculations are estimations and subject to the trading of the instrument XAUUZ, earning which as a reference will be in determining the earnings.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
