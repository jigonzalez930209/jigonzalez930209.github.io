/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import graf from '../assets/images/graf.png'
import image from '../assets/images/image.png'

const PROJECTS = [
  {
    id: 1,
    title: 'Graf_v3',
    description:
      'Tool for visualize and analyze the data from the teq4, teq4Z and CSV files',
    link: 'https://github.com/jigonzalez930209/graf_v3',
    image: graf,
  },
  {
    id: 2,
    title: 'Images',
    description:
      'Visualizer focused on electronic microscopic images to analyzer and modify it',
    link: 'https://github.com/jigonzalez930209/images',
    image: image,
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Project 3 description',
    link: 'https://...',
    image: 'project-3.jpg',
  },

  {
    id: 4,
    title: 'Project 4',
    description: 'Project 4 description',
    link: 'https://...',

    image: 'project-4.jpg',
  },
]

const ProjectCard = ({ title, description, link, image }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Card className="bg-opacity-100 h-[2fr]">
        <CardHeader>
          <CardTitle className="bg-opacity-100">{title}</CardTitle>
          <CardDescription className="bg-opacity-100">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full justify-center flex">
          {/* carrousel */}
          <img className="max-h-80" src={image} alt={title} />
        </CardContent>
        <CardFooter>
          <p>{link}</p>
        </CardFooter>
      </Card>
    </a>
  )
}

const Projects = () => {
  return (
    <div className="w-full h-auto overflow-auto bg-slate-600">
      <div className="absolute inset-0"></div>
      <div className="z-10 h-[90vh] scroll-auto grid grid-cols-1 md:px-14 md:grid-cols-2 px-10 overflow-auto gap-8 p-4">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
