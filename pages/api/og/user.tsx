import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
    runtime: 'experimental-edge'
}

export default function(req: NextRequest) {
    const {searchParams} = new URL(req.url);
    const name = searchParams.get('name');
    return new ImageResponse((
        <div tw="flex gap-8 w-full h-full flex-col items-center justify-between p-24 bg-[#121212] text-white">
            <div tw="text-4xl font-bold">sayit.me</div>
            <div tw="flex flex-col w-full justify-center items-center rounded-xl p-8">
                <div tw="flex text-gray-200 text-3xl">Send</div>
                <div tw="flex text-9xl mt-4"><span tw="text-gray-500">@</span>{name}</div>
                <div tw="flex text-gray-200 text-3xl mt-8">an anonymous message!</div>
            </div>
            <div></div>
        </div>
    ),
    {width: 1080, height: 1920})
}