/* eslint-disable react/prop-types */

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import ProjectCard from './project-card'

const DialogCloseButton = ({ ...props }) => {
  const { title, content, open, onOpenChange, cardContent } = props

  console.log('cardContent', cardContent)

  return (
    <Dialog modal open={open} onOpenChange={() => onOpenChange(null)}>
      <DialogContent aria-describedby={title} className=" w-[90vw] h-[95vh]">
        <DialogHeader>
          <DialogTitle className="text-foreground">{title}</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <span className="sr-only">{title}</span>
        </DialogDescription>
        <div className="flex flex-col items-center space-x-2 text-foreground gap-7 h-[70vh] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-accent scrollbar-thumb-rounded-md d overflow-y-scroll">
          {content}
          <ProjectCard {...cardContent} />
        </div>
        <DialogFooter className="justify-end">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DialogCloseButton
