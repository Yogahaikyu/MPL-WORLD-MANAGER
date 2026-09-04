let game = {
    team: null,
    budget: 1000000000,
    wins: 0,
    losses: 0,
    points: 0
};


const teams = [
    {
        name: "RRQ",
        strength: 90,
        wins: 0,
        losses: 0,
        points: 0
    },
    {
        name: "ONIC",
        strength: 92,
        wins: 0,
        losses: 0,
        points: 0
    },
    {
        name: "EVOS",
        strength: 84,
        wins: 0,
        losses: 0,
        points: 0
    },
    {
        name: "Bigetron",
        strength: 82,
        wins: 0,
        losses: 0,
        points: 0
    }
];


function startGame() {

    const selectedTeam =
        document.getElementById("teamSelect").value;

    if (!selectedTeam) {
        alert("Pilih tim terlebih dahulu!");
        return;
    }

    game.team = selectedTeam;

    game.budget = 1000000000;
    game.wins = 0;
    game.losses = 0;
    game.points = 0;

    updateUI();

    alert(
        "Karier dimulai sebagai manager " +
        selectedTeam
    );
}


function simulateMatch() {

    if (!game.team) {
        alert("Pilih tim terlebih dahulu!");
        return;
    }


    const playerTeam =
        teams.find(team => team.name === game.team);


    const opponents =
        teams.filter(team => team.name !== game.team);


    const opponent =
        opponents[
            Math.floor(Math.random() * opponents.length)
        ];


    const playerPower =
        playerTeam.strength + randomNumber(-10, 10);

    const opponentPower =
        opponent.strength + randomNumber(-10, 10);


    let result;


    if (playerPower >= opponentPower) {

        result = "MENANG";

        game.wins++;
        game.points += 3;

        playerTeam.wins++;
        playerTeam.points += 3;

    } else {

        result = "KALAH";

        game.losses++;

        opponent.wins++;
        opponent.points += 3;

        playerTeam.losses++;
    }


    updateUI();

    document.getElementById("nextMatch").innerHTML = `
        <strong>${game.team}</strong>
        🆚
        <strong>${opponent.name}</strong>
        <br><br>
        Hasil: <strong>${result}</strong>
    `;


    saveGame();
}


function randomNumber(min, max) {

    return Math.floor(
        Math.random() * (max - min + 1)
    ) + min;

}


function updateUI() {

    document.getElementById("managerName")
        .textContent =
        game.team || "Belum memilih tim";


    document.getElementById("budget")
        .textContent =
        "Rp " + game.budget.toLocaleString("id-ID");


    document.getElementById("position")
        .textContent =
        game.points + " poin";


    updateStandings();

}


function updateStandings() {

    const sortedTeams =
        [...teams].sort(
            (a, b) => b.points - a.points
        );


    const standings =
        document.getElementById("standings");


    standings.innerHTML = "";


    sortedTeams.forEach((team, index) => {

        standings.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${team.name}</td>
                <td>${team.wins}</td>
                <td>${team.losses}</td>
                <td>${team.points}</td>
            </tr>
        `;

    });

}


function saveGame() {

    localStorage.setItem(
        "mplManagerSave",
        JSON.stringify(game)
    );

}


function loadGame() {

    const saved =
        localStorage.getItem("mplManagerSave");


    if (!saved) {
        updateUI();
        return;
    }


    game =
        JSON.parse(saved);


    updateUI();

}


loadGame();
