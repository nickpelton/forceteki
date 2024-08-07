import { AbilityContext } from '../ability/AbilityContext';
import { GameSystem } from '../gameSystem/GameSystem';
import { TriggeredAbilityContext } from '../ability/TriggeredAbilityContext';
import { Event } from '../event/Event';
import Player = require('../Player.js');

export type Result = {
    canCancel?: boolean;
    cancelled?: boolean;
};

export interface ICost {
    canPay(context: AbilityContext): boolean;

    action?: GameSystem;
    activePromptTitle?: string;

    selectCardName?(player: Player, cardName: string, context: AbilityContext): boolean;
    promptsPlayer?: boolean;
    dependsOn?: string;
    isPrintedFateCost?: boolean;
    isPlayCost?: boolean;
    canIgnoreForTargeting?: boolean;

    getActionName?(context: AbilityContext): string;
    getCostMessage?(context: AbilityContext): unknown[];
    hasTargetsChosenByInitiatingPlayer?(context: AbilityContext): boolean;
    addEventsToArray?(events: any[], context: AbilityContext, result?: Result): void;
    resolve?(context: AbilityContext, result: Result): void;
    payEvent?(context: TriggeredAbilityContext): Event | Event[];
    pay?(context: TriggeredAbilityContext): void;
}