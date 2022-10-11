import * as todoActionCreators from './todos'
import bindDispatchToActions from "../../helpers/bindActionCreators";
import React from "react";

function getRootActions(dispatch: React.Dispatch<any>) {
    return {
        todos: bindDispatchToActions(todoActionCreators, dispatch)
    }
}

export default getRootActions;