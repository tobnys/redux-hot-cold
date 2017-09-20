import {hotColdReducer} from "./reducer";
import {newGame, makeGuess, toggleInfoModal} from "./actions";



describe("hotColdReducer", () => {
    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = hotColdReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe("makeGuess", () => {
        it("Should make a new guess", () => {
            let state;
            state = hotColdReducer(state, makeGuess(5));
            expect(state.guesses).toEqual([5]);
            
        });
    });

    describe("newGame", () => {
        it("Should make a new guess", () => {
            let state = {correctAnswer: 5};
            state = hotColdReducer(state, newGame());
            expect(state).toEqual({"correctAnswer": state.correctAnswer, "feedback": "Make your guess!", "guesses": [], "showInfoModal": false})
        });
    });

    describe("toggleInfoModal", () => {
        it("Should make a new guess", () => {
            let state;
            state = hotColdReducer(state, toggleInfoModal());
            expect(state).toEqual({"correctAnswer": state.correctAnswer, "feedback": "Make your guess!", "guesses": [], "showInfoModal": true});
            
        });
    });

});