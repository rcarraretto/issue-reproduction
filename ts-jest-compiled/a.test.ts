import { a } from './a';
import { FIXTURE_VALUE } from './c';

describe('feature A', () => {
    test('works with a mocked feature B', async () => {
        expect(a()).toEqual('Hello 37');
    });
});

// Put jest.mock() at the bottom to check if hoisting is happening on "./build/a.test.js"
jest.mock('./b', () => {
    return {
        // It seems that the compiler compiles the line below to:
        //   getValue: () => c_1.FIXTURE_VALUE,
        //
        // Which causes the error:
        // "The module factory of `jest.mock()` is not allowed to reference any out-of-scope variables."
        // since "c_1" is out-of-scope
        // https://github.com/facebook/jest/issues/2567
        //
        // But somehow this works with ts-jest. I can't explain why, because I can't see the compiled code
        // from ts-jest, as it does this in-memory.
        getValue: () => FIXTURE_VALUE,
    };
});
