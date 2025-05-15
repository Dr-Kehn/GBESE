import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const resData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/register/verify`,
    {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    }
  );

  const apiData = await resData.json();
  console.log("apiData:", apiData);
  

  if (apiData.error) {
    const response = {
      message: apiData.error || "An error occurred",
    };
    return new Response(JSON.stringify(response), {
      status: 400,
    });
  }

  const response = {
    apiData,
  };
  return new Response(JSON.stringify(response), {
    status: 200,
  });
}
