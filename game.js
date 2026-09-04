/* =========================================================
   MPL WORLD MANAGER
   MPL INDONESIA SEASON 18
   DATABASE + CAREER ENGINE
========================================================= */


/* =========================================================
   GAME DATABASE
========================================================= */

const game = {

    version: "1.0.0",

    season: 18,

    region: "Indonesia",

    league: "MPL Indonesia",

    phase: "regular",

    week: 1,

    managerTeam: null,

    budget: 0,

    currentMatch: null,

    lineup: {
        exp: null,
        jungler: null,
        mid: null,
        gold: null,
        roamer: null
    },

    teams: {

        /* =========================
           RRQ HOSHI
        ========================= */

        rrq: {

            id: "rrq",

            name: "RRQ Hoshi",

            shortName: "RRQ",

            reputation: 92,

            budget: 5000000000,

            morale: 75,

            chemistry: 78,

            mplTitles: 4,

            worldTitles: 0

        },


        /* =========================
           ONIC
        ========================= */

        onic: {

            id: "onic",

            name: "ONIC",

            shortName: "ONIC",

            reputation: 96,

            budget: 5500000000,

            morale: 88,

            chemistry: 90,

            mplTitles: 5,

            worldTitles: 0

        },


        /* =========================
           EVOS
        ========================= */

        evos: {

            id: "evos",

            name: "EVOS",

            shortName: "EVOS",

            reputation: 86,

            budget: 4500000000,

            morale: 72,

            chemistry: 74,

            mplTitles: 2,

            worldTitles: 1

        },


        /* =========================
           BIGETRON
        ========================= */

        btr: {

            id: "btr",

            name: "Bigetron by Vitality",

            shortName: "BTR",

            reputation: 91,

            budget: 5000000000,

            morale: 86,

            chemistry: 88,

            mplTitles: 1,

            worldTitles: 0

        },


        /* =========================
           ALTER EGO
        ========================= */

        alterego: {

            id: "alterego",

            name: "Alter Ego Esports",

            shortName: "AE",

            reputation: 84,

            budget: 4200000000,

            morale: 70,

            chemistry: 73,

            mplTitles: 0,

            worldTitles: 0

        },


        /* =========================
           DEWA UNITED
        ========================= */

        dewa: {

            id: "dewa",

            name: "Dewa United Esports",

            shortName: "DEWA",

            reputation: 80,

            budget: 4000000000,

            morale: 68,

            chemistry: 72,

            mplTitles: 0,

            worldTitles: 0

        },


        /* =========================
           GEEK FAM
        ========================= */

        geek: {

            id: "geek",

            name: "Geek Fam ID",

            shortName: "GEEK",

            reputation: 82,

            budget: 4000000000,

            morale: 69,

            chemistry: 75,

            mplTitles: 0,

            worldTitles: 0

        },


        /* =========================
           NAVI
        ========================= */

        navi: {

            id: "navi",

            name: "Natus Vincere",

            shortName: "NAVI",

            reputation: 83,

            budget: 4300000000,

            morale: 71,

            chemistry: 74,

            mplTitles: 0,

            worldTitles: 0

        },


        /* =========================
           TEAM LIQUID ID
        ========================= */

        tlid: {

            id: "tlid",

            name: "Team Liquid ID",

            shortName: "TLID",

            reputation: 89,

            budget: 4800000000,

            morale: 84,

            chemistry: 86,

            mplTitles: 1,

            worldTitles: 0

        }

    },


    /* =====================================================
       PLAYER DATABASE
    ===================================================== */

    players: {


        /* =================================================
           RRQ
        ================================================= */

        rrq_lynch: {

            id: "rrq_lynch",

            name: "Lynch",

            team: "rrq",

            role: "EXP",

            ovr: 84,

            potential: 89,

            salary: 350000000,

            status: "Active"

        },

        rrq_demonkite: {

            id: "rrq_demonkite",

            name: "Demonkite",

            team: "rrq",

            role: "Jungler",

            ovr: 91,

            potential: 94,

            salary: 550000000,

            status: "Active"

        },

        rrq_rinz: {

            id: "rrq_rinz",

            name: "Rinz",

            team: "rrq",

            role: "Mid",

            ovr: 88,

            potential: 92,

            salary: 450000000,

            status: "Active"

        },

        rrq_clayyy: {

            id: "rrq_clayyy",

            name: "Clayyy",

            team: "rrq",

            role: "Mid",

            ovr: 86,

            potential: 88,

            salary: 400000000,

            status: "Active"

        },

        rrq_kuroky: {

            id: "rrq_kuroky",

            name: "Kuroky",

            team: "rrq",

            role: "Gold",

            ovr: 86,

            potential: 90,

            salary: 400000000,

            status: "Active"

        },

        rrq_arthur: {

            id: "rrq_arthur",

            name: "Arthur",

            team: "rrq",

            role: "Gold",

            ovr: 84,

            potential: 88,

            salary: 350000000,

            status: "Active"

        },

        rrq_idok: {

            id: "rrq_idok",

            name: "Idok",

            team: "rrq",

            role: "Roamer",

            ovr: 85,

            potential: 89,

            salary: 350000000,

            status: "Active"

        },


        /* =================================================
           ONIC
        ================================================= */

        onic_kiboy: {

            id: "onic_kiboy",

            name: "Kiboy",

            team: "onic",

            role: "Roamer",

            ovr: 93,

            potential: 95,

            salary: 600000000,

            status: "Active"

        },

        onic_sanz: {

            id: "onic_sanz",

            name: "Sanz",

            team: "onic",

            role: "Mid",

            ovr: 94,

            potential: 96,

            salary: 650000000,

            status: "Active"

        },

        onic_kairi: {

            id: "onic_kairi",

            name: "Kairi",

            team: "onic",

            role: "Jungler",

            ovr: 95,

            potential: 97,

            salary: 700000000,

            status: "Active"

        },

        onic_lutpi: {

            id: "onic_lutpi",

            name: "Lutpi",

            team: "onic",

            role: "EXP",

            ovr: 91,

            potential: 94,

            salary: 500000000,

            status: "Active"

        },

        onic_kelra: {

            id: "onic_kelra",

            name: "Kelra",

            team: "onic",

            role: "Gold",

            ovr: 95,

            potential: 97,

            salary: 750000000,

            status: "Active"

        },

        onic_ssamuel: {

            id: "onic_ssamuel",

            name: "SsamueL",

            team: "onic",

            role: "Roamer",

            ovr: 84,

            potential: 90,

            salary: 300000000,

            status: "Active"

        },


        /* =================================================
           EVOS
        ================================================= */

        evos_alberttt: {

            id: "evos_alberttt",

            name: "Alberttt",

            team: "evos",

            role: "Jungler",

            ovr: 91,

            potential: 93,

            salary: 550000000,

            status: "Active"

        },

        evos_erlan: {

            id: "evos_erlan",

            name: "Erlan",

            team: "evos",

            role: "Gold",

            ovr: 87,

            potential: 91,

            salary: 400000000,

            status: "Active"

        },

        evos_vell: {

            id: "evos_vell",

            name: "Vell",

            team: "evos",

            role: "EXP",

            ovr: 86,

            potential: 90,

            salary: 380000000,

            status: "Active"

        },

        evos_muezza: {

            id: "evos_muezza",

            name: "Muezza",

            team: "evos",

            role: "Roamer",

            ovr: 86,

            potential: 90,

            salary: 380000000,

            status: "Active"

        },

        evos_rendyyy: {

            id: "evos_rendyyy",

            name: "Rendyyy",

            team: "evos",

            role: "EXP",

            ovr: 82,

            potential: 88,

            salary: 280000000,

            status: "Active"

        },

        evos_ryzaa: {

            id: "evos_ryzaa",

            name: "Ryzaa",

            team: "evos",

            role: "Mid",

            ovr: 84,

            potential: 89,

            salary: 320000000,

            status: "Active"

        },

        evos_dojo: {

            id: "evos_dojo",

            name: "Dojo",

            team: "evos",

            role: "Flex",

            ovr: 80,

            potential: 87,

            salary: 250000000,

            status: "Active"

        },

        evos_drianw: {

            id: "evos_drianw",

            name: "DrianW",

            team: "evos",

            role: "Flex",

            ovr: 79,

            potential: 86,

            salary: 240000000,

            status: "Active"

        },

        evos_bravo: {

            id: "evos_bravo",

            name: "Bravo",

            team: "evos",

            role: "Flex",

            ovr: 78,

            potential: 85,

            salary: 230000000,

            status: "Active"

        },


        /* =================================================
           BIGETRON
        ================================================= */

        btr_shogun: {

            id: "btr_shogun",

            name: "Shogun",

            team: "btr",

            role: "EXP",

            ovr: 91,

            potential: 94,

            salary: 500000000,

            status: "Active"

        },

        btr_nnael: {

            id: "btr_nnael",

            name: "Nnael",

            team: "btr",

            role: "Jungler",

            ovr: 92,

            potential: 95,

            salary: 550000000,

            status: "Active"

        },

        btr_morenooo: {

            id: "btr_morenooo",

            name: "Moreno",

            team: "btr",

            role: "Mid",

            ovr: 91,

            potential: 94,

            salary: 500000000,

            status: "Active"

        },

        btr_emann: {

            id: "btr_emann",

            name: "Emann",

            team: "btr",

            role: "Gold",

            ovr: 93,

            potential: 95,

            salary: 600000000,

            status: "Active"

        },

        btr_finn: {

            id: "btr_finn",

            name: "Finn",

            team: "btr",

            role: "Roamer",

            ovr: 89,

            potential: 92,

            salary: 450000000,

            status: "Active"

        },

        btr_miguel: {

            id: "btr_miguel",

            name: "Miguel",

            team: "btr",

            role: "Gold",

            ovr: 82,

            potential: 89,

            salary: 280000000,

            status: "Active"

        },


        /* =================================================
           ALTER EGO
        ================================================= */

        ae_nino: {

            id: "ae_nino",

            name: "Nino",

            team: "alterego",

            role: "EXP",

            ovr: 88,

            potential: 92,

            salary: 420000000,

            status: "Active"

        },

        ae_alexander: {

            id: "ae_alexander",

            name: "Alexander",

            team: "alterego",

            role: "Roamer",

            ovr: 85,

            potential: 90,

            salary: 350000000,

            status: "Active"

        },

        ae_dingarai: {

            id: "ae_dingarai",

            name: "Dingarai",

            team: "alterego",

            role: "Gold",

            ovr: 84,

            potential: 89,

            salary: 320000000,

            status: "Active"

        },

        ae_dalvin: {

            id: "ae_dalvin",

            name: "Dalvin",

            team: "alterego",

            role: "Mid",

            ovr: 85,

            potential: 91,

            salary: 350000000,

            status: "Active"

        },

        ae_halim: {

            id: "ae_halim",

            name: "Halim",

            team: "alterego",

            role: "Mid",

            ovr: 82,

            potential: 88,

            salary: 280000000,

            status: "Active"

        },

        ae_reyy: {

            id: "ae_reyy",

            name: "Reyy",

            team: "alterego",

            role: "Jungler",

            ovr: 86,

            potential: 91,

            salary: 380000000,

            status: "Active"

        },

        ae_affan: {

            id: "ae_affan",

            name: "Affan",

            team: "alterego",

            role: "Jungler",

            ovr: 81,

            potential: 88,

            salary: 260000000,

            status: "Active"

        },

        ae_ivann: {

            id: "ae_ivann",

            name: "Ivann",

            team: "alterego",

            role: "Roamer",

            ovr: 80,

            potential: 87,

            salary: 250000000,

            status: "Active"

        },


        /* =================================================
           DEWA UNITED
        ================================================= */

        dewa_qinn: {

            id: "dewa_qinn",

            name: "QINN",

            team: "dewa",

            role: "EXP",

            ovr: 84,

            potential: 89,

            salary: 330000000,

            status: "Active"

        },

        dewa_kayn: {

            id: "dewa_kayn",

            name: "Kayn",

            team: "dewa",

            role: "Jungler",

            ovr: 83,

            potential: 90,

            salary: 320000000,

            status: "Active"

        },

        dewa_octa: {

            id: "dewa_octa",

            name: "Octa",

            team: "dewa",

            role: "Mid",

            ovr: 84,

            potential: 89,

            salary: 320000000,

            status: "Active"

        },

        dewa_maybeee: {

            id: "dewa_maybeee",

            name: "Maybeee",

            team: "dewa",

            role: "Gold",

            ovr: 84,

            potential: 90,

            salary: 330000000,

            status: "Active"

        },

        dewa_itoshi_kesu: {

            id: "dewa_itoshi_kesu",

            name: "Itoshi Kesu",

            team: "dewa",

            role: "Roamer",

            ovr: 84,

            potential: 89,

            salary: 320000000,

            status: "Active"

        },

        dewa_rul_good: {

            id: "dewa_rul_good",

            name: "Rul Good",

            team: "dewa",

            role: "Roamer",

            ovr: 79,

            potential: 86,

            salary: 240000000,

            status: "Active"

        },

        dewa_hazle: {

            id: "dewa_hazle",

            name: "Hazle",

            team: "dewa",

            role: "Jungler",

            ovr: 78,

            potential: 87,

            salary: 230000000,

            status: "Active"

        },


        /* =================================================
           GEEK FAM
        ================================================= */

        geek_marcel: {

            id: "geek_marcel",

            name: "Marcel",

            team: "geek",

            role: "EXP",

            ovr: 84,

            potential: 89,

            salary: 320000000,

            status: "Active"

        },

        geek_febriii: {

            id: "geek_febriii",

            name: "Febriii",

            team: "geek",

            role: "EXP",

            ovr: 80,

            potential: 87,

            salary: 250000000,

            status: "Active"

        },

        geek_nazara: {

            id: "geek_nazara",

            name: "Nazara",

            team: "geek",

            role: "Jungler",

            ovr: 84,

            potential: 91,

            salary: 330000000,

            status: "Active"

        },

        geek_aboyy: {

            id: "geek_aboyy",

            name: "ABOYY",

            team: "geek",

            role: "Mid",

            ovr: 85,

            potential: 90,

            salary: 350000000,

            status: "Active"

        },

        geek_kennzyyskie: {

            id: "geek_kennzyyskie",

            name: "KENNZYYSKIE",

            team: "geek",

            role: "Gold",

            ovr: 84,

            potential: 89,

            salary: 320000000,

            status: "Active"

        },

        geek_frenzyy: {

            id: "geek_frenzyy",

            name: "Frenzyy",

            team: "geek",

            role: "Roamer",

            ovr: 81,

            potential: 87,

            salary: 260000000,

            status: "Active"

        },


        /* =================================================
           NAVI
        ================================================= */

        navi_karss: {

            id: "navi_karss",

            name: "Karss",

            team: "navi",

            role: "EXP",

            ovr: 84,

            potential: 89,

            salary: 320000000,

            status: "Active"

        },

        navi_andoryuuu: {

            id: "navi_andoryuuu",

            name: "Andoryuuu",

            team: "navi",

            role: "Jungler",

            ovr: 84,

            potential: 90,

            salary: 330000000,

            status: "Active"

        },

        navi_aprho: {

            id: "navi_aprho",

            name: "APRHO",

            team: "navi",

            role: "Roamer",

            ovr: 84,

            potential: 89,

            salary: 320000000,

            status: "Active"

        },

        navi_zeonn: {

            id: "navi_zeonn",

            name: "ZEONN",

            team: "navi",

            role: "Gold",

            ovr: 83,

            potential: 90,

            salary: 310000000,

            status: "Active"

        },

        navi_jiizee: {

            id: "navi_jiizee",

            name: "JIIZEE",

            team: "navi",

            role: "Mid",

            ovr: 83,

            potential: 90,

            salary: 310000000,

            status: "Active"

        },

        navi_febbb: {

            id: "navi_febbb",

            name: "FEBBB",

            team: "navi",

            role: "EXP",

            ovr: 79,

            potential: 87,

            salary: 240000000,

            status: "Active"

        },

        navi_joshuaa: {

            id: "navi_joshuaa",

            name: "Joshuaa",

            team: "navi",

            role: "Jungler",

            ovr: 78,

            potential: 87,

            salary: 230000000,

            status: "Active"

        },


        /* =================================================
           TEAM LIQUID ID
        ================================================= */

        tlid_aran: {

            id: "tlid_aran",

            name: "Aran",

            team: "tlid",

            role: "EXP",

            ovr: 88,

            potential: 92,

            salary: 420000000,

            status: "Active"

        },

        tlid_drichel: {

            id: "tlid_drichel",

            name: "Drichel",

            team: "tlid",

            role: "Mid",

            ovr: 87,

            potential: 91,

            salary: 400000000,

            status: "Active"

        },

        tlid_lyoni: {

            id: "tlid_lyoni",

            name: "Lyoni",

            team: "tlid",

            role: "Roamer",

            ovr: 87,

            potential: 91,

            salary: 400000000,

            status: "Active"

        },

        tlid_keven: {

            id: "tlid_keven",

            name: "Keven",

            team: "tlid",

            role: "Gold",

            ovr: 87,

            potential: 92,

            salary: 420000000,

            status: "Active"

        },

        tlid_anaver: {

            id: "tlid_anaver",

            name: "Anaver",

            team: "tlid",

            role: "Mid",

            ovr: 82,

            potential: 89,

            salary: 280000000,

            status: "Active"

        },

        tlid_kevin: {

            id: "tlid_kevin",

            name: "Kevin",

            team: "tlid",

            role: "Jungler",

            ovr: 87,

            potential: 92,

            salary: 420000000,

            status: "Active"

        }

    },


    /* =====================================================
       STAFF DATABASE
    ===================================================== */

    staff: {

        rrq_adi: {
            id: "rrq_adi",
            name: "Coach Adi",
            team: "rrq",
            role: "Head Coach",
            rating: 88
        },

        rrq_kayleb: {
            id: "rrq_kayleb",
            name: "Coach Kayleb",
            team: "rrq",
            role: "Assistant Coach",
            rating: 84
        },


        onic_cw: {
            id: "onic_cw",
            name: "CW",
            team: "onic",
            role: "Head Coach",
            rating: 91
        },

        onic_baloy: {
            id: "onic_baloy",
            name: "Baloy",
            team: "onic",
            role: "Assistant Coach",
            rating: 87
        },


        evos_aldo: {
            id: "evos_aldo",
            name: "Aldo",
            team: "evos",
            role: "Head Coach",
            rating: 85
        },

        evos_bravo: {
            id: "evos_bravo_staff",
            name: "Bravo",
            team: "evos",
            role: "Analyst",
            rating: 80
        },


        btr_kdot: {
            id: "btr_kdot",
            name: "K Dot",
            team: "btr",
            role: "Head Coach",
            rating: 88
        },

        btr_rubenhood: {
            id: "btr_rubenhood",
            name: "Rubenhood",
            team: "btr",
            role: "Assistant Coach",
            rating: 83
        },

        btr_her: {
            id: "btr_her",
            name: "HER",
            team: "btr",
            role: "Analyst",
            rating: 82
        },


        ae_xepher: {
            id: "ae_xepher",
            name: "Xepher",
            team: "alterego",
            role: "Head Coach",
            rating: 84
        },

        ae_styx: {
            id: "ae_styx",
            name: "STYX",
            team: "alterego",
            role: "Assistant Coach",
            rating: 81
        },


        dewa_right: {
            id: "dewa_right",
            name: "Coach Right",
            team: "dewa",
            role: "Head Coach",
            rating: 82
        },

        dewa_laufeyson: {
            id: "dewa_laufeyson",
            name: "Laufeyson",
            team: "dewa",
            role: "Analyst",
            rating: 78
        },


        geek_erpang: {
            id: "geek_erpang",
            name: "Erpang",
            team: "geek",
            role: "Head Coach",
            rating: 82
        },

        geek_vivy: {
            id: "geek_vivy",
            name: "Vivy",
            team: "geek",
            role: "Assistant Coach",
            rating: 79
        },


        navi_ynot: {
            id: "navi_ynot",
            name: "YNOT",
            team: "navi",
            role: "Head Coach",
            rating: 82
        },

        navi_jacklee: {
            id: "navi_jacklee",
            name: "Jacklee",
            team: "navi",
            role: "Assistant Coach",
            rating: 80
        },

        navi_han: {
            id: "navi_han",
            name: "HAN",
            team: "navi",
            role: "Analyst",
            rating: 78
        },


        tlid_honjaw: {
            id: "tlid_honjaw",
            name: "Honjaw",
            team: "tlid",
            role: "Head Coach",
            rating: 87
        },

        tlid_pahlevi: {
            id: "tlid_pahlevi",
            name: "Pahlevi",
            team: "tlid",
            role: "Assistant Coach",
            rating: 83
        },

        tlid_facehugger: {
            id: "tlid_facehugger",
            name: "Facehugger",
            team: "tlid",
            role: "Analyst",
            rating: 82
        }

    },


    /* =====================================================
       STANDINGS
    ===================================================== */

    standings: [],


    /* =====================================================
       SCHEDULE
    ===================================================== */

    schedule: [],


    /* =====================================================
       HISTORY
    ===================================================== */

    history: [],

    currentMatch: null

};


/* =========================================================
   CREATE STANDINGS
========================================================= */

function createStandings(){

    game.standings = [];

    Object.values(game.teams).forEach(team => {

        game.standings.push({

            teamId: team.id,

            teamName: team.name,

            wins: 0,

            losses: 0,

            gamesWon: 0,

            gamesLost: 0,

            gameDiff: 0,

            points: 0

        });

    });

}


/* =========================================================
   GENERATE DOUBLE ROUND ROBIN
========================================================= */

function generateSchedule(){

    const teamIds =
        Object.keys(game.teams);

    const matches = [];

    let matchId = 1;

    /*
       9 tim = 8 pertandingan per tim
       Setiap pasangan bertemu 2 kali.
    */

    for(let i = 0; i < teamIds.length; i++){

        for(let j = i + 1; j < teamIds.length; j++){

            const home =
                teamIds[i];

            const away =
                teamIds[j];


            matches.push({

                id: "match_" + matchId++,

                week: 0,

                home: home,

                away: away,

                played: false,

                homeScore: null,

                awayScore: null

            });


            matches.push({

                id: "match_" + matchId++,

                week: 0,

                home: away,

                away: home,

                played: false,

                homeScore: null,

                awayScore: null

            });

        }

    }


    /*
       72 pertandingan total.
       18 minggu.
       4 pertandingan setiap minggu.
    */

    matches.forEach((match, index) => {

        match.week =
            Math.floor(index / 4) + 1;

    });


    game.schedule = matches;

}


/* =========================================================
   GET TEAM PLAYERS
========================================================= */

function getTeamPlayers(teamId){

    return Object.values(game.players)
        .filter(player =>
            player.team === teamId
        );

}


/* =========================================================
   GET TEAM STAFF
========================================================= */

function getTeamStaff(teamId){

    return Object.values(game.staff)
        .filter(staff =>
            staff.team === teamId
        );

}


/* =========================================================
   GET TEAM OVR
========================================================= */

function getTeamStrength(teamId){

    const players =
        getTeamPlayers(teamId);


    if(players.length === 0){

        return 70;

    }


    /*
       Ambil pemain terbaik
       berdasarkan role utama.

       Ini masih sederhana.
       Nanti akan diganti dengan
       Match Engine yang lebih detail.
    */

    const bestByRole = {

        EXP: 0,

        Jungler: 0,

        Mid: 0,

        Gold: 0,

        Roamer: 0

    };


    players.forEach(player => {

        const role =
            player.role;


        if(
            bestByRole[role] !== undefined
        ){

            bestByRole[role] =
                Math.max(
                    bestByRole[role],
                    player.ovr
                );

        }

    });


    const values =
        Object.values(bestByRole);


    const total =
        values.reduce(
            (sum,value) =>
                sum + value,
            0
        );


    return Math.round(
        total / 5
    );

}


/* =========================================================
   GET MANAGER LINEUP STRENGTH
========================================================= */

function getManagerLineupStrength(){

    if(!game.managerTeam){

        return 70;

    }


    const lineup =
        game.lineup;


    const roles = [
        "exp",
        "jungler",
        "mid",
        "gold",
        "roamer"
    ];


    let total = 0;

    let count = 0;


    roles.forEach(role => {

        const playerId =
            lineup[role];


        if(!playerId){
            return;
        }


        const player =
            game.players[playerId];


        if(!player){
            return;
        }


        total += player.ovr;

        count++;

    });


    if(count < 5){

        return getTeamStrength(
            game.managerTeam
        );

    }


    return Math.round(
        total / 5
    );

}


/* =========================================================
   FIND NEXT MANAGER MATCH
========================================================= */

function getNextManagerMatch(){

    if(!game.managerTeam){

        return null;

    }


    return game.schedule.find(match => {

        return !match.played &&
        (
            match.home === game.managerTeam ||
            match.away === game.managerTeam
        );

    }) || null;

}


/* =========================================================
   SIMULATE BO3
========================================================= */

function simulateBo3(homeId, awayId){

    const homeTeam =
        game.teams[homeId];

    const awayTeam =
        game.teams[awayId];


    let homeStrength =
        getTeamStrength(homeId);

    let awayStrength =
        getTeamStrength(awayId);


    /*
       Morale memengaruhi kekuatan.
    */

    homeStrength +=
        (homeTeam.morale - 70) * 0.15;

    awayStrength +=
        (awayTeam.morale - 70) * 0.15;


    /*
       Chemistry memengaruhi performa.
    */

    homeStrength +=
        (homeTeam.chemistry - 70) * 0.10;

    awayStrength +=
        (awayTeam.chemistry - 70) * 0.10;


    let homeWins = 0;

    let awayWins = 0;


    while(
        homeWins < 2 &&
        awayWins < 2
    ){

        const homeRoll =
            homeStrength +
            Math.random() * 25;

        const awayRoll =
            awayStrength +
            Math.random() * 25;


        if(homeRoll >= awayRoll){

            homeWins++;

        }else{

            awayWins++;

        }

    }


    return {

        home: homeWins,

        away: awayWins

    };

}


/* =========================================================
   UPDATE STANDINGS
========================================================= */

function updateStandings(
    homeId,
    awayId,
    homeScore,
    awayScore
){

    const home =
        game.standings.find(
            team =>
                team.teamId === homeId
        );


    const away =
        game.standings.find(
            team =>
                team.teamId === awayId
        );


    if(!home || !away){

        return;

    }


    home.gamesWon +=
        homeScore;

    home.gamesLost +=
        awayScore;


    away.gamesWon +=
        awayScore;

    away.gamesLost +=
        homeScore;


    home.gameDiff =
        home.gamesWon -
        home.gamesLost;


    away.gameDiff =
        away.gamesWon -
        away.gamesLost;


    if(homeScore > awayScore){

        home.wins++;

        home.points++;

        away.losses++;

    }else{

        away.wins++;

        away.points++;

        home.losses++;

    }


    sortStandings();

}


/* =========================================================
   SORT STANDINGS
========================================================= */

function sortStandings(){

    game.standings.sort(
        (a,b) => {

            if(
                b.points !==
                a.points
            ){

                return (
                    b.points -
                    a.points
                );

            }


            if(
                b.gameDiff !==
                a.gameDiff
            ){

                return (
                    b.gameDiff -
                    a.gameDiff
                );

            }


            return (
                b.gamesWon -
                a.gamesWon
            );

        }
    );

}


/* =========================================================
   PLAY MATCH
========================================================= */

function playMatch(matchId){

    const match =
        game.schedule.find(
            m => m.id === matchId
        );


    if(!match){

        return null;

    }


    if(match.played){

        return null;

    }


    /*
       Kalau manager yang bermain,
       gunakan lineup manager.
    */

    if(
        match.home ===
        game.managerTeam
    ){

        const strength =
            getManagerLineupStrength();

        const team =
            game.teams[
                game.managerTeam
            ];

        /*
           Temporary override
           untuk kekuatan manager.
        */

        team._matchStrength =
            strength;

    }


    if(
        match.away ===
        game.managerTeam
    ){

        const strength =
            getManagerLineupStrength();

        const team =
            game.teams[
                game.managerTeam
            ];

        team._matchStrength =
            strength;

    }


    const result =
        simulateBo3(
            match.home,
            match.away
        );


    match.homeScore =
        result.home;

    match.awayScore =
        result.away;

    match.played = true;


    updateStandings(
        match.home,
        match.away,
        result.home,
        result.away
    );


    game.currentMatch = {

        id: match.id,

        home: match.home,

        away: match.away,

        homeScore: result.home,

        awayScore: result.away

    };


    saveGame();


    return result;

}


/* =========================================================
   QUICK AI SIMULATION
========================================================= */

function simulateAllAI(){

    game.schedule.forEach(match => {

        if(match.played){
            return;
        }


        /*
           Jangan memainkan pertandingan
           manager secara otomatis.
        */

        if(
            match.home === game.managerTeam ||
            match.away === game.managerTeam
        ){

            return;

        }


        playMatch(match.id);

    });

}


/* =========================================================
   SAVE GAME
========================================================= */

function saveGame(){

    try{

        localStorage.setItem(
            "mpl_world_manager",
            JSON.stringify(game)
        );

    }catch(error){

        console.error(
            "Gagal menyimpan game:",
            error
        );

    }

}


/* =========================================================
   LOAD GAME
========================================================= */

function loadGame(){

    try{

        const saved =
            localStorage.getItem(
                "mpl_world_manager"
            );


        if(!saved){

            return false;

        }


        const data =
            JSON.parse(saved);


        Object.assign(
            game,
            data
        );


        return true;

    }catch(error){

        console.error(
            "Gagal load game:",
            error
        );


        return false;

    }

}


/* =========================================================
   RESET GAME
========================================================= */

function resetGame(){

    localStorage.removeItem(
        "mpl_world_manager"
    );


    location.reload();

}


/* =========================================================
   START NEW CAREER
========================================================= */

function startNewCareer(teamId){

    if(!game.teams[teamId]){

        return false;

    }


    game.managerTeam =
        teamId;


    game.budget =
        game.teams[
            teamId
        ].budget;


    game.phase =
        "regular";


    game.week =
        1;


    game.lineup = {

        exp: null,

        jungler: null,

        mid: null,

        gold: null,

        roamer: null

    };


    createStandings();

    generateSchedule();

    saveGame();


    return true;

}


/* =========================================================
   INITIALIZE DATABASE
========================================================= */

function initializeGame(){

    /*
       Coba load save.
    */

    const loaded =
        loadGame();


    if(loaded){

        return;

    }


    /*
       New database.
    */

    createStandings();

    generateSchedule();

    saveGame();

}


/* =========================================================
   START GAME
========================================================= */

initializeGame();


/* =========================================================
   DEBUG HELPER
========================================================= */

console.log(
    "MPL World Manager Season 18 loaded."
);

console.log(
    "Teams:",
    Object.keys(game.teams).length
);

console.log(
    "Players:",
    Object.keys(game.players).length
);

console.log(
    "Staff:",
    Object.keys(game.staff).length
);

console.log(
    "Matches:",
    game.schedule.length
);
