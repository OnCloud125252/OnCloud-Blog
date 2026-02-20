import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { siteConfig } from "@/config/site";

export const runtime = "edge";

const interBold = fetch(
  new URL("../../../assets/fonts/Inter-Bold.ttf", import.meta.url),
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
  try {
    const fontBold = await interBold;

    const { searchParams } = req.nextUrl;
    const title = searchParams.get("title");

    if (!title) {
      return new Response("No title provided", { status: 500 });
    }

    const heading = title.length > 60 ? `${title.substring(0, 60)}...` : title;

    return new ImageResponse(
      <div tw="flex relative flex-col p-10 pt-6 w-full h-full items-start text-black bg-white">
        <div tw="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4 11a9 9 0 0 1 9 9" />
            <path d="M4 4a16 16 0 0 1 16 16" />
            <circle cx="5" cy="19" r="1" />
          </svg>
          <p tw="ml-2 font-bold text-2xl">OnCloud Blog</p>
        </div>
        <div tw="flex flex-col flex-1 pt-2">
          <div tw="flex text-[80px] font-bold text-6xl">{heading}</div>
        </div>
        <div tw="flex items-center w-full justify-between">
          <div tw="flex text-xl">{siteConfig.url}</div>
          <div tw="flex items-center text-xl">
            <div tw="flex ml-2">{siteConfig.links.github}</div>
          </div>
        </div>
      </div>,
      {
        width: 900,
        height: 400,
        fonts: [
          {
            name: "Inter",
            data: fontBold,
            style: "normal",
            weight: 700,
          },
        ],
      },
    );
  } catch (_error) {
    return new Response("Failed to generate image", { status: 500 });
  }
}
