import { Card } from '@/models/Card';

export interface Deck {
    id: number;
    title: string;
    cards: Card[];
}
