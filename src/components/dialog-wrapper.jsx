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

const DialogCloseButton = ({ ...props }) => {
  const { title, content, open, onOpenChange } = props
  return (
    <Dialog open={open} onOpenChange={() => onOpenChange(null)}>
      <DialogContent aria-describedby={title} className="sm:max-w-md">
        <DialogDescription>
          <span className="sr-only">{title}</span>
        </DialogDescription>
        <DialogHeader>
          <DialogTitle className="text-foreground">{title}</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2 text-foreground">
          {content}
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
