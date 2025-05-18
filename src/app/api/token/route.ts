import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = cookies();

  const token = cookieStore.get("gbese.sid");

  if (!token) {
    return (
      NextResponse.json(
        {
          message: "Unauthorize!",
        },
        { status: 401 }
      )
    )
  }

  const { value } = token;
  
  const response = NextResponse.json({ token: value });
  response.cookies.set("gbese.sid", value);
 

  return NextResponse.json({ token: value });
}
