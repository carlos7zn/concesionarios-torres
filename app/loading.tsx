export default function Loading() {
  return (
    <div className="min-h-screen bg-dark-950 flex flex-col">
      {/* Header skeleton */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-dark-950/85 backdrop-blur-md border-b border-dark-800/60 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="animate-pulse">
              <div className="w-10 h-10 rounded-lg bg-dark-800" />
            </div>
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="w-24 h-6 bg-dark-800 rounded" />
              <div className="w-24 h-6 bg-dark-800 rounded" />
              <div className="w-24 h-6 bg-dark-800 rounded" />
              <div className="w-24 h-6 bg-dark-800 rounded" />
              <div className="w-24 h-6 bg-dark-800 rounded" />
            </nav>
            <div className="hidden sm:flex items-center space-x-4">
              <div className="w-24 h-10 bg-dark-800 rounded-lg" />
              <div className="w-24 h-10 bg-brand-red/20 rounded-lg" />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-20">
        {/* Hero skeleton */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-dark-900/50 animate-pulse" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
            <div className="max-w-3xl space-y-6 animate-pulse">
              <div className="w-48 h-6 bg-dark-800 rounded-full" />
              <div className="w-full h-12 bg-dark-800 rounded" />
              <div className="w-3/4 h-10 bg-dark-800 rounded" />
              <div className="w-1/2 h-10 bg-dark-800 rounded" />
              <div className="flex gap-4">
                <div className="w-48 h-12 bg-brand-red/20 rounded-xl" />
                <div className="w-48 h-12 bg-dark-800 rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats skeleton */}
        <section className="bg-dark-900 border-t border-b border-dark-800 py-12 animate-pulse">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-4"><div className="w-24 h-12 bg-dark-800 rounded" /><div className="w-32 h-4 bg-dark-800 rounded mt-2" /></div>
              <div className="p-4"><div className="w-24 h-12 bg-dark-800 rounded" /><div className="w-32 h-4 bg-dark-800 rounded mt-2" /></div>
              <div className="p-4"><div className="w-24 h-12 bg-dark-800 rounded" /><div className="w-32 h-4 bg-dark-800 rounded mt-2" /></div>
              <div className="p-4"><div className="w-24 h-12 bg-dark-800 rounded" /><div className="w-32 h-4 bg-dark-800 rounded mt-2" /></div>
            </div>
          </div>
        </section>

        {/* Brands skeleton */}
        <section className="py-10 bg-dark-950 border-b border-dark-900 animate-pulse">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-64 h-4 bg-dark-800 mx-auto mb-6 rounded" />
            <div className="flex flex-wrap justify-center gap-6 px-4">
              <div className="w-24 h-8 bg-dark-800 rounded-xl" />
              <div className="w-24 h-8 bg-dark-800 rounded-xl" />
              <div className="w-24 h-8 bg-dark-800 rounded-xl" />
              <div className="w-24 h-8 bg-dark-800 rounded-xl" />
              <div className="w-24 h-8 bg-dark-800 rounded-xl" />
              <div className="w-24 h-8 bg-dark-800 rounded-xl" />
            </div>
          </div>
        </section>

        {/* Featured vehicles skeleton */}
        <section className="py-20 bg-dark-950 animate-pulse">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="w-32 h-4 bg-dark-800 mx-auto rounded mb-2" />
              <div className="w-64 h-8 bg-dark-800 mx-auto rounded" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-dark-900 border border-dark-800 rounded-2xl overflow-hidden">
                  <div className="aspect-[16/10] bg-dark-800" />
                  <div className="p-6 space-y-4">
                    <div className="w-24 h-4 bg-dark-800 rounded" />
                    <div className="w-3/4 h-6 bg-dark-800 rounded" />
                    <div className="w-1/2 h-4 bg-dark-800 rounded" />
                    <div className="w-1/3 h-4 bg-dark-800 rounded" />
                    <div className="grid grid-cols-3 gap-2 pt-3 border-t border-dark-800">
                      <div className="flex items-center gap-2"><div className="w-4 h-4 bg-dark-800 rounded" /><div className="w-16 h-3 bg-dark-800 rounded" /></div>
                      <div className="flex items-center gap-2"><div className="w-4 h-4 bg-dark-800 rounded" /><div className="w-16 h-3 bg-dark-800 rounded" /></div>
                      <div className="flex items-center gap-2"><div className="w-4 h-4 bg-dark-800 rounded" /><div className="w-16 h-3 bg-dark-800 rounded" /></div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-dark-800">
                      <div className="space-y-1">
                        <div className="w-16 h-3 bg-dark-800 rounded" />
                        <div className="w-32 h-6 bg-dark-800 rounded" />
                      </div>
                      <div className="w-28 h-10 bg-brand-red/20 rounded-xl" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA skeleton */}
        <section className="py-20 bg-gradient-to-b from-dark-950 to-dark-900 border-t border-dark-800 text-center animate-pulse">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-20 h-20 bg-brand-red/20 rounded-2xl mx-auto mb-6" />
            <div className="w-3/4 h-10 bg-dark-800 mx-auto rounded mb-4" />
            <div className="w-1/2 h-6 bg-dark-800 mx-auto rounded mb-8" />
            <div className="w-40 h-12 bg-brand-red/20 mx-auto rounded-2xl" />
          </div>
        </section>

        {/* FAQ skeleton */}
        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-pulse">
          <div className="text-center mb-16">
            <div className="w-32 h-4 bg-dark-800 mx-auto rounded mb-2" />
            <div className="w-64 h-8 bg-dark-800 mx-auto rounded" />
            <div className="w-1/2 h-4 bg-dark-800 mx-auto rounded" />
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-dark-900 border border-dark-800 rounded-2xl overflow-hidden">
                <div className="w-full h-12 bg-dark-800" />
                <div className="px-6 pb-5">
                  <div className="w-3/4 h-4 bg-dark-800 rounded" />
                  <div className="w-1/2 h-4 bg-dark-800 rounded" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials skeleton */}
        <section className="py-20 bg-gradient-to-b from-dark-950 to-dark-900 border-t border-dark-800 animate-pulse">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="w-32 h-4 bg-dark-800 mx-auto rounded mb-2" />
              <div className="w-64 h-8 bg-dark-800 mx-auto rounded" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-dark-900 border border-dark-800 rounded-2xl p-6">
                  <div className="w-12 h-12 bg-brand-red/20 rounded-full mx-auto mb-4" />
                  <div className="w-2/3 h-4 bg-dark-800 mx-auto rounded mb-2" />
                  <div className="w-3/4 h-4 bg-dark-800 mx-auto rounded" />
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <div className="w-8 h-8 bg-dark-800 rounded-full" />
                    <div className="w-20 h-4 bg-dark-800 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA skeleton */}
        <section className="py-20 bg-gradient-to-b from-dark-950 to-dark-900 border-t border-dark-800 text-center animate-pulse">
          <div className="max-w-2xl mx-auto px-4">
            <div className="w-64 h-8 bg-dark-800 mx-auto rounded mb-4" />
            <div className="w-1/2 h-6 bg-dark-800 mx-auto rounded mb-8" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="w-48 h-12 bg-brand-red/20 mx-auto rounded-xl" />
              <div className="w-48 h-12 bg-emerald-600/20 mx-auto rounded-xl" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer skeleton */}
      <footer className="bg-dark-900 border-t border-dark-800 pt-16 pb-12 animate-pulse">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div className="space-y-4">
              <div className="w-9 h-9 bg-brand-red/20 rounded-lg" />
              <div className="w-32 h-4 bg-dark-800 rounded" />
              <div className="w-20 h-3 bg-dark-800 rounded" />
              <div className="w-48 h-4 bg-dark-800 rounded" />
              <div className="flex gap-3">
                <div className="w-9 h-9 bg-dark-800 rounded-lg" />
                <div className="w-9 h-9 bg-dark-800 rounded-lg" />
              </div>
            </div>
            <div><div className="w-20 h-4 bg-dark-800 rounded mb-4" /><div className="space-y-3"><div className="w-32 h-3 bg-dark-800 rounded" /><div className="w-32 h-3 bg-dark-800 rounded" /><div className="w-32 h-3 bg-dark-800 rounded" /></div></div>
            <div><div className="w-20 h-4 bg-dark-800 rounded mb-4" /><div className="space-y-3"><div className="flex gap-2"><div className="w-4 h-4 bg-dark-800 rounded" /><div className="w-32 h-3 bg-dark-800 rounded" /></div><div className="flex gap-2"><div className="w-4 h-4 bg-dark-800 rounded" /><div className="w-32 h-3 bg-dark-800 rounded" /></div></div></div>
            <div><div className="w-20 h-4 bg-dark-800 rounded mb-4" /><div className="flex gap-2"><div className="w-9 h-9 bg-dark-800 rounded-lg" /><div className="w-9 h-9 bg-dark-800 rounded-lg" /></div></div>
          </div>
          <div className="pt-8 border-t border-dark-800 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="w-48 h-3 bg-dark-800 rounded" />
            <div className="flex space-x-6"><div className="w-24 h-3 bg-dark-800 rounded" /><div className="w-24 h-3 bg-dark-800 rounded" /><div className="w-24 h-3 bg-dark-800 rounded" /></div>
            <div className="w-24 h-3 bg-dark-800 rounded" />
          </div>
        </div>
      </footer>
    </div>
  )
}