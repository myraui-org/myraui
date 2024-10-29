import { flatten } from 'flat';
import { Dict } from './types';
import { Effect } from 'effect';
import { JsonStringifyError } from './errors';

export type FlattenObjectOptions = {
  delimiter?: string;
  prefix?: string;
  maxDepth?: number;
};

type Extractable =
  | {
      [key: string]: any;
    }
  | undefined;

export function objectToDeps(obj: Extractable) {
  if (!obj || typeof obj !== 'object') {
    return '';
  }

  try {
    return JSON.stringify(obj);
  } catch (e) {
    return '';
  }
}

export function flattenObject<R = Dict, T = object>(obj: T, options: FlattenObjectOptions = {}): R {
  return flatten(options.prefix ? { [options.prefix]: obj } : obj, {
    safe: true,
    delimiter: options.delimiter || '-',
    maxDepth: options.maxDepth,
  }) as R;
}

export const stringifyObject = <T>(obj: T) =>
  Effect.try({
    try: () => JSON.stringify(obj),
    catch: (unknown) => new JsonStringifyError(String(unknown)),
  });
