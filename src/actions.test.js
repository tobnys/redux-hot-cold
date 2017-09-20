import {NEW_GAME, newGame, MAKE_GUESS, makeGuess, TOGGLE_INFO_MODAL, toggleInfoModal} from "./actions";

describe("newGame", () => {
    it("Should return the action", () => {
        const action = newGame();
        expect(action.type).toEqual(NEW_GAME);
    });
});

describe("makeGuess", () => {
    it("Should return the action", () => {
        const action = makeGuess();
        expect(action.type).toEqual(MAKE_GUESS);
    });

    it("Should return correct guess", () => {
        const action = makeGuess(5);
        expect(action.guess).toEqual(5);
    });
});


describe("toggleInfoModal", () => {
    it("Should return the action", () => {
        const action = toggleInfoModal();
        expect(action.type).toEqual(TOGGLE_INFO_MODAL);
    });
});