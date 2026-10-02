import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";
import { TOKENS } from "@/data/tokens";
import { SITE } from "@/data/site";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OGImage() {
  // Load local font for reliable, consistent OG image rendering
  const fontData = fs.readFileSync(
    path.join(process.cwd(), "assets", "fonts", "SpaceGrotesk-Bold.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: TOKENS.paper,
          padding: "48px",
          fontFamily: '"Space Grotesk", sans-serif',
          position: "relative",
        }}
      >
        {/* Outer Inset Frame (8px equivalent border) */}
        <div
          style={{
            position: "absolute",
            top: "32px",
            left: "32px",
            right: "32px",
            bottom: "32px",
            border: `6px solid ${TOKENS.ink}`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "48px",
          }}
        >
          {/* Top Row: Wordmark & Category */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: "42px",
                fontWeight: 900,
                letterSpacing: "0.04em",
                color: TOKENS.ink,
              }}
            >
              {SITE.name}
            </div>

            <div
              style={{
                fontSize: "18px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: TOKENS.ink,
                border: `3px solid ${TOKENS.ink}`,
                padding: "8px 16px",
                backgroundColor: TOKENS.white,
                boxShadow: `4px 4px 0 0 ${TOKENS.ink}`,
              }}
            >
              DIGITAL STUDIO
            </div>
          </div>

          {/* Center Main Statement */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              maxWidth: "920px",
            }}
          >
            <div
              style={{
                fontSize: "62px",
                fontWeight: 900,
                lineHeight: 1.05,
                color: TOKENS.ink,
                letterSpacing: "-0.03em",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <span>Your business deserves a</span>
              <span
                style={{
                  backgroundColor: TOKENS.green,
                  color: TOKENS.ink,
                  padding: "4px 20px",
                  border: `4px solid ${TOKENS.ink}`,
                  boxShadow: `8px 8px 0 0 ${TOKENS.ink}`,
                }}
              >
                better
              </span>
              <span>digital presence.</span>
            </div>

            <div
              style={{
                fontSize: "24px",
                color: TOKENS.mutedLight,
                marginTop: "12px",
                lineHeight: 1.4,
              }}
            >
              {SITE.tagline}
            </div>
          </div>

          {/* Bottom Bar: Metadata */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: `4px solid ${TOKENS.ink}`,
              paddingTop: "24px",
            }}
          >
            <div
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: TOKENS.ink,
                letterSpacing: "0.05em",
              }}
            >
              https://axiomata.in
            </div>

            <div
              style={{
                fontSize: "16px",
                color: TOKENS.mutedLight,
                letterSpacing: "0.08em",
              }}
            >
              © 2026 AXIOMATA — ALL RIGHTS RESERVED
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Space Grotesk",
          data: fontData,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}
