/* =========================================================
   MPL WORLD MANAGER
   DATABASE MPL INDONESIA - SEASON 18
   ========================================================= */

const SAVE_KEY = "mpl_world_manager_s18";


// =========================================================
// GAME DATA
// =========================================================

const game = {

    version: 1,

    season: 18,

    region: "Indonesia",

    league: "MPL Indonesia",

    week: 1,

    managerTeam: null,

    budget: 5000000000,

    phase: "regular",

    teams: [],

    players: [],

    staff: [],

    standings: [],

    schedule: [],

    history: [],

    currentMatch: null

};


// =========================================================
// TEAMS
// =========================================================

game.teams = [

    {
        id: "rrq",
        name: "RRQ Hoshi",
        short: "RRQ",

        region: "Indonesia",

        reputation: 94,

        budget: 5000000000,

        morale: 85,

        chemistry: 82,

        mplTitles: 5,

        worldTitles: 0,

        active: true
    },

    {
        id: "onic",
        name: "ONIC",
        short: "ONIC",

        region: "Indonesia",

        reputation: 96,

        budget: 5000000000,

        morale: 87,

        chemistry: 88,

        mplTitles: 5,

        worldTitles: 1,

        active: true
    },

    {
        id: "evos",
        name: "EVOS",
        short: "EVOS",

        region: "Indonesia",

        reputation: 90,

        budget: 4500000000,

        morale: 82,

        chemistry: 80,

        mplTitles: 2,

        worldTitles: 1,

        active: true
    },

    {
        id: "btr",
        name: "Bigetron by Vitality",
        short: "BTR",

        region: "Indonesia",

        reputation: 91,

        budget: 4500000000,

        morale: 86,

        chemistry: 87,

        mplTitles: 1,

        worldTitles: 0,

        active: true
    },

    {
        id: "alterego",
        name: "Alter Ego",
        short: "AE",

        region: "Indonesia",

        reputation: 84,

        budget: 4000000000,

        morale: 80,

        chemistry: 79,

        mplTitles: 0,

        worldTitles: 0,

        active: true
    },

    {
        id: "dewa",
        name: "Dewa United Esports",
        short: "DEWA",

        region: "Indonesia",

        reputation: 78,

        budget: 3500000000,

        morale: 76,

        chemistry: 77,

        mplTitles: 0,

        worldTitles: 0,

        active: true
    },

    {
        id: "geek",
        name: "Geek Fam ID",
        short: "GEEK",

        region: "Indonesia",

        reputation: 79,

        budget: 3500000000,

        morale: 78,

        chemistry: 76,

        mplTitles: 0,

        worldTitles: 0,

        active: true
    },

    {
        id: "navi",
        name: "Natus Vincere",
        short: "NAVI",

        region: "Indonesia",

        reputation: 82,

        budget: 4000000000,

        morale: 80,

        chemistry: 78,

        mplTitles: 0,

        worldTitles: 0,

        active: true
    },

    {
        id: "tlid",
        name: "Team Liquid ID",
        short: "TLID",

        region: "Indonesia",

        reputation: 88,

        budget: 4500000000,

        morale: 83,

        chemistry: 84,

        mplTitles: 1,

        worldTitles: 0,

        active: true
    }

];


// =========================================================
// PLAYER DATABASE
// =========================================================

game.players = [

    // =====================================================
    // RRQ
    // =====================================================

    {
        id: "rrq_l =",
        name: "Lynchh",
        teamId: "rrq",
        role: "EXP",
        nationality: "Indonesia",
        rating: 84,
        potential: 90,
        salary: 180000000,
        morale: 85,
        status: "active"
    },

    {
        id: "rrq_demonkite",
        name: "Demonkite",
        teamId: "rrq",
        role: "Jungler",
        nationality: "Philippines",
        rating: 91,
        potential: 94,
        salary: 250000000,
        morale: 88,
        status: "active"
    },

    {
        id: "rrq_rinz",
        name: "Rinz",
        teamId: "rrq",
        role: "Mid",
        nationality: "Indonesia",
        rating: 86,
        potential: 93,
        salary: 190000000,
        morale: 85,
        status: "active"
    },

    {
        id: "rrq_sutsujin",
        name: "Sutsujin",
        teamId: "rrq",
        role: "Gold",
        nationality: "Indonesia",
        rating: 88,
        potential: 91,
        salary: 210000000,
        morale: 84,
        status: "active"
    },

    {
        id: "rrq_kuroky",
        name: "Kuroky",
        teamId: "rrq",
        role: "Gold",
        nationality: "Indonesia",
        rating: 80,
        potential: 88,
        salary: 140000000,
        morale: 82,
        status: "active"
    },

    {
        id: "rrq_idok",
        name: "Idok",
        teamId: "rrq",
        role: "Roamer",
        nationality: "Indonesia",
        rating: 87,
        potential: 92,
        salary: 200000000,
        morale: 86,
        status: "active"
    },

    // =====================================================
    // ONIC
    // =====================================================

    {
        id: "onic_lutpiii",
        name: "Lutpiii",
        teamId: "onic",
        role: "EXP",
        nationality: "Indonesia",
        rating: 89,
        potential: 93,
        salary: 220000000,
        morale: 88,
        status: "active"
    },

    {
        id: "onic_kairi",
        name: "Kairi",
        teamId: "onic",
        role: "Jungler",
        nationality: "Philippines",
        rating: 96,
        potential: 97,
        salary: 350000000,
        morale: 91,
        status: "active"
    },

    {
        id: "onic_sanz",
        name: "S A N Z",
        teamId: "onic",
        role: "Mid",
        nationality: "Indonesia",
        rating: 94,
        potential: 95,
        salary: 320000000,
        morale: 90,
        status: "active"
    },

    {
        id: "onic_kelra",
        name: "Kelra",
        teamId: "onic",
        role: "Gold",
        nationality: "Philippines",
        rating: 96,
        potential: 98,
        salary: 350000000,
        morale: 92,
        status: "active"
    },

    {
        id: "onic_kiboy",
        name: "Kiboy",
        teamId: "onic",
        role: "Roamer",
        nationality: "Indonesia",
        rating: 94,
        potential: 96,
        salary: 310000000,
        morale: 91,
        status: "active"
    },

    {
        id: "onic_samuel",
        name: "SamueL",
        teamId: "onic",
        role: "Roamer",
        nationality: "Indonesia",
        rating: 82,
        potential: 89,
        salary: 150000000,
        morale: 83,
        status: "active"
    },

    // =====================================================
    // EVOS
    // =====================================================

    {
        id: "evos_vell",
        name: "Vell",
        teamId: "evos",
        role: "EXP",
        nationality: "Indonesia",
        rating: 84,
        potential: 90,
        salary: 170000000,
        morale: 82,
        status: "active"
    },

    {
        id: "evos_alberttt",
        name: "Alberttt",
        teamId: "evos",
        role: "Jungler",
        nationality: "Indonesia",
        rating: 92,
        potential: 94,
        salary: 280000000,
        morale: 88,
        status: "active"
    },

    {
        id: "evos_treacky",
        name: "Treacky",
        teamId: "evos",
        role: "Mid",
        nationality: "Indonesia",
        rating: 83,
        potential: 91,
        salary: 170000000,
        morale: 82,
        status: "active"
    },

    {
        id: "evos_erlan",
        name: "Erlan",
        teamId: "evos",
        role: "Gold",
        nationality: "Indonesia",
        rating: 85,
        potential: 91,
        salary: 180000000,
        morale: 83,
        status: "active"
    },

    {
        id: "evos_muezzaa",
        name: "Muezzaa",
        teamId: "evos",
        role: "Roamer",
        nationality: "Indonesia",
        rating: 82,
        potential: 88,
        salary: 150000000,
        morale: 80,
        status: "active"
    },

    {
        id: "evos_rendyy",
        name: "Rendyy",
        teamId: "evos",
        role: "EXP",
        nationality: "Indonesia",
        rating: 78,
        potential: 87,
        salary: 120000000,
        morale: 80,
        status: "active"
    },

    // =====================================================
    // BIGETRON
    // =====================================================

    {
        id: "btr_shogun",
        name: "Shogun",
        teamId: "btr",
        role: "EXP",
        nationality: "Indonesia",
        rating: 89,
        potential: 93,
        salary: 210000000,
        morale: 88,
        status: "active"
    },

    {
        id: "btr_nnael",
        name: "Nnael",
        teamId: "btr",
        role: "Jungler",
        nationality: "Indonesia",
        rating: 91,
        potential: 94,
        salary: 240000000,
        morale: 89,
        status: "active"
    },

    {
        id: "btr_moreno",
        name: "Moreno",
        teamId: "btr",
        role: "Mid",
        nationality: "Indonesia",
        rating: 90,
        potential: 94,
        salary: 230000000,
        morale: 88,
        status: "active"
    },

    {
        id: "btr_ryzaa",
        name: "Ryzaa",
        teamId: "btr",
        role: "Mid",
        nationality: "Indonesia",
        rating: 82,
        potential: 90,
        salary: 150000000,
        morale: 82,
        status: "active"
    },

    {
        id: "btr_emann",
        name: "EMANN",
        teamId: "btr",
        role: "Gold",
        nationality: "Philippines",
        rating: 90,
        potential: 93,
        salary: 250000000,
        morale: 87,
        status: "active"
    },

    {
        id: "btr_pinnn",
        name: "Pinnn",
        teamId: "btr",
        role: "Gold",
        nationality: "Indonesia",
        rating: 81,
        potential: 89,
        salary: 140000000,
        morale: 81,
        status: "active"
    },

    {
        id: "btr_finn",
        name: "Finn",
        teamId: "btr",
        role: "Roamer",
        nationality: "Indonesia",
        rating: 88,
        potential: 92,
        salary: 200000000,
        morale: 87,
        status: "active"
    },

    // =====================================================
    // ALTER EGO
    // =====================================================

    {
        id: "ae_nino",
        name: "Nino",
        teamId: "alterego",
        role: "EXP",
        nationality: "Indonesia",
        rating: 88,
        potential: 91,
        salary: 190000000,
        morale: 83,
        status: "active"
    },

    {
        id: "ae_yazukee",
        name: "Yazukee",
        teamId: "alterego",
        role: "Jungler",
        nationality: "Indonesia",
        rating: 84,
        potential: 92,
        salary: 170000000,
        morale: 82,
        status: "active"
    },

    {
        id: "ae_reyy",
        name: "Reyy",
        teamId: "alterego",
        role: "Jungler",
        nationality: "Indonesia",
        rating: 79,
        potential: 88,
        salary: 130000000,
        morale: 80,
        status: "active"
    },

    {
        id: "ae_hijumee",
        name: "Hijumee",
        teamId: "alterego",
        role: "Mid",
        nationality: "Indonesia",
        rating: 86,
        potential: 92,
        salary: 180000000,
        morale: 84,
        status: "active"
    },

    {
        id: "ae_nathzz",
        name: "Nathzz",
        teamId: "alterego",
        role: "Gold",
        nationality: "Indonesia",
        rating: 84,
        potential: 90,
        salary: 170000000,
        morale: 82,
        status: "active"
    },

    {
        id: "ae_roamer",
        name: "Yume",
        teamId: "alterego",
        role: "Roamer",
        nationality: "Indonesia",
        rating: 80,
        potential: 88,
        salary: 140000000,
        morale: 79,
        status: "active"
    },

    // =====================================================
    // DEWA UNITED
    // =====================================================

    {
        id: "dewa_qinn",
        name: "QINN",
        teamId: "dewa",
        role: "EXP",
        nationality: "Philippines",
        rating: 82,
        potential: 88,
        salary: 150000000,
        morale: 78,
        status: "active"
    },

    {
        id: "dewa_kayn",
        name: "Kayn",
        teamId: "dewa",
        role: "Jungler",
        nationality: "Philippines",
        rating: 81,
        potential: 89,
        salary: 150000000,
        morale: 78,
        status: "active"
    },

    {
        id: "dewa_octa",
        name: "Octa",
        teamId: "dewa",
        role: "Mid",
        nationality: "Indonesia",
        rating: 80,
        potential: 87,
        salary: 140000000,
        morale: 77,
        status: "active"
    },

    {
        id: "dewa_maybeee",
        name: "Maybeee",
        teamId: "dewa",
        role: "Gold",
        nationality: "Indonesia",
        rating: 81,
        potential: 89,
        salary: 150000000,
        morale: 78,
        status: "active"
    },

    {
        id: "dewa_kesuuu",
        name: "KESUUU",
        teamId: "dewa",
        role: "Roamer",
        nationality: "Indonesia",
        rating: 79,
        potential: 87,
        salary: 130000000,
        morale: 77,
        status: "active"
    },

    // =====================================================
    // GEEK FAM
    // =====================================================

    {
        id: "geek_marcel",
        name: "MarceL",
        teamId: "geek",
        role: "EXP",
        nationality: "Indonesia",
        rating: 81,
        potential: 89,
        salary: 140000000,
        morale: 78,
        status: "active"
    },

    {
        id: "geek_febriii",
        name: "Febriii",
        teamId: "geek",
        role: "EXP",
        nationality: "Indonesia",
        rating: 77,
        potential: 87,
        salary: 110000000,
        morale: 76,
        status: "active"
    },

    {
        id: "geek_nazara",
        name: "Nazara",
        teamId: "geek",
        role: "Jungler",
        nationality: "Indonesia",
        rating: 81,
        potential: 90,
        salary: 140000000,
        morale: 79,
        status: "active"
    },

    {
        id: "geek_aboy",
        name: "A B O Y",
        teamId: "geek",
        role: "Mid",
        nationality: "Indonesia",
        rating: 84,
        potential: 89,
        salary: 160000000,
        morale: 80,
        status: "active"
    },

    {
        id: "geek_kennzyy",
        name: "KennzyySkie",
        teamId: "geek",
        role: "Gold",
        nationality: "Indonesia",
        rating: 80,
        potential: 88,
        salary: 130000000,
        morale: 77,
        status: "active"
    },

    {
        id: "geek_audytzy",
        name: "AudyTzy",
        teamId: "geek",
        role: "Roamer",
        nationality: "Indonesia",
        rating: 79,
        potential: 87,
        salary: 120000000,
        morale: 77,
        status: "active"
    },

    // =====================================================
    // NAVI
    // =====================================================

    {
        id: "navi_xmagic",
        name: "XMagic",
        teamId: "navi",
        role: "EXP",
        nationality: "Indonesia",
        rating: 81,
        potential: 89,
        salary: 140000000,
        morale: 80,
        status: "active"
    },

    {
        id: "navi_jungler",
        name: "Yve",
        teamId: "navi",
        role: "Jungler",
        nationality: "Indonesia",
        rating: 82,
        potential: 90,
        salary: 150000000,
        morale: 80,
        status: "active"
    },

    {
        id: "navi_uk1r",
        name: "UK1R",
        teamId: "navi",
        role: "Mid",
        nationality: "Philippines",
        rating: 84,
        potential: 91,
        salary: 170000000,
        morale: 82,
        status: "active"
    },

    {
        id: "navi_gold",
        name: "Yve",
        teamId: "navi",
        role: "Gold",
        nationality: "Indonesia",
        rating: 80,
        potential: 88,
        salary: 130000000,
        morale: 78,
        status: "active"
    },

    {
        id: "navi_roamer",
        name: "Kyyro",
        teamId: "navi",
        role: "Roamer",
        nationality: "Indonesia",
        rating: 79,
        potential: 88,
        salary: 130000000,
        morale: 78,
        status: "active"
    },

    // =====================================================
    // TEAM LIQUID ID
    // =====================================================

    {
        id: "tlid_aran",
        name: "Aran",
        teamId: "tlid",
        role: "EXP",
        nationality: "Indonesia",
        rating: 87,
        potential: 91,
        salary: 190000000,
        morale: 85,
        status: "active"
    },

    {
        id: "tlid_aredlavv",
        name: "Aredlavv",
        teamId: "tlid",
        role: "EXP",
        nationality: "Indonesia",
        rating: 80,
        potential: 88,
        salary: 130000000,
        morale: 80,
        status: "active"
    },

    {
        id: "tlid_kevinn",
        name: "Kevinn",
        teamId: "tlid",
        role: "Jungler",
        nationality: "Indonesia",
        rating: 87,
        potential: 92,
        salary: 190000000,
        morale: 85,
        status: "active"
    },

    {
        id: "tlid_drichel",
        name: "Drichel",
        teamId: "tlid",
        role: "Mid",
        nationality: "Indonesia",
        rating: 84,
        potential: 91,
        salary: 170000000,
        morale: 83,
        status: "active"
    },

    {
        id: "tlid_kyou",
        name: "Kyou",
        teamId: "tlid",
        role: "Gold",
        nationality: "Indonesia",
        rating: 88,
        potential: 92,
        salary: 200000000,
        morale: 86,
        status: "active"
    },

    {
        id: "tlid_lyoni",
        name: "Lyoni",
        teamId: "tlid",
        role: "Roamer",
        nationality: "Indonesia",
        rating: 85,
        potential: 90,
        salary: 180000000,
        morale: 84,
        status: "active"
    }

];


// =========================================================
// STAFF DATABASE
// =========================================================

game.staff = [

    {
        id: "rrq_adi",
        name: "Adi",
        teamId: "rrq",
        role: "Head Coach",
        nationality: "Indonesia",
        rating: 90
    },

    {
        id: "rrq_caleb",
        name: "Caleb",
        teamId: "rrq",
        role: "Assistant Coach",
        nationality: "Indonesia",
        rating: 84
    },

    {
        id: "evos_aldo",
        name: "Aldo",
        teamId: "evos",
        role: "Head Coach",
        nationality: "Indonesia",
        rating: 86
    },

    {
        id: "btr_theonael",
        name: "Theonael",
        teamId: "btr",
        role: "Head Coach",
        nationality: "Indonesia",
        rating: 88
    },

    {
        id: "tlid_honjaw",
        name: "Honjaw",
        teamId: "tlid",
        role: "Head Coach",
        nationality: "Indonesia",
        rating: 87
    },

    {
        id: "tlid_pahlevi",
        name: "Pahlevi",
        teamId: "tlid",
        role: "Assistant Coach",
        nationality: "Indonesia",
        rating: 82
    }

];


// =========================================================
// STANDINGS
// =========================================================

function createStandings(){

    game.standings =
        game.teams.map(function(team){

            return {

                teamId: team.id,

                played: 0,

                wins: 0,

                losses: 0,

                gameWins: 0,

                gameLosses: 0,

                points: 0,

                diff: 0

            };

        });

}


function getTeam(teamId){

    return game.teams.find(function(team){

        return team.id === teamId;

    });

}


function getPlayer(playerId){

    return game.players.find(function(player){

        return player.id === playerId;

    });

}


function getTeamPlayers(teamId){

    return game.players.filter(function(player){

        return player.teamId === teamId;

    });

}


function getTeamStaff(teamId){

    return game.staff.filter(function(staff){

        return staff.teamId === teamId;

    });

}


// =========================================================
// MONEY
// =========================================================

function formatMoney(value){

    return new Intl.NumberFormat(
        "id-ID",
        {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0
        }
    ).format(value);

}


// =========================================================
// RANDOM
// =========================================================

function random(min, max){

    return Math.floor(
        Math.random() * (max - min + 1)
    ) + min;

}


// =========================================================
// TEAM POWER
// =========================================================

function teamPower(teamId){

    const players =
        getTeamPlayers(teamId)
        .filter(function(player){

            return player.status === "active";

        });

    if(players.length === 0){

        return 50;

    }

    const total =
        players.reduce(
            function(sum, player){

                return sum + player.rating;

            },
            0
        );

    const average =
        total / players.length;

    const team =
        getTeam(teamId);

    return (

        average

        + (team.chemistry * 0.08)

        + (team.morale * 0.05)

        + (team.reputation * 0.04)

        + random(-3, 3)

    );

}


// =========================================================
// BO3 SIMULATION
// =========================================================

function simulateBo3(homeId, awayId){

    let homeGames = 0;

    let awayGames = 0;

    const games = [];

    while(
        homeGames < 2 &&
        awayGames < 2
    ){

        const homePower =
            teamPower(homeId);

        const awayPower =
            teamPower(awayId);

        const homeWin =
            homePower >= awayPower;

        if(homeWin){

            homeGames++;

        }else{

            awayGames++;

        }

        games.push({

            game:
                games.length + 1,

            winner:
                homeWin
                    ? homeId
                    : awayId

        });

    }

    const winner =
        homeGames === 2
            ? homeId
            : awayId;

    const losingTeam =
        winner === homeId
            ? awayId
            : homeId;

    const winnerPlayers =
        getTeamPlayers(winner)
        .filter(function(player){

            return player.status === "active";

        });

    let mvp =
        winnerPlayers[0];

    winnerPlayers.forEach(function(player){

        if(
            player.rating >
            mvp.rating
        ){

            mvp = player;

        }

    });

    return {

        homeId: homeId,

        awayId: awayId,

        homeGames: homeGames,

        awayGames: awayGames,

        winner: winner,

        loser: losingTeam,

        mvp: mvp
            ? mvp.name
            : "-",

        games: games

    };

}


// =========================================================
// APPLY RESULT
// =========================================================

function applyMatchResult(
    homeId,
    awayId,
    result
){

    const home =
        game.standings.find(
            function(row){

                return row.teamId === homeId;

            }
        );

    const away =
        game.standings.find(
            function(row){

                return row.teamId === awayId;

            }
        );

    if(!home || !away){

        return;

    }

    home.played++;

    away.played++;

    home.gameWins +=
        result.homeGames;

    home.gameLosses +=
        result.awayGames;

    away.gameWins +=
        result.awayGames;

    away.gameLosses +=
        result.homeGames;

    home.diff =
        home.gameWins -
        home.gameLosses;

    away.diff =
        away.gameWins -
        away.gameLosses;


    if(result.winner === homeId){

        home.wins++;

        home.points++;

        away.losses++;

    }else{

        away.wins++;

        away.points++;

        home.losses++;

    }


    game.history.push({

        type: "match",

        season: game.season,

        week: game.week,

        home: homeId,

        away: awayId,

        homeGames: result.homeGames,

        awayGames: result.awayGames,

        winner: result.winner,

        mvp: result.mvp

    });

}


// =========================================================
// SORT STANDINGS
// =========================================================

function sortStandings(){

    game.standings.sort(
        function(a, b){

            if(
                b.points !== a.points
            ){

                return (
                    b.points -
                    a.points
                );

            }

            if(
                b.diff !== a.diff
            ){

                return (
                    b.diff -
                    a.diff
                );

            }

            return (
                b.gameWins -
                a.gameWins
            );

        }
    );

}


// =========================================================
// SCHEDULE GENERATOR
// =========================================================

function generateSchedule(){

    game.schedule = [];

    const ids =
        game.teams.map(function(team){

            return team.id;

        });


    let teams = ids.slice();

    teams.push(null);


    const totalTeams =
        teams.length;

    const rounds =
        totalTeams - 1;


    const firstHalf = [];


    for(
        let round = 0;
        round < rounds;
        round++
    ){

        const matches = [];

        for(
            let i = 0;
            i < totalTeams / 2;
            i++
        ){

            const home =
                teams[i];

            const away =
                teams[
                    totalTeams - 1 - i
                ];


            if(
                home !== null &&
                away !== null
            ){

                matches.push({

                    week:
                        round + 1,

                    home:
                        home,

                    away:
                        away,

                    played: false

                });

            }

        }


        firstHalf.push(matches);


        const fixed =
            teams[0];

        const rest =
            teams.slice(1);

        rest.unshift(
            rest.pop()
        );

        teams =
            [fixed].concat(rest);

    }


    firstHalf.forEach(
        function(week){

            week.forEach(
                function(match){

                    game.schedule.push(
                        match
                    );

                }
            );

        }
    );


    const secondHalf =
        game.schedule.map(
            function(match){

                return {

                    week:
                        match.week + rounds,

                    home:
                        match.away,

                    away:
                        match.home,

                    played: false

                };

            }
        );


    game.schedule =
        game.schedule.concat(
            secondHalf
        );

}


// =========================================================
// GET CURRENT WEEK
// =========================================================

function getCurrentWeekMatches(){

    return game.schedule.filter(
        function(match){

            return (
                match.week === game.week
            );

        }
    );

}


// =========================================================
// PLAY SCHEDULED MATCH
// =========================================================

function playScheduledMatch(index){

    const matches =
        getCurrentWeekMatches();

    const match =
        matches[index];

    if(!match){

        alert("Pertandingan tidak ditemukan.");

        return;

    }


    if(match.played){

        alert("Pertandingan sudah dimainkan.");

        return;

    }


    const result =
        simulateBo3(
            match.home,
            match.away
        );


    applyMatchResult(
        match.home,
        match.away,
        result
    );


    match.played = true;


    game.currentMatch = {

        ...result,

        format: "BO3",

        week: game.week

    };


    sortStandings();

    saveGame();


    if(
        typeof renderMatchResult ===
        "function"
    ){

        renderMatchResult(
            getTeam(match.home),
            getTeam(match.away),
            result
        );

    }


    if(
        typeof refreshUI ===
        "function"
    ){

        refreshUI();

    }


    if(
        typeof showPage ===
        "function"
    ){

        showPage("match");

    }

}


// =========================================================
// NEXT WEEK
// =========================================================

function nextMPLWeek(){

    const current =
        getCurrentWeekMatches();


    const unfinished =
        current.some(
            function(match){

                return !match.played;

            }
        );


    if(unfinished){

        alert(
            "Selesaikan semua pertandingan minggu ini terlebih dahulu."
        );

        return;

    }


    if(game.week >= 18){

        finishMPLRegularSeason();

        return;

    }


    game.week++;

    saveGame();


    if(
        typeof refreshUI ===
        "function"
    ){

        refreshUI();

    }


    if(
        typeof showPage ===
        "function"
    ){

        showPage("schedule");

    }

}


// =========================================================
// REGULAR SEASON FINISH
// =========================================================

function finishMPLRegularSeason(){

    sortStandings();

    game.phase =
        "playoffs";

    game.history.push({

        type: "regular-season-end",

        season: game.season,

        standings:
            JSON.parse(
                JSON.stringify(
                    game.standings
                )
            )

    });


    saveGame();


    alert(
        "Regular Season selesai! Top 6 masuk Playoff."
    );


    if(
        typeof refreshUI ===
        "function"
    ){

        refreshUI();

    }


    if(
        typeof showPage ===
        "function"
    ){

        showPage("standings");

    }

}


// =========================================================
// QUICK MATCH
// =========================================================

function startQuickMatch(){

    const homeId =
        document.getElementById(
            "quickHome"
        ).value;


    const awayId =
        document.getElementById(
            "quickAway"
        ).value;


    if(!homeId || !awayId){

        alert(
            "Pilih kedua tim terlebih dahulu."
        );

        return;

    }


    if(homeId === awayId){

        alert(
            "Tim 1 dan Tim 2 harus berbeda."
        );

        return;

    }


    const result =
        simulateBo3(
            homeId,
            awayId
        );


    game.currentMatch = {

        ...result,

        format: "BO3",

        week: game.week

    };


    if(
        typeof renderMatchResult ===
        "function"
    ){

        renderMatchResult(
            getTeam(homeId),
            getTeam(awayId),
            result
        );

    }


    if(
        typeof showPage ===
        "function"
    ){

        showPage("match");

    }

}


// =========================================================
// SAVE
// =========================================================

function saveGame(){

    localStorage.setItem(

        SAVE_KEY,

        JSON.stringify(game)

    );

}


// =========================================================
// LOAD
// =========================================================

function loadGame(){

    const saved =
        localStorage.getItem(
            SAVE_KEY
        );


    if(!saved){

        return false;

    }


    try{

        const data =
            JSON.parse(saved);


        Object.assign(
            game,
            data
        );


        return true;

    }catch(error){

        console.error(
            "Gagal memuat save:",
            error
        );

        return false;

    }

}


// =========================================================
// RESET
// =========================================================

function resetGame(){

    localStorage.removeItem(
        SAVE_KEY
    );

    location.reload();

}


// =========================================================
// INITIALIZE
// =========================================================

function initializeGame(){

    const loaded =
        loadGame();


    if(!loaded){

        createStandings();

        generateSchedule();

        saveGame();

    }


    sortStandings();

}


// =========================================================
// AUTO INITIALIZE
// =========================================================

initializeGame();
