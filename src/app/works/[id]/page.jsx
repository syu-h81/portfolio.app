// app/works/[id]/page.jsx
import Header from '@components/Header';
import Footer from '@components/Footer';
import Image from 'next/image';


export default async function WorksDetail({ params }) {
  const { id } = params;
  // ProjectCardコンポーネントの値
  const workList = [
    {
      id: '1',
      image: '/AQ-RESIDENCE.png',
      title: 'AQ-Residence',
      text: '不動産サイトのリプレイス、パフォーマンス最適化',
      languages: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: '2',
      image: '/nagoyaka.png',
      title: 'なごやかクリニック',
      text: '医療クリニックの公式サイト制作',
      languages: ["PHP", "WordPress", "JavaScript"],
    },
    {
      id: '3',
      image: '/miyakoshi-holdings.png',
      title: '宮越ホールディングス',
      text: '企業ブランディングを重視したグローバル対応サイト',
      languages: ["PHP", "WordPress", "JavaScript"]
    },
    {
      id: '4',
      image: '/pivotta.png',
      title: 'pivotta',
      text: '企業向け動画配信サービスのLP構築',
      languages: ["PHP", "WordPress", "JavaScript"]
    },
    {
      id: '5',
      image: '/SmartES.png',
      title: 'SmartES',
      text: 'AIを活用したSaaS型ES効率化アプリの開発',
      languages: ["React", "TypeScript"]
    },
    {
      id: '6',
      image: '/primekaji.png',
      title: '家事代行プライムカジ',
      text: '人材マッチングサービスのLP構築',
      languages: ["HTML", "CSS", "JavaScript", "PHP"]
    },
    {
      id: '7',
      image: '/SoLaNi-ENERGIE.png',
      title: 'SoLaNi-ENERGIE',
      text: '',
      languages: ["HTML", "CSS", "JavaScript", "PHP"]
    },
    {
      id: '8',
      image: '/aijukai.png',
      title: '愛寿会',
      text: '老人ホームのHP構築',
      languages: ["HTML", "CSS", "JavaScript", "PHP"]
    },
    {
      id: '9',
      image: '/smile_sumai.png',
      title: 'SMILE SUMAI',
      text: '不動産比較メディアサイトの構築',
      languages: ["HTML", "CSS", "JavaScript", "Vue"]
    },
    {
      id: '10',
      image: '/earth_design_lab.png',
      title: 'EARTH DESIGN LAB',
      text: '一級建築事務所のHP構築',
      languages: ["HTML", "CSS", "JavaScript", "PHP"]
    },
    {
      id: '11',
      image: '/hirock-lab.png',
      title: 'ヒロックラボ',
      text: 'Webマーケ・制作会社のHP構築',
      languages: ["HTML", "CSS", "JavaScript", "PHP"]
    },
  ];
  const project = workList.find((item) => item.id === id);

  if (!project) {
    return (
      <main className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <p>該当するプロジェクトが見つかりませんでした。</p>
      </main>
    );
  }

  return (
    <>
      <Header />
      <main>
        <section className="max-w-4xl mx-auto py-20 px-6">
          <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={400}
            className="rounded-lg mb-6 object-cover"
          />
          <p className="text-lg mb-4">{project.text}</p>
          <div className="flex flex-wrap gap-2 mt-6">
            {project.languages.map((lang, index) => (
              <span
                key={index}
                className="bg-gray-800 text-sm px-3 py-1 rounded-md"
              >
                {lang}
              </span>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}