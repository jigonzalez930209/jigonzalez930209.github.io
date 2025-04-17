import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import {
  Github,
  Linkedin,
  Mail,
  User,
  Briefcase,
  GraduationCap,
  Zap,
  Code2,
  LayoutDashboard,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import decisionTreeIMG from '@/assets/images/decision-tree.png'
import videoThisProjectProject from '@/assets/videos/this-project.mp4'
import fanHandler from '@/assets/images/fan-handler.png'

const aboutMeData = {
  name: 'José Iván González Jorge',
  tagline: 'Chemist and Full-Stack Developer',
  avatarUrl: 'https://github.com/jigonzalez930209.png',
  bio: `Hello! I'm José Iván González, a dedicated chemist and software developer with a passion for designing innovative analytical platforms and full-stack applications. With a background in chemistry research and hands-on experience in modern web technologies, I strive to bridge the gap between science and technology through impactful code.`,
  skills: [
    { name: 'React JS', level: 'Advanced' },
    { name: 'Next.js', level: 'Advanced' },
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'Tailwind CSS', level: 'Advanced' },
    { name: 'Electron', level: 'Advanced' },
    { name: 'React Router', level: 'Intermediate' },
    { name: 'Material UI', level: 'Intermediate' },
    { name: 'PostgreSQL', level: 'Intermediate' },
    { name: 'Plotly.js', level: 'Intermediate' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'C#', level: 'Intermediate' },
    { name: 'TreeJs', level: 'Basic' },
    { name: 'dnd-kit', level: 'Basic' },
    { name: 'Tauri', level: 'Basic' },
    { name: 'Shad-cn', level: 'Advanced' },
  ],
  experience: [
    {
      title: 'Software Developer',
      company: 'Scientific Research Center of Civil Defense',
      date: '09/2018 - 10/2019',
      description:
        'Developed software for managing raw materials and suppliers.',
      techStack: ['C#', 'MySQL'],
    },
    {
      title: 'Frontend Developer (Incluia)',
      company: 'Prosperia.ai',
      date: '03/2021 - 02/2022',
      description:
        'Built and deployed the Incluia front-end using React JS, CARTO for React, and Material UI.',
      techStack: ['React JS', 'CARTO for React', 'Material UI'],
    },
    {
      title: 'Frontend Developer',
      company: 'Truckbays.com',
      date: '02/2023 - 08/2023',
      description:
        'Developed location management web app for parking operations, including statistics and pricing configuration interfaces.',
      techStack: ['Next.js', 'React JS', 'Tailwind CSS', 'Radix UI'],
    },
  ],
  education: [
    {
      degree: 'Bachelor of Chemistry',
      university: 'University of Havana',
      date: '09/2012 - 06/2017',
      thesis:
        'Conjugation of Protein A to Magnetic Nanoparticles for Antibody Extraction from Complex Mixtures',
    },
    {
      degree: 'Doctoral Candidate in Pharmacy and Biochemistry',
      university: 'University of Buenos Aires',
      date: '04/2022 - Present',
      thesis:
        'Electrochemical and Optical Strategies for Designing New Immunodetection Platforms',
    },
  ],
  languages: [
    { name: 'English', level: 'Intermediate' },
    { name: 'Spanish', level: 'Native' },
  ],
  social: {
    github: 'https://github.com/jigonzalez930209',
    linkedin: '',
    email: 'jigonzalez930209@gmail.com',
  },
  projects: [
    {
      title: 'Graf_v4',
      description:
        'Visualization, plotting, and exporting data from Teq_04 electrochemical software (formats: Teq4, Teq4Z, CSV).',
      technologies: [
        'TypeScript',
        'React JS',
        'Vite',
        'Material UI',
        'Electron',
        'dnd-kit',
        'Plotly.js',
        'Lodash',
      ],
      link: 'https://github.com/jigonzalez930209/graf_v4',
      image:
        'https://github.com/user-attachments/assets/5f81f632-71dd-41f3-90df-5e0be2e0a39d',
    },
    {
      title: 'Image Processor',
      description:
        'Application to view and transform images from Transmission Electron Microscopes.',
      technologies: [
        'TypeScript',
        'React JS',
        'Vite',
        'Tailwind CSS',
        'Radix UI',
        'UTIF',
        'Tauri',
        'dnd-kit',
      ],
      link: 'https://github.com/jigonzalez930209/images',
      image:
        'https://github.com/user-attachments/assets/c3e332ae-b195-4fb2-b3a9-cd74fa2a1e2f',
    },
    {
      title: 'Decision Tree Platform',
      description:
        'Full-stack development of an alternative teaching platform based on decision trees.',
      technologies: [
        'Vite',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Radix UI',
        '.NET',
        'PostgreSQL',
      ],
      link: 'https://decision-0-tree.vercel.app/',
      image: decisionTreeIMG,
    },
    {
      title: 'Portfolio',
      description: 'Personal portfolio website showcasing projects and skills.',
      technologies: [
        'React JS',
        'Vite',
        'Tailwind CSS',
        'Radix UI',
        'Three.js',
        'tween.js',
      ],
      link: 'https://github.com/jigonzalez930209/jigonzalez930209.github.io',
      video: videoThisProjectProject,
    },
    {
      title: 'FanHandler Arduino React',
      description:
        'The FanHandler Arduino React project combines Arduino and React to create a system for controlling a fan.',
      technologies: ['React TS', 'Vite', 'C++', 'C', 'Python'],
      link: 'https://github.com/jigonzalez930209/FanHandler-arduino-react',
      image: fanHandler,
    },
  ],
}

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
}

const skillBadgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
  hover: { scale: 1.1, transition: { duration: 0.2 } },
}

const projectCardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
  hover: {
    scale: 1.03,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
    transition: { duration: 0.2 },
  },
}

const AboutMePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-700 to-black p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8 pt-12 px-2 overflow-y-hidden">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <Avatar className="mx-auto h-24 w-24 border-4 border-gray-500/50">
            <AvatarImage src={aboutMeData.avatarUrl} alt={aboutMeData.name} />
            <AvatarFallback>
              <User className="h-6 w-6 text-gray-400" />
            </AvatarFallback>
          </Avatar>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-gray-400">
            {aboutMeData.name}
          </h1>
          <h2 className="text-xl sm:text-2xl text-gray-300 tracking-wide">
            {aboutMeData.tagline}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            {aboutMeData.bio}
          </p>
          <div className="flex justify-center gap-6 text-gray-200">
            <Button asChild variant="outline">
              {/* similar styling */}
              <a
                href={aboutMeData.social.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" /> GitHub
              </a>
            </Button>
            {aboutMeData.social.linkedin && (
              <Button asChild variant="outline">
                <a
                  href={aboutMeData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                </a>
              </Button>
            )}
            <Button asChild variant="outline" className="...">
              <Link to="/contact">
                <Mail className="mr-2 h-5 w-5" /> Email
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-semibold text-purple-300 flex items-center gap-2">
                <Zap className="h-6 w-6" /> Skills
              </CardTitle>
              <CardDescription className="text-gray-400">
                A glance at my technical skills.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 justify-center">
                {aboutMeData.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={skillBadgeVariants}
                    whileHover="hover"
                  >
                    <Badge
                      variant="secondary"
                      className={cn(
                        'bg-gradient-to-r text-white px-4 py-2 rounded-full text-sm font-medium',
                        'shadow-md transition-all duration-300',
                        skill.level === 'Advanced' &&
                          'from-blue-500/90 to-green-500/90 border border-blue-500/30',
                        skill.level === 'Intermediate' &&
                          'from-pink-500/90 to-yellow-500/90 border border-pink-500/30',
                        skill.level === 'Basic' &&
                          'from-gray-500/90 to-gray-700/90 border border-gray-500/30'
                      )}
                    >
                      <Code2 className="inline-block mr-1 w-4 h-4" />
                      {skill.name} ({skill.level})
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Experience */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-semibold text-blue-300 flex items-center gap-2">
                <Briefcase className="h-6 w-6" /> Experience
              </CardTitle>
              <CardDescription className="text-gray-400">
                My professional journey so far.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {aboutMeData.experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-black/20 border border-white/5"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {exp.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {exp.company} | {exp.date}
                  </p>
                  <p className="text-gray-300 mt-2">{exp.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.techStack.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-gray-700/90 text-gray-200 border border-gray-600 px-2 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.section>

        {/* Education */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-semibold text-green-300 flex items-center gap-2">
                <GraduationCap className="h-6 w-6" /> Education
              </CardTitle>
              <CardDescription className="text-gray-400">
                My academic background.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {aboutMeData.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-black/20 border border-white/5"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {edu.university} | {edu.date}
                  </p>
                  <p className="text-gray-300 mt-1 italic">
                    Thesis: {edu.thesis}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.section>

        {/* Projects */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          transition={{ delay: 0.6 }}
        >
          <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-semibold text-amber-300 flex items-center gap-2">
                <LayoutDashboard className="h-6 w-6" /> Projects
              </CardTitle>
              <CardDescription className="text-gray-400">
                Some of my highlighted projects.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {aboutMeData.projects.map((project, idx) => (
                  <motion.div
                    key={idx}
                    variants={projectCardVariants}
                    whileHover="hover"
                  >
                    <Card className="bg-black/20 h-[380px] border border-white/5 shadow-md hover:shadow-lg transition-all duration-300 relative group">
                      <div className="relative">
                        {project?.video ? (
                          <video
                            className="w-full h-48 object-cover rounded-t-lg"
                            src={project?.video}
                            autoPlay
                            loop
                            muted
                          />
                        ) : (
                          <img
                            className="w-full h-48 object-cover rounded-t-lg"
                            src={project?.image}
                            alt={project?.title}
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-t-lg flex items-end">
                          <h4 className="text-lg font-semibold text-white p-4 w-full">
                            {project.title}
                          </h4>
                        </div>
                      </div>
                      <CardContent className="p-4 space-y-2 relative h-max">
                        <p className="text-gray-300 text-sm">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="bg-gray-700/90 text-gray-200 border opacity-50 transition-opacity group-hover:opacity-100 border-gray-600 px-2 py-1 rounded-full text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <Button
                        asChild
                        variant="link"
                        className="absolute bottom-0 right-5 p-0 mt-2 text-blue-400 hover:text-blue-300 transition-opacity opacity-0 group-hover:opacity-100"
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </a>
                      </Button>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  )
}

export default AboutMePage
