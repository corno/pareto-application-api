import * as p_i from 'pareto-core/interface/command_interface'

import type * as s_main from "../schemas/main/schema.js"

export type main = p_i.Command_Interface<
    s_main.Error,
    s_main.Parameters
>