import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {

    const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const resData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/user`,
    {
      method: "GET",
      headers,
      credentials: "include",
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