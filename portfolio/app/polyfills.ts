// Polyfill a minimal localStorage implementation on the server
// This avoids crashes in Next's dev overlay which may reference localStorage
// during server rendering in some environments (especially when node's
// webstorage flag is misconfigured).
// Keep this minimal and no-op — it only prevents server runtime errors.
if (
  typeof globalThis.localStorage === "undefined" ||
  typeof (globalThis as any).localStorage.getItem !== "function"
) {
  (globalThis as any).localStorage = {
    getItem: (_key: string) => null,
    setItem: (_key: string, _value: string) => {},
    removeItem: (_key: string) => {},
    clear: () => {},
  };
}
