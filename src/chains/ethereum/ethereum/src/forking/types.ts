import { PersistentCache } from "./persistent-cache/persistent-cache";

export interface Handler {
  request: <T>(
    method: string,
    params: unknown[],
    options: { disableCache: boolean }
  ) => Promise<T>;
  setCache: (cache: PersistentCache) => void;
  close: () => Promise<void>;
  addToMemoryCache(request: { method: String; params: String[]; }, response: { jsonrpc: string; id: number; result: String; }): void;
}
