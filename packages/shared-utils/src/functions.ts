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
