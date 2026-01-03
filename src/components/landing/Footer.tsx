export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-4 flex flex-col items-center justify-between gap-6 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex size-6 items-center justify-center rounded text-primary">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "20px" }}
            >
              chat_bubble
            </span>
          </div>
          <span className="text-base font-semibold text-slate-900">
            TestimonialFlow
          </span>
        </div>
        <div className="flex gap-8 text-sm text-slate-600">
          <a className="hover:text-primary hover:underline" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-primary hover:underline" href="#">
            Terms of Service
          </a>
          <a className="hover:text-primary hover:underline" href="#">
            Contact
          </a>
        </div>
        <p className="text-sm text-slate-400">© 2023 TestimonialFlow Inc.</p>
      </div>
    </footer>
  );
}
