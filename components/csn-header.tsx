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
import { Heart, Menu, MessageSquare, Dumbbell, Brain, Music, Stethoscope, Shield, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

export function CSNHeader() {
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
      className={cn(
      "sticky top-0 z-50 w-full transition-all duration-200",
      isScrolled
        ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-teal-100"
        : "bg-white border-b border-teal-100",
      )}
      style={{ maxWidth: "100vw", overflowX: "clip" }}
    >
      <div className="container flex h-20 items-center justify-between px-3 md:px-8">
      {/* Logo and Branding */}
      <Link href="/" className="flex items-center gap-4 ml-5 sm:ml-4">
        <img
        src="/csn-logo.png"
        alt="CSN Center Logo"
        className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full object-cover flex-shrink-0"
        style={{ minWidth: "3.5rem", minHeight: "3.5rem" }}
        />
        <div className="hidden sm:block">
        <div className="text-xl font-semibold text-gray-900 leading-tight">CSN Center</div>
        <div className="text-sm text-gray-500">Parañaque City</div>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex md:gap-6">
        <NavigationMenu>
        <NavigationMenuList>

            <NavigationMenuItem>
          <Link href="/#about" legacyBehavior passHref>
        <NavigationMenuLink
        className={cn(navigationMenuTriggerStyle(), "hover:text-teal-600 transition-smooth text-base font-medium")}
        >
        About
        </NavigationMenuLink>
          </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
          <NavigationMenuTrigger className="hover:text-teal-600 transition-smooth text-base font-medium">
        Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
        <ul className="grid w-[350px] gap-3 p-4 md:w-[420px] md:grid-cols-2 lg:w-[500px]">
        <li className="row-span-3">
          <NavigationMenuLink asChild>
          <a
            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-teal-50 to-teal-100 p-5 no-underline outline-none focus:shadow-md transition-smooth"
            href="/#services"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-teal-600 shadow-sm">
            <Heart className="h-5 w-5" />
            </div>
            <div className="mb-2 mt-3 text-base font-medium text-gray-900">All Services</div>
            <p className="text-xs leading-tight text-gray-600">
            Comprehensive therapy for children with special needs.
            </p>
          </a>
          </NavigationMenuLink>
        </li>
        <ServiceNavItem
          href="/#services"
          title="Speech Therapy"
          icon={<MessageSquare className="h-4 w-4 text-teal-600" />}
        >
          Communication & language skills
        </ServiceNavItem>
        <ServiceNavItem
          href="/#services"
          title="Occupational Therapy"
          icon={<Dumbbell className="h-4 w-4 text-teal-600" />}
        >
          Daily living & fine motor skills
        </ServiceNavItem>
        <ServiceNavItem
          href="/#services"
          title="Physical Therapy"
          icon={<Stethoscope className="h-4 w-4 text-teal-600" />}
        >
          Gross motor & movement
        </ServiceNavItem>
        <ServiceNavItem
          href="/#services"
          title="ABA Therapy"
          icon={<Brain className="h-4 w-4 text-teal-600" />}
        >
          Behavioral support
        </ServiceNavItem>
        <ServiceNavItem
          href="/#services"
          title="Music Therapy"
          icon={<Music className="h-4 w-4 text-teal-600" />}
        >
          Creative expression
        </ServiceNavItem>
        </ul>
          </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/#gallery" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "hover:text-teal-600 transition-smooth text-base font-medium"
                )}
              >
                Gallery
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/#updates" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "hover:text-teal-600 transition-smooth text-base font-medium"
                )}
              >
                Updates
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
          <Link href="/#events" legacyBehavior passHref>
        <NavigationMenuLink
        className={cn(navigationMenuTriggerStyle(), "hover:text-teal-600 transition-smooth text-base font-medium")}
        >
        Events
        </NavigationMenuLink>
          </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
          <Link href="/#footer" legacyBehavior passHref>
        <NavigationMenuLink
        className={cn(navigationMenuTriggerStyle(), "hover:text-teal-600 transition-smooth text-base font-medium")}
        >
        Contact
        </NavigationMenuLink>
          </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        </NavigationMenu>
      </div>


      <div className="flex items-center gap-3">
        {/* Mobile Navigation */}
        <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[260px] sm:w-[320px]">
          <nav className="flex flex-col gap-5">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-white">
            <Shield className="h-4 w-4" />
            </div>
            <span className="text-lg font-bold">CSN Center</span>
          </Link>

          <div className="flex flex-col gap-2">
            <div className="text-xs font-medium text-gray-500">Services</div>
            <Link
            href="/#services"
            className="flex items-center gap-2 text-sm hover:text-teal-600 transition-smooth"
            >
            <MessageSquare className="h-5 w-5 text-teal-600" />
            Speech Therapy
            </Link>
            <Link
            href="/#services"
            className="flex items-center gap-2 text-sm hover:text-teal-600 transition-smooth"
            >
            <Dumbbell className="h-5 w-5 text-teal-600" />
            Occupational Therapy
            </Link>
            <Link
            href="/#services"
            className="flex items-center gap-2 text-sm hover:text-teal-600 transition-smooth"
            >
            <Stethoscope className="h-5 w-5 text-teal-600" />
            Physical Therapy
            </Link>
            <Link
            href="#services"
            className="flex items-center gap-2 text-sm hover:text-teal-600 transition-smooth"
            >
            <Brain className="h-5 w-5 text-teal-600" />
            ABA Therapy
            </Link>
            <Link
            href="/#services"
            className="flex items-center gap-2 text-sm hover:text-teal-600 transition-smooth"
            >
            <Music className="h-5 w-5 text-teal-600" />
            Music Therapy
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-xs font-medium text-gray-500">Pages</div>
            <Link href="/#events" className="text-sm hover:text-teal-600 transition-smooth">
            Events
            </Link>
            <Link href="/#about" className="text-sm hover:text-teal-600 transition-smooth">
            About
            </Link>
            <Link href="/#contact" className="text-sm hover:text-teal-600 transition-smooth">
            Contact
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <Link href="/parent/login">
            <Button
              variant="outline"
              className="w-full border-teal-200 text-teal-700 hover:bg-teal-50 transition-smooth text-sm"
            >
              Parent Portal
            </Button>
            </Link>
            <Link href="/parent/register">
            <Button className="w-full bg-teal-600 hover:bg-teal-700 transition-smooth text-sm">Get Started</Button>
            </Link>
          </div>

          <div className="mt-3 p-3 bg-teal-50 rounded-lg">
            <div className="flex items-center gap-2 text-xs font-medium text-teal-700 mb-1">
            <Phone className="h-4 w-4" />
            Emergency Hotline
            </div>
            <div className="text-base font-bold text-teal-900">911</div>
          </div>
          </nav>
        </SheetContent>
        </Sheet>
      </div>
      </div>
    </header>
  )
}

const ServiceNavItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string
    icon: React.ReactNode
  }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-teal-50 focus:bg-teal-50",
            className,
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {icon}
            <div className="text-sm font-medium leading-none text-gray-900">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-600">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ServiceNavItem.displayName = "ServiceNavItem"
