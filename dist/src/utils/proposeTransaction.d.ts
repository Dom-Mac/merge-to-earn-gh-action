declare type Mint = {
    account: string;
    shares: number;
};
export declare const proposeTransaction: (mints: Mint[]) => Promise<void>;
export {};
