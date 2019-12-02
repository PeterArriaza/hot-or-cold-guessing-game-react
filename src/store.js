import { createStore } from "redux";

import { gameReducer } from "./reducers/reducers";

export default createStore(gameReducer);
