import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({id, image, title, text, languages}) => {
  return (
    <div className="w-full bg-gray-900 rounded-md group relative">
      {/* hover時にフェードイン */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 z-10 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
        <Link
          href={`/works/${id}`}
          className="border border-white text-sm rounded-lg w-[200px] h-[45px] flex items-center justify-center font-medium tracking-wider text-white hover:text-black hover:bg-white transition-colors duration-300"
        >
          詳細を見る
        </Link>
      </div>
      <div className="relative">
        <Image
          src={image}
          alt="プロジェクト画像"
          width={380}
          height={100}
          className="w-full rounded-t-md"
        />
      </div>
      <div className="projectCard-body bg-gray-900 rounded-b-md p-4">
        <div className="projectcard-title">
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <div className="text-gray-400 mt-2">
          <p>{text}</p>
        </div>
        <div className="flex gap-2 mt-4">
          {languages.map((languages, index) => (
            <span className="p-2 bg-gray-800 text-sm rounded-md" key={index}>
              {languages}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;