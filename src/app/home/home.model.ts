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
    postId?: number
    userName?: string;
    comment: string;
    likes?: number;
    profilePics?: string;
    replies?: IReply;
}

export interface IReply {
    userName?: string;
    comment: string;
    likes?: number;
    profilePics?: string;
}