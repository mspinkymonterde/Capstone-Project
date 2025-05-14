import { BookOpen, Facebook, Instagram, Mail, MapPin, Phone, Twitter, Earth } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer id= "contact" className="w-full border-t border-green-100 bg-white">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Earth className="h-6 w-6 text-green-600" />
              <span className="text-xl font-bold text-black">Parent Support</span>
            </Link>
            <p className="text-sm text-gray-600">
              Supporting parents of children with special needs for early intervention in Parañaque City with resources, community, and expert guidance.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/CSNCenterParanaque/" className="text-gray-600 hover:text-green-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="/" className="text-gray-600 hover:text-green-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="mailto:csncenterparanaque@gmail.com" className="text-gray-600 hover:text-green-600">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-black">CSN Parañaque</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#about" className="text-gray-600 hover:text-green-600">
                  About the Center
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-600 hover:text-green-600">
                  Services Offered
              </Link>
              </li>
              <li>
                <Link href="/#event" className="text-gray-600 hover:text-green-600">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/blog/faq" className="text-gray-600 hover:text-green-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
                    <div className="space-y-4">
            <h3 className="text-lg font-medium text-black">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-green-600 shrink-0" />
                <span className="text-gray-600">CSN CENTER PARANAQUE Col. E. de Leon Street, Barangay Sto. Nino Parañaque, Philippines</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-green-600" />
                <span className="text-gray-600">0960 250 1011</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-green-600" />
                <span className="text-gray-600">csncenterparanaque@gmail.com</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-black">Parañaque Government Links </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="https://paranaquecity.gov.ph/" className="text-gray-600 hover:text-green-600">
                  Parañaque City Government
                </Link>
              </li>
              <li>
                <Link href="https://paranaquecity.gov.ph/paranaque-city-hotlines-and-directory-full-list/" className="text-gray-600 hover:text-green-600">
                  Paranaque City Hotlines and Directory
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-green-100 pt-6 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} CSN-PQ Center Parent Support System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
