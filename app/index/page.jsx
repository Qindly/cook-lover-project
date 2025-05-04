"use client";
import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import DetailHeader from "@/components/DetailHeader";

const categories = [
  { id: "homefeed", name: "推荐" },
  { id: "vegetable", name: "素菜" },
  { id: "meat", name: "肉菜" },
  { id: "breakfast", name: "早餐" },
  { id: "lunch", name: "午餐" },
  { id: "dinner", name: "晚餐" },
  { id: "supper", name: "宵夜" },
  { id: "dessert", name: "甜点" },
  { id: "drink", name: "饮品" },
];

const IndexPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("homefeed"); // 默认分类
  const [textCase, setTextCase] = useState([]); // 动态数据

  // 监听 URL 查询参数变化
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const detail = params.get("detail") || "homefeed"; // 获取查询参数
    setSelectedCategory(detail);

    // 请求数据
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/recipes/index?category=${detail}`);
        const data = await response.json();
        setTextCase(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, [window.location.search]); // 当查询参数变化时重新执行

  return (
    <Layout>
      <div className="flex flex-col w-full h-screen overflow-hidden">
        {/* 分类导航 */}
        <DetailHeader details={categories} />
        {/* 动态内容 */}
        <div className="flex flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-4 gap-4 w-full">
            {textCase.map((item) => (
              <div key={item.id} className="aspect-5/4">
                <div className="bg-amber-200 p-2 flex flex-col justify-between h-full">
                  <img
                    src={item.image || "https://via.placeholder.com/150"}
                    alt={item.name}
                    className="w-full h-2/3 object-cover"
                  />
                  <div className="mt-2">
                    <h3 className="font-bold">{item.author}</h3>
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;