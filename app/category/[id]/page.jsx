"use client";
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { useRouter } from "next/navigation";
import {
  HomeIcon,
  FolderIcon,
  PencilSquareIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

const SubcategoryPage = ({ params }) => {
  const { id } = React.use(params); // 获取动态路由参数
  // 确保 id 的值正确
  const [recipes, setRecipes] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(`/api/recipes/category?subcategory=${id}`);
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
      }
    };

    fetchRecipes();
  }, [id]);

  return (
    <Layout>
      <div className=" flex flex-1 h-screen  flex-col p-6 w-full  overflow-y-auto scrollbar-none">
        <h1 className="text-3xl font-bold mb-6">{id}</h1>
        <div className="grid grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="bg-white shadow rounded p-4">
              <img
                src={recipe.image || "https://via.placeholder.com/150"}
                alt={recipe.name}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h2 className="text-xl font-bold">{recipe.name}</h2>
              <p className="text-gray-600">分类: {recipe.category}</p>
              <p className="text-gray-600">
                烹饪时间: {recipe.cookingTime} 分钟
              </p>
              <p className="text-gray-600">难度: {recipe.difficulty}</p>
              <Link href={`/category/${recipe.category}`}>
                {recipe.category}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SubcategoryPage;
