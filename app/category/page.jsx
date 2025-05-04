"use client";
import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";

const categories = [
  {
    id: "dessert",
    name: "甜点",
    subcategories: [
      { id: "cake", name: "蛋糕" },
      { id: "tart", name: "蛋挞" },
      { id: "bread", name: "面包" },
    ],
  },
  {
    id: "drink",
    name: "饮品",
    subcategories: [
      { id: "coffee", name: "咖啡" },
      { id: "tea", name: "茶" },
      { id: "juice", name: "果汁" },
    ],
  },
  {
    id: "meat",
    name: "肉菜",
    subcategories: [
      { id: "beef", name: "牛肉" },
      { id: "chicken", name: "鸡肉" },
      { id: "pork", name: "猪肉" },
    ],
  },
  {
    id: "meat2",
    name: "肉菜",
    subcategories: [
      { id: "beef", name: "牛肉" },
      { id: "chicken", name: "鸡肉" },
      { id: "pork", name: "猪肉" },
    ],
  },
  {
    id: "meat3",
    name: "肉菜",
    subcategories: [
      { id: "beef", name: "牛肉" },
      { id: "chicken", name: "鸡肉" },
      { id: "pork", name: "猪肉" },
    ],
  },
  {
    id: "meat4",
    name: "肉菜",
    subcategories: [
      { id: "beef", name: "牛肉" },
      { id: "chicken", name: "鸡肉" },
      { id: "pork", name: "猪肉" },
    ],
  },
];

const CategoryPage = () => {
  return (
    <Layout>
      <div className=" flex flex-1 h-screen  flex-col p-6 w-full  overflow-y-auto scrollbar-none">
        <h1 className=" text-3xl font-bold mb-6">分类页面</h1>
        <div className="grid grid-cols-2 flex-1 gap-6 overflow-y-scroll  ">
          {categories.map((category) => (
            <div key={category.id} className="bg-white shadow rounded p-4">
              <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
              <div className="grid grid-cols-2 gap-4">
                {category.subcategories.map((subcategory) => (
                  <Link
                    key={subcategory.id}
                    href={`/category/${subcategory.id}`}
                    className="block bg-gray-100 hover:bg-gray-200 text-center p-4 rounded shadow"
                  >
                    {subcategory.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
