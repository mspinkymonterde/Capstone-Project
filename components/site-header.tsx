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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Brain, HeartHandshake, Leaf, Menu, MessageSquare } from "lucide-react"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"}`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white">
            <Leaf className="h-4 w-4" />
          </div>
          <span className="text-xl font-bold text-gray-900">ParentSupport</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:gap-10">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-green-600">
                  Development Areas
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-green-50 to-green-100 p-6 no-underline outline-none focus:shadow-md"
                          href="/resources"
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-green-600 shadow-sm">
                            <Leaf className="h-5 w-5" />
                          </div>
                          <div className="mb-2 mt-4 text-lg font-medium text-gray-900">All Resources</div>
                          <p className="text-sm leading-tight text-gray-600">
                            Browse our complete library of resources for all developmental areas.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 focus:bg-green-50"
                          href="/resources/cognitive"
                        >
                          <div className="flex items-center gap-2">
                            <Brain className="h-4 w-4 text-green-600" />
                            <div className="text-sm font-medium leading-none text-gray-900">Cognitive</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                            Learning and thinking skills development
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 focus:bg-green-50"
                          href="/resources/speech"
                        >
                          <div className="flex items-center gap-2">
                            <MessageSquare className="h-4 w-4 text-green-600" />
                            <div className="text-sm font-medium leading-none text-gray-900">Speech & Communication</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                            Language and communication skills
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 focus:bg-green-50"
                          href="/resources/social"
                        >
                          <div className="flex items-center gap-2">
                            <HeartHandshake className="h-4 w-4 text-green-600" />
                            <div className="text-sm font-medium leading-none text-gray-900">Social & Emotional</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                            Social interactions and emotional regulation
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/events" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Events</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex md:gap-2">
            <Link href="/login">
              <Button variant="ghost" className="text-gray-700 hover:bg-green-50 hover:text-green-700">
                Log in
              </Button>
            </Link>
            <Link href="/register">
              <Button className="rounded-full bg-green-600 hover:bg-green-700">Register</Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6">
                <Link href="/" className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white">
                    <Leaf className="h-4 w-4" />
                  </div>
                  <span className="text-xl font-bold">ParentSupport</span>
                </Link>
                <div className="flex flex-col gap-3">
                  <div className="text-sm font-medium text-gray-500">Development Areas</div>
                  <Link href="/resources/cognitive" className="flex items-center gap-2 text-base">
                    <Brain className="h-5 w-5 text-green-600" />
                    Cognitive Development
                  </Link>
                  <Link href="/resources/speech" className="flex items-center gap-2 text-base">
                    <MessageSquare className="h-5 w-5 text-green-600" />
                    Speech & Communication
                  </Link>
                  <Link href="/resources/social" className="flex items-center gap-2 text-base">
                    <HeartHandshake className="h-5 w-5 text-green-600" />
                    Social & Emotional
                  </Link>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="text-sm font-medium text-gray-500">Pages</div>
                  <Link href="/events" className="text-base">
                    Events
                  </Link>
                  <Link href="/about" className="text-base">
                    About
                  </Link>
                  <Link href="/contact" className="text-base">
                    Contact
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <Link href="/login">
                    <Button variant="outline" className="w-full border-green-200 text-green-700 hover:bg-green-50">
                      Log in
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button className="w-full bg-green-600 hover:bg-green-700">Register</Button>
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
