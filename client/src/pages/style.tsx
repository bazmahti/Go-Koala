import { motion } from "framer-motion";
import { usePageTitle } from "@/hooks/use-page-title";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Palette, Brush, Music, Camera, Type, Layers,
  ArrowRight, Sparkles, Sun, Moon
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Style() {
  usePageTitle("Stylistic Vision & Art Direction", "Visual language, art direction, sound design, and aesthetic philosophy for GO KOALA! including painterly realism style and Australian bush palette.");
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} custom={0}>
            <Badge variant="secondary" className="mb-3">Creative Direction</Badge>
          </motion.div>
          <motion.h1
            className="font-serif text-4xl sm:text-5xl font-bold mb-4"
            variants={fadeUp}
            custom={1}
            data-testid="text-style-title"
          >
            Stylistic Vision
          </motion.h1>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            variants={fadeUp}
            custom={2}
          >
            The visual language, art direction, and aesthetic philosophy 
            that will make GO KOALA! a distinctive and memorable experience.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-6"
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} custom={3}>
            <Card className="p-6">
              <Palette className="w-8 h-8 text-accent mb-3" />
              <h3 className="font-semibold text-xl mb-3">Art Direction: "Painterly Realism"</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                GO KOALA! adopts a <strong>"painterly realism"</strong> art style that sits between 
                photorealism and stylised illustration. Think the warm, textured worlds of 
                Studio Ghibli's natural landscapes combined with the expressive character 
                animation of Pixar. The Australian bush should feel alive, golden, and slightly 
                magical, whilst the animals have exaggerated, appealing features that support 
                their emotional range without losing their essential "Australian-ness".
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    title: "Environment Palette",
                    desc: "Warm eucalyptus greens, dusty ochres, amber sunlight, purple twilight shadows. The bush should feel warm and inviting during day, mysterious and slightly threatening at night. Seasonal variation across episodes.",
                    colors: [
                      { name: "Eucalyptus", hsl: "hsl(145, 35%, 42%)" },
                      { name: "Ochre", hsl: "hsl(38, 65%, 50%)" },
                      { name: "Bark", hsl: "hsl(25, 30%, 35%)" },
                      { name: "Sky Gold", hsl: "hsl(45, 80%, 65%)" },
                      { name: "Twilight", hsl: "hsl(270, 25%, 30%)" },
                    ],
                  },
                  {
                    title: "Character Palette",
                    desc: "Ko and the koalas use soft greys with warm undertones. Little Patty has rich chocolate browns. Evan's quills catch golden highlights. Humans use warm, natural tones. Wedgie's plumage is dark and imposing.",
                    colors: [
                      { name: "Koala Grey", hsl: "hsl(30, 8%, 65%)" },
                      { name: "Platypus", hsl: "hsl(25, 40%, 35%)" },
                      { name: "Echidna", hsl: "hsl(35, 45%, 45%)" },
                      { name: "Eagle Dark", hsl: "hsl(20, 20%, 18%)" },
                      { name: "Human Warm", hsl: "hsl(25, 30%, 55%)" },
                    ],
                  },
                  {
                    title: "UI & Interface Palette",
                    desc: "Game UI uses a natural wood and leaf aesthetic. Menus feel like they're carved from bark or painted on eucalyptus leaves. The AI translator interface contrasts with a clean, modern digital blue.",
                    colors: [
                      { name: "Leaf", hsl: "hsl(145, 45%, 30%)" },
                      { name: "Bark UI", hsl: "hsl(30, 25%, 28%)" },
                      { name: "Parchment", hsl: "hsl(40, 30%, 90%)" },
                      { name: "AI Blue", hsl: "hsl(210, 60%, 50%)" },
                      { name: "Alert", hsl: "hsl(0, 65%, 45%)" },
                    ],
                  },
                ].map((palette) => (
                  <div key={palette.title} className="bg-muted/40 rounded-md p-4">
                    <h4 className="font-semibold text-sm mb-2">{palette.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">{palette.desc}</p>
                    <div className="flex gap-2">
                      {palette.colors.map((color) => (
                        <div key={color.name} className="flex flex-col items-center gap-1">
                          <div
                            className="w-8 h-8 rounded-md border border-border"
                            style={{ backgroundColor: color.hsl }}
                          />
                          <span className="text-[10px] text-muted-foreground">{color.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            <motion.div variants={fadeUp} custom={4}>
              <Card className="p-5 h-full">
                <Brush className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-semibold text-lg mb-3">Animation Style</h3>
                <ul className="space-y-3">
                  {[
                    {
                      title: "Character Animation",
                      desc: "Fluid, expressive animation with squash-and-stretch principles. Ko's movements should feel weighty but endearing. Exaggerated facial expressions for emotional storytelling.",
                    },
                    {
                      title: "Environmental Animation",
                      desc: "Wind through eucalyptus canopy, flowing water in creeks, dynamic weather systems. The bush should breathe and move. Particle effects for dust, leaves, fireflies.",
                    },
                    {
                      title: "Cinematic Sequences",
                      desc: "In-engine cinematics using Unity Timeline. Camera work inspired by nature documentaries but with dramatic flair. Slow motion for key moments (Wedgie's attack, the car strike).",
                    },
                    {
                      title: "Transition Effects",
                      desc: "Episode transitions use painted wipe effects. Scene changes feel like turning pages in a storybook. Loading screens feature animated sketches of upcoming scenes.",
                    },
                  ].map((item) => (
                    <li key={item.title}>
                      <span className="font-semibold text-sm">{item.title}</span>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp} custom={5}>
              <Card className="p-5 h-full">
                <Music className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-semibold text-lg mb-3">Sound Design & Music</h3>
                <ul className="space-y-3">
                  {[
                    {
                      title: "Score",
                      desc: "Orchestral soundtrack with Australian instruments: didgeridoo, clap sticks, bullroarer. Ambient bush sounds woven into the musical fabric. Each character has a leitmotif.",
                    },
                    {
                      title: "Sound Design",
                      desc: "Authentic Australian bush soundscape: kookaburra calls, cicada chorus, creek babbling. Spatialized 3D audio for immersive gameplay. Weather sounds are dynamic and reactive.",
                    },
                    {
                      title: "Voice Direction",
                      desc: "Animals communicate through expressive vocalisations (not English dialogue in-game). The AI translator overlays text. Karen and human characters use naturalistic Australian voice acting.",
                    },
                    {
                      title: "Adaptive Music",
                      desc: "Dynamic music system that responds to gameplay state. Exploration uses gentle ambient themes. Combat intensifies with percussion. Emotional scenes use solo piano or strings.",
                    },
                  ].map((item) => (
                    <li key={item.title}>
                      <span className="font-semibold text-sm">{item.title}</span>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <motion.div variants={fadeUp} custom={6}>
              <Card className="p-5 h-full">
                <Camera className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-semibold text-lg mb-3">Camera & Perspective</h3>
                <ul className="space-y-2">
                  {[
                    "Third-person follow camera with smart framing during platforming",
                    "Dynamic zoom: tight close-ups during dialogue, wide shots for exploration",
                    "Bird's-eye view for territory management and colony building",
                    "First-person vignettes for dramatic moments (Ko's perspective during the car strike)",
                    "Photo mode with depth of field, filters, and wildlife photography framing",
                    "Split-screen support for local co-op gameplay",
                    "Cinematic camera rails for episodic cutscenes with dolly and crane moves",
                  ].map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex gap-2">
                      <ArrowRight className="w-3 h-3 flex-shrink-0 mt-1 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp} custom={7}>
              <Card className="p-5 h-full">
                <Type className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-semibold text-lg mb-3">Typography & UI Language</h3>
                <ul className="space-y-2">
                  {[
                    "Display font: rounded, organic typeface reminiscent of hand-painted bush signage",
                    "Body text: clean sans-serif for readability in dialogue and menus",
                    "AI translator text: monospaced digital font that contrasts with natural world",
                    "Episode titles: hand-lettered style with eucalyptus leaf decorations",
                    "HUD elements: minimal, semi-transparent, positioned to preserve immersion",
                    "Accessibility: full subtitle support, dyslexia-friendly font option, scalable UI",
                    "Localisation-ready: text containers designed for translation expansion",
                  ].map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex gap-2">
                      <ArrowRight className="w-3 h-3 flex-shrink-0 mt-1 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} custom={8}>
            <Card className="p-5">
              <Layers className="w-8 h-8 text-accent mb-3" />
              <h3 className="font-semibold text-lg mb-3">Visual Reference & Influences</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    title: "Ori & The Blind Forest",
                    aspect: "Environmental beauty",
                    desc: "The lush, painterly forest environments and emotional storytelling through environment design. GO KOALA!'s bush should feel equally alive and beautiful.",
                  },
                  {
                    title: "Studio Ghibli Films",
                    aspect: "Nature reverence",
                    desc: "Particularly Princess Mononoke and My Neighbour Totoro. The way nature is portrayed as magical, sacred, and worth protecting directly aligns with GO KOALA!'s themes.",
                  },
                  {
                    title: "Crash Bandicoot",
                    aspect: "Australian character",
                    desc: "While more cartoonish, Crash proved that Australian-inspired characters and environments can be globally appealing. GO KOALA! takes this further with authentic wildlife.",
                  },
                  {
                    title: "Life is Strange",
                    aspect: "Narrative choices",
                    desc: "The episodic structure, meaningful choices, and emotional depth of Life is Strange's storytelling model is the template for GO KOALA!'s narrative design.",
                  },
                ].map((ref) => (
                  <div key={ref.title} className="bg-muted/40 rounded-md p-4">
                    <h4 className="font-semibold text-sm">{ref.title}</h4>
                    <Badge variant="secondary" className="text-xs mt-1 mb-2">{ref.aspect}</Badge>
                    <p className="text-xs text-muted-foreground leading-relaxed">{ref.desc}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div variants={fadeUp} custom={9}>
            <Card className="p-5">
              <Sparkles className="w-8 h-8 text-accent mb-3" />
              <h3 className="font-semibold text-lg mb-3">Time of Day & Lighting</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    icon: Sun,
                    time: "Dawn",
                    desc: "Misty, soft pink and gold light filtering through eucalyptus canopy. Dewy spider webs glisten. Kookaburras begin their chorus. The safest time for exploration.",
                    mood: "Hope & New Beginnings",
                  },
                  {
                    icon: Sun,
                    time: "Midday",
                    desc: "Harsh Australian sun creates dramatic shadows. Heat shimmer on the highway. Animals rest in shade. Intense, vibrant colours with bleached highlights.",
                    mood: "Challenge & Endurance",
                  },
                  {
                    icon: Sun,
                    time: "Golden Hour",
                    desc: "Warm amber light bathes everything. Long shadows create beautiful compositions. The bush glows. This is when the world feels most magical and cinematic.",
                    mood: "Beauty & Connection",
                  },
                  {
                    icon: Moon,
                    time: "Night",
                    desc: "Moonlit scenes with blue-silver tones. Ollie is most active. Bioluminescent fungi and fireflies provide points of light. Predator danger increases.",
                    mood: "Mystery & Danger",
                  },
                ].map((tod) => (
                  <div key={tod.time} className="bg-muted/40 rounded-md p-4">
                    <tod.icon className="w-5 h-5 text-accent mb-2" />
                    <h4 className="font-semibold text-sm">{tod.time}</h4>
                    <Badge variant="secondary" className="text-xs mt-1 mb-2">{tod.mood}</Badge>
                    <p className="text-xs text-muted-foreground leading-relaxed">{tod.desc}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
