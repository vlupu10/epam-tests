import { v4 } from 'uuid';

export const createMockString = () => v4();
/**
 * Returns an array of matches for a global regex
 */
export const getMatches = (
    regex: RegExp,
    input: string,
): RegExpMatchArray[] => [...input.matchAll(regex)];

/**
 * Extracts the first matched entity from a string using a global regex
 * Returns undefined if not found
 */
export const extractEntity = (
    entityRegex: RegExp,
    input = '',
): string | undefined => {
    const [matches] = [...getMatches(entityRegex, input)];
    const [match] = matches ?? [];
    return match;
};
