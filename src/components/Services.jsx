import { Truck, Plane, Ship, Boxes, ShieldCheck, Timer } from 'lucide-react'

const services = [
  {
    icon: Truck,
    title: 'Trucking Domestik',
    desc: 'FTL & LTL seluruh pulau besar. Armada box, CDD, Fuso, Tronton hingga Wingbox.',
  },
  {
    icon: Ship,
    title: 'Pengiriman Laut',
    desc: 'Container 20/40 ft, LCL, RoRo untuk antar pulau efisien dan ekonomis.',
  },
  {
    icon: Plane,
    title: 'Kargo Udara',
    desc: 'Pengiriman kilat untuk kebutuhan mendesak dengan jangkauan nasional.',
  },
  {
    icon: Boxes,
    title: 'Pergudangan',
    desc: 'Cross-dock, penyimpanan, dan distribusi dengan sistem WMS terintegrasi.',
  },
  {
    icon: ShieldCheck,
    title: 'Asuransi & Keamanan',
    desc: 'Proteksi barang, GPS tracking, dan bukti serah terima digital (POD).',
  },
  {
    icon: Timer,
    title: 'Same/Next Day',
    desc: 'Layanan cepat untuk intra-kota dan antar-kota utama di Indonesia.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Layanan Kami</h2>
          <p className="mt-3 text-gray-600">Solusi end-to-end dari pengambilan hingga pengantaran</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
              <div className="mt-4 text-sm font-semibold text-blue-700 opacity-0 group-hover:opacity-100 transition">Pelajari lebih lanjut →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
