/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Menu } from 'lucide-react'
import { NavLink, useLocation } from 'react-router-dom'
import React from 'react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/utils'
import { useTour } from './tour-provider'

const NavLinkItems = [
  { content: 'Home', to: '/' },
  { content: 'Contact Me', to: '/contact', disabled: false },
  { content: 'About', to: '/about', disabled: false },
]

const NavItem = ({ selected, disabled = false, content, ...props }) =>
  disabled ? (
    <div className="dark:text-slate-400 text-slate-800 text-lg relative">
      <Tooltip>
        <TooltipTrigger>{content}</TooltipTrigger>
        <TooltipContent>
          <p className="animate-pulse">Coming Soon</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ) : (
    <NavLink
      className={cn(
        'text-lg text-primary hover:text-foreground/50',
        selected && 'text-blue-200'
      )}
      {...props}
    >
      {content}
    </NavLink>
  )

const Navbar = () => {
  const { pathname } = useLocation()
  const [open, setOpen] = React.useState(false)
  const tour = useTour()

  return (
    <header className="absolute w-full z-50 top-0 flex text-lg font-medium h-16 justify-between bg-secondary gap-4 px-4 md:px-20 dark:text-slate-400 text-slate-600">
      <TooltipProvider delayDuration={10}>
        <nav className="hidden select-none sm:w-full gap-6 sm:grid sm:grid-cols-3 items-center justify-center">
          <div className="flex col-span-2 sm:flex-row items-center justify-end gap-4 ">
            {NavLinkItems.map((item) => (
              <NavItem
                key={item.content}
                selected={item.to === pathname}
                content={item.content}
                disabled={item.disabled}
                {...item}
              />
            ))}
          </div>
          <div className="w-full flex items-center justify-end">
            <Tooltip>
              <TooltipTrigger>
                <div
                  className="hover:cursor-pointer hover:text-slate-300"
                  onClick={() => tour.setTourActive(!tour.tourActive)}
                >
                  take a tour
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="animate-pulse">Tour throw app</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </nav>
        <div className="w-full flex justify-between sm:hidden">
          <Sheet open={open} onOpenChange={() => setOpen((p) => !p)}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 sm:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6">
                {NavLinkItems.map((item) => (
                  <NavItem
                    key={item.content}
                    selected={pathname.includes(item.to)}
                    content={item.content}
                    disabled={item.disabled}
                    {...item}
                  />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Tooltip>
            <TooltipTrigger>
              <div
                className="hover:cursor-pointer hover:text-slate-300 text-xs"
                onClick={() => {
                  tour.setTourActive(!tour.tourActive)
                  setOpen(false)
                }}
              >
                take a tour
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p className="animate-pulse">Tour throw app</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </header>
  )
}

export default Navbar
