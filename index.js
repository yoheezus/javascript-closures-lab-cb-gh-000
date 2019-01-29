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

function createAnimal(animalType) {

    function attachWeapon(deadlyDevice) {
        return {"animalType": animalType, "deadlyDevice": deadlyDevice}
    }

    return {
        animalType,
        attachWeapon
    }
}

function sharkCreator() {
    var sharkCreator = createAnimal("Shark");
    return sharkCreator
}

var sharkWithFrickinLaserbeam = sharkCreator()
