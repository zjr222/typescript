import { Card, Joker, NormalCard, Player } from './types'
import { Marks, Color } from './enums';
export class Deck {
    private cards: Card[] = [];
    constructor(cards?: Card[]) {
        if (cards) {
            this.cards = cards;
        } else {
            this.init();
        }
    }
    /**
     * 创建扑克牌
     */
    private init() {
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
                this.cards.push(card);
            }
        }
        let joker: Joker = {
            type: "small",
            getString() {
                return "joker"
            }
        }
        this.cards.push(joker);
        let JOKER: Joker = {
            type: "big",
            getString() {
                return "JOKER"
            }
        }
        this.cards.push(JOKER);
    }
    /**
     * 洗牌
     */
    shuffle() {
        for (let i = 0; i < this.cards.length; i++) {
            const targetIndex = this.getRandomNum(0, this.cards.length);
            const temp = this.cards[i];
            this.cards[i] = this.cards[targetIndex];
            this.cards[targetIndex] = temp;
        }
    }
    /**
     * @param min 最小
     * @param max 最大
     */
    private getRandomNum(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    /**
     * 发牌
     */
    publish(): Player {
        let player1: Deck, player2: Deck, player3: Deck, left: Deck;
        player1 = this.getCards(17);
        player2 = this.getCards(17);
        player3 = this.getCards(17);
        left = new Deck(this.cards);

        return {
            player1,
            player2,
            player3,
            left
        };

    }
    private getCards(n: number): Deck {
        const cards: Card[] = [];
        for (let i = 0; i < n; i++) {
            cards.push(this.cards.shift() as Card);
        }
        return new Deck(cards);
    }
    print() {
        let result;
        this.cards.forEach((card, i) => {
            let str = card.getString();
            if (i % 4 == 0) {
                result += "\n";
            }
            result += str + "\t";
        })
        result += "\n";
        return result
    }
}
