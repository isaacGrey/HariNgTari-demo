/* Hari ng Tari — self-contained fictional portfolio demonstration.
   No backend, payments, wagering, or actual credentials. All records are mock data. */
(function () {
  'use strict';

  var ACCOUNTS = {
    owner:     { name: 'Alex Reyes',    role: 'Owner',     email: 'owner@hnt.demo',     password: 'Demo123!', initials: 'AR', caption: 'Administrative overview' },
    moderator: { name: 'Mika Santos',   role: 'Moderator', email: 'moderator@hnt.demo', password: 'Demo123!', initials: 'MS', caption: 'Event coordination' },
    agent:     { name: 'Jordan Cruz',   role: 'Agent',     email: 'agent@hnt.demo',     password: 'Demo123!', initials: 'JC', caption: 'Directory and records' },
    member:    { name: 'Sam Rivera',    role: 'Member',    email: 'member@hnt.demo',    password: 'Demo123!', initials: 'SR', caption: 'Viewer experience' }
  };

  var INITIAL_EVENTS = [
    { id: 'evt-101', title: 'Metro Invitational', venue: 'Showcase Arena A', date: '2026-11-18', time: '16:00', status: 'Ongoing', rounds: 8, description: 'A fictional event used to demonstrate the event monitoring interface.' },
    { id: 'evt-102', title: 'North District Showcase', venue: 'Practice Hall 02', date: '2026-11-21', time: '14:30', status: 'Scheduled', rounds: 0, description: 'Example event for demonstrating scheduling and administrative tools.' },
    { id: 'evt-103', title: 'Regional Exhibition', venue: 'Demo Venue C', date: '2026-11-15', time: '18:00', status: 'Scheduled', rounds: 0, description: 'A fictional exhibition record. This is not a real sporting event.' },
    { id: 'evt-104', title: 'Weekend Invitational', venue: 'Showcase Arena B', date: '2026-11-08', time: '15:30', status: 'Completed', rounds: 12, description: 'Completed example used to demonstrate historical records.' },
    { id: 'evt-105', title: 'Community Practice Session', venue: 'Practice Hall 01', date: '2026-11-06', time: '13:00', status: 'Completed', rounds: 6, description: 'Historical fictional sample for a portfolio walkthrough.' }
  ];
  var INITIAL_MEMBERS = [
    {id:'usr-100', name:'Taylor Mendoza', username:'taylor.m',role:'Member',status:'Active',joined:'2026-10-11',initials:'TM'},
    {id:'usr-101', name:'Drew Navarro', username:'drew.n',role:'Member',status:'Active',joined:'2026-10-14',initials:'DN'},
    {id:'usr-102', name:'Casey Villanueva', username:'casey.v',role:'Agent',status:'Active',joined:'2026-10-17',initials:'CV'},
    {id:'usr-103', name:'Ari Gonzales', username:'ari.g',role:'Member',status:'Pending',joined:'2026-10-19',initials:'AG'},
    {id:'usr-104', name:'Robin Garcia', username:'robin.g',role:'Member',status:'Active',joined:'2026-10-22',initials:'RG'},
    {id:'usr-105', name:'Jaime Torres', username:'jaime.t',role:'Agent',status:'Inactive',joined:'2026-11-01',initials:'JT'}
  ];
  var RESULTS = [
    {id:1,event:'Metro Invitational',round:'Round 08',left:'Meron',right:'Wala',winner:'Meron',date:'2026-11-13',score:'1–0'},
    {id:2,event:'Metro Invitational',round:'Round 07',left:'Meron',right:'Wala',winner:'Wala',date:'2026-11-13',score:'0–1'},
    {id:3,event:'Metro Invitational',round:'Round 06',left:'Meron',right:'Wala',winner:'Draw',date:'2026-11-13',score:'0–0'},
    {id:4,event:'Weekend Invitational',round:'Round 12',left:'Meron',right:'Wala',winner:'Meron',date:'2026-11-08',score:'1–0'},
    {id:5,event:'Weekend Invitational',round:'Round 11',left:'Meron',right:'Wala',winner:'Wala',date:'2026-11-08',score:'0–1'},
    {id:6,event:'Community Practice Session',round:'Round 06',left:'Meron',right:'Wala',winner:'Meron',date:'2026-11-06',score:'1–0'}
  ];
  var START_ACTIVITY = [
    {title:'Example event was scheduled',detail:'North District Showcase • Mock event',date:'Today',icon:'calendar'},
    {title:'Result added to the sample history',detail:'Metro Invitational • Round 08',date:'Today',icon:'award'},
    {title:'Example member profile created',detail:'Ari Gonzales • Fictional profile',date:'Yesterday',icon:'users'},
    {title:'Sample record was reviewed',detail:'Weekend Invitational • Archived example',date:'Nov 08',icon:'check'}
  ];
  var ICONS = {
    grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/>',
    award:'<circle cx="12" cy="8" r="5"/><path d="m8.5 12-1 9 4.5-3 4.5 3-1-9"/>',
    users:'<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M17 11a3 3 0 1 0-1-5M18 14a5 5 0 0 1 3 5v1"/>',
    chart:'<path d="M4 20V4M4 20h17M9 16v-4M14 16V8M19 16V5"/>',
    clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    settings:'<circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M22 12h-2M4 12H2M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4M19.1 19.1l-1.4-1.4M6.3 6.3 4.9 4.9"/>',
    info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/>',
    search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
    plus:'<path d="M12 5v14M5 12h14"/>',
    arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',
    chevron:'<path d="m9 18 6-6-6-6"/>',
    menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
    close:'<path d="M5 5l14 14M19 5 5 19"/>',
    shield:'<path d="M12 2 20 6v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/><path d="m9 12 2 2 4-4"/>',
    moon:'<path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5z"/>',
    sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
    check:'<path d="m5 12 4 4L19 6"/>',
    logout:'<path d="M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4M16 17l5-5-5-5M21 12H9"/>',
    edit:'<path d="m4 20 4-.8L20 7l-3-3L5 16zM14 7l3 3"/>',
    trash:'<path d="M4 7h16M10 3h4M6 7l1 14h10l1-14M10 11v6m4-6v6"/>',
    refresh:'<path d="M20 7V3l-3 3A8 8 0 1 0 20 17M20 3v6h-6"/>',
    download:'<path d="M12 3v13m-5-5 5 5 5-5M4 17v4h16v-4"/>',
    home:'<path d="m3 11 9-8 9 8v10H3zM9 21v-7h6v7"/>',
    copy:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
    eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
    file:'<path d="M6 2h8l5 5v15H6zM14 2v5h5M9 12h6M9 16h6"/>',
    filter:'<path d="M3 5h18l-7 8v6l-4 2v-8z"/>',
    layers:'<path d="m12 2 10 6-10 6L2 8zM2 13l10 6 10-6M2 18l10 5 10-5"/>',
    lock:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    spark:'<path d="m12 2 2.1 7.9L22 12l-7.9 2.1L12 22l-2.1-7.9L2 12l7.9-2.1z"/>'
  };
  var NAV = [
    {id:'overview',label:'Overview',icon:'grid'},
    {id:'events',label:'Events',icon:'calendar'},
    {id:'results',label:'Sample results',icon:'award'},
    {id:'activity',label:'Activity',icon:'clock'},
    {id:'people',label:'People directory',icon:'users',roles:['owner','agent']},
    {id:'insights',label:'Insights',icon:'chart',roles:['owner','moderator']},
    {id:'about',label:'Project notes',icon:'info'},
    {id:'settings',label:'Demo settings',icon:'settings'}
  ];

  function read(key, fallback) { try { var value = sessionStorage.getItem(key); return value ? JSON.parse(value) : fallback; } catch (_) { return fallback; } }
  function write(key, value) { try { sessionStorage.setItem(key, JSON.stringify(value)); } catch (_) {} }
  function getTheme() { try { return localStorage.getItem('hnt-demo-theme') === 'light' ? 'light' : 'dark'; } catch (_) { return 'dark'; } }
  function setTheme(theme) { document.documentElement.dataset.theme = theme; try { localStorage.setItem('hnt-demo-theme', theme); } catch (_) {} }

  var state = {
    role: read('hnt-demo-role', null),
    selected: 'owner',
    loginError: '',
    route: (location.hash || '#overview').slice(1),
    theme: getTheme(),
    mobileOpen: false,
    modal: null,
    eventSearch: '',
    eventStatus: 'All',
    peopleSearch: '',
    resultSearch: '',
    events: read('hnt-demo-events', INITIAL_EVENTS),
    people: read('hnt-demo-people', INITIAL_MEMBERS),
    activity: read('hnt-demo-activity', START_ACTIVITY)
  };
  if (!ACCOUNTS[state.role]) state.role = null;
  if (!Array.isArray(state.events)) state.events = INITIAL_EVENTS.slice();
  if (!Array.isArray(state.people)) state.people = INITIAL_MEMBERS.slice();
  if (!Array.isArray(state.activity)) state.activity = START_ACTIVITY.slice();
  setTheme(state.theme);

  function esc(value) { return String(value == null ? '' : value).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;'); }
  function icon(name, size) { return '<svg class="icon" width="' + (size || 17) + '" height="' + (size || 17) + '" viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || ICONS.info) + '</svg>'; }
  function brandMark() { return '<div class="brand-mark" aria-hidden="true"><svg viewBox="0 0 32 32"><path fill="currentColor" d="M5 8h5v7h12V8h5v17h-5v-6H10v6H5z"/><path fill="currentColor" opacity=".65" d="m12 5 4-4 4 4-4 3z"/></svg></div>'; }
  function initials(p) { return '<div class="avatar">' + esc(p.initials || 'H') + '</div>'; }
  function formatDate(date) { var d = new Date(String(date) + 'T12:00:00'); return Number.isNaN(d.getTime()) ? esc(date) : d.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}); }
  function statusHTML(status) { return '<span class="status ' + esc(String(status).toLowerCase()) + '"><i class="dot"></i>' + esc(status) + '</span>'; }
  function button(label, action, extra, clazz) { return '<button type="button" class="btn ' + (clazz || '') + '" data-action="' + action + '" ' + (extra || '') + '>' + label + '</button>'; }
  function navButton(label, page, clazz, ico) { return '<button type="button" class="btn ' + (clazz || '') + '" data-nav="' + page + '">' + (ico ? icon(ico) : '') + label + '</button>'; }
  function canView(id) {
    var nav = NAV.find(function (n) { return n.id === id; });
    return !!(nav && (!nav.roles || nav.roles.includes(state.role)));
  }
  function activeAccount() { return ACCOUNTS[state.role] || ACCOUNTS.owner; }
  function saveData() { write('hnt-demo-events', state.events); write('hnt-demo-people', state.people); write('hnt-demo-activity', state.activity); }
  function pushActivity(title, detail, symbol) {
    state.activity.unshift({title:title,detail:detail,date:'Just now',icon:symbol || 'check'});
    state.activity = state.activity.slice(0,24);
    saveData();
  }
  function toast(message) {
    var host = document.getElementById('toast');
    if (!host) return;
    var div = document.createElement('div');
    div.className = 'toast';
    div.innerHTML = icon('check') + '<span>' + esc(message) + '</span>';
    host.appendChild(div);
    setTimeout(function () { div.remove(); }, 3200);
  }
  function pageFromHash() {
    var route = (location.hash || '#overview').slice(1);
    return canView(route) ? route : 'overview';
  }

  function loginPage() {
    var current = ACCOUNTS[state.selected] || ACCOUNTS.owner;
    var cards = Object.keys(ACCOUNTS).map(function (key) {
      var account = ACCOUNTS[key];
      return '<button type="button" class="login-role ' + (key === state.selected ? 'selected' : '') + '" data-action="preset" data-key="' + key + '" aria-pressed="' + (key === state.selected ? 'true' : 'false') + '">' +
        icon(key === 'owner' ? 'shield' : key === 'moderator' ? 'calendar' : key === 'agent' ? 'users' : 'eye') +
        '<strong>' + esc(account.role) + '</strong><span>' + esc(account.caption) + '</span></button>';
    }).join('');
    return '<main class="login-wrap"><div class="login-frame">' +
      '<section class="login-story"><div class="login-logo">' + brandMark() +
      '<div><div class="brand-word">HARI NG TARI</div><div class="brand-caption">Concept project / UI showcase</div></div></div>' +
      '<div class="eyebrow">Personal practice project</div>' +
      '<h1>A concept built to <em>learn,</em> not to launch.</h1>' +
      '<p>Explore a thoughtfully designed event-operations interface. The original project was never deployed or used in production. Everything in this showcase is fictional.</p>' +
      '<div class="login-detail"><span>' + icon('check') + 'Static, standalone demo</span><span>' + icon('check') + 'Fictional records</span><span>' + icon('check') + 'No wagering or payments</span></div></section>' +
      '<section class="login-card" aria-label="Enter the demo"><span class="login-top-note"><i class="dot"></i> PORTFOLIO PREVIEW / PRACTICE ONLY</span>' +
      '<h2>Explore the project</h2><p>Choose a sample role or sign in using the public demo credentials.</p>' +
      '<div class="login-cards">' + cards + '</div>' +
      '<form id="login-form">' +
      '<div class="field"><label class="form-label" for="login-email">Demo email</label><input id="login-email" name="email" type="email" autocomplete="off" value="' + esc(current.email) + '" required></div>' +
      '<div class="field"><label class="form-label" for="login-password">Demo password</label><input id="login-password" name="password" type="text" autocomplete="off" value="' + esc(current.password) + '" required></div>' +
      '<button class="btn primary wide" type="submit">Enter showcase ' + icon('arrow') + '</button>' +
      (state.loginError ? '<p class="login-warning" role="alert">' + esc(state.loginError) + '</p>' : '') + '</form>' +
      '<div class="login-help"><strong>Not a live product.</strong> This interface was created for learning and portfolio presentation. The original system was never deployed, and this demo does not connect to any real accounts, events, betting, or financial services.</div>' +
      '<div class="login-footer">Illustrative UI only · Sample credentials are public by design</div></section></div></main>';
  }

  function sidebar(account) {
    var navItems = NAV.filter(function (n) { return canView(n.id); }).map(function (n, i) {
      var divider = i === 4 || n.id === 'about' ? '<div class="nav-label">' + (n.id === 'about' ? 'Project' : 'Management') + '</div>' : '';
      return divider + '<button type="button" class="nav-item ' + (state.route === n.id ? 'active' : '') + '" data-nav="' + n.id + '" aria-current="' + (state.route === n.id ? 'page' : 'false') + '">' + icon(n.icon) + esc(n.label) + '</button>';
    }).join('');
    return '<aside class="sidebar ' + (state.mobileOpen ? 'open' : '') + '" aria-label="Main navigation">' +
      '<div class="brand">' + brandMark() + '<div><div class="brand-word">Hari ng Tari</div><div class="brand-caption">Portfolio demo</div></div></div>' +
      '<div class="sidebar-note"><strong>Practice project · never deployed</strong><p>Fictional data only. Not a real-world or production system.</p></div>' +
      '<div class="nav-label">Workspace</div><nav class="nav-list">' + navItems + '</nav>' +
      '<div class="sidebar-bottom"><div class="identity">' + initials(account) + '<div style="min-width:0;flex:1"><strong class="truncate">' + esc(account.name) + '</strong><span>' + esc(account.role) + ' · Demo account</span></div>' +
      button(icon('logout'),'logout','aria-label="Exit demo"','ghost icon-btn small-btn') +
      '</div></div></aside>';
  }

  function workspace() {
    var account = activeAccount();
    state.route = canView(state.route) ? state.route : 'overview';
    var nav = NAV.find(function (n) { return n.id === state.route; });
    return '<div class="main-shell">' +
      '<div class="mobile-overlay ' + (state.mobileOpen ? 'open' : '') + '" data-action="mobile-close"></div>' +
      sidebar(account) +
      '<main class="workspace"><header class="topbar"><div class="topbar-left">' +
      button(icon('menu'),'mobile-open','aria-label="Open navigation"','ghost icon-btn mobile-menu') +
      '<div class="breadcrumb"><span>Workspace</span><span class="separator">/</span><strong>' + esc(nav ? nav.label : 'Overview') + '</strong></div></div>' +
      '<div class="topbar-right"><span class="topbar-tag">DEMO ENVIRONMENT</span>' +
      button(icon(state.theme === 'dark' ? 'sun' : 'moon'),'theme','aria-label="Toggle light and dark theme" title="Toggle theme"','ghost icon-btn') +
      initials(account) + '</div></header>' +
      '<div class="workspace-body"><div class="demo-banner">' + icon('info') +
      '<div><strong>Practice and portfolio showcase only.</strong> The original Hari ng Tari project was never deployed. All records shown here are fictional; there are no real accounts, payments or wagering.</div>' +
      '<span class="pill gold-pill">SIMULATION</span></div>' +
      renderPage() + footer() + '</div></main></div>' + (state.modal ? modalHTML() : '');
  }

  function footer() {
    return '<footer class="footer"><span>© Hari ng Tari · Personal learning project · Not a deployed commercial system</span>' +
      '<span>All names, dates and metrics are simulated · ' +
      '<button type="button" class="btn link-btn" data-nav="about">About the project</button></span></footer>';
  }

  function pageHead(title, description, actions) {
    return '<div class="page-head"><div><h1>' + esc(title) + '</h1><p class="page-sub">' + esc(description) + '</p></div><div class="section-actions">' + (actions || '') + '</div></div>';
  }
  function kpi(title, number, foot, ico) {
    return '<div class="card kpi"><div class="kpi-title"><span>' + esc(title) + '</span>' + icon(ico) + '</div>' +
      '<div class="kpi-value">' + esc(number) + '</div><div class="kpi-foot">' + esc(foot) + '</div></div>';
  }
  function eventMini(item) {
    return '<div class="event-tile"><div class="tile-symbol">' + icon('calendar') + '</div>' +
      '<div style="min-width:0"><h3>' + esc(item.title) + '</h3><p>' + esc(item.venue) + ' · ' + formatDate(item.date) + '</p></div>' +
      '<div class="tile-right">' + statusHTML(item.status) + button('Details','view-event','data-id="' + esc(item.id) + '"','ghost small-btn') + '</div></div>';
  }
  function activityList(items, limit) {
    var list = items.slice(0,limit || items.length);
    return list.length ? list.map(function (item) {
      return '<div class="activity-item"><div class="activity-icon">' + icon(item.icon) + '</div>' +
        '<div><div class="activity-title">' + esc(item.title) + '</div><div class="activity-desc">' + esc(item.detail) + '</div></div>' +
        '<div class="activity-date">' + esc(item.date) + '</div></div>';
    }).join('') : '<div class="empty">Nothing to show yet.</div>';
  }

  function overviewPage() {
    var account = activeAccount();
    var ongoing = state.events.filter(function(e) { return e.status === 'Ongoing'; }).length;
    var upcoming = state.events.filter(function(e) { return e.status === 'Scheduled'; }).length;
    var spotlight = state.events.find(function(e) { return e.status === 'Ongoing'; }) || state.events[0];
    var greeting = state.role === 'owner' ? 'Operations overview' : state.role === 'moderator' ? 'Moderator workspace' : state.role === 'agent' ? 'Agent overview' : 'Member overview';
    var actions = navButton('Browse events','events','primary','calendar') + navButton('About this project','about','ghost','info');
    return pageHead(greeting,'Welcome, ' + account.name.split(' ')[0] + '. Your data is simulated for this portfolio preview.',
        button(icon('refresh') + ' Reset demo','reset-confirm','','ghost')) +
      '<div class="kpi-grid">' +
      kpi('Demo events',state.events.length,'Sample event records','calendar') +
      kpi('Active showcases',ongoing,'Illustrative status','spark') +
      kpi('Upcoming events',upcoming,'Fictional schedule','clock') +
      kpi('Sample results',RESULTS.length,'Historical mock entries','award') + '</div>' +
      '<div class="content-grid"><div class="card hero-card"><div class="eyebrow">Welcome to the concept</div>' +
      '<div class="hero-title">A clearer way to explore events and records.</div>' +
      '<p class="hero-copy">Designed as a front-end exercise in responsive dashboards, role-based interfaces, event lifecycle views, and data presentation. Not connected to any real operation.</p>' +
      '<div class="hero-actions">' + actions + '</div></div>' +
      '<div class="card card-pad"><div class="card-header"><div><h2>Featured sample</h2><p>Fictional event preview</p></div>' + icon('layers') + '</div>' +
      (spotlight ? '<div class="feature-list">' +
       '<div class="feature-line"><div><div class="feature-title">' + esc(spotlight.title) + '</div><div class="feature-detail">' + esc(spotlight.venue) + '</div></div>' + statusHTML(spotlight.status) + '</div>' +
       '<div class="feature-line"><div><div class="feature-title">Schedule</div><div class="feature-detail">' + formatDate(spotlight.date) + ' · ' + esc(spotlight.time) + '</div></div>' + icon('clock') + '</div>' +
       '<div class="feature-line"><div><div class="feature-title">Event details</div><div class="feature-detail">View the non-interactive showcase record</div></div>' + button('Open','view-event','data-id="' + esc(spotlight.id) + '"','small-btn') + '</div>' +
       '</div>' : '<div class="empty">No sample events.</div>') + '</div></div>' +
      '<div class="content-grid"><section class="card card-pad"><div class="card-header"><div><h2>Recent demo events</h2><p>Records from the mock event directory</p></div>' +
      navButton('View all','events','small-btn ghost','arrow') + '</div><div class="event-list">' +
      (state.events.length ? state.events.slice(0,3).map(eventMini).join('') : '<div class="empty">No events created.</div>') +
      '</div></section><section class="card card-pad"><div class="card-header"><div><h2>Sample activity</h2><p>Demonstration-only updates</p></div>' +
      navButton('All activity','activity','small-btn ghost','arrow') + '</div>' + activityList(state.activity,4) + '</section></div>';
  }

  function eventsPage() {
    var privileged = state.role === 'owner' || state.role === 'moderator';
    var filtered = state.events.filter(function (e) {
      var query = state.eventSearch.toLowerCase();
      return (state.eventStatus === 'All' || state.eventStatus === e.status) &&
        (e.title.toLowerCase().includes(query) || e.venue.toLowerCase().includes(query) || e.id.toLowerCase().includes(query));
    });
    var rows = filtered.map(function (e) {
      return '<tr><td><strong>' + esc(e.title) + '</strong><div class="subtle tiny">' + esc(e.id) + '</div></td>' +
        '<td>' + esc(e.venue) + '</td><td>' + formatDate(e.date) + '<div class="subtle tiny">' + esc(e.time) + '</div></td>' +
        '<td>' + statusHTML(e.status) + '</td><td><div class="actions-cell">' +
        button(icon('eye') + ' View','view-event','data-id="' + esc(e.id) + '"','small-btn ghost') +
        (privileged ? button(icon('edit') + ' Edit','edit-event','data-id="' + esc(e.id) + '"','small-btn ghost') : '') +
        (state.role === 'owner' ? button(icon('trash'),'delete-event','data-id="' + esc(e.id) + '" aria-label="Remove sample event"','small-btn danger icon-btn') : '') +
        '</div></td></tr>';
    }).join('');
    return pageHead('Event directory','View fictional schedules and sample event metadata.',
        (privileged ? button(icon('plus') + ' Add demo event','new-event','','primary') : '') +
        button(icon('download') + ' Export samples','export-events','','ghost')) +
      '<section class="card card-pad" style="margin-top:18px"><div class="table-controls"><div class="search-wrap">' +
      icon('search') + '<input id="event-search" data-filter="events" type="search" aria-label="Search sample events" placeholder="Search sample events..." value="' + esc(state.eventSearch) + '"></div>' +
      '<select class="select-compact" id="event-status" data-filter="event-status" aria-label="Filter by status">' +
      ['All','Ongoing','Scheduled','Completed'].map(function(s) { return '<option value="' + s + '"' + (state.eventStatus === s ? ' selected' : '') + '>' + s + ' statuses</option>'; }).join('') +
      '</select></div>' +
      (filtered.length ? '<div class="table-scroll"><table class="data-table"><thead><tr><th>Event</th><th>Venue</th><th>Schedule</th><th>Status</th><th style="text-align:right">Actions</th></tr></thead><tbody>' + rows + '</tbody></table></div>'
      : '<div class="empty">' + icon('search') + '<p>No matching demo events. Try another search or status.</p></div>') +
      '<div class="table-caption">' + filtered.length + ' of ' + state.events.length + ' illustrative records · Local demo changes are session-only.</div></section>' +
      '<div class="notice-box" style="margin-top:12px"><strong>Not live events.</strong> This is a UI portfolio exercise. Event creation and editing update browser-only sample data; there is no server, livestream, betting, or real event scheduling.</div>';
  }

  function resultCard(r) {
    return '<article class="card result-card"><div class="result-card-top"><span class="mini-heading">' + esc(r.round) + '</span><span class="small muted">' + formatDate(r.date) + '</span></div>' +
      '<h3 style="margin-top:8px">' + esc(r.event) + '</h3>' +
      '<div class="roundline"><div><div class="side-name">' + esc(r.left) + '</div><div class="side-label">Side A</div></div>' +
      '<div class="result-score">' + esc(r.score) + '</div><div style="text-align:right"><div class="side-name">' + esc(r.right) + '</div><div class="side-label">Side B</div></div></div>' +
      '<div class="winner-tag">' + icon('award',13) + ' Sample outcome: ' + esc(r.winner) + '</div></article>';
  }
  function resultsPage() {
    var filtered = RESULTS.filter(function (r) {
      var s = state.resultSearch.toLowerCase();
      return r.event.toLowerCase().includes(s) || r.winner.toLowerCase().includes(s) || r.round.toLowerCase().includes(s);
    });
    return pageHead('Sample results','Illustrative records used to demonstrate historical views.') +
      '<div class="notice-box" style="margin-top:17px;margin-bottom:14px"><strong>Entirely fictional outcomes.</strong> Nothing on this page represents real matches, odds, betting results or winnings.</div>' +
      '<div class="table-controls"><div class="search-wrap">' + icon('search') +
      '<input type="search" id="result-search" data-filter="results" placeholder="Search fictional results..." aria-label="Search fictional results" value="' + esc(state.resultSearch) + '"></div>' +
      '<span class="small muted">' + filtered.length + ' sample entries</span></div>' +
      (filtered.length ? '<div class="result-grid">' + filtered.map(resultCard).join('') + '</div>'
      : '<div class="empty">No results match your search.</div>');
  }

  function activityPage() {
    return pageHead('Activity timeline','Examples of audit-style updates in a dashboard UI.') +
      '<div class="content-grid"><section class="card card-pad"><div class="card-header"><div><h2>Activity feed</h2><p>Sample and locally generated events</p></div>' +
      '<span class="pill">' + state.activity.length + ' records</span></div>' + activityList(state.activity) + '</section>' +
      '<section class="card card-pad"><div class="card-header"><div><h2>What this demonstrates</h2><p>Activity logging UI concepts</p></div>' + icon('file') + '</div>' +
      '<div class="help-list">' +
      ['Readable action summaries','Timeline grouping and timestamps','Contextual record descriptions','Session-scoped changes without a backend'].map(function (s) {
        return '<div class="help-item">' + icon('check') + '<span>' + esc(s) + '</span></div>';
      }).join('') + '</div><div class="divider"></div>' +
      '<p class="small muted">This is not an auditable production log. Everything shown is fictional or generated locally by this demo session.</p></section></div>';
  }

  function peoplePage() {
    var entries = state.people.filter(function(p) {
      var s = state.peopleSearch.toLowerCase();
      return (p.name.toLowerCase().includes(s) || p.username.toLowerCase().includes(s) || p.role.toLowerCase().includes(s));
    });
    var rows = entries.map(function (p) {
      return '<tr><td><div class="inline"><div class="avatar sm">' + esc(p.initials) + '</div><div><strong>' + esc(p.name) + '</strong><div class="subtle tiny">@' + esc(p.username) + '</div></div></div></td>' +
        '<td>' + esc(p.role) + '</td><td>' + statusHTML(p.status) + '</td><td>' + formatDate(p.joined) + '</td>' +
        '<td><div class="actions-cell">' + button('Details','view-person','data-id="' + esc(p.id) + '"','small-btn ghost') + '</div></td></tr>';
    }).join('');
    return pageHead('People directory','Fictional user profiles illustrating role-aware directory interfaces.') +
      '<div class="card card-pad" style="margin-top:18px"><div class="table-controls"><div class="search-wrap">' + icon('search') +
      '<input id="people-search" data-filter="people" type="search" placeholder="Search sample users..." aria-label="Search sample users" value="' + esc(state.peopleSearch) + '"></div>' +
      '<span class="pill">' + entries.length + ' profiles</span></div>' +
      (entries.length ? '<div class="table-scroll"><table class="data-table"><thead><tr><th>Demo profile</th><th>Role</th><th>Status</th><th>Sample joined date</th><th></th></tr></thead><tbody>' + rows + '</tbody></table></div>'
      : '<div class="empty">No sample profiles found.</div>') +
      '<p class="table-caption">Names and usernames are invented. No real user directory or account database is connected.</p></div>';
  }

  function insightsPage() {
    var points = [34,47,42,68,57,81,74];
    var labels = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    var bars = points.map(function(p,i) {
      return '<div class="bar-col"><div class="bar-track"><div class="bar-fill" style="height:' + p + '%" title="Illustrative activity: ' + p + '"></div></div><span>' + labels[i] + '</span></div>';
    }).join('');
    var counts = ['Scheduled','Ongoing','Completed'].map(function(status) {
      var n = state.events.filter(function(e) { return e.status === status; }).length;
      return '<div class="feature-line"><span class="feature-title">' + esc(status) + '</span><span class="pill">' + n + ' mock events</span></div>';
    }).join('');
    return pageHead('Demo insights','Example dashboard analytics, with entirely synthetic numbers.',
      button(icon('download') + ' Export events','export-events','','ghost')) +
      '<div class="kpi-grid">' + kpi('Illustrative visits','1,284','Invented weekly figure','eye') +
      kpi('Example engagement','74%','Not measured from users','chart') +
      kpi('Sample events',state.events.length,'Browser-only records','calendar') +
      kpi('Demo profiles',state.people.length,'Invented member profiles','users') + '</div>' +
      '<div class="content-grid"><div class="card card-pad"><div class="card-header"><div><h2>Weekly activity illustration</h2><p>Static visualization of synthetic usage counts</p></div><span class="pill">Example data</span></div>' +
      '<div class="chart-bars" role="img" aria-label="Fictional weekly activity bar chart from Monday to Sunday">' + bars + '</div></div>' +
      '<div class="card card-pad"><div class="card-header"><div><h2>Event status</h2><p>Calculated from current local sample records</p></div></div><div class="feature-list">' + counts + '</div>' +
      '<div class="divider"></div><p class="small muted">Metrics are for UI demonstration only. There is no analytics collection or live reporting in this website.</p></div></div>';
  }

  function aboutPage() {
    return pageHead('About this project','Background and scope of the Hari ng Tari practice application.') +
      '<div class="content-grid"><section class="card card-pad"><div class="eyebrow">Project context</div>' +
      '<h2 style="font-size:20px;margin:10px 0">Built for practice. Never released as a real service.</h2>' +
      '<p class="muted" style="line-height:1.85">Hari ng Tari began as a personal coding exercise exploring multi-role systems, event administration, structured records, and dashboard design. ' +
      'The original application was <strong style="color:var(--text)">never deployed or operated in production</strong>. ' +
      'This separate portfolio demo is a redesigned, safe visualization of the interface concept.</p>' +
      '<div class="divider"></div><h3>Skills demonstrated</h3>' +
      '<div class="help-list">' +
      ['Responsive, component-style interface design','Role-specific navigation and dashboards','Data presentation, search, filtering and exports','Accessible dialogs, forms, themes and feedback','Event metadata CRUD with local state','Static hosting and deployment-friendly architecture'].map(function(s) {
        return '<div class="help-item">' + icon('check') + '<span>' + esc(s) + '</span></div>';
      }).join('') + '</div></section>' +
      '<section class="card card-pad"><div class="card-header"><div><h2>Demo boundaries</h2><p>Clear separation from a real system</p></div>' + icon('shield') + '</div>' +
      '<div class="feature-list">' +
      ['No production deployment of the original project','No real users, subscriptions or accounts','No payments, wagering, wallets, payouts, or odds','No real events, results or video streams','No database, API integration, or external service','All editable data stays in this browser session'].map(function(s) {
        return '<div class="feature-line"><div class="inline">' + icon('check') + '<span class="small">' + esc(s) + '</span></div></div>';
      }).join('') + '</div><div class="divider"></div>' +
      '<div class="notice-box"><strong>Why this limitation matters.</strong> The demonstration is intended to showcase software and UI skills, not to offer or simulate an operational betting platform.</div></section></div>';
  }

  function settingsPage() {
    var account = activeAccount();
    return pageHead('Demo settings','Controls for your local portfolio-preview experience.') +
      '<div class="content-grid"><section class="card card-pad"><div class="card-header"><div><h2>Appearance</h2><p>Personalize this browser-only interface</p></div>' + icon('settings') + '</div>' +
      '<div class="toggle-line"><div><strong class="small">Color theme</strong><p class="small muted">Switch between dark and light layouts.</p></div>' +
      button(icon(state.theme === 'dark' ? 'sun' : 'moon') + (state.theme === 'dark' ? ' Light mode' : ' Dark mode'),'theme','','small-btn') + '</div>' +
      '<div class="toggle-line"><div><strong class="small">Restore original mock data</strong><p class="small muted">Undo changes to fictional events and member profiles.</p></div>' +
      button(icon('refresh') + ' Reset','reset-confirm','','small-btn danger') + '</div>' +
      '<div class="toggle-line"><div><strong class="small">Switch demo role</strong><p class="small muted">Return to the public role-selection screen.</p></div>' +
      button(icon('logout') + ' Switch','logout','','small-btn') + '</div></section>' +
      '<section class="card card-pad"><div class="card-header"><div><h2>Current demo account</h2><p>Not a registered user</p></div>' + icon('shield') + '</div>' +
      '<div class="account-banner">' + initials(account) + '<div><strong>' + esc(account.name) + '</strong><p class="small muted">' + esc(account.role) + ' · Example account</p></div></div>' +
      '<div class="info-grid" style="margin-top:12px">' +
      '<div class="info-item"><span>Account type</span><strong>Public demo</strong></div>' +
      '<div class="info-item"><span>Data storage</span><strong>Browser session</strong></div>' +
      '<div class="info-item"><span>Backend services</span><strong>Not connected</strong></div>' +
      '<div class="info-item"><span>Original production use</span><strong>Never deployed</strong></div></div>' +
      '<div class="divider"></div><p class="small muted">All demo accounts share the published sample password. No real authentication takes place.</p></section></div>';
  }

  function renderPage() {
    switch (state.route) {
      case 'events': return eventsPage();
      case 'results': return resultsPage();
      case 'activity': return activityPage();
      case 'people': return peoplePage();
      case 'insights': return insightsPage();
      case 'about': return aboutPage();
      case 'settings': return settingsPage();
      default: return overviewPage();
    }
  }

  function modalHTML() {
    var m = state.modal;
    var body = '';
    if (m.type === 'view-event') {
      var e = state.events.find(function(x) { return x.id === m.id; });
      if (!e) return '';
      body = '<div class="modal-head"><div><div class="eyebrow">Sample event record</div><h2 style="margin-top:7px">' + esc(e.title) + '</h2><p>Illustrative metadata, not a live event.</p></div>' +
        button(icon('close'),'modal-close','aria-label="Close dialog"','ghost icon-btn') + '</div>' +
        '<div class="info-grid">' +
        '<div class="info-item"><span>Status</span><strong>' + esc(e.status) + '</strong></div>' +
        '<div class="info-item"><span>Sample rounds</span><strong>' + esc(e.rounds) + '</strong></div>' +
        '<div class="info-item"><span>Schedule</span><strong>' + formatDate(e.date) + '</strong></div>' +
        '<div class="info-item"><span>Time</span><strong>' + esc(e.time) + '</strong></div>' +
        '<div class="info-item full"><span>Venue</span><strong>' + esc(e.venue) + '</strong></div>' +
        '</div><div class="divider"></div><p class="small muted">' + esc(e.description) + '</p>' +
        '<div class="modal-footer">' + button('Close','modal-close','','ghost') +
        ((state.role === 'owner' || state.role === 'moderator') ? button(icon('edit') + ' Edit sample','edit-event','data-id="' + esc(e.id) + '"','primary') : '') + '</div>';
    } else if (m.type === 'new-event' || m.type === 'edit-event') {
      var edit = m.type === 'edit-event';
      var record = edit ? state.events.find(function(e){ return e.id === m.id; }) : null;
      if (edit && !record) return '';
      record = record || {title:'',venue:'',date:'2026-11-21',time:'15:00',status:'Scheduled',rounds:0,description:''};
      body = '<div class="modal-head"><div><div class="eyebrow">Browser-only editor</div><h2 style="margin-top:7px">' + (edit ? 'Edit sample event' : 'Create sample event') + '</h2><p>Changes are simulated and local to this browser session.</p></div>' +
        button(icon('close'),'modal-close','aria-label="Close dialog"','ghost icon-btn') + '</div>' +
        '<form id="event-form"><input type="hidden" name="id" value="' + esc(edit ? m.id : '') + '">' +
        '<div class="field"><label class="form-label" for="event-title">Event title</label><input name="title" id="event-title" maxlength="80" required placeholder="Fictional event name" value="' + esc(record.title) + '"></div>' +
        '<div class="field"><label class="form-label" for="event-venue">Venue</label><input name="venue" id="event-venue" maxlength="90" required placeholder="Fictional venue" value="' + esc(record.venue) + '"></div>' +
        '<div class="form-grid"><div class="field"><label class="form-label" for="event-date">Date</label><input type="date" id="event-date" name="date" value="' + esc(record.date) + '" required></div>' +
        '<div class="field"><label class="form-label" for="event-time">Time</label><input type="time" id="event-time" name="time" value="' + esc(record.time) + '" required></div>' +
        '<div class="field"><label class="form-label" for="event-status-field">Status</label><select name="status" id="event-status-field">' +
        ['Scheduled','Ongoing','Completed'].map(function(s){ return '<option value="' + s + '"' + (s === record.status ? ' selected' : '') + '>' + s + '</option>'; }).join('') +
        '</select></div><div class="field"><label class="form-label" for="event-rounds">Illustrative rounds</label>' +
        '<input type="number" min="0" max="99" id="event-rounds" name="rounds" value="' + esc(record.rounds) + '"></div>' +
        '<div class="field full"><label class="form-label" for="event-description">Description</label><textarea id="event-description" name="description" maxlength="300" placeholder="Example event notes">' + esc(record.description) + '</textarea></div></div>' +
        '<div class="modal-footer">' + button('Cancel','modal-close','','ghost') +
        '<button class="btn primary" type="submit">' + icon('check') + (edit ? 'Save sample' : 'Create sample') + '</button></div></form>';
    } else if (m.type === 'delete-event' || m.type === 'reset-confirm') {
      var isDelete = m.type === 'delete-event';
      var target = isDelete ? state.events.find(function(e){ return e.id === m.id; }) : null;
      body = '<div class="modal-head"><div><div class="eyebrow">Confirm local change</div><h2 style="margin-top:7px">' +
        (isDelete ? 'Remove sample event?' : 'Reset the demo?') + '</h2><p>' +
        (isDelete ? 'This removes the fictional event from this browser session.' : 'Restore the original sample events, profiles and activity records.') +
        '</p></div>' + button(icon('close'),'modal-close','aria-label="Close dialog"','ghost icon-btn') + '</div>' +
        (target ? '<div class="notice-box">' + esc(target.title) + '</div>' : '') +
        '<div class="modal-footer">' + button('Cancel','modal-close','','ghost') +
        button(isDelete ? 'Remove event' : 'Reset samples',isDelete ? 'confirm-delete' : 'confirm-reset','data-id="' + esc(m.id || '') + '"','danger') + '</div>';
    } else if (m.type === 'view-person') {
      var person = state.people.find(function(p){ return p.id === m.id; });
      if (!person) return '';
      body = '<div class="modal-head"><div><div class="eyebrow">Fictional directory profile</div><h2 style="margin-top:7px">' + esc(person.name) + '</h2><p>Created for visual demonstration only.</p></div>' +
        button(icon('close'),'modal-close','aria-label="Close dialog"','ghost icon-btn') + '</div>' +
        '<div class="account-banner"><div class="avatar">' + esc(person.initials) + '</div><div><strong>' + esc(person.name) + '</strong><p class="muted small">@' + esc(person.username) + '</p></div></div>' +
        '<div class="info-grid" style="margin-top:12px"><div class="info-item"><span>Example role</span><strong>' + esc(person.role) + '</strong></div>' +
        '<div class="info-item"><span>Mock account status</span><strong>' + esc(person.status) + '</strong></div>' +
        '<div class="info-item"><span>Sample joined date</span><strong>' + formatDate(person.joined) + '</strong></div>' +
        '<div class="info-item"><span>Record ID</span><strong>' + esc(person.id) + '</strong></div></div>' +
        '<div class="modal-footer">' + button('Close','modal-close','','ghost') +
        (state.role === 'owner' ? button('Toggle sample status','person-status','data-id="' + esc(person.id) + '"','primary') : '') + '</div>';
    }
    return '<div class="modal-screen" data-action="modal-backdrop"><div class="modal" role="dialog" aria-modal="true" aria-label="Demo details">' + body + '</div></div>';
  }

  function render() {
    var root = document.getElementById('app');
    if (!root) return;
    root.innerHTML = state.role ? workspace() : loginPage();
    document.title = (state.role ? (NAV.find(function(n){ return n.id===state.route; }) || {label:'Overview'}).label : 'Demo access') + ' | Hari ng Tari · Practice Project';
    if (state.modal) {
      var first = document.querySelector('.modal button, .modal input');
      if (first) first.focus();
    }
  }
  function rerenderRetainFocus(filterId) {
    var active = document.activeElement;
    var pos = active && active.selectionStart;
    render();
    var target = document.getElementById(filterId);
    if (target) {
      target.focus();
      if (typeof pos === 'number' && target.setSelectionRange) {
        try { target.setSelectionRange(pos,pos); } catch(_) {}
      }
    }
  }
  function login(email,password) {
    var key = Object.keys(ACCOUNTS).find(function(k){return ACCOUNTS[k].email.toLowerCase() === email.toLowerCase() && ACCOUNTS[k].password === password;});
    if (!key) { state.loginError = 'Use one of the published demo accounts and its sample password.'; render(); return; }
    state.role = key; state.loginError = ''; state.route = 'overview';
    write('hnt-demo-role',key);
    location.hash = '#overview'; render();
    toast('You are viewing the ' + ACCOUNTS[key].role.toLowerCase() + ' demo.');
  }
  function changeRoute(route) {
    if (!canView(route)) return;
    state.route = route; state.mobileOpen = false; state.modal = null;
    location.hash = '#' + route;
    window.scrollTo(0,0);
    render();
  }
  function exportEvents() {
    var rows = [['ID','Title','Venue','Date','Time','Status','Rounds']].concat(state.events.map(function (e) {
      return [e.id,e.title,e.venue,e.date,e.time,e.status,e.rounds];
    }));
    var csv = rows.map(function(row){return row.map(function(v){return '"' + String(v).replace(/"/g,'""') + '"';}).join(',');}).join('\r\n');
    var blob = new Blob([csv],{type:'text/csv;charset=utf-8'});
    var url = URL.createObjectURL(blob), a = document.createElement('a');
    a.href = url; a.download = 'hari-ng-tari-fictional-events.csv'; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function(){URL.revokeObjectURL(url);},1000);
    toast('Sample CSV exported.');
  }

  document.addEventListener('submit', function(ev) {
    if (ev.target.id === 'login-form') {
      ev.preventDefault();
      login(String(ev.target.elements.email.value).trim(), String(ev.target.elements.password.value));
    }
    if (ev.target.id === 'event-form') {
      ev.preventDefault();
      if (!(state.role === 'owner' || state.role === 'moderator')) return;
      var f = ev.target.elements;
      var title = String(f.title.value).trim(), venue = String(f.venue.value).trim();
      if (!title || !venue || !f.date.value || !f.time.value) { toast('Complete the required sample fields.'); return; }
      var id = String(f.id.value);
      var isEditing = !!id && state.events.some(function(e) { return e.id === id; });
      var record = {
        id: isEditing ? id : 'evt-' + String(Date.now()),
        title:title.slice(0,80),venue:venue.slice(0,90),
        date:String(f.date.value),time:String(f.time.value),status:String(f.status.value),
        rounds:Math.max(0,Math.min(99,Number(f.rounds.value)||0)),
        description:String(f.description.value).trim().slice(0,300) || 'Fictional event created for portfolio demonstration.'
      };
      if (!['Scheduled','Ongoing','Completed'].includes(record.status)) record.status = 'Scheduled';
      if (isEditing) state.events = state.events.map(function(e){return e.id===id ? record : e;});
      else state.events.unshift(record);
      pushActivity(isEditing ? 'Sample event updated' : 'Sample event created',record.title + ' • Local demo record','calendar');
      state.modal = null; render(); toast(isEditing ? 'Sample event updated locally.' : 'Sample event created locally.');
    }
  });

  document.addEventListener('click', function(ev) {
    var nav = ev.target.closest('[data-nav]');
    if (nav) { changeRoute(nav.dataset.nav); return; }
    var control = ev.target.closest('[data-action]');
    if (!control) return;
    var action = control.dataset.action, id = control.dataset.id;
    if (action === 'preset') {
      if (ACCOUNTS[control.dataset.key]) { state.selected=control.dataset.key;state.loginError='';render(); }
    } else if (action === 'logout') {
      state.role=null;state.modal=null;state.route='overview';state.mobileOpen=false;
      try { sessionStorage.removeItem('hnt-demo-role'); } catch(_){}
      location.hash = '#overview'; render();
    } else if (action === 'theme') {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      setTheme(state.theme); render(); toast('Theme preference updated.');
    } else if (action === 'mobile-open') {
      state.mobileOpen=true; render();
    } else if (action === 'mobile-close') {
      state.mobileOpen=false; render();
    } else if (action === 'modal-close' || action === 'modal-backdrop') {
      if (action === 'modal-backdrop' && ev.target !== control) return;
      state.modal=null; render();
    } else if (action === 'view-event' && state.role) {
      state.modal={type:'view-event',id:id}; render();
    } else if (action === 'edit-event' && ['owner','moderator'].includes(state.role)) {
      state.modal={type:'edit-event',id:id}; render();
    } else if (action === 'new-event' && ['owner','moderator'].includes(state.role)) {
      state.modal={type:'new-event'}; render();
    } else if (action === 'delete-event' && state.role === 'owner') {
      state.modal={type:'delete-event',id:id}; render();
    } else if (action === 'confirm-delete' && state.role === 'owner') {
      var removed=state.events.find(function(e){return e.id===id;});
      state.events=state.events.filter(function(e){return e.id!==id;});
      if(removed) pushActivity('Sample event removed',removed.title+' • Browser-only change','trash');
      state.modal=null;render();toast('Sample event removed from this session.');
    } else if (action === 'reset-confirm') {
      state.modal={type:'reset-confirm'};render();
    } else if (action === 'confirm-reset') {
      state.events=INITIAL_EVENTS.map(function(e){return Object.assign({},e);});
      state.people=INITIAL_MEMBERS.map(function(p){return Object.assign({},p);});
      state.activity=START_ACTIVITY.map(function(a){return Object.assign({},a);});
      saveData();state.modal=null;state.eventSearch='';state.peopleSearch='';state.eventStatus='All';state.resultSearch='';
      render();toast('Original fictional data restored.');
    } else if (action === 'view-person' && ['owner','agent'].includes(state.role)) {
      state.modal={type:'view-person',id:id};render();
    } else if (action === 'person-status' && state.role === 'owner') {
      var person=state.people.find(function(p){return p.id===id;});
      if (person) {
        person.status = person.status === 'Active' ? 'Inactive' : 'Active';
        pushActivity('Fictional profile status updated',person.name+' • '+person.status,'users');
        state.modal={type:'view-person',id:id};render();toast('Sample profile updated locally.');
      }
    } else if (action === 'export-events') exportEvents();
  });

  document.addEventListener('input', function(ev) {
    if (!ev.target.dataset.filter) return;
    var kind = ev.target.dataset.filter;
    if (kind==='events'){state.eventSearch=ev.target.value;rerenderRetainFocus('event-search');}
    else if(kind==='people'){state.peopleSearch=ev.target.value;rerenderRetainFocus('people-search');}
    else if(kind==='results'){state.resultSearch=ev.target.value;rerenderRetainFocus('result-search');}
  });
  document.addEventListener('change', function(ev) {
    if (ev.target.dataset.filter === 'event-status') {state.eventStatus=ev.target.value;render();}
  });
  document.addEventListener('keydown',function(ev) {
    if(ev.key==='Escape') {
      if(state.modal){state.modal=null;render();}
      else if(state.mobileOpen){state.mobileOpen=false;render();}
    }
  });
  window.addEventListener('hashchange',function() {
    if(!state.role)return;
    state.route=pageFromHash();state.modal=null;state.mobileOpen=false;render();
  });
  state.route = pageFromHash();
  render();
})();
