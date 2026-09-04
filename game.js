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

        // ==============================
        // RRQ
        // ==============================

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


        // ==============================
        // ONIC
        // ==============================

        P006: {
            id: "P006",
            name: "Kairi",
            team: "ONIC",
            role: "Jungler",
            age: 21,
            rating: 89,
            potential: 94,
            salary: 170000000,
            morale: 90
        },

        P007: {
            id: "P007",
            name: "Butsss",
            team: "ONIC",
            role: "EXP Laner",
            age: 23,
            rating: 87,
            potential: 91,
            salary: 145000000,
            morale: 88
        },

        P008: {
            id: "P008",
            name: "Sanz",
            team: "ONIC",
            role: "Mid Laner",
            age: 23,
            rating: 90,
            potential: 94,
            salary: 175000000,
            morale: 91
        },

        P009: {
            id: "P009",
            name: "CW",
            team: "ONIC",
            role: "Gold Laner",
            age: 22,
            rating: 89,
            potential: 93,
            salary: 165000000,
            morale: 89
        },

        P010: {
            id: "P010",
            name: "Kiboy",
            team: "ONIC",
            role: "Roamer",
            age: 23,
            rating: 91,
            potential: 95,
            salary: 180000000,
            morale: 93
        },


        // ==============================
        // EVOS
        // ==============================

        P011: {
            id: "P011",
            name: "EVOS Player 1",
            team: "EVOS",
            role: "Jungler",
            age: 21,
            rating: 82,
            potential: 89,
            salary: 110000000,
            morale: 84
        },

        P012: {
            id: "P012",
            name: "EVOS Player 2",
            team: "EVOS",
            role: "EXP Laner",
            age: 22,
            rating: 80,
            potential: 87,
            salary: 100000000,
            morale: 82
        },

        P013: {
            id: "P013",
            name: "EVOS Player 3",
            team: "EVOS",
            role: "Mid Laner",
            age: 20,
            rating: 81,
            potential: 90,
            salary: 105000000,
            morale: 86
        },

        P014: {
            id: "P014",
            name: "EVOS Player 4",
            team: "EVOS",
            role: "Gold Laner",
            age: 21,
            rating: 83,
            potential: 90,
            salary: 115000000,
            morale: 85
        },

        P015: {
            id: "P015",
            name: "EVOS Player 5",
            team: "EVOS",
            role: "Roamer",
            age: 23,
            rating: 79,
            potential: 85,
            salary: 95000000,
            morale: 80
        },


        // ==============================
        // BTR
        // ==============================

        P016: {
            id: "P016",
            name: "BTR Player 1",
            team: "BTR",
            role: "Jungler",
            age: 20,
            rating: 81,
            potential: 90,
            salary: 105000000,
            morale: 84
        },

        P017: {
            id: "P017",
            name: "BTR Player 2",
            team: "BTR",
            role: "EXP Laner",
            age: 22,
            rating: 79,
            potential: 86,
            salary: 95000000,
            morale: 81
        },

        P018: {
            id: "P018",
            name: "BTR Player 3",
            team: "BTR",
            role: "Mid Laner",
            age: 21,
            rating: 82,
            potential: 89,
            salary: 110000000,
            morale: 86
        },

        P019: {
            id: "P019",
            name: "BTR Player 4",
            team: "BTR",
            role: "Gold Laner",
            age: 21,
            rating: 84,
            potential: 91,
            salary: 120000000,
            morale: 87
        },

        P020: {
            id: "P020",
            name: "BTR Player 5",
            team: "BTR",
            role: "Roamer",
            age: 22,
            rating: 80,
            potential: 87,
            salary: 100000000,
            morale: 83
        },


        // ==============================
        // PHILIPPINES
        // ==============================

        P021: {
            id: "P021",
            name: "PH Player 1",
            team: "Team PH 1",
            role: "Jungler",
            age: 21,
            rating: 86,
            potential: 92,
            salary: 140000000,
            morale: 88
        },

        P022: {
            id: "P022",
            name: "PH Player 2",
            team: "Team PH 1",
            role: "EXP Laner",
            age: 22,
            rating: 84,
            potential: 90,
            salary: 125000000,
            morale: 86
        },

        P023: {
            id: "P023",
            name: "PH Player 3",
            team: "Team PH 1",
            role: "Mid Laner",
            age: 20,
            rating: 87,
            potential: 94,
            salary: 145000000,
            morale: 90
        },

        P024: {
            id: "P024",
            name: "PH Player 4",
            team: "Team PH 1",
            role: "Gold Laner",
            age: 21,
            rating: 88,
            potential: 94,
            salary: 150000000,
            morale: 91
        },

        P025: {
            id: "P025",
            name: "PH Player 5",
            team: "Team PH 1",
            role: "Roamer",
            age: 22,
            rating: 85,
            potential: 90,
            salary: 130000000,
            morale: 87
        },


        // ==============================
        // MALAYSIA
        // ==============================

        P026: {
            id: "P026",
            name: "MY Player 1",
            team: "Team MY 1",
            role: "Jungler",
            age: 21,
            rating: 82,
            potential: 89,
            salary: 110000000,
            morale: 85
        },

        P027: {
            id: "P027",
            name: "MY Player 2",
            team: "Team MY 1",
            role: "EXP Laner",
            age: 22,
            rating: 80,
            potential: 87,
            salary: 100000000,
            morale: 83
        },

        P028: {
            id: "P028",
            name: "MY Player 3",
            team: "Team MY 1",
            role: "Mid Laner",
            age: 20,
            rating: 83,
            potential: 91,
            salary: 115000000,
            morale: 86
        },

        P029: {
            id: "P029",
            name: "MY Player 4",
            team: "Team MY 1",
            role: "Gold Laner",
            age: 21,
            rating: 84,
            potential: 90,
            salary: 120000000,
            morale: 88
        },

        P030: {
            id: "P030",
            name: "MY Player 5",
            team: "Team MY 1",
            role: "Roamer",
            age: 23,
            rating: 81,
            potential: 87,
            salary: 105000000,
            morale: 84
        },


        // ==============================
        // SINGAPORE
        // ==============================

        P031: {
            id: "P031",
            name: "SG Player 1",
            team: "Team SG 1",
            role: "Jungler",
            age: 20,
            rating: 80,
            potential: 88,
            salary: 95000000,
            morale: 84
        },

        P032: {
            id: "P032",
            name: "SG Player 2",
            team: "Team SG 1",
            role: "EXP Laner",
            age: 22,
            rating: 78,
            potential: 85,
            salary: 90000000,
            morale: 81
        },

        P033: {
            id: "P033",
            name: "SG Player 3",
            team: "Team SG 1",
            role: "Mid Laner",
            age: 21,
            rating: 81,
            potential: 89,
            salary: 100000000,
            morale: 85
        },

        P034: {
            id: "P034",
            name: "SG Player 4",
            team: "Team SG 1",
            role: "Gold Laner",
            age: 21,
            rating: 82,
            potential: 90,
            salary: 105000000,
            morale: 87
        },

        P035: {
            id: "P035",
            name: "SG Player 5",
            team: "Team SG 1",
            role: "Roamer",
            age: 22,
            rating: 79,
            potential: 86,
            salary: 90000000,
            morale: 83
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
