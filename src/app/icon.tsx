import { ImageResponse } from "next/og";

export const runtime = "edge";

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 22,
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: "50%",
        }}
      >
        F
      </div>
    ),
    {
      width: 32,
      height: 32,
    },
  );
}
