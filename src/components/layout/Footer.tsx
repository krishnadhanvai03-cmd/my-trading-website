import React from "react";

export function Footer() {
  return (
    <footer className="py-8 mt-20 border-t border-surface-border text-center text-text-muted text-sm relative z-10">
      <div className="container mx-auto px-4">
        &copy; {new Date().getFullYear()} TradeBuddy. All rights reserved. | Built with precision and care.
      </div>
    </footer>
  );
}
