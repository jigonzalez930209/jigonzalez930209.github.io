import DialogCloseButton from '@/components/dialog-wrapper'
import * as React from 'react'

import Molecule from '@/models/molecule'
import imgFanHandlerProject from '../assets/images/fan-handler.png'
import imgGrafProject from '../assets/images/graf.png'
import imgImagesProject from '../assets/images/image.png'
import videoThisProjectProject from '../assets/videos/this-project.mp4'

const ATOMS_DESCRIPTION = {
  C: 'Carbon is a nonmetallic element that forms the basis of organic chemistry. It is the fourth most abundant element in the universe by mass and is found in all known life forms. Carbon atoms can bond with each other to form various structures, including chains, rings, and complex frameworks, making it incredibly versatile in forming compounds.',
  H: 'Hydrogen is the lightest and most abundant element in the universe, consisting of a single proton and one electron. It is highly reactive and plays a crucial role in the chemistry of life, water (H₂O), and many organic compounds. Hydrogen is also a primary fuel source in stars through nuclear fusion.',
  O: "Oxygen is a highly reactive nonmetal and a vital part of the Earth's atmosphere, essential for respiration in most living organisms. It is the third most abundant element in the universe by mass. Oxygen forms oxides with nearly all other elements and is a key component of water (H₂O) and many organic molecules.",
  N: "Nitrogen is a nonmetal that makes up about 78% of the Earth's atmosphere. It is essential for all living organisms, particularly in the form of amino acids, proteins, and nucleic acids. Nitrogen is relatively inert in its diatomic form (N₂), but it can form various important compounds, such as ammonia (NH₃) and nitrates.",
  S: 'Sulfur is a nonmetallic element known for its distinct yellow color and pungent odor when burned. It is essential for life, as it is a component of certain amino acids and vitamins. Sulfur is also used in industrial processes, such as the production of sulfuric acid, fertilizers, and in vulcanization of rubber.',
  ' ': 'On selection error',
}

const PROJECTS = [
  {
    id: 'C',
    title: 'Graf_v3',
    description:
      'Tool for visualize and analyze the data from the teq4, teq4Z and CSV files',
    link: 'https://github.com/jigonzalez930209/graf_v3',
    image: imgGrafProject,
  },
  {
    id: 'S',
    title: 'Images',
    description:
      'Visualizer focused on electronic microscopic images to analyzer and modify it',
    link: 'https://github.com/jigonzalez930209/images',
    image: imgImagesProject,
  },
  {
    id: 'O',
    title: 'Fan Handler',
    description:
      'Control your fan from a web page using low cost hardware in your local network',
    link: 'https://github.com/jigonzalez930209/FanHandler-arduino-react',
    image: imgFanHandlerProject,
  },
  {
    id: 'N',
    title: 'Portfolio code',
    description:
      'Project developed with React, TailwindCSS, shadcn and ThreeJS to show my projects and my skills',
    link: 'https://github.com/jigonzalez930209/jigonzalez930209.github.io/tree/main',
    video: videoThisProjectProject,
  },
  {
    id: 'H',
    title: 'Projects I have worked on',
    description:
      'Experience in the development of software as fronted using React, NextJs, TailwindCSS, Material-UI, ShadCN and ThreeJS',
    link: '#',
    image: imgFanHandlerProject,
  },
]

const Home = () => {
  const [selectedAtom, setSelectedAtom] = React.useState(null)

  return (
    <div className="absolute w-full h-dvh overflow-hidden bg-slate-600 select-none">
      <DialogCloseButton
        title={selectedAtom || ' '}
        content={ATOMS_DESCRIPTION[selectedAtom] || ' '}
        open={selectedAtom !== null}
        onOpenChange={setSelectedAtom}
        cardContent={PROJECTS.find((project) => project.id === selectedAtom)}
      />
      <section className="w-full h-screen relative">
        <Molecule
          selectedAtom={selectedAtom}
          setSelectedAtom={setSelectedAtom}
        />
      </section>
    </div>
  )
}

export default Home
