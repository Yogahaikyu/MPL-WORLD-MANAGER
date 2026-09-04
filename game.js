/* =========================================================
   MPL WORLD MANAGER
   MPL INDONESIA - LEAGUE ENGINE
   ========================================================= */

const game = {
  season: 18,
  week: 1,

  currentPage: "dashboard",

  budget: 5000000000,

  leagues: {
    indonesia: {
      id: "mpl_id",
      name: "MPL Indonesia",
      region: "Indonesia",
      tier: 1,
      teams: [
        "rrq",
        "onic",
        "evos",
        "btr",
        "alterego",
        "dewa",
        "geek",
        "navi",
        "tlid"
      ]
    }
  },

  teams: {
    rrq: {
      id: "rrq",
      name: "RRQ Hoshi",
      short: "RRQ",
      coach: "Adi",
      stars: 0,
      mplTitles: 0,
      worldTitles: 0,
      reputation: 96,
      chemistry: 88,
      morale: 87
    },

    onic: {
      id: "onic",
      name: "ONIC",
      short: "ONIC",
      coach: "CW",
      stars: 0,
      mplTitles: 0,
      worldTitles: 0,
      reputation: 95,
      chemistry: 90,
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
      reputation: 91,
      chemistry: 84,
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
      reputation: 90,
      chemistry: 86,
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
      chemistry: 85,
      morale: 83
    },

    dewa: {
      id: "dewa",
      name: "Dewa United",
      short: "DEWA",
      coach: "Right",
      stars: 0,
      mplTitles: 0,
      worldTitles: 0,
      reputation: 84,
      chemistry: 80,
      morale: 80
    },

    geek: {
      id: "geek",
      name: "Geek Fam",
      short: "GEEK",
      coach: "Erpang",
      stars: 0,
      mplTitles: 0,
      worldTitles: 0,
      reputation: 83,
      chemistry: 81,
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
      reputation: 88,
      chemistry: 84,
      morale: 82
    },

    tlid: {
      id: "tlid",
      name: "Team Liquid ID",
      short: "TLID",
      coach: "HonJaw",
      stars: 0,
      mplTitles: 0,
      worldTitles: 0,
      reputation: 92,
      chemistry: 89,
      morale: 87
    }
  },

  players: [
    // RRQ
    {id:"p001",name:"Hajirin",team:"rrq",role:"Mid Lane",age:20,rating:82,potential:89,salary:70000000,morale:87,stamina:100},
    {id:"p002",name:"Arthur",team:"rrq",role:"Gold Lane",age:20,rating:84,potential:91,salary:75000000,morale:88,stamina:100},
    {id:"p003",name:"Said",team:"rrq",role:"Roam",age:21,rating:83,potential:88,salary:65000000,morale:86,stamina:100},
    {id:"p004",name:"Joshua",team:"rrq",role:"EXP Lane",age:20,rating:81,potential:89,salary:60000000,morale:84,stamina:100},
    {id:"p005",name:"Demonkite",team:"rrq",role:"Jungle",age:22,rating:87,potential:91,salary:90000000,morale:90,stamina:100},
    {id:"p006",name:"Habil",team:"rrq",role:"Gold Lane",age:19,rating:79,potential:88,salary:45000000,morale:82,stamina:100},
    {id:"p007",name:"Clayyy",team:"rrq",role:"Mid Lane",age:23,rating:86,potential:88,salary:85000000,morale:89,stamina:100},

    // ONIC
    {id:"p008",name:"Kiboy",team:"onic",role:"Roam",age:24,rating:91,potential:93,salary:110000000,morale:92,stamina:100},
    {id:"p009",name:"Sanz",team:"onic",role:"Mid Lane",age:24,rating:92,potential:94,salary:120000000,morale:94,stamina:100},
    {id:"p010",name:"Kairi",team:"onic",role:"Jungle",age:22,rating:94,potential:97,salary:140000000,morale:95,stamina:100},
    {id:"p011",name:"Lutpi",team:"onic",role:"EXP Lane",age:21,rating:82,potential:90,salary:60000000,morale:85,stamina:100},
    {id:"p012",name:"Kelra",team:"onic",role:"Gold Lane",age:21,rating:92,potential:96,salary:135000000,morale:94,stamina:100},
    {id:"p013",name:"SSamuel",team:"onic",role:"Roam",age:20,rating:79,potential:87,salary:45000000,morale:83,stamina:100},

    // EVOS
    {id:"p014",name:"Alberttt",team:"evos",role:"Jungle",age:22,rating:90,potential:94,salary:120000000,morale:89,stamina:100},
    {id:"p015",name:"Erlan",team:"evos",role:"Gold Lane",age:20,rating:82,potential:90,salary:65000000,morale:83,stamina:100},
    {id:"p016",name:"Vell",team:"evos",role:"EXP Lane",age:20,rating:81,potential:89,salary:60000000,morale:82,stamina:100},
    {id:"p017",name:"Muezza",team:"evos",role:"Roam",age:21,rating:80,potential:88,salary:55000000,morale:81,stamina:100},
    {id:"p018",name:"Rendyyy",team:"evos",role:"EXP Lane",age:19,rating:77,potential:86,salary:40000000,morale:80,stamina:100},
    {id:"p019",name:"Ryzaa",team:"evos",role:"Mid Lane",age:20,rating:81,potential:89,salary:55000000,morale:82,stamina:100},

    // BTR
    {id:"p020",name:"Morenooo",team:"btr",role:"Mid Lane",age:21,rating:86,potential:92,salary:85000000,morale:87,stamina:100},
    {id:"p021",name:"EMANN",team:"btr",role:"Gold Lane",age:23,rating:91,potential:94,salary:115000000,morale:91,stamina:100},
    {id:"p022",name:"Finn",team:"btr",role:"Roam",age:21,rating:84,potential:90,salary:70000000,morale:86,stamina:100},
    {id:"p023",name:"Nnael",team:"btr",role:"Jungle",age:20,rating:87,potential:94,salary:90000000,morale:89,stamina:100},
    {id:"p024",name:"Shogun",team:"btr",role:"EXP Lane",age:21,rating:83,potential:90,salary:65000000,morale:85,stamina:100},
    {id:"p025",name:"Miguel",team:"btr",role:"Gold Lane",age:19,rating:78,potential:88,salary:45000000,morale:81,stamina:100},

    // ALTER EGO
    {id:"p026",name:"Nino",team:"alterego",role:"EXP Lane",age:21,rating:84,potential:91,salary:70000000,morale:87,stamina:100},
    {id:"p027",name:"Alexander",team:"alterego",role:"Roam",age:22,rating:85,potential:89,salary:75000000,morale:86,stamina:100},
    {id:"p028",name:"Dingarai",team:"alterego",role:"Gold Lane",age:20,rating:82,potential:90,salary:60000000,morale:84,stamina:100},
    {id:"p029",name:"Dalvin",team:"alterego",role:"Mid Lane",age:21,rating:81,potential:89,salary:55000000,morale:83,stamina:100},
    {id:"p030",name:"Halim",team:"alterego",role:"Mid Lane",age:20,rating:79,potential:88,salary:50000000,morale:82,stamina:100},
    {id:"p031",name:"Reyy",team:"alterego",role:"Jungle",age:20,rating:84,potential:92,salary:70000000,morale:86,stamina:100},
    {id:"p032",name:"Affan",team:"alterego",role:"Jungle",age:19,rating:78,potential:88,salary:45000000,morale:80,stamina:100},
    {id:"p033",name:"Ivann",team:"alterego",role:"Roam",age:20,rating:78,potential:87,salary:45000000,morale:81,stamina:100},

    // DEWA
    {id:"p034",name:"Octa",team:"dewa",role:"Mid Lane",age:21,rating:79,potential:88,salary:50000000,morale:80,stamina:100},
    {id:"p035",name:"Qinn",team:"dewa",role:"EXP Lane",age:20,rating:78,potential:88,salary:45000000,morale:80,stamina:100},
    {id:"p036",name:"Maybeee",team:"dewa",role:"Gold Lane",age:21,rating:80,potential:89,salary:50000000,morale:81,stamina:100},
    {id:"p037",name:"Kayn",team:"dewa",role:"Jungle",age:20,rating:81,potential:90,salary:55000000,morale:83,stamina:100},
    {id:"p038",name:"Itoshi Kesu",team:"dewa",role:"Roam",age:21,rating:79,potential:88,salary:50000000,morale:80,stamina:100},
    {id:"p039",name:"Rul Good",team:"dewa",role:"Roam",age:22,rating:77,potential:86,salary:40000000,morale:79,stamina:100},
    {id:"p040",name:"Hazle",team:"dewa",role:"Jungle",age:20,rating:76,potential:87,salary:40000000,morale:78,stamina:100},

    // GEEK
    {id:"p041",name:"Aboyy",team:"geek",role:"Mid Lane",age:22,rating:84,potential:90,salary:70000000,morale:83,stamina:100},
    {id:"p042",name:"Nazara",team:"geek",role:"Jungle",age:20,rating:79,potential:89,salary:50000000,morale:80,stamina:100},
    {id:"p043",name:"Kennzyyskie",team:"geek",role:"Gold Lane",age:20,rating:80,potential:89,salary:50000000,morale:81,stamina:100},
    {id:"p044",name:"Marcel",team:"geek",role:"EXP Lane",age:21,rating:78,potential:87,salary:45000000,morale:79,stamina:100},
    {id:"p045",name:"Febriii",team:"geek",role:"EXP Lane",age:19,rating:76,potential:86,salary:40000000,morale:78,stamina:100},
    {id:"p046",name:"Frenzyy",team:"geek",role:"Roam",age:20,rating:80,potential:88,salary:50000000,morale:81,stamina:100},

    // NAVI
    {id:"p047",name:"Karss",team:"navi",role:"EXP Lane",age:21,rating:83,potential:91,salary:65000000,morale:85,stamina:100},
    {id:"p048",name:"Andoryuuu",team:"navi",role:"Jungle",age:20,rating:86,potential:93,salary:80000000,morale:87,stamina:100},
    {id:"p049",name:"Aprho",team:"navi",role:"Roam",age:21,rating:82,potential:90,salary:60000000,morale:84,stamina:100},
    {id:"p050",name:"Zeonn",team:"navi",role:"Gold Lane",age:20,rating:85,potential:92,salary:75000000,morale:87,stamina:100},
    {id:"p051",name:"Jiizee",team:"navi",role:"Mid Lane",age:20,rating:84,potential:92,salary:70000000,morale:86,stamina:100},
    {id:"p052",name:"Febbb",team:"navi",role:"EXP Lane",age:19,rating:78,potential:87,salary:45000000,morale:80,stamina:100},
    {id:"p053",name:"Joshuua",team:"navi",role:"Jungle",age:20,rating:77,potential:88,salary:45000000,morale:79,stamina:100},

    // TLID
    {id:"p054",name:"Aran",team:"tlid",role:"EXP Lane",age:22,rating:87,potential:92,salary:85000000,morale:89,stamina:100},
    {id:"p055",name:"Drichel",team:"tlid",role:"Mid Lane",age:21,rating:85,potential:92,salary:80000000,morale:88,stamina:100},
    {id:"p056",name:"Lyoni",team:"tlid",role:"Roam",age:22,rating:86,potential:91,salary:80000000,morale:88,stamina:100},
    {id:"p057",name:"Keven",team:"tlid",role:"Gold Lane",age:21,rating:89,potential:94,salary:100000000,morale:91,stamina:100},
    {id:"p058",name:"Anaver",team:"tlid",role:"Mid Lane",age:20,rating:81,potential:90,salary:55000000,morale:83,stamina:100},
    {id:"p059",name:"Kevin",team:"tlid",role:"Jungle",age:22,rating:88,potential:93,salary:95000000,morale:90,stamina:100}
  ],

  standings: {},

  schedule: [],

  history: {
    mpl: [],
    world: [],
    seasons: []
  },

  currentMatch: null
};


/* =========================================================
   BASIC FUNCTIONS
   ========================================================= */

function getTeam(teamId) {
  return game.teams[teamId];
}

function getPlayer(playerId) {
  return game.players.find(p => p.id === playerId);
}

function getTeamPlayers(teamId) {
  return game.players.filter(p => p.team === teamId);
}

function formatMoney(amount) {
  return "Rp " + Number(amount).toLocaleString("id-ID");
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


/* =========================================================
   STANDINGS
   ========================================================= */

function createEmptyStandings() {
  game.standings = {};

  Object.keys(game.teams).forEach(teamId => {
    game.standings[teamId] = {
      teamId: teamId,
      matchWin: 0,
      matchLoss: 0,
      gameWin: 0,
      gameLoss: 0,
      points: 0
    };
  });
}

function getNetGameWin(teamId) {
  const s = game.standings[teamId];
  return s.gameWin - s.gameLoss;
}

function getSortedStandings() {
  return Object.values(game.standings).sort((a, b) => {
    if (b.points !== a.points) {
      return b.points - a.points;
    }

    const netA = a.gameWin - a.gameLoss;
    const netB = b.gameWin - b.gameLoss;

    if (netB !== netA) {
      return netB - netA;
    }

    return b.gameWin - a.gameWin;
  });
}


/* =========================================================
   TEAM POWER
   ========================================================= */

function calculateTeamPower(teamId) {
  const players = getTeamPlayers(teamId);

  if (!players.length) return 50;

  const total = players.reduce((sum, player) => {
    return sum + player.rating;
  }, 0);

  const average = total / players.length;

  const team = getTeam(teamId);

  return Math.round(
    average +
    ((team.chemistry - 80) * 0.10) +
    ((team.morale - 80) * 0.08)
  );
}


/* =========================================================
   MATCH SIMULATION
   ========================================================= */

function simulateGame(teamA, teamB) {
  const powerA = calculateTeamPower(teamA);
  const powerB = calculateTeamPower(teamB);

  const chanceA = powerA / (powerA + powerB);

  return Math.random() < chanceA ? teamA : teamB;
}

function simulateBo3(teamA, teamB) {

  let scoreA = 0;
  let scoreB = 0;

  const games = [];

  while (scoreA < 2 && scoreB < 2) {

    const winner = simulateGame(teamA, teamB);

    let loser = winner === teamA ? teamB : teamA;

    let killsWinner = random(8, 22);
    let killsLoser = random(2, Math.max(4, killsWinner - 2));

    games.push({
      winner: winner,
      loser: loser,
      killsWinner: killsWinner,
      killsLoser: killsLoser
    });

    if (winner === teamA) {
      scoreA++;
    } else {
      scoreB++;
    }
  }

  const winner = scoreA > scoreB ? teamA : teamB;
  const loser = winner === teamA ? teamB : teamA;

  return {
    teamA,
    teamB,
    scoreA,
    scoreB,
    winner,
    loser,
    games
  };
}


/* =========================================================
   APPLY MATCH RESULT
   ========================================================= */

function applyMatchResult(result) {

  const a = game.standings[result.teamA];
  const b = game.standings[result.teamB];

  if (result.winner === result.teamA) {
    a.matchWin++;
    a.points++;

    b.matchLoss++;
  } else {
    b.matchWin++;
    b.points++;

    a.matchLoss++;
  }

  result.games.forEach(g => {

    if (g.winner === result.teamA) {
      a.gameWin++;
      b.gameLoss++;
    } else {
      b.gameWin++;
      a.gameLoss++;
    }

  });

  game.currentMatch = result;

  updateMoraleAfterMatch(result);
}


/* =========================================================
   MORALE
   ========================================================= */

function updateMoraleAfterMatch(result) {

  const winnerTeam = getTeam(result.winner);
  const loserTeam = getTeam(result.loser);

  winnerTeam.morale = Math.min(
    100,
    winnerTeam.morale + random(2, 4)
  );

  loserTeam.morale = Math.max(
    50,
    loserTeam.morale - random(1, 3)
  );

  getTeamPlayers(result.winner).forEach(p => {
    p.morale = Math.min(100, p.morale + 2);
    p.stamina = Math.max(0, p.stamina - random(8, 15));
  });

  getTeamPlayers(result.loser).forEach(p => {
    p.morale = Math.max(50, p.morale - 1);
    p.stamina = Math.max(0, p.stamina - random(8, 15));
  });
}


/* =========================================================
   MVP
   ========================================================= */

function calculateMVP(result) {

  const players = [
    ...getTeamPlayers(result.teamA),
    ...getTeamPlayers(result.teamB)
  ];

  if (!players.length) return null;

  const winnerPlayers = getTeamPlayers(result.winner);

  const sorted = winnerPlayers
    .slice()
    .sort((a, b) => b.rating - a.rating);

  return sorted[0];
}


/* =========================================================
   OPEN MATCH
   ========================================================= */

function bukaMatch(teamA, teamB) {

  const result = simulateBo3(teamA, teamB);

  applyMatchResult(result);

  const mvp = calculateMVP(result);

  game.currentMatch.mvp = mvp ? mvp.id : null;

  renderLiveMatch();

  if (typeof showPage === "function") {
    showPage("match");
  }
}


/* =========================================================
   LIVE MATCH SCREEN
   ========================================================= */

function renderLiveMatch() {

  const container = document.getElementById("matchPage");

  if (!container || !game.currentMatch) return;

  const m = game.currentMatch;

  const teamA = getTeam(m.teamA);
  const teamB = getTeam(m.teamB);

  const mvp = m.mvp ? getPlayer(m.mvp) : null;

  let gamesHTML = "";

  m.games.forEach((g, index) => {

    const winner = getTeam(g.winner);

    gamesHTML += `
      <div style="
        padding:10px;
        margin:8px 0;
        background:#151515;
        border-radius:10px;
      ">
        🎮 Game ${index + 1}<br>
        <b>${winner.name}</b> menang
        <br>
        ${g.killsWinner} - ${g.killsLoser} kills
      </div>
    `;
  });

  const standings = getSortedStandings();

  let tableHTML = "";

  standings.forEach((s, index) => {

    const team = getTeam(s.teamId);

    tableHTML += `
      <tr>
        <td>${index + 1}</td>
        <td><b>${team.short}</b></td>
        <td>${s.points}</td>
        <td>${s.matchWin}-${s.matchLoss}</td>
        <td>${s.gameWin - s.gameLoss > 0 ? "+" : ""}${s.gameWin - s.gameLoss}</td>
        <td>${s.gameWin}-${s.gameLoss}</td>
      </tr>
    `;
  });

  container.innerHTML = `
    <div style="padding:15px">

      <button onclick="showPage('dashboard')">
        ← Kembali
      </button>

      <h2>⚔️ MPL INDONESIA</h2>

      <div style="
        background:#111;
        padding:20px;
        border-radius:15px;
        text-align:center;
      ">

        <h2>
          ${teamA.name}
          <br>
          ${m.scoreA} - ${m.scoreB}
          <br>
          ${teamB.name}
        </h2>

        <p>
          ${teamA.short} VS ${teamB.short}
        </p>

      </div>

      <h3>🎮 Detail Game</h3>

      ${gamesHTML}

      <div style="
        background:#151515;
        padding:15px;
        border-radius:12px;
        margin-top:15px;
      ">

        <h3>🏅 MVP</h3>

        ${
          mvp
          ? `
            <b>${mvp.name}</b><br>
            ${mvp.role}<br>
            Rating: ${mvp.rating}
          `
          : "-"
        }

      </div>

      <h3>📊 Klasemen Sementara</h3>

      <div style="overflow-x:auto">

        <table style="width:100%;border-collapse:collapse">

          <thead>
            <tr>
              <th>#</th>
              <th>Team</th>
              <th>MP</th>
              <th>W-L</th>
              <th>NGW</th>
              <th>GW-L</th>
            </tr>
          </thead>

          <tbody>
            ${tableHTML}
          </tbody>

        </table>

      </div>

    </div>
  `;
}


/* =========================================================
   SCHEDULE
   ========================================================= */

function generateSchedule() {

  game.schedule = [];

  const teams = Object.keys(game.teams);

  for (let i = 0; i < teams.length; i++) {

    for (let j = i + 1; j < teams.length; j++) {

      game.schedule.push({
        week: random(1, 9),
        teamA: teams[i],
        teamB: teams[j],
        played: false
      });

      game.schedule.push({
        week: random(10, 18),
        teamA: teams[j],
        teamB: teams[i],
        played: false
      });

    }
  }

  game.schedule.sort((a, b) => a.week - b.week);

  return game.schedule;
}


/* =========================================================
   PLAY MATCH FROM SCHEDULE
   ========================================================= */

function playScheduledMatch(index) {

  const match = game.schedule[index];

  if (!match) return;

  if (match.played) {
    alert("Pertandingan ini sudah dimainkan.");
    return;
  }

  const result = simulateBo3(match.teamA, match.teamB);

  applyMatchResult(result);

  match.played = true;

  const mvp = calculateMVP(result);

  game.currentMatch = result;
  game.currentMatch.mvp = mvp ? mvp.id : null;

  renderLiveMatch();

  if (typeof showPage === "function") {
    showPage("match");
  }
}


/* =========================================================
   HISTORY / CHAMPIONS
   ========================================================= */

function recordMPLChampion(teamId, runnerUpId) {

  const team = getTeam(teamId);

  if (!team) return;

  team.mplTitles++;
  team.stars++;

  game.history.mpl.push({
    season: game.season,
    champion: teamId,
    runnerUp: runnerUpId || null
  });

  game.history.seasons.push({
    season: game.season,
    champion: teamId,
    runnerUp: runnerUpId || null
  });

  alert(
    "🏆 " +
    team.name +
    " menjadi JUARA MPL INDONESIA Season " +
    game.season +
    "!\n\n⭐ Gelar MPL: " +
    team.mplTitles
  );
}


/* =========================================================
   WORLD CHAMPION
   ========================================================= */

function recordWorldChampion(teamId) {

  const team = getTeam(teamId);

  if (!team) return;

  team.worldTitles++;
  team.stars++;

  game.history.world.push({
    season: game.season,
    champion: teamId
  });
}


/* =========================================================
   HISTORY PAGE
   ========================================================= */

function renderHistory() {

  const container = document.getElementById("historyPage");

  if (!container) return;

  let mplHTML = "";

  if (!game.history.mpl.length) {
    mplHTML = "<p>Belum ada sejarah juara.</p>";
  } else {

    game.history.mpl
      .slice()
      .reverse()
      .forEach(h => {

        const champion = getTeam(h.champion);
        const runner = h.runnerUp ? getTeam(h.runnerUp) : null;

        mplHTML += `
          <div style="
            background:#151515;
            padding:15px;
            border-radius:12px;
            margin-bottom:10px;
          ">

            <b>Season ${h.season}</b><br>

            🏆 ${champion.name}

            ${
              runner
              ? `<br>🥈 ${runner.name}`
              : ""
            }

          </div>
        `;
      });
  }

  let teamsHTML = "";

  Object.values(game.teams)
    .sort((a,b) => b.stars - a.stars)
    .forEach(team => {

      teamsHTML += `
        <div style="
          background:#151515;
          padding:15px;
          border-radius:12px;
          margin-bottom:8px;
        ">

          <b>${team.name}</b>

          <div style="font-size:22px">
            ${"⭐".repeat(team.stars)}
          </div>

          MPL: ${team.mplTitles}x
          <br>
          World: ${team.worldTitles}x

        </div>
      `;
    });

  container.innerHTML = `

    <div style="padding:15px">

      <button onclick="showPage('dashboard')">
        ← Kembali
      </button>

      <h2>📚 History MPL Indonesia</h2>

      <h3>🏆 Juara MPL</h3>

      ${mplHTML}

      <h3>⭐ Hall of Fame</h3>

      ${teamsHTML}

    </div>
  `;
}


/* =========================================================
   TEAM ROSTER
   ========================================================= */

function bukaRoster(teamId) {

  const team = getTeam(teamId);

  if (!team) return;

  const players = getTeamPlayers(teamId);

  const container = document.getElementById("rosterPage");

  if (!container) return;

  let html = `
    <div style="padding:15px">

      <button onclick="showPage('teams')">
        ← Kembali
      </button>

      <h2>${team.name}</h2>

      <div style="font-size:22px">
        ${"⭐".repeat(team.stars)}
      </div>

      <p>
        🏆 MPL Champion: ${team.mplTitles}x
        <br>
        🌎 World Champion: ${team.worldTitles}x
      </p>

      <p>
        Coach: ${team.coach}
      </p>

      <p>
        Team Power:
        <b>${calculateTeamPower(teamId)}</b>
      </p>
  `;

  players.forEach(player => {

    html += `
      <div style="
        background:#151515;
        padding:12px;
        margin:8px 0;
        border-radius:10px;
      ">

        <b>${player.name}</b>

        <br>

        ${player.role}

        <br>

        Rating:
        <b>${player.rating}</b>

        | Potential:
        ${player.potential}

        <br>

        Salary:
        ${formatMoney(player.salary)}

        <br>

        Morale:
        ${player.morale}

        | Stamina:
        ${player.stamina}

      </div>
    `;
  });

  html += `</div>`;

  container.innerHTML = html;

  if (typeof showPage === "function") {
    showPage("roster");
  }
}


/* =========================================================
   TRAINING
   ========================================================= */

function trainPlayer(playerId) {

  const player = getPlayer(playerId);

  if (!player) return;

  if (player.stamina < 20) {
    alert("Stamina pemain terlalu rendah.");
    return;
  }

  player.stamina -= 20;

  const improvement = random(1, 3);

  if (player.rating < player.potential) {
    player.rating = Math.min(
      player.potential,
      player.rating + improvement
    );
  }

  player.morale = Math.min(100, player.morale + 2);

  alert(
    player.name +
    " selesai latihan!\nRating sekarang: " +
    player.rating
  );
}


/* =========================================================
   REST
   ========================================================= */

function restTeam(teamId) {

  const players = getTeamPlayers(teamId);

  players.forEach(player => {
    player.stamina = Math.min(100, player.stamina + 30);
  });

  getTeam(teamId).morale = Math.min(
    100,
    getTeam(teamId).morale + 2
  );
}


/* =========================================================
   TRANSFER
   ========================================================= */

function transferPlayer(playerId, newTeamId, fee) {

  const player = getPlayer(playerId);

  if (!player) return false;

  if (!game.teams[newTeamId]) return false;

  fee = Number(fee) || 0;

  if (game.budget < fee) {
    alert("Budget tidak cukup.");
    return false;
  }

  const oldTeam = player.team;

  player.team = newTeamId;

  game.budget -= fee;

  player.morale = 80;

  alert(
    player.name +
    " pindah dari " +
    getTeam(oldTeam).name +
    " ke " +
    getTeam(newTeamId).name
  );

  return true;
}


/* =========================================================
   CONTRACT
   ========================================================= */

function renewContract(playerId, salary) {

  const player = getPlayer(playerId);

  if (!player) return;

  player.salary = Number(salary);

  player.morale = Math.min(
    100,
    player.morale + 5
  );
}


/* =========================================================
   PLAYOFF
   ========================================================= */

function getPlayoffTeams() {

  return getSortedStandings()
    .slice(0, 6)
    .map(s => s.teamId);
}


/* =========================================================
   FINISH REGULAR SEASON
   ========================================================= */

function finishRegularSeason() {

  const top6 = getPlayoffTeams();

  alert(
    "🏟️ REGULAR SEASON SELESAI!\n\n" +
    "6 tim yang lolos playoff:\n\n" +
    top6
      .map((id, i) => (i + 1) + ". " + getTeam(id).name)
      .join("\n")
  );

  return top6;
}


/* =========================================================
   SAVE GAME
   ========================================================= */

function saveGame() {

  localStorage.setItem(
    "mplWorldManagerSave",
    JSON.stringify(game)
  );

  alert("💾 Game berhasil disimpan!");
}


/* =========================================================
   LOAD GAME
   ========================================================= */

function loadGame() {

  const saved = localStorage.getItem(
    "mplWorldManagerSave"
  );

  if (!saved) {
    alert("Belum ada save game.");
    return;
  }

  const loaded = JSON.parse(saved);

  Object.assign(game, loaded);

  alert("📂 Save berhasil dimuat.");

  if (typeof renderTeams === "function") {
    renderTeams();
  }

  if (typeof renderStandings === "function") {
    renderStandings();
  }
}


/* =========================================================
   DELETE SAVE
   ========================================================= */

function deleteSave() {

  localStorage.removeItem(
    "mplWorldManagerSave"
  );

  alert("🗑️ Save game dihapus.");
}


/* =========================================================
   NEW SEASON
   ========================================================= */

function startNewSeason() {

  game.season++;

  game.week = 1;

  createEmptyStandings();

  generateSchedule();

  game.currentMatch = null;

  game.history.seasons.push({
    season: game.season,
    started: true
  });

  saveGame();

  alert(
    "🏁 Season " +
    game.season +
    " dimulai!"
  );
}


/* =========================================================
   INIT
   ========================================================= */

function initGame() {

  if (!game.standings ||
      Object.keys(game.standings).length === 0) {

    createEmptyStandings();
  }

  if (!game.schedule.length) {
    generateSchedule();
  }

  console.log(
    "MPL World Manager Season " +
    game.season +
    " siap dimainkan."
  );
}

initGame();
```0
/* =========================================================
   MPL INDONESIA - REGULAR SEASON UPGRADE
   Tambahkan kode ini di PALING BAWAH game.js
   ========================================================= */


/* =========================================================
   GENERATE JADWAL MPL YANG BENAR
   9 TEAM = 18 WEEK
   DOUBLE ROUND ROBIN
   ========================================================= */

function generateMPLSchedule() {

    const teams = Object.keys(game.teams);

    game.schedule = [];

    /*
      Dengan 9 tim:
      - 18 minggu
      - setiap tim bermain 16 match
      - setiap tim mendapat 2 bye
      - total 72 pertandingan
    */

    const rounds = [];

    // Algoritma round robin
    let rotation = teams.slice();

    for (let round = 0; round < 8; round++) {

        const matches = [];

        for (let i = 0; i < 4; i++) {

            const teamA = rotation[i];
            const teamB = rotation[8 - i];

            matches.push({
                teamA: teamA,
                teamB: teamB
            });
        }

        rounds.push(matches);

        // Rotasi tim kecuali posisi pertama
        const fixed = rotation[0];
        const rest = rotation.slice(1);

        rest.unshift(rest.pop());

        rotation = [fixed, ...rest];
    }

    /*
      Putaran kedua
      Membalik kandang/tandang
    */

    const secondRounds = rounds.map(round => {

        return round.map(match => ({
            teamA: match.teamB,
            teamB: match.teamA
        }));

    });

    const allRounds = [
        ...rounds,
        ...secondRounds
    ];

    allRounds.forEach((round, roundIndex) => {

        round.forEach(match => {

            game.schedule.push({

                week: roundIndex + 1,

                teamA: match.teamA,

                teamB: match.teamB,

                played: false,

                result: null

            });

        });

    });

    return game.schedule;
}


/* =========================================================
   CEK JADWAL
========================================================= */

function ensureMPLSchedule() {

    if (
        !game.schedule ||
        game.schedule.length !== 72
    ) {

        generateMPLSchedule();

        saveGameSilent();

    }
}


/* =========================================================
   MATCH MINGGU SAAT INI
========================================================= */

function getCurrentWeekMatches() {

    ensureMPLSchedule();

    return game.schedule.filter(match =>
        Number(match.week) === Number(game.week)
    );
}


/* =========================================================
   CEK APAKAH WEEK SUDAH SELESAI
========================================================= */

function isCurrentWeekComplete() {

    const matches =
        getCurrentWeekMatches();

    if (!matches.length) {
        return true;
    }

    return matches.every(match => match.played);
}


/* =========================================================
   CEK MATCH YANG BELUM DIMAINKAN
========================================================= */

function getNextUnplayedMatch() {

    const matches =
        getCurrentWeekMatches();

    return matches.find(match =>
        !match.played
    );
}


/* =========================================================
   MAIN MATCH DARI JADWAL
========================================================= */

function playScheduledMatch(index) {

    ensureMPLSchedule();

    const match =
        game.schedule[index];

    if (!match) {
        alert("Pertandingan tidak ditemukan.");
        return;
    }

    if (match.played) {
        alert("Pertandingan ini sudah dimainkan.");
        return;
    }

    /*
      Pastikan pemain cukup stamina
    */

    const playersA =
        getTeamPlayers(match.teamA);

    const playersB =
        getTeamPlayers(match.teamB);

    const avgStaminaA =
        playersA.reduce(
            (sum,p) => sum + p.stamina,
            0
        ) / playersA.length;

    const avgStaminaB =
        playersB.reduce(
            (sum,p) => sum + p.stamina,
            0
        ) / playersB.length;


    /*
      Penalti stamina
    */

    const originalPowerA =
        calculateTeamPower(match.teamA);

    const originalPowerB =
        calculateTeamPower(match.teamB);

    const staminaBonusA =
        (avgStaminaA - 70) * 0.10;

    const staminaBonusB =
        (avgStaminaB - 70) * 0.10;


    /*
      Simulasi BO3
    */

    let scoreA = 0;
    let scoreB = 0;

    const games = [];

    while (
        scoreA < 2 &&
        scoreB < 2
    ) {

        const powerA =
            originalPowerA +
            staminaBonusA;

        const powerB =
            originalPowerB +
            staminaBonusB;

        const chanceA =
            powerA /
            (powerA + powerB);

        const winner =
            Math.random() < chanceA
            ? match.teamA
            : match.teamB;

        const loser =
            winner === match.teamA
            ? match.teamB
            : match.teamA;

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

        games.push({

            game:
                games.length + 1,

            winner:
                winner,

            loser:
                loser,

            killsWinner:
                winnerKills,

            killsLoser:
                loserKills

        });

        if (
            winner === match.teamA
        ) {

            scoreA++;

        } else {

            scoreB++;

        }
    }


    const winner =
        scoreA > scoreB
        ? match.teamA
        : match.teamB;

    const loser =
        winner === match.teamA
        ? match.teamB
        : match.teamA;


    const result = {

        teamA:
            match.teamA,

        teamB:
            match.teamB,

        scoreA:
            scoreA,

        scoreB:
            scoreB,

        winner:
            winner,

        loser:
            loser,

        games:
            games

    };


    /*
      Masukkan hasil ke klasemen
    */

    applyMatchResult(result);


    /*
      MVP
    */

    const mvp =
        calculateMVP(result);

    game.currentMatch =
        result;

    game.currentMatch.mvp =
        mvp
        ? mvp.id
        : null;


    /*
      Tandai match selesai
    */

    match.played = true;

    match.result = {

        scoreA:
            scoreA,

        scoreB:
            scoreB,

        winner:
            winner

    };


    /*
      Simpan
    */

    saveGameSilent();


    /*
      Tampilkan pertandingan
    */

    renderMatch();

    showPage("match");

}


/* =========================================================
   LANJUT KE WEEK BERIKUTNYA
========================================================= */

function nextMPLWeek() {

    if (!isCurrentWeekComplete()) {

        alert(
            "⚠️ Masih ada pertandingan Week " +
            game.week +
            " yang belum dimainkan."
        );

        return;

    }


    /*
      Kalau Week 18 selesai
    */

    if (game.week >= 18) {

        finishMPLRegularSeason();

        return;

    }


    game.week++;


    /*
      Recovery stamina sedikit
    */

    Object.values(game.teams)
        .forEach(team => {

            getTeamPlayers(team.id)
                .forEach(player => {

                    player.stamina =
                        Math.min(
                            100,
                            player.stamina + 35
                        );

                });

        });


    saveGameSilent();


    refreshUI();

    showPage("schedule");


    alert(
        "📅 Sekarang Week " +
        game.week +
        "!\n\n" +
        "Pertandingan baru sudah tersedia."
    );

}


/* =========================================================
   REGULAR SEASON SELESAI
========================================================= */

function finishMPLRegularSeason() {

    const standings =
        getSortedStandings();

    const top6 =
        standings.slice(0,6);

    /*
      Simpan hasil regular season
    */

    game.regularSeasonResult = {

        season:
            game.season,

        standings:
            standings.map((s,index) => ({

                rank:
                    index + 1,

                teamId:
                    s.teamId,

                points:
                    s.points,

                matchWin:
                    s.matchWin,

                matchLoss:
                    s.matchLoss,

                gameWin:
                    s.gameWin,

                gameLoss:
                    s.gameLoss

            })),

        top6:
            top6.map(s => s.teamId)

    };


    saveGameSilent();


    let text =
        "🏁 REGULAR SEASON SELESAI!\n\n";

    text +=
        "🏆 TOP 6 PLAYOFF:\n\n";

    top6.forEach((s,index) => {

        text +=
            (index + 1) +
            ". " +
            getTeam(s.teamId).name +
            " - " +
            s.points +
            " MP\n";

    });


    alert(text);


    renderStandings();

    showPage("standings");

}


/* =========================================================
   TAMPILKAN JADWAL WEEK SAAT INI
========================================================= */

function renderSchedule() {

    ensureMPLSchedule();

    const container =
        document.getElementById(
            "scheduleContainer"
        );

    if (!container) return;


    const matches =
        getCurrentWeekMatches();


    let html = `

        <div class="card">

            <h3>
                📅 Week ${game.week}
                / 18
            </h3>

            <p class="mini">
                ${
                    isCurrentWeekComplete()
                    ? "✅ Semua pertandingan minggu ini selesai."
                    : "⚔️ Mainkan semua pertandingan minggu ini."
                }
            </p>

        </div>

    `;


    matches.forEach(match => {

        const teamA =
            getTeam(match.teamA);

        const teamB =
            getTeam(match.teamB);


        let resultText = "";


        if (match.played) {

            resultText = `

                <div
                    style="
                    margin-top:8px;
                    font-weight:bold;
                    "
                >

                    ${
                        teamA.short
                    }

                    ${match.result.scoreA}

                    -

                    ${match.result.scoreB}

                    ${
                        teamB.short
                    }

                </div>

            `;

        }


        html += `

        <div class="card">

            <div class="mini">
                MPL Indonesia •
                Week ${game.week}
            </div>

            <br>

            <div class="schedule-match">

                <div>

                    <b>
                        ${teamA.short}
                    </b>

                    &nbsp; VS &nbsp;

                    <b>
                        ${teamB.short}
                    </b>

                    ${resultText}

                </div>


                ${
                    match.played

                    ? `

                        <span
                            class="muted"
                        >
                            SELESAI
                        </span>

                    `

                    : `

                        <button
                            onclick="
                            playScheduledMatch(
                                ${game.schedule.indexOf(match)}
                            )
                            "
                        >

                            🎮 Main

                        </button>

                    `
                }

            </div>

        </div>

        `;

    });


    /*
      Tombol next week
    */

    if (
        isCurrentWeekComplete()
    ) {

        if (game.week < 18) {

            html += `

            <div class="card">

                <h3>
                    ✅ Week ${game.week}
                    selesai
                </h3>

                <button
                    class="main-btn"
                    onclick="nextMPLWeek()"
                >

                    ➡️ LANJUT WEEK
                    ${game.week + 1}

                </button>

            </div>

            `;

        } else {

            html += `

            <div class="card">

                <h3>
                    🏁 Regular Season Selesai
                </h3>

                <button
                    class="main-btn"
                    onclick="finishMPLRegularSeason()"
                >

                    🏆 LIHAT TOP 6 PLAYOFF

                </button>

            </div>

            `;

        }

    }


    container.innerHTML =
        html;

}


/* =========================================================
   RESET SEASON
========================================================= */

function resetMPLSeason() {

    if (
        !confirm(
            "Reset Season " +
            game.season +
            "?\n\n" +
            "Semua klasemen dan jadwal " +
            "regular season akan direset."
        )
    ) {
        return;
    }


    game.week = 1;

    createEmptyStandings();

    generateMPLSchedule();

    game.currentMatch = null;

    game.regularSeasonResult = null;


    /*
      Reset stamina
    */

    game.players.forEach(player => {

        player.stamina = 100;

    });


    saveGameSilent();

    refreshUI();

    showPage("dashboard");

}


/* =========================================================
   SAVE TANPA ALERT
========================================================= */

function saveGameSilent() {

    localStorage.setItem(
        "mplWorldManagerSave",
        JSON.stringify(game)
    );

}


/* =========================================================
   LOAD SAVE
========================================================= */

function loadMPLSave() {

    const saved =
        localStorage.getItem(
            "mplWorldManagerSave"
        );

    if (!saved) {

        alert(
            "Belum ada save game."
        );

        return;

    }


    try {

        const loaded =
            JSON.parse(saved);

        Object.assign(
            game,
            loaded
        );


        /*
          Pastikan data lama punya schedule
        */

        if (
            !game.schedule ||
            game.schedule.length !== 72
        ) {

            generateMPLSchedule();

        }


        if (
            !game.standings ||
            Object.keys(game.standings).length !== 9
        ) {

            createEmptyStandings();

        }


        saveGameSilent();

        refreshUI();

        alert(
            "📂 Save berhasil dimuat!"
        );

    } catch(error) {

        alert(
            "❌ Save game rusak."
        );

        console.error(error);

    }

}


/* =========================================================
   INITIALIZE MPL SEASON
========================================================= */

function initializeMPLSeason() {

    /*
      Kalau schedule lama/random,
      ganti dengan schedule MPL baru.
    */

    if (
        !game.schedule ||
        game.schedule.length !== 72
    ) {

        generateMPLSchedule();

    }


    if (
        !game.standings ||
        Object.keys(game.standings).length !== 9
    ) {

        createEmptyStandings();

    }


    if (!game.week) {

        game.week = 1;

    }


    saveGameSilent();

}


/* =========================================================
   JALANKAN
========================================================= */

initializeMPLSeason();

console.log(
    "🇮🇩 MPL INDONESIA REGULAR SEASON AKTIF"
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
    "Total Match:",
    game.schedule.length
);
