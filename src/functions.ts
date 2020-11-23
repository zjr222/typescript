import { Color, Marks } from "./enums";
import { Deck, Card, NormalCard } from "./types";

export function createPoker(): Deck { //创建扑克
    const deck: Deck = [];
    const marks = Object.values(Marks);
    const colors = Object.values(Color);
    for (const m of marks) {
        for (const c of colors) {
            const card: NormalCard = {
                color: c,
                mark: m,
                getString() {
                    return this.color + this.mark;
                }
            }
            deck.push(card)
        }
    }
    deck.push({
        type: "small",
        getString() {
            return "joker"
        }
    })
    deck.push({
        type: "big",
        getString() {
            return "JOKER"
        }
    })
    return deck;
}
export function printfPoker(deck: Deck) { //打印扑克
    let result;
    deck.forEach((card, i) => {
        let str = card.getString();
        if (i % 4 == 0) {
            result += "\n";
        }
        result += str + "\t";
    })
    result += "\n";
    console.log(result);
}
