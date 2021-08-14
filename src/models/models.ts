export interface Card {
    id: number;
    question: string;
    answer: string|number;
}

export interface Deck {
    id: number;
    title: string;
    cards: Card[];
}
