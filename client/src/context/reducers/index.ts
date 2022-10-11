import * as todos from './todosReducer'
import combineStores from "../../helpers/combineStores";

const combinedStore = combineStores({
    todos,
})

export const { rootInitialState, rootReducer } = combinedStore
