import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './Root/rootEpic';
import rootReducer from './Root/rootReducer'


const epicMiddleWare = createEpicMiddleware();
const store = createStore(rootReducer, applyMiddleware(epicMiddleWare));

epicMiddleWare.run(rootEpic);

export default store