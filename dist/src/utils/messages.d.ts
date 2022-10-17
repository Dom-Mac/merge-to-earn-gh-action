export declare const baseReviewMessage = "Please review your request and submit it again.";
export declare function onPrOpenedMessage(author: string, slicerId: string, totalSlices: number): string;
export declare function onSlicesRequestMessage(slicerId: string, splitText: any): Promise<[string, boolean, number]>;
