import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "ResonanceOps — AI Model Monitoring & Observability";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#f2fbfb",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(circle at 18% 20%, rgba(0,146,160,0.18), transparent 55%), radial-gradient(circle at 85% 15%, rgba(108,77,224,0.14), transparent 55%), radial-gradient(circle at 50% 90%, rgba(209,47,135,0.10), transparent 55%)",
          }}
        />
        <img
          src={logoSrc}
          alt=""
          width={140}
          height={140}
          style={{ position: "relative" }}
        />
        <div
          style={{
            position: "relative",
            marginTop: 24,
            fontSize: 58,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#0b1f20",
          }}
        >
          resonanceops
        </div>
        <div
          style={{
            position: "relative",
            marginTop: 14,
            fontSize: 26,
            color: "#4e686a",
          }}
        >
          AI model monitoring &amp; observability
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            height: 10,
            background:
              "linear-gradient(90deg, #0092a0 0%, #6c4de0 55%, #d12f87 100%)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
