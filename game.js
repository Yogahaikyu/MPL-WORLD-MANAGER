/* =========================================================
   GANTI SELURUH game.js
   ========================================================= */

const game = {

    season: 18,

    week: 1,

    budget: 5000000000,

    managerTeam: "rrq",

    teams: {

        rrq: {
            id: "rrq",
            name: "RRQ",
            short: "RRQ",
            coach: "Adi",
            stars: 0,
            mplTitles: 0,
            worldTitles: 0,
            reputation: 95,
            chemistry: 85,
            morale: 85
        },

        onic: {
            id: "onic",
            name: "ONIC",
            short: "ONIC",
            coach: "CW",
            stars: 0,
            mplTitles: 0,
            worldTitles: 0,
            reputation: 96,
            chemistry: 88,
            morale: 88
        },

        evos: {
            id: "evos",
            name: "EVOS",
            short: "EVOS",
            coach: "Aldo",
            stars: 0,
            mplTitles: 0,
            worldTitles: 0,
            reputation: 90,
            chemistry: 82,
            morale: 82
        },

        btr: {
            id: "btr",
            name: "Bigetron by Vitality",
            short: "BTR",
            coach: "K Dot",
            stars: 0,
            mplTitles: 0,
            worldTitles: 0,
            reputation: 91,
            chemistry: 84,
            morale: 84
        },

        alterego: {
            id: "alterego",
            name: "Alter Ego",
            short: "AE",
            coach: "xepher",
            stars: 0,
            mplTitles: 0,
            worldTitles: 0,
            reputation: 89,
            chemistry: 80,
            morale: 80
        },

        dewa: {
            id: "dewa",
            name: "Dewa United",
            short: "DEWA",
            coach: "Right",
            stars: 0,
            mplTitles: 0,
            worldTitles: 0,
            reputation: 82,
            chemistry: 78,
            morale: 78
        },

        geek: {
            id: "geek",
            name: "Geek Fam",
            short: "GEEK",
            coach: "Erpang",
            stars: 0,
            mplTitles: 0,
            worldTitles: 0,
            reputation: 84,
            chemistry: 79,
            morale: 79
        },

        navi: {
            id: "navi",
            name: "NAVI",
            short: "NAVI",
            coach: "Ynot",
            stars: 0,
            mplTitles: 0,
            worldTitles: 0,
            reputation: 87,
            chemistry: 81,
            morale: 81
        },

        tlid: {
            id: "tlid",
            name: "Team Liquid ID",
            short: "TLID",
            coach: "HonJaw",
            stars: 0,
            mplTitles: 0,
            worldTitles: 0,
            reputation: 94,
            chemistry: 87,
            morale: 87
        }

    },


    players: [

        {
            id:"p001",
            name:"Hajirin",
            team:"rrq",
            role:"Mid Lane",
            age:19,
            rating:82,
            potential:91,
            salary:120000000,
            morale:85,
            stamina:100
        },

        {
            id:"p002",
            name:"Arthur",
            team:"rrq",
            role:"Gold Lane",
            age:20,
            rating:84,
            potential:92,
            salary:130000000,
            morale:86,
            stamina:100
        },

        {
            id:"p003",
            name:"Said",
            team:"rrq",
            role:"Roam",
            age:21,
            rating:83,
            potential:90,
            salary:125000000,
            morale:85,
            stamina:100
        },

        {
            id:"p004",
            name:"Joshua",
            team:"rrq",
            role:"EXP Lane",
            age:19,
            rating:81,
            potential:90,
            salary:110000000,
            morale:84,
            stamina:100
        },

        {
            id:"p005",
            name:"Demonkite",
            team:"rrq",
            role:"Jungle",
            age:21,
            rating:85,
            potential:93,
            salary:140000000,
            morale:88,
            stamina:100
        },

        {
            id:"p006",
            name:"Habil",
            team:"rrq",
            role:"Gold Lane",
            age:20,
            rating:80,
            potential:89,
            salary:100000000,
            morale:82,
            stamina:100
        },

        {
            id:"p007",
            name:"Clayyy",
            team:"rrq",
            role:"Mid Lane",
            age:23,
            rating:86,
            potential:88,
            salary:145000000,
            morale:90,
            stamina:100
        },


        {
            id:"p008",
            name:"Kiboy",
            team:"onic",
            role:"Roam",
            age:23,
            rating:92,
            potential:95,
            salary:180000000,
            morale:91,
            stamina:100
        },

        {
            id:"p009",
            name:"Sanz",
            team:"onic",
            role:"Mid Lane",
            age:23,
            rating:94,
            potential:96,
            salary:190000000,
            morale:93,
            stamina:100
        },

        {
            id:"p010",
            name:"Kairi",
            team:"onic",
            role:"Jungle",
            age:20,
            rating:95,
            potential:98,
            salary:210000000,
            morale:94,
            stamina:100
        },

        {
            id:"p011",
            name:"Lutpi",
            team:"onic",
            role:"EXP Lane",
            age:20,
            rating:86,
            potential:92,
            salary:125000000,
            morale:86,
            stamina:100
        },

        {
            id:"p012",
            name:"Kelra",
            team:"onic",
            role:"Gold Lane",
            age:22,
            rating:94,
            potential:97,
            salary:200000000,
            morale:94,
            stamina:100
        },

        {
            id:"p013",
            name:"SSamuel",
            team:"onic",
            role:"Roam",
            age:20,
            rating:82,
            potential:90,
            salary:110000000,
            morale:84,
            stamina:100
        },


        {
            id:"p014",
            name:"Alberttt",
            team:"evos",
            role:"Jungle",
            age:23,
            rating:93,
            potential:95,
            salary:190000000,
            morale:90,
            stamina:100
        },

        {
            id:"p015",
            name:"Erlan",
            team:"evos",
            role:"Gold Lane",
            age:20,
            rating:84,
            potential:92,
            salary:120000000,
            morale:85,
            stamina:100
        },

        {
            id:"p016",
            name:"Vell",
            team:"evos",
            role:"EXP Lane",
            age:20,
            rating:83,
            potential:91,
            salary:115000000,
            morale:84,
            stamina:100
        },

        {
            id:"p017",
            name:"Muezza",
            team:"evos",
            role:"Roam",
            age:21,
            rating:82,
            potential:90,
            salary:110000000,
            morale:84,
            stamina:100
        },

        {
            id:"p018",
            name:"Rendyyy",
            team:"evos",
            role:"EXP Lane",
            age:20,
            rating:80,
            potential:88,
            salary:100000000,
            morale:81,
            stamina:100
        },

        {
            id:"p019",
            name:"Ryzaa",
            team:"evos",
            role:"Mid Lane",
            age:20,
            rating:82,
            potential:91,
            salary:110000000,
            morale:83,
            stamina:100
        },


        {
            id:"p020",
            name:"Morenooo",
            team:"btr",
            role:"Mid Lane",
            age:20,
            rating:86,
            potential:93,
            salary:130000000,
            morale:87,
            stamina:100
        },

        {
            id:"p021",
            name:"EMANN",
            team:"btr",
            role:"Gold Lane",
            age:24,
            rating:91,
            potential:94,
            salary:175000000,
            morale:91,
            stamina:100
        },

        {
            id:"p022",
            name:"Finn",
            team:"btr",
            role:"Roam",
            age:21,
            rating:84,
            potential:91,
            salary:120000000,
            morale:85,
            stamina:100
        },

        {
            id:"p023",
            name:"Nnael",
            team:"btr",
            role:"Jungle",
            age:20,
            rating:87,
            potential:94,
            salary:140000000,
            morale:88,
            stamina:100
        },

        {
            id:"p024",
            name:"Shogun",
            team:"btr",
            role:"EXP Lane",
            age:21,
            rating:85,
            potential:92,
            salary:125000000,
            morale:86,
            stamina:100
        },

        {
            id:"p025",
            name:"Miguel",
            team:"btr",
            role:"Gold Lane",
            age:19,
            rating:82,
            potential:91,
            salary:110000000,
            morale:84,
            stamina:100
        },


        {
            id:"p026",
            name:"Nino",
            team:"alterego",
            role:"EXP Lane",
            age:20,
            rating:85,
            potential:93,
            salary:125000000,
            morale:86,
            stamina:100
        },

        {
            id:"p027",
            name:"Alexander",
            team:"alterego",
            role:"Roam",
            age:21,
            rating:83,
            potential:90,
            salary:115000000,
            morale:84,
            stamina:100
        },

        {
            id:"p028",
            name:"Dingarai",
            team:"alterego",
            role:"Gold Lane",
            age:20,
            rating:84,
            potential:92,
            salary:120000000,
            morale:85,
            stamina:100
        },

        {
            id:"p029",
            name:"Dalvin",
            team:"alterego",
            role:"Mid Lane",
            age:20,
            rating:82,
            potential:91,
            salary:110000000,
            morale:83,
            stamina:100
        },

        {
            id:"p030",
            name:"Halim",
            team:"alterego",
            role:"Mid Lane",
            age:21,
            rating:80,
            potential:89,
            salary:100000000,
            morale:82,
            stamina:100
        },

        {
            id:"p031",
            name:"Reyy",
            team:"alterego",
            role:"Jungle",
            age:20,
            rating:84,
            potential:93,
            salary:120000000,
            morale:85,
            stamina:100
        },

        {
            id:"p032",
            name:"Affan",
            team:"alterego",
            role:"Jungle",
            age:19,
            rating:81,
            potential:91,
            salary:105000000,
            morale:82,
            stamina:100
        },

        {
            id:"p033",
            name:"Ivann",
            team:"alterego",
            role:"Roam",
            age:20,
            rating:81,
            potential:89,
            salary:105000000,
            morale:82,
            stamina:100
        },


        {
            id:"p034",
            name:"Octa",
            team:"dewa",
            role:"Mid Lane",
            age:21,
            rating:80,
            potential:89,
            salary:100000000,
            morale:80,
            stamina:100
        },

        {
            id:"p035",
            name:"Qinn",
            team:"dewa",
            role:"EXP Lane",
            age:20,
            rating:81,
            potential:90,
            salary:105000000,
            morale:81,
            stamina:100
        },

        {
            id:"p036",
            name:"Maybeee",
            team:"dewa",
            role:"Gold Lane",
            age:20,
            rating:80,
            potential:90,
            salary:100000000,
            morale:80,
            stamina:100
        },

        {
            id:"p037",
            name:"Kayn",
            team:"dewa",
            role:"Jungle",
            age:21,
            rating:82,
            potential:91,
            salary:110000000,
            morale:82,
            stamina:100
        },

        {
            id:"p038",
            name:"Itoshi Kesu",
            team:"dewa",
            role:"Roam",
            age:20,
            rating:79,
            potential:89,
            salary:95000000,
            morale:79,
            stamina:100
        },

        {
            id:"p039",
            name:"Rul Good",
            team:"dewa",
            role:"Roam",
            age:21,
            rating:78,
            potential:88,
            salary:90000000,
            morale:78,
            stamina:100
        },

        {
            id:"p040",
            name:"Hazle",
            team:"dewa",
            role:"Jungle",
            age:19,
            rating:80,
            potential:91,
            salary:100000000,
            morale:80,
            stamina:100
        },


        {
            id:"p041",
            name:"Aboyy",
            team:"geek",
            role:"Mid Lane",
            age:21,
            rating:82,
            potential:91,
            salary:110000000,
            morale:82,
            stamina:100
        },

        {
            id:"p042",
            name:"Nazara",
            team:"geek",
            role:"Jungle",
            age:20,
            rating:80,
            potential:90,
            salary:100000000,
            morale:80,
            stamina:100
        },

        {
            id:"p043",
            name:"Kennzyyskie",
            team:"geek",
            role:"Gold Lane",
            age:20,
            rating:79,
            potential:89,
            salary:95000000,
            morale:79,
            stamina:100
        },

        {
            id:"p044",
            name:"Marcel",
            team:"geek",
            role:"EXP Lane",
            age:20,
            rating:79,
            potential:89,
            salary:95000000,
            morale:79,
            stamina:100
        },

        {
            id:"p045",
            name:"Febriii",
            team:"geek",
            role:"EXP Lane",
            age:21,
            rating:78,
            potential:88,
            salary:90000000,
            morale:78,
            stamina:100
        },

        {
            id:"p046",
            name:"Frenzyy",
            team:"geek",
            role:"Roam",
            age:20,
            rating:80,
            potential:90,
            salary:100000000,
            morale:81,
            stamina:100
        },


        {
            id:"p047",
            name:"Karss",
            team:"navi",
            role:"EXP Lane",
            age:21,
            rating:83,
            potential:91,
            salary:115000000,
            morale:83,
            stamina:100
        },

        {
            id:"p048",
            name:"Andoryuuu",
            team:"navi",
            role:"Jungle",
            age:20,
            rating:85,
            potential:93,
            salary:130000000,
            morale:86,
            stamina:100
        },

        {
            id:"p049",
            name:"Aprho",
            team:"navi",
            role:"Roam",
            age:21,
            rating:82,
            potential:90,
            salary:110000000,
            morale:82,
            stamina:100
        },

        {
            id:"p050",
            name:"Zeonn",
            team:"navi",
            role:"Gold Lane",
            age:20,
            rating:84,
            potential:92,
            salary:120000000,
            morale:85,
            stamina:100
        },

        {
            id:"p051",
            name:"Jiizee",
            team:"navi",
            role:"Mid Lane",
            age:20,
            rating:82,
            potential:91,
            salary:110000000,
            morale:82,
            stamina:100
        },

        {
            id:"p052",
            name:"Febbb",
            team:"navi",
            role:"EXP Lane",
            age:19,
            rating:79,
            potential:90,
            salary:95000000,
            morale:80,
            stamina:100
        },

        {
            id:"p053",
            name:"Joshuaa",
            team:"navi",
            role:"Jungle",
            age:20,
            rating:80,
            potential:90,
            salary:100000000,
            morale:81,
            stamina:100
        },


        {
            id:"p054",
            name:"Aran",
            team:"tlid",
            role:"EXP Lane",
            age:21,
            rating:88,
            potential:94,
            salary:145000000,
            morale:89,
            stamina:100
        },

        {
            id:"p055",
            name:"Drichel",
            team:"tlid",
            role:"Mid Lane",
            age:22,
            rating:87,
            potential:93,
            salary:140000000,
            morale:88,
            stamina:100
        },

        {
            id:"p056",
            name:"Lyoni",
            team:"tlid",
            role:"Roam",
            age:21,
            rating:86,
            potential:93,
            salary:135000000,
            morale:87,
            stamina:100
        },

        {
            id:"p057",
            name:"Keven",
            team:"tlid",
            role:"Gold Lane",
            age:20,
            rating:89,
            potential:95,
            salary:155000000,
            morale:90,
            stamina:100
        },

        {
            id:"p058",
            name:"Anaver",
            team:"tlid",
            role:"Mid Lane",
            age:20,
            rating:84,
            potential:92,
            salary:120000000,
            morale:85,
            stamina:100
        },

        {
            id:"p059",
            name:"Kevin",
            team:"tlid",
            role:"Jungle",
            age:21,
            rating:90,
            potential:96,
            salary:165000000,
            morale:91,
            stamina:100
        }

    ],


    standings: {},

    schedule: [],

    currentMatch: null,

    regularSeasonResult: null,

    history: {

        mpl: [],

        world: [],

        seasons: []

    }

};


/* =========================================================
   TEAM / PLAYER
   ========================================================= */

function getTeam(id) {

    return game.teams[id];

}


function getPlayer(id) {

    return game.players.find(
        p => p.id === id
    );

}


function getTeamPlayers(teamId) {

    return game.players.filter(
        p => p.team === teamId
    );

}


/* =========================================================
   MONEY
   ========================================================= */

function formatMoney(value) {

    if (value >= 1000000000) {

        return "Rp " +
            (value / 1000000000)
            .toFixed(1) +
            "B";

    }

    if (value >= 1000000) {

        return "Rp " +
            (value / 1000000)
            .toFixed(0) +
            "M";

    }

    return "Rp " +
        value.toLocaleString("id-ID");

}


/* =========================================================
   RANDOM
   ========================================================= */

function random(min,max) {

    return Math.floor(
        Math.random() *
        (max - min + 1)
    ) + min;

}


/* =========================================================
   EMPTY STANDINGS
   ========================================================= */

function createEmptyStandings() {

    game.standings = {};

    Object.keys(game.teams)
        .forEach(teamId => {

            game.standings[teamId] = {

                teamId: teamId,

                points: 0,

                matchWin: 0,

                matchLoss: 0,

                gameWin: 0,

                gameLoss: 0

            };

        });

}


/* =========================================================
   SORT STANDINGS
   ========================================================= */

function getSortedStandings() {

    return Object.values(
        game.standings
    ).sort((a,b) => {

        if (
            b.points !== a.points
        ) {

            return b.points -
                   a.points;

        }

        const diffA =
            a.gameWin -
            a.gameLoss;

        const diffB =
            b.gameWin -
            b.gameLoss;

        if (diffB !== diffA) {

            return diffB -
                   diffA;

        }

        return b.gameWin -
               a.gameWin;

    });

}


/* =========================================================
   TEAM POWER
   ========================================================= */

function calculateTeamPower(teamId) {

    const players =
        getTeamPlayers(teamId);


    if (!players.length) {

        return 50;

    }


    const avgRating =
        players.reduce(
            (sum,p) =>
                sum + p.rating,
            0
        ) / players.length;


    const team =
        getTeam(teamId);


    return (
        avgRating * 0.65
    ) + (
        team.chemistry * 0.20
    ) + (
        team.morale * 0.15
    );

}


/* =========================================================
   SIMULATE ONE GAME
   ========================================================= */

function simulateGame(teamA,teamB) {

    const powerA =
        calculateTeamPower(teamA);

    const powerB =
        calculateTeamPower(teamB);


    const chanceA =
        powerA /
        (powerA + powerB);


    const winner =
        Math.random() < chanceA
        ? teamA
        : teamB;


    const loser =
        winner === teamA
        ? teamB
        : teamA;


    const winnerKills =
        random(10,24);


    const loserKills =
        random(
            3,
            Math.max(
                5,
                winnerKills - 3
            )
        );


    return {

        winner: winner,

        loser: loser,

        killsWinner: winnerKills,

        killsLoser: loserKills

    };

}


/* =========================================================
   SIMULATE BO3
   ========================================================= */

function simulateBo3(teamA,teamB) {

    let scoreA = 0;

    let scoreB = 0;

    const games = [];


    while (
        scoreA < 2 &&
        scoreB < 2
    ) {

        const result =
            simulateGame(
                teamA,
                teamB
            );


        games.push({

            game:
                games.length + 1,

            winner:
                result.winner,

            loser:
                result.loser,

            killsWinner:
                result.killsWinner,

            killsLoser:
                result.killsLoser

        });


        if (
            result.winner === teamA
        ) {

            scoreA++;

        } else {

            scoreB++;

        }

    }


    const winner =
        scoreA > scoreB
        ? teamA
        : teamB;


    const loser =
        winner === teamA
        ? teamB
        : teamA;


    return {

        teamA: teamA,

        teamB: teamB,

        scoreA: scoreA,

        scoreB: scoreB,

        winner: winner,

        loser: loser,

        games: games

    };

}


/* =========================================================
   APPLY RESULT
   ========================================================= */

function applyMatchResult(result) {

    const A =
        game.standings[
            result.teamA
        ];

    const B =
        game.standings[
            result.teamB
        ];


    if (!A || !B) {

        createEmptyStandings();

    }


    const SA =
        game.standings[
            result.teamA
        ];

    const SB =
        game.standings[
            result.teamB
        ];


    SA.gameWin +=
        result.scoreA;

    SA.gameLoss +=
        result.scoreB;


    SB.gameWin +=
        result.scoreB;

    SB.gameLoss +=
        result.scoreA;


    if (
        result.winner ===
        result.teamA
    ) {

        SA.matchWin++;

        SB.matchLoss++;

        SA.points++;

    } else {

        SB.matchWin++;

        SA.matchLoss++;

        SB.points++;

    }


    /*
      Morale
    */

    const winnerTeam =
        getTeam(result.winner);

    const loserTeam =
        getTeam(result.loser);


    winnerTeam.morale =
        Math.min(
            100,
            winnerTeam.morale + 2
        );


    loserTeam.morale =
        Math.max(
            50,
            loserTeam.morale - 2
        );


    /*
      Stamina
    */

    getTeamPlayers(
        result.teamA
    ).forEach(p => {

        p.stamina =
            Math.max(
                30,
                p.stamina - 10
            );

    });


    getTeamPlayers(
        result.teamB
    ).forEach(p => {

        p.stamina =
            Math.max(
                30,
                p.stamina - 10
            );

    });

}


/* =========================================================
   MVP
   ========================================================= */

function calculateMVP(result) {

    const winnerPlayers =
        getTeamPlayers(
            result.winner
        );


    if (!winnerPlayers.length) {

        return null;

    }


    return winnerPlayers
        .slice()
        .sort(
            (a,b) =>
                b.rating - a.rating
        )[0];

}


/* =========================================================
   GENERATE 72 MATCH MPL
   ========================================================= */

function generateMPLSchedule() {

    const teams =
        Object.keys(game.teams);


    /*
      Untuk 9 tim:
      tambahkan BYE.
    */

    let rotation =
        [...teams,"bye"];


    const firstHalf = [];


    for (
        let round = 0;
        round < 9;
        round++
    ) {

        const matches = [];


        for (
            let i = 0;
            i < rotation.length / 2;
            i++
        ) {

            const A =
                rotation[i];

            const B =
                rotation[
                    rotation.length - 1 - i
                ];


            if (
                A !== "bye" &&
                B !== "bye"
            ) {

                matches.push({

                    teamA: A,

                    teamB: B

                });

            }

        }


        firstHalf.push(matches);


        /*
          Circle rotation
        */

        const fixed =
            rotation[0];

        const rest =
            rotation.slice(1);


        rest.unshift(
            rest.pop()
        );


        rotation =
            [fixed,...rest];

    }


    const secondHalf =
        firstHalf.map(round => {

            return round.map(match => ({

                teamA:
                    match.teamB,

                teamB:
                    match.teamA

            }));

        });


    const all =
        [
            ...firstHalf,
            ...secondHalf
        ];


    game.schedule = [];


    all.forEach(
        (round,roundIndex) => {

            round.forEach(match => {

                game.schedule.push({

                    week:
                        roundIndex + 1,

                    teamA:
                        match.teamA,

                    teamB:
                        match.teamB,

                    played:false,

                    result:null

                });

            });

        }
    );


    return game.schedule;

}


/* =========================================================
   ENSURE SCHEDULE
   ========================================================= */

function ensureMPLSchedule() {

    if (
        !game.schedule ||
        game.schedule.length !== 72
    ) {

        generateMPLSchedule();

    }

}


/* =========================================================
   CURRENT WEEK
   ========================================================= */

function getCurrentWeekMatches() {

    ensureMPLSchedule();


    return game.schedule.filter(
        match =>
            Number(match.week) ===
            Number(game.week)
    );

}


/* =========================================================
   CHECK WEEK
   ========================================================= */

function isCurrentWeekComplete() {

    const matches =
        getCurrentWeekMatches();


    if (!matches.length) {

        return true;

    }


    return matches.every(
        match =>
            match.played
    );

}


/* =========================================================
   PLAY SCHEDULED MATCH
   ========================================================= */

function playScheduledMatch(index) {

    ensureMPLSchedule();


    const match =
        game.schedule[index];


    if (!match) {

        alert(
            "Pertandingan tidak ditemukan."
        );

        return;

    }


    if (match.played) {

        alert(
            "Pertandingan sudah dimainkan."
        );

        return;

    }


    const result =
        simulateBo3(
            match.teamA,
            match.teamB
        );


    applyMatchResult(result);


    game.currentMatch =
        result;


    const mvp =
        calculateMVP(result);


    game.currentMatch.mvp =
        mvp
        ? mvp.id
        : null;


    match.played =
        true;


    match.result = {

        scoreA:
            result.scoreA,

        scoreB:
            result.scoreB,

        winner:
            result.winner

    };


    saveGameSilent();


    if (
        typeof renderMatch ===
        "function"
    ) {

        renderMatch();

    }


    if (
        typeof showPage ===
        "function"
    ) {

        showPage("match");

    }

}


/* =========================================================
   NEXT WEEK
   ========================================================= */

function nextMPLWeek() {

    if (
        !isCurrentWeekComplete()
    ) {

        alert(
            "Masih ada pertandingan Week " +
            game.week +
            " yang belum dimainkan."
        );

        return;

    }


    if (game.week >= 18) {

        finishMPLRegularSeason();

        return;

    }


    game.week++;


    game.players.forEach(
        player => {

            player.stamina =
                Math.min(
                    100,
                    player.stamina + 35
                );

        }
    );


    saveGameSilent();


    if (
        typeof refreshUI ===
        "function"
    ) {

        refreshUI();

    }


    if (
        typeof renderSchedule ===
        "function"
    ) {

        renderSchedule();

    }


    if (
        typeof showPage ===
        "function"
    ) {

        showPage("schedule");

    }

}


/* =========================================================
   FINISH REGULAR SEASON
   ========================================================= */

function finishMPLRegularSeason() {

    const standings =
        getSortedStandings();


    game.regularSeasonResult = {

        season:
            game.season,

        standings:
            standings,

        top6:
            standings
                .slice(0,6)
                .map(
                    s => s.teamId
                )

    };


    saveGameSilent();


    let text =
        "🏁 REGULAR SEASON SELESAI!\n\n";


    text +=
        "TOP 6 PLAYOFF:\n\n";


    standings
        .slice(0,6)
        .forEach(
            (s,index) => {

                text +=
                    (index + 1) +
                    ". " +
                    getTeam(s.teamId).name +
                    " - " +
                    s.points +
                    " MP\n";

            }
        );


    alert(text);


    if (
        typeof renderStandings ===
        "function"
    ) {

        renderStandings();

    }


    if (
        typeof showPage ===
        "function"
    ) {

        showPage("standings");

    }

}


/* =========================================================
   SAVE
   ========================================================= */

function saveGameSilent() {

    localStorage.setItem(
        "mplWorldManagerSave",
        JSON.stringify(game)
    );

}


/* =========================================================
   INITIALIZE
   ========================================================= */

function initializeMPLSeason() {

    if (
        !game.week ||
        game.week < 1 ||
        game.week > 18
    ) {

        game.week = 1;

    }


    if (
        !game.standings ||
        Object.keys(
            game.standings
        ).length !== 9
    ) {

        createEmptyStandings();

    }


    /*
      SELALU pastikan jadwal
      MPL = 72 pertandingan.
    */

    if (
        !game.schedule ||
        game.schedule.length !== 72
    ) {

        generateMPLSchedule();

    }


    saveGameSilent();

}


/* =========================================================
   START
   ========================================================= */

initializeMPLSeason();

console.log(
    "MPL WORLD MANAGER READY"
);

console.log(
    "Season:",
    game.season
);

console.log(
    "Week:",
    game.week
);

console.log(
    "Schedule:",
    game.schedule.length,
    "matches"
);
/* =========================================================
   MPL INDONESIA — PLAYOFF TOP 6
   Paste kode ini di PALING BAWAH game.js
   ========================================================= */


/* =========================================================
   PLAYOFF DATA
   ========================================================= */

function createMPLPlayoffs() {

    const standings = getSortedStandings();

    if (!standings || standings.length < 6) {
        alert("Regular Season belum selesai.");
        return;
    }

    const top6 = standings.slice(0, 6);

    game.playoffs = {

        season: game.season,

        status: "active",

        champion: null,

        runnerUp: null,

        teams: top6.map((s, index) => ({
            seed: index + 1,
            teamId: s.teamId
        })),

        matches: [

            /* =========================================
               ROUND 1
               Seed 3 vs Seed 6
               Seed 4 vs Seed 5
               ========================================= */

            {
                id: "PO1",
                round: "Round 1",
                label: "Seed 3 vs Seed 6",
                teamA: top6[2].teamId,
                teamB: top6[5].teamId,
                scoreA: 0,
                scoreB: 0,
                played: false,
                winner: null,
                format: "BO5"
            },

            {
                id: "PO2",
                round: "Round 1",
                label: "Seed 4 vs Seed 5",
                teamA: top6[3].teamId,
                teamB: top6[4].teamId,
                scoreA: 0,
                scoreB: 0,
                played: false,
                winner: null,
                format: "BO5"
            }

        ],

        winners: [],

        losers: [],

        grandFinal: null

    };


    saveGameSilent();

}


/* =========================================================
   START PLAYOFF
   ========================================================= */

function startMPLPlayoffs() {

    if (
        game.week < 18 ||
        !isCurrentWeekComplete()
    ) {

        alert(
            "Selesaikan Regular Season terlebih dahulu."
        );

        return;

    }


    createMPLPlayoffs();

    renderPlayoffs();

    showPage("playoffs");

}


/* =========================================================
   AMBIL PLAYOFF MATCH
   ========================================================= */

function getPlayoffMatch(id) {

    if (
        !game.playoffs ||
        !game.playoffs.matches
    ) {

        return null;

    }


    return game.playoffs.matches.find(
        match => match.id === id
    );

}


/* =========================================================
   TAMBAH MATCH PLAYOFF
   ========================================================= */

function addPlayoffMatch(
    id,
    round,
    label,
    teamA,
    teamB,
    format = "BO5"
) {

    game.playoffs.matches.push({

        id: id,

        round: round,

        label: label,

        teamA: teamA,

        teamB: teamB,

        scoreA: 0,

        scoreB: 0,

        played: false,

        winner: null,

        format: format

    });

}


/* =========================================================
   SIMULASI BO5
   ========================================================= */

function simulateBo5(teamA, teamB) {

    let scoreA = 0;

    let scoreB = 0;

    const games = [];


    while (
        scoreA < 3 &&
        scoreB < 3
    ) {

        const gameResult =
            simulateGame(
                teamA,
                teamB
            );


        games.push({

            game:
                games.length + 1,

            winner:
                gameResult.winner,

            loser:
                gameResult.loser,

            killsWinner:
                gameResult.killsWinner,

            killsLoser:
                gameResult.killsLoser

        });


        if (
            gameResult.winner === teamA
        ) {

            scoreA++;

        } else {

            scoreB++;

        }

    }


    return {

        teamA: teamA,

        teamB: teamB,

        scoreA: scoreA,

        scoreB: scoreB,

        winner:
            scoreA > scoreB
            ? teamA
            : teamB,

        loser:
            scoreA > scoreB
            ? teamB
            : teamA,

        games: games

    };

}


/* =========================================================
   SIMULASI BO7
   ========================================================= */

function simulateBo7(teamA, teamB) {

    let scoreA = 0;

    let scoreB = 0;

    const games = [];


    while (
        scoreA < 4 &&
        scoreB < 4
    ) {

        const gameResult =
            simulateGame(
                teamA,
                teamB
            );


        games.push({

            game:
                games.length + 1,

            winner:
                gameResult.winner,

            loser:
                gameResult.loser,

            killsWinner:
                gameResult.killsWinner,

            killsLoser:
                gameResult.killsLoser

        });


        if (
            gameResult.winner === teamA
        ) {

            scoreA++;

        } else {

            scoreB++;

        }

    }


    return {

        teamA: teamA,

        teamB: teamB,

        scoreA: scoreA,

        scoreB: scoreB,

        winner:
            scoreA > scoreB
            ? teamA
            : teamB,

        loser:
            scoreA > scoreB
            ? teamB
            : teamA,

        games: games

    };

}


/* =========================================================
   MAIN PLAYOFF MATCH
   ========================================================= */

function playPlayoffMatch(id) {

    const match =
        getPlayoffMatch(id);


    if (!match) {

        alert(
            "Match playoff tidak ditemukan."
        );

        return;

    }


    if (match.played) {

        alert(
            "Match ini sudah dimainkan."
        );

        return;

    }


    if (!match.teamA || !match.teamB) {

        alert(
            "Tim untuk pertandingan belum tersedia."
        );

        return;

    }


    let result;


    if (match.format === "BO7") {

        result =
            simulateBo7(
                match.teamA,
                match.teamB
            );

    } else {

        result =
            simulateBo5(
                match.teamA,
                match.teamB
            );

    }


    match.scoreA =
        result.scoreA;

    match.scoreB =
        result.scoreB;

    match.winner =
        result.winner;

    match.loser =
        result.loser;

    match.games =
        result.games;

    match.played =
        true;


    game.currentMatch =
        result;


    const mvp =
        calculateMVP(result);


    game.currentMatch.mvp =
        mvp
        ? mvp.id
        : null;


    saveGameSilent();


    alert(
        "🏆 " +
        getTeam(result.winner).name +
        " menang " +
        result.scoreA +
        "-" +
        result.scoreB
    );


    updatePlayoffBracket();

    renderPlayoffs();

    showPage("playoffs");

}


/* =========================================================
   UPDATE BRACKET
   ========================================================= */

function updatePlayoffBracket() {

    const p =
        game.playoffs;


    if (!p) return;


    const po1 =
        getPlayoffMatch("PO1");

    const po2 =
        getPlayoffMatch("PO2");


    /*
      Setelah Round 1 selesai,
      Seed 1 dan Seed 2 masuk.
    */

    if (
        po1 &&
        po2 &&
        po1.played &&
        po2.played
    ) {

        const winnerPO1 =
            po1.winner;

        const winnerPO2 =
            po2.winner;


        const loserPO1 =
            po1.loser;

        const loserPO2 =
            po2.loser;


        p.winners = [
            winnerPO1,
            winnerPO2
        ];


        p.losers = [
            loserPO1,
            loserPO2
        ];


        /*
          Seed 1 vs pemenang 4/5
        */

        if (
            !getPlayoffMatch("PO3")
        ) {

            const seed1 =
                p.teams[0].teamId;

            const seed2 =
                p.teams[1].teamId;


            addPlayoffMatch(
                "PO3",
                "Upper Round 1",
                "Seed 1 vs Winner PO2",
                seed1,
                winnerPO2,
                "BO5"
            );


            /*
              Seed 2 vs pemenang 3/6
            */

            addPlayoffMatch(
                "PO4",
                "Upper Round 1",
                "Seed 2 vs Winner PO1",
                seed2,
                winnerPO1,
                "BO5"
            );


            /*
              Loser PO1 vs Loser PO2
            */

            addPlayoffMatch(
                "PO5",
                "Lower Round 1",
                "Lower Round 1",
                loserPO1,
                loserPO2,
                "BO5"
            );

        }

    }


    const po3 =
        getPlayoffMatch("PO3");

    const po4 =
        getPlayoffMatch("PO4");

    const po5 =
        getPlayoffMatch("PO5");


    /*
      Setelah Upper Round 1
    */

    if (
        po3 &&
        po4 &&
        po5 &&
        po3.played &&
        po4.played &&
        po5.played
    ) {

        /*
          Upper Final
        */

        if (
            !getPlayoffMatch("PO6")
        ) {

            addPlayoffMatch(
                "PO6",
                "Upper Final",
                "Upper Final",
                po3.winner,
                po4.winner,
                "BO5"
            );


            /*
              Lower Round 2
            */

            addPlayoffMatch(
                "PO7",
                "Lower Round 2",
                "Lower Round 2",
                po3.loser,
                po5.winner,
                "BO5"
            );


            /*
              Lower Round 3
            */

            addPlayoffMatch(
                "PO8",
                "Lower Round 3",
                "Lower Round 3",
                po4.loser,
                po5.loser,
                "BO5"
            );

        }

    }


    const po6 =
        getPlayoffMatch("PO6");

    const po7 =
        getPlayoffMatch("PO7");

    const po8 =
        getPlayoffMatch("PO8");


    /*
      Setelah Lower Round 2 & 3
    */

    if (
        po6 &&
        po7 &&
        po8 &&
        po6.played &&
        po7.played &&
        po8.played
    ) {

        if (
            !getPlayoffMatch("PO9")
        ) {

            /*
              Lower Final
            */

            addPlayoffMatch(
                "PO9",
                "Lower Final",
                "Lower Final",
                po7.winner,
                po8.winner,
                "BO7"
            );

        }

    }


    /*
      Upper Final selesai
      + Lower Final selesai
      = Grand Final
    */

    if (
        po6 &&
        po9ExistsAndPlayed()
    ) {

        const po9 =
            getPlayoffMatch("PO9");


        if (
            po6.played &&
            po9.played &&
            !getPlayoffMatch("PO10")
        ) {

            addPlayoffMatch(
                "PO10",
                "Grand Final",
                "GRAND FINAL",
                po6.winner,
                po9.winner,
                "BO7"
            );

        }

    }


    /*
      Grand Final selesai
    */

    const grandFinal =
        getPlayoffMatch("PO10");


    if (
        grandFinal &&
        grandFinal.played
    ) {

        finishMPLPlayoffs(
            grandFinal.winner,
            grandFinal.loser
        );

    }


    saveGameSilent();

}


/* =========================================================
   CEK LOWER FINAL
   ========================================================= */

function po9ExistsAndPlayed() {

    const po9 =
        getPlayoffMatch("PO9");


    return (
        po9 &&
        po9.played
    );

}


/* =========================================================
   SELESAI PLAYOFF
   ========================================================= */

function finishMPLPlayoffs(
    championId,
    runnerUpId
) {

    if (
        game.playoffs.champion
    ) {

        return;

    }


    game.playoffs.status =
        "finished";


    game.playoffs.champion =
        championId;


    game.playoffs.runnerUp =
        runnerUpId;


    /*
      Tambah gelar MPL
    */

    recordMPLChampion(
        championId
    );


    /*
      Simpan history
    */

    game.history.seasons.push({

        season:
            game.season,

        mplChampion:
            championId,

        mplRunnerUp:
            runnerUpId

    });


    saveGameSilent();


    alert(
        "🏆🏆🏆 GRAND FINAL SELESAI!\n\n" +

        "JUARA MPL INDONESIA\n" +

        getTeam(championId).name +

        "\n\n🥈 Runner Up\n" +

        getTeam(runnerUpId).name +

        "\n\n⭐ Gelar MPL bertambah!"
    );


    renderPlayoffs();

}


/* =========================================================
   RECORD MPL CHAMPION
   ========================================================= */

function recordMPLChampion(
    teamId
) {

    const team =
        getTeam(teamId);


    if (!team) return;


    team.mplTitles =
        (team.mplTitles || 0) + 1;


    team.stars =
        (team.stars || 0) + 1;


    game.history.mpl.push({

        season:
            game.season,

        teamId:
            teamId

    });

}


/* =========================================================
   RENDER PLAYOFF
   ========================================================= */

function renderPlayoffs() {

    const box =
        document.getElementById(
            "playoffsContainer"
        );


    if (!box) return;


    if (!game.playoffs) {

        box.innerHTML = `

            <div class="card">

                <h2>
                    🏆 MPL Playoffs
                </h2>

                <p>
                    Playoffs belum dimulai.
                </p>

                <button
                    class="main-btn"
                    onclick="
                        startMPLPlayoffs()
                    "
                >

                    🔥 MULAI PLAYOFF

                </button>

            </div>

        `;

        return;

    }


    let html = `

        <div class="card">

            <h2>
                🏆 MPL INDONESIA PLAYOFFS
            </h2>

            <p class="muted">

                Season ${game.season}

            </p>

        </div>

    `;


    /*
      Tampilkan semua match
    */

    game.playoffs.matches
        .forEach(match => {

            const teamA =
                match.teamA
                ? getTeam(match.teamA)
                : null;


            const teamB =
                match.teamB
                ? getTeam(match.teamB)
                : null;


            html += `

                <div class="card">

                    <div class="mini">

                        ${match.round}

                    </div>

                    <h3>

                        ${match.label}

                    </h3>


                    <div
                        style="
                        display:flex;
                        justify-content:
                        space-between;
                        align-items:center;
                        "
                    >

                        <b>
                            ${
                                teamA
                                ? teamA.short
                                : "TBD"
                            }
                        </b>


                        <strong>

                            ${
                                match.played
                                ? match.scoreA +
                                  " - " +
                                  match.scoreB
                                : "VS"
                            }

                        </strong>


                        <b>
                            ${
                                teamB
                                ? teamB.short
                                : "TBD"
                            }
                        </b>

                    </div>


                    <p class="mini">

                        Format:
                        ${match.format}

                    </p>


                    ${
                        match.played

                        ? `

                            <p
                                style="
                                text-align:center;
                                "
                            >

                                🏆 Winner:
                                <b>
                                    ${
                                        getTeam(
                                            match.winner
                                        ).name
                                    }
                                </b>

                            </p>

                        `

                        : (

                            teamA &&
                            teamB

                        )

                        ? `

                            <button
                                class="main-btn"
                                onclick="
                                    playPlayoffMatch(
                                        '${match.id}'
                                    )
                                "
                            >

                                🎮 MAINKAN

                            </button>

                        `

                        : `

                            <p
                                class="muted"
                            >

                                ⏳ Menunggu
                                hasil pertandingan
                                sebelumnya.

                            </p>

                        `

                    }

                </div>

            `;

        });


    if (
        game.playoffs.champion
    ) {

        html += `

            <div class="card">

                <h2>
                    🏆 JUARA MPL
                </h2>

                <div
                    style="
                    text-align:center;
                    font-size:24px;
                    padding:20px;
                    "
                >

                    ${
                        getTeam(
                            game.playoffs.champion
                        ).name
                    }

                    ⭐

                </div>

                <p
                    style="
                    text-align:center;
                    "
                >

                    Selamat menjadi
                    Juara MPL Indonesia!

                </p>

            </div>

        `;

    }


    box.innerHTML =
        html;

}


/* =========================================================
   OVERRIDE FINISH REGULAR SEASON
   ========================================================= */

const oldFinishRegularSeason =
    finishMPLRegularSeason;


finishMPLRegularSeason =
function() {

    oldFinishRegularSeason();


    setTimeout(() => {

        if (
            game.regularSeasonResult &&
            game.regularSeasonResult.top6
        ) {

            createMPLPlayoffs();

            renderPlayoffs();

        }

    }, 100);

};


/* =========================================================
   INITIALIZE PLAYOFF
   ========================================================= */

if (!game.playoffs) {

    game.playoffs = null;

}


/* =========================================================
   SAVE
   ========================================================= */

saveGameSilent();
