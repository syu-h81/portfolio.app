import Header from '@components/Header';
import Footer from '@components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const categoryLabels = {
  corporate: 'コーポレートサイト',
  lp: 'ランディングページ',
  app: 'Webアプリケーション',
  ec: 'ECサイト',
};

const projects = [
  {
    id: '1',
    image: '/AQ-RESIDENCE.png',
    title: 'AQ-Residence',
    summary: '不動産サイトのリプレイスとパフォーマンス最適化を担当。',
    description:
      '既存サイトの情報設計を見直しながら、表示速度と更新性の両立を意識して再構築したプロジェクトです。ユーザーが物件情報へたどり着きやすい導線設計と、安定した運用が続けられるマークアップを重視しました。',
    languages: ['HTML', 'CSS', 'JavaScript'],
    category: 'corporate',
    role: 'フロントエンド実装 / UI調整 / パフォーマンス改善',
    period: '約2か月',
    deliverables: ['サイトリプレイス', 'レスポンシブ対応', '表示速度改善'],
    points: [
      'ファーストビューと下層ページの表示体験を改善し、離脱しにくい設計に調整',
      '保守しやすいHTML構造とCSS設計で、更新時の負荷を軽減',
      'アニメーションを入れつつも、閲覧体験が重くならないよう最適化',
    ],
  },
  {
    id: '2',
    image: '/nagoyaka.png',
    title: 'なごやかクリニック',
    summary: '医療クリニックの公式サイト制作。',
    description:
      '医療機関としての信頼感と親しみやすさの両方が伝わるよう、情報の整理と視認性を丁寧に設計した案件です。診療内容やアクセス情報など、来院前に確認されやすい情報を見つけやすく配置しました。',
    languages: ['PHP', 'WordPress', 'JavaScript'],
    category: 'corporate',
    role: 'WordPress構築 / フロント実装 / 更新導線の設計',
    period: '約1.5か月',
    deliverables: ['コーポレートサイト制作', 'CMS実装', '導線最適化'],
    points: [
      '高齢の利用者も想定し、文字サイズや余白感を意識した読みやすいUIを構築',
      '更新頻度の高いお知らせ周りをWordPressで扱いやすく設計',
      'スマホ閲覧時でも重要情報へ迷わず到達できるレイアウトを採用',
    ],
  },
  {
    id: '3',
    image: '/miyakoshi-holdings.png',
    title: '宮越ホールディングス',
    summary: '企業ブランディングを重視したグローバル対応サイト。',
    description:
      '企業価値や事業のスケール感が伝わるよう、上場企業サイトとしての信頼感を軸に構成したプロジェクトです。多言語対応を前提とした余白設計やモジュール設計を行い、今後の展開にも対応しやすい形に整えました。',
    languages: ['PHP', 'WordPress', 'JavaScript'],
    category: 'corporate',
    role: 'フロント実装 / UI反映 / 多言語表示を考慮した設計',
    period: '約2か月',
    deliverables: ['企業サイト構築', 'ブランド表現の実装', '多言語対応考慮'],
    points: [
      'ビジュアルとテキスト量のバランスを調整し、重厚感のある印象を設計',
      '情報量が増えても破綻しにくいレイアウト構造を構築',
      '言語切り替え時の表示崩れを想定した余白・見出し設計を実施',
    ],
  },
  {
    id: '4',
    image: '/pivotta.png',
    title: 'pivotta',
    summary: '企業向け動画配信サービスのLP構築。',
    description:
      'サービスの価値が短時間で伝わるよう、訴求順序とCTA配置を重視して組み立てたランディングページです。営業資料のように情報を積み上げるのではなく、利用イメージが自然に入る構成を目指しました。',
    languages: ['PHP', 'WordPress', 'JavaScript'],
    category: 'lp',
    role: 'LP実装 / アニメーション調整 / CTA改善',
    period: '約1か月',
    deliverables: ['LP制作', '訴求設計の反映', 'CV導線改善'],
    points: [
      '視線の流れに合わせてコンテンツを配置し、訴求が自然に伝わる構成に調整',
      '必要な動きだけを残したアニメーションで、情報理解を邪魔しない演出を実装',
      'CTA周辺の余白や文言の見せ方を整え、アクションにつながりやすく改善',
    ],
  },
  {
    id: '5',
    image: '/SmartES.png',
    title: 'SmartES',
    summary: 'AIを活用したSaaS型ES効率化アプリの開発。',
    description:
      '応募書類作成の負荷を下げることを目的に、入力体験のわかりやすさと処理のテンポ感を重視して設計したWebアプリです。複数画面にまたがる操作でも迷いにくいよう、状態変化とフィードバックの見せ方を丁寧に整えました。',
    languages: ['React', 'TypeScript'],
    category: 'app',
    role: 'フロントエンド開発 / UI設計 / コンポーネント設計',
    period: '約3か月',
    deliverables: ['新規機能開発', '状態管理設計', '入力体験の改善'],
    points: [
      'フォーム入力のストレスを減らすため、操作結果がすぐ伝わるUIを実装',
      '再利用しやすいコンポーネント単位で分割し、拡張性を確保',
      'SaaSらしい軽快さを意識して、画面遷移やローディング表現を整理',
    ],
  },
  {
    id: '6',
    image: '/primekaji.png',
    title: '家事代行プライムカジ',
    summary: '人材マッチングサービスのLP構築。',
    description:
      'サービス利用の安心感と申込みまでの流れの明瞭さを重視したランディングページです。生活者向けサービスとして、やわらかい印象を保ちつつ、比較検討時に必要な情報を過不足なく見せることを意識しました。',
    languages: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    category: 'lp',
    role: 'フロント実装 / LPコーディング / レスポンシブ最適化',
    period: '約1か月',
    deliverables: ['LP制作', 'レスポンシブ対応', '問い合わせ導線の整備'],
    points: [
      '安心感を損なわない配色と余白設計で、サービスの信頼性を表現',
      'スマホからの閲覧比率を考慮し、モバイル優先でUIを調整',
      '比較検討に必要な情報をセクションごとに整理し、読み進めやすく改善',
    ],
  },
  {
    id: '7',
    image: '/SoLaNi-ENERGIE.png',
    title: 'SoLaNi-ENERGIE',
    summary: 'エネルギー領域の事業内容をわかりやすく整理した企業サイト。',
    description:
      '専門性の高いテーマでも理解しやすいよう、情報の粒度とビジュアルの強弱を整理して構築した案件です。事業紹介が単なる説明に終わらず、企業としての姿勢や強みまで伝わる構成を意識しました。',
    languages: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    category: 'corporate',
    role: 'フロント実装 / コンテンツ整理 / レイアウト調整',
    period: '約1.5か月',
    deliverables: ['企業サイト制作', '情報設計', 'UI実装'],
    points: [
      '専門用語が続いても読み疲れしにくいレイアウトを設計',
      '事業内容ごとの見出し構造を整理し、情報探索しやすく改善',
      'ブランドイメージに合う静かなアニメーションで印象を補強',
    ],
  },
  {
    id: '8',
    image: '/aijukai.png',
    title: '愛寿会',
    summary: '老人ホームの情報を丁寧に伝える公式サイト構築。',
    description:
      '利用者本人だけでなくご家族の比較検討も意識し、施設の安心感や雰囲気が伝わる情報設計を行ったサイトです。写真や導線の配置を工夫し、問い合わせ前の不安を少しでも減らせるよう構成しました。',
    languages: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    category: 'corporate',
    role: 'サイト実装 / UI調整 / 導線改善',
    period: '約1.5か月',
    deliverables: ['公式サイト制作', '施設情報整理', '問い合わせ導線改善'],
    points: [
      '写真とテキストのバランスを調整し、施設の雰囲気が伝わる設計に調整',
      '高齢者施設に求められる安心感を意識した視覚表現を採用',
      'ご家族が必要な情報へすばやく到達できるページ構造を設計',
    ],
  },
  {
    id: '9',
    image: '/smile_sumai.png',
    title: 'SMILE SUMAI',
    summary: '不動産比較メディアサイトの構築。',
    description:
      '物件やサービス比較がしやすいよう、一覧性と回遊性を重視して設計したメディア寄りのWebサービスです。情報量が多くなっても見づらくならないよう、カード設計とレイアウトルールを細かく整えました。',
    languages: ['HTML', 'CSS', 'JavaScript', 'Vue'],
    category: 'app',
    role: 'フロント実装 / コンポーネント開発 / 一覧UI最適化',
    period: '約2か月',
    deliverables: ['メディアサイト構築', '一覧UI開発', '回遊性改善'],
    points: [
      '比較しやすいカードUIと一覧レイアウトで情報を整理',
      'Vueを用いたUIの部品化で、継続的な改修に耐えやすい構成に調整',
      '複数条件の比較でも視線が散りにくい余白とタイポグラフィを設計',
    ],
  },
  {
    id: '10',
    image: '/earth_design_lab.png',
    title: 'EARTH DESIGN LAB',
    summary: '一級建築事務所の世界観を表現したHP構築。',
    description:
      '建築事務所らしい洗練された世界観を保ちながら、作品の魅力を引き立てる余白とレイアウトに注力したプロジェクトです。デザインの空気感を再現しつつ、閲覧性や更新しやすさも両立させました。',
    languages: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    category: 'corporate',
    role: 'フロント実装 / デザイン再現 / アニメーション調整',
    period: '約2か月',
    deliverables: ['ブランドサイト制作', '作品導線設計', 'UI再現'],
    points: [
      '繊細な余白設計で、建築写真が映えるビジュアル構成を実現',
      '過剰にならない動きで、静かなブランドトーンを維持',
      'ビジュアル中心でも操作しやすいナビゲーション設計に調整',
    ],
  },
  {
    id: '11',
    image: '/hirock-lab.png',
    title: 'ヒロックラボ',
    summary: 'Webマーケティング・制作会社のHP構築。',
    description:
      'サービス理解と問い合わせ導線の明快さを両立させるため、事業紹介と実績訴求のバランスを取って構成したサイトです。企業の専門性が伝わる一方で、相談のハードルが上がりすぎないよう柔らかさも残しました。',
    languages: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    category: 'corporate',
    role: 'コーディング / 下層ページ実装 / 導線調整',
    period: '約1.5か月',
    deliverables: ['企業サイト制作', 'サービス紹介設計', '問い合わせ導線調整'],
    points: [
      '事業紹介と実績訴求の順序を調整し、理解しやすい構成を設計',
      '複数下層ページでも一貫したトーンが出るようUIを統一',
      '問い合わせまでの心理的負担が少ない導線設計を意識して実装',
    ],
  },
];

export async function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Works`,
    description: project.summary,
  };
}

export default async function WorksDetail({ params }) {
  const { id } = await params;
  const projectIndex = projects.findIndex((item) => item.id === id);
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <>
      <Header />
      <main className="bg-neutral-950 text-white">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.14),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(120,119,198,0.18),_transparent_25%)]" />
          <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 py-20 md:px-10 lg:flex-row lg:items-end lg:gap-16 lg:py-24">
            <div className="max-w-2xl">
              <Link href="/works" className="inline-flex items-center gap-2 text-sm tracking-[0.2em] text-white/60 transition hover:text-white">
                <span className="text-base">←</span>
                <span>BACK TO WORKS</span>
              </Link>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-[0.25em] text-white/70">
                  {categoryLabels[project.category] ?? 'Project'}
                </span>
                <span className="text-sm text-white/45">Project #{project.id}</span>
              </div>
              <h1 className="mt-6 text-4xl font-semibold tracking-[0.08em] md:text-6xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/72 md:text-lg">
                {project.description}
              </p>
            </div>
            <div className="grid w-full max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <p className="text-xs tracking-[0.2em] text-white/45">CATEGORY</p>
                <p className="mt-3 text-lg font-medium">{categoryLabels[project.category] ?? 'Project'}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <p className="text-xs tracking-[0.2em] text-white/45">ROLE</p>
                <p className="mt-3 text-lg font-medium leading-7">{project.role}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <p className="text-xs tracking-[0.2em] text-white/45">PERIOD</p>
                <p className="mt-3 text-lg font-medium">{project.period}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(320px,0.9fr)]">
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <div className="border-b border-white/10 px-6 py-4 text-sm tracking-[0.25em] text-white/45">
                PROJECT PREVIEW
              </div>
              <div className="p-4 md:p-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1400}
                  height={860}
                  className="h-auto w-full rounded-[24px] object-cover"
                  priority
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-7">
                <p className="text-xs tracking-[0.24em] text-white/45">OVERVIEW</p>
                <p className="mt-4 text-lg leading-8 text-white/80">{project.summary}</p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 p-7">
                <p className="text-xs tracking-[0.24em] text-white/45">TECH STACK</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {project.languages.map((language) => (
                    <span
                      key={language}
                      className="rounded-full border border-white/10 bg-neutral-900 px-4 py-2 text-sm text-white/80"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 p-7">
                <p className="text-xs tracking-[0.24em] text-white/45">DELIVERABLES</p>
                <div className="mt-5 space-y-3">
                  {project.deliverables.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/75"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 lg:pb-24">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/8 to-white/[0.02] p-8 md:p-10">
            <div className="max-w-2xl">
              <p className="text-xs tracking-[0.24em] text-white/45">FOCUS POINTS</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[0.05em] md:text-3xl">
                実装で意識したポイント
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/60 md:text-base">
                デザイン再現だけで終わらせず、使いやすさ・更新しやすさ・読みやすさまで含めて整えた点をまとめています。
              </p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {project.points.map((point, index) => (
                <article
                  key={point}
                  className="rounded-[24px] border border-white/10 bg-black/25 p-6"
                >
                  <p className="text-sm tracking-[0.25em] text-white/35">0{index + 1}</p>
                  <p className="mt-4 text-base leading-8 text-white/80">{point}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
          <div className="flex flex-col gap-4 border-t border-white/10 pt-10 md:flex-row md:items-stretch">
            {previousProject ? (
              <Link
                href={`/works/${previousProject.id}`}
                className="group flex-1 rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:border-white/30 hover:bg-white/10"
              >
                <p className="text-xs tracking-[0.24em] text-white/40">PREVIOUS PROJECT</p>
                <p className="mt-4 text-xl font-medium">{previousProject.title}</p>
                <p className="mt-2 text-sm text-white/60">{previousProject.summary}</p>
              </Link>
            ) : (
              <div className="flex-1 rounded-[28px] border border-dashed border-white/10 bg-white/[0.03] p-6 text-white/30">
                最初のプロジェクトです
              </div>
            )}

            {nextProject ? (
              <Link
                href={`/works/${nextProject.id}`}
                className="group flex-1 rounded-[28px] border border-white/10 bg-white/5 p-6 text-left transition hover:border-white/30 hover:bg-white/10"
              >
                <p className="text-xs tracking-[0.24em] text-white/40">NEXT PROJECT</p>
                <p className="mt-4 text-xl font-medium">{nextProject.title}</p>
                <p className="mt-2 text-sm text-white/60">{nextProject.summary}</p>
              </Link>
            ) : (
              <div className="flex-1 rounded-[28px] border border-dashed border-white/10 bg-white/[0.03] p-6 text-white/30">
                最後のプロジェクトです
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
