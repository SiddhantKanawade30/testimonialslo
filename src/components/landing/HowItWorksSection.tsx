export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-white" id="how-it-works">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            How it works
          </h2>
          <p className="text-lg text-slate-600">
            Three simple steps to build social proof and increase
            conversions.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* <!-- Step 1 --> */}
          <div className="group relative flex flex-col items-start p-6 rounded-2xl transition-all hover:bg-slate-50 border border-transparent hover:border-slate-100">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-primary">
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "28px" }}
              >
                ios_share
              </span>
            </div>
            <h3 className="mb-3 text-xl font-bold text-slate-900">
              1. Share your link
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Send a unique, branded link to your customers via email, chat,
              or embed it on your site.
            </p>
          </div>
          {/* <!-- Step 2 --> */}
          <div className="group relative flex flex-col items-start p-6 rounded-2xl transition-all hover:bg-slate-50 border border-transparent hover:border-slate-100">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "28px" }}
              >
                videocam
              </span>
            </div>
            <h3 className="mb-3 text-xl font-bold text-slate-900">
              2. Collect responses
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Customers can easily record a video or submit a text
              testimonial in under 60 seconds.
            </p>
          </div>
          {/* <!-- Step 3 --> */}
          <div className="group relative flex flex-col items-start p-6 rounded-2xl transition-all hover:bg-slate-50 border border-transparent hover:border-slate-100">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "28px" }}
              >
                dashboard_customize
              </span>
            </div>
            <h3 className="mb-3 text-xl font-bold text-slate-900">
              3. Manage &amp; Embed
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Review, approve, and embed the best testimonials to your
              website with a single line of code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
