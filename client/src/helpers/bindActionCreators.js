
const bindDispatchToActions = (actions, dispatch) => {
    const mappedActions = {}
    for (let key in actions) {
        const action = actions[key]
        if (typeof action === 'function') {
            if (action instanceof Promise) {
                mappedActions[key] = function(payload = {}) {
                    return action(payload, dispatch)
                }
            } else {
                mappedActions[key] = function(params) {
                    return dispatch(action.apply(this, [params, dispatch]))
                }
            }
        }
    }
    return mappedActions
}

export default bindDispatchToActions