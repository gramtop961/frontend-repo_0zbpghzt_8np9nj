import { ArrowRight, Ship, PackageCheck, MapPinned } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-100 blur-2xl" />
        <div className="absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-indigo-100 blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white shadow-sm px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-100">
              <span className="inline-flex h-2 w-2 rounded-full bg-green-500" />
              Siap angkut ke seluruh Indonesia
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Solusi Truk & Ekspedisi Domestik yang Cepat, Aman, dan Terpercaya
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Dari pengambilan hingga pengantaran, kami melayani pengiriman darat, laut, dan udara untuk kebutuhan bisnis Anda dengan jaringan armada nasional.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#quote" className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700">
                Minta Penawaran
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#tracking" className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100">
                Lacak Kiriman
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="rounded-xl bg-white p-4 shadow ring-1 ring-gray-100">
                <Ship className="h-6 w-6 text-blue-600" />
                <p className="mt-2 text-sm font-semibold">Multi Moda</p>
                <p className="text-xs text-gray-500">Darat • Laut • Udara</p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow ring-1 ring-gray-100">
                <PackageCheck className="h-6 w-6 text-blue-600" />
                <p className="mt-2 text-sm font-semibold">Asuransi & POD</p>
                <p className="text-xs text-gray-500">Barang aman terjamin</p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow ring-1 ring-gray-100">
                <MapPinned className="h-6 w-6 text-blue-600" />
                <p className="mt-2 text-sm font-semibold">Seluruh Nusantara</p>
                <p className="text-xs text-gray-500">Kota besar hingga remote</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551446339-3f7b0db3ee76?q=80&w=1974&auto=format&fit=crop"
              alt="Truk logistik Indonesia"
              className="rounded-2xl shadow-2xl ring-1 ring-gray-200"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow p-4 ring-1 ring-gray-100">
              <p className="text-xs text-gray-500">Waktu pengiriman rata-rata</p>
              <p className="text-lg font-extrabold text-gray-900">1-3 Hari Jabodetabek</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
