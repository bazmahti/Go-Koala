import { usePageTitle } from "@/hooks/use-page-title";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function Game() {
  usePageTitle("Play — GO KOALA! Episode 1", "Browser-based playable demo of GO KOALA! Episode 1: The Departure. Built with Phaser.js.");

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex items-center gap-3 px-6 py-4 border-b">
        <Badge variant="secondary">Playable Demo</Badge>
        <h1 className="font-serif text-xl font-bold">GO KOALA! — Episode 1: The Departure</h1>
        <Badge variant="outline" className="ml-auto text-xs font-mono">Phaser.js · Placeholder Art</Badge>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center bg-black p-4 gap-3">
        <motion.div
          className="w-full"
          style={{ maxWidth: 960 }}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <iframe
            src="/game/index.html"
            title="GO KOALA! Episode 1 — The Departure"
            className="w-full rounded-md border border-white/10 shadow-2xl"
            style={{ aspectRatio: "16/9", display: "block" }}
            data-testid="iframe-game"
            allow="autoplay"
          />
        </motion.div>

        <div className="text-center max-w-xl">
          <p className="text-xs text-white/50 font-mono leading-relaxed">
            Arrow keys / WASD to move · Space to jump · Click choices to advance the story
            <br />
            All characters are placeholder shapes — real art assets to be added in production.
          </p>
        </div>
      </div>
    </div>
  );
}
