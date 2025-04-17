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

const navLinkItems = [
  { content: 'Home', to: '/' },
  { content: 'About', to: '/about' },
  { content: 'Contact Me', to: '/contact' },
]

const NavItem = ({ selected, content, action = () => {}, ...props }) => (
  <NavLink
    className={cn(
      'text-lg text-gray-300 hover:text-white hover:underline transition-colors duration-200',
      selected && 'text-white font-bold'
    )}
    {...props}
    onClick={action}
  >
    {content}
  </NavLink>
)

const Navbar = () => {
  const { pathname } = useLocation()
  const [open, setOpen] = React.useState(false)
  const tour = useTour()

  return (
    <header
      className="
      w-full fixed top-0 z-50 flex items-center h-16
      bg-black/80 backdrop-blur-md border border-white/10 shadow-xl
      px-4 md:px-8 
      text-gray-300
    "
    >
      <TooltipProvider delayDuration={10}>
        {/* Desktop Nav */}
        <nav className="hidden sm:flex w-full justify-between items-center">
          <div className="flex gap-8">
            {navLinkItems.map((item) => (
              <NavItem
                key={item.content}
                selected={item.to === pathname}
                content={item.content}
                {...item}
              />
            ))}
          </div>
          <div>
            {pathname === '/' && (
              <Tooltip>
                <TooltipTrigger>
                  <div
                    className="cursor-pointer text-gray-400 hover:text-white transition-colors duration-200"
                    onClick={() => tour.setTourActive(!tour.tourActive)}
                  >
                    take a tour
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-black/80 text-gray-200">
                  <p className="animate-pulse">Tour through app</p>
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        </nav>

        {/* Mobile Nav */}
        <div className="flex sm:hidden w-full justify-between items-center">
          <Sheet open={open} onOpenChange={() => setOpen((p) => !p)}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="
                  bg-gradient-to-r from-gray-500/20 to-blue-500/20
                  text-white border border-gray-500/30
                  hover:from-gray-500/30 hover:to-blue-500/30
                  hover:scale-105 transition-all duration-300
                  shadow-lg shadow-gray-500/20
                  shrink-0
                "
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="
              bg-black/80 backdrop-blur-md border border-white/10 shadow-xl
              w-48 p-4 text-gray-200
            "
            >
              <nav className="flex flex-col gap-6">
                {navLinkItems.map((item) => (
                  <NavItem
                    key={item.content}
                    selected={item.to === pathname}
                    content={item.content}
                    action={() => setOpen(false)}
                    {...item}
                  />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          {pathname === '/' && (
            <Tooltip>
              <TooltipTrigger>
                <div
                  className="cursor-pointer text-gray-400 hover:text-white text-xs transition-colors duration-200"
                  onClick={() => {
                    tour.setTourActive(!tour.tourActive)
                    setOpen(false)
                  }}
                >
                  take a tour
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-black/80 text-gray-200">
                <p className="animate-pulse">Tour through app</p>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </TooltipProvider>
    </header>
  )
}

export default Navbar
