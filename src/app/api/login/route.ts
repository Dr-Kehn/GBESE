import { NextResponse, NextRequest } from "next/server";
import { serialize } from "cookie";

export async function POST(req: Request, res: NextRequest) {
  const body = await req.json();
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const resData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/login`,
    {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    }
  );

  const apiData = await resData.json();

  if (apiData.error) {
    const response = {
      message: apiData.error || "An error occurred",
    };
    return new Response(JSON.stringify(response), {
      status: 400,
    });
  }


  const responseCookies = resData.headers.getSetCookie();
  const serializedCookies: string[] = [];
  console.log(responseCookies)

  responseCookies.forEach(cookie => {
  const [name, ...rest] = cookie.split('=');
  const value = rest.join('=');
  // serialize each cookie...
  serializedCookies.push(
      serialize(name, value, {
        httpOnly: true,
        secure: process.env.NEXT_PUBLIC_NODE_ENV !== 'development',
        maxAge: 60 * 60 * 24 * 1, // 1 day
        sameSite: 'strict',
        path: '/',
      })
    );
});

  const response = {
    apiData,
  };

  

  const responseHeaders = new Headers();
  serializedCookies.forEach(cookie => {
    responseHeaders.append('Set-Cookie', cookie);
  });

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: responseHeaders,
  });
}
