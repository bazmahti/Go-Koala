// ============================================================
//  GO KOALA! — Episode 1, Scene 1: The Departure
//  Engine: Phaser 3 (CDN)
//  All characters are placeholder shapes — see PLACEHOLDER comments
// ============================================================

const GAME_W = 960;
const GAME_H = 540;

// ─── COLOUR PALETTE ──────────────────────────────────────────
const PALETTE = {
  sky:        0xc9d8e8,
  skyGlow:    0xf0d9b0,
  midTrees:   0x6b7c4a,
  nearBush:   0x8a9a45,
  ground:     0x7a4a28,
  groundTop:  0x5c3218,
  bark:       0x6b4226,
  branch:     0x5a3820,
  ko:         0xb0a090,
  flo:        0x9a8878,
  gruff:      0x4a4444,
  dialogBg:   0x1a1a2e,
  dialogText: 0xf5f0e8,
  choiceBtn:  0x2d5a27,
  choiceBtnH: 0x4a8a3a,
  choiceText: 0xffffff,
  glowYellow: 0xffee88,
  shadow:     0x000000,
};

// ─── SCENE: DepartureScene ───────────────────────────────────
class DepartureScene extends Phaser.Scene {
  constructor() {
    super({ key: 'DepartureScene' });
  }

  create() {
    this.gameState = 'intro';   // tracks story state
    this.koOnBranch = true;
    this.choices = [];
    this.dialogBox = null;
    this.dialogText = null;
    this.activeGlows = [];
    this.zzzTexts = [];

    this._buildParallaxBackground();
    this._buildTree();
    this._buildPlatforms();
    this._buildCharacters();
    this._buildPlayerPhysics();
    this._buildUI();
    this._buildInputs();
    this._startStorySequence();
  }

  // ─── BACKGROUND LAYERS (Parallax) ──────────────────────────
  _buildParallaxBackground() {
    const g = this.add.graphics();

    // Layer 1 — Sky gradient (far)
    // PLACEHOLDER — replace with: painted sky texture (dawn/golden hour atmosphere)
    for (let y = 0; y < GAME_H * 0.65; y++) {
      const t = y / (GAME_H * 0.65);
      const r = Phaser.Math.Linear(0xc9, 0xf0, t);
      const gv = Phaser.Math.Linear(0xd8, 0xe8, t);
      const b = Phaser.Math.Linear(0xe8, 0xc0, t);
      g.fillStyle(Phaser.Display.Color.GetColor(r, gv, b), 1);
      g.fillRect(0, y, GAME_W, 1);
    }

    // Sun / warm glow top-right
    // PLACEHOLDER — replace with: animated sun sprite with lens flare
    g.fillStyle(0xffe0a0, 0.35);
    g.fillCircle(GAME_W * 0.82, 60, 80);
    g.fillStyle(0xffcc66, 0.15);
    g.fillCircle(GAME_W * 0.82, 60, 130);

    // Layer 2 — Distant silhouetted eucalyptus trees (mid, static parallax)
    // PLACEHOLDER — replace with: soft-painted silhouette texture on its own layer with parallax scroll factor 0.3
    this.midLayer = this.add.graphics();
    this._drawSilhouetteTrees(this.midLayer, 0.3, 0x6b7c4a, 7, GAME_H * 0.35, GAME_H * 0.18);
    this.midLayer.setScrollFactor(0.3);

    // Layer 3 — Near bush / foreground foliage (parallax 0.6)
    // PLACEHOLDER — replace with: detailed painted foreground bush texture, parallax 0.6
    this.nearLayer = this.add.graphics();
    this._drawSilhouetteTrees(this.nearLayer, 0.6, 0x8a9a45, 12, GAME_H * 0.48, GAME_H * 0.14);
    this.nearLayer.setScrollFactor(0.6);

    // Layer 4 — Ground
    // PLACEHOLDER — replace with: red-brown earth texture with grass fringe
    g.fillStyle(PALETTE.groundTop, 1);
    g.fillRect(0, GAME_H - 100, GAME_W * 4, 8);
    g.fillStyle(PALETTE.ground, 1);
    g.fillRect(0, GAME_H - 92, GAME_W * 4, 100);

    // Add ambient dust particles
    // PLACEHOLDER — replace with: particle texture sprites
    this._addDustParticles();
  }

  _drawSilhouetteTrees(gfx, parallax, color, count, baseY, heightRange) {
    gfx.fillStyle(color, 0.85);
    const spacing = GAME_W * 1.5 / count;
    for (let i = 0; i < count; i++) {
      const x = i * spacing + Phaser.Math.Between(-20, 20);
      const h = heightRange + Phaser.Math.Between(0, heightRange * 0.5);
      const w = 35 + Phaser.Math.Between(0, 25);
      // trunk
      gfx.fillRect(x + w * 0.4, baseY, w * 0.2, h * 0.4);
      // canopy blobs
      gfx.fillEllipse(x + w * 0.5, baseY - h * 0.2, w, h * 0.7);
      gfx.fillEllipse(x + w * 0.25, baseY, w * 0.6, h * 0.5);
      gfx.fillEllipse(x + w * 0.75, baseY - h * 0.05, w * 0.6, h * 0.45);
    }
  }

  _addDustParticles() {
    // PLACEHOLDER — replace with: dust/pollen sprite texture for particles
    const particles = this.add.particles(0, 0, '__DEFAULT', {
      x: { min: 0, max: GAME_W },
      y: { min: 100, max: GAME_H - 120 },
      alpha: { start: 0.3, end: 0 },
      scale: { start: 0.5, end: 0.1 },
      tint: 0xffe090,
      speed: { min: 5, max: 20 },
      angle: { min: -20, max: 20 },
      lifespan: 4000,
      quantity: 1,
      frequency: 800,
    });
    particles.setDepth(1);
  }

  // ─── TREE (climbable) ───────────────────────────────────────
  _buildTree() {
    const g = this.add.graphics();

    // PLACEHOLDER — replace with: detailed painted eucalyptus tree sprite sheet
    // Ko's home tree — wide, gnarly, iconic
    const treeX = 220;
    const groundY = GAME_H - 92;

    // Shadow
    g.fillStyle(0x000000, 0.12);
    g.fillEllipse(treeX, groundY + 4, 90, 16);

    // Trunk — bark texture via colour variation
    g.fillStyle(PALETTE.bark, 1);
    g.fillRect(treeX - 18, groundY - 260, 36, 260);
    g.fillStyle(0x7a5030, 1);
    g.fillRect(treeX - 14, groundY - 260, 6, 260);
    g.fillRect(treeX + 6, groundY - 200, 4, 200);

    // Branch (the main platform)
    g.fillStyle(PALETTE.branch, 1);
    g.fillRect(treeX - 60, groundY - 230, 160, 18);
    g.fillStyle(0x4a3010, 1);
    g.fillRect(treeX - 60, groundY - 230, 160, 5);

    // Foliage blobs
    // PLACEHOLDER — replace with: layered eucalyptus canopy sprites
    const foliageColors = [0x4a6a28, 0x5a7a32, 0x3d5820, 0x6a8a40];
    const blobs = [
      { x: treeX, y: groundY - 320, rx: 80, ry: 65 },
      { x: treeX - 45, y: groundY - 280, rx: 55, ry: 50 },
      { x: treeX + 55, y: groundY - 295, rx: 60, ry: 48 },
      { x: treeX + 10, y: groundY - 370, rx: 55, ry: 45 },
      { x: treeX - 30, y: groundY - 355, rx: 45, ry: 38 },
    ];
    blobs.forEach((b, i) => {
      g.fillStyle(foliageColors[i % foliageColors.length], 1);
      g.fillEllipse(b.x, b.y, b.rx * 2, b.ry * 2);
    });

    g.setDepth(2);

    // Store tree bounds for climb detection
    this.treeX = treeX;
    this.treeBounds = new Phaser.Geom.Rectangle(treeX - 22, GAME_H - 352, 44, 260);
  }

  // ─── PLATFORMS (static physics) ────────────────────────────
  _buildPlatforms() {
    this.platforms = this.physics.add.staticGroup();

    // Ground
    // PLACEHOLDER — replace with: ground tileset sprites
    const ground = this.platforms.create(GAME_W / 2, GAME_H - 46, '__DEFAULT');
    ground.setDisplaySize(GAME_W * 3, 92).refreshBody();
    ground.setAlpha(0);

    // Main branch platform (at y = 310 from top)
    this.branchPlatform = this.platforms.create(220, GAME_H - 230 - 9, '__DEFAULT');
    this.branchPlatform.setDisplaySize(160, 18).refreshBody();
    this.branchPlatform.setAlpha(0);

    // Second small branch further up tree
    const upperBranch = this.platforms.create(175, GAME_H - 300, '__DEFAULT');
    upperBranch.setDisplaySize(60, 10).refreshBody();
    upperBranch.setAlpha(0);
  }

  // ─── CHARACTERS ────────────────────────────────────────────
  _buildCharacters() {
    const branchY = GAME_H - 230 - 9;

    // ── FLO (Ko's mother) ──
    // PLACEHOLDER — replace with: Flo sprite sheet (idle animation, gentle sway)
    this.flo = this._createCharacter(170, branchY - 24, 32, 28, PALETTE.flo, 'Flo', 'Mum');
    this.flo.physics.setImmovable(true);
    this.flo.physics.allowGravity = false;
    this.flo.physics.setVelocity(0, 0);

    // ── GRUFF (the alpha male) ──
    // PLACEHOLDER — replace with: Gruff sprite sheet (aggressive stance, intimidation animation)
    this.gruff = this._createCharacter(GAME_W + 80, branchY - 28, 44, 36, PALETTE.gruff, 'Gruff', 'Alpha');
    this.gruff.physics.allowGravity = false;
    this.gruff.setVisible(false);

    // ── KO (player character) ──
    // PLACEHOLDER — replace with: Ko sprite sheet (run, jump, climb, sleep, wave animations)
    this.ko = this._createCharacter(260, branchY - 22, 26, 24, PALETTE.ko, 'Ko', 'You');
    this.ko.physics.setCollideWorldBounds(true);

    // Ko eye blink (simple dot)
    this.koEye = this.add.graphics();
    this.koEye.fillStyle(0x222222, 1);
    this.koEye.fillCircle(4, 2, 3);
    this.koEye.setDepth(12);

    // Blink timer
    this.time.addEvent({
      delay: 3200,
      loop: true,
      callback: () => {
        this.koEye.setAlpha(0);
        this.time.delayedCall(120, () => this.koEye.setAlpha(1));
      }
    });
  }

  _createCharacter(x, y, w, h, color, name, role) {
    const container = this.add.container(x, y);
    container.setDepth(10);

    const g = this.add.graphics();

    // ── Shadow ──
    g.fillStyle(PALETTE.shadow, 0.18);
    g.fillEllipse(w / 2, h + 4, w * 0.85, 8);

    if (name === 'Ko') {
      // PLACEHOLDER — replace with Ko sprite sheet
      // Small, rounded, warm grey-brown — juvenile koala
      // Big fluffy ears
      g.fillStyle(0xb0a090, 1);
      g.fillCircle(5, -6, 8);
      g.fillCircle(w - 5, -6, 8);
      // Pale inner ear
      g.fillStyle(0xf0c0b0, 1);
      g.fillCircle(5, -6, 5);
      g.fillCircle(w - 5, -6, 5);
      // Body — warm light grey-brown
      g.fillStyle(0xb0a090, 1);
      g.fillRoundedRect(0, 0, w, h, 8);
      // Pale chest patch
      g.fillStyle(0xd8c8b8, 1);
      g.fillEllipse(w / 2, h * 0.6, w * 0.55, h * 0.5);
      // Face highlight
      g.fillStyle(0xffffff, 0.15);
      g.fillRoundedRect(4, 2, w - 8, h * 0.35, 5);
      // Dark nose
      g.fillStyle(0x2a2020, 1);
      g.fillEllipse(w / 2, h * 0.3, w * 0.35, h * 0.22);
      // Eyes — wide, expressive
      g.fillStyle(0x111111, 1);
      g.fillCircle(w * 0.3, h * 0.22, 2.5);
      g.fillCircle(w * 0.7, h * 0.22, 2.5);
      // Eye shine
      g.fillStyle(0xffffff, 0.8);
      g.fillCircle(w * 0.3 + 1, h * 0.22 - 1, 1);
      g.fillCircle(w * 0.7 + 1, h * 0.22 - 1, 1);

    } else if (name === 'Flo') {
      // PLACEHOLDER — replace with Flo sprite sheet
      // Slightly larger, warmer tone, calm maternal look
      // Larger rounder ears
      g.fillStyle(0x9a8878, 1);
      g.fillCircle(6, -7, 9);
      g.fillCircle(w - 6, -7, 9);
      g.fillStyle(0xeab0a0, 1);
      g.fillCircle(6, -7, 5);
      g.fillCircle(w - 6, -7, 5);
      // Body — warm mid grey
      g.fillStyle(0x9a8878, 1);
      g.fillRoundedRect(0, 0, w, h, 8);
      // Chest patch — softer, wider
      g.fillStyle(0xc8b8a8, 1);
      g.fillEllipse(w / 2, h * 0.58, w * 0.6, h * 0.55);
      // Face highlight
      g.fillStyle(0xffffff, 0.12);
      g.fillRoundedRect(4, 2, w - 8, h * 0.35, 5);
      // Nose
      g.fillStyle(0x2a1a1a, 1);
      g.fillEllipse(w / 2, h * 0.28, w * 0.38, h * 0.22);
      // Eyes — gentle, slightly narrowed
      g.fillStyle(0x1a1010, 1);
      g.fillCircle(w * 0.3, h * 0.2, 2.5);
      g.fillCircle(w * 0.7, h * 0.2, 2.5);
      g.fillStyle(0xffffff, 0.7);
      g.fillCircle(w * 0.3 + 1, h * 0.2 - 1, 1);
      g.fillCircle(w * 0.7 + 1, h * 0.2 - 1, 1);

    } else if (name === 'Gruff') {
      // PLACEHOLDER — replace with Gruff sprite sheet
      // Large, dark charcoal, stocky — dominant male koala
      // Heavy set ears — smaller relative to body, darker
      g.fillStyle(0x2a2828, 1);
      g.fillCircle(7, -5, 9);
      g.fillCircle(w - 7, -5, 9);
      // Very faint inner ear — darker, battle-scarred
      g.fillStyle(0x6a4040, 0.6);
      g.fillCircle(7, -5, 5);
      g.fillCircle(w - 7, -5, 5);
      // Body — dark charcoal, stocky and wide
      g.fillStyle(0x2a2828, 1);
      g.fillRoundedRect(0, 0, w, h, 5);
      // Brown chest scent gland patch — distinctive male koala feature
      g.fillStyle(0x6a3a20, 1);
      g.fillEllipse(w / 2, h * 0.45, w * 0.45, h * 0.38);
      // Lighter centre of chest patch
      g.fillStyle(0x8a5030, 0.7);
      g.fillEllipse(w / 2, h * 0.43, w * 0.25, h * 0.2);
      // Heavy brow ridge
      g.fillStyle(0x1a1818, 1);
      g.fillRect(w * 0.15, h * 0.12, w * 0.7, 4);
      // Eyes — deep set, narrow, intimidating
      g.fillStyle(0x8a2020, 1);
      g.fillCircle(w * 0.28, h * 0.24, 3.5);
      g.fillCircle(w * 0.72, h * 0.24, 3.5);
      g.fillStyle(0x111111, 1);
      g.fillCircle(w * 0.28, h * 0.24, 2);
      g.fillCircle(w * 0.72, h * 0.24, 2);
      // Nose — wide, dark
      g.fillStyle(0x111111, 1);
      g.fillEllipse(w / 2, h * 0.35, w * 0.42, h * 0.2);
      // Scar across left side
      g.lineStyle(1.5, 0x6a5040, 0.7);
      g.lineBetween(w * 0.1, h * 0.28, w * 0.35, h * 0.42);
    }

    // Name label — colour-coded per character
    const labelColor = name === 'Ko' ? '#aaffaa' : name === 'Gruff' ? '#ff8888' : '#ffddaa';
    const label = this.add.text(w / 2, h + 8, name, {
      fontSize: '9px',
      fontFamily: 'monospace',
      color: labelColor,
      backgroundColor: '#00000088',
      padding: { x: 3, y: 1 },
    }).setOrigin(0.5, 0);

    // Role label
    const roleLabel = this.add.text(w / 2, -18, role, {
      fontSize: '8px',
      fontFamily: 'monospace',
      color: '#ffffffaa',
    }).setOrigin(0.5, 0);

    container.add([g, label, roleLabel]);

    // Physics body on an invisible sprite
    const physSprite = this.physics.add.sprite(x + w / 2, y + h / 2, '__DEFAULT');
    physSprite.setDisplaySize(w, h);
    physSprite.setAlpha(0.001);
    physSprite.setDepth(9);

    // Bind container to physics sprite
    container._physSprite = physSprite;
    container.physics = physSprite.body;
    container.physics.setCollideWorldBounds = (v) => physSprite.setCollideWorldBounds(v);

    // Update container position from physics each frame
    container._w = w;
    container._h = h;

    return container;
  }

  // ─── PLAYER PHYSICS ────────────────────────────────────────
  _buildPlayerPhysics() {
    const koPhys = this.ko._physSprite;
    this.physics.add.collider(koPhys, this.platforms);

    const floPhys = this.flo._physSprite;
    const gruffPhys = this.gruff._physSprite;
    this.physics.add.collider(floPhys, this.platforms);
    this.physics.add.collider(gruffPhys, this.platforms);

    this.isClimbing = false;
    this.isAsleep = false;
    this.playerControlEnabled = false;
  }

  // ─── UI ELEMENTS ───────────────────────────────────────────
  _buildUI() {
    // Top-left game label
    this.add.text(12, 10, 'GO KOALA!  —  Episode 1', {
      fontSize: '12px',
      fontFamily: 'monospace',
      color: '#ffffffcc',
      backgroundColor: '#00000055',
      padding: { x: 6, y: 4 },
    }).setScrollFactor(0).setDepth(30);

    // Top-right placeholder note
    this.add.text(GAME_W - 12, 10, '[Art assets: placeholder]', {
      fontSize: '9px',
      fontFamily: 'monospace',
      color: '#ffffff66',
    }).setOrigin(1, 0).setScrollFactor(0).setDepth(30);

    // Episode title card (hidden, shown at end)
    this.episodeTitleCard = this.add.container(GAME_W / 2, GAME_H / 2);
    this.episodeTitleCard.setDepth(50).setScrollFactor(0).setAlpha(0);

    const titleBg = this.add.graphics();
    titleBg.fillStyle(0x000000, 0.85);
    titleBg.fillRect(-GAME_W / 2, -GAME_H / 2, GAME_W, GAME_H);

    const titleLine1 = this.add.text(0, -30, 'Episode 1', {
      fontSize: '22px',
      fontFamily: 'Georgia, serif',
      color: '#ccaa66',
      fontStyle: 'italic',
    }).setOrigin(0.5);

    const titleLine2 = this.add.text(0, 10, 'The Departure', {
      fontSize: '36px',
      fontFamily: 'Georgia, serif',
      color: '#ffffff',
      fontStyle: 'bold',
    }).setOrigin(0.5);

    const titleSub = this.add.text(0, 60, 'Next: Crossing the Creek →', {
      fontSize: '14px',
      fontFamily: 'monospace',
      color: '#ffffff88',
    }).setOrigin(0.5);

    this.episodeTitleCard.add([titleBg, titleLine1, titleLine2, titleSub]);

    // Dialogue box
    this._buildDialogBox();
  }

  _buildDialogBox() {
    // Persistent dialogue container (fixed to camera)
    this.dialogContainer = this.add.container(0, 0).setScrollFactor(0).setDepth(40).setAlpha(0);

    const bg = this.add.graphics();
    bg.fillStyle(PALETTE.dialogBg, 0.92);
    bg.fillRoundedRect(20, GAME_H - 100, GAME_W - 40, 84, 10);
    bg.lineStyle(1.5, 0x4a6a40, 0.6);
    bg.strokeRoundedRect(20, GAME_H - 100, GAME_W - 40, 84, 10);

    this.dialogSpeaker = this.add.text(36, GAME_H - 92, '', {
      fontSize: '10px',
      fontFamily: 'monospace',
      color: '#88cc77',
    });

    this.dialogText = this.add.text(36, GAME_H - 76, '', {
      fontSize: '13px',
      fontFamily: 'Georgia, serif',
      color: '#f5f0e8',
      wordWrap: { width: GAME_W - 80 },
      lineSpacing: 4,
    });

    this.dialogContainer.add([bg, this.dialogSpeaker, this.dialogText]);
    this.dialogBox = this.dialogContainer;
  }

  // ─── INPUT ─────────────────────────────────────────────────
  _buildInputs() {
    this.cursors = this.input.keyboard.createCursorKeys();
    this.wasd = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    });
    this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }

  // ─── STORY SEQUENCE ────────────────────────────────────────
  _startStorySequence() {
    // Step 1 — Show opening dialogue
    this.time.delayedCall(600, () => {
      this._showDialog('Ko', '"Home. Safe. Warm."');
    });

    // Step 2 — After 3s, Gruff enters
    this.time.delayedCall(3200, () => {
      this._hideDialog();
      this._gruffEnter();
    });
  }

  _gruffEnter() {
    this.gruff.setVisible(true);
    const gruffPhys = this.gruff._physSprite;
    gruffPhys.allowGravity = false;

    const branchY = GAME_H - 230 - 9 - 14;
    const targetX = 340;

    // Slide Gruff in from the right
    this.tweens.add({
      targets: [this.gruff, gruffPhys],
      x: targetX,
      duration: 1400,
      ease: 'Power2',
      onComplete: () => {
        // Gruff settles — slight intimidation bounce
        this.tweens.add({
          targets: [this.gruff, gruffPhys],
          y: `+=${4}`,
          yoyo: true,
          duration: 200,
          repeat: 2,
          onComplete: () => {
            this._showDialog('Gruff', '"THIS IS MY TERRITORY."');
            this.time.delayedCall(2200, () => {
              this._showDialog('Ko', '"I WAS HERE FIRST."');
              this.time.delayedCall(2000, () => {
                this._hideDialog();
                this._koFallAsleep();
              });
            });
          }
        });
      }
    });

    this.gruff.y = branchY;
    gruffPhys.y = branchY;
  }

  _koFallAsleep() {
    // Ko falls asleep — zzz animation
    this.gameState = 'sleeping';
    this._spawnZzz();

    this.time.delayedCall(2800, () => {
      // Gruff stares — shake animation
      this.tweens.add({
        targets: [this.gruff, this.gruff._physSprite],
        x: `+=${6}`,
        yoyo: true,
        duration: 140,
        repeat: 3,
      });

      this.time.delayedCall(1200, () => {
        this._gruffExit();
      });
    });
  }

  _spawnZzz() {
    const koX = this.ko.x + this.ko._w;
    const koY = this.ko.y;

    const zzzChars = ['z', 'z', 'Z'];
    zzzChars.forEach((char, i) => {
      this.time.delayedCall(i * 500, () => {
        const zzz = this.add.text(koX + 8, koY - 5, char, {
          fontSize: `${12 + i * 5}px`,
          fontFamily: 'Georgia, serif',
          color: '#aaddff',
          fontStyle: 'italic',
        }).setDepth(15).setAlpha(1);

        this.tweens.add({
          targets: zzz,
          y: zzz.y - 35,
          x: zzz.x + 10,
          alpha: 0,
          duration: 1800,
          ease: 'Sine.easeOut',
          onComplete: () => zzz.destroy(),
        });
        this.zzzTexts.push(zzz);
      });
    });

    // Repeat zzz while sleeping
    this.zzzTimer = this.time.addEvent({
      delay: 2000,
      loop: true,
      callback: () => {
        if (this.gameState !== 'sleeping') {
          this.zzzTimer.remove();
          return;
        }
        this._spawnZzz();
      }
    });
  }

  _gruffExit() {
    // Gruff moves off screen left, confused
    this.tweens.add({
      targets: [this.gruff, this.gruff._physSprite],
      x: -120,
      duration: 1800,
      ease: 'Power1',
      onComplete: () => {
        this.gruff.setVisible(false);
        this.time.delayedCall(600, () => {
          this._koWakesUp();
        });
      }
    });
  }

  _koWakesUp() {
    this.gameState = 'awake';
    if (this.zzzTimer) this.zzzTimer.remove();

    // Ko wakes up — bounce
    this.tweens.add({
      targets: [this.ko, this.ko._physSprite],
      y: this.ko.y - 8,
      yoyo: true,
      duration: 250,
      onComplete: () => {
        this.time.delayedCall(500, () => {
          this._showChoicePrompt_1();
        });
      }
    });
  }

  // ─── CHOICE 1: LEAVE or STAY ────────────────────────────────
  _showChoicePrompt_1() {
    this.gameState = 'choice1';
    this._showDialog('', 'What will Ko do?');
    this._showChoiceButtons(
      ['LEAVE — find your own territory', 'STAY — fight for home'],
      (choice) => {
        this._clearChoices();
        this._hideDialog();
        if (choice === 0) {
          this._handleLeave();
        } else {
          this._handleStay();
        }
      }
    );
  }

  _handleStay() {
    // Gruff returns bigger, nudges Ko off branch
    this.gruff.setVisible(true);
    const gruffPhys = this.gruff._physSprite;
    const branchY = GAME_H - 230 - 9 - 14;
    this.gruff.x = GAME_W + 80;
    gruffPhys.x = GAME_W + 80;
    this.gruff.y = branchY;
    gruffPhys.y = branchY;

    // Gruff grows a bit (intimidation)
    this.gruff.setScale(1.22);
    gruffPhys.setScale(1.22);

    this._showDialog('Gruff', '"You dare challenge ME? You are nothing."');

    this.tweens.add({
      targets: [this.gruff, gruffPhys],
      x: 310,
      duration: 1000,
      ease: 'Power2',
      onComplete: () => {
        // Ko gets nudged
        this.tweens.add({
          targets: [this.ko, this.ko._physSprite],
          x: this.ko.x - 80,
          duration: 300,
          ease: 'Power3',
          onComplete: () => {
            this.time.delayedCall(800, () => {
              this._showDialog('Ko', '(Ko tumbles... maybe leaving is the right choice after all.)');
              this.time.delayedCall(2500, () => {
                this._hideDialog();
                this.gruff.setVisible(false);
                this.gruff.setScale(1);
                gruffPhys.setScale(1);
                this._showChoicePrompt_1(); // Repeat choice
              });
            });
          }
        });
      }
    });
  }

  _handleLeave() {
    // Ko decides to leave — say goodbye to Flo?
    this.time.delayedCall(400, () => {
      this._showDialog('Ko', '"I need my own territory. Time to go."');
      this.time.delayedCall(2200, () => {
        this._hideDialog();
        this._showChoicePrompt_2();
      });
    });
  }

  // ─── CHOICE 2: SAY GOODBYE? ─────────────────────────────────
  _showChoicePrompt_2() {
    this.gameState = 'choice2';
    this._showDialog('', 'Say goodbye to Flo?');
    this._showChoiceButtons(
      ['YES — say goodbye', 'NOT NOW — just go'],
      (choice) => {
        this._clearChoices();
        this._hideDialog();
        if (choice === 0) {
          this._handleGoodbye();
        } else {
          this._handleJustGo();
        }
      }
    );
  }

  _handleGoodbye() {
    this.gameState = 'goodbye';
    this.playerControlEnabled = true;

    // Ko walks to Flo
    this._showDialog('', 'Ko moves to Flo...');
    this._walkKoTo(this.flo.x, () => {
      this._showDialog('Ko', '"I\'ll come back, Mum."');
      this.time.delayedCall(2000, () => {
        this._showDialog('Flo', '"Be brave, little one."');

        // Soft yellow glow around both for 2 seconds
        this._glowAround(this.ko);
        this._glowAround(this.flo);

        this.time.delayedCall(2200, () => {
          this._clearGlows();
          this._hideDialog();
          this.playerControlEnabled = false;
          this._koDepartsScene();
        });
      });
    });
  }

  _handleJustGo() {
    this.gameState = 'departing';
    this.playerControlEnabled = false;
    this._koDepartsScene();
  }

  _walkKoTo(targetX, onComplete) {
    const koPhys = this.ko._physSprite;
    this.tweens.add({
      targets: [this.ko, koPhys],
      x: targetX + 35,
      duration: 900,
      ease: 'Sine.easeInOut',
      onComplete,
    });
  }

  _glowAround(target) {
    // PLACEHOLDER — replace with: animated light glow sprite / particle burst
    const glow = this.add.graphics();
    glow.fillStyle(PALETTE.glowYellow, 0.25);
    glow.fillCircle(target.x + target._w / 2, target.y + target._h / 2, 38);
    glow.setDepth(8);
    this.activeGlows.push(glow);

    this.tweens.add({
      targets: glow,
      alpha: { from: 0, to: 1 },
      duration: 600,
      yoyo: true,
      repeat: 1,
    });
  }

  _clearGlows() {
    this.activeGlows.forEach(g => g.destroy());
    this.activeGlows = [];
  }

  // ─── KO DEPARTS THE SCENE ──────────────────────────────────
  _koDepartsScene() {
    this.gameState = 'departing';
    const koPhys = this.ko._physSprite;

    // Ko jumps down from branch to ground
    this._showDialog('', 'Ko leaps from the branch...');

    // Enable gravity for the jump-down
    koPhys.allowGravity = true;
    koPhys.setVelocityX(90);
    koPhys.setVelocityY(-180);

    this.physics.add.collider(koPhys, this.platforms);

    this.time.delayedCall(1200, () => {
      this._hideDialog();
      koPhys.setVelocityX(100);

      // Camera follows Ko as he walks right
      this.cameras.main.startFollow(koPhys, true, 0.08, 0.08);
      this.cameras.main.setFollowOffset(-GAME_W * 0.3, 0);

      // After walking off far enough, show title card
      this.time.delayedCall(2800, () => {
        koPhys.setVelocityX(0);
        this._showEpisodeTitleCard();
      });
    });
  }

  _showEpisodeTitleCard() {
    this.gameState = 'titlecard';

    // Fade to black then show title
    this.cameras.main.fade(1000, 0, 0, 0, false, (cam, progress) => {
      if (progress === 1) {
        this.tweens.add({
          targets: this.episodeTitleCard,
          alpha: 1,
          duration: 800,
          ease: 'Sine.easeIn',
        });
      }
    });
  }

  // ─── CHOICE BUTTONS ────────────────────────────────────────
  _showChoiceButtons(labels, callback) {
    this.choices = [];
    const startY = GAME_H - 155;

    labels.forEach((label, i) => {
      const btnX = GAME_W / 2;
      const btnY = startY - (labels.length - 1 - i) * 44;

      const bg = this.add.graphics().setScrollFactor(0).setDepth(42);
      const btnW = 380;
      const btnH = 36;
      bg.fillStyle(PALETTE.choiceBtn, 1);
      bg.fillRoundedRect(btnX - btnW / 2, btnY - btnH / 2, btnW, btnH, 8);
      bg.lineStyle(1, 0x88cc66, 0.6);
      bg.strokeRoundedRect(btnX - btnW / 2, btnY - btnH / 2, btnW, btnH, 8);

      const txt = this.add.text(btnX, btnY, label, {
        fontSize: '13px',
        fontFamily: 'monospace',
        color: '#ffffff',
        align: 'center',
      }).setOrigin(0.5).setScrollFactor(0).setDepth(43);

      // Hitarea
      const zone = this.add.zone(btnX, btnY, btnW, btnH)
        .setInteractive({ cursor: 'pointer' })
        .setScrollFactor(0)
        .setDepth(44);

      zone.on('pointerover', () => {
        bg.clear();
        bg.fillStyle(PALETTE.choiceBtnH, 1);
        bg.fillRoundedRect(btnX - btnW / 2, btnY - btnH / 2, btnW, btnH, 8);
        bg.lineStyle(1.5, 0xaaee88, 0.9);
        bg.strokeRoundedRect(btnX - btnW / 2, btnY - btnH / 2, btnW, btnH, 8);
        txt.setStyle({ color: '#eeffcc' });
      });

      zone.on('pointerout', () => {
        bg.clear();
        bg.fillStyle(PALETTE.choiceBtn, 1);
        bg.fillRoundedRect(btnX - btnW / 2, btnY - btnH / 2, btnW, btnH, 8);
        bg.lineStyle(1, 0x88cc66, 0.6);
        bg.strokeRoundedRect(btnX - btnW / 2, btnY - btnH / 2, btnW, btnH, 8);
        txt.setStyle({ color: '#ffffff' });
      });

      zone.on('pointerdown', () => {
        callback(i);
      });

      this.choices.push({ bg, txt, zone });
    });
  }

  _clearChoices() {
    this.choices.forEach(c => {
      c.bg.destroy();
      c.txt.destroy();
      c.zone.destroy();
    });
    this.choices = [];
  }

  // ─── DIALOGUE HELPERS ──────────────────────────────────────
  _showDialog(speaker, text) {
    this.dialogSpeaker.setText(speaker ? `[ ${speaker} ]` : '');
    this.dialogText.setText(text);

    if (this.dialogBox.alpha === 0) {
      this.tweens.add({
        targets: this.dialogBox,
        alpha: 1,
        duration: 280,
        ease: 'Sine.easeOut',
      });
    }
  }

  _hideDialog() {
    this.tweens.add({
      targets: this.dialogBox,
      alpha: 0,
      duration: 220,
    });
  }

  // ─── UPDATE LOOP ───────────────────────────────────────────
  update() {
    // Sync container positions with physics sprites
    this._syncContainer(this.ko);
    this._syncContainer(this.flo);
    this._syncContainer(this.gruff);

    // Sync Ko eye
    this.koEye.x = this.ko.x + this.ko._w - 8;
    this.koEye.y = this.ko.y + 5;

    // Player control (only when enabled)
    if (!this.playerControlEnabled) return;
    if (this.gameState === 'departing' || this.gameState === 'titlecard') return;

    const koPhys = this.ko._physSprite;
    const onGround = koPhys.blocked.down;

    const left  = this.cursors.left.isDown  || this.wasd.left.isDown;
    const right = this.cursors.right.isDown || this.wasd.right.isDown;
    const up    = this.cursors.up.isDown    || this.wasd.up.isDown    || Phaser.Input.Keyboard.JustDown(this.spaceKey);
    const jump  = Phaser.Input.Keyboard.JustDown(this.cursors.up) ||
                  Phaser.Input.Keyboard.JustDown(this.wasd.up)    ||
                  Phaser.Input.Keyboard.JustDown(this.spaceKey);

    // Horizontal movement
    if (left) {
      koPhys.setVelocityX(-160);
      this.ko.setFlipX(false);
    } else if (right) {
      koPhys.setVelocityX(160);
      this.ko.setFlipX(true);
    } else {
      koPhys.setVelocityX(0);
    }

    // Jump
    if (jump && onGround) {
      koPhys.setVelocityY(-380);
    }

    // Climb tree
    const nearTree = Math.abs(this.ko.x + this.ko._w / 2 - this.treeX) < 30;
    if (nearTree && up && !onGround === false) {
      // Ko can press up to climb
    }
  }

  _syncContainer(container) {
    if (!container._physSprite) return;
    container.x = container._physSprite.x - container._w / 2;
    container.y = container._physSprite.y - container._h / 2;
  }
}

// ─── PHASER GAME CONFIG ──────────────────────────────────────
const config = {
  type: Phaser.AUTO,
  width: GAME_W,
  height: GAME_H,
  backgroundColor: '#000000',
  parent: document.body,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 480 },
      debug: false,
    },
  },
  scene: [DepartureScene],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

const game = new Phaser.Game(config);
