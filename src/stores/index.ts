import { defineStore } from "pinia";

export const projects = [
    {
        id: 1,
        url: "hit-and-boom",
        name: "Hit and Boom",
        shortDescription: "MOBA/Battle Royale game I have been contributing to since last year and developed AI for.",
        description:
            "I am currently working on a Battle Royale/MOBA game called 'Hit and Boom' using Unreal Engine. Throughout the project, I have actively contributed to various aspects, including gameplay, AI, and UI. My primary focus has been on player abilities, where I've been involved in developing new abilities and addressing bugs. Additionally, I have worked on UI elements and enhanced my network programming skills to accommodate the multiplayer nature of the game.<br><br> One of the key highlights of my contributions to this project is the design and programming of the game's AI, where I had the freedom to create the system from scratch. These AI characters move in teams of three while staying in the zone, clearing enemy camps, engaging in fights using skills, strategically avoiding disadvantaged situations, and surviving until reaching the final zone. The resulting work received positive feedback from both players and my colleagues.",
        image: "images/gifs/Hit_And_Boom.gif",
        details: {
            developmentTime: {
                icon: "fa-solid fa-clock",
                title: "Development Time",
                value: "3+ years",
            },
            status: {
                icon: "fa-solid fa-circle-info",
                title: "Status",
                value: "on Open Beta, Full Release around middle of 2024",
            },
            teamSize: {
                icon: "fa-solid fa-people-group",
                title: "Team Size",
                value: "5 Developers, 30+ Size in Total",
            },
            engine: {
                icon: "fa-solid fa-server",
                title: "Engine",
                value: "Unreal Engine 4",
            },
            language: {
                icon: "fa-solid fa-globe",
                title: "Language",
                value: "C++ and Blueprints",
            },
        },
        techStack: ["Unreal Engine", "C++", "Blueprints", "Gameplay", "AI", "UI", "Network", "Gameplay Ability System (GAS)"],
        youtube: "https://www.youtube.com/embed/YnoifQy3IzA",
        
    },
    {
        id: 2,
        url: "hear-me-not",
        name: "Hear Me Not",
        shortDescription:
            "Indie game student project. I've worked as a solo programmer with a team of more than 10 people.",
        description:
            "I've worked on this indie game student project with a team of more than 10 people. Except for the AI, I programmed the game all by myself. We created a playable demo in 3 months and presented it at school. Sometimes, I created systems from the ground up. Other times, I followed tutorials and significantly modified existing code to align with our game's design requirements. Starting from scratch, developing a relatively ambitious game with many artists and designers, necessitated solving countless problems and delving into topics that were unfamiliar to me back then. I believe that I gained a lot of experience from this project. Below, you'll find detailed explanations of the game systems I've programmed:",
        mechanics: [
            "Implemented a system for equipping weapons, allowing them to be attached to both the body and hand.", 
            "The Last of Us-inspired equipment UI, compatible with both keyboard and controller", 
            "Created weapons, including spears and crossbows, capable of causing damage, with the unique feature of crossbow bolts sticking to walls upon impact.",
            "Ranged Weapons: Utilized projectile path prediction system and spline mesh to visually represent the trajectory. Programmed aiming logic in the animation blueprint.", 
            "Interaction System: Implemented for various in-game actions, such as moving platforms, opening doors, looting items, and equipping weapons found on the ground.",
            "Climbing: Implemented ladder climbing and rock climbing (2D movement). Climbing has its own Input Mapping Context, preventing players from using other inputs such as shooting while climbing.", 
            "Rail Camera System: Developed camera tools for level designers to utilize. The camera tracks the player while moving on spline paths. Camera is customizable, it can rotate to the character, follow on the corridor axis, follow on depth axis with a desirable amount. Trigger boxes strategically positioned in the level trigger dynamic camera changes.",
            "Vaulting Climbing System: Implemented a dynamic system for vaulting and climbing, selecting the appropriate animation based on obstacle height and depth.", 
            "Dialogue System: Utilized a data table to store NPC IDs, lines, and voices. When approached to an NPC and pressed button, the UI widget appears, the camera zooms, and voice lines are played if the NPC has something to say. Dialogues are skippable. Dialogue cancels itself when moving away from NPCs.",
            "Save & Load System: When overlapped with BP_Checkpoint, it saves the player's health, location, equipment, and active camera. Upon death, the player respawns at the last checkpoint. The player can carry information between levels with this save and load system.", 
            "Sound Bar: The main mechanic of the game, the player generates sound through actions like walking, jumping, shooting, and attacking. Each action has its sound amount, contributing cumulatively to the total sound level displayed on the HUD. We had planned to spawn more enemies with each surpassed threshold (similar to the GTA police level).",
            "Basic Inventory System: players can collect items, drop them physically on the ground, and utilize them for effects like health boosts.", 
            "Implemented a system for opening chests, transferring items between chests and inventory, and stacking items on top of each other.",
            "Implemented narrative voice lines triggered by specific locations using trigger boxes.", 
            "Implemented fall damage"],
        image: "images/gifs/Hear_Me_Not.gif",
        details: {
            developmentTime: {
                icon: "fa-solid fa-clock",
                title: "Development Time",
                value: "3 months",
            },
            status: {
                icon: "fa-solid fa-circle-info",
                title: "Status",
                value: "Suspended",
            },
            teamSize: {
                icon: "fa-solid fa-people-group",
                title: "Team Size",
                value: "10+",
            },
            engine: {
                icon: "fa-solid fa-server",
                title: "Engine",
                value: "Unreal Engine",
            },
            language: {
                icon: "fa-solid fa-globe",
                title: "Language",
                value: "Blueprints",
            },
            contributions: {
                icon: "fa-solid fa-handshake-angle",
                title: "Contributions",
                value: "All development except for the Enemy AI",
            },
        },
        techStack: ["Unreal Engine", "Blueprints", "Gameplay", "UI"],
        youtube: "https://www.youtube.com/embed/ZLqHHJ_eFfs",
    },
    {
        id: 3,
        url: "the-banner-saga",
        name: "The Banner Saga",
        shortDescription:
            "I wanted to clone a game that I loved playing, The Banner Saga. This is a multiplayer turn-based tactical-combat game prototype.",
        description:
            "In this project, I wanted to clone a game that I loved playing, The Banner Saga. This is a multiplayer turn-based tactical-combat game prototype, developed with Unreal Engine 5 (Blueprints). More details: https://egemen-ton.itch.io/banner-saga-clone",
        rules: [
            "You are allowed to control only one character per turn and have to decide whether to move to a location or attack the enemy, if they are already in range.",
            "You must choose between 2 types of attack. The strategy is to decide where you want to attack, to the opponent's Strength or Armor. STR attacks weaken the enemy and reduce their attack output permanently, whereas, Break Armor attacks greatly increase your damage to them in future turns. Choose wisely.",
            "The team with the last man standing wins.",
        ],
        features: [
            "Multiplayer Turn-Based System",
            "3 different character classes with their own stats (STR, ARM, attack range)",
            "More character classes and their stats can be added easily in the editor",
            "2 types of attack options (Strength and Break Attack). All damage logic is coded as in the original game",
        ],
        image: "images/gifs/The_Banner_Saga.gif",
        details: {
            developmentTime: {
                icon: "fa-solid fa-clock",
                title: "Development Time",
                value: "1.5 months",
            },
            status: {
                icon: "fa-solid fa-circle-info",
                title: "Status",
                value: "Completed",
            },
            teamSize: {
                icon: "fa-solid fa-people-group",
                title: "Team Size",
                value: "1",
            },
            engine: {
                icon: "fa-solid fa-server",
                title: "Engine",
                value: "Unreal Engine",
            },
            language: {
                icon: "fa-solid fa-globe",
                title: "Language",
                value: "Blueprints",
            },
        },
        techStack: ["Unreal Engine", "Blueprints", "Gameplay", "UI", "Network"],
        youtube: "https://www.youtube.com/embed/pUnargOeXvk",
    },
    {
        id: 4,
        url: "vampire-game",
        name: "Vampire Game",
        shortDescription: "Made in 72 hours for a Game Jam. Improved for couple months afterwards.",
        description:
            "Made in 72 hours for Frostjam 23' Game Jam. Improved for couple months afterwards.<br><br> Download link: https://egemen-ton.itch.io/natural-born-tendencies<br> 72 Hours Version: https://youtu.be/FY1r324S1EU?si=XTafadhU201H0aE_ <br><br> New version has:<br> - Updated Characters<br> - New Animations<br> - New Environment and Level Design<br> - New Sound Effects<br> - Main Menu & Settings<br> - Difficulty Levels & Progression System<br> - Quality of Life Improvements<br> - Bug Fixes",
        gameplay: [
            "You are a vampire who fell asleep at night instead of hunting. You need to hunt a certain amount of people to get fed and must go to the safe zone before your health runs out. Sun is rising and damaging you more as time passes. You need to be quick. Avoid light sources and stay in the dark.",
            "Be careful. You are allergic to some blood types. You should only kill the people who have the correct blood type. Otherwise, you lose your health. Don't worry. Your instincts will guide you.",
        ],
        controls: ["WASD - Movement", "F - Attack from behind", "H - Heal"],
        image: "images/gifs/Vampire.gif",
        details: {
            developmentTime: {
                icon: "fa-solid fa-clock",
                title: "Development Time",
                value: "3 days + couple months",
            },
            status: {
                icon: "fa-solid fa-circle-info",
                title: "Status",
                value: "Released",
            },
            teamSize: {
                icon: "fa-solid fa-people-group",
                title: "Team Size",
                value: "4",
            },
            engine: {
                icon: "fa-solid fa-server",
                title: "Engine",
                value: "Unreal Engine",
            },
            language: {
                icon: "fa-solid fa-globe",
                title: "Language",
                value: "Blueprints",
            },
            contributions: {
                icon: "fa-solid fa-handshake-angle",
                title: "Contributions",
                value: "All Development, Game Design, Level Design",
            },
        },
        techStack: ["Unreal Engine", "Blueprints", "Gameplay", "UI"],
        youtube: "https://www.youtube.com/embed/LzRNQDpXIFQ",
        
    },
    {
        id: 5,
        url: "the-ultimate-shooter",
        name: "The Ultimate Shooter",
        shortDescription:
            "Result of the 56 hours long Udemy class: Unreal Engine C++ The Ultimate Shooter Course.",
        description:
            "Result of the 56 hours long Udemy class: Unreal Engine C++ The Ultimate Shooter Course. Topics covered are listed below the video.",
        image: "images/gifs/The_Ultimate_Shooter.gif",
        topics: [
            "Character creation and movement",
            "Input for PC and console controllers",
            "Extensive use of Animation Blueprints (and Anim Instances, their C++ parents)",
            "1D and 2D Blendspaces",
            "Strafing",
            "Turn-in-place",
            "Aim Offsets",
            "Inverse Kinematics",
            "Animation Curves",
            "Character lean when running",
            "Crouching (with dynamic capsule resizing)",
            "Turn hips while running",
            "Weapon fire with recoil animations",
            "Reloading",
            "Weapon blast and impact particles",
            "Weapon beam particles (smoke trails)",
            "Bullet shell eject particles",
            "Sound effects",
            "Blending animations per bone, by bool, and by enum - play one animation with one part of the body (running or crouching) while simultaneously playing another animation with another part of the body (reload, aim, or weapon fire)",
            "Attach and equip different weapons (pistols, submachine guns, assault rifles)",
            "Automatic and semi-automatic gunfire",
            "Move different gun parts (the clip/magazine, and pistol slide) during animations",
            "Camera zoom while aiming",
            "Dynamic crosshairs that spread in reaction to:",
            ["Character speed", "Weapon fire", "Aiming", "Jumping"],
            "Different crosshairs per weapon",
            "Widget components, showing:",
            ["Item names", "Item types", "Ammo counts", "Item rarity"],
            "HUD animations",
            "Full item inventory system",
            "Data tables, in Blueprints and C++",
            "Curves to control:",
            [
                "Item movement during pickup",
                "Color and brightness pulse for material effects",
            ],
            "Material creation, including:",
            [
                "Post-process materials",
                "Dynamic material instances",
                "Setting material properties from C++",
                "Driving material properties with curves",
                "Material functions",
                "Blending materials together",
                "Outline effects",
                "Glow/pulse effects",
            ],
            "Retargeting animations",
            "Retargeting whole Animation Blueprints",
            "Numerous gameplay algorithms",
            "Use of data structures, including:",
            [
                "Post-process materials",
                "structs",
                "enums",
                "arrays",
                "maps",
                "and more",
            ],
            "Animation montages",
            "Anim Notifies for sounds, weapon trails, and custom notifies",
            "Sync markers for footsteps and sync groups",
            "Delegates",
            "Interfaces",
            "Dynamic footsteps that spawn different sounds and particle systems depending on the surface type",
            "Physical materials and surface types",
            "Niagra particle systems",
            "Line traces",
            "Enemy AI",
            "Behavior Trees and Blackboard Components",
            "Multiple enemy types with varying levels of Health, Damage, Size and Movement Speed",
            "Headshot damage, with:",
            [
                "Higher damage for headshots",
                "Number widgets that pop up and animate with bullet hits",
                "Different colored numbers for headshots",
            ],
            "Character and enemy health bars",
            "Enemy patrol, agro, chase and attack player",
            "Death mechanics",
            "Stun mechanics",
            "Melee attacks with melee weapon trails",
            "Explosives that cause damage and death",
            "Level prototyping",
            "Creating full levels based on our prototypes using professional assets",
            "Light baking",
            "Post-process effects",
        ],

        details: {
            developmentTime: {
                icon: "fa-solid fa-clock",
                title: "Development Time",
                value: "1 month",
            },
            status: {
                icon: "fa-solid fa-circle-info",
                title: "Status",
                value: "Completed",
            },
            teamSize: {
                icon: "fa-solid fa-people-group",
                title: "Team Size",
                value: "1",
            },
            engine: {
                icon: "fa-solid fa-server",
                title: "Engine",
                value: "Unreal Engine",
            },
            language: {
                icon: "fa-solid fa-globe",
                title: "Language",
                value: "C++",
            },
        },
        techStack: ["Unreal Engine", "Blueprints", "Gameplay", "UI", "AI"],
        youtube: "https://www.youtube.com/embed/8u8ScEuO-qU",
    },
    {
        id: 6,
        url: "gas",
        name: "GAS",
        shortDescription:
            "Earlier in my internship, I started learning Gameplay Ability System (GAS) and made this small project.",
        description:
            "I set up the project in C++ and used blueprints to create abilities. Player can use 2 different Gameplay Abilities: Basic Attack and Igni. Normal Attack is self-explanatory, Igni costs mana and sets enemies on fire. All abilities, effects, pickups are working as a part of the Gameplay Ability System.",
        image: "images/gifs/Gameplay_Ability_System.gif",
        details: {
            developmentTime: {
                icon: "fa-solid fa-clock",
                title: "Development Time",
                value: "3 weeks",
            },
            status: {
                icon: "fa-solid fa-circle-info",
                title: "Status",
                value: "Completed",
            },
            teamSize: {
                icon: "fa-solid fa-people-group",
                title: "Team Size",
                value: "1",
            },
            engine: {
                icon: "fa-solid fa-server",
                title: "Engine",
                value: "Unreal Engine",
            },
            language: {
                icon: "fa-solid fa-globe",
                title: "Language",
                value: "C++ and Blueprints",
            },
        },
        techStack: [
            "Unreal Engine",
            "C++",
            "Blueprints",
            "Gameplay",
            "UI",
            "Gameplay Ability System (GAS)",
            "Network"
        ],
        youtube: "https://www.youtube.com/embed/lUhbEqJktOc",
    },
];

export const smallProjects = [
    {
        id: 1,
        url: "GGJ24",
        name: "GGJ24",
        shortDescription:
            "Made in 48 hours for Global Game Jam 2024.",
        description:
            "JubJub was made in 48 hours for Global Game Jam 2024. This is a local coop party game which can be played with 2-4 players. I worked as a solo programmer with 6 artists 2 sound designers and 1 technical designer.",
        image: "images/gifs/JubJub.gif",
        details: {
            developmentTime: {
                icon: "fa-solid fa-clock",
                title: "Development Time",
                value: "2 Days",
            },
            status: {
                icon: "fa-solid fa-circle-info",
                title: "Status",
                value: "Completed",
            },
            teamSize: {
                icon: "fa-solid fa-people-group",
                title: "Team Size",
                value: "9",
            },
            engine: {
                icon: "fa-solid fa-server",
                title: "Engine",
                value: "Unreal Engine",
            },
            language: {
                icon: "fa-solid fa-globe",
                title: "Language",
                value: "Blueprints",
            },
        },
        techStack: ["Unreal Engine", "Blueprints", "Gameplay", "UI"],
        youtube: "https://www.youtube.com/embed/W2o_c8IAbIc",
    },
    {
        id: 2,
        url: "simple-shooter",
        name: "Simple Shooter",
        shortDescription:
            "Final project of the 30 hours long Udemy class: Unreal Engine 5 C++ Developer: Learn C++ & Make Video Games.",
        description:
            "Final project of the 30 hours long Udemy class: Unreal Engine 5 C++ Developer: Learn C++ & Make Video Games.",

        features: [
            "I wanted to develop this project further and additionally, I implemented:",
            [
                "Limited ammo system",
                "Reloading",
                "Pickable ammo from ground",
                "Zooming in and out while aiming",
                "Level start animation",
                "Some sound effects.",
            ],
            "Almost everything is programmed in C++.",
        ],
        image: "images/gifs/Simple_Shooter.gif",
        details: {
            developmentTime: {
                icon: "fa-solid fa-clock",
                title: "Development Time",
                value: "1 week",
            },
            status: {
                icon: "fa-solid fa-circle-info",
                title: "Status",
                value: "Completed",
            },
            teamSize: {
                icon: "fa-solid fa-people-group",
                title: "Team Size",
                value: "1",
            },
            engine: {
                icon: "fa-solid fa-server",
                title: "Engine",
                value: "Unreal Engine",
            },
            language: {
                icon: "fa-solid fa-globe",
                title: "Language",
                value: "C++",
            },
        },
        techStack: ["Unreal Engine", "C++", "Gameplay", "UI", "AI"],
        youtube: "https://www.youtube.com/embed/urb-1d2YoNk",
    },
    {
        id: 3,
        url: "crypt-raider",
        name: "Crypt Raider",
        shortDescription:
            "Simple project with 1 month of experience in UE5. Part of the C++ Udemy class.",
        description:
            "Simple project with 1 month of experience in UE5. Part of the C++ Udemy class.",
        image: "images/gifs/Crypt_Raider.gif",
        details: {
            developmentTime: {
                icon: "fa-solid fa-clock",
                title: "Development Time",
                value: "1 week",
            },
            status: {
                icon: "fa-solid fa-circle-info",
                title: "Status",
                value: "Completed",
            },
            teamSize: {
                icon: "fa-solid fa-people-group",
                title: "Team Size",
                value: "1",
            },
            engine: {
                icon: "fa-solid fa-server",
                title: "Engine",
                value: "Unreal Engine",
            },
            language: {
                icon: "fa-solid fa-globe",
                title: "Language",
                value: "C++",
            },
        },
        techStack: ["Unreal Engine", "C++", "Gameplay"],
        youtube: "https://www.youtube.com/embed/fYGTDOQBFm0",
    },
    {
        id: 4,
        url: "obstacle-assault",
        name: "Obstacle Assault",
        shortDescription:
            "Really simple project with less than 1 month of experience in UE5. Part of the C++ Udemy class.",
        description:
            "Really simple project with less than 1 month of experience in UE5. Part of the C++ Udemy class.",
        image: "images/gifs/Obstacle_Assault.gif",
        details: {
            developmentTime: {
                icon: "fa-solid fa-clock",
                title: "Development Time",
                value: "1 week",
            },
            status: {
                icon: "fa-solid fa-circle-info",
                title: "Status",
                value: "Completed",
            },
            teamSize: {
                icon: "fa-solid fa-people-group",
                title: "Team Size",
                value: "1",
            },
            engine: {
                icon: "fa-solid fa-server",
                title: "Engine",
                value: "Unreal Engine",
            },
            language: {
                icon: "fa-solid fa-globe",
                title: "Language",
                value: "C++",
            },
        },
        techStack: ["Unreal Engine", "C++", "Gameplay"],
        youtube: "https://www.youtube.com/embed/IrpIh5CjNDc",
    },
];

export const skills = [
    "Unreal Engine",
    "C++",
    "Blueprints",
    "Game Programming",
    "Gameplay",
    "AI",
    "UI",
    "Network",
    "Git",
    "Gameplay Ability System (GAS)",
];

export const games = [
    {
        id: 1,
        name: "The Witcher 3: Wild Hunt",
        image: "images/games/witcher3-min.jpg",
    },
    {
        id: 2,
        name: "The Last Of Us",
        image: "images/games/lastofus-min.jpg",
    },
    {
        id: 3,
        name: "Sekiro",
        image: "images/games/sekiro-min.jpg",
    },
    {
        id: 4,
        name: "God Of War",
        image: "images/games/godofwar-min.jpg",
    },
    {
        id: 5,
        name: "Hollow Knight",
        image: "images/games/hollowknight-min.jpeg",
    },
    {
        id: 6,
        name: "Ori And The Will Of The Wisps",
        image: "images/games/ori-min.jpg",
    },
    {
        id: 7,
        name: "Titanfall 2",
        image: "images/games/titanfall-min.jpg",
    },
    {
        id: 8,
        name: "Dark Souls 3",
        image: "images/games/darksouls-min.jpg",
    },
    {
        id: 9,
        name: "Red Dead Redemption 2",
        image: "images/games/rdr2-min.jpg",
    },
    {
        id: 10,
        name: "Hades",
        image: "images/games/hades-min.jpg",
    },
    {
        id: 11,
        name: "Cyberpunk 2077",
        image: "images/games/cyberpunk-min.jpg",
    },
    {
        id: 12,
        name: "Kingdom Come: Deliverance",
        image: "images/games/kingdomcome-min.jpg",
    },
];

export const links = [
    {
        id: 1,
        name: "github",
        icon: "fa-brands fa-github",
        url: "https://github.com/egementon",
    },
    {
        id: 2,
        name: "linkedin",
        icon: "fa-brands fa-linkedin",
        url: "https://www.linkedin.com/in/egementon",
    },
    {
        id: 3,
        name: "discord",
        icon: "fa-brands fa-discord",
        url: "https://discordapp.com/users/695287490126282903",
    },
    {
        id: 4,
        name: "youtube",
        icon: "fa-brands fa-youtube",
        url: "https://www.youtube.com/@egementon",
    },
    {
        id: 5,
        name: "itch.io",
        icon: "fa-brands fa-itch-io",
        url: "https://egemen-ton.itch.io/",
    },
];

export const useIndexStore = defineStore({
    id: "index",
    state: () => ({
        theme: "dark" as "light" | "dark",
    }),
    actions: {
        downloadCV() {
            const link = document.createElement("a");
            link.href = "./cv.pdf";
            link.download = "cv.pdf";
            link.click();
        },
    },
    getters: {
        projects: () => projects,
    },
    persist: true,
});
