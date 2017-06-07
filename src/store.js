import { createStore } from "redux";
import tasks from './ducks/tasks';

export default createStore( tasks );