/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Menu } from 'lucide-react'
import { NavLink, useLocation } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/utils'

const NavLinkItems = [
  { content: 'Home', to: '/' },
  { content: 'Projects', to: '/projects', disabled: true },
  { content: 'Contact Me', to: '/contact', disabled: true },
  { content: 'About', to: '/about', disabled: true },
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

  return (
    <header className="absolute w-full z-50 top-0 flex text-lg font-medium h-16 justify-between bg-secondary items-center gap-4 px-4 md:px-6 dark:text-slate-400 text-slate-600">
      <TooltipProvider delayDuration={10}>
        <nav className="hidden flex-col select-none gap-6 md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          {NavLinkItems.map((item) => (
            <NavItem
              key={item.content}
              selected={item.to === pathname}
              content={item.content}
              disabled={item.disabled}
              {...item}
            />
          ))}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
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
      </TooltipProvider>
    </header>
  )
}

export default Navbar
