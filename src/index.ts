import {Deck} from './deck';

const deck = new Deck();

deck.shuffle();
console.log("=======洗牌后=======");
console.log(deck.print()) 
const result = deck.publish();
console.log("=======发牌后=======");
console.log("=======玩家一=======");
console.log(result.player1.print()) 
console.log("=======玩家二=======");
console.log(result.player2.print());
console.log("=======玩家三=======");
console.log(result.player3.print()) ;
console.log("=======剩余=======");
console.log(result.left.print());


