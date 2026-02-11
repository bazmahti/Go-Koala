import { motion } from "framer-motion";
import { usePageTitle } from "@/hooks/use-page-title";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TreePine, Waves, Bird, Car, Stethoscope, Cpu, Star, Map, Heart, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

interface Episode {
  number: number;
  title: string;
  icon: typeof TreePine;
  setting: string;
  summary: string;
  gameplayElements: string[];
  interactiveThreads: string[];
  storyBeats: string[];
}

const episodes: Episode[] = [
  {
    number: 1,
    title: "The Departure",
    icon: TreePine,
    setting: "Ko's Original Territory",
    summary: "Ko faces increasingly aggressive encounters with Gruff, the pride male. After a final confrontation, Ko makes the bold decision to cross the highway and claim new territory in the large forest he can see from the treetops.",
    gameplayElements: [
      "Tutorial combat: learn territorial defence against Gruff",
      "Tree-climbing mechanics and eucalyptus foraging",
      "Environmental awareness: surveying the landscape from high branches",
      "Stealth sections: avoiding Gruff's patrols",
    ],
    interactiveThreads: [
      "Players choose which route Ko takes to leave his territory",
      "Optional: say goodbye to mother Flo (affects later emotional scenes)",
      "Gather supplies: which eucalyptus varieties Ko takes for the journey",
    ],
    storyBeats: [
      "Opening montage of Ko growing up with Flo's band",
      "First encounter with Gruff establishes threat",
      "Ko spots the forest across the highway",
      "Decision to leave - tearful farewell",
    ],
  },
  {
    number: 2,
    title: "Creek Crossing",
    icon: Waves,
    setting: "The Nearby Creek",
    summary: "Ko reaches the creek and encounters Little Patty the platypus. The unlikely duo bond over their shared desire for new territory. They meet Evan the echidna, forming the core trio of adventurers.",
    gameplayElements: [
      "Water navigation: Little Patty introduces swimming mechanics",
      "Cooperation puzzles requiring all three characters' abilities",
      "Fishing mini-games and creek exploration",
      "Evan's digging reveals hidden paths and items",
    ],
    interactiveThreads: [
      "Choose which companion to befriend first",
      "Side quests: help Little Patty find the perfect creek pool",
      "Evan's backstory mission: retrieve his collection of termite mounds",
      "Cooperative challenge: build a dam together",
    ],
    storyBeats: [
      "Ko encounters the creek - first major obstacle",
      "Little Patty appears and offers help",
      "Evan emerges from a termite mound, comic introduction",
      "Trio bonds over shared meal and campfire stories",
    ],
  },
  {
    number: 3,
    title: "The Highway",
    icon: Car,
    setting: "Highway Edge & Crossing",
    summary: "The trio reaches the highway and must plan their crossing. Ollie the powerful owl offers airlift. He successfully carries Little Patty and Evan, but on Ko's turn, Wedgie the eagle attacks mid-flight.",
    gameplayElements: [
      "Strategic planning phase: scout the highway for crossing opportunities",
      "Aerial combat: Ollie vs Wedgie boss battle",
      "Quick-time events during Ko's fall to the highway",
      "Vehicle dodging mechanics (Frogger-inspired but 3D)",
    ],
    interactiveThreads: [
      "Choose the crossing strategy: wait for night, use Ollie, or attempt ground crossing",
      "The player's choice affects difficulty and story outcomes",
      "During Wedgie's attack: fight back or try to glide to safety",
      "Critical decision: which direction Ko lands determines injury severity",
    ],
    storyBeats: [
      "Trio scouts the highway - establishing the danger",
      "Ollie appears and offers help",
      "Successful crossings for Patty and Evan build false confidence",
      "Wedgie's ambush is a dramatic mid-episode twist",
      "Ko falls to the highway - cliffhanger moment",
    ],
  },
  {
    number: 4,
    title: "Rescue & Recovery",
    icon: Stethoscope,
    setting: "Highway & Wildlife Care Facility",
    summary: "Ko is struck by a car and left injured on the roadside. Alison, a compassionate driver, stops and rescues him, taking him to a koala care facility where carer Karen begins his rehabilitation.",
    gameplayElements: [
      "Survival mini-game: Ko must stay conscious until rescue arrives",
      "Rehabilitation puzzles: physiotherapy and recovery challenges",
      "Emotional story sequences with limited gameplay (cinematic)",
      "Karen's care facility management mini-game",
    ],
    interactiveThreads: [
      "Alison's perspective: playable sequence finding and rescuing Ko",
      "Choose rehabilitation activities that affect Ko's recovery speed",
      "Side story: follow Little Patty and Evan waiting across the highway",
      "Karen's diary entries unlock backstory about wildlife conservation",
    ],
    storyBeats: [
      "The car strike - visceral, emotional impact",
      "Alison's heroic rescue and drive to the facility",
      "Ko wakes up disoriented in a strange human world",
      "Karen's patience and dedication win Ko's trust",
    ],
  },
  {
    number: 5,
    title: "First Words",
    icon: Cpu,
    setting: "Wildlife Care Facility",
    summary: "Ko tries desperately to communicate with Karen. Her computer's AI picks up on patterns in Ko's vocalisations and develops a translation app. For the first time in recorded history, humans and koalas can have a conversation.",
    gameplayElements: [
      "Communication puzzle: help Ko form coherent messages",
      "AI calibration mini-game: adjust the translation parameters",
      "Dialogue system unlocks: choose what Ko says to Karen",
      "Word discovery: expand Ko's translatable vocabulary",
    ],
    interactiveThreads: [
      "Choose Ko's first words - what does he tell humans?",
      "Decide what information about koala life to share",
      "Optional: teach Karen about eucalyptus varieties and their significance",
      "AI development branch: help improve the translation accuracy",
    ],
    storyBeats: [
      "Ko's frustrated attempts at communication",
      "AI system detects patterns - eureka moment",
      "First successful word exchange - deeply emotional",
      "Ko and Karen's growing understanding of each other's worlds",
    ],
  },
  {
    number: 6,
    title: "Fame & Fortune",
    icon: Star,
    setting: "Media World & Care Facility",
    summary: "Ko and Karen become global media sensations. The world is captivated by the first human-animal conversation. But the demands of fame begin to overwhelm them both, and Ko yearns for the bush.",
    gameplayElements: [
      "Media management: choose which interviews to accept",
      "Stress metre: balance fame demands with Ko's wellbeing",
      "Public speaking mini-games from Ko's perspective",
      "Social media response system: manage public opinion",
    ],
    interactiveThreads: [
      "Choose how much of koala culture to reveal to the world",
      "Handle journalists and their questions (some hostile)",
      "Decide whether to endorse conservation campaigns",
      "Karen's moral dilemma: exploit the situation or protect Ko?",
    ],
    storyBeats: [
      "First TV appearance - comedy of errors",
      "Global reaction montage",
      "Growing pressure from media, scientists, and politicians",
      "Ko's homesickness becomes acute",
    ],
  },
  {
    number: 7,
    title: "New Beginnings",
    icon: Heart,
    setting: "Ko's New Territory",
    summary: "Karen returns to her wildlife caring and Ko is released to establish his new home range. He invites Bonny to start a family. The territory grows with a new brood as Ko builds a thriving koala community.",
    gameplayElements: [
      "Territory management: claim and develop Ko's new range",
      "Colony building: attract other koalas and manage resources",
      "Eucalyptus grove cultivation and expansion",
      "Co-op mode: second player can control Bonny",
    ],
    interactiveThreads: [
      "Choose where to establish the colony centre",
      "Courtship mini-game: impress Bonny with territory quality",
      "Manage rivalries between new colony members",
      "Karen visits with the AI translator - choose what to discuss",
    ],
    storyBeats: [
      "Emotional farewell between Ko and Karen",
      "Ko reunites with Little Patty and Evan across the highway",
      "Bonny arrives - love at first sight",
      "Time-lapse of the colony growing and thriving",
    ],
  },
  {
    number: 8,
    title: "The Return",
    icon: Map,
    setting: "Highway & Original Territory",
    summary: "Ko gets restless and decides to re-cross the highway to visit his mother Flo. The journey back is fraught with new dangers, but Ko is wiser and stronger. Season One's finale sets up future adventures.",
    gameplayElements: [
      "Reverse highway crossing with new obstacles and strategies",
      "Reunion with Flo and the original band",
      "Confrontation or reconciliation with Gruff",
      "Season finale boss: evolved Wedgie encounter",
    ],
    interactiveThreads: [
      "Choose the return route: through the highway or an alternative path",
      "Decide whether to bring companions or go solo",
      "Gruff encounter: fight, negotiate, or reconcile",
      "Cliffhanger choice: what threat emerges for Season Two?",
    ],
    storyBeats: [
      "Ko's restlessness and the call of home",
      "The highway crossing - tenser now that Ko knows the danger",
      "Emotional reunion with Flo",
      "Gruff's reaction - potential redemption arc",
      "Cliffhanger: new threat to both territories revealed",
    ],
  },
];

export default function Story() {
  usePageTitle("Story Episodes - Season One", "Eight episodes charting Ko's journey from outcast to pioneer, with branching interactive threads and rich gameplay elements.");
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} custom={0}>
            <Badge variant="secondary" className="mb-3">Season One</Badge>
          </motion.div>
          <motion.h1
            className="font-serif text-4xl sm:text-5xl font-bold mb-4"
            variants={fadeUp}
            custom={1}
            data-testid="text-story-title"
          >
            Story Episodes
          </motion.h1>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            variants={fadeUp}
            custom={2}
          >
            Eight episodes charting Ko's journey from outcast to pioneer, each with 
            branching interactive threads and rich gameplay elements.
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

          <motion.div
            className="space-y-8"
            initial="hidden"
            animate="visible"
          >
            {episodes.map((ep, i) => (
              <motion.div
                key={ep.number}
                className="relative pl-16 md:pl-20"
                variants={fadeUp}
                custom={i + 3}
              >
                <div className="absolute left-3 md:left-5 top-6 w-7 h-7 rounded-full bg-accent flex items-center justify-center z-10">
                  <ep.icon className="w-3.5 h-3.5 text-accent-foreground" />
                </div>

                <Card className="p-5" data-testid={`card-episode-${ep.number}`}>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <Badge variant="outline" className="text-xs font-mono">
                      EP {String(ep.number).padStart(2, "0")}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">{ep.setting}</Badge>
                  </div>
                  <h2 className="font-serif text-xl font-bold mb-2" data-testid={`text-episode-title-${ep.number}`}>
                    {ep.title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-4">{ep.summary}</p>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        Story Beats
                      </h3>
                      <ul className="space-y-1.5">
                        {ep.storyBeats.map((beat, j) => (
                          <li key={j} className="text-xs text-muted-foreground flex gap-2">
                            <ArrowRight className="w-3 h-3 mt-0.5 flex-shrink-0 text-accent" />
                            <span>{beat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        Gameplay Elements
                      </h3>
                      <ul className="space-y-1.5">
                        {ep.gameplayElements.map((el, j) => (
                          <li key={j} className="text-xs text-muted-foreground flex gap-2">
                            <ArrowRight className="w-3 h-3 mt-0.5 flex-shrink-0 text-primary" />
                            <span>{el}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        Interactive Threads
                      </h3>
                      <ul className="space-y-1.5">
                        {ep.interactiveThreads.map((thread, j) => (
                          <li key={j} className="text-xs text-muted-foreground flex gap-2">
                            <ArrowRight className="w-3 h-3 mt-0.5 flex-shrink-0 text-chart-2" />
                            <span>{thread}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} custom={0}>
            <Card className="p-6 text-center">
              <h3 className="font-serif text-2xl font-bold mb-3">Season Two & Beyond</h3>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Future seasons can explore expanding territories, new animal characters from 
                across Australia, deeper AI communication breakthroughs, human-wildlife 
                conservation partnerships, bushfire survival arcs, and Ko's growing family 
                facing environmental challenges. The episodic format allows for seasonal themes 
                and community-driven story choices.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
