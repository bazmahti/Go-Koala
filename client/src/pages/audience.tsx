import { motion } from "framer-motion";
import { usePageTitle } from "@/hooks/use-page-title";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Target, GraduationCap, Heart, Leaf, Flower2,
  TrendingUp, Globe, Tv, ShoppingBag,
  BarChart3, ArrowRight, TreePine, Feather
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
    description: "The heartbeat of GO KOALA! — young players and viewers who connect with Ko's journey and learn to see the bush through the eyes of both its animals and its First Nations custodians.",
    reasons: [
      "Ko's quest to find territory mirrors the desire for independence that defines this age group — while teaching that land is shared, not owned",
      "Biodiversity puzzles challenge players to restore habitats by understanding ecosystems: which plants attract which pollinators, how fire ecology works, why corridors matter",
      "Cooperative multiplayer (2-4 player co-op) encourages teamwork and empathy — players must care for different species to progress",
      "Indigenous seasonal knowledge is woven into gameplay cycles: players learn about the six Noongar seasons and how Country changes through the year",
      "Character customisation includes traditional pattern-inspired designs created in consultation with Indigenous artists, fostering respect and curiosity",
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
    description: "Drawn by deeper ecological narratives, the intersection of Indigenous knowledge with modern science, and competitive multiplayer modes.",
    reasons: [
      "Themes of belonging, land stewardship, and interspecies connection resonate with socially-conscious young adults",
      "The narrative explores how 65,000 years of Indigenous land management created the biodiversity Ko depends on — told with reverence, not exposition",
      "Competitive multiplayer modes (territory restoration races, survival challenges) provide skill-based depth with ecological stakes",
      "The AI translation subplot raises genuine questions about listening to Country and whether technology can bridge the gap between humans and the natural world",
      "Indie-game aesthetics and values-driven messaging align with this cohort's consumption patterns — they support brands that stand for something real",
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
    description: "The 'Bluey effect' — younger children are captivated by the animals, while parents value the biodiversity education and respectful cultural representation.",
    reasons: [
      "Australian animal characters are immediately appealing — and each one introduces a real species and its role in the ecosystem",
      "The animated series works as supervised co-viewing, with storylines that naturally introduce concepts like habitat corridors, keystone species, and seasonal fire",
      "Simplified 'explorer mode' lets younger siblings participate: identifying plants, tracking animals, and learning bush tucker names in language",
      "Parents appreciate that Indigenous culture is presented with authenticity and respect — not as a novelty, but as living knowledge central to the story",
      "Real Australian landscapes and traditional place names provide genuine learning opportunities about ecology, language, and deep-time connection to Country",
    ],
    platforms: ["Mobile (tablet with parental controls)", "Streaming (family viewing)", "Console (couch co-op)"],
    comparables: ["Bluey", "Octonauts", "Wild Kratts", "Animal Crossing: New Horizons"],
  },
];

const missionPillars = [
  {
    icon: Leaf,
    title: "Biodiversity Literacy",
    description: "Every episode and game level is grounded in real Australian ecology. Players don't just save animals — they learn why each species matters to the whole system. Koalas need specific eucalyptus species. Those trees need mycorrhizal fungi. Those fungi need undisturbed soil. GO KOALA! teaches kids to see these connections.",
    examples: [
      "Habitat restoration mechanics based on real revegetation science",
      "Species interaction chains — players discover why removing one creature affects everything",
      "Seasonal ecology: fire, flood, drought, and regrowth as gameplay cycles",
      "Real endangered species data woven into collectible creature profiles",
    ],
  },
  {
    icon: Feather,
    title: "Indigenous Knowledge & Culture",
    description: "Australia's First Nations peoples are the world's oldest continuous culture — over 65,000 years of custodianship that shaped the landscapes Ko travels through. GO KOALA! honours this by weaving Indigenous perspectives into the fabric of the world, not as a sidebar, but as a foundation the story rests on.",
    examples: [
      "Traditional ecological knowledge integrated into gameplay: cultural burning, seasonal movement, reading Country",
      "Place names presented in local Indigenous languages alongside English — normalising dual naming",
      "Sage the elder wombat embodies the concept of passing knowledge between generations, reflecting oral tradition",
      "Indigenous art-inspired visual motifs in UI, environment design, and unlockable content — created with community consultation",
    ],
  },
  {
    icon: Flower2,
    title: "Connection to Country",
    description: "Country in the Indigenous Australian sense is not just land — it's the living relationship between people, animals, plants, waterways, sky, and story. GO KOALA! introduces this concept gently, showing young audiences that caring for nature is not a modern invention but an ancient responsibility.",
    examples: [
      "The game world responds to how players treat it — healthy Country thrives, neglected Country degrades",
      "Dreamtime-inspired story threads that explain why the land is the way it is",
      "Water as a sacred connector: rivers and waterholes link game regions and carry narrative meaning",
      "End-of-episode reflections that connect gameplay actions to real-world conservation and cultural practice",
    ],
  },
];

const marketInsights = [
  {
    icon: TrendingUp,
    title: "Growing Market",
    stat: "$184B",
    desc: "Global games market revenue in 2025. Family, educational, and eco-conscious games are outpacing growth — and biodiversity content is an underserved niche.",
  },
  {
    icon: Globe,
    title: "Global Appeal",
    stat: "190+",
    desc: "Countries where Australian wildlife trends on streaming. Koalas are universally beloved, and Indigenous Australian culture has growing international recognition and respect.",
  },
  {
    icon: Tv,
    title: "Dual Revenue",
    stat: "2x",
    desc: "Properties with both animated series and game adaptations generate roughly double the licensing revenue. Educational IP adds school and museum partnership potential.",
  },
  {
    icon: ShoppingBag,
    title: "Impact Merch",
    stat: "High",
    desc: "Conservation-tied merchandise, Indigenous artist collaborations, educational kits, and wildlife charity partnerships. Authenticity drives value in this market.",
  },
];

const engagementStrategies = [
  {
    age: "5 - 7",
    strategy: "Guided Discovery",
    details: "Simplified controls, voice-narrated objectives, safe explorer mode with no fail states. Kids identify animals and plants, hear their names in Indigenous languages, and learn what each creature needs to thrive.",
  },
  {
    age: "8 - 10",
    strategy: "Biodiversity Builders",
    details: "Core story campaign with habitat restoration mini-games, species collection journals, and cooperative quests. Players learn about food webs, seasonal ecology, and earn badges tied to real-world conservation milestones.",
  },
  {
    age: "11 - 14",
    strategy: "Ecosystem Guardians",
    details: "Competitive multiplayer, territory management strategy, and deeper narrative choices. Players manage complex ecosystems, make decisions about land use, and explore how Indigenous fire management compares to modern approaches.",
  },
  {
    age: "15 - 25",
    strategy: "Narrative & Culture",
    details: "Full branching story with deep ecological and cultural themes. The AI translation subplot unfolds alongside questions about what it means to truly listen to Country. Ranked competitive modes and modding tools for community creation.",
  },
  {
    age: "Parents",
    strategy: "Values & Learning",
    details: "Parental dashboard showing biodiversity concepts learned, cultural knowledge encountered, and real-world conservation connections. Donation tie-ins with wildlife and Indigenous cultural organisations.",
  },
];

export default function Audience() {
  usePageTitle("Target Audience & Demographics", "Demographic analysis for GO KOALA! — a biodiversity message for kids that champions Indigenous culture, targeting ages 8-14 with broad family appeal.");
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} custom={0} className="flex flex-wrap items-center justify-center gap-2 mb-4">
            <Badge variant="outline">Biodiversity</Badge>
            <Badge variant="outline">Indigenous Culture</Badge>
            <Badge variant="outline">Market Analysis</Badge>
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
            GO KOALA! is a biodiversity message wrapped in adventure. Built for 8-14 year-olds 
            with broad family appeal, it teaches kids to see the Australian bush as a living system — 
            and honours the Indigenous custodians who have cared for it for over 65,000 years.
          </motion.p>
        </motion.div>

        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="font-serif text-2xl sm:text-3xl font-bold text-center mb-3"
            variants={fadeUp}
            custom={0}
            data-testid="text-mission-title"
          >
            Core Mission
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-center max-w-2xl mx-auto mb-8 text-sm"
            variants={fadeUp}
            custom={1}
          >
            Entertainment with purpose — every game mechanic and story beat serves 
            these three interconnected pillars.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {missionPillars.map((pillar, i) => (
              <motion.div key={pillar.title} variants={fadeUp} custom={i}>
                <Card className="p-6 h-full" data-testid={`card-mission-${i}`}>
                  <pillar.icon className="w-7 h-7 text-accent mb-3" />
                  <h3 className="font-semibold text-base mb-2">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                  <Separator className="my-3" />
                  <ul className="space-y-2">
                    {pillar.examples.map((example, j) => (
                      <li key={j} className="flex gap-2 text-sm">
                        <ArrowRight className="w-3.5 h-3.5 text-accent mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{example}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
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
          className="mb-16"
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
            The same world, different depths — each age bracket receives a tailored 
            experience that meets them where they are.
          </motion.p>

          <div className="space-y-3">
            {engagementStrategies.map((strategy, i) => (
              <motion.div key={strategy.age} variants={fadeUp} custom={i}>
                <Card className="p-4" data-testid={`card-strategy-${i}`}>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                    <div className="flex items-center gap-3 sm:w-52 flex-shrink-0">
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
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} custom={0}>
            <Card className="p-8 max-w-2xl mx-auto">
              <TreePine className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-serif text-xl font-bold mb-3" data-testid="text-summary-title">
                The Sweet Spot
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                GO KOALA! targets <strong>8-14 year-olds</strong> as its core audience, with 
                broad family appeal from <strong>age 5 through to young adults (25+)</strong>. 
                At its heart, it's a biodiversity message — teaching kids that the Australian bush 
                is not just a backdrop but a living, interconnected system that Indigenous Australians 
                have understood and nurtured for tens of thousands of years.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                This positions GO KOALA! alongside franchises like <em>Bluey</em> and <em>Avatar: 
                The Last Airbender</em> — properties that captured a core youth audience while 
                building passionate crossover communities, all anchored by values that matter.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
