import { Color, Marks } from "./enums";

export type Deck = (NormalCard | Joker)[];
export interface NormalCard extends Card{
    color: Color
    mark: Marks
};

export interface Card {
    getString(): String
}


export interface Joker extends Card{
    type : "big" | "small"
}
