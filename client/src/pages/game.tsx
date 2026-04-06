import { useEffect, useRef, useState } from "react";
import { usePageTitle } from "@/hooks/use-page-title";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function Game() {
  usePageTitle(
    "Play — GO KOALA! Episode 1",
    "Browser-based playable demo of GO KOALA! Episode 1: The Departure. Built with Phaser.js."
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!containerRef.current) return;

    const containerId = "phaser-game-container";
    containerRef.current.id = containerId;

    // Destroy any previous game instance to prevent double-init on HMR
    if ((window as any).__koalaGame) {
      try { (window as any).__koalaGame.destroy(true); } catch (_) {}
      delete (window as any).__koalaGame;
    }

    // Tell main.js which container to use
    (window as any).__PHASER_PARENT__ = containerId;

    let phaserScript: HTMLScriptElement | null = null;
    let gameScript: HTMLScriptElement | null = null;

    const loadGame = () => {
      gameScript = document.createElement("script");
      gameScript.src = "/ep1/main.js?t=" + Date.now(); // cache-bust
      gameScript.onload = () => setStatus("ready");
      gameScript.onerror = () => {
        setStatus("error");
        setErrorMsg("Failed to load game script (main.js).");
      };
      document.body.appendChild(gameScript);
    };

    // Check if Phaser is already loaded (from a previous visit / HMR)
    if ((window as any).Phaser) {
      loadGame();
    } else {
      phaserScript = document.createElement("script");
      phaserScript.src = "https://cdn.jsdelivr.net/npm/phaser@3.60.0/dist/phaser.min.js";
      phaserScript.onload = loadGame;
      phaserScript.onerror = () => {
        setStatus("error");
        setErrorMsg(
          "Could not load Phaser from CDN (jsdelivr.net).\nCheck your network connection and try refreshing."
        );
      };
      document.head.appendChild(phaserScript);
    }

    return () => {
      if ((window as any).__koalaGame) {
        try { (window as any).__koalaGame.destroy(true); } catch (_) {}
        delete (window as any).__koalaGame;
      }
      delete (window as any).__PHASER_PARENT__;
      if (gameScript) gameScript.remove();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex items-center gap-3 px-6 py-4 border-b">
        <Badge variant="secondary">Playable Demo</Badge>
        <h1 className="font-serif text-xl font-bold">GO KOALA! — Episode 1: The Departure</h1>
        <Badge variant="outline" className="ml-auto text-xs font-mono">
          Phaser.js · Placeholder Art
        </Badge>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center bg-black p-4 gap-3">
        <motion.div
          className="w-full"
          style={{ maxWidth: 960 }}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          {status === "error" && (
            <div className="flex items-center justify-center w-full rounded-md border border-red-500/30 bg-red-950/40 p-8 text-center" style={{ minHeight: 320 }}>
              <p className="text-red-400 font-mono text-sm whitespace-pre-wrap">{errorMsg}</p>
            </div>
          )}

          {status === "loading" && (
            <div className="flex items-center justify-center w-full rounded-md border border-white/10 bg-black" style={{ minHeight: 320 }}>
              <p className="text-white/40 font-mono text-sm animate-pulse">Loading GO KOALA! Episode 1…</p>
            </div>
          )}

          {/* Phaser mounts its canvas here */}
          <div
            ref={containerRef}
            data-testid="iframe-game"
            className="w-full rounded-md overflow-hidden"
            style={{
              display: status === "error" ? "none" : "block",
              height: "min(540px, 56.25vw)",
            }}
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
