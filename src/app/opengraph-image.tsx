import { ImageResponse } from "next/og";
import { toolSummaries } from "@/lib/tools/summaries";

export const alt = "AI Microtools — Free AI Generators";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#09090b",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 40, fontWeight: 700 }}>AI Microtools</div>
        <div style={{ display: "flex", marginTop: 32, fontSize: 68, fontWeight: 800, lineHeight: 1.1 }}>
          Free AI Tools, Zero Signup
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 32, color: "#a1a1aa" }}>
          {toolSummaries.length}+ AI-powered generators — business names, resumes, social bios, and more.
        </div>
      </div>
    ),
    { ...size }
  );
}
