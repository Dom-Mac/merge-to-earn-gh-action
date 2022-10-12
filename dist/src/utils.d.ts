import { IssueCommentEvent } from "@octokit/webhooks-definitions/schema";
export declare function getOctokit(): import("@octokit/core").Octokit & import("@octokit/plugin-rest-endpoint-methods/dist-types/types").Api & {
    paginate: import("@octokit/plugin-paginate-rest").PaginateInterface;
};
export declare function createComment(payload: IssueCommentEvent, message: string): Promise<void>;
