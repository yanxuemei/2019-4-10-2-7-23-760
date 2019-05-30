function less2(){
    return 6;
}
function over2Less8(distance){
    if(distance<=2)return 0;
    if(distance<=8)return 0.8*(distance-2)
    return 0.8*(8-2)
}

function over8(distance){
    if(distance<=8)return 0;
    return 0.8*(1+0.5)*(distance -8)
}
function parking(time){
    return 0.25*time

}

module.exports = function main(inputs) {
    return Math.round(
        less2() + over2Less8(inputs.distance) + over8(inputs.distance) + parking(inputs.time)
    )


    // write your code here...
    return "price";
};
