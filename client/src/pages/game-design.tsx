import { motion } from "framer-motion";
import { usePageTitle } from "@/hooks/use-page-title";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Gamepad2, Trophy, Users, Swords, Map, Puzzle, Brain, Star,
  ArrowRight, Target, Layers, Repeat, Gift, TrendingUp
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function GameDesign() {
  usePageTitle("Game Design Analysis", "Genre classification, gamification systems, multiplayer modes, and narrative design for the GO KOALA! multiplayer game.");
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} custom={0}>
            <Badge variant="secondary" className="mb-3">Game Mechanics</Badge>
          </motion.div>
          <motion.h1
            className="font-serif text-4xl sm:text-5xl font-bold mb-4"
            variants={fadeUp}
            custom={1}
            data-testid="text-game-design-title"
          >
            Game Design Analysis
          </motion.h1>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            variants={fadeUp}
            custom={2}
          >
            How GO KOALA! translates from narrative series to a compelling, highly 
            replayable multiplayer game experience.
          </motion.p>
        </motion.div>

        <Tabs defaultValue="genre" className="space-y-6">
          <TabsList className="flex flex-wrap gap-1 h-auto p-1" data-testid="tabs-game-design">
            <TabsTrigger value="genre" data-testid="tab-genre">Genre & Core Loop</TabsTrigger>
            <TabsTrigger value="gamification" data-testid="tab-gamification">Gamification</TabsTrigger>
            <TabsTrigger value="multiplayer" data-testid="tab-multiplayer">Multiplayer</TabsTrigger>
            <TabsTrigger value="narrative" data-testid="tab-narrative">Narrative Design</TabsTrigger>
          </TabsList>

          <TabsContent value="genre">
            <motion.div
              className="grid md:grid-cols-2 gap-4"
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeUp} custom={0}>
                <Card className="p-5 h-full">
                  <Gamepad2 className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-lg mb-3">Genre Classification</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    GO KOALA! is best classified as an <strong>Action-Adventure Platformer</strong> with 
                    strong RPG and simulation elements. Think the exploration of <em>Ori and the Blind 
                    Forest</em> meets the animal society of <em>Animal Crossing</em>, with the narrative 
                    depth of <em>Life is Strange</em>.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <ArrowRight className="w-3 h-3 text-accent flex-shrink-0" />
                      <span><strong>Primary:</strong> 3D Action-Adventure Platformer</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <ArrowRight className="w-3 h-3 text-accent flex-shrink-0" />
                      <span><strong>Secondary:</strong> Narrative Choice / Episodic</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <ArrowRight className="w-3 h-3 text-accent flex-shrink-0" />
                      <span><strong>Tertiary:</strong> Colony Simulation / Territory Management</span>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp} custom={1}>
                <Card className="p-5 h-full">
                  <Repeat className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-lg mb-3">Core Gameplay Loop</h3>
                  <div className="space-y-3">
                    {[
                      { step: "Explore", desc: "Navigate the Australian bush, discover new areas, find resources" },
                      { step: "Survive", desc: "Avoid predators, cross hazards, manage health and stamina" },
                      { step: "Connect", desc: "Meet characters, form alliances, make story choices" },
                      { step: "Build", desc: "Establish territory, grow the colony, unlock abilities" },
                      { step: "Communicate", desc: "Use AI translation to bridge human and animal worlds" },
                    ].map((item, j) => (
                      <div key={item.step} className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-accent">{j + 1}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-sm">{item.step}</span>
                          <p className="text-xs text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp} custom={2} className="md:col-span-2">
                <Card className="p-5">
                  <Layers className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-lg mb-3">Character Ability System</h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      {
                        name: "Ko",
                        abilities: ["Tree climbing & eucalyptus foraging", "Territorial marking & defence", "AI communication (post-rescue)", "Night vision in eucalyptus canopy"],
                        archetype: "Explorer / Diplomat",
                      },
                      {
                        name: "Little Patty",
                        abilities: ["Underwater navigation & diving", "Electroreception (detect hidden items)", "Venomous spur attack (defence)", "Dam building & water control"],
                        archetype: "Scout / Engineer",
                      },
                      {
                        name: "Evan",
                        abilities: ["Tunnelling & digging shortcuts", "Spine shield (natural armour)", "Ant & termite harvesting (healing)", "Earthquake stomp (area stun)"],
                        archetype: "Tank / Support",
                      },
                    ].map((char) => (
                      <div key={char.name} className="bg-muted/40 rounded-md p-4">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-sm">{char.name}</span>
                          <Badge variant="secondary" className="text-xs">{char.archetype}</Badge>
                        </div>
                        <ul className="space-y-1 mt-2">
                          {char.abilities.map((ab) => (
                            <li key={ab} className="text-xs text-muted-foreground flex gap-1.5">
                              <ArrowRight className="w-3 h-3 flex-shrink-0 mt-0.5 text-primary" />
                              {ab}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          <TabsContent value="gamification">
            <motion.div
              className="grid md:grid-cols-2 gap-4"
              initial="hidden"
              animate="visible"
            >
              {[
                {
                  icon: Trophy,
                  title: "Achievement System",
                  items: [
                    "\"First Steps\" - Complete Ko's departure from Flo's territory",
                    "\"Water Wings\" - Successfully navigate the creek with Little Patty",
                    "\"Highway Survivor\" - Cross the highway alive",
                    "\"First Words\" - Unlock AI communication with Karen",
                    "\"Media Star\" - Reach 1 million in-game followers",
                    "\"Colony Founder\" - Establish Ko's new territory with 10+ koalas",
                    "\"Bridge Builder\" - Create a safe wildlife crossing over the highway",
                    "\"Full Vocabulary\" - Unlock all AI translation words",
                  ],
                },
                {
                  icon: Star,
                  title: "Progression & XP",
                  items: [
                    "Character XP: each playable character levels independently",
                    "Territory XP: new range grows as Ko completes objectives",
                    "Communication XP: AI translation improves with use",
                    "Friendship XP: deeper bonds unlock companion abilities",
                    "Conservation Score: tracks positive environmental impact",
                    "Season Pass: episodic content drops with exclusive rewards",
                    "Prestige System: replay episodes on harder difficulty for unique cosmetics",
                    "Skill trees: unique branching upgrades per character",
                  ],
                },
                {
                  icon: Gift,
                  title: "Rewards & Collectibles",
                  items: [
                    "Eucalyptus Varieties: 50+ species to discover and catalogue",
                    "Territory Decorations: customise Ko's range aesthetic",
                    "Character Skins: seasonal and achievement-based cosmetics",
                    "Audio Logs: Karen's research notes and Ko's memories",
                    "Photo Mode: capture Australian wildlife in stunning vistas",
                    "Companion Tokens: special items that unlock companion backstories",
                    "Conservation Cards: real-world koala facts and education",
                    "Soundtrack Fragments: unlock orchestral tracks by exploring",
                  ],
                },
                {
                  icon: TrendingUp,
                  title: "Daily & Seasonal Engagement",
                  items: [
                    "Daily Challenges: unique objectives refreshed every 24 hours",
                    "Seasonal Events: bushfire rescue, flood survival, mating season",
                    "Community Goals: server-wide conservation targets",
                    "Weekly Story Drops: new mini-episodes between major releases",
                    "Leaderboards: fastest highway crossing, largest colony",
                    "Streaks: consecutive day bonuses for territory maintenance",
                    "Live Events: real-world conservation tie-ins and charity drives",
                    "Mentor System: experienced players guide newcomers",
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

          <TabsContent value="multiplayer">
            <motion.div
              className="grid gap-4"
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeUp} custom={0}>
                <Card className="p-5">
                  <Users className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-lg mb-3">Multiplayer Modes</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      {
                        mode: "Co-op Campaign",
                        players: "2-3 Players",
                        desc: "Play through the story with friends, each controlling Ko, Little Patty, or Evan. Puzzles require coordinated use of all three characters' abilities.",
                      },
                      {
                        mode: "Territory Wars",
                        players: "4-8 Players",
                        desc: "Competitive mode where players build rival koala colonies, competing for the best eucalyptus groves, safest territory, and largest population.",
                      },
                      {
                        mode: "Highway Dash",
                        players: "2-16 Players",
                        desc: "Fast-paced competitive crossing mode. Players race to safely cross increasingly dangerous highways. Last koala standing wins.",
                      },
                      {
                        mode: "Conservation Alliance",
                        players: "Up to 32 Players",
                        desc: "Massive cooperative mode where the community works together to protect wildlife corridors, build safe crossings, and expand protected habitat.",
                      },
                      {
                        mode: "Creature Creator",
                        players: "Single + Share",
                        desc: "Design custom Australian animal characters using unlocked parts and abilities. Share creations with the community and use them in custom scenarios.",
                      },
                      {
                        mode: "Story Forge",
                        players: "1-4 Players",
                        desc: "User-generated episode creator. Build custom scenarios, share them with the community, and play through others' creations.",
                      },
                    ].map((mode) => (
                      <div key={mode.mode} className="bg-muted/40 rounded-md p-4">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="font-semibold text-sm">{mode.mode}</span>
                          <Badge variant="secondary" className="text-xs">{mode.players}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">{mode.desc}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp} custom={1} className="grid md:grid-cols-2 gap-4">
                <Card className="p-5">
                  <Swords className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-lg mb-3">PvE Boss Encounters</h3>
                  <ul className="space-y-2">
                    {[
                      "Gruff - Tutorial boss teaching territorial combat",
                      "Wedgie - Aerial boss with dive-bomb attacks and updraft mechanics",
                      "The Highway - Environmental boss (traffic patterns as attack waves)",
                      "Media Frenzy - Social boss managing overwhelm and stress",
                      "Bushfire - Season Two environmental catastrophe boss",
                      "Feral Cats & Foxes - Stealth-based predator encounters",
                    ].map((boss) => (
                      <li key={boss} className="text-sm text-muted-foreground flex gap-2">
                        <Target className="w-3 h-3 flex-shrink-0 mt-1 text-destructive" />
                        <span>{boss}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
                <Card className="p-5">
                  <Puzzle className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-lg mb-3">Co-op Puzzle Design</h3>
                  <ul className="space-y-2">
                    {[
                      "Creek crossing: Patty ferries, Evan digs tunnels, Ko navigates",
                      "Highway planning: each character scouts different crossing points",
                      "Rescue relay: characters create a communication chain to guide rescuers",
                      "Colony building: simultaneous construction requiring all abilities",
                      "Predator evasion: coordinated distraction and escape strategies",
                      "AI calibration: multiple characters provide translation data points",
                    ].map((puzzle) => (
                      <li key={puzzle} className="text-sm text-muted-foreground flex gap-2">
                        <Brain className="w-3 h-3 flex-shrink-0 mt-1 text-primary" />
                        <span>{puzzle}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          <TabsContent value="narrative">
            <motion.div
              className="grid gap-4"
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeUp} custom={0}>
                <Card className="p-5">
                  <Map className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-lg mb-3">Branching Narrative System</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    GO KOALA! uses a <strong>branching consequence system</strong> inspired by 
                    Telltale Games and Quantic Dream, where player choices create meaningful 
                    divergences in the story. The episodic format naturally supports this, as 
                    each episode's outcome seeds the next.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-muted/40 rounded-md p-4">
                      <h4 className="font-semibold text-sm mb-2">Key Decision Points</h4>
                      <ul className="space-y-1.5">
                        {[
                          "How Ko leaves his territory (stealth vs confrontation)",
                          "Which companions to recruit and in what order",
                          "The highway crossing strategy (multiple valid approaches)",
                          "What Ko communicates to humans first",
                          "How to handle media fame (exploit vs protect)",
                          "Whether to reconcile with Gruff or establish rivalry",
                        ].map((d) => (
                          <li key={d} className="text-xs text-muted-foreground flex gap-1.5">
                            <ArrowRight className="w-3 h-3 flex-shrink-0 mt-0.5 text-accent" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-muted/40 rounded-md p-4">
                      <h4 className="font-semibold text-sm mb-2">Consequence Categories</h4>
                      <ul className="space-y-1.5">
                        {[
                          "Relationship shifts: ally/enemy dynamics change based on choices",
                          "Territory outcomes: colony layout reflects player decisions",
                          "Story branches: 3 distinct endings per episode",
                          "Character development: personality evolves with choices",
                          "World state: environmental changes persist across episodes",
                          "Community impact: collective player choices shape the server world",
                        ].map((c) => (
                          <li key={c} className="text-xs text-muted-foreground flex gap-1.5">
                            <ArrowRight className="w-3 h-3 flex-shrink-0 mt-0.5 text-primary" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp} custom={1}>
                <Card className="p-5">
                  <h3 className="font-semibold text-lg mb-3">Compelling Story Hooks for Future Seasons</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      {
                        title: "The Great Bushfire",
                        desc: "Both territories face a catastrophic bushfire. Ko must unite old and new colonies to survive, turning former enemies into allies.",
                      },
                      {
                        title: "AI Goes Viral",
                        desc: "The translation app spreads globally. Other animals begin communicating. A parliament of cockatoos demands territorial rights. Political satire ensues.",
                      },
                      {
                        title: "The Underground",
                        desc: "Evan discovers a vast underground network of wombat tunnels. A hidden civilisation of burrowing animals has been watching the surface world.",
                      },
                      {
                        title: "Ocean's Edge",
                        desc: "Little Patty's creek connects to the coast. Marine animals enter the story: dolphins, sea turtles, and a massive saltwater crocodile antagonist.",
                      },
                      {
                        title: "Wedgie's Redemption",
                        desc: "Wedgie returns injured and desperate. Ko faces the moral dilemma of helping the eagle who nearly killed him. A powerful redemption arc.",
                      },
                      {
                        title: "The Human World",
                        desc: "Ko ventures into the city to find Karen when a development threatens his territory. Fish-out-of-water comedy meets environmental activism.",
                      },
                    ].map((hook) => (
                      <div key={hook.title} className="bg-muted/40 rounded-md p-4">
                        <h4 className="font-semibold text-sm mb-1">{hook.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{hook.desc}</p>
                      </div>
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
