const movesArray = [];
const minTableLength = 0;
const maxTableLength = 8;

export default function possibleKnightMoves(coordinates) {
    // Extract input
    const row = coordinates[0];
    const col = coordinates[1];

    // Return in case of out-of-bounds input
    if (row >= maxTableLength || row < minTableLength) return movesArray;
    if (col >= maxTableLength || col < minTableLength) return movesArray;

    // Firstly knight moves 2 squars in one direction
    const right = row + 2;
    const left = row - 2;
    const top = col + 2;
    const bottom = col - 2;

    // Left Moves
    if (left >= minTableLength) handleRowMove(left, col);

    // Right Moves
    if (right < maxTableLength) handleRowMove(right, col);

    // Top Moves
    if (top < maxTableLength) handleColMove(row, top);

    // Bottom Moves
    if (bottom >= minTableLength) handleColMove(row, bottom);

    return movesArray;
}

function handleRowMove(row, col) {
    // Then it moves 1 squar in opposite direction
    const bottomCol = col - 1;
    const topCol = col + 1;

    // Move one step down if possible
    if (bottomCol >= minTableLength) {
        movesArray.push([row, bottomCol]);
    }

    // Move one step up if possible
    if (topCol < maxTableLength) {
        movesArray.push([row, topCol]);
    }
}

function handleColMove(row, col) {
    // Then it moves 1 squar in opposite direction
    const leftRow = row - 1;
    const rightRow = row + 1;

    // Move one step left if possible
    if (leftRow >= minTableLength) {
        movesArray.push([leftRow, col]);
    }

    // Move one step right if possible
    if (rightRow < maxTableLength) {
        movesArray.push([rightRow, col]);
    }
}
