import React from "react";
import Layout from "@/components/Layout";
import CategoryHeader from "@/components/CategoryHeader";
const indexPage = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full h-screen overflow-hidden">
        <CategoryHeader />
        <div className="text-3xl font-bold underline bg-amber-100">
          indexPage
        </div>
      </div>
    </Layout>
  );
};

export default indexPage;
