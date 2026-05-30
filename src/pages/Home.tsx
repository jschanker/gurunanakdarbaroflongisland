import { useState } from "react";
import {
  Clock,
  MapPin,
  Phone,
  Mail,
  Heart,
  Calendar,
  Play,
  Shield,
} from "lucide-react";

// Explicit data contracts for type safety
interface ScheduleItem {
  readonly activity: string;
  readonly time: string;
}

interface UpcomingEvent {
  readonly title: string;
  readonly date: string;
  readonly time: string;
  readonly desc: string;
}

const DAILY_SCHEDULE: readonly ScheduleItem[] = [
  { activity: "Prakash Sri Guru Granth Sahib Ji", time: "5:30 AM" },
  { activity: "Nitnem (Morning Prayers)", time: "6:00 AM" },
  { activity: "Kirtan & Asa Di Vaar", time: "7:00 AM" },
  { activity: "Sukhmani Sahib Path", time: "10:00 AM" },
  { activity: "Rehras Sahib & Evening Aarti", time: "6:30 PM" },
  { activity: "Sukhasan", time: "8:30 PM" },
];

const UPCOMING_EVENTS: readonly UpcomingEvent[] = [
  {
    title: "Weekly Sunday Diwan",
    date: "Every Sunday",
    time: "10:00 AM - 1:30 PM",
    desc: "Sangat gathering, Kirtan, Katha, followed by Guru ka Langar.",
  },
  {
    title: "Sukhmani Sahib Path Sponsorship",
    date: "Available Weekly",
    time: "Flexible",
    desc: "Families can register to host or sponsor paths for special occasions.",
  },
];

type ActiveTab = "home" | "schedule" | "seva" | "contact";

export default function GurdwaraPrototype() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("home");

  // Avoids hydration mismatches in purely static frameworks
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Top Banner: Infrastructure / Security Identity */}
      <div className="bg-amber-600 text-white px-4 py-2 text-center text-sm font-medium flex items-center justify-center gap-2">
        <Shield size={16} aria-hidden="true" />
        <span>
          UNOFFICIAL AI Generated Prototype of Web Site for Guru Nanak Darbar of Long Island
        </span>
      </div>

      {/* Header & Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-md border-b border-amber-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-inner select-none">
              ੴ
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-950 tracking-wide uppercase">
                Guru Nanak Darbar
              </h1>
              <p className="text-xs text-amber-700 font-medium tracking-wider">
                OF LONG ISLAND • HICKSVILLE, NY
              </p>
            </div>
          </div>

          <nav className="flex gap-1 bg-slate-100 p-1 rounded-lg" aria-label="Main Navigation">
            {(["home", "schedule", "seva", "contact"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium rounded-md capitalize transition-all ${
                  activeTab === tab
                    ? "bg-amber-500 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content Viewport */}
      <main className="max-w-6xl mx-auto px-4 py-8 focus:outline-none">
        
        {/* Tab 1: Home/Overview */}
        {activeTab === "home" && (
          <div className="space-y-12 animate-fadeIn">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 rounded-2xl text-white p-8 md:p-12 shadow-xl relative overflow-hidden">
              <div className="max-w-xl space-y-4 relative z-10">
                <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
                  Welcome to the Sangat Portal
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                  Naam Japna, Kirat Karni, Vand Chhakhna
                </h2>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                  Connect with the Guru Nanak Darbar community in Hicksville.
                  Join us for daily prayers, soulful Kirtan congregations, and
                  selfless community service (Seva).
                </p>
                <div className="pt-4 flex flex-wrap gap-3">
                  <a
                    href="https://www.facebook.com/GuruNanakDarbarHicksville/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-3 rounded-lg flex items-center gap-2 shadow-md transition-all text-sm"
                  >
                    <Play size={16} fill="currentColor" aria-hidden="true" />
                    Watch Facebook Live Diwan
                  </a>
                  <button
                    onClick={() => setActiveTab("schedule")}
                    className="bg-white/10 hover:bg-white/20 text-white font-medium px-5 py-3 rounded-lg border border-white/20 transition-all text-sm"
                  >
                    View Timings
                  </button>
                </div>
              </div>
              <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] hidden md:block" aria-hidden="true"></div>
            </section>

            {/* Core Three Pillars Grid */}
            <section className="grid md:grid-cols-3 gap-6" aria-label="Three Pillars of Sikhism">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 space-y-3">
                <div className="w-10 h-10 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center font-bold">1</div>
                <h3 className="font-bold text-lg text-slate-900">Naam Simran</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Remembering the Divine Creator at all times to align our minds with inner peace and universal truth.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 space-y-3">
                <div className="w-10 h-10 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center font-bold">2</div>
                <h3 className="font-bold text-lg text-slate-900">Kirat Karo</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Earning an honest livelihood through hard work, integrity, and truthful mental and physical efforts.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 space-y-3">
                <div className="w-10 h-10 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center font-bold">3</div>
                <h3 className="font-bold text-lg text-slate-900">Vand Chhako</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Sharing what you have with the less fortunate, supporting the community, and eating together as one equal family.
                </p>
              </div>
            </section>

            {/* Overview Quick Reference Section */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-100 p-6" aria-label="Quick Reference Details">
              <div className="flex justify-between items-center mb-6">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900">Quick Reference</h3>
                  <p className="text-xs text-slate-500">Regular daily opening hours and core info</p>
                </div>
                <button
                  onClick={() => setActiveTab("schedule")}
                  className="text-sm text-amber-600 hover:text-amber-700 font-semibold transition-colors"
                >
                  Full Schedule &rarr;
                </button>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                  <Clock className="text-amber-600 shrink-0 mt-0.5" size={18} aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-slate-900">Open Daily</p>
                    <p className="text-slate-600">5:30 AM - 10:30 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                  <MapPin className="text-amber-600 shrink-0 mt-0.5" size={18} aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-slate-900">Address</p>
                    <p className="text-slate-600">11 N Broadway, Hicksville, NY</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                  <Phone className="text-amber-600 shrink-0 mt-0.5" size={18} aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-slate-900">Phone Support</p>
                    <p className="text-slate-600">(516) 933-4878</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Tab 2: Full Schedule */}
        {activeTab === "schedule" && (
          <div className="grid md:grid-cols-3 gap-8 animate-fadeIn">
            <section className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Clock className="text-amber-600" aria-hidden="true" /> Daily Nitnem & Darbar Sahib Timings
              </h3>
              <div className="divide-y divide-slate-100">
                {DAILY_SCHEDULE.map((item, index) => (
                  <div key={index} className="py-3.5 flex justify-between items-center text-sm">
                    <span className="font-medium text-slate-800">{item.activity}</span>
                    <span className="bg-amber-50 text-amber-800 px-3 py-1 rounded-md font-mono font-semibold">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Calendar className="text-amber-600" aria-hidden="true" /> Regular Congregations
              </h3>
              <div className="space-y-4">
                {UPCOMING_EVENTS.map((event, index) => (
                  <div key={index} className="border-l-4 border-amber-500 pl-4 space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm">{event.title}</h4>
                    <p className="text-xs font-semibold text-amber-700">
                      {event.date} | {event.time}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">{event.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Tab 3: Seva / Langar */}
        {activeTab === "seva" && (
          <section className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 md:p-8 space-y-8 animate-fadeIn">
            <div className="max-w-2xl space-y-2">
              <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Heart className="text-rose-600" aria-hidden="true" /> Guru Ka Langar & Seva Contributions
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The community kitchen (Langar) provides free, hot vegetarian meals daily to all visitors, 
                without distinction of religion, caste, gender, economic status, or nationality.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-5 rounded-lg space-y-3 border border-slate-100">
                <h4 className="font-bold text-slate-900 text-base">Langar Sponsorship</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Families can participate in the tradition by contributing ingredients, or donating 
                  towards the logistical costs of running the kitchen for standard weekly Diwan schedules.
                </p>
                <button
                  onClick={() => setActiveTab("contact")}
                  className="text-xs bg-slate-900 text-white font-medium px-4 py-2 rounded hover:bg-slate-800 transition-all focus:ring-2 focus:ring-slate-400"
                >
                  Inquire via Administration
                </button>
              </div>

              <div className="bg-slate-50 p-5 rounded-lg space-y-3 border border-slate-100">
                <h4 className="font-bold text-slate-900 text-base">Physical Volunteer Seva</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Cleanliness, serving foods, or chopping ingredients alongside community kitchens are always open. 
                  Feel free to join directly during typical morning or weekend hours.
                </p>
                <span className="inline-block text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded select-none">
                  No Signup Required
                </span>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm">
                <div className="space-y-1">
                  <h4 className="font-bold text-amber-950">Structural Updates & Expansion Project</h4>
                  <p className="text-xs text-amber-900/80 max-w-xl">
                    For verification of direct mail donations or explicit physical building expansion support, 
                    checks can be sent to their verified operational framework mailing addresses.
                  </p>
                </div>
                <div className="bg-white px-4 py-3 rounded-md border border-amber-200/60 shadow-sm font-mono text-xs text-slate-800 font-medium shrink-0">
                  <p className="font-bold text-slate-950 mb-1">Checks Payable To:</p>
                  <p>Guru Nanak Darbar of Long Island</p>
                  <p>P.O. Box 40,</p>
                  <p>Hicksville, NY 11802</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Tab 4: Contact Details */}
        {activeTab === "contact" && (
          <section className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 max-w-2xl mx-auto space-y-6 animate-fadeIn" aria-label="Contact Information">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-900">Contact Information</h3>
              <p className="text-xs text-slate-500">Verified institutional references across primary channels</p>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
                <MapPin className="text-amber-600 select-none" size={20} aria-hidden="true" />
                <div>
                  <p className="font-semibold text-slate-900">Physical Address</p>
                  <p className="text-slate-600">11 N Broadway, Hicksville, NY 11801</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
                <Phone className="text-amber-600 select-none" size={20} aria-hidden="true" />
                <div>
                  <p className="font-semibold text-slate-900">Primary Phone Line</p>
                  <p className="text-slate-600">(516) 933-4878</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
                <Mail className="text-amber-600 select-none" size={20} aria-hidden="true" />
                <div>
                  <p className="font-semibold text-slate-900">Official Contact Electronic Mail</p>
                  <p className="text-slate-600 font-mono">info@gurunanakdarbaroflongisland.com</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg text-center space-y-2">
              <p className="text-xs font-semibold text-slate-700">Need Immediate Announcements?</p>
              <p className="text-xs text-slate-500 leading-relaxed">
                The administrative committee posts regular short updates, schedule changes, and live streaming links 
                directly onto their public group profile.
              </p>
              <div className="pt-2">
                <a
                  href="https://www.facebook.com/GuruNanakDarbarHicksville/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs bg-amber-500 hover:bg-amber-600 text-white font-semibold px-4 py-2 rounded transition-all focus:ring-2 focus:ring-amber-400"
                >
                  Visit Facebook Page Info
                </a>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer Area */}
      <footer className="bg-slate-900 text-slate-400 text-center py-8 text-xs border-t border-slate-800 mt-20 space-y-2">
        <p>&copy; {currentYear} Guru Nanak Darbar of Long Island. All Rights Reserved.</p>
      </footer>
    </div>
  );
}