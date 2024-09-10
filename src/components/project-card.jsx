/* eslint-disable react/prop-types */
import React from 'react'

import { Card } from './ui/card'

// Change this component to add tabs, aspect ratio, and resizable panels
// see how can wrap the content of wikipedia only text to show the content
// the images from the wikipedia can be shown in the aspect ratio component and a carousel to add more interactivity
const ProjectCard = ({
  title,
  description,
  link,
  image: imageProject,
  video,
}) => {
  const [dataWikipedia, setDataWikipedia] = React.useState(null)
  React.useEffect(() => {
    fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${'Sulphur'.replace(
        ' ',
        '_'
      )}`
    )
      .then((response) => response.json())
      .then((data) => {
        setDataWikipedia(data)
      })
  }, [title])

  console.log({ dataWikipedia, title })

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Card className="gap-5 p-3 mb-3 animate-border-glow ">
        <div className="sm:max-h-min w-full justify-center flex sm:col-span-1 ">
          {video ? (
            <video
              className="h-[60vw] border rounded-md"
              src={video}
              autoPlay
              loop
              muted
            />
          ) : (
            <img
              className="h-[60vh] border rounded-md"
              src={imageProject}
              alt={title}
            />
          )}
        </div>
        <div className="sm:col-span-1 grid gap-5">
          <div className="">{title}</div>
          <div className="">{description}</div>
        </div>
      </Card>
    </a>
  )
}
export default ProjectCard
