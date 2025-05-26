"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { BookOpen, Clock, MapPinned, Menu, HandHeart } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MainNav() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-green-100 bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/csn-logo.png" className="h-12 w-12" alt="CSN Parañaque Logo" />
          <span className="text-xl font-bold text-black">CSN Parañaque</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:gap-10">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-black hover:text-green-600 hover:bg-green-50 focus:bg-green-50">
                  Developmental Guides
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-green-50 to-green-100 p-6 no-underline outline-none focus:shadow-md"
                          href="/#article"
                        >
                          <BookOpen className="h-6 w-6 text-green-600" />
                          <div className="mb-2 mt-4 text-lg font-medium text-black">All Resources</div>
                          <p className="text-sm leading-tight text-gray-600">
                            Browse our complete guides for all developmental areas.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 focus:bg-green-50"
                          href="/blog/the-importance-of-early-intervention"
                        >
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-green-600" />
                            <div className="text-sm font-medium leading-none text-black">Importance of Early Intervention</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                            Why early intervention is critical for children with developmental delays?
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 focus:bg-green-50"
                          href="/blog/recognizing-developmental-milestones"
                        >
                          <div className="flex items-center gap-2">
                            <MapPinned className="h-4 w-4 text-green-600" />
                            <div className="text-sm font-medium leading-none text-black">Developmental Milestones</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                            Key developmental milestones and how to identify potential delays.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 focus:bg-green-50"
                          href="/blog/supporting-your-child's-journey"
                        >
                          <div className="flex items-center gap-2">
                            <HandHeart className="h-4 w-4 text-green-600" />
                            <div className="text-sm font-medium leading-none text-black">Supporting Your Child's Journey</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                            Strategies to support your child's unique developmental path.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/#about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/#event" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Event</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/#contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex md:gap-2">
            <Link href="/login">
              <Button className="rounded-full bg-green-600 hover:bg-green-700">Log In</Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <img src="csn-logo.png" className="h-12 w-12" alt="CSN Parañaque Logo" />
                  <span className="text-xl font-bold text-black">CSN Parañaque</span>
                </Link>
                <div className="flex flex-col gap-3">
                  <div className="text-sm font-medium text-gray-500">Development Guides</div>
                  <Link
                    href="/resources/importance"
                    className="flex items-center gap-2 text-base"
                    onClick={() => setIsOpen(false)}
                  >
                    <Clock className="h-5 w-5 text-green-600" />
                    Importance of Early Intervention
                  </Link>
                  <Link
                    href="/resources/milestones"
                    className="flex items-center gap-2 text-base"
                    onClick={() => setIsOpen(false)}
                  >
                    <MapPinned className="h-5 w-5 text-green-600" />
                    Developmental Milestones
                  </Link>
                  <Link
                    href="/resources/journey"
                    className="flex items-center gap-2 text-base"
                    onClick={() => setIsOpen(false)}
                  >
                    <HandHeart className="h-5 w-5 text-green-600" />
                    Supporting Your Child's Journey
                  </Link>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="text-sm font-medium text-gray-500">Pages</div>
                  <Link href="/#about" className="text-base" onClick={() => setIsOpen(false)}>
                    About
                  </Link>
                  <Link href="/#event" className="text-base" onClick={() => setIsOpen(false)}>
                    Event
                  </Link>
                  <Link href="/#contact" className="text-base" onClick={() => setIsOpen(false)}>
                    Contact
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Log In</Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
