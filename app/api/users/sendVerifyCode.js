import { NextResponse } from "next/server";
import Mock from "mockjs";
export async function POST(request) {
  console.log("request", request);
  // const { phone } = await request.json();
  // console.log("phone", phone);
  const verifyCode = Mock.mock({
    "verifyCode|6": /\d/,
  }).verifyCode;
  // console.log("verifyCode", verifyCode);
  return NextResponse.json({ success: true, message: verifyCode });
}
