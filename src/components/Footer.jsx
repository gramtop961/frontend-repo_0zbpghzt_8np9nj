import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h4 className="text-white text-lg font-semibold">Nusantara Freight</h4>
            <p className="mt-3 text-sm text-gray-400">Partner logistik untuk operasional bisnis Anda di seluruh Indonesia.</p>
          </div>
          <div>
            <h5 className="text-white font-semibold">Kantor</h5>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-blue-400" />
                Jl. Logistik No. 88, Jakarta Timur
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-blue-400" />
                021-1234-5678
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-blue-400" />
                sales@nusantarafreight.id
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold">Jam Operasional</h5>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-start gap-2"><Clock className="h-4 w-4 mt-0.5 text-blue-400" />Senin - Sabtu: 08.00 - 20.00</li>
              <li className="flex items-start gap-2"><Clock className="h-4 w-4 mt-0.5 text-blue-400" />Minggu & Hari Libur: On Call</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Nusantara Freight. All rights reserved.</p>
          <div className="mt-2 sm:mt-0 flex gap-6">
            <a className="hover:text-white" href="#services">Layanan</a>
            <a className="hover:text-white" href="#tracking">Tracking</a>
            <a className="hover:text-white" href="#contact">Kontak</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
