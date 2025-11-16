import {rule, type Rule} from '@/data/rule'
import { dedent } from 'ts-dedent'
import {LightTerrain} from "@/data/Rules/Terrain/LightTerrain";
import {HeavyTerrain} from "@/data/Rules/Terrain/HeavyTerrain";
import {InterveningTerrain} from "@/data/Rules/Terrain/InterveningTerrain";
import {VantageTerrain} from "@/data/Rules/Terrain/VantageTerrain";
import {MoltenGround} from "@/data/Rules/Terrain/MoltenGround";
import {RadiantZone} from "@/data/Rules/Terrain/RadiantZone";
import {SanctifiedGround} from "@/data/Rules/Terrain/SanctifiedGround";

export const Terrain: Rule = rule(
    "Terrain",
    dedent`
    `,
    [
        LightTerrain,
        HeavyTerrain,
        InterveningTerrain,
        VantageTerrain,
        MoltenGround,
        RadiantZone,
        SanctifiedGround
    ]
)