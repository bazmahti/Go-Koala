import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import express from "express";
import path from "path";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Serve client/public directory explicitly so files like /ep1/index.html
  // are reachable in dev mode before Vite's catch-all intercepts them.
  app.use(express.static(path.resolve(import.meta.dirname, "..", "client", "public")));

  return httpServer;
}
