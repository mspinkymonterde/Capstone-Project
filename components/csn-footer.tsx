import { Shield, Facebook, Instagram, Mail, MapPin, Phone, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function CSNFooter() {
  // Add scrollspy logic for footer highlight
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer")
      if (footer) {
        const rect = footer.getBoundingClientRect()
        // Highlight when at least 120px of the footer is visible at the top
        setIsActive(rect.top <= 120 && rect.bottom > 120)
      }
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <footer
      id="footer"
      className={`w-full max-w-full bg-gray-900 text-white overflow-x-hidden transition-smooth ${
        isActive ? "ring-4 ring-csn-yellow ring-offset-2" : ""
      }`}
    >
      <div className="container px-4 py-10 sm:py-12 md:px-6 md:py-16">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-[1fr_1.5fr_1fr] md:grid-cols-[1fr_1.5fr_1fr] lg:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_1.5fr_1fr]">
          {/* Branding */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <img src="/csn-logo2.jpg" alt="CSN Center Logo" className="h-16 w-16" />
            </Link>
            <p className="text-sm text-gray-300">
              Supporting parents of children with special needs  <br />
              in Parañaque City with resources, community, and expert guidance.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-csn-teal transition-smooth">
          <Facebook className="h-5 w-5" />
          <span className="sr-only">Facebook</span>
              </Link>
              <Link
          href="mailto:csncenterparanaque@gmail.com"
          className="text-gray-400 hover:text-csn-teal transition-smooth"
              >
          <Mail className="h-5 w-5" />
          <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <div className="flex items-center gap-4 text-gray-300">                                   
              <MapPin className="h-5 w-5" />
              <span className="text-sm">Col. E. de Leon Street, Barangay Sto. Nino, Parañaque, Philippines</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Phone className="h-5 w-5" />
              <span className="text-sm">+63 960 250 1011</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Mail className="h-5 w-5" />
              <span className="text-sm">csncenterparanaque@gmail.com</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-4">Parañaque Government Links</h3>
            <div className="flex flex-wrap gap-4">
              <Link
          href="https://paranaquecity.gov.ph/"
          className="flex items-center gap-2 text-gray-300 hover:text-csn-teal transition-smooth text-sm"
          target="_blank"
          rel="noopener noreferrer"
              >
          Parañaque City Government
          <ExternalLink className="h-3 w-3" />
              </Link>
              <Link
          href="https://paranaquecity.gov.ph/paranaque-city-hotlines-and-directory-full-list/"
          className="flex items-center gap-2 text-gray-300 hover:text-csn-teal transition-smooth text-sm"
          target="_blank"
          rel="noopener noreferrer"
              >
          Paranaque City Hotlines and Directory
          <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>


        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800">
          <div className="flex flex-col gap-4 items-center md:flex-row md:justify-between">
            <p className="text-xs sm:text-sm text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} CSN Center - Parañaque. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400 justify-center md:justify-end">
              <Link href="/terms" className="hover:text-csn-teal transition-smooth">
                Terms of Service
              </Link>
              <span className="hidden sm:inline">|</span>
              <Link href="/privacy" className="hover:text-csn-teal transition-smooth">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
