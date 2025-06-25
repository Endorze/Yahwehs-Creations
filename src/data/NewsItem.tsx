export type SupporterPackProp2 = {
  overview?: string
  feature?: string
}[];

export type dataProp = {
  id: number
  image: string
  description: string
  title: string
  date: string
  type: string
};

export const NewsItems: dataProp[] = [

  {
    id: 1,
    title: "Game Summary Pitch",
    date: "May 31, 2025",
    type: "NEWS",
    image: "/art/puzzle.png",
    description: `
             After the archbishop of a grand cathedral mysteriously passes away, his successor takes the mantle and exerts his rule with an iron fist. As he twists the doctrine of the god he worships, he and his followers grow twisted and monstrous in their greed and defiance. Now more power-hungry than ever, the Archbishop's ultimate plan is set in motion.
         `
  },
  {
    id: 2,
    title: "Our Inspiration",
    date: "May 29, 2025",
    type: "UPDATE",
    image: "/art/entrance.png",
    description: `
                 The game draws artistic and atmospheric inspiration from Witchfire, Bioshock, Hunt: Showdown, and Resident Evil.
These influences shape its mood, color palette, and world design — a tribute to dark, immersive environments with strong visual identity.
              `
  },
  {
    id: 3,
    title: "Player Experience",
    date: "May 28, 2025",
    type: "FEATURE",
    image: "/art/gun.png",
    description: `
          We aim to deliver a player experience grounded in exploration and strategy, where every choice matters.
Our design focuses on emergent gameplay, giving players the tools to solve problems creatively—both in combat and puzzles.
With limited ammunition, combat becomes a thoughtful, strategic challenge.
Tactical thinking is not optional; it’s essential to surviving and progressing through the world we’ve built.
         `
  },
  {
    id: 4,
    title: "Development Information",
    date: "May 25, 2025",
    type: "NEWS",
    image: "/art/glasspanes.png",
    description: `
             In our development, we harness the power of Unreal Engine 5.5 to build a rich and responsive game world for Windows PC.
Using C++ and Visual Studio, we implement complex systems and mechanics that support our design pillars.
This setup allows us to iterate efficiently, push visual fidelity, and maintain full control over performance and gameplay behavior.  
            `
  },
  {
    id: 5,
    title: "Target Audience",
    date: "May 24, 2025",
    type: "PATCH NOTES",
    image: "/art/glasspanes.png",
    description: `
              Our target audience primarily consists of male players aged 18–35 who seek challenging experiences and mature, atmospheric storytelling.
We’re creating a dark fantasy FPS tailored for those who enjoy intense combat, horror elements, and strategic gameplay.
With a focus on PC and full controller support, the game is designed to resonate with Western gaming culture and players who value depth and immersion.
    `
  },
  {
    id: 6,
    title: "Our Concept",
    date: "May 22, 2025",
    type: "COMMUNITY",
    image: "/art/cathedral.png",
    description: `
              Our vision is to deliver a unique and atmospheric experience built around slow-paced, strategic combat. At its core is a magic system with unlimited mana—but with slow regeneration or cooldown-based spellcasting (still to be finalized). This encourages players to think carefully and use spells deliberately, rather than spamming abilities.
Combat is methodical and deliberate. Ammunition is limited, and the pistol is never a fallback—you’ll need to rely on your environment and your wits. Gravity-based magic can be used to hurl enemies into spike traps or off ledges, rewarding creative problem-solving over brute force.
The setting is a corrupted, decaying cathedral—a place filled with secrets, hidden passages, and forgotten lore. Exploration is just as important as combat, with puzzle elements woven into the architecture. Players will encounter breakable barriers, sequence-based puzzles like lighting torches in the correct order, and cleverly concealed pressure plates or buttons.
This is a world that rewards curiosity, patience, and tactical thinking.
    `
  },
  {
    id: 7,
    title: "Core Mechanics & Game Experience Goals",
    date: "May 20, 2025",
    type: "TRAILER",
    image: "/art/torch.png",
    description: `
              Our core mechanics center on tactical combat and environmental interaction. Players wield spells like Fireball, Gravity Push, and Black Hole to outsmart enemies using traps such as spikes, barrels, and trapdoors. Combat is strategic, with limited ammo and cooldown-based magic encouraging thoughtful play. Puzzles are integrated into the world, featuring modular sequences, projectile-based triggers, and rotating objects like paintings. Each encounter challenges players to manage resources, think creatively, and use the environment to their advantage. The result is a slow-paced, deliberate experience where every spell, trap, and discovery contributes to a sense of mastery and immersion.
    `
  },
  {
    id: 8,
    title: "Art Direction",
    date: "May 18, 2025",
    type: "LORE",
    image: "/images/newsarticle/larva.jpg",
    description: `
              Our art direction embraces a dark, moody aesthetic inspired by gothic architecture and oppressive atmospheres.
We rely heavily on shadow, contrast, and gritty textures to create a world that feels both haunting and grounded.
Every visual element is crafted to enhance tension, mystery, and the sense of unease that defines the player’s journey.                                                        
    `
  },
  {
    id: 9,
    title: "Audio Direction",
    date: "May 17, 2025",
    type: "DEV BLOG",
    image: "/art/library.png",
    description: `
              Our audio direction blends suspenseful rock music with ominous undertones to reinforce the game’s dark and tense atmosphere.
Sound effects are designed to heighten immersion — from the crackle of spells and magical impacts to the mechanical clicks of traps and subtle puzzle cues.
Clear audio feedback for success and failure, combined with rich ambient sounds, helps guide the player while deepening the sense of mystery and danger.
    `
  },
  {
    id: 10,
    title: "Closed Beta Starts",
    date: "May 15, 2025",
    type: "DATA",
    image: "/images/playtesting/cathedralgameplay.png",
    description: `
              Our UI/UX design focuses on clarity and immersion, with core elements like health and mana displayed through a minimal HUD.
Interaction prompts are planned to support intuitive gameplay, and UI references will be refined in future iterations.
Controls are built around keyboard (WASD) and mouse input, with optional controller support for accessibility.
The game is being developed over a focused 7-week timeline, allowing us to iterate quickly while maintaining quality.
    `
  }
];
export const supportPackInfo: SupporterPackProp2 = [
  {
    overview: `
      Support OK'RHAMS Creation on Kickstarter to bring a unique, handcrafted game to life—filled with passion, creativity, and heart.

      Your backing directly helps improve visuals, sound, and storytelling, all crafted by a dedicated indie team. As a supporter, you'll receive exclusive rewards, early access, and a chance to be part of the game's legacy.

      Help us turn vision into reality! This isn't just a game—it's a spiritual journey forged in pixel and prayer.

      With your support, we can expand the game's universe, add new playable relics, deepen the branching narrative paths, and enhance accessibility for all players. Every pledge, no matter the size, brings us one step closer to delivering an unforgettable experience.

      As a backer, your name may be etched into the in-game scriptures, your choices immortalized in lore.

      Become a part of something eternal—where your faith fuels creation itself.
    `.trim(),
  },
  {
    feature: `
      In OK'RHAMS Creation, every corridor echoes with forgotten prayers, every enemy is a symbol of a twisted past, and every choice you make carves deeper into fate's flesh.

      As the Bishop of OK'RHAM, you wield divine relics and forbidden knowledge to purge the catacombs of false gods and ancient sins.

      The game features:
       Handcrafted Environments – Explore cursed catacombs, sanctified ruins, and corrupted altars, built with intricate detail.
       Dynamic Combat – Master divine weapons, time-bending blessings, and eldritch powers.
      Deep Lore – Uncover scriptures, relics, and heretical texts revealing the tragic history of OK'RHAMS fall.
      Unique Art & Sound** – A haunting visual palette and original soundtrack to immerse you in sacred dread.
      Exclusive Supporter Content – Gain access to rare relics, behind-the-scenes lore, and a personal mark etched into the game world.

      This is more than a game—it's a divine trial.

      Will you rise... or be forsaken?
    `.trim(),
  },
];
