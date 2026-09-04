/* =====================================================
   MPL WORLD MANAGER
   MPL INDONESIA SEASON 18
===================================================== */

const SAVE_KEY = "mpl_world_manager_v4";


/* =====================================================
   TEAMS
===================================================== */

const TEAM_DATA = [

    {
        id: "rrq",
        name: "RRQ",
        short: "RRQ",
        coach: "Adi",
        reputation: 94,
        chemistry: 84,
        morale: 88,
        mplTitles: 4,
        worldTitles: 1
    },

    {
        id: "onic",
        name: "ONIC",
        short: "ONIC",
        coach: "CW",
        reputation: 96,
        chemistry: 90,
        morale: 91,
        mplTitles: 5,
        worldTitles: 1
    },

    {
        id: "evos",
        name: "EVOS",
        short: "EVOS",
        coach: "Aldo",
        reputation: 86,
        chemistry: 78,
        morale: 82,
        mplTitles: 3,
        worldTitles: 1
    },

    {
        id: "btr",
        name: "Bigetron by Vitality",
        short: "BTR",
        coach: "K Dot",
        reputation: 84,
        chemistry: 79,
        morale: 80,
        mplTitles: 0,
        worldTitles: 0
    },

    {
        id: "alterego",
        name: "Alter Ego",
        short: "AE",
        coach: "xepher",
        reputation: 82,
        chemistry: 81,
        morale: 83,
        mplTitles: 0,
        worldTitles: 0
    },

    {
        id: "dewa",
        name: "Dewa United",
        short: "DEWA",
        coach: "Right",
        reputation: 78,
        chemistry: 77,
        morale: 79,
        mplTitles: 0,
        worldTitles: 0
    },

    {
        id: "geek",
        name: "Geek Fam",
        short: "GEEK",
        coach: "Erpang",
        reputation: 80,
        chemistry: 82,
        morale: 81,
        mplTitles: 0,
        worldTitles: 0
    },

    {
        id: "navi",
        name: "NAVI",
        short: "NAVI",
        coach: "Ynot",
        reputation: 79,
        chemistry: 76,
        morale: 78,
        mplTitles: 0,
        worldTitles: 0
    },

    {
        id: "tlid",
        name: "Team Liquid ID",
        short: "TLID",
        coach: "HonJaw",
        reputation: 88,
        chemistry: 85,
        morale: 86,
        mplTitles: 0,
        worldTitles: 0
    }

];


/* =====================================================
   PLAYERS
===================================================== */

const PLAYER_DATA = [

    /* ALTER EGO */

    ["p001","Nino","EXP","alterego",84,91],
    ["p002","Alexander","Roam","alterego",82,88],
    ["p003","Dingarai","Gold","alterego",83,90],
    ["p004","Dalvin","Mid","alterego",81,88],
    ["p005","Halim","Mid","alterego",79,86],
    ["p006","Reyy","Jungle","alterego",82,89],
    ["p007","Affan","Jungle","alterego",78,86],
    ["p008","Ivann","Roam","alterego",77,84],

    /* ONIC */

    ["p009","Kiboy","Roam","onic",91,95],
    ["p010","Sanz","Mid","onic",94,97],
    ["p011","Kairi","Jungle","onic",95,98],
    ["p012","Lutpi","EXP","onic",86,92],
    ["p013","Kelra","Gold","onic",94,98],
    ["p014","SSamuel","Roam","onic",80,87],

    /* RRQ */

    ["p015","Hajirin","Mid","rrq",82,90],
    ["p016","Arthur","Gold","rrq",84,91],
    ["p017","Said","Roam","rrq",80,88],
    ["p018","Joshua","EXP","rrq",83,91],
    ["p019","Demonkite","Jungle","rrq",88,93],
    ["p020","Habil","Gold","rrq",79,87],
    ["p021","Clayyy","Mid","rrq",89,94],

    /* EVOS */

    ["p022","Alberttt","Jungle","evos",92,96],
    ["p023","Erlan","Gold","evos",82,89],
    ["p024","Vell","EXP","evos",81,89],
    ["p025","Muezza","Roam","evos",80,88],
    ["p026","Rendyyy","EXP","evos",77,85],
    ["p027","Ryzaa","Mid","evos",80,88],

    /* BIGETRON */

    ["p028","Morenooo","Mid","btr",84,92],
    ["p029","EMANN","Gold","btr",89,95],
    ["p030","Finn","Roam","btr",81,89],
    ["p031","Nnael","Jungle","btr",86,93],
    ["p032","Shogun","EXP","btr",82,90],
    ["p033","Miguel","Gold","btr",78,87],

    /* DEWA */

    ["p034","Octa","Mid","dewa",81,89],
    ["p035","Qinn","EXP","dewa",80,88],
    ["p036","Maybeee","Gold","dewa",82,90],
    ["p037","Kayn","Jungle","dewa",81,89],
    ["p038","Itoshi Kesu","Roam","dewa",79,87],
    ["p039","Rul Good","Roam","dewa",77,85],
    ["p040","Hazle","Jungle","dewa",76,85],

    /* GEEK */

    ["p041","Aboyy","Mid","geek",86,92],
    ["p042","Nazara","Jungle","geek",82,90],
    ["p043","Kennzyyskie","Gold","geek",81,89],
    ["p044","Marcel","EXP","geek",80,88],
    ["p045","Febriii","EXP","geek",78,86],
    ["p046","Frenzyy","Roam","geek",80,88],

    /* NAVI */

    ["p047","Karss","EXP","navi",80,88],
    ["p048","Andoryuuu","Jungle","navi",82,90],
    ["p049","Aprho","Roam","navi",79,87],
    ["p050","Zeonn","Gold","navi",82,91],
    ["p051","Jiizee","Mid","navi",81,90],
    ["p052","Febbb","EXP","navi",77,86],
    ["p053","Joshuaa","Jungle","navi",78,87],

    /* TEAM LIQUID */

    ["p054","Aran","EXP","tlid",87,93],
    ["p055","Drichel","Mid","tlid",84,92],
    ["p056","Lyoni","Roam","tlid",83,90],
    ["p057","Keven","Gold","tlid",88,94],
    ["p058","Anaver","Mid","tlid",80,89],
    ["p059","Kevin","Jungle","tlid",86,93]

];


function buildPlayers() {

    return PLAYER_DATA.map(function(p) {

        return {

            id: p[0],
            name: p[1],
            role: p[2],
            teamId: p[3],
            rating: p[4],
            potential: p[5],
            morale: 80,
            stamina: 100,
            kills: 0,
            deaths: 0,
            assists: 0

        };

    });

}


/* =====================================================
   GAME OBJECT
===================================================== */

let game;


/* =====================================================
   HELPERS
===================================================== */

function getTeam(id) {

    return game.teams.find(function(team) {
        return team.id === id;
    });

}


function getPlayer(id) {

    return game.players.find(function(player) {
        return player.id === id;
    });

}


function getTeamPlayers(teamId) {

    return game.players.filter(function(player) {
        return player.teamId === teamId;
    });

}


function formatMoney(value) {

    if (value >= 1000000000) {
        return "Rp " +
            (value / 1000000000).toFixed(1)
            + " M";
    }

    if (value >= 1000000) {
        return "Rp " +
            (value / 1000000).toFixed(0)
            + " Jt";
    }

    return "Rp " +
        value.toLocaleString("id-ID");

}


function random(min, max) {

    return Math.floor(
        Math.random() * (max - min + 1)
    ) + min;

}


/* =====================================================
   STANDINGS
===================================================== */

function createStandings() {

    return game.teams.map(function(team) {

        return {

            teamId: team.id,

            played: 0,

            wins: 0,

            losses: 0,

            gameWins: 0,

            gameLosses: 0,

            gameDiff: 0,

            points: 0

        };

    });

}


function getStanding(teamId) {

    return game.standings.find(function(row) {
        return row.teamId === teamId;
    });

}


/* =====================================================
   TEAM POWER
===================================================== */

function teamPower(teamId) {

    const players =
        getTeamPlayers(teamId);

    if (!players.length) return 50;

    const total =
        players.reduce(function(sum, player) {
            return sum + player.rating;
        }, 0);

    const average =
        total / players.length;

    const team =
        getTeam(teamId);

    return average
        + (team.reputation * 0.08)
        + (team.chemistry * 0.05)
        + (team.morale * 0.05);

}


/* =====================================================
   SINGLE GAME
===================================================== */

function simulateGame(homeId, awayId) {

    const homePower =
        teamPower(homeId);

    const awayPower =
        teamPower(awayId);

    const homeScore =
        homePower + random(-12, 12);

    const awayScore =
        awayPower + random(-12, 12);

    let winner;

    if (homeScore >= awayScore) {
        winner = homeId;
    } else {
        winner = awayId;
    }

    const loser =
        winner === homeId
        ? awayId
        : homeId;

    const winnerPlayers =
        getTeamPlayers(winner);

    const mvpPlayer =
        winnerPlayers
        .slice()
        .sort(function(a, b) {
            return b.rating - a.rating;
        })[0];

    return {

        winner: winner,

        loser: loser,

        mvp:
            mvpPlayer
            ? mvpPlayer.name
            : "-"

    };

}


/* =====================================================
   BO3
===================================================== */

function simulateBo3(homeId, awayId) {

    let homeGames = 0;
    let awayGames = 0;

    let mvp = "-";

    while (
        homeGames < 2 &&
        awayGames < 2
    ) {

        const result =
            simulateGame(homeId, awayId);

        mvp = result.mvp;

        if (result.winner === homeId) {
            homeGames++;
        } else {
            awayGames++;
        }

    }

    return {

        winner:
            homeGames === 2
            ? homeId
            : awayId,

        loser:
            homeGames === 2
            ? awayId
            : homeId,

        homeGames: homeGames,

        awayGames: awayGames,

        mvp: mvp

    };

}


/* =====================================================
   BO5
===================================================== */

function simulateBo5(homeId, awayId) {

    let homeGames = 0;
    let awayGames = 0;

    let mvp = "-";

    while (
        homeGames < 3 &&
        awayGames < 3
    ) {

        const result =
            simulateGame(homeId, awayId);

        mvp = result.mvp;

        if (result.winner === homeId) {
            homeGames++;
        } else {
            awayGames++;
        }

    }

    return {

        winner:
            homeGames === 3
            ? homeId
            : awayId,

        loser:
            homeGames === 3
            ? awayId
            : homeId,

        homeGames: homeGames,

        awayGames: awayGames,

        mvp: mvp

    };

}


/* =====================================================
   BO7
===================================================== */

function simulateBo7(homeId, awayId) {

    let homeGames = 0;
    let awayGames = 0;

    let mvp = "-";

    while (
        homeGames < 4 &&
        awayGames < 4
    ) {

        const result =
            simulateGame(homeId, awayId);

        mvp = result.mvp;

        if (result.winner === homeId) {
            homeGames++;
        } else {
            awayGames++;
        }

    }

    return {

        winner:
            homeGames === 4
            ? homeId
            : awayId,

        loser:
            homeGames === 4
            ? awayId
            : homeId,

        homeGames: homeGames,

        awayGames: awayGames,

        mvp: mvp

    };

}


/* =====================================================
   APPLY REGULAR MATCH
===================================================== */

function applyMatchResult(homeId, awayId, result) {

    const home =
        getStanding(homeId);

    const away =
        getStanding(awayId);

    if (!home || !away) return;

    home.played++;
    away.played++;

    home.gameWins += result.homeGames;
    home.gameLosses += result.awayGames;

    away.gameWins += result.awayGames;
    away.gameLosses += result.homeGames;

    home.gameDiff =
        home.gameWins -
        home.gameLosses;

    away.gameDiff =
        away.gameWins -
        away.gameLosses;

    if (result.winner === homeId) {

        home.wins++;
        home.points++;

        away.losses++;

    } else {

        away.wins++;
        away.points++;

        home.losses++;

    }

}


/* =====================================================
   SCHEDULE
===================================================== */

function generateSchedule() {

    const ids =
        game.teams.map(function(team) {
            return team.id;
        });

    let schedule = [];

    let rotation = ids.slice();

    /*
       9 teams = 1 bye every round.
       18 weeks = double round robin.
    */

    for (let round = 0; round < 9; round++) {

        const current =
            rotation.slice();

        for (let i = 0; i < 4; i++) {

            const home =
                current[i];

            const away =
                current[8 - i];

            schedule.push({

                id:
                    "w" + (round + 1)
                    + "m" + (i + 1),

                week:
                    round + 1,

                home: home,

                away: away,

                played: false,

                homeGames: 0,

                awayGames: 0

            });

        }

        const last =
            rotation.pop();

        rotation.splice(
            1,
            0,
            last
        );

    }


    /*
       Second half.
       Home / away dibalik.
    */

    const firstHalf =
        schedule.slice();

    firstHalf.forEach(function(match, index) {

        schedule.push({

            id:
                "w" +
                (10 +
                Math.floor(index / 4))
                +
                "m" +
                ((index % 4) + 1),

            week:
                10 +
                Math.floor(index / 4),

            home:
                match.away,

            away:
                match.home,

            played: false,

            homeGames: 0,

            awayGames: 0

        });

    });

    return schedule;

}


function getCurrentWeekMatches() {

    return game.schedule.filter(function(match) {

        return match.week === game.week;

    });

}


function isCurrentWeekComplete() {

    const matches =
        getCurrentWeekMatches();

    return matches.length > 0 &&
        matches.every(function(match) {
            return match.played;
        });

}


/* =====================================================
   PLAY SCHEDULED MATCH
===================================================== */

function playScheduledMatch(index) {

    const match =
        game.schedule[index];

    if (!match) return;

    if (match.played) {

        alert("Match ini sudah dimainkan.");

        return;
    }

    if (match.week !== game.week) {

        alert("Match ini bukan pada week sekarang.");

        return;
    }

    const result =
        simulateBo3(
            match.home,
            match.away
        );

    match.played = true;

    match.homeGames =
        result.homeGames;

    match.awayGames =
        result.awayGames;

    match.winner =
        result.winner;

    match.mvp =
        result.mvp;

    applyMatchResult(
        match.home,
        match.away,
        result
    );

    saveGame();

    const home =
        getTeam(match.home);

    const away =
        getTeam(match.away);

    renderMatchResult(
        home,
        away,
        result
    );

    refreshUI();

    showPage("match");

}


/* =====================================================
   NEXT WEEK
===================================================== */

function nextMPLWeek() {

    if (!isCurrentWeekComplete()) {

        alert(
            "Selesaikan semua pertandingan Week "
            + game.week
            + " terlebih dahulu."
        );

        return;
    }

    if (game.week >= 18) {

        finishMPLRegularSeason();

        return;
    }

    game.week++;

    game.players.forEach(function(player) {

        player.stamina = 100;

    });

    saveGame();

    refreshUI();

}


/* =====================================================
   REGULAR SEASON FINISH
===================================================== */

function finishMPLRegularSeason() {

    if (game.week < 18) {

        alert(
            "Regular Season belum selesai."
        );

        return;
    }

    const matches =
        game.schedule.filter(function(match) {
            return match.played;
        });

    if (matches.length < 72) {

        alert(
            "Masih ada pertandingan Regular Season yang belum dimainkan."
        );

        return;
    }

    const sorted =
        [...game.standings].sort(function(a, b) {

            if (b.points !== a.points) {
                return b.points - a.points;
            }

            if (b.gameDiff !== a.gameDiff) {
                return b.gameDiff - a.gameDiff;
            }

            return b.wins - a.wins;

        });

    game.regularSeasonTop6 =
        sorted.slice(0, 6)
        .map(function(row) {
            return row.teamId;
        });

    createPlayoffs();

    saveGame();

    if (typeof renderPlayoffs === "function") {
        renderPlayoffs();
    }

    showPage("playoffs");

}


/* =====================================================
   PLAYOFFS
===================================================== */

function createPlayoffs() {

    const top =
        game.regularSeasonTop6;

    if (!top || top.length < 6) {

        alert("Top 6 belum tersedia.");

        return;
    }

    game.playoffs = {

        champion: null,

        matches: [

            {
                id: "PO1",
                round: "Play-In 1 • Seed #3 vs #6",
                format: "BO5",
                home: top[2],
                away: top[5],
                played: false
            },

            {
                id: "PO2",
                round: "Play-In 2 • Seed #4 vs #5",
                format: "BO5",
                home: top[3],
                away: top[4],
                played: false
            },

            {
                id: "PO3",
                round: "Upper Semifinal 1 • #1 vs PO2",
                format: "BO5",
                home: top[0],
                away: null,
                played: false
            },

            {
                id: "PO4",
                round: "Upper Semifinal 2 • #2 vs PO1",
                format: "BO5",
                home: top[1],
                away: null,
                played: false
            },

            {
                id: "PO5",
                round: "Lower Semifinal",
                format: "BO5",
                home: null,
                away: null,
                played: false
            },

            {
                id: "PO6",
                round: "Upper Final",
                format: "BO5",
                home: null,
                away: null,
                played: false
            },

            {
                id: "PO7",
                round: "Lower Final",
                format: "BO5",
                home: null,
                away: null,
                played: false
            },

            {
                id: "PO8",
                round: "Grand Final",
                format: "BO7",
                home: null,
                away: null,
                played: false
            }

        ]

    };

    updatePlayoffBracket();

}


function getPlayoff(id) {

    if (!game.playoffs) return null;

    return game.playoffs.matches.find(function(match) {
        return match.id === id;
    });

}


function updatePlayoffBracket() {

    const p =
        game.playoffs;

    if (!p) return;


    const po1 =
        getPlayoff("PO1");

    const po2 =
        getPlayoff("PO2");

    const po3 =
        getPlayoff("PO3");

    const po4 =
        getPlayoff("PO4");

    const po5 =
        getPlayoff("PO5");

    const po6 =
        getPlayoff("PO6");

    const po7 =
        getPlayoff("PO7");

    const po8 =
        getPlayoff("PO8");


    if (po2 && po2.played) {

        po3.away =
            po2.winner;

    }


    if (po1 && po1.played) {

        po4.away =
            po1.winner;

    }


    if (
        po3 &&
        po4 &&
        po3.played &&
        po4.played
    ) {

        po5.home =
            po3.loser;

        po5.away =
            po4.loser;

        po6.home =
            po3.winner;

        po6.away =
            po4.winner;

    }


    if (
        po5 &&
        po6 &&
        po5.played &&
        po6.played
    ) {

        po7.home =
            po5.winner;

        po7.away =
            po6.loser;

    }


    if (
        po6 &&
        po7 &&
        po6.played &&
        po7.played
    ) {

        po8.home =
            po6.winner;

        po8.away =
            po7.winner;

    }

}


function isPlayoffMatchReady(match) {

    if (!match) return false;

    return (
        !match.played &&
        match.home &&
        match.away
    );

}


function playPlayoffMatch(id) {

    const match =
        getPlayoff(id);

    if (!match) return;

    if (!isPlayoffMatchReady(match)) {

        alert(
            "Pertandingan belum siap dimainkan."
        );

        return;
    }

    let result;

    if (match.format === "BO7") {

        result =
            simulateBo7(
                match.home,
                match.away
            );

    } else {

        result =
            simulateBo5(
                match.home,
                match.away
            );

    }

    match.played = true;

    match.homeGames =
        result.homeGames;

    match.awayGames =
        result.awayGames;

    match.winner =
        result.winner;

    match.loser =
        result.loser;

    match.mvp =
        result.mvp;

    updatePlayoffBracket();

    checkPlayoffFinish();

    saveGame();

    renderPlayoffs();

    showPage("playoffs");

}


function checkPlayoffFinish() {

    const po8 =
        getPlayoff("PO8");

    if (!po8 || !po8.played) return;

    /*
       Grand Final sudah selesai.
       Pemenang menjadi juara.
    */

    const champion =
        getTeam(po8.winner);

    game.playoffs.champion =
        po8.winner;

    champion.mplTitles++;

    game.history.mpl.push({

        season: game.season,

        championId: champion.id,

        championName: champion.name

    });

    /*
       Reset untuk menyiapkan season berikutnya.
    */

    game.nextSeasonReady = true;

    saveGame();

    alert(
        "🏆 " +
        champion.name +
        " menjadi JUARA MPL INDONESIA SEASON " +
        game.season +
        "!"
    );

}


/* =====================================================
   SAVE / LOAD
===================================================== */

function saveGame() {

    localStorage.setItem(
        SAVE_KEY,
        JSON.stringify(game)
    );

}


function loadGame() {

    const saved =
        localStorage.getItem(SAVE_KEY);

    if (!saved) {
        return false;
    }

    try {

        game =
            JSON.parse(saved);

        return true;

    } catch (error) {

        return false;

    }

}


/* =====================================================
   NEW GAME
===================================================== */

function createNewGame() {

    game = {

        season: 18,

        week: 1,

        budget: 5000000000,

        managerTeam: "rrq",

        teams:
            JSON.parse(
                JSON.stringify(TEAM_DATA)
            ),

        players:
            buildPlayers(),

        standings: [],

        schedule: [],

        regularSeasonTop6: [],

        playoffs: null,

        history: {

            mpl: [],

            mSeries: []

        },

        nextSeasonReady: false

    };


    game.standings =
        createStandings();

    game.schedule =
        generateSchedule();

    saveGame();

}


/* =====================================================
   INITIALIZE
===================================================== */

function initializeGame() {

    const loaded =
        loadGame();

    if (!loaded) {

        createNewGame();

    }

    /*
       Safety check.
       Kalau data lama rusak/tidak lengkap,
       buat game baru.
    */

    if (
        !game.teams ||
        !game.players ||
        !game.standings ||
        !game.schedule
    ) {

        createNewGame();

    }

}


/* =====================================================
   RESET GAME
===================================================== */

function resetGame() {

    const yes =
        confirm(
            "Reset seluruh progress Season 18?"
        );

    if (!yes) return;

    localStorage.removeItem(SAVE_KEY);

    createNewGame();

    location.reload();

}
