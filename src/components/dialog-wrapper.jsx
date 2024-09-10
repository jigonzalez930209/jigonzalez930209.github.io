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
import { ProjectTabs } from './dialog-content'

const DialogCloseButton = ({ ...props }) => {
  const { title, content, open, onOpenChange, cardContent } = props

  return (
    <Dialog modal open={open} onOpenChange={() => onOpenChange(null)}>
      <DialogContent aria-describedby={title} className="w-[90vw] h-[95vh] p-4">
        <DialogHeader className="w-10">
          <DialogTitle className="text-foreground w-10">{title}</DialogTitle>
        </DialogHeader>
        <DialogDescription className="hidden"></DialogDescription>
        {/* <div className="flex self-start h-[70vh] flex-col px-4 text-foreground scrollbar-thin scrollbar-track-transparent scrollbar-thumb-accent scrollbar-thumb-rounded-md overflow-y-scroll">
          <div className="p-2">{content}</div>
          <ProjectCard {...cardContent} />
        </div> */}
        <ProjectTabs />
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
