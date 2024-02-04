import type { Token, Counter, Character, Card, Zone, Mark, TokenDict } from './types';
import cardAlly from './images/card-ally.png';
import cardBlessing from './images/card-blessing.png';
import cardCurse from './images/card-curse.png';
import cardDistrict from './images/card-district.png';
import cardGate from './images/card-gate.png';
import cardItemCommon from './images/card-item-common.png';
import cardItemUnique from './images/card-item-unique.png';
import cardMyth from './images/card-myth.png';
import cardSkill from './images/card-skill.png';
import cardSpell from './images/card-spell.png';
import characterActivePlayer from './images/character-active-player.png';
import characterMonster from './images/character-monster.png';
import counterClue from './images/counter-clue.png';
import counterDoom from './images/counter-doom.png';
import counterMoney from './images/counter-money.png';
import counterOldGodSign from './images/counter-old-god-sign.png';
import counterSanity from './images/counter-sanity.png';
import counterStamina from './images/counter-stamina.png';

import markActive from './images/mark-active.png';
import markClosed from './images/mark-closed.png';
import markExplore from './images/mark-explore.png';
import markGate from './images/mark-gate.png';
import markPanic from './images/mark-panic.png';
import markSlider from './images/mark-slider.png';

import zoneLost from './images/zone-lost.png';
import zoneOuterWorlds from './images/zone-outer-worlds.png';
import zoneOutskirts from './images/zone-outskirts.png';
import zoneSky from './images/zone-sky.png';
import zoneStable from './images/zone-stable.png';
import zoneUnstable from './images/zone-unstable.png';



export const counters: TokenDict<Counter> = {
    clue: {
        label: "Clue",
        color: "text-lime-700",
        img: counterClue.src,
    },
    sanity: {
        label: "Sanity Counter",
        color: "text-sky-500",
        img: counterSanity.src
    },
    stamina: {
        label: "Stamina Counter",
        color: "text-red-500",
        img: counterStamina.src
    },
    "old-god-sign": {
        label: "Old god sign",
        color: "text-sky-700",
        img: counterOldGodSign.src
    },
    doom: {
        label: "Doom Token",
        color: "text-sky-900",
        img: counterDoom.src
    },
    money: {
        label: "Money",
        color: "text-lime-700",
        img: counterMoney.src
    },
};

export const characters: TokenDict<Character> = {
    monster: {
        label: "Monster",
        color: "text-rose-700",
        img: characterMonster.src
    },
    'investigator': {
        label: 'Investigator',
        color: 'text-amber-800',
        img: ''
    },
    'active-player': {
        label: 'Active player',
        color: 'text-amber-800',
        img: characterActivePlayer.src
    }
};

export const cards: TokenDict<Card> = {
    'ally': {
        label: 'Ally card',
        color: 'text-yellow-600',
        img: cardAlly.src
    },
    'item-common': {
        label: 'Common item card',
        color: 'text-lime-600',
        img: cardItemCommon.src
    },
    'item-unique': {
        label: 'Unique item card',
        color: 'text-red-500',
        img: cardItemUnique.src
    },
    'skill': {
        label: 'Skill card',
        color: 'text-amber-500',
        img: cardSkill.src
    },
    'spell': {
        label: 'Spell card',
        color: 'text-violet-500',
        img: cardSpell.src
    },
    blessing: {
        label: "Blessing Card",
        color: "text-sky-500",
        img: cardBlessing.src
    },
    curse: {
        label: "Curse Card",
        color: "text-rose-700",
        img: cardCurse.src
    },
    district: {
        label: "District Card",
        color: "text-blue-600",
        img: cardDistrict.src
    },
    gate: {
        label: "Gate Card",
        color: "text-emerald-700",
        img: cardGate.src
    },
    myth: {
        label: "Myth Card",
        color: "text-emerald-700",
        img: cardMyth.src
    },
};

export const zones: TokenDict<Zone> = {
    stable: {
        label: 'Stable location',
        color: 'text-green-500',
        img: zoneStable.src
    },
    unstable: {
        label: 'Unstable location',
        color: 'text-red-500',
        img: zoneUnstable.src

    },
    "outer-worlds": {
        label: "Outer world",
        color: "text-emerald-700",
        img: zoneOuterWorlds.src
    },
    "zone-outskirts": {
        label: "Outskirts Zone",
        color: "text-purple-800",
        img: zoneOutskirts.src
    },
    lost: {
        label: "Lost in Time and Space Zone",
        color: "text-stone-600",
        img: zoneLost.src
    },
    sky: {
        label: "Sky Zone",
        color: "text-teal-900",
        img: zoneSky.src
    },
};

export const marks: TokenDict<Mark> = {
    active: {
        label: "Active Mark",
        color: "text-amber-500",
        img: markActive.src
    },
    closed: {
        label: "Closed Mark",
        color: "text-amber-500",
        img: markClosed.src
    },
    explore: {
        label: "Exploration Mark",
        color: "text-emerald-700",
        img: markExplore.src
    },
    'gate-mark': {
        label: "Gate Mark",
        color: "text-emerald-700",
        img: markGate.src
    },
    panic: {
        label: "Panic level Mark",
        color: "text-amber-500",
        img: markPanic.src
    },
    slider: {
        label: "Slider",
        color: "text-fuchsia-700",
        img: markSlider.src
    },
};

export const tokens: TokenDict<Token> = {
    ...counters,
    ...characters,
    ...cards,
    ...zones,
    ...marks
}