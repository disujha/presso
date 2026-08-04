"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmartMedia } from "@/components/ui/SmartMedia";
import { DemoModal } from "@/components/ui/DemoModal";
import { BrochureModal } from "@/components/ui/BrochureModal";
import { Sparkles, Clock, ArrowRight, Download, Search, Target } from "lucide-react";

export default function CampaignIdeasPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const campaignIdeas = [
    {
      title: "Decathlon Fast-Paced Tent Assembly Race",
      pitch: "Ideal for Decathlon sports stores. Shoppers press PRESSO to start a 60s pop-up tent assembly race, then press PRESSO to freeze the high score.",
      industry: "Sports & Retail",
      brand: "Decathlon",
      objective: "Drive hands-on product trial & crowd cheering",
      duration: "5 Mins Setup",
      customization: "Custom branded timer screen + Store voucher QR",
      image: "/images/presso_activation.jpg",
    },
    {
      title: "Bosch High-Precision Torque Challenge",
      pitch: "Perfect for Bosch power tools. Mechanics race to fasten 4 bolts and slam PRESSO. Fastest time wins a Bosch tool set.",
      industry: "Industrial & Tools",
      brand: "Bosch",
      objective: "Demonstrate tool speed & ergonomic grip",
      duration: "5 Mins Setup",
      customization: "Industrial steel pedestal + Millisecond clock",
      image: "/images/industrial.jpg",
    },
    {
      title: "IKEA Flat-Pack Assembly Sprint",
      pitch: "Challenge shoppers at IKEA store atrium to assemble a wooden chair component. Press PRESSO to start/stop the clock.",
      industry: "Retail & Furniture",
      brand: "IKEA",
      objective: "Gamify flat-pack simplicity",
      duration: "10 Mins Setup",
      customization: "Yellow/Blue RGB halo light ring",
      image: "/images/retail.jpg",
    },
    {
      title: "Mahindra Off-Road Winch Speed Test",
      pitch: "Showroom launch challenge. Participants hook a winch cable onto a mini obstacle obstacle and hit PRESSO to stop the timer.",
      industry: "Automotive",
      brand: "Mahindra",
      objective: "Highlight vehicle ruggedness & torque",
      duration: "15 Mins Setup",
      customization: "Custom sound FX motor roar",
      image: "/images/automotive.jpg",
    },
    {
      title: "Nike High-Knee Reflex Sprint",
      pitch: "Runners perform 10s rapid high knees on a mat and press PRESSO to calculate foot strike frequency.",
      industry: "Sports",
      brand: "Nike",
      objective: "Engage marathon runners at expo booths",
      duration: "5 Mins Setup",
      customization: "Neon LED halo + Leaderboard TV screen",
      image: "/images/presso_activation.jpg",
    },
    {
      title: "Apple Watch Tap-to-Beat Challenge",
      pitch: "Visitors match their heartbeat rhythm with PRESSO button presses for 15 seconds.",
      industry: "Electronics",
      brand: "Apple",
      objective: "Demonstrate health tracking precision",
      duration: "5 Mins Setup",
      customization: "Sleek matte black pedestal",
      image: "/images/presso_button_close_up.jpg",
    },
    {
      title: "Samsung OLED Reflex Quiz",
      pitch: "Multi-player buzzer trivia game testing visual memory on Samsung 8K displays.",
      industry: "Electronics",
      brand: "Samsung",
      objective: "Showcase display clarity & response rate",
      duration: "10 Mins Setup",
      customization: "4-player synchronized PRESSO pods",
      image: "/images/hardware-node.jpg",
    },
    {
      title: "Volvo Emergency Stop Speed Drill",
      pitch: "Simulate emergency braking reflexes. When red light flashes, press PRESSO within 0.20s.",
      industry: "Automotive",
      brand: "Volvo",
      objective: "Reinforce safety leadership & human reflex",
      duration: "5 Mins Setup",
      customization: "Red LED brake light halo + Reaction score",
      image: "/images/automotive.jpg",
    },
    {
      title: "Taj Hotel Check-in Mystery Reward",
      pitch: "Guests press PRESSO at luxury hotel lobby check-in to spin the digital roulette for room upgrades.",
      industry: "Hospitality",
      brand: "Taj Hotels",
      objective: "Deliver instant arrival delight",
      duration: "3 Mins Setup",
      customization: "Gold illuminated button cap",
      image: "/images/exhibition.jpg",
    },
    {
      title: "Red Bull Extreme Reflex Slam",
      pitch: "High-speed 30-second random light button slam challenge at eSports tournaments.",
      industry: "Gaming & Energy",
      brand: "Red Bull",
      objective: "High-voltage crowd hype & social media clips",
      duration: "5 Mins Setup",
      customization: "Dynamic audio sound drop + Live TV ranking",
      image: "/images/presso_activation.jpg",
    },
    {
      title: "Unilever Clean Water CSR Pledge",
      pitch: "Every button press donates 10 liters of clean drinking water to rural schools. Real-time counter on stage.",
      industry: "CSR & FMCG",
      brand: "Unilever",
      objective: "Quantify social impact & brand goodwill",
      duration: "5 Mins Setup",
      customization: "Blue water LED pulse ring",
      image: "/images/museum.jpg",
    },
    {
      title: "Dyson Airflow Filter Swap Speed Test",
      pitch: "Shoppers swap a Dyson air purifier filter cartridge in under 15 seconds and slam PRESSO.",
      industry: "Electronics & Appliances",
      brand: "Dyson",
      objective: "Showcase easy maintenance design",
      duration: "5 Mins Setup",
      customization: "Cyan LED light ring + Store QR coupon",
      image: "/images/hardware-node.jpg",
    },
    {
      title: "LEGO Speed Building Brick Relay",
      pitch: "Kids & parents assemble a 10-piece LEGO minifigure and hit PRESSO to register their family score.",
      industry: "Retail & Toys",
      brand: "LEGO",
      objective: "Family engagement at shopping malls",
      duration: "5 Mins Setup",
      customization: "Primary color LED sequence",
      image: "/images/school.jpg",
    },
    {
      title: "Sephora Lipstick Match Quiz",
      pitch: "Beauty store visitors press PRESSO to take a 3-question color shade quiz with instant sample drop.",
      industry: "Retail & Beauty",
      brand: "Sephora",
      objective: "Drive product sample distribution",
      duration: "5 Mins Setup",
      customization: "Magenta RGB glowing halo",
      image: "/images/retail.jpg",
    },
    {
      title: "Heineken 0.0 Zero-Alcohol Reaction Test",
      pitch: "Expo visitors prove their reaction speed is 100% sharp with a zero-alcohol reaction challenge.",
      industry: "Beverages & Events",
      brand: "Heineken",
      objective: "Promote responsible drinking & zero-sugar line",
      duration: "5 Mins Setup",
      customization: "Green LED star ring",
      image: "/images/presso_activation.jpg",
    },
    {
      title: "Puma Track Sprint Reflex Starter",
      pitch: "Runners press PRESSO to trigger the starting gun audio and sprint 10 meters on an indoor turf.",
      industry: "Sports",
      brand: "Puma",
      objective: "Create authentic track atmosphere",
      duration: "10 Mins Setup",
      customization: "Starter gun audio FX + Millisecond clock",
      image: "/images/presso_hero_button.jpg",
    },
    {
      title: "BMW M-Power Lap Time Challenge",
      pitch: "Sim-racing tournament where drivers press PRESSO to start/finish their virtual track lap.",
      industry: "Automotive",
      brand: "BMW",
      objective: "Drive eSports motorsport engagement",
      duration: "15 Mins Setup",
      customization: "M-Performance tri-color LED ring",
      image: "/images/automotive.jpg",
    },
    {
      title: "Dell Alienware Keycap Swap Battle",
      pitch: "Gamers swap 5 mechanical keycaps on a gaming keyboard and hit PRESSO to stop the timer.",
      industry: "Electronics",
      brand: "Dell Alienware",
      objective: "Highlight mechanical keyboard customization",
      duration: "5 Mins Setup",
      customization: "RGB Alienware pulse halo",
      image: "/images/hardware-node.jpg",
    },
    {
      title: "Starbucks Espresso Grind Race",
      pitch: "Baristas compete in a coffee bean dose & tamp challenge with PRESSO timekeeping.",
      industry: "Food & Beverage",
      brand: "Starbucks",
      objective: "Celebrate craft coffee speed & accuracy",
      duration: "5 Mins Setup",
      customization: "Warm gold LED ring",
      image: "/images/retail.jpg",
    },
    {
      title: "GoPro Helmet Mount Speed Click",
      pitch: "Action sports fans latch a GoPro onto a helmet and hit PRESSO to claim a merch voucher.",
      industry: "Electronics",
      brand: "GoPro",
      objective: "Demonstrate quick-release latching mechanism",
      duration: "5 Mins Setup",
      customization: "Rugged waterproof enclosure",
      image: "/images/presso_button_close_up.jpg",
    },
    {
      title: "L'Oréal Hair Volume Quiz Game",
      pitch: "Interactive hair quiz on a touch kiosk triggered by a glowing PRESSO button press.",
      industry: "Beauty",
      brand: "L'Oréal",
      objective: "Personalized product recommendation",
      duration: "5 Mins Setup",
      customization: "Rose gold lighting halo",
      image: "/images/retail.jpg",
    },
    {
      title: "Schneider Electric Circuit Breaker Race",
      pitch: "Electricians reset 3 industrial breakers and press PRESSO to log their safety time.",
      industry: "Industrial",
      brand: "Schneider",
      objective: "Highlight safety switch response",
      duration: "5 Mins Setup",
      customization: "High-contrast green/red status light",
      image: "/images/industrial.jpg",
    },
    {
      title: "PlayStation DualSense Haptic Test",
      pitch: "Gamers test button press force & haptic feedback on a PRESSO arcade pedestal.",
      industry: "Gaming",
      brand: "PlayStation",
      objective: "Hype new controller launch",
      duration: "5 Mins Setup",
      customization: "PlayStation blue glowing ring",
      image: "/images/hardware-node.jpg",
    },
    {
      title: "Uber Driver Safety Quiz Challenge",
      pitch: "Driver partner hub quiz testing road safety awareness with instant reward vouchers.",
      industry: "Corporate & Fleet",
      brand: "Uber",
      objective: "Driver engagement & safety compliance",
      duration: "5 Mins Setup",
      customization: "Black/White high-contrast style",
      image: "/images/corporate.jpg",
    },
    {
      title: "Canon Lens Swap Speed Sprint",
      pitch: "Photographers swap a 50mm lens onto a DSLR body in under 8 seconds and slam PRESSO.",
      industry: "Electronics",
      brand: "Canon",
      objective: "Demonstrate quick lens mount ergonomics",
      duration: "5 Mins Setup",
      customization: "Red ring Canon L-series accent light",
      image: "/images/presso_hero_button.jpg",
    },
    {
      title: "Under Armour Compression Fit Race",
      pitch: "Athletes pull on a compression sleeve and press PRESSO to stop the stopwatch.",
      industry: "Sports",
      brand: "Under Armour",
      objective: "Highlight apparel stretch & speed",
      duration: "5 Mins Setup",
      customization: "Black/Yellow high-energy halo",
      image: "/images/presso_activation.jpg",
    },
    {
      title: "Nestlé Good Food Quiz Buzzer",
      pitch: "School nutrition quiz battle with 4 PRESSO buzzer pods connected to a central TV screen.",
      industry: "Education & FMCG",
      brand: "Nestlé",
      objective: "Promote healthy eating habits in kids",
      duration: "10 Mins Setup",
      customization: "Colorful multi-pod LED setup",
      image: "/images/school.jpg",
    },
    {
      title: "Mercedes-AMG Formula 1 Pit Stop Sprint",
      pitch: "Two-person team uses an electric nut runner to swap a F1 display tire and slams PRESSO.",
      industry: "Automotive",
      brand: "Mercedes-AMG",
      objective: "Create ultimate motorsports crowd puller",
      duration: "15 Mins Setup",
      customization: "Petronas green LED glow",
      image: "/images/automotive.jpg",
    },
    {
      title: "Monster Energy BMX Reaction Slam",
      pitch: "Action sports fans hit PRESSO when the starting gate drops on a BMX ramp simulator.",
      industry: "Sports",
      brand: "Monster Energy",
      objective: "High-intensity crowd engagement",
      duration: "5 Mins Setup",
      customization: "Monster green claw light ring",
      image: "/images/presso_activation.jpg",
    },
    {
      title: "Siemens Smart Factory Automation Quiz",
      pitch: "Trade show visitors answer 3 smart factory questions and press PRESSO to claim a tech gift.",
      industry: "Industrial",
      brand: "Siemens",
      objective: "B2B lead generation & tech authority",
      duration: "5 Mins Setup",
      customization: "Siemens teal illuminated button cap",
      image: "/images/industrial.jpg",
    },
    {
      title: "HP Omen Keyboard Slam Challenge",
      pitch: "Gamers test mechanical key endurance with a 100-press rapid fire speed trial.",
      industry: "Gaming",
      brand: "HP Omen",
      objective: "Prove keyboard durability under stress",
      duration: "5 Mins Setup",
      customization: "Omen red diamond lighting",
      image: "/images/hardware-node.jpg",
    },
    {
      title: "Airbnb Local Host Welcome Challenge",
      pitch: "Experiential pop-up where travelers press PRESSO to unlock a local city guide map.",
      industry: "Hospitality & Travel",
      brand: "Airbnb",
      objective: "Inspire travel destination discovery",
      duration: "5 Mins Setup",
      customization: "Coral red Airbnb glow halo",
      image: "/images/exhibition.jpg",
    },
    {
      title: "3M Safety Goggles Assembly Race",
      pitch: "Factory workers assemble a protective safety mask and hit PRESSO to log their safety time.",
      industry: "Industrial",
      brand: "3M",
      objective: "Promote workplace safety compliance",
      duration: "5 Mins Setup",
      customization: "Yellow/Red safety warning LED ring",
      image: "/images/industrial.jpg",
    },
    {
      title: "Intel Core Ultra AI Benchmark Quiz",
      pitch: "Tech enthusiasts guess AI image generation speeds and slam PRESSO to submit their score.",
      industry: "Electronics",
      brand: "Intel",
      objective: "Educate consumers on AI PC performance",
      duration: "5 Mins Setup",
      customization: "Intel blue pulse lighting ring",
      image: "/images/hardware-node.jpg",
    },
    {
      title: "FedEx Package Tape & Seal Challenge",
      pitch: "Participants tape a shipping box, slap a label, and hit PRESSO to beat the 20-second mark.",
      industry: "Logistics & Corporate",
      brand: "FedEx",
      objective: "Demonstrate shipping speed & reliability",
      duration: "5 Mins Setup",
      customization: "Purple/Orange dual LED ring",
      image: "/images/corporate.jpg",
    },
    {
      title: "Oakley Sunglasses Latch Test",
      pitch: "Athletes snap an Oakley lens into place and press PRESSO to verify lock speed.",
      industry: "Sports & Eyewear",
      brand: "Oakley",
      objective: "Showcase secure lens latching system",
      duration: "5 Mins Setup",
      customization: "Iridescent metallic finish",
      image: "/images/presso_button_close_up.jpg",
    },
    {
      title: "Castrol Oil Filter Spin Challenge",
      pitch: "Mechanics spin on a Castrol oil filter and press PRESSO to verify seal pressure.",
      industry: "Automotive",
      brand: "Castrol",
      objective: "Demonstrate lubricant seal performance",
      duration: "5 Mins Setup",
      customization: "Green/Red Castrol halo light",
      image: "/images/industrial.jpg",
    },
    {
      title: "Logitech MX Master Gesture Quiz",
      pitch: "Designers perform 3 gesture shortcuts and press PRESSO to win an ergonomic mouse.",
      industry: "Electronics",
      brand: "Logitech",
      objective: "Demonstrate creator productivity gains",
      duration: "5 Mins Setup",
      customization: "Graphite matte dark pedestal",
      image: "/images/hardware-node.jpg",
    },
    {
      title: "WWF Wildlife Conservation Pledge Counter",
      pitch: "Every button press at a nature museum donates $1 to tiger habitat protection.",
      industry: "CSR & Museums",
      brand: "WWF",
      objective: "Raise public awareness for endangered species",
      duration: "5 Mins Setup",
      customization: "Warm orange/green forest halo",
      image: "/images/museum.jpg",
    },
    {
      title: "Red Cross Emergency First Aid Drill",
      pitch: "Volunteers perform 30 CPR compressions and press PRESSO to check rhythm accuracy.",
      industry: "Healthcare & CSR",
      brand: "Red Cross",
      objective: "Teach lifesaving CPR rhythm to the public",
      duration: "5 Mins Setup",
      customization: "Red Cross illuminated symbol cap",
      image: "/images/school.jpg",
    },
  ];

  const categories = ["All", "Sports & Retail", "Industrial & Tools", "Automotive", "Electronics", "CSR & Govt"];

  const filteredIdeas = campaignIdeas.filter((item) => {
    const matchesCat = activeCategory === "All" || item.industry.toLowerCase().includes(activeCategory.toLowerCase());
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.pitch.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#FF6A00] selection:text-[#050505] overflow-x-hidden">
      <Navbar onOpenDemoModal={() => setDemoModalOpen(true)} />

      <main className="pt-32 pb-24">
        {/* Header Hero Section */}
        <section className="relative py-16 bg-[#050505] border-b border-white/10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial-hero pointer-events-none opacity-80" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] border border-[#FF6A00]/40 text-xs font-mono text-[#FF6A00] uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" /> 40+ Agency Pitch Templates
            </div>
            <h1 className="font-display font-bold text-5xl sm:text-7xl text-white tracking-tight">
              Turn Any Product Into A <br />
              <span className="text-gradient-gold">Live Challenge.</span>
            </h1>
            <p className="text-lg text-[#B0B0B0] font-light max-w-2xl mx-auto leading-relaxed">
              Explore 40+ ready-to-pitch campaign experiences designed for global brands like Bosch, IKEA, Mahindra, Decathlon, and Nike.
            </p>

            {/* Search Bar & Category Filters */}
            <div className="max-w-2xl mx-auto space-y-4 pt-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666666]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by brand (e.g. Bosch, IKEA, Decathlon) or format..."
                  className="w-full pl-12 pr-4 py-4 bg-[#111111] border border-white/15 rounded-full text-sm text-white placeholder:text-[#555555] focus:outline-none focus:border-[#FF6A00] shadow-xl transition-all"
                />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                      activeCategory === cat
                        ? "bg-[#FF6A00] text-black font-bold shadow-[0_0_20px_rgba(255,106,0,0.5)]"
                        : "bg-[#111111] border border-white/10 text-[#B0B0B0] hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 40+ Campaign Experience Cards Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredIdeas.map((idea) => (
                <div
                  key={idea.title}
                  className="rounded-3xl bg-[#111111] border border-white/10 p-6 flex flex-col justify-between space-y-6 hover:border-[#FF6A00]/50 hover:shadow-[0_0_35px_rgba(255,106,0,0.25)] transition-all duration-300 group"
                >
                  {/* Media Preview */}
                  <SmartMedia
                    src={idea.image}
                    type="image"
                    alt={idea.title}
                    fallbackTitle={idea.title}
                    aspectRatio="16:9"
                  />

                  {/* Details */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="px-3 py-1 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/30 text-[#FF6A00] font-bold">
                        Pitch for {idea.brand}
                      </span>
                      <span className="text-[#FFC107] flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {idea.duration}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-2xl text-white group-hover:text-[#FF6A00] transition-colors">
                      {idea.title}
                    </h3>

                    <p className="text-sm text-[#B0B0B0] leading-relaxed font-light">
                      {idea.pitch}
                    </p>

                    <div className="p-3 rounded-2xl bg-[#1A1A1A] border border-white/5 space-y-1 text-xs">
                      <p className="text-[#FFC107] font-bold flex items-center gap-1.5">
                        <Target className="w-3.5 h-3.5 text-[#FF6A00]" /> Objective:
                      </p>
                      <p className="text-[#B0B0B0]">{idea.objective}</p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#666666]">
                    <span>Customization: {idea.customization.slice(0, 25)}...</span>
                    <button
                      onClick={() => setDemoModalOpen(true)}
                      className="text-[#FF6A00] font-bold hover:underline flex items-center gap-1"
                    >
                      Pitch This <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Pitch CTA Banner */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="rounded-4xl bg-gradient-to-r from-[#111111] via-[#1A1A1A] to-[#111111] border border-[#FF6A00]/50 p-12 space-y-6 shadow-[0_0_60px_rgba(255,106,0,0.2)]">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
                Want a custom experience pitch deck for your client?
              </h2>
              <p className="text-sm text-[#B0B0B0] max-w-xl mx-auto">
                Our experiential tech team will build a 3D visual mockup, campaign software workflow, and hardware quote for your upcoming agency pitch in 24 hours.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <button
                  onClick={() => setDemoModalOpen(true)}
                  className="px-8 py-4 rounded-full bg-[#FF6A00] text-black font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(255,106,0,0.5)] flex items-center gap-2"
                >
                  Request Pitch Deck <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setBrochureModalOpen(true)}
                  className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                >
                  Download Agency Specs PDF <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
      <BrochureModal isOpen={brochureModalOpen} onClose={() => setBrochureModalOpen(false)} />
    </div>
  );
}
