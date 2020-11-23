Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
function createPoker() {
    const deck = [];
    const marks = Object.values(enums_1.Marks);
    const colors = Object.values(enums_1.Color);
    for (const m of marks) {
        for (const c of colors) {
            deck.push({
                color: c,
                mark: m
            });
        }
    }
    return deck;
}
exports.createPoker = createPoker;
function createKing() {
    const twoKing = [];
    const kings = Object.values(enums_1.Kings);
    for (const k of kings) {
        twoKing.push({
            king: k,
        });
    }
    return twoKing;
}
exports.createKing = createKing;
function printfPoker(deck, twoKing) {
    let result;
    console.log(deck);
    console.log(twoKing);
    deck.forEach((card, i) => {
        let str = card.color + card.mark;
        if (i % 4 == 0) {
            result += "\n";
        }
        result += str + "\t";
    });
    result += "\n";
    twoKing.forEach((cards, i) => {
        let eng = cards.king;
        result += eng + "\t";
    });
    console.log(result);
}
exports.printfPoker = printfPoker;
