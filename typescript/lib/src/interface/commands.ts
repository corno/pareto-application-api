import * as p_i from 'pareto-core/interface/command_interface'

import type * as d_main from "./schemas/main.js"

export type main = p_i.Command_Interface<
    d_main.Error,
    d_main.Parameters
>