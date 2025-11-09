import { Truck, Phone, Mail } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <Truck className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold tracking-tight">Nusantara Freight</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <a href="#services" className="hover:text-blue-600">Layanan</a>
            <a href="#tracking" className="hover:text-blue-600">Tracking</a>
            <a href="#coverage" className="hover:text-blue-600">Jangkauan</a>
            <a href="#contact" className="hover:text-blue-600">Kontak</a>
          </nav>

          <div className="hidden sm:flex items-center gap-4">
            <a href="tel:+621234567890" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-blue-600">
              <Phone className="h-4 w-4" />
              021-1234-5678
            </a>
            <a href="mailto:sales@nusantarafreight.id" className="hidden lg:inline-flex items-center gap-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
              <Mail className="h-4 w-4" />
              Dapatkan Penawaran
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
