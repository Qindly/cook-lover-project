import { NextResponse } from "next/server";
import Mock from "mockjs";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category"); // 获取查询参数

  const recipes = Mock.mock({
    "recipes|10-20": [
      {
        "id|+1": 1,
        name: "@ctitle(3, 7)",
        author: "@cname",
        "description|1": [
          "@cparagraph(1, 3)",
          "@cparagraph(1, 3)",
          "@cparagraph(1, 3)",
        ],
        category:
          category ||
          "@pick(['vegetable', 'meat', 'breakfast', 'lunch', 'dinner', 'dessert'])",
        "ingredients|2-5": ["@cword(2,4)"],
        "cookingTime|15-60": 15,
        difficulty: "@pick(['简单', '中等', '困难'])",
        image: "https://via.placeholder.com/150",
      },
    ],
  });

  return NextResponse.json(recipes.recipes);
}
