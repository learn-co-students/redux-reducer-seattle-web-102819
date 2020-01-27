export function manageFriends(state = {numberOfPresents : 0}, action){
let output = state
switch (action.type){
    case "INCREASE" :
        output = {...state, numberOfPresents : state.numberOfPresents - 1}
        return output
    case "DECREASE" :
        output = {...state, numberOfPresents : state.numberOfPresents + 1}
        return output
    default :
        return output
}








}
