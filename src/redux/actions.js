import { ADD_INPUT } from "./actionType";

let nextId = 0;

export const addInput = content => ({
    type: ADD_INPUT,
    payload: {
        id: ++nextId,
        content
    }
});