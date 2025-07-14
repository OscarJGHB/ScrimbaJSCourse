class player{
    name = " "
    chips = 0
    statsNode

    constructor(name, chips, statsNode){
        this.name = name;
        this.chips = chips;
        this.statsNode = statsNode;
    }

    renderStats(){
        this.statsNode.textContent = this.name + ": $"+this.chips
    }
}

export default player;