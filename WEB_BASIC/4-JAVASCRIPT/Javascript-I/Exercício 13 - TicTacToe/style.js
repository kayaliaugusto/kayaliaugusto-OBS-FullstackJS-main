const setupContainer = document.getElementById('setup-container');
const gameContainer = document.getElementById('game-container');
const player1Input = document.getElementById('player1');
const player2Input = document.getElementById('player2');
const startGameBtn = document.getElementById('start-game-btn');
const statusText = document.getElementById('status-text');
const board = document.getElementById('board');
const cells = document.querySelectorAll('[data-cell-index]');
const restartBtn = document.getElementById('restart-btn');

let gameActive = false;
let currentPlayer = 'X';
let boardState = ["", "", "", "", "", "", "", "", ""];
const playerNames = { 'X': '', 'O': '' };

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const handleStartGame = () => {
    playerNames['X'] = player1Input.value || 'Jogador 1';
    playerNames['O'] = player2Input.value || 'Jogador 2';

    setupContainer.classList.add('hidden');
    gameContainer.classList.remove('hidden');
    
    startGame();
};

const startGame = () => {
    gameActive = true;
    currentPlayer = 'X';
    boardState = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `Vez de ${playerNames[currentPlayer]} (${currentPlayer})`;
    restartBtn.classList.add('hidden');
    
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('x', 'o', 'winning');
    });
};

const handleCellClick = (event) => {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (boardState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
};

const handleCellPlayed = (clickedCell, clickedCellIndex) => {
    boardState[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;
    clickedCell.classList.add(currentPlayer.toLowerCase());
};

const handleResultValidation = () => {
    let roundWon = false;
    let winningCombination = [];

    for (let i = 0; i < winningConditions.length; i++) {
        const winCondition = winningConditions[i];
        const a = boardState[winCondition[0]];
        const b = boardState[winCondition[1]];
        const c = boardState[winCondition[2]];

        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            winningCombination = winCondition;
            break;
        }
    }

    if (roundWon) {
        statusText.textContent = `🎉 ${playerNames[currentPlayer]} venceu! 🎉`;
        gameActive = false;
        winningCombination.forEach(index => {
            cells[index].classList.add('winning');
        });
        restartBtn.classList.remove('hidden');
        return;
    }

    const roundDraw = !boardState.includes("");
    if (roundDraw) {
        statusText.textContent = '🧓Deu Velha!🧓';
        gameActive = false;
        restartBtn.classList.remove('hidden');
        return;
    }

    handlePlayerChange();
};

const handlePlayerChange = () => {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `Vez de ${playerNames[currentPlayer]} (${currentPlayer})`;
};

const handleRestartGame = () => {
    startGame();
};

startGameBtn.addEventListener('click', handleStartGame);
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartBtn.addEventListener('click', handleRestartGame);