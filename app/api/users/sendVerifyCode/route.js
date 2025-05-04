import { NextResponse } from "next/server";
import Mock from "mockjs";


export async function POST(request) {
  try {
    const { phone } = await request.json();
    const verifyCode = Mock.mock({
      "verifyCode|6": /\d/,
    }).verifyCode;

    return NextResponse.json({
      code: 1,
      message: "验证码发送成功",
      verifyCode,
      phone,
    });
  } catch (error) {
    return NextResponse.json({
      code: 0,
      message: "验证码发送失败",
    });
  }
}
