export class User {
    id: number;
    login: string;
    avatar_url: string;
    url?: string;
    repos_url?: string;
    html_url?: string;
    public_repos: number;
    followers: number;
    following: number;
    updated_at?: Date;
}
