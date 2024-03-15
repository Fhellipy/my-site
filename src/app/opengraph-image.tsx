import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "About Acme";

export default async function Image() {
  const interSemiBold = await fetch(
    new URL("./Inter-SemiBold.ttf", process.env.NEXT_PUBLIC_VERCEL_URL),
  ).then(res => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        About Acme
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: interSemiBold,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
