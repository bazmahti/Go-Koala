import { motion } from "framer-motion";
import { usePageTitle } from "@/hooks/use-page-title";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Monitor, Smartphone, Globe, Code, Server, Cpu,
  ArrowRight, CheckCircle2, Star, Zap, Gamepad2
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
        </Tabs>
      </div>
    </div>
  );
}
