import { Shield, Facebook, Instagram, Mail, MapPin, Phone, ExternalLink } from "lucide-react"
import Link from "next/link"

export function CSNFooter() {
  return (
    <footer className="w-full max-w-full bg-gray-900 text-white overflow-x-hidden">
      <div className="container px-4 py-10 sm:py-12 md:px-6 md:py-16">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {/* Branding */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-csn-teal" />
              <div>
                <div className="text-lg font-bold">CSN Center</div>
                <div className="text-sm text-gray-400">Parañaque City</div>
              </div>
            </Link>
            <p className="text-sm text-gray-300">
              Supporting parents of children with special needs for early intervention in Parañaque City with resources,
              community, and expert guidance.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-csn-teal transition-smooth">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-csn-teal transition-smooth">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
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

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-csn-teal transition-smooth">
                  About the Center
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-csn-teal transition-smooth">
                  Services Offered
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-csn-teal transition-smooth">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-csn-teal transition-smooth">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Parent Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Parent Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/parent/register" className="text-gray-300 hover:text-csn-teal transition-smooth">
                  Parent Portal
                </Link>
              </li>
              <li>
                <Link href="/parent/login" className="text-gray-300 hover:text-csn-teal transition-smooth">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-csn-teal transition-smooth">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/support-groups" className="text-gray-300 hover:text-csn-teal transition-smooth">
                  Support Groups
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-csn-teal shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  CSN CENTER PARANAQUE
                  <br />
                  Col. E. de Leon Street
                  <br />
                  Barangay Sto. Nino
                  <br />
                  Parañaque, Philippines
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-csn-teal" />
                <span className="text-gray-300">0960 250 1011</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-csn-teal" />
                <span className="text-gray-300">csncenterparanaque@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Government Links Section */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800">
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-4">Parañaque Government Links</h3>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://paranaque.gov.ph"
                className="flex items-center gap-2 text-gray-300 hover:text-csn-teal transition-smooth text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Parañaque City Government
                <ExternalLink className="h-3 w-3" />
              </Link>
              <Link
                href="https://paranaque.gov.ph/hotlines"
                className="flex items-center gap-2 text-gray-300 hover:text-csn-teal transition-smooth text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Paranaque City Hotlines and Directory
                <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center md:flex-row md:justify-between">
            <p className="text-xs sm:text-sm text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} CSN-PQ Center Parent Support System. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400 justify-center md:justify-end">
              <Link href="/terms" className="hover:text-csn-teal transition-smooth">
                Terms of Service
              </Link>
              <span className="hidden sm:inline">|</span>
              <Link href="/privacy" className="hover:text-csn-teal transition-smooth">
                Privacy Policy
              </Link>
              <span className="hidden sm:inline">|</span>
              <Link href="/accessibility" className="hover:text-csn-teal transition-smooth">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
