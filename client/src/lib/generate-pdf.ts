import jsPDF from "jspdf";

const COLORS = {
  primary: [34, 87, 52] as [number, number, number],
  accent: [184, 133, 46] as [number, number, number],
  dark: [30, 30, 30] as [number, number, number],
  text: [50, 50, 50] as [number, number, number],
  muted: [120, 120, 120] as [number, number, number],
  light: [245, 243, 238] as [number, number, number],
  white: [255, 255, 255] as [number, number, number],
  divider: [200, 200, 200] as [number, number, number],
};

const PAGE_W = 210;
const PAGE_H = 297;
const MARGIN = 20;
const CONTENT_W = PAGE_W - MARGIN * 2;

function addPageNumber(doc: jsPDF, pageNum: number) {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...COLORS.muted);
  doc.text(`${pageNum}`, PAGE_W / 2, PAGE_H - 10, { align: "center" });
  doc.text("GO KOALA! — Developer Handover Document", MARGIN, PAGE_H - 10);
}

function drawDivider(doc: jsPDF, y: number): number {
  doc.setDrawColor(...COLORS.divider);
  doc.setLineWidth(0.3);
  doc.line(MARGIN, y, PAGE_W - MARGIN, y);
  return y + 6;
}

function checkPage(doc: jsPDF, y: number, needed: number, pageNum: { val: number }): number {
  if (y + needed > PAGE_H - 25) {
    addPageNumber(doc, pageNum.val);
    doc.addPage();
    pageNum.val++;
    return 25;
  }
  return y;
}

function sectionTitle(doc: jsPDF, title: string, y: number, pageNum: { val: number }): number {
  y = checkPage(doc, y, 20, pageNum);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(...COLORS.primary);
  doc.text(title.toUpperCase(), MARGIN, y);
  y += 2;
  doc.setDrawColor(...COLORS.accent);
  doc.setLineWidth(1);
  doc.line(MARGIN, y, MARGIN + 50, y);
  return y + 8;
}

function subTitle(doc: jsPDF, title: string, y: number, pageNum: { val: number }): number {
  y = checkPage(doc, y, 14, pageNum);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(...COLORS.dark);
  doc.text(title, MARGIN, y);
  return y + 6;
}

function bodyText(doc: jsPDF, text: string, y: number, pageNum: { val: number }, indent = 0): number {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...COLORS.text);
  const lines = doc.splitTextToSize(text, CONTENT_W - indent);
  for (const line of lines) {
    y = checkPage(doc, y, 5, pageNum);
    doc.text(line, MARGIN + indent, y);
    y += 4.2;
  }
  return y + 2;
}

function bulletList(doc: jsPDF, items: string[], y: number, pageNum: { val: number }, indent = 4): number {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...COLORS.text);
  for (const item of items) {
    const lines = doc.splitTextToSize(item, CONTENT_W - indent - 4);
    y = checkPage(doc, y, lines.length * 4.2 + 1, pageNum);
    doc.setFillColor(...COLORS.accent);
    doc.circle(MARGIN + indent, y - 1.2, 1, "F");
    for (let j = 0; j < lines.length; j++) {
      doc.text(lines[j], MARGIN + indent + 4, y);
      y += 4.2;
    }
    y += 1;
  }
  return y + 2;
}

function labelValue(doc: jsPDF, label: string, value: string, y: number, pageNum: { val: number }): number {
  y = checkPage(doc, y, 6, pageNum);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(...COLORS.muted);
  doc.text(label + ": ", MARGIN + 4, y);
  const labelW = doc.getTextWidth(label + ": ");
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...COLORS.text);
  const valueLines = doc.splitTextToSize(value, CONTENT_W - 8 - labelW);
  doc.text(valueLines[0], MARGIN + 4 + labelW, y);
  y += 4.5;
  for (let i = 1; i < valueLines.length; i++) {
    y = checkPage(doc, y, 5, pageNum);
    doc.text(valueLines[i], MARGIN + 4 + labelW, y);
    y += 4.5;
  }
  return y;
}

export function generateHandoverPDF() {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageNum = { val: 1 };

  // ─── COVER PAGE ───
  doc.setFillColor(...COLORS.primary);
  doc.rect(0, 0, PAGE_W, PAGE_H, "F");

  doc.setFillColor(...COLORS.accent);
  doc.rect(0, 90, PAGE_W, 4, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(42);
  doc.setTextColor(...COLORS.white);
  doc.text("GO KOALA!", PAGE_W / 2, 130, { align: "center" });

  doc.setFontSize(14);
  doc.setTextColor(200, 220, 200);
  doc.text("SENIOR DEVELOPER HANDOVER DOCUMENT", PAGE_W / 2, 142, { align: "center" });

  doc.setFillColor(...COLORS.accent);
  doc.rect(60, 150, 90, 0.5, "F");

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(200, 220, 200);
  doc.text("Animated Episodic Series & Multiplayer Computer Game", PAGE_W / 2, 164, { align: "center" });
  doc.text("S'uNReel 2026", PAGE_W / 2, 172, { align: "center" });

  doc.setFontSize(10);
  doc.setTextColor(170, 195, 170);
  doc.text("Concept by Ralph Lycett Tyrrell", PAGE_W / 2, 195, { align: "center" });
  doc.text("Animation & Game Development by Dr Baz (Barry Ferrier)", PAGE_W / 2, 203, { align: "center" });

  doc.setFontSize(9);
  doc.setTextColor(150, 175, 150);
  doc.text("Prepared for Senior Developer Handover", PAGE_W / 2, 230, { align: "center" });
  doc.text(`Generated: ${new Date().toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}`, PAGE_W / 2, 238, { align: "center" });

  doc.setFontSize(8);
  doc.setTextColor(130, 155, 130);
  doc.text("CONFIDENTIAL", PAGE_W / 2, PAGE_H - 20, { align: "center" });

  // ─── TABLE OF CONTENTS ───
  doc.addPage();
  pageNum.val++;
  let y = 30;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(...COLORS.primary);
  doc.text("TABLE OF CONTENTS", MARGIN, y);
  y += 4;
  doc.setDrawColor(...COLORS.accent);
  doc.setLineWidth(1);
  doc.line(MARGIN, y, MARGIN + 60, y);
  y += 12;

  const tocItems = [
    "1. Project Overview & Concept",
    "2. Characters — Full Cast Profiles",
    "3. Story Episodes — Season One (8 Episodes)",
    "4. Game Design — Genre, Gamification, Multiplayer, Narrative",
    "5. Target Audience & Demographics",
    "6. Creative Research & Development (10-Section Analysis)",
    "7. Stylistic Vision & Art Direction",
    "8. Platform & Technology Recommendations",
    "9. Delivery Roadmap (5-Phase Release Strategy)",
    "10. Revenue Model",
    "11. Development Notes for Senior Developer",
  ];
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(...COLORS.text);
  for (const item of tocItems) {
    doc.text(item, MARGIN + 4, y);
    y += 8;
  }

  addPageNumber(doc, pageNum.val);

  // ─── 1. PROJECT OVERVIEW ───
  doc.addPage();
  pageNum.val++;
  y = 25;

  y = sectionTitle(doc, "1. Project Overview", y, pageNum);

  y = bodyText(doc, "GO KOALA! is an animated episodic series and multiplayer computer game following Ko, a brave young koala determined to establish his own territory across a dangerous highway in the Australian bush. Along the way, he forms unlikely friendships with Little Patty (platypus), Evan (echidna), and encounters both predators and human allies. The story culminates in a groundbreaking AI-assisted conversation between Ko and his human carer Karen — making history as the first communication between humans and koalas.", y, pageNum);

  y += 2;
  y = subTitle(doc, "Core Concept", y, pageNum);
  y = bulletList(doc, [
    "Genre: 3D Action-Adventure Platformer with RPG and colony simulation elements",
    "Art Style: \"Painterly Realism\" — Studio Ghibli landscapes meet Pixar character animation",
    "Engine: Unity 6 with C# (scored 95/100 in technical analysis)",
    "Platform: PC primary (Steam Early Access), then Console (Switch/PS5/Xbox), Mobile companion, Web demo",
    "Audience: Primary 8-14, Secondary 15-25, Family co-viewing 5-7 + parents",
    "Themes: Conservation, biodiversity education, Indigenous cultural knowledge, courage, connection",
    "Format: 8 episodes per season, each with branching narrative choices and multiplayer co-op",
  ], y, pageNum);

  y += 2;
  y = subTitle(doc, "Why GO KOALA!?", y, pageNum);
  y = bodyText(doc, "1. Conservation Awareness — Koalas face critical habitat loss. GO KOALA! puts players in Ko's paws, creating visceral empathy for Australian wildlife. The highway crossing mechanic mirrors real-world danger.", y, pageNum);
  y = bodyText(doc, "2. Unique IP Potential — No major game franchise centres on Australian native animals. The diverse cast offers rich merchandising, spin-off, and educational content opportunities.", y, pageNum);
  y = bodyText(doc, "3. AI Narrative Innovation — The AI translation subplot is both topical and original, opening unique gameplay mechanics where players unlock animal communication abilities.", y, pageNum);

  addPageNumber(doc, pageNum.val);

  // ─── 2. CHARACTERS ───
  doc.addPage();
  pageNum.val++;
  y = 25;

  y = sectionTitle(doc, "2. Characters", y, pageNum);
  y = bodyText(doc, "A diverse cast of Australian wildlife and human allies, each bringing unique abilities and personality to the game and series.", y, pageNum);
  y += 2;

  const characters = [
    { name: "Ko", species: "Infant Male Koala", role: "Protagonist", traits: "Courageous, Determined, Resilient, Curious", description: "A brave young koala determined to forge his own path. After aggressive encounters with the pride male Gruff, Ko decides to cross the dangerous highway to claim new territory. His journey tests his courage but ultimately leads to an extraordinary discovery: communication between humans and animals.", gameRole: "Primary playable character. Players navigate Ko through environmental puzzles, territorial challenges, and the highway crossing. Unlocks the AI communication ability after the rescue arc." },
    { name: "Little Patty", species: "Platypus", role: "Ally & Companion", traits: "Resourceful, Loyal, Adventurous, Witty", description: "A spirited young platypus searching for a new creek in Ko's range. She joins Ko at the creek crossing and becomes his first companion. Her aquatic abilities and venomous spurs make her invaluable in water-based challenges.", gameRole: "Second playable character. Specialises in water navigation, underwater puzzle-solving, and defensive venomous attacks. Can detect hidden items using electroreception." },
    { name: "Evan", species: "Echidna", role: "Ally & Companion", traits: "Strong, Humorous, Protective, Steady", description: "A good-natured echidna who joins Ko and Little Patty on their journey. His digging abilities and tough spiny exterior make him the team's tank. Evan brings humour and heart to the trio.", gameRole: "Third playable character. Excels at digging tunnels, breaking obstacles, and defensive rolls. His spines provide natural armour against predators." },
    { name: "Ollie", species: "Powerful Owl", role: "Guardian & Transport", traits: "Wise, Noble, Powerful, Strategic", description: "A majestic powerful owl who offers to airlift the trio across the highway. Ollie is wise and protective, serving as mentor and aerial scout. His encounter with Wedgie during Ko's transport creates the story's dramatic turning point.", gameRole: "NPC ally who provides aerial reconnaissance and transport missions. Players can call on Ollie for scouting, revealing map areas, and emergency extractions." },
    { name: "Wedgie", species: "Wedge-tailed Eagle", role: "Antagonist", traits: "Fierce, Territorial, Relentless, Cunning", description: "A fierce wedge-tailed eagle who attacks Ollie and Ko during the highway crossing, causing Ko to fall onto the road. Wedgie represents the constant aerial threat in the Australian bush and is the game's primary recurring adversary.", gameRole: "Primary aerial antagonist. Boss encounter during the highway crossing and returns in later episodes. Players must use stealth and teamwork to evade or confront Wedgie." },
    { name: "Karen", species: "Human", role: "Wildlife Carer", traits: "Compassionate, Patient, Dedicated, Nurturing", description: "A dedicated wildlife carer at the koala care facility. Karen discovers she can communicate with Ko through an AI translation app. Together they become media sensations before returning to their respective worlds.", gameRole: "Key NPC in the rescue and recovery arc. Players interact with Karen during rehabilitation mini-games and the AI communication discovery sequence." },
    { name: "Bonny", species: "Female Koala", role: "Love Interest", traits: "Gentle, Wise, Nurturing, Brave", description: "A beautiful female koala whom Ko invites to his new territory. Bonny helps establish the new colony and starts a family with Ko. She represents hope and the continuation of the koala community.", gameRole: "Co-op gameplay allows a second player to control Bonny. She has unique territory management and nurturing abilities for the colony-building phase." },
    { name: "Gruff", species: "Alpha Male Koala", role: "Catalyst", traits: "Dominant, Territorial, Complex, Traditional", description: "The aggressive pride male whose territorial behaviour drives Ko to seek new lands. Gruff represents the harsh realities of koala social hierarchy. Later episodes may reveal a more complex character.", gameRole: "Early-game antagonist in the prologue. Tutorial boss fight teaches territorial combat mechanics. May become an ally in later seasons." },
  ];

  for (const char of characters) {
    y = checkPage(doc, y, 32, pageNum);
    y = subTitle(doc, `${char.name} — ${char.species}`, y, pageNum);
    y = labelValue(doc, "Role", char.role, y, pageNum);
    y = labelValue(doc, "Traits", char.traits, y, pageNum);
    y = bodyText(doc, char.description, y, pageNum, 4);
    y = labelValue(doc, "Game Role", char.gameRole, y, pageNum);
    y = drawDivider(doc, y);
    y += 2;
  }

  addPageNumber(doc, pageNum.val);

  // ─── 3. STORY EPISODES ───
  doc.addPage();
  pageNum.val++;
  y = 25;

  y = sectionTitle(doc, "3. Story Episodes — Season One", y, pageNum);
  y = bodyText(doc, "Eight episodes charting Ko's journey from outcast to pioneer, each with branching interactive threads and rich gameplay elements.", y, pageNum);
  y += 2;

  const episodes = [
    { num: 1, title: "The Departure", setting: "Ko's Original Territory", summary: "Ko faces increasingly aggressive encounters with Gruff, the pride male. After a final confrontation, Ko makes the bold decision to cross the highway and claim new territory in the large forest he can see from the treetops.", gameplay: ["Tutorial combat: learn territorial defence against Gruff", "Tree-climbing mechanics and eucalyptus foraging", "Environmental awareness: surveying from high branches", "Stealth sections: avoiding Gruff's patrols"], threads: ["Players choose which route Ko takes to leave his territory", "Optional: say goodbye to mother Flo (affects later emotional scenes)", "Gather supplies: which eucalyptus varieties Ko takes for the journey"] },
    { num: 2, title: "Creek Crossing", setting: "The Nearby Creek", summary: "Ko reaches the creek and encounters Little Patty the platypus. The unlikely duo bond over their shared desire for new territory. They meet Evan the echidna, forming the core trio of adventurers.", gameplay: ["Water navigation: Little Patty introduces swimming mechanics", "Cooperation puzzles requiring all three characters' abilities", "Fishing mini-games and creek exploration", "Evan's digging reveals hidden paths and items"], threads: ["Choose which companion to befriend first", "Side quests: help Little Patty find the perfect creek pool", "Evan's backstory mission: retrieve his collection of termite mounds"] },
    { num: 3, title: "The Highway", setting: "Highway Edge & Crossing", summary: "The trio reaches the highway and must plan their crossing. Ollie the powerful owl offers airlift. He successfully carries Little Patty and Evan, but on Ko's turn, Wedgie the eagle attacks mid-flight.", gameplay: ["Strategic planning phase: scout the highway for crossing opportunities", "Aerial combat: Ollie vs Wedgie boss battle", "Quick-time events during Ko's fall to the highway", "Vehicle dodging mechanics (Frogger-inspired but 3D)"], threads: ["Choose crossing strategy: wait for night, use Ollie, or attempt ground crossing", "During Wedgie's attack: fight back or try to glide to safety", "Critical decision: which direction Ko lands determines injury severity"] },
    { num: 4, title: "Rescue & Recovery", setting: "Highway & Wildlife Care Facility", summary: "Ko is struck by a car and left injured on the roadside. Alison, a compassionate driver, stops and rescues him, taking him to a koala care facility where carer Karen begins his rehabilitation.", gameplay: ["Survival mini-game: Ko must stay conscious until rescue arrives", "Rehabilitation puzzles: physiotherapy and recovery challenges", "Emotional story sequences with limited gameplay (cinematic)", "Karen's care facility management mini-game"], threads: ["Alison's perspective: playable sequence finding and rescuing Ko", "Choose rehabilitation activities that affect Ko's recovery speed", "Side story: follow Little Patty and Evan waiting across the highway"] },
    { num: 5, title: "First Words", setting: "Wildlife Care Facility", summary: "Ko tries desperately to communicate with Karen. Her computer's AI picks up on patterns in Ko's vocalisations and develops a translation app. For the first time in recorded history, humans and koalas can have a conversation.", gameplay: ["Communication puzzle: help Ko form coherent messages", "AI calibration mini-game: adjust the translation parameters", "Dialogue system unlocks: choose what Ko says to Karen", "Word discovery: expand Ko's translatable vocabulary"], threads: ["Choose Ko's first words — what does he tell humans?", "Decide what information about koala life to share", "Optional: teach Karen about eucalyptus varieties and their significance"] },
    { num: 6, title: "Fame & Fortune", setting: "Media World & Care Facility", summary: "Ko and Karen become global media sensations. The world is captivated by the first human-animal conversation. But the demands of fame begin to overwhelm them both, and Ko yearns for the bush.", gameplay: ["Media management: choose which interviews to accept", "Stress metre: balance fame demands with Ko's wellbeing", "Public speaking mini-games from Ko's perspective", "Social media response system: manage public opinion"], threads: ["Choose how much of koala culture to reveal to the world", "Handle journalists and their questions (some hostile)", "Karen's moral dilemma: exploit the situation or protect Ko?"] },
    { num: 7, title: "New Beginnings", setting: "Ko's New Territory", summary: "Karen returns to her wildlife caring and Ko is released to establish his new home range. He invites Bonny to start a family. The territory grows with a new brood as Ko builds a thriving koala community.", gameplay: ["Territory management: claim and develop Ko's new range", "Colony building: attract other koalas and manage resources", "Eucalyptus grove cultivation and expansion", "Co-op mode: second player can control Bonny"], threads: ["Choose where to establish the colony centre", "Courtship mini-game: impress Bonny with territory quality", "Karen visits with the AI translator — choose what to discuss"] },
    { num: 8, title: "The Return", setting: "Highway & Original Territory", summary: "Ko gets restless and decides to re-cross the highway to visit his mother Flo. The journey back is fraught with new dangers, but Ko is wiser and stronger. Season One's finale sets up future adventures.", gameplay: ["Reverse highway crossing with new obstacles", "Reunion with Flo and the original band", "Confrontation or reconciliation with Gruff", "Season finale boss: evolved Wedgie encounter"], threads: ["Choose the return route: through the highway or an alternative path", "Decide whether to bring companions or go solo", "Gruff encounter: fight, negotiate, or reconcile", "Cliffhanger choice: what threat emerges for Season Two?"] },
  ];

  for (const ep of episodes) {
    y = checkPage(doc, y, 40, pageNum);
    y = subTitle(doc, `Episode ${ep.num}: ${ep.title}`, y, pageNum);
    y = labelValue(doc, "Setting", ep.setting, y, pageNum);
    y = bodyText(doc, ep.summary, y, pageNum, 4);
    y = checkPage(doc, y, 10, pageNum);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(...COLORS.muted);
    doc.text("Gameplay Elements:", MARGIN + 4, y);
    y += 5;
    y = bulletList(doc, ep.gameplay, y, pageNum, 8);
    y = checkPage(doc, y, 10, pageNum);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(...COLORS.muted);
    doc.text("Interactive Threads:", MARGIN + 4, y);
    y += 5;
    y = bulletList(doc, ep.threads, y, pageNum, 8);
    y = drawDivider(doc, y);
    y += 2;
  }

  addPageNumber(doc, pageNum.val);

  // ─── 4. GAME DESIGN ───
  doc.addPage();
  pageNum.val++;
  y = 25;

  y = sectionTitle(doc, "4. Game Design", y, pageNum);

  y = subTitle(doc, "Genre Classification", y, pageNum);
  y = bulletList(doc, [
    "Primary: 3D Action-Adventure Platformer",
    "Secondary: Narrative Choice / Episodic",
    "Tertiary: Colony Simulation / Territory Management",
    "Comparable titles: Ori and the Blind Forest + Animal Crossing + Life is Strange",
  ], y, pageNum);

  y = subTitle(doc, "Core Gameplay Loop", y, pageNum);
  y = bulletList(doc, [
    "1. Explore — Navigate the Australian bush, discover new areas, find resources",
    "2. Survive — Avoid predators, cross hazards, manage health and stamina",
    "3. Connect — Meet characters, form alliances, make story choices",
    "4. Build — Establish territory, grow the colony, unlock abilities",
    "5. Communicate — Use AI translation to bridge human and animal worlds",
  ], y, pageNum);

  y = subTitle(doc, "Character Ability System", y, pageNum);
  y = bodyText(doc, "Ko (Explorer/Diplomat): Tree climbing, eucalyptus foraging, territorial marking, AI communication (post-rescue), night vision in canopy.", y, pageNum, 4);
  y = bodyText(doc, "Little Patty (Scout/Engineer): Underwater navigation, electroreception (detect hidden items), venomous spur attack, dam building and water control.", y, pageNum, 4);
  y = bodyText(doc, "Evan (Tank/Support): Tunnelling and digging, spine shield (natural armour), ant and termite harvesting (healing), earthquake stomp (area stun).", y, pageNum, 4);

  y += 2;
  y = subTitle(doc, "Multiplayer Modes", y, pageNum);
  y = bulletList(doc, [
    "Co-op Campaign (2-3 players) — Play through the story with friends controlling Ko, Little Patty, or Evan",
    "Territory Wars (4-8 players) — Competitive colony-building mode",
    "Highway Dash (2-16 players) — Fast-paced competitive crossing mode",
    "Conservation Alliance (up to 32 players) — Massive cooperative habitat protection mode",
    "Creature Creator (single + share) — Design custom Australian animal characters",
    "Story Forge (1-4 players) — User-generated episode creator with Steam Workshop integration",
  ], y, pageNum);

  y = subTitle(doc, "Gamification Systems", y, pageNum);
  y = bulletList(doc, [
    "Achievement system with story-tied milestones (First Steps, Highway Survivor, First Words, Colony Founder, etc.)",
    "Multi-track XP: Character XP, Territory XP, Communication XP, Friendship XP, Conservation Score",
    "50+ eucalyptus species to discover and catalogue, territory decorations, character skins",
    "Daily challenges, seasonal events (bushfire rescue, flood survival, mating season), community goals",
    "Branching narrative with 3 distinct endings per episode and persistent world state consequences",
  ], y, pageNum);

  y = subTitle(doc, "PvE Boss Encounters", y, pageNum);
  y = bulletList(doc, [
    "Gruff — Tutorial boss teaching territorial combat",
    "Wedgie — Aerial boss with dive-bomb attacks and updraft mechanics",
    "The Highway — Environmental boss (traffic patterns as attack waves)",
    "Media Frenzy — Social boss managing overwhelm and stress",
    "Bushfire — Season Two environmental catastrophe boss",
    "Feral Cats & Foxes — Stealth-based predator encounters",
  ], y, pageNum);

  addPageNumber(doc, pageNum.val);

  // ─── 5. AUDIENCE ───
  doc.addPage();
  pageNum.val++;
  y = 25;

  y = sectionTitle(doc, "5. Target Audience & Demographics", y, pageNum);
  y = bodyText(doc, "GO KOALA! is a biodiversity message wrapped in adventure. Built for 8-14 year-olds with broad family appeal, it teaches kids to see the Australian bush as a living system — and honours the Indigenous custodians who have cared for it for over 65,000 years.", y, pageNum);
  y += 2;

  y = subTitle(doc, "Primary Audience: Ages 8-14 (45% of player base)", y, pageNum);
  y = bulletList(doc, [
    "Ko's quest to find territory mirrors the desire for independence that defines this age group",
    "Biodiversity puzzles challenge players to restore habitats by understanding ecosystems",
    "Cooperative multiplayer (2-4 player co-op) encourages teamwork and empathy",
    "Indigenous seasonal knowledge woven into gameplay cycles: six Noongar seasons",
    "Comparables: Bluey, Spyro Reignited Trilogy, Slime Rancher, Ori and the Blind Forest",
  ], y, pageNum);

  y = subTitle(doc, "Secondary Audience: Ages 15-25 (30%)", y, pageNum);
  y = bulletList(doc, [
    "Deeper ecological narratives and intersection of Indigenous knowledge with modern science",
    "Competitive multiplayer modes with ecological stakes",
    "Indie-game aesthetics and values-driven messaging align with this cohort's patterns",
    "Comparables: Avatar: The Last Airbender, Hollow Knight, Stardew Valley, Ghibli films",
  ], y, pageNum);

  y = subTitle(doc, "Tertiary Audience: Ages 5-7 & Parents (25%)", y, pageNum);
  y = bulletList(doc, [
    "The 'Bluey effect' — younger children captivated by animals, parents value the education",
    "Simplified 'explorer mode' for younger siblings: identifying plants, tracking animals, learning bush tucker names in language",
    "Parents appreciate that Indigenous culture is presented with authenticity and respect",
    "Comparables: Bluey, Octonauts, Wild Kratts, Animal Crossing: New Horizons",
  ], y, pageNum);

  y += 2;
  y = subTitle(doc, "Core Mission Pillars", y, pageNum);
  y = bodyText(doc, "Biodiversity Literacy: Every episode is grounded in real Australian ecology. Players learn why each species matters to the whole system — koalas need specific eucalyptus, those trees need mycorrhizal fungi, those fungi need undisturbed soil.", y, pageNum, 4);
  y = bodyText(doc, "Indigenous Knowledge & Culture: Australia's First Nations peoples are the world's oldest continuous culture — over 65,000 years of custodianship. GO KOALA! honours this by weaving Indigenous perspectives into the fabric of the world, including traditional ecological knowledge, dual naming of places, and Indigenous art-inspired visual motifs created with community consultation.", y, pageNum, 4);
  y = bodyText(doc, "Connection to Country: Country in the Indigenous Australian sense is not just land — it's the living relationship between people, animals, plants, waterways, sky, and story. The game world responds to how players treat it — healthy Country thrives, neglected Country degrades.", y, pageNum, 4);

  y += 2;
  y = subTitle(doc, "Market Insights", y, pageNum);
  y = bulletList(doc, [
    "$184B global games market revenue (2025) — biodiversity content is an underserved niche",
    "190+ countries where Australian wildlife trends on streaming platforms",
    "Dual-medium properties (game + series) generate roughly 2x licensing revenue",
    "Conservation-tied merchandise and Indigenous artist collaborations drive authentic brand value",
  ], y, pageNum);

  addPageNumber(doc, pageNum.val);

  // ─── 6. CREATIVE RESEARCH ───
  doc.addPage();
  pageNum.val++;
  y = 25;

  y = sectionTitle(doc, "6. Creative Research & Development", y, pageNum);
  y = bodyText(doc, "A structured development analysis of the GO KOALA! concept — examining theme, character arcs, narrative stakes, the AI translator hook, episodic structure, game mechanics, and market positioning.", y, pageNum);
  y += 2;

  y = subTitle(doc, "01. Core Theme", y, pageNum);
  y = bodyText(doc, "The concept carries multiple themes — growing up, environmental danger, cross-species communication, media overload, and returning home. The recommendation is to unify these under a single emotional spine: \"Finding your place in a changing world.\"", y, pageNum);
  y = bulletList(doc, [
    "Leaving mum — the universal desire for independence",
    "Surviving the highway — confronting real environmental danger",
    "The human/animal tech bridge — discovering that connection changes everything",
    "Fame — learning that attention isn't the same as meaning",
    "Returning home wiser — growth only counts if you carry it back",
  ], y, pageNum);

  y = subTitle(doc, "02. Ko's Character Arc", y, pageNum);
  y = bulletList(doc, [
    "Beginning: Naive, impulsive, wants independence at any cost",
    "Middle: Learns humans are complex, sees environmental damage firsthand, feels responsible",
    "Fame Phase: Tempted by celebrity status — the spotlight feels like purpose",
    "Crisis: Must choose between the spotlight or protecting habitat",
    "Resolution: Becomes a bridge between species — not just a celebrity, but a voice",
  ], y, pageNum);

  y = subTitle(doc, "03. Raising the Stakes", y, pageNum);
  y = bulletList(doc, [
    "The highway as a recurring antagonist — massive trucks, construction expansion, always growing",
    "Wedgie the Eagle as a recurring rival, not a one-off threat",
    "The forest Ko wants may be threatened by development — his goal is under siege",
    "The translating AI could be wanted by corporations or government — turning Ko's gift into a liability",
  ], y, pageNum);

  y = subTitle(doc, "04. Supporting Cast Development", y, pageNum);
  y = bodyText(doc, "Little Patty: Sarcastic, secretly brilliant, tech-curious — could become fascinated by the AI translator.", y, pageNum, 4);
  y = bodyText(doc, "Evan: Philosophical, moves slowly but thinks deeply. Echidnas are ancient — he embodies deep time and patience.", y, pageNum, 4);
  y = bodyText(doc, "Ollie: Helpful on the surface but possible hidden agenda. Owls are predators — is he genuinely kind?", y, pageNum, 4);
  y = bodyText(doc, "Wedgie: Territorial but under habitat pressure. Not simply evil — a desperate, nuanced antagonist.", y, pageNum, 4);

  y = subTitle(doc, "05. The AI Translator", y, pageNum);
  y = bodyText(doc, "This is the most unique element. Key question: \"What happens when predators and prey can talk? What if humans don't like what animals say?\"", y, pageNum);
  y = bulletList(doc, [
    "Does the AI only translate Ko, or all animals? The scope changes everything",
    "Industries may want to suppress animal testimony — environmental destruction gets a voice",
    "Activists could weaponise it — ethical grey areas around consent and exploitation",
    "Government regulation of animal speech opens political satire and drama",
    "For a game, communication as a core mechanic with real consequences is gold",
  ], y, pageNum);

  y = subTitle(doc, "06. Strengthening the Ending", y, pageNum);
  y = bulletList(doc, [
    "Option A — Full Circle Growth: Ko returns to his mother not from boredom but as a mature adult with perspective",
    "Option B — Protector Arc: He returns because development threatens his original home. The journey taught him to fight",
    "Option C — Sequel Hook: He crosses again but leads a movement to build wildlife crossings, setting up Season 2",
  ], y, pageNum);

  y = subTitle(doc, "07. Episodic Series Structure (Proposed 10 Episodes)", y, pageNum);
  y = bulletList(doc, [
    "1. Leaving Home — 2. Crossing the Creek — 3. Highway of Doom — 4. The Attack — 5. Human World",
    "6. The Voice of the Forest — 7. Fame Spiral — 8. The Backlash — 9. Choosing a Side — 10. Home Again (but changed)",
  ], y, pageNum);

  y = subTitle(doc, "08-09. Game Potential & Tone", y, pageNum);
  y = bulletList(doc, [
    "Five game modes: Territory Builder, Highway Crossing, Co-op Multiplayer, Communication Mode, Media Mode",
    "Core demographic 8-14 with family streaming audiences and light satirical edge",
    "Environmental adventure as genre anchor — education wrapped in entertainment",
  ], y, pageNum);

  y = subTitle(doc, "10. Title Considerations", y, pageNum);
  y = bodyText(doc, "\"GO KOALA!\" is energetic and works well for the comedic, action-oriented tone. Alternatives considered: Ko & The Crossing (adventure focus), Highway to Home (journey narrative), The Koala Who Spoke (mystery/drama), Wild Voice (cinematic/poetic), Ko: Between Two Worlds (dual-identity). Verdict: For the family-friendly direction, keep GO KOALA!", y, pageNum);

  addPageNumber(doc, pageNum.val);

  // ─── 7. STYLISTIC VISION (was 6) ───
  doc.addPage();
  pageNum.val++;
  y = 25;

  y = sectionTitle(doc, "7. Stylistic Vision & Art Direction", y, pageNum);

  y = subTitle(doc, "Art Direction: \"Painterly Realism\"", y, pageNum);
  y = bodyText(doc, "GO KOALA! adopts a \"painterly realism\" art style sitting between photorealism and stylised illustration. Think the warm, textured worlds of Studio Ghibli's natural landscapes combined with the expressive character animation of Pixar. The Australian bush should feel alive, golden, and slightly magical, whilst the animals have exaggerated, appealing features that support their emotional range without losing their essential \"Australian-ness\".", y, pageNum);

  y += 2;
  y = subTitle(doc, "Colour Palettes", y, pageNum);
  y = bodyText(doc, "Environment: Warm eucalyptus greens, dusty ochres, amber sunlight, purple twilight shadows. Seasonal variation across episodes.", y, pageNum, 4);
  y = bodyText(doc, "Characters: Ko and koalas use soft greys with warm undertones. Little Patty has rich chocolate browns. Evan's quills catch golden highlights. Wedgie's plumage is dark and imposing.", y, pageNum, 4);
  y = bodyText(doc, "UI: Natural wood and leaf aesthetic. Menus feel carved from bark or painted on eucalyptus leaves. AI translator contrasts with clean, modern digital blue.", y, pageNum, 4);

  y += 2;
  y = subTitle(doc, "Animation Style", y, pageNum);
  y = bulletList(doc, [
    "Character Animation: Fluid, expressive with squash-and-stretch principles. Ko's movements feel weighty but endearing",
    "Environmental Animation: Wind through eucalyptus canopy, flowing water, dynamic weather. Particle effects for dust, leaves, fireflies",
    "Cinematic Sequences: In-engine using Unity Timeline. Camera inspired by nature documentaries with dramatic flair",
    "Transitions: Painted wipe effects. Scene changes feel like turning pages in a storybook",
  ], y, pageNum);

  y = subTitle(doc, "Sound Design & Music", y, pageNum);
  y = bulletList(doc, [
    "Orchestral soundtrack with Australian instruments: didgeridoo, clap sticks, bullroarer. Each character has a leitmotif",
    "Authentic bush soundscape: kookaburra calls, cicada chorus, creek babbling. Spatialized 3D audio",
    "Animals communicate through expressive vocalisations (not English). AI translator overlays text",
    "Dynamic music system responding to gameplay state — gentle ambient to intense percussion",
  ], y, pageNum);

  y = subTitle(doc, "Camera System", y, pageNum);
  y = bulletList(doc, [
    "Third-person follow camera with smart framing during platforming",
    "Dynamic zoom: tight close-ups during dialogue, wide shots for exploration",
    "Bird's-eye view for territory management and colony building",
    "First-person vignettes for dramatic moments (Ko's perspective during the car strike)",
    "Split-screen support for local co-op, photo mode with depth of field",
  ], y, pageNum);

  y = subTitle(doc, "Time of Day & Lighting", y, pageNum);
  y = bulletList(doc, [
    "Dawn: Misty pink and gold, dewy spider webs, kookaburra chorus. Mood: Hope & New Beginnings",
    "Midday: Harsh Australian sun, dramatic shadows, heat shimmer on highway. Mood: Challenge & Endurance",
    "Golden Hour: Warm amber, long shadows, magical and cinematic. Mood: Beauty & Connection",
    "Night: Moonlit blue-silver tones, bioluminescent fungi, increased predator danger. Mood: Mystery & Danger",
  ], y, pageNum);

  y = subTitle(doc, "Visual References", y, pageNum);
  y = bulletList(doc, [
    "Ori & The Blind Forest — Environmental beauty and emotional storytelling through environment",
    "Studio Ghibli (Mononoke, Totoro) — Nature portrayed as magical, sacred, worth protecting",
    "Crash Bandicoot — Australian characters and environments can be globally appealing",
    "Life is Strange — Episodic structure, meaningful choices, emotional depth",
  ], y, pageNum);

  addPageNumber(doc, pageNum.val);

  // ─── 7. PLATFORM & TECH ───
  doc.addPage();
  pageNum.val++;
  y = 25;

  y = sectionTitle(doc, "8. Platform & Technology", y, pageNum);

  y = subTitle(doc, "Platform Suitability Scores", y, pageNum);

  const platforms = [
    { name: "PC (Steam / Epic)", score: "92/100", rec: "Primary launch platform. Steam Early Access suits episodic releases. Workshop integration enables community-created content." },
    { name: "Console (Switch / PS5 / Xbox)", score: "78/100", rec: "Secondary platform 6-12 months after PC. Nintendo Switch is priority given family-friendly nature." },
    { name: "Mobile (iOS / Android)", score: "70/100", rec: "Companion app or simplified mobile version for colony management and AI translator tool." },
    { name: "Web Browser (WebGL)", score: "65/100", rec: "Use for playable demo, educational content, and animated series viewer. Not for full game." },
  ];

  for (const p of platforms) {
    y = checkPage(doc, y, 14, pageNum);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(...COLORS.dark);
    doc.text(`${p.name}`, MARGIN + 4, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...COLORS.accent);
    doc.text(`[${p.score}]`, MARGIN + 4 + doc.getTextWidth(p.name + " "), y);
    y += 5;
    y = bodyText(doc, p.rec, y, pageNum, 8);
    y += 1;
  }

  y += 2;
  y = subTitle(doc, "Recommended Development Stack", y, pageNum);

  const stacks = [
    { name: "C# with Unity 6", score: "95/100", detail: "Industry-standard for indie 3D games. Massive asset store, excellent animation pipeline, built-in multiplayer (Netcode), WebGL export, Timeline system for cinematics." },
    { name: "C++ with Unreal Engine 5", score: "82/100", detail: "Stunning visuals with Nanite/Lumen but overkill for stylised art direction. Steeper learning curve." },
    { name: "GDScript with Godot 4", score: "74/100", detail: "Fully open source, no royalties. Strong for 2D but 3D still maturing. Smaller ecosystem." },
    { name: "TypeScript with Three.js/PlayCanvas", score: "58/100", detail: "Web-native only. Suitable for demo and educational mini-games, not the core game." },
  ];

  for (const s of stacks) {
    y = checkPage(doc, y, 14, pageNum);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(...COLORS.dark);
    doc.text(`${s.name}`, MARGIN + 4, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...COLORS.accent);
    doc.text(`[${s.score}]`, MARGIN + 4 + doc.getTextWidth(s.name + " "), y);
    y += 5;
    y = bodyText(doc, s.detail, y, pageNum, 8);
    y += 1;
  }

  y += 2;
  y = subTitle(doc, "Technical Architecture Summary", y, pageNum);
  y = bulletList(doc, [
    "Backend: Cloud-based multiplayer (AWS GameLift or PlayFab), RESTful API, WebSocket for real-time co-op, PostgreSQL + Redis",
    "AI Translation: NLP engine for animal vocalisations, ML model trained on koala acoustic data, progressive vocabulary unlocking",
    "Content Delivery: Episodic downloadable chapters, asset streaming for large environments, hot-loading for seasonal events",
    "Animated Series: In-engine rendering via Unity Timeline, real-time 3D episodes reflecting player choices, standalone export pipeline",
  ], y, pageNum);

  addPageNumber(doc, pageNum.val);

  // ─── 8. DELIVERY ROADMAP ───
  doc.addPage();
  pageNum.val++;
  y = 25;

  y = sectionTitle(doc, "9. Delivery Roadmap", y, pageNum);
  y = bodyText(doc, "GO KOALA! follows a phased release strategy — building audience through a free web demo and animated series, then launching on PC via Steam Early Access, expanding to consoles and mobile over 18 months.", y, pageNum);
  y += 2;

  const phases = [
    { phase: "Phase 1: Foundation & Awareness", time: "Months 1-6", items: ["Playable Web Demo (Browser/WebGL) — 15-minute slice of Episode 1", "Animated Series Pilot (YouTube/streaming pitch) — 22-minute pilot rendered in-engine", "Community launch on Discord, social media, character reveals, behind-the-scenes content"] },
    { phase: "Phase 2: PC Launch — Steam Early Access", time: "Months 7-12", items: ["Episodes 1-4 on Steam — first half of Season 1 with full co-op multiplayer", "Story Forge community tools via Steam Workshop — player-created stories and levels", "Conservation partnerships with Australian wildlife organisations and in-game species profiles"] },
    { phase: "Phase 3: Full Release & Console Expansion", time: "Months 12-18", items: ["Episodes 5-8 + full release on PC (exit Early Access)", "Nintendo Switch version optimised for handheld and couch co-op", "PlayStation 5 and Xbox Series with enhanced visuals and cross-save"] },
    { phase: "Phase 4: Mobile & Ecosystem Growth", time: "Months 18-24", items: ["Mobile companion app (iOS/Android, tablet-first) — simplified explorer mode for younger players", "Full animated series (10 episodes) on streaming platforms (ABC/Stan/Netflix)", "Educational programme for schools and museums with teacher guides and interactive web modules"] },
    { phase: "Phase 5: Season 2 & Beyond", time: "Months 24+", items: ["Season 2 content: new episodes, regions, playable species, deeper Indigenous cultural storylines", "Merchandise and licensing: plush toys, apparel, art books, Indigenous artist collaborations", "Global localisation into major languages with international conservation partnerships"] },
  ];

  for (const p of phases) {
    y = checkPage(doc, y, 28, pageNum);
    y = subTitle(doc, p.phase, y, pageNum);
    y = labelValue(doc, "Timeline", p.time, y, pageNum);
    y = bulletList(doc, p.items, y, pageNum, 8);
    y += 2;
  }

  addPageNumber(doc, pageNum.val);

  // ─── 9. REVENUE MODEL ───
  y = checkPage(doc, y, 40, pageNum);
  y = sectionTitle(doc, "10. Revenue Model", y, pageNum);

  y = bulletList(doc, [
    "Game Sales (Phase 2-3): Premium pricing on PC and console, Early Access discount, seasonal sales events",
    "Animated Series Licensing (Phase 4-5): Streaming platform deals, international distribution, educational broadcast rights",
    "Mobile & Companion App (Phase 4): Premium app or ethical free-to-play with cosmetic-only purchases — no pay-to-win",
    "Merchandise & Licensing (Phase 5+): Plush toys, Indigenous artist collaborations, educational kits, conservation charity partnerships",
  ], y, pageNum);

  addPageNumber(doc, pageNum.val);

  // ─── 10. DEVELOPER NOTES ───
  doc.addPage();
  pageNum.val++;
  y = 25;

  y = sectionTitle(doc, "11. Development Notes for Senior Developer", y, pageNum);

  y = bodyText(doc, "This section summarises the key technical decisions and priorities for beginning development of GO KOALA!", y, pageNum);
  y += 4;

  y = subTitle(doc, "Recommended First Steps", y, pageNum);
  y = bulletList(doc, [
    "Set up Unity 6 project with URP (Universal Render Pipeline) for cross-platform visual quality",
    "Establish the core character controller for Ko — tree climbing, ground movement, stamina system",
    "Build a prototype of the Australian bush environment using the painterly realism art direction",
    "Implement the episodic content loading system — each episode as a separate addressable asset bundle",
    "Create the co-op multiplayer foundation using Unity Netcode for GameObjects",
    "Design the branching narrative data structure — dialogue trees, consequence tracking, save state",
    "Prototype the AI translation UI overlay system — progressive vocabulary unlocking",
    "Build the WebGL export pipeline early to validate the web demo delivery strategy",
  ], y, pageNum);

  y = subTitle(doc, "Technical Priorities", y, pageNum);
  y = bulletList(doc, [
    "Cross-platform from day one: PC, Switch, PS5 targets should be validated early in URP",
    "Performance budget: target 60fps on Switch in handheld mode — this constrains art asset complexity",
    "Animation pipeline: establish character rig standards, blend tree architecture, and facial expression system early",
    "Audio system: implement the adaptive music system and spatialised 3D audio for the bush soundscape",
    "Save system: design for cross-platform cloud saves and episodic state persistence",
    "Accessibility: plan for subtitle system, scalable UI, colour-blind modes, and dyslexia-friendly fonts from the start",
    "Localisation: use Unity's localisation package and design all text containers for translation expansion",
  ], y, pageNum);

  y = subTitle(doc, "Content Pipeline", y, pageNum);
  y = bulletList(doc, [
    "Unity Timeline for all cinematic sequences — enables dual use for game cutscenes and animated series",
    "Addressable assets for episodic content delivery — minimise initial download size",
    "Steam Workshop integration for Story Forge — plan the content creation API and moderation pipeline",
    "Asset naming conventions: Australian species taxonomy for environment assets (e.g., eucalyptus_obliqua_messmate)",
    "Version control: Git LFS for large assets, branching strategy aligned with episodic release schedule",
  ], y, pageNum);

  y = subTitle(doc, "Cultural Consultation Requirements", y, pageNum);
  y = bulletList(doc, [
    "Indigenous art motifs and visual elements MUST be created in consultation with Indigenous communities",
    "Traditional ecological knowledge integration requires cultural advisory board sign-off",
    "Place names in Indigenous languages need verification by relevant language groups",
    "Dreamtime-inspired story elements require sensitivity review and community approval",
    "Revenue-sharing arrangements for Indigenous artist collaboration content",
  ], y, pageNum);

  y += 4;
  y = drawDivider(doc, y);
  y += 4;
  y = bodyText(doc, "This document was generated from the GO KOALA! interactive proposal website. For the full interactive experience with character illustrations, animated transitions, and detailed breakdowns, visit the proposal site directly.", y, pageNum);

  y += 6;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(...COLORS.primary);
  y = checkPage(doc, y, 8, pageNum);
  doc.text("GO KOALA! — Let's build something extraordinary.", PAGE_W / 2, y, { align: "center" });

  addPageNumber(doc, pageNum.val);

  doc.save("GO_KOALA_Developer_Handover.pdf");
}
