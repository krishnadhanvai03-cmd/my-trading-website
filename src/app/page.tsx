export default function Page() {
  return (
    <>
      <main className="bg-[#080809] min-h-screen overflow-x-hidden">
        <nav
          className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
          style={{ opacity: "0", transform: "translateY(-20px)" }}
        >
          <div className="max-w-7xl mx-auto rounded-2xl transition-all duration-500 bg-transparent">
            <div className="flex items-center justify-between px-4 py-2.5">
              <a href="#" className="flex items-center gap-2.5 group">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-blue-glow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-trending-up w-[18px] h-[18px] text-white"
                  >
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
                </div>
                <span className="text-[15px] font-semibold tracking-tight text-white">
                  TradeBuddy<span className="text-blue-400">X</span>
                </span>
              </a>
              <div className="hidden md:flex items-center gap-1">
                <a
                  href="#features"
                  className="px-4 py-2 text-[13.5px] font-medium text-zinc-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                >
                  Features
                </a>
                <a
                  href="#markets"
                  className="px-4 py-2 text-[13.5px] font-medium text-zinc-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                >
                  Markets
                </a>
                <a
                  href="#terminal"
                  className="px-4 py-2 text-[13.5px] font-medium text-zinc-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                >
                  Terminal
                </a>
                <a
                  href="#ai-copilot"
                  className="px-4 py-2 text-[13.5px] font-medium text-zinc-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                >
                  AI Copilot
                </a>
                <a
                  href="#pricing"
                  className="px-4 py-2 text-[13.5px] font-medium text-zinc-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                >
                  Pricing
                </a>
              </div>
              <div className="hidden md:flex items-center gap-3">
                <a
                  href="#"
                  className="text-[13.5px] font-medium text-zinc-400 hover:text-white transition-colors duration-200 px-4 py-2"
                >
                  Sign In
                </a>
                <a
                  href="#early-access"
                  className="px-4 py-2 text-[13.5px] font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all duration-200 shadow-blue-glow-sm"
                  tabIndex="0"
                >
                  Get Early Access
                </a>
              </div>
              <button className="md:hidden p-2 text-zinc-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-menu w-5 h-5"
                >
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
          <div className="absolute inset-0 grid-bg opacity-100"></div>
          <div className="absolute inset-0 radial-fade-top"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-800/8 rounded-full blur-[100px]"></div>
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative z-10">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6"
                  style={{ opacity: "0", transform: "translateY(24px)" }}
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></span>
                  <span className="text-[12px] font-medium text-blue-300 tracking-wide">
                    Now in Early Access — Indian &amp; Global Markets
                  </span>
                </div>
                <h1
                  className="text-5xl sm:text-6xl lg:text-[64px] font-bold leading-[1.06] tracking-tight mb-6"
                  style={{ opacity: "0", transform: "translateY(24px)" }}
                >
                  <span className="text-white">Trade Smarter.</span>
                  <br />
                  <span className="text-white">Research Faster.</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent">
                    Decide With
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent">
                    Confidence.
                  </span>
                </h1>
                <p
                  className="text-[17px] text-zinc-400 leading-relaxed mb-8 max-w-[460px]"
                  style={{ opacity: "0", transform: "translateY(24px)" }}
                >
                  One platform for market analysis, demo trading, real trading,
                  portfolio intelligence, and AI-powered insights — built for
                  India and beyond.
                </p>
                <div
                  className="flex flex-wrap items-center gap-3"
                  style={{ opacity: "0", transform: "translateY(24px)" }}
                >
                  <a
                    href="#early-access"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[15px] rounded-xl transition-all duration-200 shadow-blue-glow-sm"
                    tabIndex="0"
                  >
                    Get Early Access
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right w-[18px] h-[18px]"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <button
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 glass rounded-xl text-white font-semibold text-[15px] hover:bg-white/5 transition-all duration-200"
                    tabIndex="0"
                  >
                    <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-play w-3 h-3 text-white fill-white ml-0.5"
                      >
                        <polygon points="6 3 20 12 6 21 6 3"></polygon>
                      </svg>
                    </span>
                    Watch Demo
                  </button>
                </div>
                <div
                  className="flex items-center gap-6 mt-10"
                  style={{ opacity: "0", transform: "translateY(24px)" }}
                >
                  <div>
                    <div className="text-[20px] font-bold text-white">
                      500K+
                    </div>
                    <div className="text-[12px] text-zinc-500">Traders</div>
                  </div>
                  <div>
                    <div className="text-[20px] font-bold text-white">20M+</div>
                    <div className="text-[12px] text-zinc-500">Data Points</div>
                  </div>
                  <div>
                    <div className="text-[20px] font-bold text-white">
                      99.99%
                    </div>
                    <div className="text-[12px] text-zinc-500">Uptime</div>
                  </div>
                </div>
              </div>
              <div className="relative h-[600px] hidden lg:block">
                <div
                  className="absolute top-0 left-0 animate-float"
                  style={{
                    zIndex: "3",
                    opacity: "0",
                    transform: "translateX(32px) translateY(-20px)",
                  }}
                >
                  <div className="card-premium rounded-2xl p-4 w-[260px] shadow-float">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-widest">
                        Watchlist
                      </span>
                      <span className="text-[10px] text-blue-400 font-medium">
                        Live
                      </span>
                    </div>
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-[12px] font-semibold text-white">
                            NIFTY 50
                          </div>
                          <div className="text-[11px] text-zinc-500">
                            24,832.15
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg width="64" height="24" fill="none">
                            <polyline
                              points="0,20 8,16 16,18 24,12 32,14 40,8 48,6 56,4 64,8"
                              stroke="#34d399"
                              strokeWidth="1.5"
                              fill="none"
                              opacity="0.9"
                            ></polyline>
                          </svg>
                          <span className="text-[11px] font-semibold text-emerald-400">
                            +1.42%
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-[12px] font-semibold text-white">
                            SENSEX
                          </div>
                          <div className="text-[11px] text-zinc-500">
                            81,452.28
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg width="64" height="24" fill="none">
                            <polyline
                              points="0,20 8,16 16,18 24,12 32,14 40,8 48,6 56,4 64,8"
                              stroke="#34d399"
                              strokeWidth="1.5"
                              fill="none"
                              opacity="0.9"
                            ></polyline>
                          </svg>
                          <span className="text-[11px] font-semibold text-emerald-400">
                            +1.38%
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-[12px] font-semibold text-white">
                            RELIANCE
                          </div>
                          <div className="text-[11px] text-zinc-500">
                            2,945.50
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg width="64" height="24" fill="none">
                            <polyline
                              points="0,4 8,8 16,6 24,12 32,10 40,16 48,14 56,18 64,20"
                              stroke="#f87171"
                              strokeWidth="1.5"
                              fill="none"
                              opacity="0.9"
                            ></polyline>
                          </svg>
                          <span className="text-[11px] font-semibold text-red-400">
                            -0.38%
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-[12px] font-semibold text-white">
                            TCS
                          </div>
                          <div className="text-[11px] text-zinc-500">
                            4,182.75
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg width="64" height="24" fill="none">
                            <polyline
                              points="0,20 8,16 16,18 24,12 32,14 40,8 48,6 56,4 64,8"
                              stroke="#34d399"
                              strokeWidth="1.5"
                              fill="none"
                              opacity="0.9"
                            ></polyline>
                          </svg>
                          <span className="text-[11px] font-semibold text-emerald-400">
                            +2.14%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute top-16 right-0 animate-float-delayed"
                  style={{
                    zIndex: "4",
                    opacity: "0",
                    transform: "translateX(48px)",
                  }}
                >
                  <div className="card-premium rounded-2xl p-4 w-[220px] shadow-float">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 rounded-lg bg-blue-500/20 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-chart-no-axes-column w-3 h-3 text-blue-400"
                        >
                          <line x1="18" x2="18" y1="20" y2="10"></line>
                          <line x1="12" x2="12" y1="20" y2="4"></line>
                          <line x1="6" x2="6" y1="20" y2="14"></line>
                        </svg>
                      </div>
                      <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-widest">
                        Portfolio
                      </span>
                    </div>
                    <div className="mb-3">
                      <div className="text-[22px] font-bold text-white">
                        ₹4,82,910
                      </div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-trending-up w-3.5 h-3.5 text-emerald-400"
                        >
                          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                          <polyline points="16 7 22 7 22 13"></polyline>
                        </svg>
                        <span className="text-[12px] font-semibold text-emerald-400">
                          +₹18,320 (3.94%)
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-[10px] text-zinc-500">
                            Equity
                          </span>
                          <span className="text-[10px] text-zinc-400">65%</span>
                        </div>
                        <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{ width: "65%", backgroundColor: "#3b82f6" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-[10px] text-zinc-500">
                            Mutual Funds
                          </span>
                          <span className="text-[10px] text-zinc-400">25%</span>
                        </div>
                        <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{ width: "25%", backgroundColor: "#10b981" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-[10px] text-zinc-500">
                            F&amp;O
                          </span>
                          <span className="text-[10px] text-zinc-400">10%</span>
                        </div>
                        <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{ width: "10%", backgroundColor: "#f59e0b" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute top-44 left-14 animate-float"
                  style={{
                    zIndex: "5",
                    animationDelay: "2s",
                    opacity: "0",
                    transform: "translateY(32px)",
                  }}
                >
                  <div className="card-premium rounded-2xl p-4 w-[240px] shadow-float">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-zap w-3 h-3 text-white"
                        >
                          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                        </svg>
                      </div>
                      <span className="text-[11px] font-semibold text-white">
                        AI Copilot
                      </span>
                      <span className="ml-auto flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                        <span className="text-[10px] text-emerald-400">
                          Active
                        </span>
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-white/5 rounded-xl p-2.5 text-[11px] text-zinc-300 leading-relaxed">
                        NIFTY shows strong momentum. RSI at 64 suggests room to
                        rally. Support at 24,650.
                      </div>
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-2.5">
                        <div className="text-[10px] font-semibold text-blue-400 mb-1">
                          Trade Idea
                        </div>
                        <div className="text-[11px] text-zinc-300">
                          Long RELIANCE above ₹2,960 with target ₹3,080
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute bottom-16 right-8 animate-float-delayed"
                  style={{
                    zIndex: "3",
                    animationDelay: "1.5s",
                    opacity: "0",
                    transform: "translateX(32px) translateY(32px)",
                  }}
                >
                  <div className="card-premium rounded-2xl p-4 w-[200px] shadow-float">
                    <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-widest mb-3">
                      Quick Order
                    </div>
                    <div className="text-[13px] font-semibold text-white mb-0.5">
                      TCS
                    </div>
                    <div className="text-[11px] text-zinc-500 mb-3">
                      NSE · CMP ₹4,182.75
                    </div>
                    <div className="flex gap-2 mb-3">
                      <button className="flex-1 py-1.5 bg-emerald-500/20 border border-emerald-500/30 rounded-lg text-[11px] font-semibold text-emerald-400">
                        BUY
                      </button>
                      <button className="flex-1 py-1.5 bg-red-500/20 border border-red-500/30 rounded-lg text-[11px] font-semibold text-red-400">
                        SELL
                      </button>
                    </div>
                    <div className="h-px bg-white/8 mb-3"></div>
                    <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                      <div>
                        <div className="text-[9px] text-zinc-600 uppercase tracking-wide">
                          Margin
                        </div>
                        <div className="text-[11px] font-medium text-zinc-300">
                          ₹8,365
                        </div>
                      </div>
                      <div>
                        <div className="text-[9px] text-zinc-600 uppercase tracking-wide">
                          Risk
                        </div>
                        <div className="text-[11px] font-medium text-zinc-300">
                          0.87%
                        </div>
                      </div>
                      <div>
                        <div className="text-[9px] text-zinc-600 uppercase tracking-wide">
                          SL
                        </div>
                        <div className="text-[11px] font-medium text-zinc-300">
                          ₹4,060
                        </div>
                      </div>
                      <div>
                        <div className="text-[9px] text-zinc-600 uppercase tracking-wide">
                          Target
                        </div>
                        <div className="text-[11px] font-medium text-zinc-300">
                          ₹4,350
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute bottom-0 left-4 animate-float"
                  style={{
                    zIndex: "3",
                    animationDelay: "3s",
                    opacity: "0",
                    transform: "translateY(24px)",
                  }}
                >
                  <div className="card-premium rounded-2xl p-3.5 w-[200px] shadow-float">
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-activity w-3.5 h-3.5 text-emerald-400"
                      >
                        <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                      </svg>
                      <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">
                        Market Status
                      </span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-zinc-400">NSE</span>
                        <span className="text-[10px] font-medium text-emerald-400">
                          Open
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-zinc-400">BSE</span>
                        <span className="text-[10px] font-medium text-emerald-400">
                          Open
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-zinc-400">NYSE</span>
                        <span className="text-[10px] font-medium text-amber-400">
                          Pre-Market
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-zinc-400">Forex</span>
                        <span className="text-[10px] font-medium text-blue-400">
                          24/7
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/8 rounded-full blur-[80px] pointer-events-none"></div>
                <div
                  className="absolute top-8 right-[260px]"
                  style={{ zIndex: "6", opacity: "0", transform: "scale(0.8)" }}
                >
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 glass rounded-full border border-white/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-shield w-3 h-3 text-blue-400"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    </svg>
                    <span className="text-[10px] font-medium text-zinc-300">
                      SEBI Regulated
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-10 border-t border-white/6 bg-black/30 backdrop-blur-sm overflow-hidden">
            <div className="flex items-center h-full">
              <div className="flex items-center gap-8 animate-ticker whitespace-nowrap">
                <span className="flex items-center gap-2 text-[11px]">
                  <span className="text-zinc-500">NIFTY 50</span>
                  <span className="text-white font-medium">24,832.15</span>
                  <span className="text-emerald-400">+1.42%</span>
                </span>
                <span className="flex items-center gap-2 text-[11px]">
                  <span className="text-zinc-500">SENSEX</span>
                  <span className="text-white font-medium">81,452.28</span>
                  <span className="text-emerald-400">+1.38%</span>
                </span>
                <span className="flex items-center gap-2 text-[11px]">
                  <span className="text-zinc-500">RELIANCE</span>
                  <span className="text-white font-medium">2,945.50</span>
                  <span className="text-red-400">-0.38%</span>
                </span>
                <span className="flex items-center gap-2 text-[11px]">
                  <span className="text-zinc-500">TCS</span>
                  <span className="text-white font-medium">4,182.75</span>
                  <span className="text-emerald-400">+2.14%</span>
                </span>
                <span className="flex items-center gap-2 text-[11px]">
                  <span className="text-zinc-500">INFY</span>
                  <span className="text-white font-medium">1,876.20</span>
                  <span className="text-emerald-400">+0.91%</span>
                </span>
                <span className="flex items-center gap-2 text-[11px]">
                  <span className="text-zinc-500">HDFC BANK</span>
                  <span className="text-white font-medium">1,642.30</span>
                  <span className="text-red-400">-0.52%</span>
                </span>
                <span className="flex items-center gap-2 text-[11px]">
                  <span className="text-zinc-500">EUR/USD</span>
                  <span className="text-white font-medium">1.08421</span>
                  <span className="text-emerald-400">+0.23%</span>
                </span>
                <span className="flex items-center gap-2 text-[11px]">
                  <span className="text-zinc-500">GOLD</span>
                  <span className="text-white font-medium">2,341.80</span>
                  <span className="text-emerald-400">+0.67%</span>
                </span>
                <span className="flex items-center gap-2 text-[11px]">
                  <span className="text-zinc-500">NIFTY 50</span>
                  <span className="text-white font-medium">24,832.15</span>
                  <span className="text-emerald-400">+1.42%</span>
                </span>
                <span className="flex items-center gap-2 text-[11px]">
                  <span className="text-zinc-500">SENSEX</span>
                  <span className="text-white font-medium">81,452.28</span>
                  <span className="text-emerald-400">+1.38%</span>
                </span>
                <span className="flex items-center gap-2 text-[11px]">
                  <span className="text-zinc-500">RELIANCE</span>
                  <span className="text-white font-medium">2,945.50</span>
                  <span className="text-red-400">-0.38%</span>
                </span>
                <span className="flex items-center gap-2 text-[11px]">
                  <span className="text-zinc-500">TCS</span>
                  <span className="text-white font-medium">4,182.75</span>
                  <span className="text-emerald-400">+2.14%</span>
                </span>
                <span className="flex items-center gap-2 text-[11px]">
                  <span className="text-zinc-500">INFY</span>
                  <span className="text-white font-medium">1,876.20</span>
                  <span className="text-emerald-400">+0.91%</span>
                </span>
                <span className="flex items-center gap-2 text-[11px]">
                  <span className="text-zinc-500">HDFC BANK</span>
                  <span className="text-white font-medium">1,642.30</span>
                  <span className="text-red-400">-0.52%</span>
                </span>
                <span className="flex items-center gap-2 text-[11px]">
                  <span className="text-zinc-500">EUR/USD</span>
                  <span className="text-white font-medium">1.08421</span>
                  <span className="text-emerald-400">+0.23%</span>
                </span>
                <span className="flex items-center gap-2 text-[11px]">
                  <span className="text-zinc-500">GOLD</span>
                  <span className="text-white font-medium">2,341.80</span>
                  <span className="text-emerald-400">+0.67%</span>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 border-y border-white/6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.015] to-transparent"></div>
          <div className="max-w-7xl mx-auto px-6">
            <div
              className="text-center mb-10"
              style={{ opacity: "0", transform: "translateY(12px)" }}
            >
              <p className="text-[12px] font-semibold text-zinc-600 uppercase tracking-[0.2em]">
                Supported Markets &amp; Exchanges
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
              <div
                className="flex items-center gap-2.5 px-5 py-2.5 glass rounded-xl group cursor-default"
                style={{ opacity: "0", transform: "translateY(12px)" }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: "#3b82f6",
                    boxShadow: "0 0 6px #3b82f680",
                  }}
                ></div>
                <span className="text-[13px] font-semibold text-zinc-300 group-hover:text-white transition-colors">
                  NSE
                </span>
              </div>
              <div
                className="flex items-center gap-2.5 px-5 py-2.5 glass rounded-xl group cursor-default"
                style={{ opacity: "0", transform: "translateY(12px)" }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: "#10b981",
                    boxShadow: "0 0 6px #10b98180",
                  }}
                ></div>
                <span className="text-[13px] font-semibold text-zinc-300 group-hover:text-white transition-colors">
                  BSE
                </span>
              </div>
              <div
                className="flex items-center gap-2.5 px-5 py-2.5 glass rounded-xl group cursor-default"
                style={{ opacity: "0", transform: "translateY(12px)" }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: "#f59e0b",
                    boxShadow: "0 0 6px #f59e0b80",
                  }}
                ></div>
                <span className="text-[13px] font-semibold text-zinc-300 group-hover:text-white transition-colors">
                  MCX
                </span>
              </div>
              <div
                className="flex items-center gap-2.5 px-5 py-2.5 glass rounded-xl group cursor-default"
                style={{ opacity: "0", transform: "translateY(12px)" }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: "#8b5cf6",
                    boxShadow: "0 0 6px #8b5cf680",
                  }}
                ></div>
                <span className="text-[13px] font-semibold text-zinc-300 group-hover:text-white transition-colors">
                  FOREX
                </span>
              </div>
              <div
                className="flex items-center gap-2.5 px-5 py-2.5 glass rounded-xl group cursor-default"
                style={{ opacity: "0", transform: "translateY(12px)" }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: "#ef4444",
                    boxShadow: "0 0 6px #ef444480",
                  }}
                ></div>
                <span className="text-[13px] font-semibold text-zinc-300 group-hover:text-white transition-colors">
                  NYSE
                </span>
              </div>
              <div
                className="flex items-center gap-2.5 px-5 py-2.5 glass rounded-xl group cursor-default"
                style={{ opacity: "0", transform: "translateY(12px)" }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: "#06b6d4",
                    boxShadow: "0 0 6px #06b6d480",
                  }}
                ></div>
                <span className="text-[13px] font-semibold text-zinc-300 group-hover:text-white transition-colors">
                  NASDAQ
                </span>
              </div>
              <div
                className="flex items-center gap-2.5 px-5 py-2.5 glass rounded-xl group cursor-default"
                style={{ opacity: "0", transform: "translateY(12px)" }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: "#84cc16",
                    boxShadow: "0 0 6px #84cc1680",
                  }}
                ></div>
                <span className="text-[13px] font-semibold text-zinc-300 group-hover:text-white transition-colors">
                  CME
                </span>
              </div>
              <div
                className="flex items-center gap-2.5 px-5 py-2.5 glass rounded-xl group cursor-default"
                style={{ opacity: "0", transform: "translateY(12px)" }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: "#f97316",
                    boxShadow: "0 0 6px #f9731680",
                  }}
                ></div>
                <span className="text-[13px] font-semibold text-zinc-300 group-hover:text-white transition-colors">
                  CRYPTO
                </span>
              </div>
            </div>
            <div
              className="flex justify-center gap-12 mt-10 pt-10 border-t border-white/6"
              style={{ opacity: "0" }}
            >
              <div className="text-center hidden sm:block">
                <div className="text-[13px] font-semibold text-zinc-300">
                  Real-time Data
                </div>
                <div className="text-[11px] text-zinc-600 mt-0.5">
                  Sub-millisecond feeds
                </div>
              </div>
              <div className="text-center hidden sm:block">
                <div className="text-[13px] font-semibold text-zinc-300">
                  SEBI Compliant
                </div>
                <div className="text-[11px] text-zinc-600 mt-0.5">
                  Fully regulated
                </div>
              </div>
              <div className="text-center hidden sm:block">
                <div className="text-[13px] font-semibold text-zinc-300">
                  Bank-grade Security
                </div>
                <div className="text-[11px] text-zinc-600 mt-0.5">
                  256-bit encryption
                </div>
              </div>
              <div className="text-center hidden sm:block">
                <div className="text-[13px] font-semibold text-zinc-300">
                  Zero Downtime
                </div>
                <div className="text-[11px] text-zinc-600 mt-0.5">
                  99.99% SLA
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="py-24 relative">
          <div className="absolute inset-0 radial-fade-center opacity-50"></div>
          <div className="max-w-7xl mx-auto px-6">
            <div
              className="text-center mb-16"
              style={{ opacity: "0", transform: "translateY(20px)" }}
            >
              <p className="text-[12px] font-semibold text-blue-400 uppercase tracking-[0.2em] mb-4">
                Everything you need
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                The complete trading OS
              </h2>
              <p className="text-[17px] text-zinc-400 max-w-lg mx-auto">
                Every tool a serious trader needs, unified into one elegant
                platform.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div
                className="relative card-premium rounded-2xl p-6 group cursor-default overflow-hidden border border-blue-500/20"
                style={{ opacity: "0", transform: "translateY(24px)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: "#3b82f620",
                        border: "1px solid #3b82f630",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-gamepad2 w-5 h-5"
                        style={{ color: "#3b82f6" }}
                      >
                        <line x1="6" x2="10" y1="11" y2="11"></line>
                        <line x1="8" x2="8" y1="9" y2="13"></line>
                        <line x1="15" x2="15.01" y1="12" y2="12"></line>
                        <line x1="18" x2="18.01" y1="10" y2="10"></line>
                        <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path>
                      </svg>
                    </div>
                    <span
                      className="text-[10px] font-semibold px-2 py-1 rounded-full"
                      style={{
                        backgroundColor: "#3b82f615",
                        color: "#3b82f6",
                        border: "1px solid #3b82f625",
                      }}
                    >
                      Risk-free
                    </span>
                  </div>
                  <div className="text-[10px] font-semibold text-zinc-600 uppercase tracking-[0.15em] mb-1.5">
                    Demo Trading
                  </div>
                  <h3 className="text-[16px] font-semibold text-white leading-snug mb-2">
                    Practice risk-free with real market data.
                  </h3>
                  <p className="text-[13px] text-zinc-500 leading-relaxed mb-4">
                    Master strategies on live market data without risking
                    capital. Full order types, real-time P&amp;L, and market
                    depth.
                  </p>
                  <div
                    className="flex items-center gap-1.5 text-[12px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color: "#3b82f6" }}
                  >
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right w-3.5 h-3.5"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                className="relative card-premium rounded-2xl p-6 group cursor-default overflow-hidden border border-emerald-500/20"
                style={{ opacity: "0", transform: "translateY(24px)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/15 to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: "#10b98120",
                        border: "1px solid #10b98130",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-zap w-5 h-5"
                        style={{ color: "#10b981" }}
                      >
                        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                      </svg>
                    </div>
                    <span
                      className="text-[10px] font-semibold px-2 py-1 rounded-full"
                      style={{
                        backgroundColor: "#10b98115",
                        color: "#10b981",
                        border: "1px solid #10b98125",
                      }}
                    >
                      Live
                    </span>
                  </div>
                  <div className="text-[10px] font-semibold text-zinc-600 uppercase tracking-[0.15em] mb-1.5">
                    Real Trading
                  </div>
                  <h3 className="text-[16px] font-semibold text-white leading-snug mb-2">
                    Execute with institutional-grade precision.
                  </h3>
                  <p className="text-[13px] text-zinc-500 leading-relaxed mb-4">
                    One-click execution across NSE, BSE, MCX and global markets.
                    Sub-second order routing with smart order management.
                  </p>
                  <div
                    className="flex items-center gap-1.5 text-[12px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color: "#10b981" }}
                  >
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right w-3.5 h-3.5"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                className="relative card-premium rounded-2xl p-6 group cursor-default overflow-hidden border border-violet-500/20"
                style={{ opacity: "0", transform: "translateY(24px)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/15 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: "#8b5cf620",
                        border: "1px solid #8b5cf630",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-brain-circuit w-5 h-5"
                        style={{ color: "#8b5cf6" }}
                      >
                        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                        <path d="M9 13a4.5 4.5 0 0 0 3-4"></path>
                        <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                        <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                        <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                        <path d="M12 13h4"></path>
                        <path d="M12 18h6a2 2 0 0 1 2 2v1"></path>
                        <path d="M12 8h8"></path>
                        <path d="M16 8V5a2 2 0 0 1 2-2"></path>
                        <circle cx="16" cy="13" r=".5"></circle>
                        <circle cx="18" cy="3" r=".5"></circle>
                        <circle cx="20" cy="21" r=".5"></circle>
                        <circle cx="20" cy="8" r=".5"></circle>
                      </svg>
                    </div>
                    <span
                      className="text-[10px] font-semibold px-2 py-1 rounded-full"
                      style={{
                        backgroundColor: "#8b5cf615",
                        color: "#8b5cf6",
                        border: "1px solid #8b5cf625",
                      }}
                    >
                      Powered by AI
                    </span>
                  </div>
                  <div className="text-[10px] font-semibold text-zinc-600 uppercase tracking-[0.15em] mb-1.5">
                    AI Copilot
                  </div>
                  <h3 className="text-[16px] font-semibold text-white leading-snug mb-2">
                    Market intelligence that thinks with you.
                  </h3>
                  <p className="text-[13px] text-zinc-500 leading-relaxed mb-4">
                    Context-aware analysis, trade ideas, risk alerts, and
                    portfolio reviews powered by advanced market AI.
                  </p>
                  <div
                    className="flex items-center gap-1.5 text-[12px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color: "#8b5cf6" }}
                  >
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right w-3.5 h-3.5"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                className="relative card-premium rounded-2xl p-6 group cursor-default overflow-hidden border border-amber-500/20"
                style={{ opacity: "0", transform: "translateY(24px)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/15 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: "#f59e0b20",
                        border: "1px solid #f59e0b30",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chart-pie w-5 h-5"
                        style={{ color: "#f59e0b" }}
                      >
                        <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path>
                        <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                      </svg>
                    </div>
                    <span
                      className="text-[10px] font-semibold px-2 py-1 rounded-full"
                      style={{
                        backgroundColor: "#f59e0b15",
                        color: "#f59e0b",
                        border: "1px solid #f59e0b25",
                      }}
                    >
                      Analytics
                    </span>
                  </div>
                  <div className="text-[10px] font-semibold text-zinc-600 uppercase tracking-[0.15em] mb-1.5">
                    Portfolio Intelligence
                  </div>
                  <h3 className="text-[16px] font-semibold text-white leading-snug mb-2">
                    Track, analyze, and optimize performance.
                  </h3>
                  <p className="text-[13px] text-zinc-500 leading-relaxed mb-4">
                    Holistic portfolio analytics with health scores, sector
                    exposure, risk metrics, and benchmark comparison.
                  </p>
                  <div
                    className="flex items-center gap-1.5 text-[12px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color: "#f59e0b" }}
                  >
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right w-3.5 h-3.5"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                className="relative card-premium rounded-2xl p-6 group cursor-default overflow-hidden border border-cyan-500/20"
                style={{ opacity: "0", transform: "translateY(24px)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: "#06b6d420",
                        border: "1px solid #06b6d430",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-search w-5 h-5"
                        style={{ color: "#06b6d4" }}
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </svg>
                    </div>
                    <span
                      className="text-[10px] font-semibold px-2 py-1 rounded-full"
                      style={{
                        backgroundColor: "#06b6d415",
                        color: "#06b6d4",
                        border: "1px solid #06b6d425",
                      }}
                    >
                      Research
                    </span>
                  </div>
                  <div className="text-[10px] font-semibold text-zinc-600 uppercase tracking-[0.15em] mb-1.5">
                    Market Research
                  </div>
                  <h3 className="text-[16px] font-semibold text-white leading-snug mb-2">
                    Analyze deeper, faster than ever.
                  </h3>
                  <p className="text-[13px] text-zinc-500 leading-relaxed mb-4">
                    Fundamental screeners, technical analysis tools, earnings
                    calendars, and news intelligence — all unified.
                  </p>
                  <div
                    className="flex items-center gap-1.5 text-[12px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color: "#06b6d4" }}
                  >
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right w-3.5 h-3.5"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                className="relative card-premium rounded-2xl p-6 group cursor-default overflow-hidden border border-pink-500/20"
                style={{ opacity: "0", transform: "translateY(24px)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/15 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: "#ec489920",
                        border: "1px solid #ec489930",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-globe w-5 h-5"
                        style={{ color: "#ec4899" }}
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                    </div>
                    <span
                      className="text-[10px] font-semibold px-2 py-1 rounded-full"
                      style={{
                        backgroundColor: "#ec489915",
                        color: "#ec4899",
                        border: "1px solid #ec489925",
                      }}
                    >
                      Multi-market
                    </span>
                  </div>
                  <div className="text-[10px] font-semibold text-zinc-600 uppercase tracking-[0.15em] mb-1.5">
                    Global Markets
                  </div>
                  <h3 className="text-[16px] font-semibold text-white leading-snug mb-2">
                    One account. Every market on earth.
                  </h3>
                  <p className="text-[13px] text-zinc-500 leading-relaxed mb-4">
                    Trade NSE, BSE, NYSE, Nasdaq, Forex, Commodities, and
                    Indices from a single unified account and interface.
                  </p>
                  <div
                    className="flex items-center gap-1.5 text-[12px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color: "#ec4899" }}
                  >
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right w-3.5 h-3.5"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="terminal" className="py-24 relative">
          <div className="absolute inset-0 grid-bg opacity-50"></div>
          <div className="max-w-7xl mx-auto px-6">
            <div
              className="text-center mb-16"
              style={{ opacity: "0", transform: "translateY(20px)" }}
            >
              <p className="text-[12px] font-semibold text-blue-400 uppercase tracking-[0.2em] mb-4">
                Trading Terminal
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Bloomberg meets TradingView
              </h2>
              <p className="text-[17px] text-zinc-400 max-w-lg mx-auto">
                A professional-grade terminal built for speed, precision, and
                clarity.
              </p>
            </div>
            <div
              className="relative"
              style={{ opacity: "0", transform: "translateY(32px)" }}
            >
              <div className="card-premium rounded-3xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.8)] border border-white/8">
                <div className="flex items-center justify-between px-5 py-3 border-b border-white/6 bg-white/[0.02]">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-500/60"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500/60"></div>
                    </div>
                    <span className="text-[12px] font-semibold text-zinc-400 ml-3">
                      TradeBuddy X Terminal
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] text-zinc-600">
                    <span>NSE · 15 Jun 2026 · 14:23:47</span>
                    <span className="flex items-center gap-1 text-emerald-400">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                      Live
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 px-4 py-2 border-b border-white/6 bg-white/[0.01]">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-medium transition-colors bg-white/8 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chart-no-axes-column w-3.5 h-3.5"
                    >
                      <line x1="18" x2="18" y1="20" y2="10"></line>
                      <line x1="12" x2="12" y1="20" y2="4"></line>
                      <line x1="6" x2="6" y1="20" y2="14"></line>
                    </svg>
                    Chart
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-medium transition-colors text-zinc-500 hover:text-zinc-300 hover:bg-white/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-layers w-3.5 h-3.5"
                    >
                      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
                      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
                      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
                    </svg>
                    Watchlist
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-medium transition-colors text-zinc-500 hover:text-zinc-300 hover:bg-white/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-activity w-3.5 h-3.5"
                    >
                      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                    </svg>
                    Positions
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-medium transition-colors text-zinc-500 hover:text-zinc-300 hover:bg-white/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-book-open w-3.5 h-3.5"
                    >
                      <path d="M12 7v14"></path>
                      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                    </svg>
                    Orders
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-medium transition-colors text-zinc-500 hover:text-zinc-300 hover:bg-white/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-bell w-3.5 h-3.5"
                    >
                      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                    </svg>
                    Alerts
                  </button>
                </div>
                <div className="grid grid-cols-12 min-h-[420px]">
                  <div className="col-span-3 border-r border-white/6 p-4">
                    <div className="text-[10px] font-semibold text-zinc-600 uppercase tracking-widest mb-3">
                      Watchlist
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between px-2.5 py-2 rounded-lg cursor-pointer transition-colors bg-white/6">
                        <div>
                          <div className="text-[11px] font-semibold text-white">
                            NIFTY 50
                          </div>
                          <div className="text-[10px] text-zinc-500">
                            24,832
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-[11px] font-semibold text-emerald-400">
                            +1.42%
                          </div>
                          <div className="text-[10px] text-emerald-600">
                            +347
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between px-2.5 py-2 rounded-lg cursor-pointer transition-colors hover:bg-white/4">
                        <div>
                          <div className="text-[11px] font-semibold text-white">
                            TCS
                          </div>
                          <div className="text-[10px] text-zinc-500">4,182</div>
                        </div>
                        <div className="text-right">
                          <div className="text-[11px] font-semibold text-emerald-400">
                            +2.14%
                          </div>
                          <div className="text-[10px] text-emerald-600">
                            +88
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between px-2.5 py-2 rounded-lg cursor-pointer transition-colors hover:bg-white/4">
                        <div>
                          <div className="text-[11px] font-semibold text-white">
                            INFY
                          </div>
                          <div className="text-[10px] text-zinc-500">1,876</div>
                        </div>
                        <div className="text-right">
                          <div className="text-[11px] font-semibold text-emerald-400">
                            +0.91%
                          </div>
                          <div className="text-[10px] text-emerald-600">
                            +17
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between px-2.5 py-2 rounded-lg cursor-pointer transition-colors hover:bg-white/4">
                        <div>
                          <div className="text-[11px] font-semibold text-white">
                            HDFC BK
                          </div>
                          <div className="text-[10px] text-zinc-500">1,642</div>
                        </div>
                        <div className="text-right">
                          <div className="text-[11px] font-semibold text-red-400">
                            -0.52%
                          </div>
                          <div className="text-[10px] text-red-600">-8.6</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between px-2.5 py-2 rounded-lg cursor-pointer transition-colors hover:bg-white/4">
                        <div>
                          <div className="text-[11px] font-semibold text-white">
                            RELIANCE
                          </div>
                          <div className="text-[10px] text-zinc-500">2,945</div>
                        </div>
                        <div className="text-right">
                          <div className="text-[11px] font-semibold text-red-400">
                            -0.38%
                          </div>
                          <div className="text-[10px] text-red-600">-11.2</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between px-2.5 py-2 rounded-lg cursor-pointer transition-colors hover:bg-white/4">
                        <div>
                          <div className="text-[11px] font-semibold text-white">
                            WIPRO
                          </div>
                          <div className="text-[10px] text-zinc-500">562</div>
                        </div>
                        <div className="text-right">
                          <div className="text-[11px] font-semibold text-emerald-400">
                            +2.24%
                          </div>
                          <div className="text-[10px] text-emerald-600">
                            +12.3
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-6 border-r border-white/6 flex flex-col">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-white/6">
                      <div>
                        <span className="text-[14px] font-bold text-white">
                          NIFTY 50
                        </span>
                        <span className="ml-2 text-[13px] text-zinc-400">
                          NSE
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[16px] font-bold text-white">
                          24,832
                        </span>
                        <span className="flex items-center gap-1 text-[12px] font-semibold text-emerald-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-trending-up w-3.5 h-3.5"
                          >
                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                            <polyline points="16 7 22 7 22 13"></polyline>
                          </svg>
                          +1.42%
                        </span>
                      </div>
                      <div className="flex gap-1">
                        <button className="px-2 py-1 text-[10px] font-medium rounded bg-blue-500/20 text-blue-400">
                          1D
                        </button>
                        <button className="px-2 py-1 text-[10px] font-medium rounded text-zinc-600 hover:text-zinc-400">
                          1W
                        </button>
                        <button className="px-2 py-1 text-[10px] font-medium rounded text-zinc-600 hover:text-zinc-400">
                          1M
                        </button>
                        <button className="px-2 py-1 text-[10px] font-medium rounded text-zinc-600 hover:text-zinc-400">
                          3M
                        </button>
                        <button className="px-2 py-1 text-[10px] font-medium rounded text-zinc-600 hover:text-zinc-400">
                          1Y
                        </button>
                      </div>
                    </div>
                    <div className="flex-1 p-4">
                      <svg
                        viewBox="0 0 320 120"
                        className="w-full h-28"
                        preserveAspectRatio="none"
                      >
                        <line
                          x1="0"
                          y1="30"
                          x2="320"
                          y2="30"
                          stroke="rgba(255,255,255,0.04)"
                          strokeWidth="1"
                        ></line>
                        <line
                          x1="0"
                          y1="60"
                          x2="320"
                          y2="60"
                          stroke="rgba(255,255,255,0.04)"
                          strokeWidth="1"
                        ></line>
                        <line
                          x1="0"
                          y1="90"
                          x2="320"
                          y2="90"
                          stroke="rgba(255,255,255,0.04)"
                          strokeWidth="1"
                        ></line>
                        <polyline
                          points="10,80 30,72 50,65 70,60 90,55 110,50 130,48 150,45 170,42 190,38 210,35 230,32 250,30 270,28 290,25 310,22"
                          stroke="#3b82f6"
                          strokeWidth="1.5"
                          fill="none"
                          opacity="0.6"
                        ></polyline>
                        <g>
                          <line
                            x1="14"
                            y1="20"
                            x2="14"
                            y2="65"
                            stroke="#10b981"
                            strokeWidth="1"
                            opacity="0.7"
                          ></line>
                          <rect
                            x="10"
                            y="30"
                            width="8"
                            height="15"
                            fill="#10b981"
                            opacity="0.85"
                            rx="1"
                          ></rect>
                        </g>
                        <g>
                          <line
                            x1="33"
                            y1="18"
                            x2="33"
                            y2="60"
                            stroke="#10b981"
                            strokeWidth="1"
                            opacity="0.7"
                          ></line>
                          <rect
                            x="29"
                            y="35"
                            width="8"
                            height="7"
                            fill="#10b981"
                            opacity="0.85"
                            rx="1"
                          ></rect>
                        </g>
                        <g>
                          <line
                            x1="52"
                            y1="15"
                            x2="52"
                            y2="68"
                            stroke="#ef4444"
                            strokeWidth="1"
                            opacity="0.7"
                          ></line>
                          <rect
                            x="48"
                            y="22"
                            width="8"
                            height="26"
                            fill="#ef4444"
                            opacity="0.85"
                            rx="1"
                          ></rect>
                        </g>
                        <g>
                          <line
                            x1="71"
                            y1="22"
                            x2="71"
                            y2="55"
                            stroke="#10b981"
                            strokeWidth="1"
                            opacity="0.7"
                          ></line>
                          <rect
                            x="67"
                            y="28"
                            width="8"
                            height="7"
                            fill="#10b981"
                            opacity="0.85"
                            rx="1"
                          ></rect>
                        </g>
                        <g>
                          <line
                            x1="90"
                            y1="12"
                            x2="90"
                            y2="62"
                            stroke="#10b981"
                            strokeWidth="1"
                            opacity="0.7"
                          ></line>
                          <rect
                            x="86"
                            y="18"
                            width="8"
                            height="22"
                            fill="#10b981"
                            opacity="0.85"
                            rx="1"
                          ></rect>
                        </g>
                        <g>
                          <line
                            x1="109"
                            y1="20"
                            x2="109"
                            y2="50"
                            stroke="#10b981"
                            strokeWidth="1"
                            opacity="0.7"
                          ></line>
                          <rect
                            x="105"
                            y="30"
                            width="8"
                            height="3"
                            fill="#10b981"
                            opacity="0.85"
                            rx="1"
                          ></rect>
                        </g>
                        <g>
                          <line
                            x1="128"
                            y1="16"
                            x2="128"
                            y2="70"
                            stroke="#ef4444"
                            strokeWidth="1"
                            opacity="0.7"
                          ></line>
                          <rect
                            x="124"
                            y="25"
                            width="8"
                            height="20"
                            fill="#ef4444"
                            opacity="0.85"
                            rx="1"
                          ></rect>
                        </g>
                        <g>
                          <line
                            x1="147"
                            y1="14"
                            x2="147"
                            y2="58"
                            stroke="#10b981"
                            strokeWidth="1"
                            opacity="0.7"
                          ></line>
                          <rect
                            x="143"
                            y="20"
                            width="8"
                            height="18"
                            fill="#10b981"
                            opacity="0.85"
                            rx="1"
                          ></rect>
                        </g>
                        <g>
                          <line
                            x1="166"
                            y1="10"
                            x2="166"
                            y2="52"
                            stroke="#10b981"
                            strokeWidth="1"
                            opacity="0.7"
                          ></line>
                          <rect
                            x="162"
                            y="15"
                            width="8"
                            height="17"
                            fill="#10b981"
                            opacity="0.85"
                            rx="1"
                          ></rect>
                        </g>
                        <g>
                          <line
                            x1="185"
                            y1="18"
                            x2="185"
                            y2="48"
                            stroke="#ef4444"
                            strokeWidth="1"
                            opacity="0.7"
                          ></line>
                          <rect
                            x="181"
                            y="28"
                            width="8"
                            height="3"
                            fill="#ef4444"
                            opacity="0.85"
                            rx="1"
                          ></rect>
                        </g>
                        <g>
                          <line
                            x1="204"
                            y1="12"
                            x2="204"
                            y2="55"
                            stroke="#10b981"
                            strokeWidth="1"
                            opacity="0.7"
                          ></line>
                          <rect
                            x="200"
                            y="22"
                            width="8"
                            height="13"
                            fill="#10b981"
                            opacity="0.85"
                            rx="1"
                          ></rect>
                        </g>
                        <g>
                          <line
                            x1="223"
                            y1="8"
                            x2="223"
                            y2="60"
                            stroke="#10b981"
                            strokeWidth="1"
                            opacity="0.7"
                          ></line>
                          <rect
                            x="219"
                            y="18"
                            width="8"
                            height="22"
                            fill="#10b981"
                            opacity="0.85"
                            rx="1"
                          ></rect>
                        </g>
                        <g>
                          <line
                            x1="242"
                            y1="14"
                            x2="242"
                            y2="65"
                            stroke="#10b981"
                            strokeWidth="1"
                            opacity="0.7"
                          ></line>
                          <rect
                            x="238"
                            y="28"
                            width="8"
                            height="14"
                            fill="#10b981"
                            opacity="0.85"
                            rx="1"
                          ></rect>
                        </g>
                        <g>
                          <line
                            x1="261"
                            y1="16"
                            x2="261"
                            y2="58"
                            stroke="#ef4444"
                            strokeWidth="1"
                            opacity="0.7"
                          ></line>
                          <rect
                            x="257"
                            y="35"
                            width="8"
                            height="3"
                            fill="#ef4444"
                            opacity="0.85"
                            rx="1"
                          ></rect>
                        </g>
                        <g>
                          <line
                            x1="280"
                            y1="10"
                            x2="280"
                            y2="50"
                            stroke="#10b981"
                            strokeWidth="1"
                            opacity="0.7"
                          ></line>
                          <rect
                            x="276"
                            y="20"
                            width="8"
                            height="10"
                            fill="#10b981"
                            opacity="0.85"
                            rx="1"
                          ></rect>
                        </g>
                        <g>
                          <line
                            x1="299"
                            y1="8"
                            x2="299"
                            y2="45"
                            stroke="#10b981"
                            strokeWidth="1"
                            opacity="0.7"
                          ></line>
                          <rect
                            x="295"
                            y="12"
                            width="8"
                            height="13"
                            fill="#10b981"
                            opacity="0.85"
                            rx="1"
                          ></rect>
                        </g>
                      </svg>
                      <div className="flex items-end gap-1 h-8 mt-1 opacity-40">
                        <div
                          className="flex-1 rounded-sm"
                          style={{
                            height: "40%",
                            backgroundColor: "#ef4444",
                            opacity: "0.6",
                          }}
                        ></div>
                        <div
                          className="flex-1 rounded-sm"
                          style={{
                            height: "55%",
                            backgroundColor: "#10b981",
                            opacity: "0.6",
                          }}
                        ></div>
                        <div
                          className="flex-1 rounded-sm"
                          style={{
                            height: "35%",
                            backgroundColor: "#10b981",
                            opacity: "0.6",
                          }}
                        ></div>
                        <div
                          className="flex-1 rounded-sm"
                          style={{
                            height: "70%",
                            backgroundColor: "#ef4444",
                            opacity: "0.6",
                          }}
                        ></div>
                        <div
                          className="flex-1 rounded-sm"
                          style={{
                            height: "45%",
                            backgroundColor: "#10b981",
                            opacity: "0.6",
                          }}
                        ></div>
                        <div
                          className="flex-1 rounded-sm"
                          style={{
                            height: "80%",
                            backgroundColor: "#10b981",
                            opacity: "0.6",
                          }}
                        ></div>
                        <div
                          className="flex-1 rounded-sm"
                          style={{
                            height: "55%",
                            backgroundColor: "#ef4444",
                            opacity: "0.6",
                          }}
                        ></div>
                        <div
                          className="flex-1 rounded-sm"
                          style={{
                            height: "60%",
                            backgroundColor: "#10b981",
                            opacity: "0.6",
                          }}
                        ></div>
                        <div
                          className="flex-1 rounded-sm"
                          style={{
                            height: "35%",
                            backgroundColor: "#10b981",
                            opacity: "0.6",
                          }}
                        ></div>
                        <div
                          className="flex-1 rounded-sm"
                          style={{
                            height: "50%",
                            backgroundColor: "#ef4444",
                            opacity: "0.6",
                          }}
                        ></div>
                        <div
                          className="flex-1 rounded-sm"
                          style={{
                            height: "65%",
                            backgroundColor: "#10b981",
                            opacity: "0.6",
                          }}
                        ></div>
                        <div
                          className="flex-1 rounded-sm"
                          style={{
                            height: "45%",
                            backgroundColor: "#10b981",
                            opacity: "0.6",
                          }}
                        ></div>
                        <div
                          className="flex-1 rounded-sm"
                          style={{
                            height: "75%",
                            backgroundColor: "#ef4444",
                            opacity: "0.6",
                          }}
                        ></div>
                        <div
                          className="flex-1 rounded-sm"
                          style={{
                            height: "55%",
                            backgroundColor: "#10b981",
                            opacity: "0.6",
                          }}
                        ></div>
                        <div
                          className="flex-1 rounded-sm"
                          style={{
                            height: "40%",
                            backgroundColor: "#10b981",
                            opacity: "0.6",
                          }}
                        ></div>
                        <div
                          className="flex-1 rounded-sm"
                          style={{
                            height: "60%",
                            backgroundColor: "#ef4444",
                            opacity: "0.6",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="px-4 py-2 border-t border-white/6 flex gap-6">
                      <div>
                        <div className="text-[9px] text-zinc-600 uppercase">
                          Open
                        </div>
                        <div className="text-[11px] font-semibold text-zinc-300">
                          24,485
                        </div>
                      </div>
                      <div>
                        <div className="text-[9px] text-zinc-600 uppercase">
                          High
                        </div>
                        <div className="text-[11px] font-semibold text-zinc-300">
                          24,891
                        </div>
                      </div>
                      <div>
                        <div className="text-[9px] text-zinc-600 uppercase">
                          Low
                        </div>
                        <div className="text-[11px] font-semibold text-zinc-300">
                          24,412
                        </div>
                      </div>
                      <div>
                        <div className="text-[9px] text-zinc-600 uppercase">
                          Vol
                        </div>
                        <div className="text-[11px] font-semibold text-zinc-300">
                          1.24B
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-3 flex flex-col">
                    <div className="p-4 border-b border-white/6">
                      <div className="text-[10px] font-semibold text-zinc-600 uppercase tracking-widest mb-2">
                        Order Book
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="text-red-400">4185</span>
                          <div className="flex items-center gap-1.5 flex-1 mx-2">
                            <div
                              className="h-1 rounded-full"
                              style={{
                                width: "41.66666666666667%",
                                backgroundColor: "#ef444450",
                              }}
                            ></div>
                          </div>
                          <span className="text-zinc-500">250</span>
                        </div>
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="text-red-400">4184</span>
                          <div className="flex items-center gap-1.5 flex-1 mx-2">
                            <div
                              className="h-1 rounded-full"
                              style={{
                                width: "30%",
                                backgroundColor: "#ef444450",
                              }}
                            ></div>
                          </div>
                          <span className="text-zinc-500">180</span>
                        </div>
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="text-red-400">4183</span>
                          <div className="flex items-center gap-1.5 flex-1 mx-2">
                            <div
                              className="h-1 rounded-full"
                              style={{
                                width: "70%",
                                backgroundColor: "#ef444450",
                              }}
                            ></div>
                          </div>
                          <span className="text-zinc-500">420</span>
                        </div>
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="text-zinc-600">4182</span>
                          <span className="text-zinc-500">—</span>
                        </div>
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="text-emerald-400">4181</span>
                          <div className="flex items-center gap-1.5 flex-1 mx-2">
                            <div
                              className="h-1 rounded-full"
                              style={{
                                width: "53.333333333333336%",
                                backgroundColor: "#10b98150",
                              }}
                            ></div>
                          </div>
                          <span className="text-zinc-500">320</span>
                        </div>
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="text-emerald-400">4180</span>
                          <div className="flex items-center gap-1.5 flex-1 mx-2">
                            <div
                              className="h-1 rounded-full"
                              style={{
                                width: "85%",
                                backgroundColor: "#10b98150",
                              }}
                            ></div>
                          </div>
                          <span className="text-zinc-500">510</span>
                        </div>
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="text-emerald-400">4179</span>
                          <div className="flex items-center gap-1.5 flex-1 mx-2">
                            <div
                              className="h-1 rounded-full"
                              style={{
                                width: "46.666666666666664%",
                                backgroundColor: "#10b98150",
                              }}
                            ></div>
                          </div>
                          <span className="text-zinc-500">280</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 flex-1">
                      <div className="text-[10px] font-semibold text-zinc-600 uppercase tracking-widest mb-2">
                        Open Positions
                      </div>
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-[11px] font-semibold text-white">
                              TCS
                            </div>
                            <div className="text-[9px] text-zinc-600">
                              10 qty · Avg 4094
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-[11px] font-semibold text-emerald-400">
                              +880
                            </div>
                            <div className="text-[9px] text-emerald-600">
                              +2.15%
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-[11px] font-semibold text-white">
                              INFY
                            </div>
                            <div className="text-[9px] text-zinc-600">
                              25 qty · Avg 1858
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-[11px] font-semibold text-emerald-400">
                              +450
                            </div>
                            <div className="text-[9px] text-emerald-600">
                              +0.97%
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-[11px] font-semibold text-white">
                              HDFC BK
                            </div>
                            <div className="text-[9px] text-zinc-600">
                              15 qty · Avg 1650
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-[11px] font-semibold text-red-400">
                              -120
                            </div>
                            <div className="text-[9px] text-red-600">
                              -0.48%
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-3 border-t border-white/6">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-zinc-500">Total P&amp;L</span>
                          <span className="font-bold text-emerald-400">
                            +₹1,210
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-blue-600/15 blur-[40px]"></div>
            </div>
          </div>
        </section>
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div style={{ opacity: "0", transform: "translateX(-24px)" }}>
                <p className="text-[12px] font-semibold text-amber-400 uppercase tracking-[0.2em] mb-4">
                  Portfolio Intelligence
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                  Know your portfolio
                  <br />
                  <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                    inside and out.
                  </span>
                </h2>
                <p className="text-[17px] text-zinc-400 leading-relaxed mb-8">
                  Deep portfolio analytics with health scores, risk assessment,
                  sector exposure mapping, and benchmark comparison — all in one
                  view.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3.5 card-premium rounded-xl">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-shield w-4 h-4 text-amber-400"
                      >
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] text-zinc-600">
                        Risk Score
                      </div>
                      <div className="text-[14px] font-bold text-amber-400">
                        Moderate
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3.5 card-premium rounded-xl">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-target w-4 h-4 text-emerald-400"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <circle cx="12" cy="12" r="6"></circle>
                        <circle cx="12" cy="12" r="2"></circle>
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] text-zinc-600">
                        Health Score
                      </div>
                      <div className="text-[14px] font-bold text-emerald-400">
                        84/100
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3.5 card-premium rounded-xl">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-trending-up w-4 h-4 text-blue-400"
                      >
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                        <polyline points="16 7 22 7 22 13"></polyline>
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] text-zinc-600">Alpha</div>
                      <div className="text-[14px] font-bold text-blue-400">
                        +2.8%
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3.5 card-premium rounded-xl">
                    <div className="w-8 h-8 rounded-lg bg-zinc-500/10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-activity w-4 h-4 text-zinc-300"
                      >
                        <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] text-zinc-600">Beta</div>
                      <div className="text-[14px] font-bold text-zinc-300">
                        0.92
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="space-y-4"
                style={{ opacity: "0", transform: "translateX(24px)" }}
              >
                <div className="card-premium rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-[11px] text-zinc-500 mb-0.5">
                        Total Portfolio Value
                      </div>
                      <div className="text-[26px] font-bold text-white">
                        ₹4,82,910
                      </div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-trending-up w-3.5 h-3.5 text-emerald-400"
                        >
                          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                          <polyline points="16 7 22 7 22 13"></polyline>
                        </svg>
                        <span className="text-[12px] font-semibold text-emerald-400">
                          +₹18,320 (3.94%) today
                        </span>
                      </div>
                    </div>
                    <div className="relative">
                      <svg width="128" height="128" viewBox="0 0 128 128">
                        <circle
                          cx="64"
                          cy="64"
                          r="50"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="14"
                          stroke-dasharray="100.53096491487338 213.62830044410595"
                          stroke-dashoffset="314.1592653589793"
                          strokeLinecap="round"
                          transform="rotate(-90 64 64)"
                          style={{ transition: "all 0.5s ease" }}
                        ></circle>
                        <circle
                          cx="64"
                          cy="64"
                          r="50"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="14"
                          stroke-dasharray="75.39822368615503 238.7610416728243"
                          stroke-dashoffset="213.62830044410592"
                          strokeLinecap="round"
                          transform="rotate(-90 64 64)"
                          style={{ transition: "all 0.5s ease" }}
                        ></circle>
                        <circle
                          cx="64"
                          cy="64"
                          r="50"
                          fill="none"
                          stroke="#f59e0b"
                          strokeWidth="14"
                          stroke-dasharray="56.548667764616276 257.61059759436307"
                          stroke-dashoffset="138.23007675795088"
                          strokeLinecap="round"
                          transform="rotate(-90 64 64)"
                          style={{ transition: "all 0.5s ease" }}
                        ></circle>
                        <circle
                          cx="64"
                          cy="64"
                          r="50"
                          fill="none"
                          stroke="#8b5cf6"
                          strokeWidth="14"
                          stroke-dasharray="37.69911184307752 276.4601535159018"
                          stroke-dashoffset="81.68140899333463"
                          strokeLinecap="round"
                          transform="rotate(-90 64 64)"
                          style={{ transition: "all 0.5s ease" }}
                        ></circle>
                        <circle
                          cx="64"
                          cy="64"
                          r="50"
                          fill="none"
                          stroke="#ec4899"
                          strokeWidth="14"
                          stroke-dasharray="25.132741228718345 289.026524130261"
                          stroke-dashoffset="43.98229715025711"
                          strokeLinecap="round"
                          transform="rotate(-90 64 64)"
                          style={{ transition: "all 0.5s ease" }}
                        ></circle>
                        <circle
                          cx="64"
                          cy="64"
                          r="50"
                          fill="none"
                          stroke="#71717a"
                          strokeWidth="14"
                          stroke-dasharray="18.84955592153876 295.3097094374406"
                          stroke-dashoffset="18.849555921538776"
                          strokeLinecap="round"
                          transform="rotate(-90 64 64)"
                          style={{ transition: "all 0.5s ease" }}
                        ></circle>
                        <circle
                          cx="64"
                          cy="64"
                          r="38"
                          fill="rgba(0,0,0,0.6)"
                        ></circle>
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="text-[14px] font-bold text-white">
                          84
                        </div>
                        <div className="text-[9px] text-zinc-500">Score</div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center py-2 bg-white/4 rounded-lg">
                      <div className="text-[10px] text-zinc-600">Invested</div>
                      <div className="text-[12px] font-bold text-white">
                        ₹4,64,590
                      </div>
                    </div>
                    <div className="text-center py-2 bg-white/4 rounded-lg">
                      <div className="text-[10px] text-zinc-600">P&amp;L</div>
                      <div className="text-[12px] font-bold text-white">
                        +₹18,320
                      </div>
                    </div>
                    <div className="text-center py-2 bg-white/4 rounded-lg">
                      <div className="text-[10px] text-zinc-600">XIRR</div>
                      <div className="text-[12px] font-bold text-white">
                        24.8%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-premium rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chart-pie w-4 h-4 text-zinc-500"
                    >
                      <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path>
                      <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                    </svg>
                    <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-widest">
                      Sector Exposure
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-20 text-[11px] text-zinc-400 shrink-0">
                        Technology
                      </div>
                      <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{ backgroundColor: "#3b82f6", width: "0px" }}
                        ></div>
                      </div>
                      <div className="text-[11px] font-medium text-zinc-400 w-8 text-right shrink-0">
                        32%
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-20 text-[11px] text-zinc-400 shrink-0">
                        Banking
                      </div>
                      <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{ backgroundColor: "#10b981", width: "0px" }}
                        ></div>
                      </div>
                      <div className="text-[11px] font-medium text-zinc-400 w-8 text-right shrink-0">
                        24%
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-20 text-[11px] text-zinc-400 shrink-0">
                        Energy
                      </div>
                      <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{ backgroundColor: "#f59e0b", width: "0px" }}
                        ></div>
                      </div>
                      <div className="text-[11px] font-medium text-zinc-400 w-8 text-right shrink-0">
                        18%
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-20 text-[11px] text-zinc-400 shrink-0">
                        Pharma
                      </div>
                      <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{ backgroundColor: "#8b5cf6", width: "0px" }}
                        ></div>
                      </div>
                      <div className="text-[11px] font-medium text-zinc-400 w-8 text-right shrink-0">
                        12%
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-20 text-[11px] text-zinc-400 shrink-0">
                        FMCG
                      </div>
                      <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{ backgroundColor: "#ec4899", width: "0px" }}
                        ></div>
                      </div>
                      <div className="text-[11px] font-medium text-zinc-400 w-8 text-right shrink-0">
                        8%
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-20 text-[11px] text-zinc-400 shrink-0">
                        Others
                      </div>
                      <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{ backgroundColor: "#71717a", width: "0px" }}
                        ></div>
                      </div>
                      <div className="text-[11px] font-medium text-zinc-400 w-8 text-right shrink-0">
                        6%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-premium rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chart-no-axes-column w-4 h-4 text-zinc-500"
                    >
                      <line x1="18" x2="18" y1="20" y2="10"></line>
                      <line x1="12" x2="12" y1="20" y2="4"></line>
                      <line x1="6" x2="6" y1="20" y2="14"></line>
                    </svg>
                    <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-widest">
                      vs Benchmark (NIFTY)
                    </span>
                  </div>
                  <div className="flex items-end gap-2 h-16">
                    <div className="flex-1 flex flex-col items-center gap-1">
                      <div className="flex items-end gap-0.5 h-12 w-full">
                        <div
                          className="flex-1 rounded-t-sm"
                          style={{
                            height: "25.6px",
                            backgroundColor: "#10b981",
                            opacity: "0.9",
                          }}
                        ></div>
                        <div
                          className="flex-1 rounded-t-sm"
                          style={{
                            height: "16.8px",
                            backgroundColor: "#3b82f6",
                            opacity: "0.5",
                          }}
                        ></div>
                      </div>
                      <div className="text-[9px] text-zinc-600">Jan</div>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-1">
                      <div className="flex items-end gap-0.5 h-12 w-full">
                        <div
                          className="flex-1 rounded-t-sm"
                          style={{
                            height: "11.2px",
                            backgroundColor: "#ef4444",
                            opacity: "0.9",
                          }}
                        ></div>
                        <div
                          className="flex-1 rounded-t-sm"
                          style={{
                            height: "6.4px",
                            backgroundColor: "#3b82f6",
                            opacity: "0.5",
                          }}
                        ></div>
                      </div>
                      <div className="text-[9px] text-zinc-600">Feb</div>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-1">
                      <div className="flex items-end gap-0.5 h-12 w-full">
                        <div
                          className="flex-1 rounded-t-sm"
                          style={{
                            height: "38.4px",
                            backgroundColor: "#10b981",
                            opacity: "0.9",
                          }}
                        ></div>
                        <div
                          className="flex-1 rounded-t-sm"
                          style={{
                            height: "25.6px",
                            backgroundColor: "#3b82f6",
                            opacity: "0.5",
                          }}
                        ></div>
                      </div>
                      <div className="text-[9px] text-zinc-600">Mar</div>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-1">
                      <div className="flex items-end gap-0.5 h-12 w-full">
                        <div
                          className="flex-1 rounded-t-sm"
                          style={{
                            height: "16.8px",
                            backgroundColor: "#10b981",
                            opacity: "0.9",
                          }}
                        ></div>
                        <div
                          className="flex-1 rounded-t-sm"
                          style={{
                            height: "12px",
                            backgroundColor: "#3b82f6",
                            opacity: "0.5",
                          }}
                        ></div>
                      </div>
                      <div className="text-[9px] text-zinc-600">Apr</div>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-1">
                      <div className="flex items-end gap-0.5 h-12 w-full">
                        <div
                          className="flex-1 rounded-t-sm"
                          style={{
                            height: "50.4px",
                            backgroundColor: "#10b981",
                            opacity: "0.9",
                          }}
                        ></div>
                        <div
                          className="flex-1 rounded-t-sm"
                          style={{
                            height: "32.8px",
                            backgroundColor: "#3b82f6",
                            opacity: "0.5",
                          }}
                        ></div>
                      </div>
                      <div className="text-[9px] text-zinc-600">May</div>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-1">
                      <div className="flex items-end gap-0.5 h-12 w-full">
                        <div
                          className="flex-1 rounded-t-sm"
                          style={{
                            height: "29.6px",
                            backgroundColor: "#10b981",
                            opacity: "0.9",
                          }}
                        ></div>
                        <div
                          className="flex-1 rounded-t-sm"
                          style={{
                            height: "23.2px",
                            backgroundColor: "#3b82f6",
                            opacity: "0.5",
                          }}
                        ></div>
                      </div>
                      <div className="text-[9px] text-zinc-600">Jun</div>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      <span className="text-[10px] text-zinc-500">
                        Portfolio
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-blue-500 opacity-50"></div>
                      <span className="text-[10px] text-zinc-500">
                        NIFTY 50
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="ai-copilot" className="py-24 relative">
          <div className="absolute inset-0 grid-bg opacity-30"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[120px]"></div>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div
                className="relative"
                style={{ opacity: "0", transform: "translateX(-24px)" }}
              >
                <div className="card-premium rounded-3xl overflow-hidden shadow-premium">
                  <div className="flex items-center gap-3 px-5 py-4 border-b border-white/6">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-zap w-4 h-4 text-white"
                      >
                        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-white">
                        AI Copilot
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                        <span className="text-[10px] text-emerald-400">
                          Active · Analyzing markets
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 space-y-4 h-[360px] overflow-y-auto">
                    <div style={{ opacity: "0", transform: "translateY(8px)" }}>
                      <div className="flex justify-end">
                        <div className="max-w-[80%] px-3.5 py-2.5 bg-blue-600/30 border border-blue-500/30 rounded-2xl rounded-tr-sm">
                          <p className="text-[12px] text-zinc-200">
                            What&#x27;s your take on NIFTY Bank today?
                          </p>
                        </div>
                      </div>
                    </div>
                    <div style={{ opacity: "0", transform: "translateY(8px)" }}>
                      <div className="flex items-start gap-2.5">
                        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-zap w-3 h-3 text-white"
                          >
                            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                          </svg>
                        </div>
                        <div className="flex-1 space-y-2">
                          <span
                            className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full"
                            style={{
                              backgroundColor: "#3b82f620",
                              color: "#3b82f6",
                            }}
                          >
                            Market Analysis
                          </span>
                          <div className="px-3.5 py-2.5 glass rounded-2xl rounded-tl-sm">
                            <p className="text-[12px] text-zinc-300 leading-relaxed">
                              NIFTY Bank is showing strong bullish momentum
                              after RBI held rates steady. Key private banks —
                              HDFC Bank, ICICI Bank — are leading the move. RSI
                              at 68 suggests the trend is intact but approaching
                              overbought territory. Watch the 52,400 resistance
                              level for a breakout confirmation.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{ opacity: "0", transform: "translateY(8px)" }}>
                      <div className="flex justify-end">
                        <div className="max-w-[80%] px-3.5 py-2.5 bg-blue-600/30 border border-blue-500/30 rounded-2xl rounded-tr-sm">
                          <p className="text-[12px] text-zinc-200">
                            Any trade ideas for the next session?
                          </p>
                        </div>
                      </div>
                    </div>
                    <div style={{ opacity: "0", transform: "translateY(8px)" }}>
                      <div className="flex items-start gap-2.5">
                        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-zap w-3 h-3 text-white"
                          >
                            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                          </svg>
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="space-y-2">
                            <div className="px-3.5 py-3 card-premium rounded-xl border border-blue-500/15">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <span className="text-[12px] font-bold text-white">
                                    HDFC BANK
                                  </span>
                                  <span className="text-[10px] font-semibold px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 rounded-full">
                                    Long
                                  </span>
                                </div>
                                <span className="text-[10px] font-medium text-zinc-400">
                                  78% conf.
                                </span>
                              </div>
                              <div className="flex gap-4">
                                <div>
                                  <div className="text-[9px] text-zinc-600 uppercase">
                                    Entry
                                  </div>
                                  <div className="text-[11px] font-semibold text-zinc-300">
                                    ₹1,640
                                  </div>
                                </div>
                                <div>
                                  <div className="text-[9px] text-zinc-600 uppercase">
                                    Target
                                  </div>
                                  <div className="text-[11px] font-semibold text-emerald-400">
                                    ₹1,720
                                  </div>
                                </div>
                                <div>
                                  <div className="text-[9px] text-zinc-600 uppercase">
                                    SL
                                  </div>
                                  <div className="text-[11px] font-semibold text-red-400">
                                    ₹1,605
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="px-3.5 py-3 card-premium rounded-xl border border-blue-500/15">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <span className="text-[12px] font-bold text-white">
                                    ICICI BANK
                                  </span>
                                  <span className="text-[10px] font-semibold px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 rounded-full">
                                    Long
                                  </span>
                                </div>
                                <span className="text-[10px] font-medium text-zinc-400">
                                  71% conf.
                                </span>
                              </div>
                              <div className="flex gap-4">
                                <div>
                                  <div className="text-[9px] text-zinc-600 uppercase">
                                    Entry
                                  </div>
                                  <div className="text-[11px] font-semibold text-zinc-300">
                                    ₹1,085
                                  </div>
                                </div>
                                <div>
                                  <div className="text-[9px] text-zinc-600 uppercase">
                                    Target
                                  </div>
                                  <div className="text-[11px] font-semibold text-emerald-400">
                                    ₹1,140
                                  </div>
                                </div>
                                <div>
                                  <div className="text-[9px] text-zinc-600 uppercase">
                                    SL
                                  </div>
                                  <div className="text-[11px] font-semibold text-red-400">
                                    ₹1,058
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 pb-4">
                    <div className="flex items-center gap-2 px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-xl">
                      <input
                        type="text"
                        placeholder="Ask about any stock, market, or strategy..."
                        className="flex-1 bg-transparent text-[12px] text-zinc-300 placeholder:text-zinc-600 outline-none"
                        readOnly=""
                      />
                      <button className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-send w-3.5 h-3.5 text-white"
                        >
                          <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                          <path d="m21.854 2.147-10.94 10.939"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-8 left-1/4 w-1/2 h-12 bg-violet-600/20 blur-[40px]"></div>
              </div>
              <div style={{ opacity: "0", transform: "translateX(24px)" }}>
                <p className="text-[12px] font-semibold text-violet-400 uppercase tracking-[0.2em] mb-4">
                  AI Copilot
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                  Your intelligence
                  <br />
                  <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                    edge, always on.
                  </span>
                </h2>
                <p className="text-[17px] text-zinc-400 leading-relaxed mb-8">
                  Trained on decades of market data, TradeBuddy X&#x27;s AI
                  Copilot delivers real-time analysis, personalized trade ideas,
                  and risk alerts tailored to your portfolio.
                </p>
                <div className="space-y-3 mb-8">
                  <div
                    className="flex items-center gap-3 px-4 py-3 card-premium rounded-xl hover:bg-white/4 transition-colors"
                    style={{ opacity: "0", transform: "translateX(16px)" }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "#3b82f615" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-newspaper w-4 h-4"
                        style={{ color: "#3b82f6" }}
                      >
                        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
                        <path d="M18 14h-8"></path>
                        <path d="M15 18h-5"></path>
                        <path d="M10 6h8v4h-8V6Z"></path>
                      </svg>
                    </div>
                    <span className="text-[14px] font-medium text-zinc-300">
                      News Summaries
                    </span>
                    <div
                      className="ml-auto w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "#3b82f6", opacity: "0.6" }}
                    ></div>
                  </div>
                  <div
                    className="flex items-center gap-3 px-4 py-3 card-premium rounded-xl hover:bg-white/4 transition-colors"
                    style={{ opacity: "0", transform: "translateX(16px)" }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "#10b98115" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chart-no-axes-column w-4 h-4"
                        style={{ color: "#10b981" }}
                      >
                        <line x1="18" x2="18" y1="20" y2="10"></line>
                        <line x1="12" x2="12" y1="20" y2="4"></line>
                        <line x1="6" x2="6" y1="20" y2="14"></line>
                      </svg>
                    </div>
                    <span className="text-[14px] font-medium text-zinc-300">
                      Market Analysis
                    </span>
                    <div
                      className="ml-auto w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "#10b981", opacity: "0.6" }}
                    ></div>
                  </div>
                  <div
                    className="flex items-center gap-3 px-4 py-3 card-premium rounded-xl hover:bg-white/4 transition-colors"
                    style={{ opacity: "0", transform: "translateX(16px)" }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "#f59e0b15" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-trending-up w-4 h-4"
                        style={{ color: "#f59e0b" }}
                      >
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                        <polyline points="16 7 22 7 22 13"></polyline>
                      </svg>
                    </div>
                    <span className="text-[14px] font-medium text-zinc-300">
                      Portfolio Reviews
                    </span>
                    <div
                      className="ml-auto w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "#f59e0b", opacity: "0.6" }}
                    ></div>
                  </div>
                  <div
                    className="flex items-center gap-3 px-4 py-3 card-premium rounded-xl hover:bg-white/4 transition-colors"
                    style={{ opacity: "0", transform: "translateX(16px)" }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "#ef444415" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-triangle-alert w-4 h-4"
                        style={{ color: "#ef4444" }}
                      >
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                        <path d="M12 9v4"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                    </div>
                    <span className="text-[14px] font-medium text-zinc-300">
                      Risk Alerts
                    </span>
                    <div
                      className="ml-auto w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "#ef4444", opacity: "0.6" }}
                    ></div>
                  </div>
                  <div
                    className="flex items-center gap-3 px-4 py-3 card-premium rounded-xl hover:bg-white/4 transition-colors"
                    style={{ opacity: "0", transform: "translateX(16px)" }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "#8b5cf615" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-lightbulb w-4 h-4"
                        style={{ color: "#8b5cf6" }}
                      >
                        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                        <path d="M9 18h6"></path>
                        <path d="M10 22h4"></path>
                      </svg>
                    </div>
                    <span className="text-[14px] font-medium text-zinc-300">
                      Trade Ideas
                    </span>
                    <div
                      className="ml-auto w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "#8b5cf6", opacity: "0.6" }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center gap-4 px-4 py-3.5 border border-blue-500/20 bg-blue-500/8 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-zap w-5 h-5 text-blue-400 shrink-0"
                  >
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                  </svg>
                  <p className="text-[13px] text-zinc-300">
                    <span className="font-semibold text-white">
                      Powered by advanced LLMs
                    </span>{" "}
                    fine-tuned on Indian and global market data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="markets" className="py-24 relative">
          <div className="absolute inset-0 grid-bg opacity-30"></div>
          <div className="max-w-7xl mx-auto px-6">
            <div
              className="text-center mb-16"
              style={{ opacity: "0", transform: "translateY(20px)" }}
            >
              <p className="text-[12px] font-semibold text-blue-400 uppercase tracking-[0.2em] mb-4">
                Market Coverage
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                One account.
                <br />
                <span className="text-zinc-400">Every market.</span>
              </h2>
              <p className="text-[17px] text-zinc-400 max-w-md mx-auto">
                Trade Indian and global markets seamlessly from a single,
                unified platform.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              <div
                className="card-premium rounded-3xl p-6"
                style={{ opacity: "0", transform: "translateY(24px)" }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/15 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-map-pin w-[18px] h-[18px] text-amber-400"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[15px] font-bold text-white">
                      Indian Markets
                    </div>
                    <div className="text-[11px] text-zinc-500">
                      NSE, BSE &amp; More
                    </div>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/15 rounded-full">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                    <span className="text-[10px] font-medium text-emerald-400">
                      Market Open
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div
                    className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/4 transition-colors cursor-default border border-transparent hover:border-white/6"
                    style={{ opacity: "0", transform: "translateY(12px)" }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400/60"></div>
                      <div>
                        <div className="text-[13px] font-semibold text-white">
                          NSE
                        </div>
                        <div className="text-[11px] text-zinc-500">
                          Equities, F&amp;O, Indices
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-medium px-2 py-0.5 bg-white/6 text-zinc-400 rounded-full">
                      Primary
                    </span>
                  </div>
                  <div
                    className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/4 transition-colors cursor-default border border-transparent hover:border-white/6"
                    style={{ opacity: "0", transform: "translateY(12px)" }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400/60"></div>
                      <div>
                        <div className="text-[13px] font-semibold text-white">
                          BSE
                        </div>
                        <div className="text-[11px] text-zinc-500">
                          Equities, Bonds, ETFs
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-medium px-2 py-0.5 bg-white/6 text-zinc-400 rounded-full">
                      Primary
                    </span>
                  </div>
                  <div
                    className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/4 transition-colors cursor-default border border-transparent hover:border-white/6"
                    style={{ opacity: "0", transform: "translateY(12px)" }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400/60"></div>
                      <div>
                        <div className="text-[13px] font-semibold text-white">
                          MCX
                        </div>
                        <div className="text-[11px] text-zinc-500">
                          Gold, Silver, Crude, Base Metals
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-medium px-2 py-0.5 bg-white/6 text-zinc-400 rounded-full">
                      Commodities
                    </span>
                  </div>
                  <div
                    className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/4 transition-colors cursor-default border border-transparent hover:border-white/6"
                    style={{ opacity: "0", transform: "translateY(12px)" }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400/60"></div>
                      <div>
                        <div className="text-[13px] font-semibold text-white">
                          NCDEX
                        </div>
                        <div className="text-[11px] text-zinc-500">
                          Agricultural Commodities
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-medium px-2 py-0.5 bg-white/6 text-zinc-400 rounded-full">
                      Agri
                    </span>
                  </div>
                  <div
                    className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/4 transition-colors cursor-default border border-transparent hover:border-white/6"
                    style={{ opacity: "0", transform: "translateY(12px)" }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400/60"></div>
                      <div>
                        <div className="text-[13px] font-semibold text-white">
                          NSE FX
                        </div>
                        <div className="text-[11px] text-zinc-500">
                          Currency Derivatives
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-medium px-2 py-0.5 bg-white/6 text-zinc-400 rounded-full">
                      Forex
                    </span>
                  </div>
                  <div
                    className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/4 transition-colors cursor-default border border-transparent hover:border-white/6"
                    style={{ opacity: "0", transform: "translateY(12px)" }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400/60"></div>
                      <div>
                        <div className="text-[13px] font-semibold text-white">
                          BSE SME
                        </div>
                        <div className="text-[11px] text-zinc-500">
                          Small &amp; Medium Enterprises
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-medium px-2 py-0.5 bg-white/6 text-zinc-400 rounded-full">
                      SME
                    </span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/6 grid grid-cols-3 gap-3">
                  <div className="text-center">
                    <div className="text-[13px] font-bold text-white">
                      5,000+
                    </div>
                    <div className="text-[10px] text-zinc-600">Instruments</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[13px] font-bold text-white">
                      Real-time
                    </div>
                    <div className="text-[10px] text-zinc-600">Delay</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[13px] font-bold text-white">4</div>
                    <div className="text-[10px] text-zinc-600">Exchanges</div>
                  </div>
                </div>
              </div>
              <div
                className="card-premium rounded-3xl p-6"
                style={{ opacity: "0", transform: "translateY(24px)" }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/15 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-globe w-[18px] h-[18px] text-blue-400"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                      <path d="M2 12h20"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[15px] font-bold text-white">
                      Global Markets
                    </div>
                    <div className="text-[11px] text-zinc-500">
                      US, Forex, Commodities &amp; More
                    </div>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5 px-2.5 py-1 bg-blue-500/15 rounded-full">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    <span className="text-[10px] font-medium text-blue-400">
                      24/5 Trading
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div
                    className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/4 transition-colors cursor-default border border-transparent hover:border-white/6"
                    style={{ opacity: "0", transform: "translateY(12px)" }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400/60"></div>
                      <div>
                        <div className="text-[13px] font-semibold text-white">
                          NYSE
                        </div>
                        <div className="text-[11px] text-zinc-500">
                          US Equities &amp; ETFs
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-medium px-2 py-0.5 bg-white/6 text-zinc-400 rounded-full">
                      US
                    </span>
                  </div>
                  <div
                    className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/4 transition-colors cursor-default border border-transparent hover:border-white/6"
                    style={{ opacity: "0", transform: "translateY(12px)" }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400/60"></div>
                      <div>
                        <div className="text-[13px] font-semibold text-white">
                          NASDAQ
                        </div>
                        <div className="text-[11px] text-zinc-500">
                          Tech &amp; Growth Stocks
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-medium px-2 py-0.5 bg-white/6 text-zinc-400 rounded-full">
                      US
                    </span>
                  </div>
                  <div
                    className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/4 transition-colors cursor-default border border-transparent hover:border-white/6"
                    style={{ opacity: "0", transform: "translateY(12px)" }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400/60"></div>
                      <div>
                        <div className="text-[13px] font-semibold text-white">
                          Forex
                        </div>
                        <div className="text-[11px] text-zinc-500">
                          70+ Currency Pairs
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-medium px-2 py-0.5 bg-white/6 text-zinc-400 rounded-full">
                      Global
                    </span>
                  </div>
                  <div
                    className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/4 transition-colors cursor-default border border-transparent hover:border-white/6"
                    style={{ opacity: "0", transform: "translateY(12px)" }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400/60"></div>
                      <div>
                        <div className="text-[13px] font-semibold text-white">
                          Commodities
                        </div>
                        <div className="text-[11px] text-zinc-500">
                          Oil, Gold, Agriculture
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-medium px-2 py-0.5 bg-white/6 text-zinc-400 rounded-full">
                      Global
                    </span>
                  </div>
                  <div
                    className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/4 transition-colors cursor-default border border-transparent hover:border-white/6"
                    style={{ opacity: "0", transform: "translateY(12px)" }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400/60"></div>
                      <div>
                        <div className="text-[13px] font-semibold text-white">
                          US Indices
                        </div>
                        <div className="text-[11px] text-zinc-500">
                          S&amp;P 500, DOW, Russell
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-medium px-2 py-0.5 bg-white/6 text-zinc-400 rounded-full">
                      Indices
                    </span>
                  </div>
                  <div
                    className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/4 transition-colors cursor-default border border-transparent hover:border-white/6"
                    style={{ opacity: "0", transform: "translateY(12px)" }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400/60"></div>
                      <div>
                        <div className="text-[13px] font-semibold text-white">
                          Crypto
                        </div>
                        <div className="text-[11px] text-zinc-500">
                          Digital Asset CFDs
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-medium px-2 py-0.5 bg-white/6 text-zinc-400 rounded-full">
                      Crypto
                    </span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/6 grid grid-cols-3 gap-3">
                  <div className="text-center">
                    <div className="text-[13px] font-bold text-white">
                      1,000+
                    </div>
                    <div className="text-[10px] text-zinc-600">Instruments</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[13px] font-bold text-white">70+</div>
                    <div className="text-[10px] text-zinc-600">
                      Currency Pairs
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-[13px] font-bold text-white">20+</div>
                    <div className="text-[10px] text-zinc-600">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 relative border-y border-white/6">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent"></div>
          <div className="max-w-7xl mx-auto px-6">
            <div
              className="text-center mb-16"
              style={{ opacity: "0", transform: "translateY(20px)" }}
            >
              <p className="text-[12px] font-semibold text-blue-400 uppercase tracking-[0.2em] mb-4">
                By the numbers
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Built for scale,
                <br />
                <span className="text-zinc-400">trusted by thousands.</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div
                className="relative card-premium rounded-2xl p-6 overflow-hidden group"
                style={{ opacity: "0", transform: "translateY(24px)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: "#3b82f615",
                      border: "1px solid #3b82f625",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-users w-5 h-5"
                      style={{ color: "#3b82f6" }}
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div
                    className="text-[36px] font-bold mb-1 leading-none"
                    style={{ color: "#3b82f6" }}
                  >
                    500K+
                  </div>
                  <div className="text-[14px] font-semibold text-white mb-1">
                    Active Traders
                  </div>
                  <div className="text-[12px] text-zinc-500">
                    Across India and global markets
                  </div>
                </div>
              </div>
              <div
                className="relative card-premium rounded-2xl p-6 overflow-hidden group"
                style={{ opacity: "0", transform: "translateY(24px)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: "#10b98115",
                      border: "1px solid #10b98125",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-database w-5 h-5"
                      style={{ color: "#10b981" }}
                    >
                      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                      <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                      <path d="M3 12A9 3 0 0 0 21 12"></path>
                    </svg>
                  </div>
                  <div
                    className="text-[36px] font-bold mb-1 leading-none"
                    style={{ color: "#10b981" }}
                  >
                    20M+
                  </div>
                  <div className="text-[14px] font-semibold text-white mb-1">
                    Market Data Points
                  </div>
                  <div className="text-[12px] text-zinc-500">
                    Processed every second
                  </div>
                </div>
              </div>
              <div
                className="relative card-premium rounded-2xl p-6 overflow-hidden group"
                style={{ opacity: "0", transform: "translateY(24px)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: "#f59e0b15",
                      border: "1px solid #f59e0b25",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-shield w-5 h-5"
                      style={{ color: "#f59e0b" }}
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    </svg>
                  </div>
                  <div
                    className="text-[36px] font-bold mb-1 leading-none"
                    style={{ color: "#f59e0b" }}
                  >
                    99.99%
                  </div>
                  <div className="text-[14px] font-semibold text-white mb-1">
                    Reliability
                  </div>
                  <div className="text-[12px] text-zinc-500">
                    Uptime SLA guaranteed
                  </div>
                </div>
              </div>
              <div
                className="relative card-premium rounded-2xl p-6 overflow-hidden group"
                style={{ opacity: "0", transform: "translateY(24px)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: "#8b5cf615",
                      border: "1px solid #8b5cf625",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-clock w-5 h-5"
                      style={{ color: "#8b5cf6" }}
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div
                    className="text-[36px] font-bold mb-1 leading-none"
                    style={{ color: "#8b5cf6" }}
                  >
                    24/7
                  </div>
                  <div className="text-[14px] font-semibold text-white mb-1">
                    AI Monitoring
                  </div>
                  <div className="text-[12px] text-zinc-500">
                    Always watching your portfolio
                  </div>
                </div>
              </div>
            </div>
            <div
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/6"
              style={{ opacity: "0", transform: "translateY(16px)" }}
            >
              <div className="text-center">
                <div className="text-[22px] font-bold text-white">&lt;50ms</div>
                <div className="text-[13px] font-medium text-zinc-400 mt-0.5">
                  Order Execution
                </div>
                <div className="text-[11px] text-zinc-600">Average latency</div>
              </div>
              <div className="text-center">
                <div className="text-[22px] font-bold text-white">99.9%</div>
                <div className="text-[13px] font-medium text-zinc-400 mt-0.5">
                  Data Accuracy
                </div>
                <div className="text-[11px] text-zinc-600">
                  Live feed precision
                </div>
              </div>
              <div className="text-center">
                <div className="text-[22px] font-bold text-white">&lt;2min</div>
                <div className="text-[13px] font-medium text-zinc-400 mt-0.5">
                  Support Response
                </div>
                <div className="text-[11px] text-zinc-600">
                  Average resolution
                </div>
              </div>
              <div className="text-center">
                <div className="text-[22px] font-bold text-white">₹500Cr+</div>
                <div className="text-[13px] font-medium text-zinc-400 mt-0.5">
                  Assets Secured
                </div>
                <div className="text-[11px] text-zinc-600">
                  Under management
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="py-24 relative">
          <div className="absolute inset-0 radial-fade-center opacity-40"></div>
          <div className="max-w-7xl mx-auto px-6">
            <div
              className="text-center mb-16"
              style={{ opacity: "0", transform: "translateY(20px)" }}
            >
              <p className="text-[12px] font-semibold text-blue-400 uppercase tracking-[0.2em] mb-4">
                Pricing
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Simple, transparent pricing
              </h2>
              <p className="text-[17px] text-zinc-400 max-w-md mx-auto">
                Start free. Upgrade when you&#x27;re ready to trade at the
                highest level.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5 items-stretch">
              <div
                className="relative rounded-3xl p-7 flex flex-col card-premium border border-white/8"
                style={{ opacity: "0", transform: "translateY(24px)" }}
              >
                <div className="mb-6">
                  <div className="text-[12px] font-semibold text-zinc-500 uppercase tracking-widest mb-2">
                    Starter
                  </div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-[40px] font-bold text-white leading-none">
                      ₹0
                    </span>
                    <span className="text-[14px] text-zinc-500">forever</span>
                  </div>
                  <p className="text-[13px] text-zinc-500">
                    Perfect for beginners learning to trade.
                  </p>
                </div>
                <div className="flex-1 space-y-3 mb-8">
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-white/8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check w-2.5 h-2.5 text-zinc-400"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="text-[13px] text-zinc-400">
                      Demo trading account
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-white/8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check w-2.5 h-2.5 text-zinc-400"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="text-[13px] text-zinc-400">
                      Basic market watchlist
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-white/8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check w-2.5 h-2.5 text-zinc-400"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="text-[13px] text-zinc-400">
                      3 AI Copilot queries/day
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-white/8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check w-2.5 h-2.5 text-zinc-400"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="text-[13px] text-zinc-400">
                      Delayed market data
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-white/8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check w-2.5 h-2.5 text-zinc-400"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="text-[13px] text-zinc-400">
                      Basic portfolio tracker
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-white/8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check w-2.5 h-2.5 text-zinc-400"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="text-[13px] text-zinc-400">
                      Community access
                    </span>
                  </div>
                </div>
                <button
                  className="w-full py-3.5 rounded-xl text-[14px] font-semibold transition-all duration-200 border border-white/10 text-zinc-300 hover:bg-white/5"
                  tabIndex="0"
                >
                  Start Free
                </button>
              </div>
              <div
                className="relative rounded-3xl p-7 flex flex-col bg-gradient-to-b from-blue-600/20 to-blue-800/10 border border-blue-500/30 shadow-[0_0_40px_rgba(37,99,235,0.15),0_32px_64px_rgba(0,0,0,0.6)]"
                style={{ opacity: "0", transform: "translateY(24px)" }}
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-blue-600 rounded-full shadow-blue-glow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-zap w-3 h-3 text-white"
                    >
                      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                    </svg>
                    <span className="text-[11px] font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="text-[12px] font-semibold text-zinc-500 uppercase tracking-widest mb-2">
                    Pro
                  </div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-[40px] font-bold text-white leading-none">
                      ₹999
                    </span>
                    <span className="text-[14px] text-zinc-500">/month</span>
                  </div>
                  <p className="text-[13px] text-zinc-500">
                    For active traders who want every edge.
                  </p>
                </div>
                <div className="flex-1 space-y-3 mb-8">
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-blue-500/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check w-2.5 h-2.5 text-blue-400"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="text-[13px] text-zinc-400">
                      Real + Demo trading
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-blue-500/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check w-2.5 h-2.5 text-blue-400"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="text-[13px] text-zinc-400">
                      Live market data across all exchanges
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-blue-500/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check w-2.5 h-2.5 text-blue-400"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="text-[13px] text-zinc-400">
                      Unlimited AI Copilot
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-blue-500/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check w-2.5 h-2.5 text-blue-400"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="text-[13px] text-zinc-400">
                      Full portfolio intelligence
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-blue-500/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check w-2.5 h-2.5 text-blue-400"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="text-[13px] text-zinc-400">
                      Advanced terminal with Level 2 data
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-blue-500/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check w-2.5 h-2.5 text-blue-400"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="text-[13px] text-zinc-400">
                      Risk management tools
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-blue-500/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check w-2.5 h-2.5 text-blue-400"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="text-[13px] text-zinc-400">
                      Priority support
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-blue-500/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check w-2.5 h-2.5 text-blue-400"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="text-[13px] text-zinc-400">
                      Global markets access
                    </span>
                  </div>
                </div>
                <button
                  className="w-full py-3.5 rounded-xl text-[14px] font-semibold transition-all duration-200 bg-blue-600 hover:bg-blue-500 text-white shadow-blue-glow-sm"
                  tabIndex="0"
                >
                  Get Early Access
                </button>
              </div>
              <div
                className="relative rounded-3xl p-7 flex flex-col card-premium border border-white/8"
                style={{ opacity: "0", transform: "translateY(24px)" }}
              >
                <div className="mb-6">
                  <div className="text-[12px] font-semibold text-zinc-500 uppercase tracking-widest mb-2">
                    Elite
                  </div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-[40px] font-bold text-white leading-none">
                      ₹2,499
                    </span>
                    <span className="text-[14px] text-zinc-500">/month</span>
                  </div>
                  <p className="text-[13px] text-zinc-500">
                    For institutional-grade trading operations.
                  </p>
                </div>
                <div className="flex-1 space-y-3 mb-8">
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-white/8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check w-2.5 h-2.5 text-zinc-400"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="text-[13px] text-zinc-400">
                      Everything in Pro
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-white/8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check w-2.5 h-2.5 text-zinc-400"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="text-[13px] text-zinc-400">
                      Multi-account management
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-white/8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check w-2.5 h-2.5 text-zinc-400"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="text-[13px] text-zinc-400">
                      API access
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-white/8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check w-2.5 h-2.5 text-zinc-400"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="text-[13px] text-zinc-400">
                      Custom AI model fine-tuning
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-white/8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check w-2.5 h-2.5 text-zinc-400"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="text-[13px] text-zinc-400">
                      Dedicated account manager
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-white/8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check w-2.5 h-2.5 text-zinc-400"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="text-[13px] text-zinc-400">
                      Advanced backtesting engine
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-white/8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check w-2.5 h-2.5 text-zinc-400"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="text-[13px] text-zinc-400">
                      Algorithmic trading support
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-white/8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check w-2.5 h-2.5 text-zinc-400"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="text-[13px] text-zinc-400">
                      White-label options
                    </span>
                  </div>
                </div>
                <button
                  className="w-full py-3.5 rounded-xl text-[14px] font-semibold transition-all duration-200 border border-white/10 text-zinc-300 hover:bg-white/5"
                  tabIndex="0"
                >
                  Contact Sales
                </button>
              </div>
            </div>
            <p
              className="text-center text-[12px] text-zinc-600 mt-8"
              style={{ opacity: "0" }}
            >
              All plans include a 14-day free trial. No credit card required to
              start.
            </p>
          </div>
        </section>
        <section id="early-access" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-40"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-blue-600/8 rounded-full blur-[120px]"></div>
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-600/6 rounded-full blur-[80px]"></div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <div style={{ opacity: "0", transform: "scale(0.95)" }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-8">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></span>
                <span className="text-[12px] font-medium text-blue-300 tracking-wide">
                  Limited early access spots available
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-[68px] font-bold text-white tracking-tight leading-[1.05] mb-6">
                The future of
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-emerald-400 bg-clip-text text-transparent">
                  trading starts here.
                </span>
              </h2>
              <p className="text-[18px] text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed">
                Join thousands of traders who are already experiencing the next
                generation of market intelligence and execution.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[16px] rounded-xl transition-all duration-200 shadow-blue-glow-sm"
                  tabIndex="0"
                >
                  Get Early Access
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right w-5 h-5"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-8 py-4 glass rounded-xl text-zinc-300 font-semibold text-[16px] hover:bg-white/6 transition-all duration-200"
                  tabIndex="0"
                >
                  Schedule a Demo
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="text-center">
                  <div className="text-[24px] font-bold text-white">500K+</div>
                  <div className="text-[12px] text-zinc-500">
                    Waitlist signups
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-[24px] font-bold text-white">4.9/5</div>
                  <div className="text-[12px] text-zinc-500">Beta rating</div>
                </div>
                <div className="text-center">
                  <div className="text-[24px] font-bold text-white">
                    ₹500Cr+
                  </div>
                  <div className="text-[12px] text-zinc-500">
                    Assets tracked
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="border-t border-white/6 pt-16 pb-8 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
              <div className="col-span-2">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-trending-up w-4 h-4 text-white"
                    >
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                  </div>
                  <span className="text-[15px] font-semibold text-white">
                    TradeBuddy<span className="text-blue-400">X</span>
                  </span>
                </div>
                <p className="text-[13px] text-zinc-500 leading-relaxed max-w-[200px] mb-6">
                  The operating system for modern traders. Built for India and
                  the world.
                </p>
                <div className="flex items-center gap-2">
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="w-8 h-8 glass rounded-lg flex items-center justify-center text-zinc-500 hover:text-white hover:bg-white/8 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-twitter w-3.5 h-3.5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="w-8 h-8 glass rounded-lg flex items-center justify-center text-zinc-500 hover:text-white hover:bg-white/8 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-linkedin w-3.5 h-3.5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="YouTube"
                    className="w-8 h-8 glass rounded-lg flex items-center justify-center text-zinc-500 hover:text-white hover:bg-white/8 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-youtube w-3.5 h-3.5"
                    >
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                      <path d="m10 15 5-3-5-3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="w-8 h-8 glass rounded-lg flex items-center justify-center text-zinc-500 hover:text-white hover:bg-white/8 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-instagram w-3.5 h-3.5"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <div className="text-[11px] font-semibold text-zinc-600 uppercase tracking-widest mb-4">
                  Product
                </div>
                <ul className="space-y-2.5">
                  <li>
                    <a
                      href="#features"
                      className="text-[13px] text-zinc-500 hover:text-white transition-colors"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pricing"
                      className="text-[13px] text-zinc-500 hover:text-white transition-colors"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#ai-copilot"
                      className="text-[13px] text-zinc-500 hover:text-white transition-colors"
                    >
                      AI Copilot
                    </a>
                  </li>
                  <li>
                    <a
                      href="#terminal"
                      className="text-[13px] text-zinc-500 hover:text-white transition-colors"
                    >
                      Terminal
                    </a>
                  </li>
                  <li>
                    <a
                      href="#markets"
                      className="text-[13px] text-zinc-500 hover:text-white transition-colors"
                    >
                      Markets
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <div className="text-[11px] font-semibold text-zinc-600 uppercase tracking-widest mb-4">
                  Company
                </div>
                <ul className="space-y-2.5">
                  <li>
                    <a
                      href="#"
                      className="text-[13px] text-zinc-500 hover:text-white transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[13px] text-zinc-500 hover:text-white transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[13px] text-zinc-500 hover:text-white transition-colors"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[13px] text-zinc-500 hover:text-white transition-colors"
                    >
                      Press
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[13px] text-zinc-500 hover:text-white transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <div className="text-[11px] font-semibold text-zinc-600 uppercase tracking-widest mb-4">
                  Legal
                </div>
                <ul className="space-y-2.5">
                  <li>
                    <a
                      href="#"
                      className="text-[13px] text-zinc-500 hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[13px] text-zinc-500 hover:text-white transition-colors"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[13px] text-zinc-500 hover:text-white transition-colors"
                    >
                      Risk Disclosure
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[13px] text-zinc-500 hover:text-white transition-colors"
                    >
                      SEBI Registration
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[13px] text-zinc-500 hover:text-white transition-colors"
                    >
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4 text-[12px] text-zinc-600">
                <span>© 2026 TradeBuddy X. All rights reserved.</span>
                <span className="hidden sm:block">·</span>
                <span>SEBI Registered: INZ000XXXXXX</span>
                <span className="hidden sm:block">·</span>
                <span>CIN: U74999XX0000PTC000000</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                <span className="text-[11px] text-zinc-600">
                  All systems operational
                </span>
              </div>
            </div>
            <p className="mt-6 text-[10px] text-zinc-700 leading-relaxed">
              Trading in financial markets involves significant risk of loss.
              Past performance does not guarantee future results. TradeBuddy X
              is registered with SEBI and compliant with all applicable
              regulations. Please read the risk disclosure carefully before
              investing. This platform is for educational and informational
              purposes as well as trading facilitation.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
