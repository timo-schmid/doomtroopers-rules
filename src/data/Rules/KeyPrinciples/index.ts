import {rule, type Rule} from '@/data/rule'
import { dedent } from 'ts-dedent'
import {Bases} from "@/data/Rules/KeyPrinciples/Bases";
import {ControlRange} from "@/data/Rules/KeyPrinciples/ControlRange";
import {Cover} from "@/data/Rules/KeyPrinciples/Cover";
import {Dice} from "@/data/Rules/KeyPrinciples/Dice";
import {Distances} from "@/data/Rules/KeyPrinciples/Distances";
import {Obscured} from "@/data/Rules/KeyPrinciples/Obscured";
import {Visible} from "@/data/Rules/KeyPrinciples/Visible";

export const KeyPrinciples: Rule = rule(
    "Other Key Principles",
    dedent`
    `,
    [
        Bases,
        ControlRange,
        Cover,
        Dice,
        Distances,
        Obscured,
        Visible
    ]
)