function chessboard() {
    function addRow(board, rowNum, figures) {
        let row = board.insertRow(-1);
        row.insertCell(-1).innerText = rowNum;
        for (let fig of figures) {
            row.insertCell(-1).innerText = fig;
        }
        row.insertCell(-1).innerText = rowNum;
    }
    let board = document.createElement('table');
    addRow(board, '', 'ABCDEFGH');
    addRow(board, '1', '♖♘♗♔♕♗♘♖');
    addRow(board, '2', '♙♙♙♙♙♙♙♙');
    for (let i = 3; i <= 6; i++) {
        addRow(board, i, '        ');
    }
    addRow(board, '7', '♟♟♟♟♟♟♟♟');
    addRow(board, '8', '♜♞♝♚♛♝♞♜');
    addRow(board, '', 'ABCDEFGH');
    for (let i = 1; i <= 8; i++) {
        for (let k = 1; k <= 8; k++) {
            if (i % 2 + k % 2 === 1) {
                board.rows[i].cells[k].style.backgroundColor = 'burlywood';
            }
        }
    }
    document.body.appendChild(board);
};

chessboard();