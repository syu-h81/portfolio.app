"use client";
import { useState } from "react";
import Header from '@components/Header';
import Footer from '@components/Footer';
import ProjectCard from '@components/ProjectCard';


export default function Works() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  // ProjectCardコンポーネントの値
  const workList = [
    {
      id: '1',
      image: '/AQ-RESIDENCE.png',
      title: 'AQ-Residence',
      text: '不動産サイトのリプレイス、パフォーマンス最適化',
      languages: ["HTML", "CSS", "JavaScript"],
      category: "corporate",
    },
    {
      id: '2',
      image: '/nagoyaka.png',
      title: 'なごやかクリニック',
      text: '医療クリニックの公式サイト制作',
      languages: ["PHP", "WordPress", "JavaScript"],
      category: "corporate",
    },
    {
      id: '3',
      image: '/miyakoshi-holdings.png',
      title: '宮越ホールディングス',
      text: '企業ブランディングを重視したグローバル対応サイト',
      languages: ["PHP", "WordPress", "JavaScript"],
      category: "corporate",
    },
    {
      id: '4',
      image: '/pivotta.png',
      title: 'pivotta',
      text: '企業向け動画配信サービスのLP構築',
      languages: ["PHP", "WordPress", "JavaScript"],
      category: "lp",
    },
    {
      id: '5',
      image: '/SmartES.png',
      title: 'SmartES',
      text: 'AIを活用したSaaS型ES効率化アプリの開発',
      languages: ["React", "TypeScript"],
      category: "app",
    },
    {
      id: '6',
      image: '/primekaji.png',
      title: '家事代行プライムカジ',
      text: '人材マッチングサービスのLP構築',
      languages: ["HTML", "CSS", "JavaScript", "PHP"],
      category: "lp",
    },
    {
      id: '7',
      image: '/SoLaNi-ENERGIE.png',
      title: 'SoLaNi-ENERGIE',
      text: '',
      languages: ["HTML", "CSS", "JavaScript", "PHP"],
      category: "corporate",
    },
    {
      id: '8',
      image: '/aijukai.png',
      title: '愛寿会',
      text: '老人ホームのHP構築',
      languages: ["HTML", "CSS", "JavaScript", "PHP"],
      category: "corporate",
    },
    {
      id: '9',
      image: '/smile_sumai.png',
      title: 'SMILE SUMAI',
      text: '不動産比較メディアサイトの構築',
      languages: ["HTML", "CSS", "JavaScript", "Vue"],
      category: "app",
    },
    {
      id: '10',
      image: '/earth_design_lab.png',
      title: 'EARTH DESIGN LAB',
      text: '一級建築事務所のHP構築',
      languages: ["HTML", "CSS", "JavaScript", "PHP"],
      category: "corporate",
    },
    {
      id: '11',
      image: '/hirock-lab.png',
      title: 'ヒロックラボ',
      text: 'Webマーケ・制作会社のHP構築',
      languages: ["HTML", "CSS", "JavaScript", "PHP"],
      category: "corporate",
    },
  ];

  const filteredList =
    selectedCategory === "all"
      ? workList
      : workList.filter((work) => work.category === selectedCategory);

  return (
    <main>
      <Header />
      <section className="py-24 px-8">
        <div className="container mx-auto">
          <h2 className="section-heading text-3xl mb-16">作品一覧</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6 border-gray-800 border-b">
              <button className={selectedCategory === "all" ? "border-b-2 border-white py-3": "py-3"} onClick={() => setSelectedCategory("all")}>すべて</button>
              <button className={selectedCategory === "corporate" ? "border-b-2 border-white py-3": "py-3"} onClick={() => setSelectedCategory("corporate")}>コーポレートサイト</button>
              <button className={selectedCategory === "lp" ? "border-b-2 border-white py-3": "py-3"} onClick={() => setSelectedCategory("lp")}>ランディングページ</button>
              <button className={selectedCategory === "app" ? "border-b-2 border-white py-3": "py-3"} onClick={() => setSelectedCategory("app")}>Webアプリケーション</button>
              <button className={selectedCategory === "ec" ? "border-b-2 border-white py-3": "py-3"} onClick={() => setSelectedCategory("ec")}>ECサイト</button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 md:container">
            {filteredList.map((workItem, index) => {
              return (
                <ProjectCard
                  id={workItem.id}
                  key={workItem.title}
                  image={workItem.image}
                  title={workItem.title}
                  text={workItem.text}
                  languages={workItem.languages}
                />
              )
            })}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
