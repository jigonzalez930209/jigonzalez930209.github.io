/* eslint-disable react/prop-types */
import { Card } from './ui/card'

const ProjectCard = ({ title, description, link, image, video }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Card
        className="
          bg-black/20 border border-white/5 shadow-md
          hover:shadow-lg transition-all duration-300
          grid grid-cols-1 sm:grid-cols-2 gap-6
          rounded-lg overflow-hidden
        "
      >
        {/* Media */}
        <div className="sm:col-span-1 flex items-center justify-center">
          {video ? (
            <video
              className="w-full h-72 object-cover rounded-md"
              src={video}
              autoPlay
              loop
              muted
            />
          ) : (
            <img
              className="w-full h-72 object-cover rounded-md"
              src={image}
              alt={title}
            />
          )}
        </div>

        {/* Text Content */}
        <div className="sm:col-span-1 flex flex-col justify-center p-4">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-gray-300 mt-2 text-sm">{description}</p>
        </div>
      </Card>
    </a>
  )
}

export default ProjectCard
