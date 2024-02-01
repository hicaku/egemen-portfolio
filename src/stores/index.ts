import { defineStore } from "pinia";

export const projects = [
    {
        id: 1,
        url: "hear-me-not",
        name: "Hear Me Not",
        shortDescription:
            "Indie game student project. I've worked as a solo developer with a team of more than 10 people.",
        description:
            "<p>I've worked on this indie game student project with a team of more than 10 people. Except for the AI, I programmed the game all by myself. We created a playable demo in 3 months and presented it at school. <br> Sometimes, I created systems from the ground up. Other times, I followed tutorials and significantly modified existing code to align with our game's design requirements.<br> Starting from scratch, developing a relatively ambitious game with many artists and designers, necessitated solving countless problems and delving into topics that were unfamiliar to me back then. <br> I believe that I gained a lot of experience from this project. Below, you'll find detailed explanations of the game systems I've programmed:",
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
        techStack: ["Unreal Engine", "Blueprints"],
        youtube: "https://www.youtube.com/embed/ZLqHHJ_eFfs",
    },
    {
        id: 2,
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
            "The grid structure is not functional at the moment. Grid and limited movement system which is similar to the original game are planned for a future version",
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
        techStack: ["Unreal Engine", "Blueprints"],
        youtube: "https://www.youtube.com/embed/pUnargOeXvk",
    },
    {
        id: 3,
        url: "vampire-game",
        name: "Vampire Game",
        shortDescription: "Made in 72 hours for a Game Jam",
        description:
            "Made in 72 hours for Frostjam 23' Game Jam. Download link: https://egemen-ton.itch.io/natural-born-tendencies",
        gameplay: [
            "You are a vampire who fell asleep at night instead of hunting. You need to hunt a certain amount of people to get fed and must go to the safe zone before your health runs out. Sun is rising and damaging you more as time passes. You need to be quick. Avoid light sources and stay in the dark.",
            "Be careful. You are allergic to some blood types. You should only kill the people who have the correct blood type. Otherwise, you lose your health. Don't worry. Your instincts will guide you.",
        ],
        controls: ["WASD - Movement", "F - Attack from behind", "H - Heal"],
        image: "images/gifs/Vampir.gif",
        details: {
            developmentTime: {
                icon: "fa-solid fa-clock",
                title: "Development Time",
                value: "3 days",
            },
            status: {
                icon: "fa-solid fa-circle-info",
                title: "Status",
                value: "Released, also improving with new assets and level design",
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
                value: "All development, game design, level design",
            },
        },
        techStack: ["Unreal Engine", "Blueprints"],
        youtube: "https://www.youtube.com/embed/FY1r324S1EU",
    },
    {
        id: 4,
        url: "the-ultimate-shooter",
        name: "The Ultimate Shooter",
        shortDescription:
            "Result of the 56 hours long Udemy class: Unreal Engine C++ The Ultimate Shooter Course",
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
        techStack: ["Unreal Engine", "C++"],
        youtube: "https://www.youtube.com/embed/8u8ScEuO-qU",
    },
    {
        id: 5,
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
            "Gameplay Ability System (GAS)",
        ],
        youtube: "https://www.youtube.com/embed/lUhbEqJktOc",
    },
];

export const smallProjects = [
    {
        id: 1,
        url: "simple-shooter",
        name: "Simple Shooter",
        shortDescription:
            "Final project of the 30 hours long Udemy class: Unreal Engine 5 C++ Developer: Learn C++ & Make Video Games",
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
        techStack: ["Unreal Engine", "C++"],
        youtube: "https://www.youtube.com/embed/urb-1d2YoNk",
    },
    {
        id: 2,
        url: "crypt-raider",
        name: "Crypt Raider",
        shortDescription:
            "Simple project with 1 month of experience in UE5. Part of the C++ Udemy class",
        description:
            "Simple project with 1 month of experience in UE5. Part of the C++ Udemy class",
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
        techStack: ["Unreal Engine", "C++"],
        youtube: "https://www.youtube.com/embed/fYGTDOQBFm0",
    },
    {
        id: 3,
        url: "obstacle-assault",
        name: "Obstacle Assault",
        shortDescription:
            "Really simple project with less than 1 month of experience in UE5. Part of the C++ Udemy class",
        description:
            "Really simple project with less than 1 month of experience in UE5. Part of the C++ Udemy class",
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
        techStack: ["Unreal Engine", "C++"],
        youtube: "https://www.youtube.com/embed/IrpIh5CjNDc",
    },
];

export const skills = [
    "Unreal Engine",
    "C++",
    "Blueprints",
    "Game Development",
    "Gameplay Programming",
    "Gameplay Ability System (GAS)",
    "Git",
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
