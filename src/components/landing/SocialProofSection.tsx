export default function SocialProofSection() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/50 py-10">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-6 text-sm font-medium text-slate-500">
          TRUSTED BY TEAMS AT
        </p>
        <div className="grid grid-cols-2 gap-8 opacity-60 md:grid-cols-5 items-center justify-items-center grayscale">
          {/* <!-- Simple Text Placeholders for Logos to maintain clean code --> */}
          <span className="text-xl font-bold text-slate-800">
            Acme Corp
          </span>
          <span className="text-xl font-bold text-slate-800">
            GlobalTech
          </span>
          <span className="text-xl font-bold text-slate-800">Nebula</span>
          <span className="text-xl font-bold text-slate-800">FoxRun</span>
          <span className="text-xl font-bold text-slate-800">Circle</span>
        </div>
      </div>
    </section>
  );
}
