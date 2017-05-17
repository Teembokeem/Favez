
export function toJS(immutable) {
  if (immutable.toJS) {
    return immutable.toJS()
  }
  return immutable;
}
