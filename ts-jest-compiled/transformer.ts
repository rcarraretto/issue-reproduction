/**
 * Calls ts-test on compile time via "ttypescript".
 * https://github.com/cevek/ttypescript
 *
 * This is a hack as a proof of concept.
 * To check this is working, do `npm run build2` and check that
 * build/a.test.js has a hoisted jest.mock().
 */
import * as ts from 'typescript';

import * as hoistJest from 'ts-jest/dist/transformers/hoist-jest';

const factory = (hoistJest as any).factory;

// Fake bs-logger
const logger = {
    child: () => logger,
    wrap: (a: any, b: any, c: any) => {
        return c;
    },
};

const transformerFactory = factory({ logger, compilerModule: ts });

export default transformerFactory;
