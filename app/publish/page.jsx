"use client";
import React, { useState } from "react";
import Layout from "@/components/Layout";

const PublishPage = () => {
  const [steps, setSteps] = useState([{ id: 1, description: "" }]);

  const addStep = () => {
    setSteps([...steps, { id: steps.length + 1, description: "" }]);
  };

  const updateStep = (id, value) => {
    setSteps(
      steps.map((step) =>
        step.id === id ? { ...step, description: value } : step
      )
    );
  };

  return (
    <Layout>
      <div className="flex h-screen w-full">


        {/* 中间编辑区域 */}
        <div className="flex-1 p-6 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4">创建菜谱</h1>
          <div className="mb-6">
            <label className="block text-lg font-bold mb-2">菜谱标题</label>
            <input
              type="text"
              placeholder="添加菜谱标题"
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-bold mb-2">菜谱故事</label>
            <textarea
              placeholder="输入这道美食背后的故事"
              className="w-full border border-gray-300 rounded p-2 h-24"
            ></textarea>
          </div>
          <div className="mb-6">
            <label className="block text-lg font-bold mb-2">用料</label>
            <div className="flex gap-4 items-center mb-2">
              <input
                type="text"
                placeholder="食材"
                className="flex-1 border border-gray-300 rounded p-2"
              />
              <input
                type="text"
                placeholder="用量"
                className="flex-1 border border-gray-300 rounded p-2"
              />
              <button className="bg-gray-200 px-4 py-2 rounded">再增加一行</button>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-lg font-bold mb-2">做法</label>
            {steps.map((step) => (
              <div key={step.id} className="flex items-center gap-4 mb-2">
                <span className="text-lg font-bold">步骤 {step.id}</span>
                <textarea
                  placeholder="在此添加步骤说明"
                  className="flex-1 border border-gray-300 rounded p-2 h-20"
                  value={step.description}
                  onChange={(e) => updateStep(step.id, e.target.value)}
                ></textarea>
              </div>
            ))}
            <button
              className="bg-gray-200 px-4 py-2 rounded"
              onClick={addStep}
            >
              再增加一行
            </button>
          </div>
          <div className="mb-6">
            <label className="block text-lg font-bold mb-2">小贴士</label>
            <textarea
              placeholder="这道菜有哪些需要注意的细节和小技巧？"
              className="w-full border border-gray-300 rounded p-2 h-24"
            ></textarea>
          </div>
          <div className="flex gap-4">
            <button className="bg-gray-200 px-4 py-2 rounded">存草稿</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded">
              发布
            </button>
          </div>
        </div>

        {/* 右侧预览区域 */}
        <div className="w-1/4 bg-gray-50 p-4">
          <div className="bg-white shadow rounded p-4">
            <h2 className="text-xl font-bold mb-4">预览</h2>
            <p className="text-gray-600">用料</p>
            <ul className="mb-4">
              <li>食材 1 - 用量 1</li>
              <li>食材 2 - 用量 2</li>
            </ul>
            <p className="text-gray-600">步骤</p>
            <ol>
              {steps.map((step) => (
                <li key={step.id} className="mb-2">
                  步骤 {step.id}: {step.description || "未填写"}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PublishPage;