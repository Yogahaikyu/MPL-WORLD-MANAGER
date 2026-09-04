// ========================================
// MPL WORLD MANAGER
// DATABASE DUNIA
// ========================================

const game = {

    season: 1,

    // ========================================
    // DATABASE PEMAIN
    // ========================================

    players: {

        P001: {
            id: "P001",
            name: "Alberttt",
            team: "RRQ",
            role: "Jungler",
            age: 22,
            rating: 88,
            potential: 92,
            salary: 150000000,
            morale: 85
        },

        P002: {
            id: "P002",
            name: "R7",
            team: "RRQ",
            role: "EXP Laner",
            age: 25,
            rating: 87,
            potential: 89,
            salary: 140000000,
            morale: 90
        },

        P003: {
            id: "P003",
            name: "Clay",
            team: "RRQ",
            role: "Mid Laner",
            age: 23,
            rating: 84,
            potential: 88,
            salary: 120000000,
            morale: 82
        },

        P004: {
            id: "P004",
            name: "Skylar",
            team: "RRQ",
            role: "Gold Laner",
            age: 23,
            rating: 90,
            potential: 94,
            salary: 180000000,
            morale: 92
        },

        P005: {
            id: "P005",
            name: "Kyy",
            team: "RRQ",
            role: "Roamer",
            age: 22,
            rating: 85,
            potential: 89,
            salary: 130000000,
            morale: 86
        },

        P006: {
            id: "P006",
            name: "Player ONIC 1",
            team: "ONIC",
            role: "Jungler",
            age: 21,
            rating: 89,
            potential: 93,
            salary: 160000000,
            morale: 88
        },

        P007: {
            id: "P007",
            name: "Player ONIC 2",
            team: "ONIC",
            role: "EXP Laner",
            age: 22,
            rating: 86,
            potential: 90,
            salary: 130000000,
            morale: 85
        },

        P008: {
            id: "P008",
            name: "Player ONIC 3",
            team: "ONIC",
            role: "Mid Laner",
            age: 21,
            rating: 88,
            potential: 92,
            salary: 150000000,
            morale: 89
        },

        P009: {
            id: "P009",
            name: "Player ONIC 4",
            team: "ONIC",
            role: "Gold Laner",
            age: 22,
            rating: 91,
            potential: 95,
            salary: 190000000,
            morale: 94
        },

        P010: {
            id: "P010",
            name: "Player ONIC 5",
            team: "ONIC",
            role: "Roamer",
            age: 23,
            rating: 87,
            potential: 90,
            salary: 140000000,
            morale: 87
        }
    },


    // ========================================
    // DATABASE REGION
    // ========================================

    regions: {

        indonesia: {

            name: "Indonesia",

            tier1: {
                name: "MPL Indonesia",
                teams: [
                    "RRQ",
                    "ONIC",
                    "EVOS",
                    "BTR"
                ]
            },

            tier2: {
                name: "Indonesia Tier 2",
                teams: [
                    "Team Alpha",
                    "Team Beta",
                    "Team Gamma",
                    "Team Delta"
                ]
            }
        },

        philippines: {

            name: "Philippines",

            tier1: {
                name: "MPL Philippines",
                teams: [
                    "Team PH 1",
                    "Team PH 2",
                    "Team PH 3",
                    "Team PH 4"
                ]
            },

            tier2: {
                name: "Philippines Tier 2",
                teams: [
                    "Team PH Academy 1",
                    "Team PH Academy 2",
                    "Team PH Academy 3",
                    "Team PH Academy 4"
                ]
            }
        },

        malaysia: {

            name: "Malaysia",

            tier1: {
                name: "MPL Malaysia",
                teams: [
                    "Team MY 1",
                    "Team MY 2",
                    "Team MY 3",
                    "Team MY 4"
                ]
            },

            tier2: {
                name: "Malaysia Tier 2",
                teams: [
                    "Team MY Academy 1",
                    "Team MY Academy 2",
                    "Team MY Academy 3",
                    "Team MY Academy 4"
                ]
            }
        },

        singapore: {

            name: "Singapore",

            tier1: {
                name: "Singapore Tier 1",
                teams: [
                    "Team SG 1",
                    "Team SG 2",
                    "Team SG 3",
                    "Team SG 4"
                ]
            },

            tier2: {
                name: "Singapore Tier 2",
                teams: [
                    "Team SG Academy 1",
                    "Team SG Academy 2",
                    "Team SG Academy 3",
                    "Team SG Academy 4"
                ]
            }
        }
    },


    // ========================================
    // INTERNATIONAL
    // ========================================

    international: {

        MSC: {
            name: "MSC",
            status: "locked"
        },

        MSeries: {
            name: "M-Series",
            status: "locked"
        }
    }
};


// ========================================
// MENAMPILKAN DATA REGION
// ========================================

function tampilkanLiga() {

    const container = document.getElementById("leagueList");

    container.innerHTML = "";

    for (const id in game.regions) {

        const region = game.regions[id];

        const regionBox = document.createElement("div");

        regionBox.className = "card";

        regionBox.innerHTML = `

            <h2>🌍 ${region.name}</h2>

            <h3>🏆 Tier 1</h3>

            <p>${region.tier1.name}</p>

            <p>
                ${region.tier1.teams.join(" • ")}
            </p>

            <h3>🥈 Tier 2</h3>

            <p>${region.tier2.name}</p>

            <p>
                ${region.tier2.teams.join(" • ")}
            </p>

        `;

        container.appendChild(regionBox);
    }
}


// ========================================
// START GAME
// ========================================

document.addEventListener("DOMContentLoaded", function() {

    tampilkanLiga();

});
