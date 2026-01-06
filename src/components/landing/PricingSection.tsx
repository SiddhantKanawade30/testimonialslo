export default function PricingSection() {
  return (
    <section className="py-24 bg-white" id="pricing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Collect testimonials that build trust and convert users
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* <!-- Free Plan --> */}
          <div className="p-8 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-all">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900">
                Free Forever
              </h3>
              <p className="text-sm text-slate-600 mt-1">Free</p>
            </div>
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-slate-900">₹0</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-primary text-xl flex-shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="text-slate-600">
                  Create up to 2 video testimonials
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-primary text-xl flex-shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="text-slate-600">
                  Create up to 5 text testimonials per campaign
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-primary text-xl flex-shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="text-slate-600">Unlimited campaigns</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-primary text-xl flex-shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="text-slate-600">
                  Basic testimonial embed widget
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-primary text-xl flex-shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="text-slate-600">Email notifications</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-slate-300 text-xl flex-shrink-0 mt-0.5">
                  cancel
                </span>
                <span className="text-slate-400">No custom branding</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-slate-300 text-xl flex-shrink-0 mt-0.5">
                  cancel
                </span>
                <span className="text-slate-400">
                  No advanced analytics
                </span>
              </li>
            </ul>
            <div className="inline-block px-4 py-2 bg-slate-100 text-slate-700 text-sm font-semibold rounded-lg">
              Current plan
            </div>
          </div>

          {/* <!-- Premium Plan --> */}
          <div className="p-8 rounded-2xl border-2 border-primary bg-gradient-to-br from-primary/5 to-white hover:shadow-xl transition-all relative">
            <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
              Most Popular
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900">Premium</h3>
              <p className="text-sm text-slate-600 mt-1">Most Popular</p>
            </div>
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-slate-900">
                  ₹499
                </span>
                <span className="text-slate-600">/ month</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-primary text-xl flex-shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="text-slate-600">
                  Unlimited video testimonials
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-primary text-xl flex-shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="text-slate-600">
                  Unlimited text testimonials
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-primary text-xl flex-shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="text-slate-600">Unlimited campaigns</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-primary text-xl flex-shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="text-slate-600">
                  Custom branding (logo & colors)
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-primary text-xl flex-shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="text-slate-600">
                  Advanced analytics dashboard
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-primary text-xl flex-shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="text-slate-600">Priority support</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-primary text-xl flex-shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="text-slate-600">Remove watermark</span>
              </li>
            </ul>
            <button className="w-full inline-flex h-11 items-center justify-center rounded-lg bg-primary px-8 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-hover">
              Upgrade to Premium
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
