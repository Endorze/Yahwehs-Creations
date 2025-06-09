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

export const newsItems: dataProp[] = [
  
  {
    id: 1,
    title: "Supporter Pack Released",
    date: "May 31, 2025",
    type: "NEWS",
    image: "/images/newsarticle/gyro.png",
    description: `
             The highly anticipated Supporter Pack is finally here! Packed with exclusive content, cosmetics, and lore items, it's a must-have for every fan of Yahweh's Creations.
               This release includes three new outfits, a unique mount skin, and access to a hidden journal containing prelude lore leading up to the main storyline. It's our way of saying thank you to the early supporters.
         `
       },
     {
    id: 2,
    title: "New Dungeon Revealed",
    date: "May 29, 2025",
    type: "UPDATE",
    image: "/images/newsarticle/angel.png",
    description: `
                 Explore the dark depths of the Hollow Sanctum — a forgotten temple hidden beneath the obsidian cliffs.
                Face corrupted spirits, unlock ancient doors, and challenge the dungeon boss whose tactics evolve with each fight. A perfect test for your party’s coordination and courage.
              `
         },
     {
    id: 3,
    title: "AI Companions in Action",
    date: "May 28, 2025",
    type: "FEATURE",
    image: "/images/newsarticle/gyro.png",
    description: `
          Meet your new companions: intelligent NPC allies who adapt to your decisions and combat behavior.
          They provide contextual advice, help in battles, and even develop personalities based on your actions. Our AI system represents a major leap in narrative interactivity.
         `
      },
    {
    id: 4,
    title: "World Expansion Incoming",
    date: "May 25, 2025",
    type: "NEWS",
    image: "/images/newsarticle/image 2.png",
    description: `
             New frontiers are opening! The Eastern Continent update will add over 20 new regions to explore, filled with unique cultures, flora, fauna, and hostile factions.
             The expansion also brings a revamped weather system and territory-based resource control — prepare for dynamic change.   
            `  
         },
     {
    id: 5,
    title: "Patch 1.2 Deployed",
    date: "May 24, 2025",
    type: "PATCH NOTES",
    image: "/images/newsarticle/image 3.png",
    description: `
              Patch 1.2 introduces combat balancing, network improvements, and dozens of bug fixes.
            Key highlights include dual-wielding improvements, stamina regeneration tweaks, and resolved map clipping issues in the Riverlands. Full patch notes available on our forums.
    `
  },
  {
    id: 6,
    title: "Yahweh's Creations Spotlight",
    date: "May 22, 2025",
    type: "COMMUNITY",
    image: "/images/newsarticle/image 3.png",
    description: `
              Each month, we highlight players who go above and beyond with their creativity. From fan art and music to in-game builds and mods — we celebrate you.
            This month's spotlight includes an incredible cathedral replica and a cinematic trailer made by our Discord community.
    `
  },
  {
    id: 7,
    title: "Gameplay Trailer Live",
    date: "May 20, 2025",
    type: "TRAILER",
    image: "/images/newsarticle/image 4.png",
    description: `
              The official gameplay trailer for Yahweh’s Creations is now live!
             Witness dynamic weather, real-time combat, and breathtaking visuals captured in 4K. Share it with your guild, and let us know your favorite moment using #YahwehsCreations.
    `
  },
  {
    id: 8,
    title: "New Lore Chapter Dropped",
    date: "May 18, 2025",
    type: "LORE",
    image: "/images/newsarticle/larva.jpg",
    description: `
              Chapter 7 of the Eternal Scroll is now available: “The Pact Forged in Flame.”
              Dive into the ancient betrayal that sparked the Era of Ashes. This chapter features beautifully illustrated manuscripts and audio narration by the voice of Ark                                                            
    `
  },
  {
    id: 9,
    title: "Dev Q&A Recap",
    date: "May 17, 2025",
    type: "DEV BLOG",
    image: "/images/newsarticle/sketch1.png",
    description: `
              We sat down with the developers to answer your most pressing questions.
              Topics included upcoming class reworks, plans for PvP arenas, and the future of player housing. Catch the full video or read the summarized notes in our dev blog.
    `
  },
  {
    id: 10,
    title: "Closed Beta Stats",
    date: "May 15, 2025",
    type: "DATA",
    image: "/images/newsarticle/sketch2.png",
    description: `
              Our closed beta revealed fascinating player behavior data.
              Top three used weapons: Shadowblade, Ember Bow, and Warhammer. Most deaths occurred in the Serpent Caves. Average play session lasted 2.6 hours. Thanks for helping shape the game!
    `
  }
];
export const supportPackInfo: SupporterPackProp2 = [
  {
    overview: `
      Support *Yahweh's Creations* on Kickstarter to bring a unique, handcrafted game to life—filled with passion, creativity, and heart.

      Your backing directly helps improve visuals, sound, and storytelling, all crafted by a dedicated indie team. As a supporter, you'll receive exclusive rewards, early access, and a chance to be part of the game's legacy.

      Help us turn vision into reality! This isn't just a game—it's a spiritual journey forged in pixel and prayer.

      With your support, we can expand the game's universe, add new playable relics, deepen the branching narrative paths, and enhance accessibility for all players. Every pledge, no matter the size, brings us one step closer to delivering an unforgettable experience.

      As a backer, your name may be etched into the in-game scriptures, your choices immortalized in lore.

      Become a part of something eternal—where your faith fuels creation itself.
    `.trim(),
  },
  {
    feature: `
      In *Yahweh's Creations*, every corridor echoes with forgotten prayers, every enemy is a symbol of a twisted past, and every choice you make carves deeper into fate's flesh.

      As the **Bishop of Yahweh**, you wield divine relics and forbidden knowledge to purge the catacombs of false gods and ancient sins.

      **The game features:**
      - **Handcrafted Environments** – Explore cursed catacombs, sanctified ruins, and corrupted altars, built with intricate detail.
      - **Dynamic Combat** – Master divine weapons, time-bending blessings, and eldritch powers.
      - **Deep Lore** – Uncover scriptures, relics, and heretical texts revealing the tragic history of Yahweh's fall.
      - **Unique Art & Sound** – A haunting visual palette and original soundtrack to immerse you in sacred dread.
      - **Exclusive Supporter Content** – Gain access to rare relics, behind-the-scenes lore, and a personal mark etched into the game world.

      This is more than a game—it's a divine trial.

      **Will you rise... or be forsaken?**
    `.trim(),
  },
];
