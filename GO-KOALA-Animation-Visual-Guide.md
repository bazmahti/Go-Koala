# GO KOALA! — Animation & Visual Style Guide
### S'uNReel 2026 | Ralph Lycett Tyrrell & Dr Baz (Barry Ferrier)

---

## PART ONE: VISUAL IDENTITY

### The Core Proposition — Luminous Naturalism

The visual identity of GO KOALA! is built on a single idea: paint the actual colours of the Australian bush, not the ones people imagine.

Most people picture Australia as brown and red. The bush is something far more extraordinary — silver-blue eucalyptus leaves catching morning light, the acid yellow of wattle blossom, the deep red-purple of Sturt's desert pea, the chrome green of new growth after rain. It is one of the most chromatically rich environments on earth, and almost no animated property has ever captured it honestly.

GO KOALA! roots itself in that real, observed colour experience — and elevates it through a specific painterly treatment that is contemporary, internationally legible, and unmistakably Australian.

**The three-second test:** When you look at a still frame of GO KOALA! with no logo or title visible, a viewer anywhere in the world should be able to answer three questions instantly:

1. What country is this set in? (Australia — unmistakably, not generically)
2. What is the mood? (Warm, alive, slightly melancholy, genuinely beautiful)
3. Who is this for? (Everyone — children led, but not childish)

If the frame answers all three questions in under three seconds, the visual identity is working.

---

## PART TWO: INDIGENOUS COLOUR KNOWLEDGE

### Why This Matters

The Noongar and other First Nations peoples have observed the Australian landscape for 65,000+ years. Their art contains colour relationships and compositional sensibilities developed across that entire time — not symbolic decoration, but the result of the most sustained observational relationship with a landscape in human history.

Incorporating this sensitivity into GO KOALA!'s visual language gives the work an authority and specificity that purely generative or European-tradition approaches cannot achieve.

### The Critical Distinction

**Legitimate influence — colour relationships and observational sensitivity:**
- The specific way ochre sits next to silver-blue
- Mauve in Australian shadows that European painters consistently missed
- The way eucalyptus green reads as almost grey at distance
- Ground-level colour relationships between earth, rock, grass and shadow

**Requires explicit permission and community consultation — visual language:**
- Dot patterns and their specific meanings
- X-ray animal representation
- Ceremonial designs and motifs
- Any symbol belonging to a specific community's tradition

All prompts and art direction in this guide address colour sensitivity only. Visual motif use requires direct engagement with relevant Aboriginal and Torres Strait Islander communities and artists.

### Key Reference Artists

Study the colour — not the style — of these artists when developing GO KOALA!'s palette:

**Albert Namatjira (Arrernte, 1902–1959)**
Watercolourist who captured the specific light quality of Central Australia with a precision no European painter had achieved. His ghost gum paintings in particular show the exact silver-white-blue of eucalyptus bark that characterises the Australian palette.
*What to take:* The colour temperature of shadows (cool mauve-blue, never brown), the luminosity of bark in strong sun, the specific blue-grey of distant ranges.

**Emily Kame Kngwarreye (Anmatyerre, c.1910–1996)**
Her late large-format paintings use colour relationships of the living bush at near-ground level — not symbolic but directly observed. The interaction of seed, earth, root, and sky produces a palette of extraordinary specificity.
*What to take:* The layered relationship between ochre, cream, dusty blue-green, and deep earth red. The way these colours sit beside each other without jarring.

**Kathleen Petyarre (Anmatyerre, c.1940–2018)**
Known for extraordinary detail in depicting ground-level bush environments. Her work captures the colour of specific plants, insects, and earth conditions with scientific precision.
*What to take:* The specific amber-gold of dry grass against red earth, the way shadow reads as blue-purple on ochre ground.

### The Locked Palette

Once your hero frame is approved, extract these values and include them in every subsequent AI prompt:

| Colour Role | Description | Notes |
|---|---|---|
| Sky high | Cool pale blue-grey | Not tropical blue — dusty, atmospheric |
| Sky low / horizon | Warm amber-cream | Golden hour bleed into sky base |
| Far distance | Dusty blue-mauve | Ranges at dusk — desaturated, cool |
| Eucalyptus mid | Silver-blue-grey-green | The distinctive colour of gum leaves |
| Near foliage | Acid yellow-green | New growth, wattle, rich and warm |
| Earth surface | Laterite red-gold | Warm terracotta with ochre shift |
| Earth shadow | Deep red-brown | Not black — saturated earth tone |
| Character shadow | Cool blue-violet | Australian full sun shadow — never grey |
| Fur highlight | Warm amber-cream | Backlit koala fur subsurface glow |
| Fur midtone | Warm grey-brown | Ko's base fur colour |
| Fur shadow | Cool grey-blue | Shadow side of koala fur |

---

## PART THREE: THE STYLE STACK

Four layers of craft combine to produce the GO KOALA! visual identity.

### Layer 1 — Colour Palette
The real Australian bush colours as described above. Applied consistently across every scene, every character, every UI element.

### Layer 2 — Line Quality: Brushwork Over Vector
The contemporary trap is clean vector outlines — smooth, corporate, cheap-reading. GO KOALA! uses visible brushwork — characters outlined with pressure-sensitive brush strokes showing slight variation in weight, the quality of a confident artist's hand. Lines are not wobbly or sketchy — they are deliberately expressive, like a fine ink drawing.

### Layer 3 — Light: Subsurface and Painterly
Koala fur absorbs light and glows faintly from within when backlit. Characters use painted subsurface scattering:
- Warm amber glow through the ears when Ko sits in front of the sun
- Cool blue-grey on the shadow side of the body
- Soft warm rim light separating character from background

This makes characters feel physically real and warm in a way that flat cel-shading never achieves.

### Layer 4 — Movement: Weight and Follow-Through
Ko is a small animal with specific physical properties — dense, low centre of gravity, surprisingly agile in trees, slow and deliberate on the ground. Every movement reflects that body type:
- Ears arrive slightly after the head turns
- Fur settles after a jump — a secondary motion
- The belly has weight on landing
- Climbing is deliberate, paw-by-paw

This is Disney's twelve animation principles applied to a real animal's physiology.

### Reference Films and Games

| Reference | What to Take |
|---|---|
| Ori and the Blind Forest | Painterly background depth, light as a character, parallax mastery |
| The Breadwinner (Cartoon Saloon) | Confident brushwork lines, cultural specificity as strength |
| Wolfwalkers | Expressive loose animation that still reads as polished |
| Over the Garden Wall | Colour restraint, atmosphere, texture in backgrounds |
| Bluey | Character warmth, physical realism in movement, Australian specificity |
| Hollow Knight | How silhouette alone conveys personality |
| Cuphead | Hand-drawn line quality, expressive movement |

---

## PART FOUR: THE PARALLAX LAYER SYSTEM

### What Parallax Does

Background depth layers move at different speeds relative to the character. Layers further away move slower. This creates the illusion of physical three-dimensional space using flat images — the core technique of 2.5D game environments.

### The Full Layer Stack

| Layer | Content | Scroll Speed | Special Treatment |
|---|---|---|---|
| 0 | Sky PNG | 0% — locked | Subtle colour shift over time |
| 1 | Sun / cloud wisps | 5% | Very slow drift, gentle scale pulse |
| 2 | Distant ranges | 15% | Atmospheric blur baked in, desaturated |
| 3 | Far eucalyptus silhouettes | 25% | Slight vertical sway on wind timer |
| 4 | Mid bush canopy | 45% | Leaf shimmer particle overlay |
| 5 | Ko's home tree | 65% | Fixed anchor point |
| 6 | Near foreground scrub | 80% | Slight blur, darker, richer |
| 7 | Immediate foreground leaves | 110% | Partially obscures scene edges |
| 8 | Characters + ground | 100% | |
| 9 | UI / dialogue | 0% — locked | Fixed to camera always |

**Note on Layer 7:** Moving faster than the characters at 110%, this layer creates the sensation of physically standing inside the environment. It is the most powerful single depth trick in 2.5D games and the one most often omitted.

### Atmospheric Layers

These sit within the main stack and add cinematic quality:

**Ground Mist**
Low horizontal band of soft white-grey haze just above the earth line. Drifts slowly. In the Australian bush this is meteorologically accurate — cold creek valleys produce morning mist that sits at ground level while the canopy is clear.
- Scroll factor: 0.45
- Opacity: 40–60%
- Motion: gentle horizontal sine drift, 8-second cycle

**Volumetric Light Shafts**
Diagonal warm golden rays from upper right through the canopy. Almost imperceptibly slow movement. Reads subconsciously as sunlight through leaves.
- Scroll factor: 0.4
- Opacity: 10–15% — very subtle
- Motion: slow sine drift, 12-second cycle

**Pollen / Spore Drift**
Golden motes drifting diagonally. Wattle season in the Australian bush looks exactly like this. Uses Phaser's particle system with a single pollen PNG.
- Scroll factor: 0.7
- Physics-driven drift with slight random variation

**Cloud Wisps**
Thin high cirrus appropriate to Australian bush morning. Multiple staggered PNGs across a wide canvas.
- Scroll factor: 0.05–0.08
- Near-locked but with perceptible drift over a long scene

**Heat Haze**
For open ground and midday scenes. Subtle displacement map ripple in Phaser. Not needed for the morning home tree scene.

**Bushfire Smoke Haze**
For environmental messaging scenes. A brownish-grey atmospheric tint applied to far background layers, thickening over time. Applied in code as a colour filter — no separate image needed.

---

## PART FIVE: CHARACTER ANIMATION

### Sprite Sheet Structure

Each character requires a sprite sheet — a single wide image containing every animation frame side by side. Phaser cycles through frames like a flipbook.

#### Ko — Player Character

**Frame count: 10–12 frames minimum**

| Animation | Frames | Description |
|---|---|---|
| Idle | 2 | Gentle breathing — body slightly lower on exhale |
| Walk | 4 | Left paw, right paw, weight shift, repeat |
| Jump | 1 | Arms out, ears back, anticipation pose |
| Land | 1 | Compressed, belly weight on impact |
| Climb | 3 | Paw-over-paw up the trunk |
| Sleep | 1 | Eyes closed, curled, relaxed |
| Wake | 1 | Startled, ears forward, wide eyes |
| Farewell wave | 1 | One paw raised, emotional expression |

**Blink system:** Handled by a separate eye overlay layer — not baked into the sprite sheet. A three-frame blink (open → half → closed) independent of body animation, triggered on a randomised timer (2.5–4 second intervals). Allows blink to occur during any body animation without additional frames.

#### Flo — Ko's Mother

**Frame count: 4–5 frames**

| Animation | Frames | Description |
|---|---|---|
| Idle | 2 | Slower, calmer breath cycle than Ko |
| Look toward Ko | 1 | Head turn, gentle expression |
| Farewell | 1 | Head slightly lowered, proud but emotional |
| Wave | 1 | Small dignified gesture |

#### Gruff — Alpha Male

**Frame count: 5–6 frames**

| Animation | Frames | Description |
|---|---|---|
| Approach | 1 | Weight forward, chest out |
| Intimidate | 1 | Maximum size, chest gland visible, scent-marking posture |
| Confused stare | 1 | Head tilted, brow furrowed |
| Retreat | 2 | Walking away, tail down |
| Large return | 1 | Scaled up version of approach for the "Stay" branch |

### Animation Principles Applied to Koalas

**Squash and stretch:** Minimal — koalas are dense and don't deform much. Apply only on landing impacts, never to the main body during movement.

**Anticipation:** Always present before any directional change. Ko pauses and shifts weight before jumping. Gruff leans back before charging.

**Follow-through:** Ears always lag behind head movement by 2–3 frames. Fur settles after landing. Belly continues downward slightly after a jump halt.

**Secondary motion:** Breathing is always active on idle frames. The ear inner-fur colour shifts between warm and cool as Ko moves in and out of direct sun.

**Timing:** Ko on the ground is slow and deliberate — koalas conserve energy. Ko in the tree is faster and more confident — this is his natural environment.

---

## PART SIX: PRODUCTION WORKFLOW — RUNWAY + PHOTOSHOP

### Phase 1 — Real Photography

Photograph or source real Australian bush references:
- Morning eucalyptus bush (phone camera, golden hour)
- Real koalas at wildlife parks or sanctuaries — multiple poses, close up
- Creek beds, leaf litter, bark texture, ground detail
- Cloud and mist on clean sky days (for atmospheric layers)

Creative Commons sources: State Library collections, Museums Victoria, iNaturalist Australia.

### Phase 2 — Depth Separation in Runway

1. Upload photograph to Runway
2. Use the **Depth Estimation** tool — outputs greyscale depth map
   - White = closest to camera
   - Black = furthest from camera
3. Use **Background Remove** for clean foreground element isolation
4. Export depth map as reference for Photoshop cuts

### Phase 3 — Layer Cutting in Photoshop

1. Open original photo and depth map together
2. Load depth map as a Selection Channel
3. Adjust threshold to isolate each depth zone
4. Cut onto separate layers:
   - Sky
   - Distant ranges / far tree line
   - Mid bush / scrub zone
   - Near trees and plants
   - Ground
5. Use **Generative Fill** to reconstruct backgrounds behind removed foreground elements — the AI fill handles vegetation backgrounds well
6. Add slight Gaussian Blur to the two furthest layers (0.5–1px) — increases perceived depth significantly
7. Shift colour balance of far layers slightly cooler and more blue

### Phase 4 — Stylisation in Runway

Apply the GO KOALA! visual style to each layer separately using Image to Image generation. Adjust prompt language per layer depth:

**Far background layers:**
> atmospheric haze, desaturated, cool blue-mauve distance, painterly wash, soft edges, minimal detail

**Mid layers:**
> painterly illustration, olive-green Australian bush, moderate detail, warm afternoon light

**Near/foreground layers:**
> rich botanical detail, warm colour saturation, sharp edges, Australian native plants, painterly texture

### Phase 5 — Final Assembly in Photoshop

1. Bring all stylised layers back into one master Photoshop document
2. Verify transparent areas are clean (no white halos on edges — use Refine Edge)
3. Apply colour balance adjustments to unify layers into the locked palette
4. Export each layer as PNG-24 with transparency
5. Name files consistently: `layer-00-sky.png`, `layer-01-clouds.png` etc.

### Atmospheric Layer Creation

**Mist:** Photograph real morning mist, remove sky, stylise, export as semi-transparent PNG. Alternatively: soft white radial gradient in Photoshop, Gaussian blur, reduce opacity.

**Light shafts:** Create in Photoshop using radial gradients + Motion Blur filter. No photography needed. Export at 12–15% opacity.

**Pollen particles:** One macro photograph of dust in sunlight, background removed, stylised. This single image becomes the particle texture fed to Phaser's particle system.

**Clouds:** Real cloud photographs, Photoshop remove background, Runway stylise to match painterly language. Multiple exported as individual PNGs for staggered placement.

---

## PART SEVEN: AI GENERATION PROMPTS

### The Hero Frame Prompt (Ko on the Branch)

Use this to establish the visual north star. All other art inherits from this frame.

> Juvenile koala sitting on a wide river red gum branch, early morning Australian bush, silver-blue eucalyptus canopy above with hanging sickle-shaped leaves, warm amber backlight glowing through the ears and outer fur, cool blue-violet shadow on the underside of the body, laterite red-ochre earth below, acid yellow wattle visible in the mid-distance, atmospheric haze softening the far tree line to dusty blue-mauve, painterly illustration style, subsurface light through fur, Ori and the Blind Forest visual quality, colour palette informed by Albert Namatjira and Emily Kame Kngwarreye, no postcard clichés, no oversaturation, luminous naturalism, Studio Ghibli light direction and atmosphere

---

### Background Layer Prompts

**Sky Layer (BG-00)**
> Australian bush dawn sky, golden hour just after sunrise, warm amber and pale blue-grey gradient, wisps of thin high cirrus cloud catching orange light, dusty atmospheric haze, painterly texture, no birds no horizon obstruction, 1920x540px panoramic, photographic quality landscape painting, colour informed by Albert Namatjira watercolours

**Sun / Glow Sprite (BG-01)**
> Soft painterly sun disc, warm golden-white, surrounded by gentle radial light rays and soft lens halo, hand-painted illustration style, no hard edges, warm ochre and cream tones, transparent background, 256x256px

**Far Eucalyptus Silhouettes (BG-02)**
> Silhouette of distant Australian river red gum and grey box eucalyptus trees at dawn, soft dusty olive-grey-green tones, atmospheric perspective fading to blue-mauve haze, hand-painted, Ori and the Blind Forest visual quality, transparent background above canopy, wide panoramic strip 1920x300px, no detail in canopy, pure shape

**Mid Bush Layer (BG-03)**
> Australian bush mid-distance, wattle scrub, banksias, young eucalyptus saplings, amber-green to silver-green palette, painterly texture, moderate botanical detail, warm morning sidelight, transparent background, wide horizontal strip 1920x260px, parallax game background layer

**Near Foreground Bush (BG-04)**
> Detailed Australian foreground plants — wattle in bloom, banksia flower spikes, spinifex grass clumps, grass tree (blackboy) silhouette, rich warm amber-green tones, sharp painterly detail, transparent background, wide horizontal strip 1920x220px for game foreground parallax layer

**Ground (BG-05)**
> Cross-section of Australian laterite earth, dry cracked red-gold surface, dry grass tufts along top edge, small pebbles and dried leaf litter, warm terracotta and ochre palette, painterly texture, 2D side-scrolling game ground tile, 960x120px seamless horizontal tile

---

### Atmospheric Layer Prompts

**Ground Mist**
> Low-lying ground mist in Australian bush, white-grey translucent, soft irregular edges, morning light catching the top of the mist band, transparent above and below, wide horizontal strip 1920x80px, for layering above ground in game scene, semi-transparent PNG

**Light Shafts**
> Diagonal golden sunlight shafts filtering through eucalyptus canopy, soft warm yellow-white, radial rays from upper right, very subtle 12% opacity, transparent background, for layering over bush scene, painterly soft light quality, 960x540px

**Cloud Wisps**
> Single wisp of high cirrus cloud, Australian blue sky context, warm white with slight ochre tinge at edges, thin and translucent, painterly watercolour quality, transparent background, 400x120px, for tiling across wide game sky

**Pollen Mote**
> Single golden pollen dust mote, soft circular warm yellow glow, radial fade to transparent, 16x16px, transparent background, for Phaser particle system

---

### Character Prompts

**Ko — Neutral Reference Pose**
> Juvenile koala facing right, neutral standing pose, grey-brown fluffy fur with warm amber highlights on ears, large round dark nose, round fluffy ears with pale pink inner fur, wide expressive dark eyes, chubby compact body, small stubby arms at sides, clean transparent background, painterly illustration, visible brushwork outlines, subsurface light through ear fur, warm Australian morning sidelight from right, character design for 2D platformer game sprite, no background, full body visible

**Ko — Walk Cycle Frames**
> Juvenile koala walking right, weight on left front paw, right rear paw forward, compact low-slung gait, slightly waddling, deliberate movement (koalas conserve energy), game sprite frame, transparent background, same art direction as reference pose

**Ko — Sleep Frame**
> Juvenile koala asleep, curled slightly, eyes closed with gentle smile expression, ears relaxed and drooping slightly, peaceful, transparent background, game sprite frame, same visual style

**Ko — Jump Frame**
> Juvenile koala mid-jump, arms slightly spread, ears back from wind resistance, eyes wide, anticipation and excitement, transparent background, game sprite frame

**Flo — Idle Reference Pose**
> Adult female koala, slightly larger than Ko, seated on branch facing slightly left toward viewer, calm maternal expression, warm grey fur, gentle wise eyes, dignified and nurturing body language, painterly illustration, transparent background, game sprite, same visual style as Ko

**Gruff — Intimidation Pose**
> Large dominant male koala, stocky and broad, facing left, chest pushed forward, scent gland brown patch visible on chest (anatomically accurate), deep-set eyes under heavy brow, aggressive confident posture, dark charcoal-grey fur, significantly larger than Ko, painterly illustration, transparent background, game sprite, same visual style

---

### UI Element Prompts

**Dialogue Box Border**
> Decorative game UI dialogue box border, Australian bush theme, subtle gum leaf motif in corners, dark forest-green background panel, warm gold-green stroke outline, rounded corners, painterly illustrated style, transparent interior, 920x90px, 9-slice compatible

**Choice Button — Normal**
> Game UI button, dark forest green, rounded corners, subtle dried bark texture, thin gold-green border glow, clean readable surface, 400x40px, transparent background

---

## PART EIGHT: AUDIO PRODUCTION GUIDE

### Voice Lines — ElevenLabs

**Ko:** Young, slightly anxious, genuinely brave. Not precocious or cute-animated. Real.
- "Home. Safe. Warm." — quiet, content, private thought
- "I was here first." — small but defiant, slightly surprised at own courage
- "I need my own territory. Time to go." — resolved, emotional underneath
- "I'll come back, Mum." — brave face, voice slightly catching

**Flo:** Warm, unhurried, maternal gravity. She has seen difficulty before.
- "Be brave, little one." — holding back something, proud

**Gruff:** Deep, guttural, physically large voice. Not cartoonishly evil — genuinely territorial.
- "This is my territory." — flat, certain, no need to shout
- "You dare challenge ME? You are nothing." — volume increase, genuine threat

### Music — Suno

**Scene Background — Morning Home Tree**
> Gentle ambient Australian bush morning, sparse fingerpicked acoustic guitar, single sustained didgeridoo drone beneath, wind in leaves, distant magpies barely audible, warm and slightly melancholy, instrumental, loop-friendly, 90 seconds, no percussion, no melodic resolution — sustains mood without concluding

**Gruff Arrival Sting**
> Three-second musical sting, low cello impact, tension, held note, no resolution, game sound effect, Australian landscape context

**Goodbye Moment — Ko and Flo**
> Eight-second gentle swell, single guitar melody line, warm, emotional but not sentimental, Australian folk feeling, concludes softly, one-shot cue not a loop

**Episode Title Card**
> Five-second orchestral swell, hopeful and adventurous, single French horn melody, strings underneath, sense of journey beginning, cinematic quality

---

## PART NINE: PRODUCTION PRIORITIES

### The Hero Frame First

Before any other production art is created, commission or generate one single hero frame — Ko sitting on the branch in morning light, the eucalyptus canopy above, Flo nearby, the eucalyptus forest extending into hazy distance.

Get that one image right. Iterate until it answers all three questions of the three-second test. Every art direction decision in the entire project flows from it.

That single frame is also the most powerful single piece of marketing material the project has.

### Effort vs Impact Ranking

| Asset | Effort | Visual Impact |
|---|---|---|
| Sky and ground layers | Low — 1 image each | High — sets entire scene tone |
| Atmospheric layers (mist, light shafts) | Low — half day | Very high — film quality |
| Foreground occlusion layer | Low — 1 image | Very high — depth perception |
| Character idle animation | Medium — 2 frames | High — world feels alive |
| Character walk cycle | Medium — 4 frames | High — player feedback |
| Full blink system | Low — 3 tiny images + code | Medium — subtle but registers |
| Rain / weather layers | Low — 1 image + code | High — emotional range |

### File Naming Convention

```
layer-00-sky.png
layer-01-clouds.png
layer-02-light-shafts.png
layer-03-far-trees.png
layer-04-mid-bush.png
layer-05-mist.png
layer-06-near-bush.png
layer-07-foreground.png
layer-08-ground.png
ko-sheet.png
flo-sheet.png
gruff-sheet.png
ko-eyes-open.png
ko-eyes-half.png
ko-eyes-closed.png
particle-pollen.png
particle-dust.png
glow-warm.png
ui-dialog-frame.png
ui-btn-normal.png
ui-btn-hover.png
```

---

*GO KOALA! Visual & Animation Guide — Version 1.0*
*S'uNReel 2026 | Confidential Development Document*
