const app = "I don't do much."

function  bumpCounter() {
    var bumps = 0

    function addBump() {
        bumps += 1
    }

    function getBumps() {
        return bumps
    }

    return {
        addBump,
        getBumps
    }

}
