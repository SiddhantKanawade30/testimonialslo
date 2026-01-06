export default function FeaturesSection() {
  return (
    <section className="py-24 bg-white" id="features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">
            Feature-rich, friction-free
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <!-- Feature 1 --> */}
          <div className="p-6 rounded-2xl border border-slate-200 hover:border-primary/30 hover:shadow-lg transition-all bg-white group">
            <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">movie</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Video &amp; Text Support
            </h3>
            <p className="text-slate-600 text-sm">
              Collect both versatile formats in a single, unified flow for
              your customers.
            </p>
          </div>
          {/* <!-- Feature 2 --> */}
          <div className="p-6 rounded-2xl border border-slate-200 hover:border-primary/30 hover:shadow-lg transition-all bg-white group">
            <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">
                verified_user
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Secure Video Handling
            </h3>
            <p className="text-slate-600 text-sm">
              Enterprise-grade storage and streaming for all your media
              assets.
            </p>
          </div>
          {/* <!-- Feature 3 --> */}
          <div className="p-6 rounded-2xl border border-slate-200 hover:border-primary/30 hover:shadow-lg transition-all bg-white group">
            <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">code</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Easy Embedding
            </h3>
            <p className="text-slate-600 text-sm">
              Copy-paste widgets for React, Webflow, WordPress, and more.
            </p>
          </div>
          {/* <!-- Feature 4 --> */}
          <div className="p-6 rounded-2xl border border-slate-200 hover:border-primary/30 hover:shadow-lg transition-all bg-white group">
            <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">palette</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Custom Branding
            </h3>
            <p className="text-slate-600 text-sm">
              Remove our branding and add your own logo and colors to the
              collection page.
            </p>
          </div>
          {/* <!-- Feature 5 --> */}
          <div className="p-6 rounded-2xl border border-slate-200 hover:border-primary/30 hover:shadow-lg transition-all bg-white group">
            <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">speed</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Fast Performance
            </h3>
            <p className="text-slate-600 text-sm">
              Optimized for speed and SEO so your site stays fast.
            </p>
          </div>
          {/* <!-- Feature 6 --> */}
          <div className="p-6 rounded-2xl border border-slate-200 hover:border-primary/30 hover:shadow-lg transition-all bg-white group">
            <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">download</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Export Data
            </h3>
            <p className="text-slate-600 text-sm">
              Download your videos and text content anytime you need them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
