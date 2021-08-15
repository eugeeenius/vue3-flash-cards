import { MenuItem } from '@/models/menu/MenuItem';

export interface NestedMenuItem {
    title: string;
    group: MenuItem[];
}
