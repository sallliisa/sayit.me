import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
    runtime: 'experimental-edge'
}

export default function(req: NextRequest) {
    const {searchParams} = new URL(req.url);
    const message = searchParams.get('message');
    const name = searchParams.get('name');
    return new ImageResponse((
        <div tw="flex gap-8 w-full h-full flex-col items-center justify-between p-24 bg-[#121212] text-white">
            <div tw="text-4xl font-bold">sayit.me</div>
            <div tw="flex flex-col w-full justify-center rounded-xl bg-gray-800 p-8">
                <div tw="flex text-gray-500 text-xl">to @{name}</div>
                <div tw="flex text-3xl mt-2">{message}</div>
            </div>
            <div></div>
        </div>
    ),
    {width: 1080, height: 1920})
}