import { motion } from "framer-motion";
import { usePageTitle } from "@/hooks/use-page-title";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Target, Users, Baby, GraduationCap, Heart,
  TrendingUp, Globe, Tv, Gamepad2, ShoppingBag,
  BarChart3, ArrowRight
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const audienceSegments = [
  {
    tier: "Primary",
    ageRange: "8 - 14",
    label: "Core Audience",
    icon: Target,
    color: "text-accent",
    bgColor: "bg-accent/10",
    percentage: 45,
    description: "The heartbeat of GO KOALA! — young players and viewers who connect most deeply with Ko's coming-of-age journey.",
    reasons: [
      "Ko's quest to find his own territory mirrors the desire for independence and identity that defines this age group",
      "Cooperative multiplayer mechanics (2-4 player co-op exploration) are perfectly pitched for social play with friends",
      "Environmental puzzles and resource gathering match cognitive development — challenging without being frustrating",
      "The animated series' episodic cliffhangers and friendship arcs drive engagement and loyalty",
      "Character customisation and progression systems tap into the collecting and self-expression instincts of this demographic",
    ],
    platforms: ["PC (Steam)", "Console (Switch / PlayStation)", "Mobile (tablet)"],
    comparables: ["Bluey", "Spyro Reignited Trilogy", "Slime Rancher", "Ori and the Blind Forest"],
  },
  {
    tier: "Secondary",
    ageRange: "15 - 25",
    label: "Young Adult Crossover",
    icon: GraduationCap,
    color: "text-primary",
    bgColor: "bg-primary/10",
    percentage: 30,
    description: "Drawn by deeper narrative layers, Studio Ghibli-inspired art, and competitive multiplayer modes.",
    reasons: [
      "Themes of belonging, environmental ethics, and AI communication resonate with socially-conscious young adults",
      "The 'painterly realism' visual style — blending Ghibli landscapes with Pixar character animation — appeals to animation enthusiasts",
      "Competitive multiplayer modes (territory races, survival challenges) provide skill-based gameplay depth",
      "The AI translation subplot taps into current cultural conversations about technology and nature",
      "Indie-game aesthetics and environmental messaging align with values-driven consumption patterns in this cohort",
    ],
    platforms: ["PC (Steam / Epic)", "Console (PlayStation / Xbox)", "Streaming (animated series)"],
    comparables: ["Avatar: The Last Airbender", "Hollow Knight", "Stardew Valley", "Ghibli films"],
  },
  {
    tier: "Tertiary",
    ageRange: "5 - 7 & Parents",
    label: "Family Co-Viewing",
    icon: Heart,
    color: "text-destructive",
    bgColor: "bg-destructive/10",
    percentage: 25,
    description: "The 'Bluey effect' — younger children watch with parents, who value the educational and conservation themes.",
    reasons: [
      "Adorable Australian animal characters are immediately appealing to young children",
      "The animated series works as supervised co-viewing with parents guiding the conservation themes",
      "Simplified 'explorer mode' gameplay lets younger siblings participate alongside older players",
      "Parents appreciate the environmental education woven naturally into entertaining stories",
      "Real Australian wildlife and landscapes provide genuine learning opportunities about ecology and biodiversity",
    ],
    platforms: ["Mobile (tablet with parental controls)", "Streaming (family viewing)", "Console (couch co-op)"],
    comparables: ["Bluey", "Octonauts", "Wild Kratts", "Animal Crossing: New Horizons"],
  },
];

const marketInsights = [
  {
    icon: TrendingUp,
    title: "Growing Market",
    stat: "$184B",
    desc: "Global games market revenue in 2025, with family and indie segments outpacing growth. Animal-centric and environmental games are an underserved niche.",
  },
  {
    icon: Globe,
    title: "Global Appeal",
    stat: "190+",
    desc: "Countries where Australian wildlife content trends on streaming platforms. Koalas are universally beloved — instant brand recognition.",
  },
  {
    icon: Tv,
    title: "Dual Revenue",
    stat: "2x",
    desc: "Properties with both animated series and game adaptations generate roughly double the licensing and merchandising revenue of single-medium IPs.",
  },
  {
    icon: ShoppingBag,
    title: "Merch Potential",
    stat: "High",
    desc: "Plush toys, apparel, educational kits, and conservation partnership tie-ins. The cast of 8 characters provides extensive product line depth.",
  },
];

const engagementStrategies = [
  {
    age: "5 - 7",
    strategy: "Guided Discovery",
    details: "Simplified controls, voice-narrated objectives, safe explorer mode with no fail states. Conservation facts presented through friendly character dialogue.",
  },
  {
    age: "8 - 10",
    strategy: "Adventure & Collection",
    details: "Core story campaign with collectible items, habitat restoration mini-games, and cooperative quests. Achievement badges tied to real-world conservation milestones.",
  },
  {
    age: "11 - 14",
    strategy: "Challenge & Community",
    details: "Competitive multiplayer modes, territory management strategy, community events, and user-generated content. Deeper narrative choices with meaningful consequences.",
  },
  {
    age: "15 - 25",
    strategy: "Narrative & Competition",
    details: "Full story with branching paths, ranked competitive modes, speedrunning community support, modding tools, and lore-deep world exploration. The AI subplot unfolds fully.",
  },
  {
    age: "Parents",
    strategy: "Values & Education",
    details: "Parental dashboard showing learning outcomes, donation tie-ins with wildlife conservation organisations, and family play modes designed for shared experiences.",
  },
];

export default function Audience() {
  usePageTitle("Target Audience & Demographics", "Demographic analysis for GO KOALA! covering primary (8-14), secondary (15-25), and family audiences with market insights and engagement strategies.");
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} custom={0}>
            <Badge variant="outline" className="mb-4">Market Analysis</Badge>
          </motion.div>
          <motion.h1
            className="font-serif text-4xl sm:text-5xl font-bold mb-4"
            variants={fadeUp}
            custom={1}
            data-testid="text-audience-title"
          >
            Target Audience & Demographics
          </motion.h1>
          <motion.p
            className="text-muted-foreground max-w-3xl mx-auto text-base leading-relaxed"
            variants={fadeUp}
            custom={2}
          >
            GO KOALA! is designed to capture three distinct audience segments — 
            with the core experience built for 8-14 year-olds and broad family appeal 
            extending from age 5 through to young adults and co-viewing parents.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {audienceSegments.map((segment, i) => (
            <motion.div key={segment.tier} variants={fadeUp} custom={i}>
              <Card className="p-6 h-full" data-testid={`card-audience-${segment.tier.toLowerCase()}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-md ${segment.bgColor}`}>
                    <segment.icon className={`w-5 h-5 ${segment.color}`} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-base">{segment.tier}</h3>
                      <Badge variant="secondary">{segment.label}</Badge>
                    </div>
                  </div>
                </div>

                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-serif text-3xl font-bold">{segment.ageRange}</span>
                  <span className="text-sm text-muted-foreground">years old</span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${segment.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.2 }}
                    />
                  </div>
                  <span className="text-sm font-mono text-muted-foreground">{segment.percentage}%</span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {segment.description}
                </p>

                <Separator className="my-4" />

                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Why this age group</h4>
                <ul className="space-y-2 mb-4">
                  {segment.reasons.map((reason, j) => (
                    <li key={j} className="flex gap-2 text-sm">
                      <ArrowRight className="w-3.5 h-3.5 text-accent mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{reason}</span>
                    </li>
                  ))}
                </ul>

                <Separator className="my-4" />

                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Preferred Platforms</h4>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {segment.platforms.map((platform) => (
                    <Badge key={platform} variant="outline" className="text-xs">
                      {platform}
                    </Badge>
                  ))}
                </div>

                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Comparable Properties</h4>
                <div className="flex flex-wrap gap-1.5">
                  {segment.comparables.map((comp) => (
                    <Badge key={comp} variant="secondary" className="text-xs">
                      {comp}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="font-serif text-2xl sm:text-3xl font-bold text-center mb-8"
            variants={fadeUp}
            custom={0}
            data-testid="text-market-insights-title"
          >
            Market Insights
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {marketInsights.map((insight, i) => (
              <motion.div key={insight.title} variants={fadeUp} custom={i}>
                <Card className="p-5 h-full text-center" data-testid={`card-insight-${i}`}>
                  <insight.icon className="w-7 h-7 text-accent mx-auto mb-3" />
                  <span className="font-serif text-2xl font-bold block mb-1">{insight.stat}</span>
                  <h3 className="font-semibold text-sm mb-2">{insight.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{insight.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="font-serif text-2xl sm:text-3xl font-bold text-center mb-3"
            variants={fadeUp}
            custom={0}
            data-testid="text-engagement-title"
          >
            Engagement by Age
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-center max-w-2xl mx-auto mb-8 text-sm"
            variants={fadeUp}
            custom={1}
          >
            Each age bracket receives a tailored experience — the same world, 
            different depths of interaction.
          </motion.p>

          <div className="space-y-3">
            {engagementStrategies.map((strategy, i) => (
              <motion.div key={strategy.age} variants={fadeUp} custom={i}>
                <Card className="p-4" data-testid={`card-strategy-${i}`}>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                    <div className="flex items-center gap-3 sm:w-48 flex-shrink-0">
                      <Badge variant="outline" className="font-mono text-xs whitespace-nowrap">
                        {strategy.age}
                      </Badge>
                      <span className="font-semibold text-sm">{strategy.strategy}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{strategy.details}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} custom={0}>
            <Card className="p-8 max-w-2xl mx-auto">
              <BarChart3 className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-serif text-xl font-bold mb-3" data-testid="text-summary-title">
                The Sweet Spot
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                GO KOALA! targets <strong>8-14 year-olds</strong> as its core audience, with 
                broad family appeal from <strong>age 5 through to young adults (25+)</strong>. 
                This positions it alongside successful properties like <em>Bluey</em> and <em>Avatar: 
                The Last Airbender</em> — franchises that captured a core youth demographic while 
                building passionate crossover audiences across all age groups.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
