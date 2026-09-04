/* =====================================================
   MPL WORLD MANAGER
   MPL INDONESIA SEASON 18
   GAME DATABASE + CAREER ENGINE
===================================================== */

const SAVE_KEY = "mpl_world_manager_save_v9";


/* =====================================================
   GAME DATABASE
===================================================== */

const game = {

  version: 9,

  season: 18,

  region: "Indonesia",

  league: "MPL Indonesia",

  phase: "Regular Season",

  week: 1,

  managerTeam: null,

  budget: 0,

  currentMatch: null,

  lineup: {
    EXP: null,
    Jungler: null,
    Mid: null,
    Gold: null,
    Roamer: null
  },

  training: {
    lastTrainingWeek: 0,
    history: []
  },

  teams: [

    {
      id: "RRQ",
      name: "RRQ Hoshi",
      shortName: "RRQ",
      reputation: 95,
      budget: 1800,
      morale: 80,
      chemistry: 80,
      mplTitles: 5,
      worldTitles: 1
    },

    {
      id: "ONIC",
      name: "ONIC",
      shortName: "ONIC",
      reputation: 98,
      budget: 1900,
      morale: 85,
      chemistry: 85,
      mplTitles: 6,
      worldTitles: 1
    },

    {
      id: "EVOS",
      name: "EVOS",
      shortName: "EVOS",
      reputation: 88,
      budget: 1500,
      morale: 78,
      chemistry: 76,
      mplTitles: 1,
      worldTitles: 1
    },

    {
      id: "BTR",
      name: "Bigetron by Vitality",
      shortName: "BTR",
      reputation: 90,
      budget: 1600,
      morale: 82,
      chemistry: 80,
      mplTitles: 1,
      worldTitles: 0
    },

    {
      id: "AE",
      name: "Alter Ego",
      shortName: "AE",
      reputation: 86,
      budget: 1400,
      morale: 75,
      chemistry: 75,
      mplTitles: 0,
      worldTitles: 0
    },

    {
      id: "DEWA",
      name: "Dewa United Esports",
      shortName: "DEWA",
      reputation: 82,
      budget: 1300,
      morale: 75,
      chemistry: 74,
      mplTitles: 0,
      worldTitles: 0
    },

    {
      id: "GEEK",
      name: "Geek Fam ID",
      shortName: "GEEK",
      reputation: 80,
      budget: 1200,
      morale: 74,
      chemistry: 73,
      mplTitles: 0,
      worldTitles: 0
    },

    {
      id: "NAVI",
      name: "Natus Vincere",
      shortName: "NAVI",
      reputation: 84,
      budget: 1300,
      morale: 76,
      chemistry: 75,
      mplTitles: 0,
      worldTitles: 0
    },

    {
      id: "TLID",
      name: "Team Liquid ID",
      shortName: "TLID",
      reputation: 91,
      budget: 1700,
      morale: 80,
      chemistry: 82,
      mplTitles: 1,
      worldTitles: 0
    }

  ],


  /* ===================================================
     PLAYER DATABASE
  =================================================== */

  players: [

    /* RRQ */

    {
      id: "RRQ_LYNCH",
      name: "Lynch",
      team: "RRQ",
      role: "EXP",
      ovr: 82,
      potential: 88,
      salary: 90,
      status: "Starter"
    },

    {
      id: "RRQ_DEMONKITE",
      name: "Demonkite",
      team: "RRQ",
      role: "Jungler",
      ovr: 88,
      potential: 91,
      salary: 120,
      status: "Starter"
    },

    {
      id: "RRQ_RINZ",
      name: "Rinz",
      team: "RRQ",
      role: "Mid",
      ovr: 84,
      potential: 89,
      salary: 100,
      status: "Starter"
    },

    {
      id: "RRQ_CLAYYY",
      name: "Clayyy",
      team: "RRQ",
      role: "Mid",
      ovr: 86,
      potential: 88,
      salary: 110,
      status: "Starter"
    },

    {
      id: "RRQ_KUROKY",
      name: "Kuroky",
      team: "RRQ",
      role: "Gold",
      ovr: 84,
      potential: 89,
      salary: 100,
      status: "Starter"
    },

    {
      id: "RRQ_ARTHUR",
      name: "Arthur",
      team: "RRQ",
      role: "Gold",
      ovr: 82,
      potential: 87,
      salary: 85,
      status: "Substitute"
    },

    {
      id: "RRQ_IDOK",
      name: "Idok",
      team: "RRQ",
      role: "Roamer",
      ovr: 83,
      potential: 88,
      salary: 90,
      status: "Starter"
    },


    /* ONIC */

    {
      id: "ONIC_KIBOY",
      name: "Kiboy",
      team: "ONIC",
      role: "Roamer",
      ovr: 91,
      potential: 94,
      salary: 140,
      status: "Starter"
    },

    {
      id: "ONIC_SANZ",
      name: "Sanz",
      team: "ONIC",
      role: "Mid",
      ovr: 93,
      potential: 95,
      salary: 150,
      status: "Starter"
    },

    {
      id: "ONIC_KAIRI",
      name: "Kairi",
      team: "ONIC",
      role: "Jungler",
      ovr: 94,
      potential: 97,
      salary: 160,
      status: "Starter"
    },

    {
      id: "ONIC_LUTPI",
      name: "Lutpi",
      team: "ONIC",
      role: "EXP",
      ovr: 86,
      potential: 91,
      salary: 100,
      status: "Starter"
    },

    {
      id: "ONIC_KELRA",
      name: "Kelra",
      team: "ONIC",
      role: "Gold",
      ovr: 94,
      potential: 97,
      salary: 170,
      status: "Starter"
    },

    {
      id: "ONIC_SSAMUEL",
      name: "SsamueL",
      team: "ONIC",
      role: "Roamer",
      ovr: 80,
      potential: 86,
      salary: 75,
      status: "Substitute"
    },


    /* EVOS */

    {
      id: "EVOS_ALBERTTT",
      name: "Alberttt",
      team: "EVOS",
      role: "Jungler",
      ovr: 91,
      potential: 94,
      salary: 150,
      status: "Starter"
    },

    {
      id: "EVOS_ERLAN",
      name: "Erlan",
      team: "EVOS",
      role: "Gold",
      ovr: 84,
      potential: 90,
      salary: 100,
      status: "Starter"
    },

    {
      id: "EVOS_VELL",
      name: "Vell",
      team: "EVOS",
      role: "EXP",
      ovr: 84,
      potential: 89,
      salary: 95,
      status: "Starter"
    },

    {
      id: "EVOS_MUEZZA",
      name: "Muezza",
      team: "EVOS",
      role: "Roamer",
      ovr: 82,
      potential: 88,
      salary: 90,
      status: "Starter"
    },

    {
      id: "EVOS_RENDYYY",
      name: "Rendyyy",
      team: "EVOS",
      role: "EXP",
      ovr: 78,
      potential: 86,
      salary: 70,
      status: "Substitute"
    },

    {
      id: "EVOS_RYZAA",
      name: "Ryzaa",
      team: "EVOS",
      role: "Mid",
      ovr: 83,
      potential: 89,
      salary: 95,
      status: "Starter"
    },

    {
      id: "EVOS_DOJO",
      name: "Dojo",
      team: "EVOS",
      role: "Flex",
      ovr: 77,
      potential: 85,
      salary: 65,
      status: "Substitute"
    },

    {
      id: "EVOS_DRIANW",
      name: "DrianW",
      team: "EVOS",
      role: "Flex",
      ovr: 76,
      potential: 84,
      salary: 60,
      status: "Substitute"
    },

    {
      id: "EVOS_BRAVO",
      name: "Bravo",
      team: "EVOS",
      role: "Flex",
      ovr: 75,
      potential: 84,
      salary: 60,
      status: "Substitute"
    },


    /* BIGETRON */

    {
      id: "BTR_SHOGUN",
      name: "Shogun",
      team: "BTR",
      role: "EXP",
      ovr: 85,
      potential: 91,
      salary: 105,
      status: "Starter"
    },

    {
      id: "BTR_NNAEL",
      name: "Nnael",
      team: "BTR",
      role: "Jungler",
      ovr: 88,
      potential: 93,
      salary: 125,
      status: "Starter"
    },

    {
      id: "BTR_MORENO",
      name: "Moreno",
      team: "BTR",
      role: "Mid",
      ovr: 86,
      potential: 91,
      salary: 110,
      status: "Starter"
    },

    {
      id: "BTR_EMANN",
      name: "Emann",
      team: "BTR",
      role: "Gold",
      ovr: 87,
      potential: 92,
      salary: 115,
      status: "Starter"
    },

    {
      id: "BTR_FINN",
      name: "Finn",
      team: "BTR",
      role: "Roamer",
      ovr: 84,
      potential: 89,
      salary: 95,
      status: "Starter"
    },

    {
      id: "BTR_MIGUEL",
      name: "Miguel",
      team: "BTR",
      role: "Gold",
      ovr: 80,
      potential: 87,
      salary: 75,
      status: "Substitute"
    },


    /* ALTER EGO */

    {
      id: "AE_NINO",
      name: "Nino",
      team: "AE",
      role: "EXP",
      ovr: 86,
      potential: 91,
      salary: 105,
      status: "Starter"
    },

    {
      id: "AE_ALEXANDER",
      name: "Alexander",
      team: "AE",
      role: "Roamer",
      ovr: 84,
      potential: 89,
      salary: 95,
      status: "Starter"
    },

    {
      id: "AE_DINGARAI",
      name: "Dingarai",
      team: "AE",
      role: "Gold",
      ovr: 85,
      potential: 91,
      salary: 100,
      status: "Starter"
    },

    {
      id: "AE_DALVIN",
      name: "Dalvin",
      team: "AE",
      role: "Mid",
      ovr: 82,
      potential: 88,
      salary: 85,
      status: "Starter"
    },

    {
      id: "AE_HALIM",
      name: "Halim",
      team: "AE",
      role: "Mid",
      ovr: 78,
      potential: 87,
      salary: 70,
      status: "Substitute"
    },

    {
      id: "AE_REYY",
      name: "Reyy",
      team: "AE",
      role: "Jungler",
      ovr: 84,
      potential: 90,
      salary: 95,
      status: "Starter"
    },

    {
      id: "AE_AFFAN",
      name: "Affan",
      team: "AE",
      role: "Jungler",
      ovr: 79,
      potential: 87,
      salary: 70,
      status: "Substitute"
    },

    {
      id: "AE_IVANN",
      name: "Ivann",
      team: "AE",
      role: "Roamer",
      ovr: 78,
      potential: 86,
      salary: 70,
      status: "Substitute"
    },


    /* DEWA */

    {
      id: "DEWA_QINN",
      name: "QINN",
      team: "DEWA",
      role: "EXP",
      ovr: 82,
      potential: 89,
      salary: 90,
      status: "Starter"
    },

    {
      id: "DEWA_KAYN",
      name: "Kayn",
      team: "DEWA",
      role: "Jungler",
      ovr: 81,
      potential: 89,
      salary: 90,
      status: "Starter"
    },

    {
      id: "DEWA_OCTA",
      name: "Octa",
      team: "DEWA",
      role: "Mid",
      ovr: 80,
      potential: 87,
      salary: 85,
      status: "Starter"
    },

    {
      id: "DEWA_MAYBEEE",
      name: "Maybeee",
      team: "DEWA",
      role: "Gold",
      ovr: 83,
      potential: 89,
      salary: 95,
      status: "Starter"
    },

    {
      id: "DEWA_ITOSHI",
      name: "Itoshi Kesu",
      team: "DEWA",
      role: "Roamer",
      ovr: 82,
      potential: 88,
      salary: 90,
      status: "Starter"
    },

    {
      id: "DEWA_RUL",
      name: "Rul Good",
      team: "DEWA",
      role: "Roamer",
      ovr: 77,
      potential: 85,
      salary: 65,
      status: "Substitute"
    },

    {
      id: "DEWA_HAZLE",
      name: "Hazle",
      team: "DEWA",
      role: "Jungler",
      ovr: 76,
      potential: 85,
      salary: 65,
      status: "Substitute"
    },


    /* GEEK */

    {
      id: "GEEK_MARCEL",
      name: "Marcel",
      team: "GEEK",
      role: "EXP",
      ovr: 80,
      potential: 87,
      salary: 80,
      status: "Starter"
    },

    {
      id: "GEEK_FEBRIII",
      name: "Febriii",
      team: "GEEK",
      role: "EXP",
      ovr: 75,
      potential: 84,
      salary: 60,
      status: "Substitute"
    },

    {
      id: "GEEK_NAZARA",
      name: "Nazara",
      team: "GEEK",
      role: "Jungler",
      ovr: 81,
      potential: 88,
      salary: 85,
      status: "Starter"
    },

    {
      id: "GEEK_ABOYY",
      name: "ABOYY",
      team: "GEEK",
      role: "Mid",
      ovr: 82,
      potential: 88,
      salary: 85,
      status: "Starter"
    },

    {
      id: "GEEK_KENNZY",
      name: "KENNZYYSKIE",
      team: "GEEK",
      role: "Gold",
      ovr: 80,
      potential: 87,
      salary: 80,
      status: "Starter"
    },

    {
      id: "GEEK_FRENZYY",
      name: "Frenzyy",
      team: "GEEK",
      role: "Roamer",
      ovr: 79,
      potential: 86,
      salary: 75,
      status: "Starter"
    },


    /* NAVI */

    {
      id: "NAVI_KARSS",
      name: "Karss",
      team: "NAVI",
      role: "EXP",
      ovr: 82,
      potential: 89,
      salary: 90,
      status: "Starter"
    },

    {
      id: "NAVI_ANDORYUUU",
      name: "Andoryuuu",
      team: "NAVI",
      role: "Jungler",
      ovr: 84,
      potential: 91,
      salary: 100,
      status: "Starter"
    },

    {
      id: "NAVI_APRHO",
      name: "APRHO",
      team: "NAVI",
      role: "Roamer",
      ovr: 82,
      potential: 88,
      salary: 90,
      status: "Starter"
    },

    {
      id: "NAVI_ZEONN",
      name: "ZEONN",
      team: "NAVI",
      role: "Gold",
      ovr: 83,
      potential: 90,
      salary: 95,
      status: "Starter"
    },

    {
      id: "NAVI_JIIZEE",
      name: "JIIZEE",
      team: "NAVI",
      role: "Mid",
      ovr: 81,
      potential: 88,
      salary: 85,
      status: "Starter"
    },

    {
      id: "NAVI_FEBBB",
      name: "FEBBB",
      team: "NAVI",
      role: "EXP",
      ovr: 76,
      potential: 85,
      salary: 65,
      status: "Substitute"
    },

    {
      id: "NAVI_JOSHUAA",
      name: "Joshuaa",
      team: "NAVI",
      role: "Jungler",
      ovr: 77,
      potential: 86,
      salary: 70,
      status: "Substitute"
    },


    /* TEAM LIQUID */

    {
      id: "TLID_ARAN",
      name: "Aran",
      team: "TLID",
      role: "EXP",
      ovr: 86,
      potential: 91,
      salary: 105,
      status: "Starter"
    },

    {
      id: "TLID_DRICHEL",
      name: "Drichel",
      team: "TLID",
      role: "Mid",
      ovr: 87,
      potential: 92,
      salary: 110,
      status: "Starter"
    },

    {
      id: "TLID_LYONI",
      name: "Lyoni",
      team: "TLID",
      role: "Roamer",
      ovr: 85,
      potential: 90,
      salary: 100,
      status: "Starter"
    },

    {
      id: "TLID_KEVEN",
      name: "Keven",
      team: "TLID",
      role: "Gold",
      ovr: 88,
      potential: 93,
      salary: 120,
      status: "Starter"
    },

    {
      id: "TLID_ANAVER",
      name: "Anaver",
      team: "TLID",
      role: "Mid",
      ovr: 80,
      potential: 88,
      salary: 80,
      status: "Substitute"
    },

    {
      id: "TLID_KEVIN",
      name: "Kevin",
      team: "TLID",
      role: "Jungler",
      ovr: 88,
      potential: 93,
      salary: 120,
      status: "Starter"
    }

  ],


  /* ===================================================
     STAFF
  =================================================== */

  staff: [

    {
      id: "RRQ_COACH",
      team: "RRQ",
      name: "Coach Adi",
      role: "Head Coach",
      rating: 90
    },

    {
      id: "ONIC_COACH",
      team: "ONIC",
      name: "CW",
      role: "Head Coach",
      rating: 92
    },

    {
      id: "EVOS_COACH",
      team: "EVOS",
      name: "Aldo",
      role: "Head Coach",
      rating: 87
    },

    {
      id: "BTR_COACH",
      team: "BTR",
      name: "K Dot",
      role: "Head Coach",
      rating: 88
    },

    {
      id: "AE_COACH",
      team: "AE",
      name: "Xepher",
      role: "Head Coach",
      rating: 85
    },

    {
      id: "DEWA_COACH",
      team: "DEWA",
      name: "Right",
      role: "Head Coach",
      rating: 84
    },

    {
      id: "GEEK_COACH",
      team: "GEEK",
      name: "Erpang",
      role: "Head Coach",
      rating: 83
    },

    {
      id: "NAVI_COACH",
      team: "NAVI",
      name: "YNOT",
      role: "Head Coach",
      rating: 85
    },

    {
      id: "TLID_COACH",
      team: "TLID",
      name: "Honjaw",
      role: "Head Coach",
      rating: 89
    }

  ],

  standings: [],

  schedule: [],

  history: [],

  currentMatch: null

};


/* =====================================================
   TRAINING
===================================================== */

const trainingTypes = {

  intensive: {
    name: "Intensive Training",
    cost: 100,
    description:
      "Latihan keras untuk meningkatkan perkembangan pemain.",
    morale: -3,
    chemistry: 0,
    stamina: -15,
    development: 1
  },

  tactical: {
    name: "Tactical Training",
    cost: 75,
    description:
      "Meningkatkan chemistry dan pemahaman strategi.",
    morale: 2,
    chemistry: 5,
    stamina: -8,
    development: 0.5
  },

  physical: {
    name: "Physical Training",
    cost: 50,
    description:
      "Meningkatkan kondisi fisik dan stamina pemain.",
    morale: 1,
    chemistry: 0,
    stamina: 10,
    development: 0
  },

  recovery: {
    name: "Recovery",
    cost: 25,
    description:
      "Memulihkan stamina dan meningkatkan moral.",
    morale: 6,
    chemistry: 1,
    stamina: 25,
    development: 0
  },

  bootcamp: {
    name: "Bootcamp",
    cost: 250,
    description:
      "Program latihan khusus untuk seluruh tim.",
    morale: 8,
    chemistry: 12,
    stamina: -10,
    development: 1
  }

};


/* =====================================================
   STANDINGS
===================================================== */

function createStandings() {

  return game.teams.map(team => ({

    team: team.id,

    played: 0,

    wins: 0,

    losses: 0,

    points: 0,

    gameWins: 0,

    gameLosses: 0

  }));

}


/* =====================================================
   SCHEDULE GENERATOR
===================================================== */

function generateSchedule() {

  const ids =
    game.teams.map(team => team.id);

  const matches = [];

  let week = 1;

  const firstRound = [];

  for (let i = 0; i < ids.length; i++) {

    for (let j = i + 1; j < ids.length; j++) {

      firstRound.push({

        home: ids[i],

        away: ids[j]

      });

    }

  }

  const secondRound =
    firstRound.map(match => ({

      home: match.away,

      away: match.home

    }));

  const all =
    firstRound.concat(secondRound);

  all.forEach((match,index) => {

    matches.push({

      id: index + 1,

      week:

        Math.floor(index / 4) + 1,

      home: match.home,

      away: match.away,

      played: false,

      result: null

    });

  });

  return matches;

}


/* =====================================================
   PLAYER HELPERS
===================================================== */

function getTeamPlayers(teamId) {

  return game.players.filter(
    player => player.team === teamId
  );

}


function getManagerPlayers() {

  return getTeamPlayers(game.managerTeam);

}


function getTeamStaff(teamId) {

  return game.staff.filter(
    staff => staff.team === teamId
  );

}


/* =====================================================
   TEAM STRENGTH
===================================================== */

function getTeamStrength(teamId) {

  const players =
    getTeamPlayers(teamId);

  if (!players.length) return 50;

  const starters =
    players.filter(
      player => player.status === "Starter"
    );

  const pool =
    starters.length >= 5
      ? starters
      : players;

  const total =
    pool.reduce(
      (sum,player) => sum + player.ovr,
      0
    );

  const average =
    total / pool.length;

  const team =
    game.teams.find(
      t => t.id === teamId
    );

  if (!team) return average;

  const moraleBonus =
    (team.morale - 50) * 0.08;

  const chemistryBonus =
    (team.chemistry - 50) * 0.08;

  return average +
    moraleBonus +
    chemistryBonus;

}


/* =====================================================
   MANAGER LINEUP STRENGTH
===================================================== */

function getManagerLineupStrength() {

  const roles = [
    "EXP",
    "Jungler",
    "Mid",
    "Gold",
    "Roamer"
  ];

  const players =
    getManagerPlayers();

  const selected = [];

  roles.forEach(role => {

    let player = null;

    if (game.lineup[role]) {

      player =
        players.find(
          p => p.id === game.lineup[role]
        );

    }

    if (!player) {

      player =
        players.find(
          p => normalizeRoleGame(p.role) === role &&
          p.status === "Starter"
        );

    }

    if (player) {
      selected.push(player);
    }

  });

  if (selected.length < 5) {

    return getTeamStrength(game.managerTeam);

  }

  const average =
    selected.reduce(
      (sum,p) => sum + p.ovr,
      0
    ) / selected.length;

  const team =
    game.teams.find(
      t => t.id === game.managerTeam
    );

  return average +
    ((team.morale - 50) * 0.08) +
    ((team.chemistry - 50) * 0.08);

}


function normalizeRoleGame(role) {

  if (!role) return "";

  const r =
    role.toLowerCase();

  if (r.includes("jung")) return "Jungler";

  if (r.includes("exp")) return "EXP";

  if (r.includes("gold")) return "Gold";

  if (r.includes("mid")) return "Mid";

  if (r.includes("roam")) return "Roamer";

  return role;

}


/* =====================================================
   NEXT MANAGER MATCH
===================================================== */

function getNextManagerMatch() {

  return game.schedule.find(match =>

    !match.played &&

    (
      match.home === game.managerTeam ||
      match.away === game.managerTeam
    )

  );

}


/* =====================================================
   BO3 ENGINE
===================================================== */

function simulateBo3(teamA,teamB) {

  let winsA = 0;

  let winsB = 0;

  const strengthA =
    teamA === game.managerTeam
      ? getManagerLineupStrength()
      : getTeamStrength(teamA);

  const strengthB =
    teamB === game.managerTeam
      ? getManagerLineupStrength()
      : getTeamStrength(teamB);

  while (
    winsA < 2 &&
    winsB < 2
  ) {

    const difference =
      strengthA - strengthB;

    const probabilityA =
      Math.min(
        0.85,
        Math.max(
          0.15,
          0.5 + difference * 0.015
        )
      );

    if (Math.random() < probabilityA) {

      winsA++;

    } else {

      winsB++;

    }

  }

  return {

    winner:
      winsA > winsB
        ? teamA
        : teamB,

    score:
      `${winsA}-${winsB}`

  };

}


/* =====================================================
   UPDATE STANDINGS
===================================================== */

function updateStandings(
  winner,
  loser,
  score
) {

  const winningRow =
    game.standings.find(
      row => row.team === winner
    );

  const losingRow =
    game.standings.find(
      row => row.team === loser
    );

  if (!winningRow || !losingRow) return;

  winningRow.played++;

  losingRow.played++;

  winningRow.wins++;

  losingRow.losses++;

  winningRow.points += 1;

  const parts =
    score.split("-");

  const winGames =
    Number(parts[0]);

  const loseGames =
    Number(parts[1]);

  winningRow.gameWins +=
    winGames;

  winningRow.gameLosses +=
    loseGames;

  losingRow.gameWins +=
    loseGames;

  losingRow.gameLosses +=
    winGames;

}


/* =====================================================
   SORT STANDINGS
===================================================== */

function sortStandings(rows) {

  return [...rows].sort(
    (a,b) => {

      if (b.points !== a.points) {

        return b.points - a.points;

      }

      const diffA =
        a.gameWins - a.gameLosses;

      const diffB =
        b.gameWins - b.gameLosses;

      return diffB - diffA;

    }
  );

}


/* =====================================================
   PLAY MATCH
===================================================== */

function playMatch(matchId) {

  const match =
    game.schedule.find(
      m => m.id === matchId
    );

  if (!match || match.played) {

    return {
      success: false,
      message: "Pertandingan tidak tersedia."
    };

  }

  const result =
    simulateBo3(
      match.home,
      match.away
    );

  const loser =
    result.winner === match.home
      ? match.away
      : match.home;

  match.played = true;

  match.result = result;

  updateStandings(
    result.winner,
    loser,
    result.score
  );

  game.currentMatch = {

    ...match,

    winner: result.winner,

    loser: loser,

    score: result.score

  };

  saveGame();

  return {

    success: true,

    message:
      `Hasil pertandingan: ${result.score}`,

    result

  };

}


/* =====================================================
   SIMULATE AI MATCHES
===================================================== */

function simulateAllAI() {

  const manager =
    game.managerTeam;

  game.schedule.forEach(match => {

    if (
      match.played ||
      match.home === manager ||
      match.away === manager
    ) {

      return;

    }

    playMatch(match.id);

  });

}


/* =====================================================
   TRAINING
===================================================== */

function initializePlayerStats() {

  game.players.forEach(player => {

    if (player.stamina === undefined) {

      player.stamina = 100;

    }

    if (player.form === undefined) {

      player.form = 75;

    }

  });

}


function canTrain() {

  if (!game.managerTeam) {

    return {
      allowed: false,
      message: "Belum memilih tim."
    };

  }

  if (
    game.training.lastTrainingWeek ===
    game.week
  ) {

    return {
      allowed: false,
      message:
        "Tim sudah latihan minggu ini."
    };

  }

  return {
    allowed: true
  };

}


function applyTraining(type) {

  const training =
    trainingTypes[type];

  if (!training) {

    return {
      success: false,
      message: "Training tidak ditemukan."
    };

  }

  const permission =
    canTrain();

  if (!permission.allowed) {

    return {
      success: false,
      message: permission.message
    };

  }

  if (game.budget < training.cost) {

    return {
      success: false,
      message: "Budget tidak cukup."
    };

  }

  const team =
    game.teams.find(
      t => t.id === game.managerTeam
    );

  const players =
    getManagerPlayers();

  players.forEach(player => {

    player.stamina =
      Math.max(
        0,
        Math.min(
          100,
          player.stamina +
          training.stamina
        )
      );

    player.form =
      Math.max(
        0,
        Math.min(
          100,
          player.form +
          training.morale * 0.5
        )
      );

    if (
      training.development > 0 &&
      player.ovr < player.potential
    ) {

      player.ovr =
        Math.min(
          player.potential,
          player.ovr +
          training.development
        );

    }

  });

  game.budget -=
    training.cost;

  team.morale =
    Math.max(
      0,
      Math.min(
        100,
        team.morale +
        training.morale
      )
    );

  team.chemistry =
    Math.max(
      0,
      Math.min(
        100,
        team.chemistry +
        training.chemistry
      )
    );

  game.training.lastTrainingWeek =
    game.week;

  game.training.history.push({

    week: game.week,

    type: training.name,

    cost: training.cost

  });

  saveGame();

  return {

    success: true,

    message:
      `${training.name} selesai!`

  };

}


function getTrainingSummary() {

  if (!game.managerTeam) {

    return "Pilih tim terlebih dahulu.";

  }

  const team =
    game.teams.find(
      t => t.id === game.managerTeam
    );

  const players =
    getManagerPlayers();

  const averageStamina =
    players.length
      ? Math.round(
          players.reduce(
            (sum,p) =>
              sum + p.stamina,
            0
          ) / players.length
        )
      : 0;

  return `
    Morale: ${team.morale} |
    Chemistry: ${team.chemistry} |
    Stamina rata-rata: ${averageStamina} |
    Minggu: ${game.week}
  `;

}


/* =====================================================
   ADVANCE WEEK
===================================================== */

function advanceWeek() {

  game.week++;

  game.training.lastTrainingWeek = 0;

  const players =
    getManagerPlayers();

  players.forEach(player => {

    player.stamina =
      Math.min(
        100,
        player.stamina + 10
      );

  });

  saveGame();

}


/* =====================================================
   SAVE GAME
===================================================== */

function saveGame() {

  try {

    localStorage.setItem(
      SAVE_KEY,
      JSON.stringify(game)
    );

  } catch(error) {

    console.error(
      "Gagal menyimpan game:",
      error
    );

  }

}


/* =====================================================
   LOAD GAME
===================================================== */

function loadGame() {

  try {

    const saved =
      localStorage.getItem(
        SAVE_KEY
      );

    if (!saved) {

      return false;

    }

    const data =
      JSON.parse(saved);

    Object.assign(
      game,
      data
    );

    if (!game.training) {

      game.training = {

        lastTrainingWeek: 0,

        history: []

      };

    }

    initializePlayerStats();

    return true;

  } catch(error) {

    console.error(
      "Gagal memuat save:",
      error
    );

    return false;

  }

}


/* =====================================================
   RESET GAME
===================================================== */

function resetGame() {

  localStorage.removeItem(
    SAVE_KEY
  );

  location.reload();

}


/* =====================================================
   START NEW CAREER
===================================================== */

function startNewCareer(teamId) {

  game.managerTeam =
    teamId;

  const team =
    game.teams.find(
      t => t.id === teamId
    );

  if (!team) return;

  game.budget =
    team.budget;

  game.phase =
    "Regular Season";

  game.week = 1;

  game.currentMatch = null;

  game.lineup = {

    EXP: null,

    Jungler: null,

    Mid: null,

    Gold: null,

    Roamer: null

  };

  game.training = {

    lastTrainingWeek: 0,

    history: []

  };

  game.standings =
    createStandings();

  game.schedule =
    generateSchedule();

  initializePlayerStats();

  saveGame();

}


/* =====================================================
   INITIALIZE
===================================================== */

function initializeGame() {

  const loaded =
    loadGame();

  if (!loaded) {

    game.standings =
      createStandings();

    game.schedule =
      generateSchedule();

    initializePlayerStats();

    saveGame();

  } else {

    initializePlayerStats();

    if (
      !game.standings ||
      !game.standings.length
    ) {

      game.standings =
        createStandings();

    }

    if (
      !game.schedule ||
      !game.schedule.length
    ) {

      game.schedule =
        generateSchedule();

    }

    saveGame();

  }

}


/* =====================================================
   START ENGINE
===================================================== */

initializeGame();
