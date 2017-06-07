import { createStore, applyMiddleware } from "redux";
import tasks from './ducks/tasks';

import promiseMiddleware from "redux-promise-middleware";

export default createStore( tasks, undefined, applyMiddleware( promiseMiddleware() ) );