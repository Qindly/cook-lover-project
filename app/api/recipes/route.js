import { NextResponse } from 'next/server';
import Mock from 'mockjs';

export async function GET() {
  const recipes = Mock.mock({
    'recipes|10-20': [{
      'id|+1': 1,
      'name': '@ctitle(3, 7)',
      'category|1': ['vegetable', 'meat', 'breakfast', 'lunch', 'dinner', 'dessert'],
      'ingredients|2-5': ['@cword(2,4)'],
      'cookingTime|15-60': 15,
      'difficulty|1': ['简单', '中等', '困难'],
    }]
  });

  return NextResponse.json(recipes.recipes);
}