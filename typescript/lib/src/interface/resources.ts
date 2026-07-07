import * as p_ci from 'pareto-core/interface/command'

import * as d_main from "./data/main.js"

export namespace resources {

    export namespace commands {

        export type main = p_ci.Command<d_main.Error, d_main.Parameters>
    }

    export namespace queries { }

}