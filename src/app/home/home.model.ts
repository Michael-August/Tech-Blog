export interface IPostDetail {
    id?: number;
    title?: string;
    body?: string;
    author?: string;
    date?: string;
    category?: string;
    img?: string
    comments?: IComments[]
}

export interface IComments {
    id?: number;
    postId?: number
    userName?: string;
    comment?: string;
    likes?: string[];
    liked?: boolean;
    profilePics?: string;
    replies?: IReply;
}

export interface IReply {
    userName?: string;
    comment: string;
    likes?: string[];
    profilePics?: string;
}
