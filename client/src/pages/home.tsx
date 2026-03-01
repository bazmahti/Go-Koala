import { motion } from "framer-motion";
import { ChevronDown, Gamepad2, Tv, Users, Sparkles, FileDown } from "lucide-react";
import { usePageTitle } from "@/hooks/use-page-title";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { generateHandoverPDF } from "@/lib/generate-pdf";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Home() {
  usePageTitle("GO KOALA! - Animated Series & Game Proposal", "GO KOALA! follows Ko the koala on an epic journey through the Australian bush. An animated episodic series and multiplayer game proposal by Ralph Lycett Tyrrell.");
  return (
    <div className="min-h-screen">
      <section className="relative h-[85vh] min-h-[500px] overflow-hidden">
        <img
          src="/images/hero-landscape.png"
          alt="Australian bush landscape"
          className="absolute inset-0 w-full h-full object-cover"
          data-testid="img-hero-landscape"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge variant="outline" className="mb-4 bg-black/30 backdrop-blur-sm text-white/90 border-white/20">
              S'uNReel 2026
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4"
          >
            <img
              src="/images/go-koala-logo.png"
              alt="GO KOALA!"
              className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] mx-auto drop-shadow-2xl"
              data-testid="img-game-logo"
            />
            <h1
              className="sr-only"
              data-testid="text-hero-title"
            >
              GO KOALA!
            </h1>
          </motion.div>

          <motion.p
            className="text-lg sm:text-xl text-white/85 max-w-2xl mb-3 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-testid="text-hero-subtitle"
          >
            An animated episodic series & multiplayer computer game
          </motion.p>

          <motion.p
            className="text-sm text-white/60 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Created by Ralph Lycett Tyrrell | Animations & Game Dev by Dr Baz (Barry Ferrier)
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link href="/characters">
              <Button variant="default" data-testid="button-meet-characters">
                <Users className="w-4 h-4 mr-2" />
                Meet the Characters
              </Button>
            </Link>
            <Link href="/game-design">
              <Button variant="outline" className="backdrop-blur-sm bg-white/10 text-white border-white/20" data-testid="button-game-design">
                <Gamepad2 className="w-4 h-4 mr-2" />
                Game Design
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="absolute bottom-8"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-6 h-6 text-white/50" />
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2
            className="font-serif text-3xl sm:text-4xl font-bold mb-4"
            variants={fadeUp}
            custom={0}
            data-testid="text-concept-title"
          >
            The Concept
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-3xl mx-auto text-base leading-relaxed"
            variants={fadeUp}
            custom={1}
          >
            GO KOALA! follows Ko, a brave young koala determined to establish his own territory 
            across a dangerous highway. Along the way, he forms unlikely friendships, faces fierce 
            predators, survives a car strike, and makes history when AI enables the first-ever 
            conversation between humans and koalas. It's a story of courage, conservation, 
            and connection.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {[
            {
              icon: Tv,
              title: "Episodic Series",
              desc: "Rich narrative arcs across multiple seasons with branching storylines",
            },
            {
              icon: Gamepad2,
              title: "Multiplayer Game",
              desc: "Cooperative and competitive gameplay in the Australian bush",
            },
            {
              icon: Users,
              title: "Community Driven",
              desc: "Player choices shape the story and Ko's expanding territory",
            },
            {
              icon: Sparkles,
              title: "AI Innovation",
              desc: "Groundbreaking human-animal communication through AI translation",
            },
          ].map((item, i) => (
            <motion.div key={item.title} variants={fadeUp} custom={i}>
              <Card className="p-5 h-full hover-elevate">
                <item.icon className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-semibold text-base mb-2" data-testid={`text-pillar-${i}`}>
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-16 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="font-serif text-3xl sm:text-4xl font-bold mb-4"
              variants={fadeUp}
              custom={0}
            >
              Why GO KOALA!?
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                num: "01",
                title: "Conservation Awareness",
                desc: "Koalas face critical habitat loss. GO KOALA! puts players in Ko's paws, creating visceral empathy for Australian wildlife. The highway crossing mechanic mirrors the real-world danger koalas face daily.",
              },
              {
                num: "02",
                title: "Unique IP Potential",
                desc: "No major game franchise centres on Australian native animals. The cast of Ko, Little Patty, Evan, and friends offers rich merchandising, spin-off, and educational content opportunities.",
              },
              {
                num: "03",
                title: "AI Narrative Innovation",
                desc: "The AI translation subplot is both topical and original. It opens gameplay mechanics where players unlock animal communication abilities, bridging the gap between wildlife and human worlds.",
              },
            ].map((item, i) => (
              <motion.div key={item.num} variants={fadeUp} custom={i}>
                <Card className="p-6 h-full">
                  <span className="text-accent font-mono text-sm font-bold">{item.num}</span>
                  <h3 className="font-semibold text-lg mt-2 mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="font-serif text-3xl sm:text-4xl font-bold mb-4"
              variants={fadeUp}
              custom={0}
            >
              Explore the Proposal
            </motion.h2>
            <motion.p
              className="text-muted-foreground mb-8 max-w-xl mx-auto"
              variants={fadeUp}
              custom={1}
            >
              Dive into the characters, story arcs, game mechanics, platform analysis, and creative vision behind GO KOALA!
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-3 justify-center"
              variants={fadeUp}
              custom={2}
            >
              <Link href="/characters">
                <Button variant="outline" data-testid="link-characters">Characters</Button>
              </Link>
              <Link href="/story">
                <Button variant="outline" data-testid="link-story">Story Episodes</Button>
              </Link>
              <Link href="/game-design">
                <Button variant="outline" data-testid="link-game-design">Game Design</Button>
              </Link>
              <Link href="/audience">
                <Button variant="outline" data-testid="link-audience">Audience</Button>
              </Link>
              <Link href="/platform">
                <Button variant="outline" data-testid="link-platform">Platform & Tech</Button>
              </Link>
              <Link href="/style">
                <Button variant="outline" data-testid="link-style">Stylistic Vision</Button>
              </Link>
              <Button
                variant="default"
                onClick={() => generateHandoverPDF()}
                data-testid="button-download-pdf-home"
              >
                <FileDown className="w-4 h-4 mr-2" />
                Download Handover PDF
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <p data-testid="text-footer-credit">S'uNReel 2026 | Ralph Lycett Tyrrell | Dr Baz (Barry Ferrier)</p>
          <p>GO KOALA! Proposal Document</p>
        </div>
      </footer>
    </div>
  );
}
