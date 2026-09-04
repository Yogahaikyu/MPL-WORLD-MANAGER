// ========================================
// MPL WORLD MANAGER
// DATABASE DUNIA
// ========================================

const game = {

    season: 1,

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
