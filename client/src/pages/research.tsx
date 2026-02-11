import { motion } from "framer-motion";
import { usePageTitle } from "@/hooks/use-page-title";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Compass, UserCheck, AlertTriangle, Users, Cpu,
  Flag, Tv, Gamepad2, Megaphone, ArrowRight,
  Lightbulb, CircleDot, Layers
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const sections = [
  {
    id: "theme",
    icon: Compass,
    number: "01",
    title: "Core Theme",
    badge: "Story Foundation",
    intro: "The concept carries multiple possible themes — growing up, environmental danger, cross-species communication, media overload, and returning home. The recommendation is to unify these under a single emotional spine:",
    highlight: "Finding your place in a changing world.",
    details: [
      "Leaving mum — the universal desire for independence",
      "Surviving the highway — confronting real environmental danger",
      "The human/animal tech bridge — discovering that connection changes everything",
      "Fame — learning that attention isn't the same as meaning",
      "Returning home wiser — growth only counts if you carry it back",
    ],
  },
  {
    id: "arc",
    icon: UserCheck,
    number: "02",
    title: "Ko's Character Arc",
    badge: "Protagonist Development",
    intro: "Ko needs a clearer emotional transformation beyond 'cute koala who gets lucky.' The proposed arc upgrade:",
    highlight: null,
    phases: [
      { label: "Beginning", desc: "Naive, impulsive, wants independence at any cost" },
      { label: "Middle", desc: "Learns humans are complex, sees environmental damage firsthand, feels responsible" },
      { label: "Fame Phase", desc: "Tempted by celebrity status — the spotlight feels like purpose" },
      { label: "Crisis", desc: "Must choose between the spotlight or protecting habitat" },
      { label: "Resolution", desc: "Becomes a bridge between species — not just a celebrity, but a voice" },
    ],
    details: [],
  },
  {
    id: "stakes",
    icon: AlertTriangle,
    number: "03",
    title: "Raising the Stakes",
    badge: "Narrative Tension",
    intro: "Currently, danger passes too quickly. For episodic storytelling, ongoing tension is critical. Proposed escalations:",
    highlight: null,
    details: [
      "The highway as a recurring antagonist — massive trucks, construction expansion, it's always growing",
      "Wedgie the Eagle as a recurring rival, not a one-off threat",
      "The forest Ko wants may be threatened by development — his goal is under siege",
      "The translating AI could be wanted by corporations or government — turning Ko's gift into a liability",
    ],
  },
  {
    id: "cast",
    icon: Users,
    number: "04",
    title: "Supporting Cast Development",
    badge: "Character Depth",
    intro: "Each supporting character needs stronger definition and potential for their own story arcs:",
    highlight: null,
    characters: [
      {
        name: "Little Patty (Platypus)",
        traits: ["Sarcastic", "Secretly brilliant", "Supposedly 'primitive' but tech-curious"],
        note: "She could become fascinated by the AI translator — the unlikely tech enthusiast",
      },
      {
        name: "Evan the Echidna",
        traits: ["Philosophical", "Moves slowly, thinks deeply", "Surprising wisdom"],
        note: "Echidnas are ancient animals — he embodies deep time and patience",
      },
      {
        name: "Ollie the Owl",
        traits: ["Helpful on the surface", "Possible hidden agenda", "Moral grey zone"],
        note: "Owls are predators — is he genuinely kind, or does he have his own interests?",
      },
      {
        name: "Wedgie the Eagle",
        traits: ["Territorial", "Habitat pressure", "Sees Ko as an intruder"],
        note: "Don't make him simply evil. He's desperate — a nuanced antagonist makes a stronger series",
      },
    ],
    details: [],
  },
  {
    id: "ai",
    icon: Cpu,
    number: "05",
    title: "The AI Translator",
    badge: "Unique Hook",
    intro: "This is the most unique element of the concept. Key questions to explore:",
    highlight: "What happens when predators and prey can talk? What if humans don't like what animals say?",
    details: [
      "Does the AI only translate Ko, or all animals? The scope changes everything",
      "Industries may want to suppress animal testimony — environmental destruction gets a voice",
      "Activists could weaponise it — creating ethical grey areas around consent and exploitation",
      "Government regulation of animal speech opens political satire, comedy, and drama",
      "For a game adaptation, this is gold — communication as a core mechanic with real consequences",
    ],
  },
  {
    id: "ending",
    icon: Flag,
    number: "06",
    title: "Strengthening the Ending",
    badge: "Resolution Options",
    intro: "The current ending — 'Ko gets bored and recrosses the highway' — weakens the arc. Three stronger alternatives:",
    highlight: null,
    options: [
      {
        label: "Option A — Full Circle Growth",
        desc: "Ko returns to his mother not out of boredom — but as a mature adult with perspective. He's changed, and so has the bush he left behind.",
      },
      {
        label: "Option B — Protector Arc",
        desc: "He returns because development threatens his original home. The journey taught him to fight — now he fights for something that matters.",
      },
      {
        label: "Option C — Sequel Hook",
        desc: "He crosses again — but now leads a movement to build wildlife crossings. This ties beautifully into real-world conservation and sets up Season 2.",
      },
    ],
    details: [],
  },
  {
    id: "episodes",
    icon: Tv,
    number: "07",
    title: "Episodic Series Structure",
    badge: "Season 1 Blueprint",
    intro: "A proposed 10-episode structure for Season 1:",
    highlight: null,
    episodes: [
      "Leaving Home",
      "Crossing the Creek",
      "Highway of Doom",
      "The Attack",
      "Human World",
      "The Voice of the Forest",
      "Fame Spiral",
      "The Backlash",
      "Choosing a Side",
      "Home Again (but changed)",
    ],
    details: [],
  },
  {
    id: "game",
    icon: Gamepad2,
    number: "08",
    title: "Multiplayer Game Potential",
    badge: "Gameplay Modes",
    intro: "The concept translates well to game mechanics. A blend of Animal Crossing + Eco + light survival mechanics across five modes:",
    highlight: null,
    modes: [
      { name: "Territory Builder", desc: "Expand habitat, plant trees, avoid threats" },
      { name: "Highway Crossing", desc: "Strategic survival mode — timing, routes, and risk" },
      { name: "Co-op Multiplayer", desc: "Each player is a different species with unique abilities" },
      { name: "Communication Mode", desc: "Use the AI translator to negotiate with humans" },
      { name: "Media Mode", desc: "Balance fame vs conservation work — every choice has consequences" },
    ],
    details: [],
  },
  {
    id: "tone",
    icon: Megaphone,
    number: "09",
    title: "Tone & Positioning",
    badge: "Market Fit",
    intro: "The concept currently sits in the family-friendly Pixar zone with potential for light satire. Leaning slightly smarter opens it to:",
    highlight: null,
    details: [
      "8-14 year-olds as the core demographic — old enough for nuance, young enough for wonder",
      "Family streaming audiences — parents watch alongside kids, drawn by the depth beneath the surface",
      "Light satirical edge — media culture, corporate greed, and political absurdity through an animal lens",
      "Environmental adventure as the genre anchor — education wrapped in entertainment",
    ],
  },
  {
    id: "title",
    icon: Lightbulb,
    number: "10",
    title: "Title Considerations",
    badge: "Branding",
    intro: "'GO KOALA!' is energetic and works well for the comedic, action-oriented tone. Alternative options for different tonal directions:",
    highlight: null,
    alternatives: [
      { title: "Ko & The Crossing", tone: "Adventure focus" },
      { title: "Highway to Home", tone: "Journey narrative" },
      { title: "The Koala Who Spoke", tone: "Mystery / drama" },
      { title: "Wild Voice", tone: "Cinematic / poetic" },
      { title: "Ko: Between Two Worlds", tone: "Dual-identity story" },
    ],
    verdict: "For the comedic, family-friendly direction — keep GO KOALA! For something more cinematic, consider a deeper title.",
    details: [],
  },
];

export default function Research() {
  usePageTitle("Creative Research & Development", "Structured creative analysis of the GO KOALA! concept covering theme, character arcs, stakes, AI translator potential, episodic structure, and game mechanics.");
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} custom={0} className="flex flex-wrap items-center justify-center gap-2 mb-4">
            <Badge variant="outline">R&D</Badge>
            <Badge variant="outline">Story Analysis</Badge>
            <Badge variant="outline">Game Design</Badge>
          </motion.div>
          <motion.h1
            className="font-serif text-4xl sm:text-5xl font-bold mb-4"
            variants={fadeUp}
            custom={1}
            data-testid="text-research-title"
          >
            Creative Research
          </motion.h1>
          <motion.p
            className="text-muted-foreground max-w-3xl mx-auto text-base leading-relaxed"
            variants={fadeUp}
            custom={2}
          >
            A structured development analysis of the GO KOALA! concept — examining theme, 
            character arcs, narrative stakes, the AI translator hook, episodic structure, 
            game mechanics, and market positioning.
          </motion.p>
        </motion.div>

        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} custom={0}>
            <Card className="p-6" data-testid="card-concept-summary">
              <div className="flex items-start gap-3">
                <CircleDot className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-base mb-2">Core Concept Assessment</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    GO KOALA! has a strong core: <strong>cute native animals + danger + tech breakthrough + 
                    media satire + returning home</strong>. It's commercially viable, especially as an animated 
                    episodic series with game potential. The following analysis identifies ten areas 
                    for strengthening the concept.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        <div className="space-y-8">
          {sections.map((section, i) => (
            <motion.div
              key={section.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div variants={fadeUp} custom={0}>
                <Card className="p-6" data-testid={`card-research-${section.id}`}>
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center gap-1 flex-shrink-0">
                      <span className="font-mono text-xs text-muted-foreground">{section.number}</span>
                      <div className="p-2 rounded-md bg-accent/10">
                        <section.icon className="w-5 h-5 text-accent" />
                      </div>
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-3">
                        <h2 className="font-serif text-xl font-bold">{section.title}</h2>
                        <Badge variant="secondary">{section.badge}</Badge>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {section.intro}
                      </p>

                      {section.highlight && (
                        <div className="bg-accent/10 rounded-md p-4 mb-4">
                          <p className="text-sm font-semibold text-accent italic">
                            "{section.highlight}"
                          </p>
                        </div>
                      )}

                      {section.details && section.details.length > 0 && (
                        <ul className="space-y-2 mb-2">
                          {section.details.map((detail, j) => (
                            <li key={j} className="flex gap-2 text-sm">
                              <ArrowRight className="w-3.5 h-3.5 text-accent mt-1 flex-shrink-0" />
                              <span className="text-muted-foreground leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {"phases" in section && section.phases && (
                        <div className="space-y-2">
                          {section.phases.map((phase, j) => (
                            <div key={j} className="flex gap-3 text-sm">
                              <Badge variant="outline" className="text-xs whitespace-nowrap self-start mt-0.5">
                                {phase.label}
                              </Badge>
                              <span className="text-muted-foreground leading-relaxed">{phase.desc}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {"characters" in section && section.characters && (
                        <div className="grid sm:grid-cols-2 gap-3">
                          {section.characters.map((char) => (
                            <Card key={char.name} className="p-4">
                              <h4 className="font-semibold text-sm mb-2">{char.name}</h4>
                              <div className="flex flex-wrap gap-1 mb-2">
                                {char.traits.map((trait) => (
                                  <Badge key={trait} variant="secondary" className="text-xs">{trait}</Badge>
                                ))}
                              </div>
                              <p className="text-xs text-muted-foreground leading-relaxed">{char.note}</p>
                            </Card>
                          ))}
                        </div>
                      )}

                      {"options" in section && section.options && (
                        <div className="space-y-3">
                          {section.options.map((option) => (
                            <div key={option.label} className="flex gap-3 text-sm">
                              <Layers className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                              <div>
                                <span className="font-semibold">{option.label}</span>
                                <p className="text-muted-foreground leading-relaxed mt-0.5">{option.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {"episodes" in section && section.episodes && (
                        <div className="grid sm:grid-cols-2 gap-2">
                          {section.episodes.map((ep, j) => (
                            <div key={j} className="flex items-center gap-2 text-sm">
                              <span className="font-mono text-xs text-accent w-5 text-right flex-shrink-0">{j + 1}.</span>
                              <span className="text-muted-foreground">{ep}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {"modes" in section && section.modes && (
                        <div className="space-y-2">
                          {section.modes.map((mode) => (
                            <div key={mode.name} className="flex gap-3 text-sm">
                              <ArrowRight className="w-3.5 h-3.5 text-accent mt-1 flex-shrink-0" />
                              <div>
                                <span className="font-semibold">{mode.name}:</span>{" "}
                                <span className="text-muted-foreground">{mode.desc}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {"alternatives" in section && section.alternatives && (
                        <>
                          <div className="grid sm:grid-cols-2 gap-2 mb-3">
                            {section.alternatives.map((alt) => (
                              <div key={alt.title} className="flex items-center gap-2 text-sm">
                                <Badge variant="outline" className="text-xs">{alt.tone}</Badge>
                                <span className="text-muted-foreground italic">{alt.title}</span>
                              </div>
                            ))}
                          </div>
                          {"verdict" in section && section.verdict && (
                            <p className="text-xs text-muted-foreground leading-relaxed mt-2 bg-muted/50 rounded-md p-3">
                              {section.verdict}
                            </p>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
