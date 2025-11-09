import { useState } from 'react'
import { Search, CheckCircle2, MapPin, Truck } from 'lucide-react'

export default function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [result, setResult] = useState(null)

  const fakeTrack = () => {
    if (!trackingNumber.trim()) return
    const steps = [
      { status: 'Pickup di gudang asal', time: '08:12', location: 'Jakarta' },
      { status: 'Dalam perjalanan', time: '12:40', location: 'Tol Cipali' },
      { status: 'Transit hub', time: '19:05', location: 'Semarang' },
      { status: 'Out for delivery', time: '08:15', location: 'Surabaya' },
      { status: 'Delivered', time: '13:22', location: 'Surabaya' },
    ]
    setResult({ number: trackingNumber.toUpperCase(), carrier: 'Nusantara Freight', steps })
  }

  return (
    <section id="tracking" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-extrabold text-gray-900">Lacak Kiriman</h3>
            <p className="mt-2 text-gray-600">Masukkan nomor resi untuk melihat status terkini</p>

            <div className="mt-6 flex gap-3">
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Contoh: NF123456789ID"
                className="flex-1 rounded-lg border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <button onClick={fakeTrack} className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-700">
                <Search className="h-4 w-4" />
                Lacak
              </button>
            </div>

            {result && (
              <div className="mt-8 rounded-2xl bg-white p-6 shadow ring-1 ring-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">Nomor Resi</p>
                    <p className="text-lg font-semibold">{result.number}</p>
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm text-gray-600">
                    <Truck className="h-4 w-4 text-blue-600" /> {result.carrier}
                  </div>
                </div>

                <ol className="mt-6 relative border-l-2 border-dashed border-gray-200 pl-6">
                  {result.steps.map((s, idx) => (
                    <li key={idx} className="mb-6">
                      <div className="absolute -left-3 mt-1 h-5 w-5 rounded-full bg-blue-600 ring-4 ring-blue-100" />
                      <div className="flex items-center justify-between">
                        <div className="font-semibold text-gray-900 flex items-center gap-2">
                          {idx === result.steps.length - 1 ? (
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                          ) : null}
                          {s.status}
                        </div>
                        <span className="text-xs text-gray-500">{s.time}</span>
                      </div>
                      <div className="mt-1 inline-flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4 text-gray-400" /> {s.location}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>

          <div className="rounded-2xl bg-white p-6 shadow ring-1 ring-gray-100">
            <h4 className="text-lg font-semibold text-gray-900">Kenapa pilih kami?</h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>• SLA jelas dan transparan</li>
              <li>• Jaringan armada nasional</li>
              <li>• Harga kompetitif dan fleksibel</li>
              <li>• Integrasi API untuk bisnis Anda</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
