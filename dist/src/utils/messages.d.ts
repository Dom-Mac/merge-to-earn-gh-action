export declare const baseReviewMessage = "Please review your request and submit it again.";
export declare function onPrOpenedMessage(slicer: string): string;
export declare function isValidAddress(address: string): RegExpMatchArray | null;
export declare function onSlicesRequestMessage(splitText: any): Promise<[string, boolean]>;
