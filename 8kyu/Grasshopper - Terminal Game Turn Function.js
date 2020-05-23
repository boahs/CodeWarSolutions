function doTurn () {
    return rollDice() && move() && combat() && getCoins() && buyHealth() && printStatus()
    }