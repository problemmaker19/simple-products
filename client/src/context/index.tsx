import React, {createContext, PropsWithChildren, useContext, useMemo, useReducer} from "react";
import getRootActions from "./action-creators";
import {rootInitialState, rootReducer} from "./reducers";

const ActionsContext = createContext<any>({});
const StateContext = createContext<any>({});
const DispatchContext = createContext<any>({});

const StoreProvider: React.FC<PropsWithChildren> = ({children}: PropsWithChildren) => {

    const [state, dispatch] = useReducer(rootReducer, rootInitialState)
    const actions = useMemo(() => getRootActions(dispatch), [])

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                <ActionsContext.Provider value={actions}>
                    {children}
                </ActionsContext.Provider>
            </DispatchContext.Provider>
        </StateContext.Provider>
    )
}

export const useActions = () => useContext(ActionsContext)
export const useState = () => useContext(StateContext)
export const useDispatch = () => useContext(DispatchContext)

export default StoreProvider;
