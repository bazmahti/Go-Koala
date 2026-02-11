import { motion } from "framer-motion";
import { usePageTitle } from "@/hooks/use-page-title";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Monitor, Smartphone, Globe, Code, Server, Cpu,
  ArrowRight, CheckCircle2, Star, Zap, Gamepad2,
  Rocket, Calendar, CircleDot, Tv, Package, Users
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

interface PlatformOption {
  name: string;
  icon: typeof Monitor;
  score: number;
  pros: string[];
  cons: string[];
  recommendation: string;
}

const platforms: PlatformOption[] = [
  {
    name: "PC (Steam / Epic)",
    icon: Monitor,
    score: 92,
    pros: [
      "Largest indie game audience and discovery potential",
      "Steam Workshop enables user-generated content (Story Forge)",
      "No hardware constraints on visual fidelity",
      "Modding community extends game lifespan",
      "Early Access model suits episodic release strategy",
    ],
    cons: [
      "Highly competitive marketplace",
      "Requires dedicated marketing budget",
      "Revenue share (30% on Steam)",
    ],
    recommendation: "Primary launch platform. Steam Early Access perfectly suits episodic releases. Workshop integration enables community-created stories and content.",
  },
  {
    name: "Console (Switch / PS5 / Xbox)",
    icon: Gamepad2,
    score: 78,
    pros: [
      "Switch is ideal for family-friendly content",
      "Console audiences value story-driven games",
      "Local co-op well-suited to Switch's portability",
      "Achievement systems drive engagement",
    ],
    cons: [
      "Higher development and certification costs",
      "Longer update cycles for episodic content",
      "Platform-specific optimisation required",
      "Each platform has separate submission processes",
    ],
    recommendation: "Secondary platform 6-12 months after PC launch. Nintendo Switch is the priority console given the family-friendly nature and portable co-op.",
  },
  {
    name: "Mobile (iOS / Android)",
    icon: Smartphone,
    score: 70,
    pros: [
      "Massive reach for awareness and conservation messaging",
      "Companion app potential (AI translator, colony management)",
      "Touch controls suit many of the mini-games",
      "In-app purchases for cosmetics (ethical monetisation)",
    ],
    cons: [
      "Performance limitations for 3D environments",
      "Oversaturated market with aggressive monetisation",
      "Players expect free-to-play model",
      "Smaller screen limits detailed world exploration",
    ],
    recommendation: "Companion app or simplified mobile version. Use for colony management, AI translator tool, and conservation card collection rather than full 3D gameplay.",
  },
  {
    name: "Web Browser (WebGL / HTML5)",
    icon: Globe,
    score: 65,
    pros: [
      "Zero-install accessibility for demos and teasers",
      "Perfect for the animated series companion content",
      "Educational versions for schools and conservation orgs",
      "Low barrier to entry grows audience awareness",
    ],
    cons: [
      "Performance ceiling limits visual quality",
      "Limited multiplayer infrastructure",
      "Browser fragmentation issues",
      "Monetisation challenges",
    ],
    recommendation: "Use for playable demo, educational content, and the animated series viewer. Not recommended for the full game experience.",
  },
];

interface LanguageOption {
  name: string;
  engine: string;
  score: number;
  strengths: string[];
  considerations: string[];
  bestFor: string;
}

const languages: LanguageOption[] = [
  {
    name: "C# with Unity",
    engine: "Unity 6",
    score: 95,
    strengths: [
      "Industry-standard for indie 3D games with cross-platform deployment",
      "Massive asset store with Australian environment packs available",
      "Excellent 3D animation pipeline for character performances",
      "Built-in multiplayer solutions (Netcode for GameObjects)",
      "WebGL export enables browser demos from the same codebase",
      "Strong community and documentation for rapid prototyping",
      "Timeline system perfect for episodic cutscenes and cinematics",
    ],
    considerations: [
      "Runtime fee model requires planning at scale",
      "Performance optimisation needed for lower-end hardware",
      "Some advanced rendering features require URP/HDRP configuration",
    ],
    bestFor: "The ideal choice. Unity's cross-platform capability, mature animation tools, and asset ecosystem make it the strongest engine for GO KOALA!'s multi-platform, episodic, multiplayer design.",
  },
  {
    name: "C++ with Unreal Engine 5",
    engine: "Unreal Engine 5",
    score: 82,
    strengths: [
      "Nanite and Lumen create stunning photorealistic Australian landscapes",
      "MetaHuman technology adaptable for realistic human characters (Karen, Alison)",
      "Blueprint visual scripting lowers the barrier for narrative designers",
      "Incredible cinematic quality for the animated series content",
      "5% royalty after $1M is manageable",
    ],
    considerations: [
      "Steeper learning curve and longer development time",
      "Heavier hardware requirements limit audience reach",
      "Overkill for the stylised art direction this IP likely needs",
      "Mobile deployment is more challenging",
    ],
    bestFor: "Best if the project pivots to AAA visual quality or if the animated series takes priority over the game. The cinematic tools are unmatched.",
  },
  {
    name: "GDScript with Godot 4",
    engine: "Godot 4",
    score: 74,
    strengths: [
      "Fully open source with no royalties or fees",
      "Lightweight and fast iteration for episodic content drops",
      "Excellent 2D support if the art style goes hand-drawn / illustrated",
      "Growing community with strong indie support",
      "GDScript is Python-like and beginner-friendly",
    ],
    considerations: [
      "3D capabilities still maturing compared to Unity/Unreal",
      "Smaller asset marketplace and fewer third-party tools",
      "Multiplayer infrastructure requires more custom work",
      "Less corporate backing for long-term support",
    ],
    bestFor: "Strong choice if budget is constrained and the art direction favours 2D or stylised low-poly 3D. The zero-cost model is attractive for indie development.",
  },
  {
    name: "TypeScript with Three.js / PlayCanvas",
    engine: "Web-native",
    score: 58,
    strengths: [
      "Native web deployment with zero installation",
      "JavaScript/TypeScript ecosystem is widely known",
      "Real-time collaboration tools built into web stack",
      "Accessible for educational and conservation partners",
    ],
    considerations: [
      "Significant performance limitations for detailed 3D worlds",
      "No native console deployment path",
      "Limited tooling for complex 3D game development",
      "Audio and input handling less mature than native engines",
    ],
    bestFor: "Only recommended for the web demo, educational mini-games, or the animated series viewer component. Not suitable for the core game.",
  },
];

export default function Platform() {
  usePageTitle("Platform & Technology Analysis", "Delivery platform comparison, game engine recommendations, and technical architecture for building GO KOALA!");
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} custom={0}>
            <Badge variant="secondary" className="mb-3">Technical Analysis</Badge>
          </motion.div>
          <motion.h1
            className="font-serif text-4xl sm:text-5xl font-bold mb-4"
            variants={fadeUp}
            custom={1}
            data-testid="text-platform-title"
          >
            Platform & Technology
          </motion.h1>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            variants={fadeUp}
            custom={2}
          >
            Analysis of the optimal delivery platforms, game engines, and coding languages 
            for bringing GO KOALA! to life.
          </motion.p>
        </motion.div>

        <Tabs defaultValue="platforms" className="space-y-6">
          <TabsList className="flex flex-wrap gap-1 h-auto p-1" data-testid="tabs-platform">
            <TabsTrigger value="platforms" data-testid="tab-platforms">Delivery Platforms</TabsTrigger>
            <TabsTrigger value="languages" data-testid="tab-languages">Engine & Language</TabsTrigger>
            <TabsTrigger value="architecture" data-testid="tab-architecture">Technical Architecture</TabsTrigger>
            <TabsTrigger value="roadmap" data-testid="tab-roadmap">Delivery Roadmap</TabsTrigger>
          </TabsList>

          <TabsContent value="platforms">
            <motion.div
              className="grid gap-4"
              initial="hidden"
              animate="visible"
            >
              {platforms.map((platform, i) => (
                <motion.div key={platform.name} variants={fadeUp} custom={i}>
                  <Card className="p-5" data-testid={`card-platform-${i}`}>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <platform.icon className="w-6 h-6 text-accent" />
                      <h3 className="font-semibold text-lg">{platform.name}</h3>
                      <div className="flex items-center gap-2 ml-auto">
                        <span className="text-sm font-mono text-muted-foreground">Suitability</span>
                        <Badge variant={platform.score >= 85 ? "default" : "secondary"}>
                          {platform.score}/100
                        </Badge>
                      </div>
                    </div>
                    <Progress value={platform.score} className="h-1.5 mb-4" />
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                          Strengths
                        </h4>
                        <ul className="space-y-1.5">
                          {platform.pros.map((pro) => (
                            <li key={pro} className="text-xs text-muted-foreground flex gap-1.5">
                              <CheckCircle2 className="w-3 h-3 flex-shrink-0 mt-0.5 text-primary" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                          Considerations
                        </h4>
                        <ul className="space-y-1.5">
                          {platform.cons.map((con) => (
                            <li key={con} className="text-xs text-muted-foreground flex gap-1.5">
                              <ArrowRight className="w-3 h-3 flex-shrink-0 mt-0.5 text-chart-4" />
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-muted/40 rounded-md p-3">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                          Recommendation
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {platform.recommendation}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="languages">
            <motion.div
              className="grid gap-4"
              initial="hidden"
              animate="visible"
            >
              {languages.map((lang, i) => (
                <motion.div key={lang.name} variants={fadeUp} custom={i}>
                  <Card className="p-5" data-testid={`card-language-${i}`}>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <Code className="w-6 h-6 text-accent" />
                      <div>
                        <h3 className="font-semibold text-lg">{lang.name}</h3>
                        <p className="text-xs text-muted-foreground">{lang.engine}</p>
                      </div>
                      <div className="flex items-center gap-2 ml-auto">
                        <span className="text-sm font-mono text-muted-foreground">Score</span>
                        <Badge variant={lang.score >= 90 ? "default" : "secondary"}>
                          {lang.score}/100
                        </Badge>
                      </div>
                    </div>
                    <Progress value={lang.score} className="h-1.5 mb-4" />
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                          Strengths
                        </h4>
                        <ul className="space-y-1.5">
                          {lang.strengths.map((s) => (
                            <li key={s} className="text-xs text-muted-foreground flex gap-1.5">
                              <Zap className="w-3 h-3 flex-shrink-0 mt-0.5 text-primary" />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                          Considerations
                        </h4>
                        <ul className="space-y-1.5">
                          {lang.considerations.map((c) => (
                            <li key={c} className="text-xs text-muted-foreground flex gap-1.5">
                              <ArrowRight className="w-3 h-3 flex-shrink-0 mt-0.5 text-chart-4" />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-muted/40 rounded-md p-3">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                          Best For
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {lang.bestFor}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}

              <motion.div variants={fadeUp} custom={languages.length}>
                <Card className="p-5 border-accent/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-5 h-5 text-accent" />
                    <h3 className="font-semibold text-lg">Recommended Stack</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>C# with Unity 6</strong> is the recommended primary development language and engine. 
                    Unity's cross-platform deployment means a single codebase can target PC (Steam), 
                    Nintendo Switch, mobile companion apps, and WebGL demos. The mature animation 
                    pipeline, Timeline system for episodic cutscenes, and Netcode for multiplayer 
                    make it the most practical choice for GO KOALA!'s ambitious multi-format vision. 
                    Barry Ferrier's game development expertise combined with Unity's accessible C# 
                    scripting ensures rapid iteration on the episodic content schedule.
                  </p>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          <TabsContent value="architecture">
            <motion.div
              className="grid md:grid-cols-2 gap-4"
              initial="hidden"
              animate="visible"
            >
              {[
                {
                  icon: Server,
                  title: "Backend Infrastructure",
                  items: [
                    "Cloud-based multiplayer servers (AWS GameLift or PlayFab)",
                    "RESTful API for player profiles, saves, and leaderboards",
                    "WebSocket connections for real-time co-op gameplay",
                    "CDN distribution for episodic content updates",
                    "Database: PostgreSQL for player data, Redis for session state",
                    "Authentication: OAuth2 with platform-specific SSO",
                  ],
                },
                {
                  icon: Cpu,
                  title: "AI Translation System",
                  items: [
                    "Natural Language Processing engine for animal vocalisations",
                    "Machine learning model trained on koala acoustic data",
                    "Real-time translation UI overlay during gameplay",
                    "Progressive vocabulary unlocking tied to game progression",
                    "Cloud-based processing with local fallback for offline play",
                    "API integration for real-world koala vocalisation research data",
                  ],
                },
                {
                  icon: Globe,
                  title: "Content Delivery Pipeline",
                  items: [
                    "Episodic content delivered as downloadable chapters",
                    "Asset streaming for large Australian environment maps",
                    "Hot-loading for seasonal events and daily challenges",
                    "Version control and branching for multi-platform releases",
                    "Automated testing pipeline for cross-platform builds",
                    "Community content moderation for Story Forge submissions",
                  ],
                },
                {
                  icon: Monitor,
                  title: "Animated Series Integration",
                  items: [
                    "In-engine cinematic rendering using Unity Timeline",
                    "Real-time 3D animated episodes that reflect player choices",
                    "Export pipeline for standalone animated series distribution",
                    "Companion viewing mode: watch episodes within the game",
                    "Community episode voting system for branching storylines",
                    "Sync between series progression and game state",
                  ],
                },
              ].map((section, i) => (
                <motion.div key={section.title} variants={fadeUp} custom={i}>
                  <Card className="p-5 h-full">
                    <section.icon className="w-8 h-8 text-accent mb-3" />
                    <h3 className="font-semibold text-lg mb-3">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground flex gap-2">
                          <ArrowRight className="w-3 h-3 flex-shrink-0 mt-1 text-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="roadmap">
            <motion.div
              className="space-y-6"
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeUp} custom={0}>
                <Card className="p-6" data-testid="card-roadmap-overview">
                  <div className="flex items-start gap-3">
                    <Rocket className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-base mb-2">Delivery Strategy Overview</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        GO KOALA! follows a phased release strategy — building audience through a free web demo 
                        and animated series, then launching the full game on PC via Steam Early Access, expanding 
                        to consoles and mobile over 18 months. Each phase feeds the next, creating compound 
                        awareness and revenue streams.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {[
                {
                  phase: "Phase 1",
                  title: "Foundation & Awareness",
                  timeline: "Months 1 - 6",
                  icon: Globe,
                  status: "Build",
                  deliverables: [
                    {
                      name: "Playable Web Demo",
                      platform: "Browser (WebGL)",
                      desc: "A 15-minute slice of Episode 1: 'Leaving Home'. Players guide Ko through the opening territory, meet Little Patty, and encounter their first ecosystem puzzle. Zero-install — shareable via link.",
                      purpose: "Audience building, press coverage, school program distribution, conservation partner outreach",
                    },
                    {
                      name: "Animated Series Pilot",
                      platform: "YouTube / Streaming pitch",
                      desc: "Full animated pilot episode (22 minutes) rendered in-engine using Unity Timeline. Showcases the painterly realism art style, voice performances, and the biodiversity message.",
                      purpose: "Streaming platform pitches (ABC, Stan, Netflix), festival submissions, social media marketing",
                    },
                    {
                      name: "Community & Socials",
                      platform: "Discord / Social media",
                      desc: "Launch the GO KOALA! community: character reveals, behind-the-scenes art development, conservation partner announcements, and early feedback from the web demo.",
                      purpose: "Wishlist building, community-driven development feedback, brand awareness",
                    },
                  ],
                },
                {
                  phase: "Phase 2",
                  title: "PC Launch — Steam Early Access",
                  timeline: "Months 7 - 12",
                  icon: Monitor,
                  status: "Launch",
                  deliverables: [
                    {
                      name: "Episodes 1-4 (Early Access)",
                      platform: "PC (Steam)",
                      desc: "The first half of Season 1: Leaving Home, Crossing the Creek, Highway of Doom, and The Attack. Full co-op multiplayer (2-4 players), habitat restoration mechanics, and the AI translator introduction.",
                      purpose: "Primary revenue, community feedback loop, Steam review momentum, content creator coverage",
                    },
                    {
                      name: "Story Forge (Community Tools)",
                      platform: "Steam Workshop",
                      desc: "Player-created stories and levels using a built-in editor. Indigenous art-inspired asset packs (created with community consultation) available for community creators.",
                      purpose: "Extends content lifespan, builds modding community, generates organic social media content",
                    },
                    {
                      name: "Conservation Partnerships",
                      platform: "In-game + real world",
                      desc: "Partner with Australian wildlife organisations. In-game species profiles link to real conservation efforts. Optional donations integrated at natural story moments.",
                      purpose: "Brand alignment, education credibility, potential grant funding, media coverage",
                    },
                  ],
                },
                {
                  phase: "Phase 3",
                  title: "Full Release & Console Expansion",
                  timeline: "Months 12 - 18",
                  icon: Gamepad2,
                  status: "Expand",
                  deliverables: [
                    {
                      name: "Episodes 5-8 + Full Release",
                      platform: "PC (Steam / Epic)",
                      desc: "Complete Season 1: Human World, The Voice of the Forest, Fame Spiral, and Home Again. Exit Early Access with full multiplayer, competitive modes, and the complete narrative arc.",
                      purpose: "Full-price launch, expanded audience, Steam sale events, content creator resurgence",
                    },
                    {
                      name: "Nintendo Switch Version",
                      platform: "Nintendo eShop",
                      desc: "Optimised for handheld and couch co-op. Touch-friendly UI for portable play. Family-friendly certification and parental controls built in.",
                      purpose: "Access the family audience directly — Switch is the primary platform for 8-14 year-olds and family co-play",
                    },
                    {
                      name: "PlayStation / Xbox",
                      platform: "PS5 / Xbox Series",
                      desc: "Console versions with enhanced visuals, DualSense haptic integration (PS5), and platform-specific achievements. Cross-save with PC.",
                      purpose: "Reach the 15-25 young adult segment, leverage console ecosystem marketing",
                    },
                  ],
                },
                {
                  phase: "Phase 4",
                  title: "Mobile & Ecosystem Growth",
                  timeline: "Months 18 - 24",
                  icon: Smartphone,
                  status: "Scale",
                  deliverables: [
                    {
                      name: "Mobile Companion App",
                      platform: "iOS / Android (tablet-first)",
                      desc: "Simplified explorer mode for younger players (5-7). Colony management, species journal, AI translator mini-game, and bush tucker identification. Syncs with the full game.",
                      purpose: "Reach the family/co-viewing audience, educational market, conservation awareness at scale",
                    },
                    {
                      name: "Animated Series — Season 1",
                      platform: "Streaming (ABC / Stan / Netflix)",
                      desc: "Full 10-episode animated series based on the game's Season 1 arc. Rendered in-engine with cinematic polish. Each episode connects to game content players can explore.",
                      purpose: "Dual-medium IP generates 2x licensing revenue, drives new players to the game, extends brand reach globally",
                    },
                    {
                      name: "Educational Programme",
                      platform: "Schools / Museums / Web",
                      desc: "Classroom-ready biodiversity curriculum built around GO KOALA! content. Teacher guides, interactive web modules, and museum exhibit partnerships. Indigenous knowledge modules created with community input.",
                      purpose: "Institutional revenue, long-tail brand awareness, conservation impact measurement, cultural respect and education",
                    },
                  ],
                },
                {
                  phase: "Phase 5",
                  title: "Season 2 & Beyond",
                  timeline: "Months 24+",
                  icon: Star,
                  status: "Grow",
                  deliverables: [
                    {
                      name: "Season 2 Content",
                      platform: "All platforms",
                      desc: "New episodes, new regions of the Australian bush, additional playable species, and deeper Indigenous cultural storylines. Community-voted story directions from Story Forge influence the narrative.",
                      purpose: "Sustained revenue, community retention, expanded world-building",
                    },
                    {
                      name: "Merchandise & Licensing",
                      platform: "Retail / Online",
                      desc: "Plush toys, apparel, educational kits, art books featuring Indigenous artist collaborations, and conservation charity tie-in products. The cast of 8+ characters provides deep product line potential.",
                      purpose: "Ancillary revenue, brand visibility in physical spaces, conservation fundraising",
                    },
                    {
                      name: "Global Localisation",
                      platform: "All platforms",
                      desc: "Full localisation into major languages. Partnerships with international conservation organisations to adapt the biodiversity message to local ecosystems while keeping the Australian heart.",
                      purpose: "Global market expansion, international streaming deals, educational programme licensing",
                    },
                  ],
                },
              ].map((phase, i) => (
                <motion.div key={phase.phase} variants={fadeUp} custom={i + 1}>
                  <Card className="p-6" data-testid={`card-phase-${i + 1}`}>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <div className="p-2 rounded-md bg-accent/10">
                        <phase.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-serif text-lg font-bold">{phase.phase}: {phase.title}</h3>
                          <Badge variant="secondary">{phase.status}</Badge>
                        </div>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <Calendar className="w-3 h-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground font-mono">{phase.timeline}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      {phase.deliverables.map((d) => (
                        <Card key={d.name} className="p-4">
                          <div className="flex items-start gap-2 mb-2">
                            <Package className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            <div className="min-w-0">
                              <h4 className="font-semibold text-sm">{d.name}</h4>
                              <Badge variant="outline" className="text-[10px] mt-1">{d.platform}</Badge>
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed mb-3">{d.desc}</p>
                          <div className="bg-muted/40 rounded-md p-2.5">
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Purpose</span>
                            <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{d.purpose}</p>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}

              <motion.div variants={fadeUp} custom={6}>
                <Card className="p-6 border-accent/30" data-testid="card-revenue-model">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-accent" />
                    <h3 className="font-serif text-lg font-bold">Revenue Model Summary</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {[
                      { stream: "Game Sales", detail: "Premium pricing on PC & console, Early Access discount, seasonal sales", phase: "Phase 2-3" },
                      { stream: "Animated Series", detail: "Streaming platform licensing, international distribution, educational broadcast rights", phase: "Phase 4-5" },
                      { stream: "Mobile & Companion", detail: "Premium app or ethical free-to-play, cosmetic-only purchases, no pay-to-win", phase: "Phase 4" },
                      { stream: "Merch & Licensing", detail: "Plush toys, Indigenous artist collabs, educational kits, conservation partnerships", phase: "Phase 5+" },
                    ].map((rev) => (
                      <Card key={rev.stream} className="p-3">
                        <h4 className="font-semibold text-sm mb-1">{rev.stream}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed mb-2">{rev.detail}</p>
                        <Badge variant="outline" className="text-[10px]">{rev.phase}</Badge>
                      </Card>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
