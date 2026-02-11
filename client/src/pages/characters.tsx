import { motion } from "framer-motion";
import { usePageTitle } from "@/hooks/use-page-title";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Heart, Zap, Eye, Feather, HandHeart, Flower2, Crown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

interface CharacterData {
  name: string;
  species: string;
  role: string;
  image: string;
  description: string;
  traits: string[];
  icon: typeof Shield;
  gameRole: string;
}

const characters: CharacterData[] = [
  {
    name: "Ko",
    species: "Infant Male Koala",
    role: "Protagonist",
    image: "/images/ko-koala.png",
    description: "A brave young koala determined to forge his own path. After aggressive encounters with the pride male Gruff, Ko decides to cross the dangerous highway to claim new territory. His journey tests his courage but ultimately leads to an extraordinary discovery: communication between humans and animals.",
    traits: ["Courageous", "Determined", "Resilient", "Curious"],
    icon: Shield,
    gameRole: "Primary playable character. Players navigate Ko through environmental puzzles, territorial challenges, and the highway crossing. Unlocks the AI communication ability after the rescue arc.",
  },
  {
    name: "Little Patty",
    species: "Platypus",
    role: "Ally & Companion",
    image: "/images/little-patty.png",
    description: "A spirited young platypus searching for a new creek in Ko's range. She joins Ko at the creek crossing and becomes his first companion. Her aquatic abilities and venomous spurs make her invaluable in water-based challenges.",
    traits: ["Resourceful", "Loyal", "Adventurous", "Witty"],
    icon: Heart,
    gameRole: "Second playable character. Specialises in water navigation, underwater puzzle-solving, and defensive venomous attacks. Can detect hidden items using electroreception.",
  },
  {
    name: "Evan",
    species: "Echidna",
    role: "Ally & Companion",
    image: "/images/evan-echidna.png",
    description: "A good-natured echidna who joins Ko and Little Patty on their journey. His digging abilities and tough spiny exterior make him the team's tank. Evan brings humour and heart to the trio.",
    traits: ["Strong", "Humorous", "Protective", "Steady"],
    icon: Zap,
    gameRole: "Third playable character. Excels at digging tunnels, breaking obstacles, and defensive rolls. His spines provide natural armour against predators.",
  },
  {
    name: "Ollie",
    species: "Powerful Owl",
    role: "Guardian & Transport",
    image: "/images/ollie-owl.png",
    description: "A majestic powerful owl who offers to airlift the trio across the highway. Ollie is wise and protective, serving as mentor and aerial scout. His encounter with Wedgie during Ko's transport creates the story's dramatic turning point.",
    traits: ["Wise", "Noble", "Powerful", "Strategic"],
    icon: Eye,
    gameRole: "NPC ally who provides aerial reconnaissance and transport missions. Players can call on Ollie for scouting ahead, revealing map areas, and emergency extractions.",
  },
  {
    name: "Wedgie",
    species: "Wedge-tailed Eagle",
    role: "Antagonist",
    image: "/images/wedgie-eagle.png",
    description: "A fierce wedge-tailed eagle who attacks Ollie and Ko during the highway crossing, causing Ko to fall onto the road. Wedgie represents the constant aerial threat in the Australian bush and is the game's primary recurring adversary.",
    traits: ["Fierce", "Territorial", "Relentless", "Cunning"],
    icon: Feather,
    gameRole: "Primary aerial antagonist. Appears as a boss encounter during the highway crossing and returns in later episodes. Players must use stealth and teamwork to evade or confront Wedgie.",
  },
  {
    name: "Karen",
    species: "Human",
    role: "Wildlife Carer",
    image: "/images/karen-carer.png",
    description: "A dedicated wildlife carer at the koala care facility. Karen discovers she can communicate with Ko through an AI translation app that interprets his attempts at language. Together they become media sensations before returning to their respective worlds.",
    traits: ["Compassionate", "Patient", "Dedicated", "Nurturing"],
    icon: HandHeart,
    gameRole: "Key NPC in the rescue and recovery arc. Players interact with Karen during the rehabilitation mini-games and the AI communication discovery sequence. She becomes an ongoing quest-giver.",
  },
  {
    name: "Bonny",
    species: "Female Koala",
    role: "Love Interest",
    image: "/images/bonny-koala.png",
    description: "A beautiful female koala whom Ko invites to his new territory. Bonny helps establish the new colony and starts a family with Ko. She represents hope and the continuation of the koala community in their new, safer habitat.",
    traits: ["Gentle", "Wise", "Nurturing", "Brave"],
    icon: Flower2,
    gameRole: "Appears in later episodes as Ko's partner. Co-op gameplay allows a second player to control Bonny. She has unique territory management and nurturing abilities for the colony-building phase.",
  },
  {
    name: "Gruff",
    species: "Alpha Male Koala",
    role: "Catalyst",
    image: "/images/ko-koala.png",
    description: "The aggressive pride male whose territorial behaviour drives Ko to seek new lands. Gruff represents the harsh realities of koala social hierarchy. While an antagonist at first, later episodes may reveal a more complex character.",
    traits: ["Dominant", "Territorial", "Complex", "Traditional"],
    icon: Crown,
    gameRole: "Early-game antagonist in the prologue. Tutorial boss fight teaches players territorial combat mechanics. May become an ally in later seasons when his territory also faces threats.",
  },
];

export default function Characters() {
  usePageTitle("Characters - Meet the Cast", "Meet Ko, Little Patty, Evan, Ollie, Wedgie, Karen, Bonny and Gruff - the diverse cast of Australian wildlife and human allies in GO KOALA!");
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} custom={0}>
            <Badge variant="secondary" className="mb-3">Cast</Badge>
          </motion.div>
          <motion.h1
            className="font-serif text-4xl sm:text-5xl font-bold mb-4"
            variants={fadeUp}
            custom={1}
            data-testid="text-characters-title"
          >
            Meet the Characters
          </motion.h1>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            variants={fadeUp}
            custom={2}
          >
            A diverse cast of Australian wildlife and human allies, each bringing unique 
            abilities and personality to the game and series.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-6"
          initial="hidden"
          animate="visible"
        >
          {characters.map((char, i) => (
            <motion.div key={char.name} variants={fadeUp} custom={i + 3}>
              <Card className="overflow-visible p-0" data-testid={`card-character-${char.name.toLowerCase()}`}>
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-56 flex-shrink-0 p-5">
                    <div className="relative w-full aspect-square max-w-[200px] mx-auto rounded-md overflow-hidden">
                      <img
                        src={char.image}
                        alt={char.name}
                        className="w-full h-full object-cover"
                        data-testid={`img-character-${char.name.toLowerCase()}`}
                      />
                    </div>
                  </div>
                  <div className="flex-1 p-5 md:pl-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h2 className="font-serif text-2xl font-bold" data-testid={`text-name-${char.name.toLowerCase()}`}>
                        {char.name}
                      </h2>
                      <Badge variant="outline">{char.role}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{char.species}</p>
                    <p className="text-sm leading-relaxed mb-4">{char.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {char.traits.map((trait) => (
                        <Badge key={trait} variant="secondary" className="text-xs">
                          {trait}
                        </Badge>
                      ))}
                    </div>

                    <div className="bg-muted/50 rounded-md p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <char.icon className="w-4 h-4 text-accent" />
                        <span className="font-semibold text-sm">Game Role</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{char.gameRole}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
