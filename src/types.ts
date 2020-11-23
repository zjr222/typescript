import { Color, Marks } from "./enums";
import { Deck } from "./deck";

export interface Card {
    getString(): String
}

export interface NormalCard extends Card {
    color: Color
    mark: Marks
};


export interface Joker extends Card {
    type: "big" | "small"
}

export interface Player{
    player1:Deck,
    player2:Deck,
    player3:Deck,
    left:Deck
}
