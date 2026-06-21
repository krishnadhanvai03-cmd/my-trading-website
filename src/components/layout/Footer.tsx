import Link from "next/link";

const footerColumns = [
  {
    title: "Community",
    links: ["Twitter", "Telegram", "Discord", "Reddit", "Instagram", "YouTube"],
  },
  {
    title: "About Us",
    links: [
      "About Binance",
      "Careers",
      "Leadership",
      "Blog",
      "Community Rules",
      "Press",
    ],
  },
  {
    title: "Products",
    links: [
      "Buy Crypto",
      "Markets",
      "Trade",
      "Futures",
      "Earn",
      "BNB Chain",
      "Launchpad",
    ],
  },
  {
    title: "Business",
    links: [
      "Binance for Business",
      "OTC Trading",
      "Institutional",
      "Market Maker",
      "Referral",
      "Affiliate",
    ],
  },
  {
    title: "Service",
    links: [
      "Help Center",
      "Submit a Request",
      "API Documentation",
      "Fees",
      "Trading Rules",
      "Binance Verify",
    ],
  },
  {
    title: "Learn",
    links: [
      "Binance Academy",
      "Research",
      "Square",
      "Earn Learn",
      "Crypto Basics",
      "BNB",
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-surface-soft-light text-body-on-light mt-12">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8 py-16">
        {/* 6-Column Link Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-ink mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-muted hover:text-ink transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-hairline-light flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
          <p>&copy; {new Date().getFullYear()} Binance. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-ink transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-ink transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-ink transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
