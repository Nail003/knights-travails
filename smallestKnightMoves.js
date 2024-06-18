import possibleKnightMoves from "./possibleKnightMoves.js";

export default function smallestKnightMoves(currentPosition, requiredPosition) {
    const queue = [];
    const path = {};
    const visited = new Set();

    // Add starting position
    queue.push(currentPosition);
    visited.add(currentPosition.toString());

    while (queue.length > 0) {
        // Get next position
        const position = queue.shift();

        // Process this position
        if (isPositionSame(position, requiredPosition)) {
            return logPath(position, path);
        }

        // Add possible moves from this position
        for (const move of possibleKnightMoves(position)) {
            // If the move is already processed move to the next move
            if (visited.has(move.toString())) continue;
            queue.push(move);
            // Add move to visited because they are already queued and will be processed
            visited.add(move.toString());
            // Add move parent position to path that will be used during trace back
            path[move] = position.toString();
        }
    }

    console.log("Path not found: Wrong Input");
}

function logPath(position, path) {
    // If no moves are needed
    if (Object.keys(path).length === 0) {
        console.log(
            "Sit down and relax, you are already at your desired location"
        );
        return;
    }

    // Trace back path
    const pathArray = [];
    pathArray.push(position);
    while (position in path) {
        position = path[position];
        pathArray.push(position.split(",").map(Number));
    }

    // Log the results
    console.log(`You made it in ${pathArray.length} moves!  Here's your path:`);
    // We need to reverse the path because trace back is done from child to parent
    console.log(pathArray.reverse());
}

function isPositionSame(currentPosition, requiredPosition) {
    return (
        currentPosition[0] === requiredPosition[0] &&
        currentPosition[1] === requiredPosition[1]
    );
}
