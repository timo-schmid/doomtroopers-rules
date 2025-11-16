import {type Rule} from './rule'
import {Introduction} from './Rules/Introduction'
import {GameStructure} from "./Rules/GameStructure"
import {Operatives} from './Rules/Operatives'
import {PlayerTurn} from './Rules/PlayerTurn'
import {Terrain} from './Rules/Terrain'
import {KeyPrinciples} from './Rules/KeyPrinciples'
import {WeaponKeywords} from './Rules/WeaponKeywords'

export const Rules: Rule[] = [
    Introduction,
    GameStructure,
    Operatives,
    PlayerTurn,
    Terrain,
    KeyPrinciples,
    WeaponKeywords
] as Rule[]
