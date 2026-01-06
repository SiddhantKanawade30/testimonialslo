export default function DashboardPreviewSection() {
  return (
    <section className="py-20 bg-background-offset border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Everything you need to <br className="hidden lg:block" />
              manage social proof.
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="mt-1 text-primary">
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Centralized Dashboard
                  </h4>
                  <p className="text-slate-600 text-sm mt-1">
                    View all your video and text testimonials in one
                    organized place.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-1 text-primary">
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Moderation Workflow
                  </h4>
                  <p className="text-slate-600 text-sm mt-1">
                    Easily approve, reject, or tag submissions before they
                    go live.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-1 text-primary">
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Real-time Analytics
                  </h4>
                  <p className="text-slate-600 text-sm mt-1">
                    Track views and conversion impacts of your embedded
                    widgets.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            {/* <!-- Browser Frame Component --> */}
            <div className="rounded-xl border border-slate-200 bg-white shadow-xl overflow-hidden">
              <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex gap-2 items-center">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="ml-4 bg-white border border-slate-200 text-xs text-slate-400 px-2 py-1 rounded w-full max-w-[200px]">
                  testimonialflow.com/app
                </div>
              </div>
              <div className="aspect-video bg-slate-50 w-full relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  data-alt="Detailed view of the application dashboard with charts and lists"
                  style={{
                    backgroundImage:
                      "url(https://lh3.googleusercontent.com/aida-public/AB6AXuCajIonegS-xUh4Hv8B0gI7Mf0ufD4AbBb-g53ych6LF5I5YoFc6pNuc12oXwO-djOcVlQy8ewAQrlreBDe6IPtGDxPUMzm6tjHawWOHbaS3QVms5evXIs9t6lKVCffICqTLFF1U2oEPWbu4YZdMvuz8mOFSkeY-R31cAQRqVtRbQalMetsM-kclvLo8Q3lZxdkdLxA8EuZkbDof4XjJwh2AB2rgCDkmM3bDKFNec5y30BppuM7rRiKPXatpbKGGPsX5qOp2Rs4d28)",
                  }}
                ></div>
                {/* <!-- Subtle overlay mock UI --> */}
                <div className="absolute top-0 left-0 bottom-0 w-16 border-r border-slate-200 bg-white hidden sm:block">
                  <div className="flex flex-col items-center pt-4 gap-6 text-slate-400">
                    <span className="material-symbols-outlined text-primary">
                      grid_view
                    </span>
                    <span className="material-symbols-outlined">
                      folder
                    </span>
                    <span className="material-symbols-outlined">
                      settings
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
