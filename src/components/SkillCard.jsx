
const SkillCard = ({image, language, text}) => {
  return (
    <div className="p-12 bg-black group relative rounded-md md:p-6">
      <div className="absolute inset-0 text-xs leading-6 flex items-center justify-center px-4 bg-black bg-opacity-80 z-10 opacity-0 group-hover:opacity-80 transition-opacity duration-300 md:text-sm md:leading-7">
        <span>{ text }</span>
      </div>
      <div className="flex items-center justify-center">
        <i className={ image }></i>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-center">{ language }</p>
      </div>
      <div className="skillcard-range">
      </div>
    </div>
  )
}

export default SkillCard;