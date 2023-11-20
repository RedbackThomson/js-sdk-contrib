/**
 * Contract of in-process resolver's data fetcher
 */
export interface DataFetch {
  connect(
    dataFillCallback: (flags: string) => void,
    reconnectCallback: () => void,
    changedCallback: (flagsChanged: string[]) => void,
    disconnectCallback: () => void,
  ): Promise<void>;

  disconnect(): void;
}
