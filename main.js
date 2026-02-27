// Back to Top button functionality
document.addEventListener('DOMContentLoaded', function () {
  var backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});

      // Utility function to select elements
      const select = (selector) => document.querySelector(selector);
      const selectAll = (selector) => document.querySelectorAll(selector);

      // --- Global Initializations ---
      window.addEventListener("load", () => {
         window.scrollTo(0, 0); // Scroll to top on page load
         initializeHeaderBlur();
         initializeMobileNav();
         initializeFadeInSections();
         initializeFaqAccordion();
         initializeScrollSpy();
         initializeBackToTop();
         initializeSearchModal(); // initialize search modal (async + debounced)
       });

      // --- Header Blur Effect ---
      function initializeHeaderBlur() {
        const headerInner = select("#mainHeader");
        if (!headerInner) return;

        const headerEl = headerInner.closest('header');

        window.addEventListener("scroll", () => {
          if (window.scrollY > 1) {
            headerInner.classList.add("blur");
            if (headerEl) headerEl.classList.add('is-sticky');
          } else {
            headerInner.classList.remove("blur");
            if (headerEl) headerEl.classList.remove('is-sticky');
          }
        });
      }

      // --- Mobile Navigation Logic (cleaned) ---
      function initializeMobileNav() {
        const toggleBtn = select(".mobile-toggle");
        const mobileNav = select("#mobileNavPanel");
        const overlay = select("#mobileNavOverlay");
        const closeBtn = select(".close-btn");
        const mobileDropdownToggle = select(".dropdown-toggle-mobile");
        const mobileDropdownContent = select(".dropdown-content-mobile");

        if (!toggleBtn || !mobileNav || !overlay || !closeBtn) return;

        const openMobileMenu = () => {
          mobileNav.classList.add("active");
          overlay.classList.add("active");
          toggleBtn.setAttribute("aria-expanded", "true");
          toggleBtn.classList.add('open');
          document.body.style.overflow = "hidden"; // Prevent scrolling behind panel
        };

        const closeMobileMenu = () => {
          mobileNav.classList.remove("active");
          overlay.classList.remove("active");
          toggleBtn.setAttribute("aria-expanded", "false");
          toggleBtn.classList.remove('open');
          document.body.style.overflow = ""; // Restore scrolling
          // Ensure mobile dropdown is closed when nav closes
          if (mobileDropdownContent && mobileDropdownContent.classList.contains('active')) {
            mobileDropdownContent.classList.remove('active');
            mobileDropdownToggle.classList.remove('active');
          }
        };

        // Expose closeMobileMenu to global scope for other handlers
        window.closeMobileMenu = closeMobileMenu;

        toggleBtn.addEventListener("click", () => {
          if (mobileNav.classList.contains('active')) closeMobileMenu(); else openMobileMenu();
        });
        closeBtn.addEventListener("click", closeMobileMenu);
        overlay.addEventListener("click", closeMobileMenu);

        // Close on ESC key
        window.addEventListener("keydown", (e) => {
          if (e.key === "Escape" && mobileNav.classList.contains("active")) {
            closeMobileMenu();
          }
        });

        // Mobile Dropdown Toggle
        if (mobileDropdownToggle && mobileDropdownContent) {
          mobileDropdownToggle.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default link behavior
            mobileDropdownContent.classList.toggle("active");
            mobileDropdownToggle.classList.toggle("active"); // For arrow rotation
          });
        }

        // Close mobile nav when a link inside it is clicked (except dropdown toggle)
        selectAll('.mobile-nav-panel a').forEach(link => {
          if (link !== mobileDropdownToggle) {
            link.addEventListener('click', closeMobileMenu);
          }
        });
      }

      // --- Scroll-in Animation (enhanced: directional slide + stagger) ---
      function initializeFadeInSections() {
        const fadeInSections = selectAll(".fade-in-section");
        if (fadeInSections.length === 0) return;

        const observerOptions = {
          root: null,
          rootMargin: "0px 0px -10% 0px",
          threshold: 0.12,
        };

        // map elements to computed direction (left/right)
        const elDirections = new Map();

        const staggerSelector = '.card, .step-card, .testimonial-card, .why-choose-us-point, .faq-item, .result-item';

        const observer = new IntersectionObserver((entries, obs) => {
          entries.forEach((entry) => {
            const el = entry.target;
            if (!entry.isIntersecting) return;

            const dir = elDirections.get(el) || 'left';
            // mark parent visible and add directional class
            el.classList.add('is-visible', `slide-in-${dir}`);

            // stagger children for nicer grouped reveals
            const children = el.querySelectorAll('.stagger-child');
            children.forEach((c, i) => {
              c.style.transitionDelay = `${i * 75}ms`;
              c.classList.add('in-view-child');
            });

            // stop observing once revealed
            obs.unobserve(el);
          });
        }, observerOptions);

        // Assign directions and prepare staggerable children
        fadeInSections.forEach((section, idx) => {
          // allow explicit override via data-animate="left|right"
          const explicit = (section.dataset && section.dataset.animate) ? section.dataset.animate : null;
          const dir = explicit === 'left' || explicit === 'right' ? explicit : (idx % 2 === 0 ? 'left' : 'right');
          elDirections.set(section, dir);

          // mark potential stagger children with helper class
          const staggerables = section.querySelectorAll(staggerSelector);
          staggerables.forEach((s) => s.classList.add('stagger-child'));

          // initial small transform for parent to match directional slide
          if (dir === 'left') section.classList.add('slide-in-left'); else section.classList.add('slide-in-right');

          observer.observe(section);
        });
      }

      // --- Smooth scroll and ScrollSpy ---
      function initializeScrollSpy() {
        const navLinks = selectAll('nav.desktop-nav a');
        const sections = [];
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href && href.startsWith('#')) {
            const section = document.querySelector(href);
            if (section) sections.push({link, section});
            // Smooth scroll on click
            link.addEventListener('click', (e) => {
              e.preventDefault();
              document.querySelector(href).scrollIntoView({behavior: 'smooth', block: 'start'});
            });
          }
        });

        // Update active link on scroll
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            const item = sections.find(s => s.section === entry.target);
            if (!item) return;
            if (entry.isIntersecting) {
              navLinks.forEach(l => l.classList.remove('active'));
              item.link.classList.add('active');
            }
          });
        }, {root: null, threshold: 0.45});

        sections.forEach(s => observer.observe(s.section));
      }

      // --- Back to Top ---

      // --- FAQ Accordion Logic ---
      function initializeFaqAccordion() {
        const faqItems = selectAll(".faq-item");
 
        faqItems.forEach((item) => {
          const questionButton = item.querySelector(".faq-question");
          const answerDiv = item.querySelector(".faq-answer");

          if (questionButton && answerDiv) {
            questionButton.addEventListener("click", () => {
              const isActive = questionButton.classList.contains("active");

              // Close all other open FAQ items
              faqItems.forEach((otherItem) => {
                const otherQuestion = otherItem.querySelector(".faq-question");
                const otherAnswer = otherItem.querySelector(".faq-answer");
                if (otherQuestion !== questionButton && otherQuestion.classList.contains("active")) {
                  otherQuestion.classList.remove("active");
                  otherQuestion.setAttribute("aria-expanded", "false");
                  otherAnswer.classList.remove("active");
                }
              });

              // Toggle the clicked FAQ item
              questionButton.classList.toggle("active", !isActive);
              questionButton.setAttribute("aria-expanded", String(!isActive));
              answerDiv.classList.toggle("active", !isActive);
            });
          }
        });
      }

      // --- Search Modal: async loading + debounced queries + abort previous ---
      function initializeSearchModal() {
        const modal = select('#searchModal');
        const input = select('#searchInput');
        const clearBtn = select('#clearSearch');
        const closeBtn = select('#closeSearchModal');
        const chipsContainer = select('#searchChips');
        const resultsContainer = select('#searchResults');
        const status = select('#searchStatus');

        if (!modal || !input || !chipsContainer || !resultsContainer || !status) return;

        // Demo dataset with broad coverage (NSE, BSE, MCX). Replace /extend with your backend symbol list.
        // For real-time prices you must provide a BACKEND_WS or a realtime provider (see BACKEND_WS later).
        const demoSymbols = [
          // NSE Equities
          { symbol: 'RELIANCE', name: 'Reliance Industries Ltd', type: 'Stocks', exchange: 'NSE', country: 'IN', price: 2500 },
          { symbol: 'TCS', name: 'Tata Consultancy Services Ltd', type: 'Stocks', exchange: 'NSE', country: 'IN', price: 3200 },
          { symbol: 'INFY', name: 'Infosys Ltd', type: 'Stocks', exchange: 'NSE', country: 'IN', price: 1500 },
          { symbol: 'HDFCBANK', name: 'HDFC Bank Ltd', type: 'Stocks', exchange: 'NSE', country: 'IN', price: 1500 },
          { symbol: 'ICICIBANK', name: 'ICICI Bank Ltd', type: 'Stocks', exchange: 'NSE', country: 'IN', price: 950 },
          { symbol: 'BHARTIARTL', name: 'Bharti Airtel Ltd', type: 'Stocks', exchange: 'NSE', country: 'IN', price: 650 },
          // BSE Equities (sample symbols; BSE symbols sometimes include .BO suffix on some feeds)
          { symbol: '500325', name: 'Reliance Industries Ltd (BSE)', type: 'Stocks', exchange: 'BSE', country: 'IN', price: 2500 },
          { symbol: '532540', name: 'TCS (BSE)', type: 'Stocks', exchange: 'BSE', country: 'IN', price: 3200 },
          { symbol: '500209', name: 'HDFC Bank (BSE)', type: 'Stocks', exchange: 'BSE', country: 'IN', price: 1500 },
          // Indices
          { symbol: 'NIFTY', name: 'Nifty 50 Index', type: 'Indices', exchange: 'NSE', country: 'IN', price: 22000 },
          { symbol: 'SENSEX', name: 'BSE Sensex', type: 'Indices', exchange: 'BSE', country: 'IN', price: 74000 },
          // ETFs / Funds
          { symbol: 'SBIETF', name: 'SBI ETF Nifty 50', type: 'ETF', exchange: 'NSE', country: 'IN', price: 2000 },
          { symbol: 'MUTFUND1', name: 'Sample Mutual Fund', type: 'Funds', exchange: 'NSE', country: 'IN', price: 120 },
          // Futures / Options (sample contract names; in production use exchange-specific symbols)
          { symbol: 'NSE_FUT_NIFTY_D', name: 'Nifty Futures (sample)', type: 'Futures', exchange: 'NSE', country: 'IN', price: 22050 },
          { symbol: 'OPTIONS_NIFTY_XXXX', name: 'Nifty Option (sample)', type: 'Options', exchange: 'NSE', country: 'IN', price: 50 },
          // MCX Commodities (sample MCX contract symbols)
          { symbol: 'GOLD', name: 'Gold (MCX)', type: 'Commodity', exchange: 'MCX', country: 'IN', price: 62000 },
          { symbol: 'SILVER', name: 'Silver (MCX)', type: 'Commodity', exchange: 'MCX', country: 'IN', price: 73000 },
          { symbol: 'CRUDEOIL', name: 'Crude Oil (MCX)', type: 'Commodity', exchange: 'MCX', country: 'IN', price: 5200 },
          { symbol: 'NATGAS', name: 'Natural Gas (MCX)', type: 'Commodity', exchange: 'MCX', country: 'IN', price: 190 },
          // Crypto / International (optional)
          { symbol: 'BTCUSD', name: 'Bitcoin / U.S. Dollar', type: 'Crypto', exchange: 'COINBASE', country: '', price: 60000 },
          // Additional commonly-traded NSE/BSE names (add more as needed)
          { symbol: 'HINDUNILVR', name: 'Hindustan Unilever Ltd', type: 'Stocks', exchange: 'NSE', country: 'IN', price: 2600 },
          { symbol: 'AXISBANK', name: 'Axis Bank Ltd', type: 'Stocks', exchange: 'NSE', country: 'IN', price: 800 },
          { symbol: 'LT', name: 'Larsen & Toubro Ltd', type: 'Stocks', exchange: 'NSE', country: 'IN', price: 3400 },
          { symbol: 'SUNPHARMA', name: 'Sun Pharmaceuticals', type: 'Stocks', exchange: 'NSE', country: 'IN', price: 1100 }
        ];

        // Try to fetch an authoritative India symbol list from your backend (if available).
        // Replace the URL with your real endpoint that returns JSON array of symbols in the same shape.
        (function tryLoadSymbolMaster() {
          const SRC = '/api/india-symbols'; // <--- change to your backend endpoint or CDN JSON file
          const timeout = 2500;
          const controller = new AbortController();
          const id = setTimeout(() => controller.abort(), timeout);

          fetch(SRC, { signal: controller.signal })
            .then((r) => {
              clearTimeout(id);
              if (!r.ok) throw new Error('no-symbols');
              return r.json();
            })
            .then((data) => {
              if (!Array.isArray(data) || data.length === 0) return;
              // normalize and replace demoSymbols contents
              demoSymbols.length = 0;
              data.forEach((it) => {
          // ensure essential fields exist
          demoSymbols.push({
            symbol: (it.symbol || it.ticker || it.code || '').toString().toUpperCase(),
            name: it.name || it.description || '',
            type: it.type || it.assetClass || 'Stocks',
            exchange: (it.exchange || '').toUpperCase() || 'NSE',
            country: it.country || 'IN',
            price: (typeof it.price === 'number') ? it.price : (it.lastPrice || 0)
          });
              });
              // If modal is open, refresh visible results and realtime seeds after symbol master loads
              try {
          if (typeof renderChips === 'function') renderChips();
          if (typeof performSearch === 'function') performSearch();
          // If realtime already exists, seed its internal prices object
          if (window.realtime && window.realtime.simulate) {
            demoSymbols.forEach(s => {
              if (s && s.symbol) window.realtime.prices[s.symbol] = (s.price || window.realtime.prices[s.symbol] || (Math.random()*1000+50)).toFixed(2);
            });
          }
              } catch (e) {
          // ignore - these functions may not be defined yet during initialization
              }
            })
            .catch(() => {
              // no-op: keep demoSymbols fallback. In production, provide a reliable symbol master.
            });
        })();

        // NOTE: Real-time pricing
        // - This UI is designed to work with a WebSocket realtime provider.
        // - Set BACKEND_WS (above in initializeSearchModal) to your provider's ws:// or wss:// URL.
        // - The RealtimeClient will subscribe/unsubscribe by symbol name.
        // - Many exchanges/pro-data vendors require licensing; you must integrate a commercial feed or your own gateway.
        //
        // Example: if you have a WebSocket gateway at wss://feed.example.com, set:
        //   const BACKEND_WS = 'wss://feed.example.com';
        //
        // If no BACKEND_WS is provided the page uses a local simulation seeded from demoSymbols.

        // categories
        const CATEGORIES = ['All','Stocks','Funds','Futures','ETF','Indices','Options'];
        let activeCategory = 'All';

        // Abort controller placeholder for future remote fetches
        let currentController = null;

        // STATUS helper
        function setStatus(text, loading=false){
          status.textContent = '';
          if (!text) return;
          if (loading) status.innerHTML = `<span style="opacity:.9">${text}</span>`;
          else status.textContent = text;
        }

        // basic debounce
        let debounceTimer = null;
        function debounce(fn, wait=250){
          return (...args)=>{
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(()=>fn(...args), wait);
          };
        }

        // render category chips
        function renderChips(){
          chipsContainer.innerHTML = '';
          CATEGORIES.forEach(cat=>{
            const b = document.createElement('button');
            b.type = 'button';
            b.className = 'chip' + (cat===activeCategory ? ' active' : '');
            b.textContent = cat;
            b.addEventListener('click', ()=>{
              activeCategory = cat;
              renderChips();
              triggerSearch();
              input.focus();
            });
            chipsContainer.appendChild(b);
          });
        }

        // helper to escape selector characters for data-symbol selectors
        function escapeSelector(s){ return String(s).replace(/(["\\.\\[\\]:,#>+~*^$|=!@])/g,'\\\\$1'); }

        // render results into DOM (core renderer)
        function renderResultsInner(items, q){
          resultsContainer.innerHTML = '';
          if (!items || items.length === 0) {
            resultsContainer.innerHTML = '<div class="no-results"> </div>';
            return;
          }
          items.forEach(it=>{
            const row = document.createElement('div');
            row.className = 'result-item';
            row.setAttribute('data-symbol', (it.symbol||'').toUpperCase());
            row.setAttribute('role','listitem');

            row.innerHTML = `<div style="text-align:left">
              <strong style="display:block">${it.symbol}</strong>
              <div style="font-size:0.95rem;color:#cfc7e8">${it.name}</div>
            </div>
            <div class="result-meta" style="min-width:130px;text-align:right">${it.type || ''} • ${it.exchange || ''}</div>`;

            // price placeholder (updated by realtime)
            const priceWrap = document.createElement('div');
            priceWrap.className = 'price';
            priceWrap.innerHTML = `<span class="value">${(it.price?Number(it.price).toFixed(2):'--')}</span><span class="delta">${it.price?'+0.00':''}</span>`;
            row.appendChild(priceWrap);

            row.addEventListener('click', ()=>{
              // selection behavior: fill input and close modal
              input.value = it.symbol;
              setStatus(`Selected: ${it.symbol}`);
              closeSearch();
            });

            resultsContainer.appendChild(row);
          });
        }

        // wrap renderer to unsubscribe visible symbols before rendering new list
        function unsubscribeAllVisible(){
          const rows = resultsContainer.querySelectorAll('.result-item[data-symbol]');
          rows.forEach(r=>{
            const s = r.getAttribute('data-symbol');
            if (s && realtime) realtime.unsubscribe(s);
          });
        }
        // replace renderResults reference used elsewhere
        let renderResults = (items, q) => {
          renderResultsInner(items, q);
        };

        // local filtering (demo-only). Replace with remote fetch when backend exists.
        function filterLocal(q){
          const qq = (q||'').trim().toLowerCase();
          return demoSymbols.filter(it=>{
            // category filter
            if (activeCategory !== 'All' && it.type && it.type.toLowerCase() !== activeCategory.toLowerCase()) return false;
            if (!qq) return true;
            return (it.symbol||'').toLowerCase().includes(qq) || (it.name||'').toLowerCase().includes(qq);
          }).slice(0,100);
        }

        // main search: for now local only; can later call backend and set currentController
        async function performSearch(){
          const q = input.value || '';
          setStatus('', false);
          // use local filter
          const items = filterLocal(q);
          if (!items.length) setStatus('', false);
          else setStatus(`${items.length} results`, false);
          // unsubscribe prior visible
          unsubscribeAllVisible();
          renderResults(items, q);
          // subscribe visible to realtime
          const rows = resultsContainer.querySelectorAll('.result-item[data-symbol]');
          rows.forEach(r=>{
            const s = r.getAttribute('data-symbol');
            if (s && realtime) realtime.subscribe(s);
          });
        }

        const triggerSearch = debounce(performSearch, 220);

        // --- Realtime client (simulation when no BACKEND_WS) ---
        const BACKEND_WS = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') ? 'ws://localhost:8080' : '';
        class RealtimeClient {
          constructor(url, opts = {}){
            this.url = url;
            this.simulate = !url;
            this.onMessage = opts.onMessage || function(){};
            this.interval = null;
            this.ws = null;
            this.subscribers = new Set();
            this.prices = {};
            if (this.simulate) this._startSimulation(opts.seed || []);
            else this._connect();
          }
          _connect(){
            try{
              this.ws = new WebSocket(this.url);
              this.ws.addEventListener('open', ()=>console.info('WS open'));
              this.ws.addEventListener('message', (ev)=> {
                try{ this.onMessage(JSON.parse(ev.data)); } catch(e){ console.warn(e); }
              });
              this.ws.addEventListener('close', ()=> setTimeout(()=>this._connect(), 2000));
            } catch(e){ console.warn('WS failed', e); }
          }
          _startSimulation(seed){
            seed.forEach(s => this.prices[s.symbol] = (s.price || (Math.random()*1000+100)).toFixed(2));
            this.interval = setInterval(()=>{
              if (this.subscribers.size === 0) return;
              const subs = Array.from(this.subscribers);
              const count = Math.max(1, Math.min(subs.length, Math.ceil(subs.length * 0.35)));
              for (let i=0;i<count;i++){
                const sym = subs[Math.floor(Math.random()*subs.length)];
                const prev = parseFloat(this.prices[sym] || (Math.random()*1000+100).toFixed(2));
                const delta = (prev * (Math.random()*0.008 - 0.004));
                const next = Math.max(0.01, prev + delta);
                this.prices[sym] = next.toFixed(2);
                const msg = { symbol: sym, price: next, change: +(next - prev).toFixed(2), pct: +(((next - prev)/prev)*100).toFixed(2), time: Date.now() };
                this.onMessage(msg);
              }
            }, 900);
          }
          subscribe(symbol){
            if(!symbol) return;
            this.subscribers.add(symbol);
            if (this.simulate && !this.prices[symbol]) this.prices[symbol] = (Math.random()*2000+50).toFixed(2);
            if (!this.simulate && this.ws && this.ws.readyState === WebSocket.OPEN){
              try{ this.ws.send(JSON.stringify({ action:'subscribe', symbol })); }catch(e){}
            }
          }
          unsubscribe(symbol){
            if(!symbol) return;
            this.subscribers.delete(symbol);
            if (!this.simulate && this.ws && this.ws.readyState === WebSocket.OPEN){
              try{ this.ws.send(JSON.stringify({ action:'unsubscribe', symbol })); }catch(e){}
            }
          }
          close(){
            if (this.interval) clearInterval(this.interval);
            if (this.ws) this.ws.close();
          }
        }

        // realtime instance
        const realtime = new RealtimeClient(BACKEND_WS || '', { onMessage: handleRealtimeMessage, seed: demoSymbols });

        // handle incoming realtime messages: update DOM row price
        function handleRealtimeMessage(msg){
          if (!msg || !msg.symbol) return;
          const sym = String(msg.symbol).toUpperCase();
          const row = resultsContainer.querySelector(`.result-item[data-symbol="${escapeSelector(sym)}"]`);
          if (!row) return;
          let priceEl = row.querySelector('.price .value');
          let deltaEl = row.querySelector('.price .delta');
          if (!priceEl){
            const priceWrap = document.createElement('div');
            priceWrap.className = 'price';
            priceWrap.innerHTML = `<span class="value"></span><span class="delta"></span>`;
            row.appendChild(priceWrap);
            priceEl = priceWrap.querySelector('.value');
            deltaEl = priceWrap.querySelector('.delta');
          }
          const price = (typeof msg.price === 'number') ? msg.price.toFixed(2) : msg.price;
          const change = (typeof msg.change === 'number') ? (msg.change > 0 ? '+' + msg.change.toFixed(2) : msg.change.toFixed(2)) : (msg.change||'');
          const pct = (typeof msg.pct === 'number') ? ` (${msg.pct>0?'+':''}${msg.pct.toFixed(2)}%)` : '';
          priceEl.textContent = price;
          deltaEl.textContent = change + pct;
          const priceWrap = row.querySelector('.price');
          if (msg.change > 0) { priceWrap.classList.add('up'); priceWrap.classList.remove('down'); }
          else if (msg.change < 0) { priceWrap.classList.add('down'); priceWrap.classList.remove('up'); }
          else { priceWrap.classList.remove('down','up'); }
        }

        // wire UI actions
        function openSearch(){
          modal.classList.add('active');
          modal.setAttribute('aria-hidden','false');
          document.body.style.overflow = 'hidden';
          // show full list when opening search (default = All)
          input.value = '';
          activeCategory = 'All';
          renderChips();
          // perform search immediately (shows all items in "All" category)
          // unsubscribe any previous subscriptions then render & subscribe new rows
          unsubscribeAllVisible();
          performSearch(); // immediate, not debounced — shows all results for "All"
          setTimeout(()=>input.focus(), 120);
        }
        function closeSearch(){
          modal.classList.remove('active');
          modal.setAttribute('aria-hidden','true');
          document.body.style.overflow = '';
          if (currentController) {
            try { currentController.abort(); } catch(e) {}
            currentController = null;
          }
          unsubscribeAllVisible();
          // keep realtime running for faster re-open; call realtime.close() if you want to stop it
        }

        // event bindings
        // open modal when any link to #search clicked
        selectAll('a[href="#search"]').forEach(link=>{
          link.addEventListener('click', (e)=>{ e.preventDefault(); openSearch(); });
        });
        closeBtn && closeBtn.addEventListener('click', closeSearch);
        modal.addEventListener('click', (e)=>{ if (e.target === modal) closeSearch(); });
        window.addEventListener('keydown', (e)=>{ if (e.key === 'Escape' && modal.classList.contains('active')) closeSearch(); });

        input.addEventListener('input', ()=>{
          setStatus('Typing...', true);
          triggerSearch();
        });
        clearBtn.addEventListener('click', ()=>{
          input.value = '';
          triggerSearch();
          input.focus();
        });

        // expose initial chips & results
        renderChips();
      }
    


       
      // Client-side auth check: hide Login/SignUp buttons when authenticated
      (function(){
        try{
          const authRaw = localStorage.getItem('tradebuddy_auth');
          if (!authRaw) return;
          const auth = JSON.parse(authRaw);
          if (!auth || !auth.email) return;

          // Hide all login/signup buttons
          document.querySelectorAll('.btn-contact').forEach(el => el.style.display = 'none');

          // Insert user menu into header-inner or mobile menu
          const headerInner = document.querySelector('.header-inner');
          const mobileUserMenuHolder = document.getElementById('mobileUserMenuHolder');
          if (!headerInner || !mobileUserMenuHolder) return;

          const existing = document.getElementById('userMenuBtn');
          if (existing) return;

          // Create a polished user badge with avatar, name and an accessible dropdown menu
          // Inject styles once
          if (!document.getElementById('tb-user-styles')){
            const s = document.createElement('style');
            s.id = 'tb-user-styles';
            s.textContent = `
              .tb-user { display:flex; align-items:center; gap:0.5rem; position:relative; }
              .tb-user-btn { display:flex; align-items:center; gap:0.5rem; background:transparent; border:0; padding:0.15rem 0.25rem; cursor:pointer; }
              .tb-user-avatar { width:36px; height:36px; border-radius:50%; display:inline-grid; place-items:center; font-weight:700; color:var(--bg); background:linear-gradient(135deg,var(--accent),#8a5cff); box-shadow:0 2px 8px rgba(0,0,0,0.25); flex:0 0 36px; }
              .tb-user-name { color:var(--accent); font-weight:700; font-size:0.95rem; white-space:nowrap; }
              .tb-user-chevron { color:var(--muted); font-size:0.95rem; transition:transform .18s ease; }
              .tb-user[aria-expanded="true"] .tb-user-chevron { transform:rotate(180deg); }
              .tb-user-menu { position:absolute; right:0; top:calc(100% + 8px); min-width:160px; background:rgba(18,18,20,0.9); backdrop-filter:blur(6px); border-radius:8px; box-shadow:0 8px 24px rgba(0,0,0,0.4); padding:8px 6px; z-index:9999; display:none; }
              .tb-user[aria-expanded="true"] .tb-user-menu { display:block; }
              .tb-user-menu a, .tb-user-menu button { display:block; width:100%; text-align:left; padding:8px 10px; color:var(--muted); background:transparent; border:0; border-radius:6px; font-size:0.92rem; }
              .tb-user-menu a:hover, .tb-user-menu button:hover { background:rgba(255,255,255,0.02); color:var(--accent); }
              .tb-user-sep { height:1px; background:rgba(255,255,255,0.03); margin:6px 4px; border-radius:2px; }
              @media (max-width: 900px) {
                .header-inner .tb-user { display: none !important; }
                .mobile-nav-panel .tb-user { display: flex !important; margin-bottom: 1.2rem; margin-top: 0.2rem; }
              }
            `;
            document.head.appendChild(s);
          }

          const userWrapper = document.createElement('div');
          userWrapper.id = 'userMenuBtn';
          userWrapper.className = 'tb-user';
          userWrapper.setAttribute('role','region');
          userWrapper.setAttribute('aria-expanded','false');

          const btn = document.createElement('button');
          btn.className = 'tb-user-btn';
          btn.setAttribute('aria-haspopup','true');
          btn.setAttribute('aria-expanded','false');

          const initials = (auth.name && auth.name.split(' ').map(n=>n[0]).slice(0,2).join('')) || auth.email.split('@')[0].slice(0,2).toUpperCase();
          const avatar = document.createElement('span');
          avatar.className = 'tb-user-avatar';
          avatar.textContent = initials;

          const nameSpan = document.createElement('span');
          nameSpan.className = 'tb-user-name';
          nameSpan.textContent = auth.name ? auth.name : auth.email.split('@')[0];

          const chevron = document.createElement('span');
          chevron.className = 'tb-user-chevron';
          chevron.innerHTML = '\u25BE';

          btn.appendChild(avatar);
          btn.appendChild(nameSpan);
          btn.appendChild(chevron);

          const menu = document.createElement('div');
          menu.className = 'tb-user-menu';
          menu.setAttribute('role','menu');

          const account = document.createElement('a');
          account.href = '#account';
          account.textContent = 'Profile';
          account.setAttribute('role','menuitem');
          account.addEventListener('click', (e)=>{ e.preventDefault(); window.location.href = 'login.html'; });

          const settings = document.createElement('a');
          settings.href = '#settings';
          settings.textContent = 'Settings';
          settings.setAttribute('role','menuitem');
          settings.addEventListener('click', (e)=>{ e.preventDefault(); alert('Settings are not implemented in this demo.'); });

          const sep = document.createElement('div');
          sep.className = 'tb-user-sep';

          const logoutBtn = document.createElement('button');
          logoutBtn.type = 'button';
          logoutBtn.textContent = 'Logout';
          logoutBtn.setAttribute('role','menuitem');
          logoutBtn.addEventListener('click', ()=>{
            localStorage.removeItem('tradebuddy_auth');
            document.querySelectorAll('.btn-contact').forEach(el => el.style.display = '');
            // close menu then reload
            userWrapper.setAttribute('aria-expanded','false');
            btn.setAttribute('aria-expanded','false');
            window.location.reload();
          });

          menu.appendChild(account);
          menu.appendChild(settings);
          menu.appendChild(sep);
          menu.appendChild(logoutBtn);

          // Toggle handlers
          btn.addEventListener('click', (e)=>{
            const expanded = userWrapper.getAttribute('aria-expanded') === 'true';
            userWrapper.setAttribute('aria-expanded', expanded ? 'false' : 'true');
            btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
          });

          // close when clicking outside
          document.addEventListener('click', (e)=>{
            if (!userWrapper.contains(e.target)){
              userWrapper.setAttribute('aria-expanded','false');
              btn.setAttribute('aria-expanded','false');
            }
          });

          userWrapper.appendChild(btn);
          userWrapper.appendChild(menu);

          // Place in header-inner for desktop, in mobileUserMenuHolder for mobile
          function placeUserMenu() {
            if (window.innerWidth <= 900) {
              if (!mobileUserMenuHolder.contains(userWrapper)) {
                mobileUserMenuHolder.appendChild(userWrapper);
              }
            } else {
              if (!headerInner.contains(userWrapper)) {
                const mobileToggle = headerInner.querySelector('.mobile-toggle');
                if (mobileToggle) headerInner.insertBefore(userWrapper, mobileToggle);
                else headerInner.appendChild(userWrapper);
              }
            }
          }
          window.addEventListener('resize', placeUserMenu);
          placeUserMenu();
        } catch (e) { console.warn('auth-check failed', e); }
      })();
    