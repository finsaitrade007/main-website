import Image from "next/image";

export default function ContactGlobeSection() {
  return (
    <section
      className="page-section"
      style={{
        background: "#050208",
        width: "100%",
        maxWidth: "1440px",
        margin: "0 auto",
        paddingBottom: "96px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "600px",
          height: "600px",
          maxWidth: "100%",
        }}
      >
        <Image
          src="/contact/globe.png"
          alt="Global support across markets"
          fill
          sizes="(max-width: 768px) 90vw, 600px"
          style={{
            objectFit: "contain",
            pointerEvents: "none",
            userSelect: "none",
          }}
          priority={false}
        />
      </div>
    </section>
  );
}
