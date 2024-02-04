export type TokenDef = {
    label: string;
    color: string;
    img: string;
};

export type TokenDict<T extends string> = Record<T, TokenDef>;

export type Character = "monster" | "active-player" | "investigator"
export type Card = "ally" | 'item-common' | 'item-unique' | 'skill' | 'spell' | 'blessing' | 'curse' | 'district' | 'gate' | 'myth';
export type Counter = "clue" | "sanity" |  "stamina" | 'doom' | 'old-god-sign' | 'money'

export type Mark = 'closed' | 'explore' | 'gate-mark' | 'panic' | 'active' | 'slider'

export type Zone = 'stable' | 'unstable' | 'lost' | 'outer-worlds' | 'zone-outskirts' | 'sky'

export type Token = Character | Card | Counter | Mark | Zone;