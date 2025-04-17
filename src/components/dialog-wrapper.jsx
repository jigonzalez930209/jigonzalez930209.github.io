/* eslint-disable react/prop-types */

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import ProjectCard from './project-card'
import { motion } from 'framer-motion'

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
}

const DialogCloseButton = ({
  title,
  content,
  open,
  onOpenChange,
  cardContent,
}) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      transition={{ delay: 0.2 }}
      className="px-4 md:px-8"
    >
      <Dialog modal open={open} onOpenChange={() => onOpenChange(null)}>
        <DialogContent
          aria-describedby={title}
          className="bg-white/5 backdrop-blur-md border border-white/10 shadow-xl w-[55vw] h-[65vh] p-6 flex flex-col text-gray-200"
        >
          <DialogHeader>
            <DialogTitle className="text-2xl sm:text-3xl font-semibold text-white">
              {title}
            </DialogTitle>
            <DialogDescription className="text-gray-400"></DialogDescription>
          </DialogHeader>

          <section className="flex flex-col overflow-y-scroll space-y-7 text-gray-300 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-accent scrollbar-thumb-rounded-md">
            <div>{content}</div>
            <ProjectCard {...cardContent} />
          </section>

          <DialogFooter className="justify-end mt-4">
            <DialogClose asChild>
              <Button
                variant="outline"
                className="
                  bg-gradient-to-r from-gray-500/20 to-blue-500/20
                  text-white border border-gray-500/30
                  hover:from-gray-500/30 hover:to-blue-500/30
                  hover:scale-105 transition-all duration-300
                  shadow-lg shadow-gray-500/20
                "
              >
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </motion.section>
  )
}

export default DialogCloseButton
