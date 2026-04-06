import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import express from "express";
import path from "path";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // In development, Vite's middleware doesn't auto-serve client/public files
  // (e.g. /ep1/main.js), so we serve them explicitly here.
  // In production this is handled by serveStatic() via dist/public.
  if (process.env.NODE_ENV !== "production") {
    app.use(express.static(path.resolve(process.cwd(), "client", "public")));
  }

  return httpServer;
}
