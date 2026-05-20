import React, { useState } from 'react';

import { Table, CheckCircle, Clock, Package, Database, Building2, Zap, Shield, Droplet } from "lucide-react";

const Resources = () => {
  // التعديل هنا: شيل كلمة React. قبل useState
  const [activeTab, setActiveTab] = useState('all');
  

  // 1. البيانات (الداتا)
  const stats = [
    { id: 1, title: "Completed Stages", value: "3", subtext: "60% of total stages", icon: "fa-check", gradient: "from-green-50 to-green-100", border: "border-green-200", iconBg: "bg-green-500", textMain: "text-green-700", textDark: "text-green-900" },
    { id: 2, title: "In Progress", value: "1", subtext: "Currently working", icon: "fa-spinner", gradient: "from-orange-50 to-orange-100", border: "border-orange-200", iconBg: "bg-orange-500", textMain: "text-orange-700", textDark: "text-orange-900" },
    { id: 3, title: "Pending Stages", value: "1", subtext: "Not yet started", icon: "fa-clock", gradient: "from-gray-50 to-gray-100", border: "border-gray-200", iconBg: "bg-gray-400", textMain: "text-gray-700", textDark: "text-gray-900" },
    { id: 4, title: "Total Resources", value: "142", subtext: "Across all stages", icon: "fa-boxes-stacked", gradient: "from-blue-50 to-blue-100", border: "border-blue-200", iconBg: "bg-blue-500", textMain: "text-blue-700", textDark: "text-blue-900" }
  ];

  const finishingStages = [
    { id: "plumbing", title: "Plumbing", description: "Water systems and fixtures", icon: "fa-faucet-drip", progress: 100, items: "32/32", status: "Completed", color: "green", dateText: "Completed: Dec 15, 2024", duration: "12 days", iconName: "fa-calendar-check" },
    { id: "electricity", title: "Electricity", description: "Wiring and electrical systems", icon: "fa-bolt", progress: 100, items: "28/28", status: "Completed", color: "green", dateText: "Completed: Dec 20, 2024", duration: "10 days", iconName: "fa-calendar-check" },
    { id: "plastering", title: "Plastering", description: "Wall and ceiling finishing", icon: "fa-trowel", progress: 100, items: "24/24", status: "Completed", color: "green", dateText: "Completed: Dec 28, 2024", duration: "14 days", iconName: "fa-calendar-check" },
    { id: "ceramic", title: "Ceramic", description: "Tiles and ceramic installation", icon: "fa-table-cells-large", progress: 68, items: "34/50", status: "In Progress", color: "orange", dateText: "Started: Jan 2, 2025", duration: "Est. 5 days remaining", iconName: "fa-calendar", highlight: true },
    { id: "painting", title: "Painting", description: "Final paint and finishing", icon: "fa-paint-roller", progress: 0, items: "0/24", status: "Not Started", color: "gray", dateText: "Scheduled: Jan 10, 2025", duration: "Est. 8 days", iconName: "fa-calendar", disabled: true }
  ];

  const timelineEvents = [
    { id: 1, title: "Plumbing Materials Delivered", date: "Dec 10, 2024", desc: "All plumbing fixtures and pipes received and verified", items: "32 Items", verifier: "John Smith", status: "completed", icon: "fa-check", color: "green" },
    { id: 2, title: "Electrical Components Delivered", date: "Dec 15, 2024", desc: "Wires, sockets, and lighting fixtures received", items: "28 Items", verifier: "Sarah Johnson", status: "completed", icon: "fa-check", color: "green" },
    { id: 3, title: "Plastering Materials Delivered", date: "Dec 22, 2024", desc: "Cement, plaster mix, and finishing materials", items: "24 Items", verifier: "Mike Chen", status: "completed", icon: "fa-check", color: "green" },
    { id: 4, title: "Ceramic Tiles In Transit", date: "In Progress", desc: "Floor and wall tiles en route from supplier", items: "34/50 Items", verifier: "Expected: Jan 5, 2025", status: "in-progress", icon: "fa-truck", color: "orange" },
    { id: 5, title: "Painting Materials Scheduled", date: "Scheduled", desc: "Paint and finishing materials to be ordered", items: "0/24 Items", verifier: "Expected: Jan 12, 2025", status: "pending", icon: "fa-clock", color: "gray" }
  ];

const tableResources = [
  {
    id: 1,
    name: "Steel Beams",
    Icon: Package,
    CatIcon: Database,
    colorKey: "blue",
    cat: "Materials",
    qty: 120,
    max: 500,
    unit: "Tons",
    status: "Completed",
  },
  {
    id: 2,
    name: "Concrete Mix",
    Icon: Building2,
    CatIcon: Building2,
    colorKey: "teal",
    cat: "Construction",
    qty: 450,
    max: 500,
    unit: "m³",
    status: "In Progress",
  },
  {
    id: 3,
    name: "Solar Panels",
    Icon: Zap,
    CatIcon: Zap,
    colorKey: "amber",
    cat: "Energy",
    qty: 80,
    max: 200,
    unit: "Units",
    status: "Completed",
  },
  {
    id: 4,
    name: "Safety Helmets",
    Icon: Shield,
    CatIcon: Shield,
    colorKey: "coral",
    cat: "Equipment",
    qty: 200,
    max: 300,
    unit: "Pcs",
    status: "In Progress",
  },
  {
    id: 5,
    name: "Water Pipes",
    Icon: Droplet,
    CatIcon: Droplet,
    colorKey: "purple",
    cat: "Plumbing",
    qty: 300,
    max: 400,
    unit: "Meters",
    status: "Completed",
  },
];

  return (
    // التعديل هنا: أضفنا pt-32 عشان ينزل تحت الـ Navbar
    <div className="max-w-7xl mx-auto px-6 py-8 pt-15">
      
      {/* 1. Header */}
      <section id="page-header" className="mb-8 text-left">
        <h1 className="text-4xl font-bold text-slate-800 mb-2">Construction Resources</h1>
        <p className="text-gray-600">Track materials and progress across all finishing stages</p>
        <div className="flex items-center space-x-3 bg-blue-50 px-5 py-4 rounded-2xl border border-blue-100 mt-4 shadow-sm">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
          </div>
          <span className="text-sm text-blue-800 font-semibold">Data synced from DP TECH Application</span>
        </div>
      </section>

      {/* 2. Stats Grid */}
      <section className="mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item) => (
            <div key={item.id} className={`bg-gradient-to-br ${item.gradient} rounded-[2rem] p-6 border ${item.border} hover:shadow-xl transition-all duration-300 group`}>
              <div className="flex items-center justify-between mb-6">
                <div className={`w-14 h-14 ${item.iconBg} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform`}>
                  <i className={`fa-solid ${item.icon} text-white text-2xl`}></i>
                </div>
                <span className={`text-4xl font-black ${item.textMain}`}>{item.value}</span>
              </div>
              <div className="text-left">
                <h3 className={`text-base font-bold ${item.textDark} mb-1 uppercase tracking-tight`}>{item.title}</h3>
                <p className={`text-xs font-medium opacity-70 ${item.textMain}`}>{item.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

 {/* Category Bars */}
  <div className="space-y-3 mb-20">
    {[
      { name: "Plumbing", icon: "fa-faucet-drip", total: 32, done: 32, color: "blue", status: "Completed", date: "Dec 15, 2024", days: "12 days" },
      { name: "Electricity", icon: "fa-bolt", total: 28, done: 28, color: "yellow", status: "Completed", date: "Dec 20, 2024", days: "10 days" },
      { name: "Plastering", icon: "fa-trowel", total: 24, done: 24, color: "purple", status: "Completed", date: "Dec 28, 2024", days: "14 days" },
      { name: "Ceramic", icon: "fa-table-cells-large", total: 50, done: 34, color: "orange", status: "In Progress", date: "Jan 2, 2025", days: "5 days left", highlight: true },
      { name: "Painting", icon: "fa-paint-roller", total: 24, done: 0, color: "gray", status: "Not Started", date: "Jan 10, 2025", days: "Est. 8 days", disabled: true },
    ].map((cat) => {
      const pct = Math.round((cat.done / cat.total) * 100);
      const barColor = cat.disabled ? "bg-gray-300" : cat.highlight ? "bg-orange-400" : "bg-green-500";
      const border = cat.highlight ? "border-orange-300 ring-2 ring-orange-400/20" : "border-gray-200";
      return (
        <div key={cat.name} className={`bg-white border rounded-2xl p-5 ${border} ${cat.disabled ? "opacity-60" : ""}`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center
                ${cat.highlight ? "bg-orange-100 text-orange-600" : cat.disabled ? "bg-gray-100 text-gray-400" : "bg-green-100 text-green-600"}`}>
                <i className={`fa-solid ${cat.icon}`}></i>
              </div>
              <div>
                <p className="font-bold text-blue-900 text-sm">{cat.name}</p>
                <p className="text-xs text-gray-400">{cat.done}/{cat.total} items</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className={`text-lg font-bold ${cat.disabled ? "text-gray-400" : cat.highlight ? "text-orange-500" : "text-green-600"}`}>{pct}%</span>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full
                ${cat.status === "Completed" ? "bg-green-100 text-green-700" : cat.status === "In Progress" ? "bg-orange-100 text-orange-700" : "bg-gray-100 text-gray-500"}`}>
                {cat.status}
              </span>
            </div>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden mb-5">
            <div className={`h-full rounded-full ${barColor} transition-all`} style={{ width: `${pct}%` }}></div>
          </div>
          <div className="flex gap-4 text-xs text-gray-400">
            <span><i className="fa-regular fa-calendar mr-1"></i>{cat.date}</span>
            <span><i className="fa-regular fa-clock mr-1"></i>{cat.days}</span>
          </div>
        </div>
      );
    })}
  </div>

{/* ─── Resources Table v2 ─── */}
<section className="mb-10">

  {/* Top Bar */}
  <div className="flex items-center justify-between mb-5 animate-fade-up">
    <div className="flex items-center gap-3">
      <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
        <Table className="w-5 h-5 text-blue-600" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-900">Resources</p>
        <p className="text-xs text-gray-400">Last updated just now</p>
      </div>
    </div>
    <div className="flex gap-2">
      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
        <CheckCircle className="w-3 h-3" /> 3 completed
      </span>
      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
        <Clock className="w-3 h-3" /> 2 pending
      </span>
    </div>
  </div>

  {/* Thead */}
  <div className="grid grid-cols-[42px_2fr_1.4fr_1fr_1.3fr] px-4 py-3 mb-2">
    {["#", "Name", "Category", "Qty", "Status"].map((h) => (
      <span key={h} className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">{h}</span>
    ))}
  </div>

  {/* Rows */}
  <div className="flex flex-col gap-4">
    {tableResources.map((res, i) => {
      const done = res.status === "Completed";
      const colorMap = {
        blue:   { dot: "bg-blue-50",   icon: "text-blue-600",   cat: "bg-blue-50 text-blue-700",   bar: "bg-blue-400" },
        teal:   { dot: "bg-teal-50",   icon: "text-teal-700",   cat: "bg-teal-50 text-teal-700",   bar: "bg-teal-500" },
        amber:  { dot: "bg-amber-50",  icon: "text-amber-600",  cat: "bg-amber-50 text-amber-700", bar: "bg-amber-400" },
        coral:  { dot: "bg-red-50",    icon: "text-red-600",    cat: "bg-red-50 text-red-700",     bar: "bg-red-400" },
        purple: { dot: "bg-purple-50", icon: "text-purple-600", cat: "bg-purple-50 text-purple-700", bar: "bg-purple-400" },
      };
      const c = colorMap[res.colorKey] ?? colorMap.blue;

      return (
        <div
          key={res.id}
          className="grid grid-cols-[42px_2fr_1.4fr_1fr_1.3fr] items-center px-4 py-4 bg-white border border-gray-100 rounded-2xl hover:bg-gray-50 hover:border-gray-200 transition-all shadow-sm"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          {/* # */}
          <span className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center text-[11px] text-gray-400 font-medium">
            {i + 1}
          </span>

          {/* Name */}
          <div className="flex items-center gap-2.5">
            <div className={`w-9 h-9 rounded-xl ${c.dot} flex items-center justify-center flex-shrink-0`}>
              <res.Icon className={`w-4 h-4 ${c.icon}`} />
            </div>
            <span className="text-[13px] font-medium text-gray-900">{res.name}</span>
          </div>

          {/* Category */}
          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium w-fit ${c.cat}`}>
            <res.CatIcon className="w-3 h-3" />
            {res.cat}
          </span>

          {/* Qty + mini bar */}
          <div>
            <span className="text-sm font-medium text-gray-800">
              {res.qty} <span className="text-[11px] text-gray-400 font-normal">{res.unit}</span>
            </span>
            <div className="mt-1.5 h-1.5 w-24 rounded-full bg-gray-100 overflow-hidden">
              <div
                className={`h-1.5 rounded-full transition-all duration-1000 ${c.bar}`}
                style={{ width: `${Math.round(res.qty / res.max * 100)}%` }}
              />
            </div>
          </div>

          {/* Status */}
          <div className={`flex items-center gap-2 ${done ? "text-green-700" : "text-amber-700"}`}>
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${done ? "bg-green-50" : "bg-amber-50"}`}>
              {done
                ? <CheckCircle className="w-3.5 h-3.5" />
                : <Clock className="w-3.5 h-3.5" />}
            </div>
            <span className="text-xs font-medium">{res.status}</span>
          </div>
        </div>
      );
    })}
  </div>

</section>

      {/* 5. Delivery Timeline */}
<section className="mb-10 text-left">
  <h2 className="text-2xl font-bold text-blue-900 mb-2">Delivery Timeline</h2>
  <p className="text-sm text-gray-500 mb-6">Track when each stage's materials were received or expected</p>

  {/* Filter Tabs */}
  {['All', 'Completed', 'In Progress', 'Pending'].map((f) => (
    <button
      key={f}
      onClick={() => setActiveTab(f.toLowerCase().replace(' ', '-'))}
      className={`mr-2 mb-4 px-4 py-1.5 rounded-full text-xs font-semibold border transition-all
        ${activeTab === f.toLowerCase().replace(' ', '-') || (f === 'All' && activeTab === 'all')
          ? 'bg-blue-900 text-white border-blue-900'
          : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'}`}
    >
      {f}
    </button>
  ))}

  {/* Timeline Events */}
  <div className="relative">
    {timelineEvents
      .filter(e => activeTab === 'all' || e.status === activeTab)
      .map((event, i, arr) => (
        <div key={event.id} className="flex gap-4 relative">
          {i < arr.length - 1 && (
            <div className="absolute left-[14px] top-8 bottom-0 w-px bg-gray-200 z-0" />
          )}
          {/* Dot */}
          <div className={`z-10 mt-1 w-7 h-7 rounded-full flex items-center justify-center shrink-0
            ${event.status === 'completed' ? 'bg-green-100 text-green-600'
              : event.status === 'in-progress' ? 'bg-orange-100 text-orange-500'
              : 'bg-gray-100 text-gray-400'}`}>
            <i className={`fa-solid ${event.icon} text-xs`}></i>
          </div>
          {/* Card */}
          <div className={`flex-1 mb-5 bg-white border rounded-2xl p-4
            ${event.status === 'in-progress' ? 'border-orange-300 ring-1 ring-orange-200'
              : event.status === 'pending' ? 'border-gray-200 opacity-60'
              : 'border-gray-200'}`}>
            <div className="flex items-start justify-between gap-3 mb-2">
              <p className="font-semibold text-blue-900 text-sm">{event.title}</p>
              <span className={`text-xs font-bold px-3 py-1 rounded-full shrink-0
                ${event.status === 'completed' ? 'bg-green-100 text-green-700'
                  : event.status === 'in-progress' ? 'bg-orange-100 text-orange-700'
                  : 'bg-gray-100 text-gray-500'}`}>
                {event.status === 'completed' ? 'Completed' : event.status === 'in-progress' ? 'In Progress' : 'Pending'}
              </span>
            </div>
            <p className="text-xs text-gray-500 mb-3">{event.desc}</p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span><i className="fa-regular fa-calendar mr-1"></i>{event.date}</span>
              <span><i className="fa-solid fa-box mr-1"></i>{event.items}</span>
              <span><i className="fa-regular fa-user mr-1"></i>{event.verifier}</span>
            </div>
          </div>
        </div>
      ))}
  </div>
</section>
      
    </div>
  );
};

export default Resources;