import { ImageResponse } from "next/og";

export const alt = "Omthentic — More human. By design.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background: "#f4f3ed",
          color: "#252823",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 30,
          }}
        >
          <span style={{ fontWeight: 700, letterSpacing: "-1px" }}>
            omthentic
          </span>
          <span style={{ fontSize: 18, color: "#68715f" }}>
            A venture house for human potential
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 108,
            fontWeight: 700,
            letterSpacing: "-6px",
            lineHeight: 1.02,
          }}
        >
          <span>More human.</span>
          <span style={{ color: "#79816f" }}>By design.</span>
        </div>
        <div
          style={{
            display: "flex",
            borderTop: "1px solid #c9cdbf",
            paddingTop: 24,
            fontSize: 22,
            justifyContent: "space-between",
          }}
        >
          <span>You are already enough.</span>
          <span>omthentic.ai</span>
        </div>
      </div>
    ),
    size,
  );
}
