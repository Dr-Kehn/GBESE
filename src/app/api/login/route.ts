import { NextResponse, NextRequest } from "next/server";
import { serialize } from "cookie";

export async function POST(req: Request, res: NextRequest) {
  const body = await req.json();
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const resData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });

  const apiData = await resData.json();

  if (apiData.error) {
    const response = {
      message: apiData.error.message?.message || "An error occurred",
    };
    return new Response(JSON.stringify(response), {
      status: apiData.error.statusCode,
    });
  }
  
  const { data } = apiData;
  const { accessToken } = data;
  const { error } = apiData;
  const { status } = apiData;


  const serialized = serialize("token", accessToken, {
    httpOnly: true,
    secure: process.env.NEXT_PUBLIC_NODE_ENV !== `development`,
    maxAge: 60 * 60 * 24 * 1, // 1 day
    sameSite: `strict`,
    path: `/`,
  });


  if (status === "success") {
    const response = {
        data,
    };
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { "Set-cookie": serialized },
    });
  } else {
    const response = {
      message: error?.message?.message,
    };

    return new Response(JSON.stringify(response), {
      status: 400,
    });
  }
}
