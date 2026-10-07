import { Link } from "react-router";

function Footer() {
  return (
    <footer className="relative mt-12 overflow-hidden bg-slate-950 text-white">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl"></div>

      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl"></div>


      {/* Top Gradient Line */}
      <div className="h-1 w-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500"></div>


      {/* Footer Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">


          {/* BRAND */}
          <div className="lg:col-span-1">

            {/* Logo */}
            <div className="mb-5 flex items-center gap-3">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-600 text-xl font-black shadow-lg shadow-emerald-500/20">
                BC
              </div>

              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  BC Management
                </h2>

                <p className="text-xs font-medium text-emerald-400">
                  Smart • Simple • Secure
                </p>
              </div>

            </div>


            <p className="text-sm leading-6 text-slate-400">
              Manage your BC members, monthly payments, interest and
              financial records easily from one powerful management system.
            </p>


            {/* Status */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">

              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
              </span>

              <span className="text-xs font-medium text-emerald-300">
                System Active
              </span>

            </div>

          </div>


          {/* QUICK LINKS */}
          <div>

            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link
                  to="/"
                  className="group flex items-center gap-2 text-sm text-slate-400 transition-all duration-200 hover:translate-x-1 hover:text-emerald-400"
                >
                  <span className="text-emerald-400 transition group-hover:scale-125">
                    →
                  </span>
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  to="/create-member"
                  className="group flex items-center gap-2 text-sm text-slate-400 transition-all duration-200 hover:translate-x-1 hover:text-cyan-400"
                >
                  <span className="text-cyan-400 transition group-hover:scale-125">
                    →
                  </span>
                  Create Member
                </Link>
              </li>

              <li>
                <Link
                  to="/monthly-payment"
                  className="group flex items-center gap-2 text-sm text-slate-400 transition-all duration-200 hover:translate-x-1 hover:text-purple-400"
                >
                  <span className="text-purple-400 transition group-hover:scale-125">
                    →
                  </span>
                  Monthly Payment
                </Link>
              </li>

            </ul>

          </div>


          {/* FEATURES */}
          <div>

            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Features
            </h3>

            <div className="space-y-3">

              <div className="flex items-center gap-3 text-sm text-slate-400">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  👤
                </span>
                Member Management
              </div>


              <div className="flex items-center gap-3 text-sm text-slate-400">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                  💰
                </span>
                Monthly Payments
              </div>


              <div className="flex items-center gap-3 text-sm text-slate-400">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                  📈
                </span>
                Interest Calculation
              </div>


              <div className="flex items-center gap-3 text-sm text-slate-400">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400">
                  📊
                </span>
                Financial Records
              </div>

            </div>

          </div>


          {/* CONTACT / INFO */}
          <div>

            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              System Info
            </h3>


            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">

              <div className="mb-4">

                <p className="text-xs text-slate-500">
                  Management System
                </p>

                <p className="mt-1 font-semibold text-white">
                  BC Management
                </p>

              </div>


              <div className="mb-4">

                <p className="text-xs text-slate-500">
                  Duration
                </p>

                <p className="mt-1 font-semibold text-emerald-400">
                  36 Months / 3 Years
                </p>

              </div>


              <div>

                <p className="text-xs text-slate-500">
                  Security
                </p>

                <div className="mt-1 flex items-center gap-2">

                  <span className="text-emerald-400">
                    ✓
                  </span>

                  <span className="text-sm font-medium text-slate-300">
                    Secure Records
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>


        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

          <div>

            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-slate-300">
                BC Management
              </span>
              . All rights reserved.
            </p>

          </div>


          <div className="flex items-center gap-2 text-sm text-slate-500">

            <span>
              Made with
            </span>

            <span className="animate-pulse text-red-400">
              ♥
            </span>

            <span>
              for better management
            </span>

          </div>

        </div>

      </div>


      {/* Bottom Gradient */}
      <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-400"></div>

    </footer>
  );
}

export default Footer;