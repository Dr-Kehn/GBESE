import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const resData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/register/initiate`,
    {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    }
  );

  const apiData = await resData.json();

  const { data } = apiData;
  const { status } = apiData;
  const { error } = apiData;
  
  if (status === "success") {
    const response = {
      data,
    };
    return new Response(JSON.stringify(response), {
      status: 200,
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
