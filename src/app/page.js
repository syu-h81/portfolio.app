"use client";

import { useState } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import SkillCard from '@components/SkillCard';
import ProjectCard from '@components/ProjectCard';
import Link from 'next/link';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  //スキルカードのコンポーネントの値
  const skillList = [
    {
      image: 'ri-html5-line ri-3x',
      language: 'HTML5',
      text: 'セマンティックなマークアップ、アクセシビリティ対応、SEOを意識したコーディングが得意です。HTML5の新機能やAPIを活用した実装経験も豊富です。'
    },
    {
      image: 'ri-css3-line ri-3x',
      language: 'CSS3',
      text: 'レスポンシブデザイン、Flexbox、Grid、アニメーション、CSSアーキテクチャの設計など、モダンなCSS技術を駆使したスタイリングが可能です。'
    },
    {
      image: 'ri-javascript-line ri-3x',
      language: 'JavaScript',
      text: 'ES6+の機能を活用した開発、非同期処理、DOM操作、WebAPIの利用など、インタラクティブなUI実装からデータ処理まで幅広く対応可能です。'
    },
    {
      image: 'ri-reactjs-line ri-3x',
      language: 'React',
      text: 'コンポーネント設計、状態管理（Redux/Context）、Hooks活用、パフォーマンス最適化など、Next.jsを使用しての開発が対応可能です。'
    },
    {
      image: 'ri-vuejs-line ri-3x',
      language: 'Vue.js',
      text: 'Vue3の開発経験があり、Vuex、Composition API、Vue Router等を使用した実務プロジェクトの経験があります。'
    },
    {
      image: 'ri-php-line ri-3x',
      language: 'PHP',
      text: 'WordPressでのサイト構築や、Laravelを用いたWebアプリ開発の経験があります。MVC設計による開発、DB操作、bladeのフロント開発も対応可能です。'
    },
    {
      image: 'ri-tailwind-css-line ri-3x',
      language: 'Tailwind CSS',
      text: 'ユーティリティファーストのアプローチを理解し、カスタマイズ設定やプラグインの活用、最適化など、実践的な開発経験があります。'
    },
     {
      image: 'ri-git-branch-line ri-3x',
      language: 'Git',
      text: 'バージョン管理、ブランチ戦略、コンフリクト解決、チーム開発でのGitフローの実践など、実務での経験が豊富です。'
    }
  ];

  // ProjectCardコンポーネントの値
  const workList = [
    {
      id: '1',
      image: '/AQ-RESIDENCE.png',
      title: 'AQ-Residence',
      text: '不動産サイトのリプレイス、パフォーマンス最適化',
      languages: ["HTML", "CSS", "JavaScript"],
      category: 'corporate'
    },
    {
      id: '2',
      image: '/nagoyaka.png',
      title: 'なごやかクリニック',
      text: '医療クリニックの公式サイト制作',
      languages: ["PHP", "WordPress", "JavaScript"],
      category: 'corporate'
    },
    {
      id: '3',
      image: '/miyakoshi-holdings.png',
      title: '宮越ホールディングス',
      text: '企業ブランディングを重視したグローバル対応サイト',
      languages: ["PHP", "WordPress", "JavaScript"],
      category: 'corporate'
    },
    {
      id: '4',
      image: '/pivotta.png',
      title: 'pivotta',
      text: '企業向け動画配信サービスのLP構築',
      languages: ["PHP", "WordPress", "JavaScript"],
      category: 'app'
    },
    {
      id: '5',
      image: '/SmartES.png',
      title: 'SmartES',
      text: 'AIを活用したSaaS型ES効率化アプリの開発',
      languages: ["React", "TypeScript"],
      category: 'app'
    },
    {
      id: '6',
      image: '/primekaji.png',
      title: '家事代行プライムカジ',
      text: '人材マッチングサービスのLP構築',
      languages: ["HTML", "CSS", "JavaScript", "PHP"],
      category: 'lp'
    }
  ];

  const filteredList =
    selectedCategory === 'all'
      ? workList
      : workList.filter((work) => work.category === selectedCategory);

  return (
    <>
    <Header />
      <main>
        <section id="hero" className='w-full h-screen flex flex-col justify-center items-center relative overflow-hidden'>
          <div></div>
          <div className="container">
            <div className="mx-auto text-center z-10">
              <h2 className="hero-text text-5xl md:text-7xl tracking-wider">檀上珠宇</h2>
              <p className="text-xl md:text-2xl text-gray-300 mt-4 tracking-widest">Frontend Engineer</p>
              <div className="body-btns mt-12 flex items-center justify-center gap-6">
                <button className="border border-white rounded-lg w-[150px] h-[45px] flex items-center justify-center font-medium tracking-wider hover:text-black hover:bg-white duration-300"><a href="#works">作品を見る</a></button>
                <button className="border border-white rounded-lg w-[150px] h-[45px] flex items-center justify-center font-medium tracking-wider hover:text-black hover:bg-white duration-300"><a href="#contact">お問い合わせ</a></button>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="py-24 px-8">
          <div className="container mx-auto">
            <h2 className="section-heading text-3xl mb-16">About</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <p className="text-base md:text-lg">
                フロントエンドエンジニアとして5年間の経験を持ち、50件以上のWeb制作コーディング実績があります。クライアントの要望を的確に理解し、モダンで使いやすいインターフェースを構築することを得意としています。<br></br>
                <br></br>
                フロントにおけるコーディングが対応可能で、レスポンシブデザイン、アニメーション、インタラクティブな要素の実装など、 ユーザー体験を向上させる技術を常に追求しています。<br></br>
                <br></br>
                新しい技術やトレンドにも常にアンテナを張り、最適なソリューションを提供することを心がけています。
              </p>
              <div className="pt-4">
                <h3 className="text-xl font-medium">経験</h3>
                <div className="flex items-center pt-8">
                  <div className="w-10 h-10 flex items-center justify-center mr-4 bg-gray-800 !rounded-button">
                    <i className="ri-expand-left-right-line ri-lg"></i>
                  </div>
                  <div className="about-expericence-text">
                    <p className="font-medium">Web制作コーディング</p>
                    <p className="text-gray-400 text-sm">50件以上の実績</p>
                  </div>
                </div>
                <div className="flex items-center pt-4">
                  <div className="w-10 h-10 flex items-center justify-center mr-4 bg-gray-800 !rounded-button">
                    <i className="ri-layout-line ri-lg"></i>
                  </div>
                  <div className="about-expericence-text">
                    <p className="font-medium">レスポンシブデザイン</p>
                    <p className="text-gray-400 text-sm">あらゆるデバイスに対応</p>
                  </div>
                </div>
                <div className="flex items-center pt-4">
                  <div className="w-10 h-10 flex items-center justify-center mr-4 bg-gray-800 !rounded-button">
                    <i className="ri-computer-line ri-lg"></i>
                  </div>
                  <div className="about-expericence-text">
                    <p className="font-medium">webアプリケーション・システム開発</p>
                    <p className="text-gray-400 text-sm">新規サービスの開発・既存システムの機能追加・改修などの対応</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="py-24 px-8 bg-gray-900">
          <div className="container mx-auto">
            <h2 className="section-heading text-3xl mb-16">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {skillList.map((skillItem, index) => {
                return (
                  <SkillCard
                    key = {skillItem.language}
                    image = {skillItem.image}
                    language = {skillItem.language}
                    text = {skillItem.text}
                  />
                );
              })}
            </div>
          </div>
        </section>
        <section id="works" className="py-24 px-8 md:px-20">
          <div className="container mx-auto">
            <h2 className="section-heading text-3xl mb-16">Works</h2>
            <div className="flex justify-center gap-4 flex-wrap">
              <button className={`border border-white text-sm rounded-lg w-[120px] h-[45px] flex items-center justify-center font-medium tracking-wider duration-300 ${selectedCategory === 'all' ? 'bg-white text-black' : 'hover:text-black hover:bg-white'}`} onClick={() => setSelectedCategory('all')}>All</button>
              <button className={`border border-white text-sm rounded-lg w-[120px] h-[45px] flex items-center justify-center font-medium tracking-wider duration-300 ${selectedCategory === 'lp' ? 'bg-white text-black' : 'hover:text-black hover:bg-white'}`} onClick={() => setSelectedCategory('lp')}>LP制作</button>
              <button className={`border border-white text-sm rounded-lg w-[120px] h-[45px] flex items-center justify-center font-medium tracking-wider duration-300 ${selectedCategory === 'corporate' ? 'bg-white text-black' : 'hover:text-black hover:bg-white'}`} onClick={() => setSelectedCategory('corporate')}>Web制作</button>
              <button className={`border border-white text-sm rounded-lg w-[120px] h-[45px] flex items-center justify-center font-medium tracking-wider duration-300 ${selectedCategory === 'app' ? 'bg-white text-black' : 'hover:text-black hover:bg-white'}`} onClick={() => setSelectedCategory('app')}>Webアプリ</button>
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
            <div className="pt-8 flex justify-center">
              <Link href="/works" className="border border-white text-sm rounded-lg w-[200px] h-[45px] flex items-center justify-center font-medium tracking-wider hover:text-black hover:bg-white duration-300">すべての作品を見る</Link>
            </div>
          </div>
        </section>
        <section id="message" className="py-24 px-8">
          <div className="container mx-auto">
            <h2 className="section-heading text-3xl mb-16">Message</h2>
            <div className="md:flex md:gap-12">
              <div>
                <img src="profile.jpg" alt="" />
              </div>
              <div className="pt-10 md:pt-0">
                <p className="leading-[2rem]">日々の忙しさについ忘れてしまいがちですが、今の私があるのは色んな人たちのサポートのおかげです。 退職の際に応援してくれた人、技術的に未熟な私にもお仕事を紹介してくださるエージェント、スキルを磨ける環境で働かせてくださったクライアントに、本当に心から感謝しています。</p>
                <p className="leading-[2rem] mt-6">様々なWebサービスに触れて人生が変わる体験をしたように、今後は消費するだけでなく、体験価値を届けられるようなエンジニアになりたい。 私自身が抱えている課題や周りの身近な人が抱えている問題をエンジニアリングで解決できるようになりたいと考えています。</p>
                <p className="leading-[2rem] mt-6">また、ものづくりが好きなので、生涯エンジニアとして社会に貢献し続けたいとも思っています。</p>
                <p className="leading-[2rem] mt-6">それを実現するにはどうしたらいいのか。</p>
                <p className="leading-[2rem] mt-6">日々進化し続ける技術をキャッチアップするための研鑽はもちろんのこと、 クライアントの悩みや課題を解決できるよう、クライアントの目線を培っていく必要があります。</p>
                <p className="leading-[2rem] mt-6">まだまだ至らない点はたくさんありますが、時代に合わせた技術を追いかけつつ、 クライアントに寄り添ったエンジニアリングができるよう、心がけていきます。</p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="py-24 px-8">
          <div className="container mx-auto">
            <h2 className="section-heading text-3xl mb-16">Contact</h2>
            <div className="mx-auto max-w-2xl">
              <form action="" className="space-y-8">
                <div>
                  <label className="">お名前</label>
                  <input type="text" className="w-full bg-gray-900 border-none rounded-md p-3 mt-2" />
                </div>
                <div>
                  <label className="">メールアドレス</label>
                  <input type="text" className="w-full bg-gray-900 border-none rounded-md p-3 mt-2" />
                </div>
                <div>
                  <label className="">お問い合わせ内容</label>
                  <textarea name="" className="w-full bg-gray-900 border-none rounded-md p-3 h-32 mt-2"></textarea>
                </div>
                <div>
                  <input type='submit' className="w-full bg-white text-black py-3 rounded-md hover:bg-gray-400 transition-all duration-300" />
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
