/* eslint-disable react/prop-types */
import { Card } from './ui/card'

const ProjectCard = ({ title, description, link, image, video }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Card className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-3">
        <div className=" sm:max-h-min w-full justify-center flex sm:col-span-1 ">
          {video ? (
            <video
              className="max-h-80 border rounded-md"
              src={video}
              autoPlay
              loop
              muted
            />
          ) : (
            <img
              className="max-h-80 border rounded-md"
              src={image}
              alt={title}
            />
          )}
          {/* <img className="max-h-80 border rounded-md" src={image} alt={title} /> */}
        </div>
        <div className="sm:col-span-1 gap-5">
          <div className="">{title}</div>
          <div className="">{description}</div>
        </div>
      </Card>
    </a>
  )
}
export default ProjectCard
