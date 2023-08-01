export type User = {
    readonly id:number;
    readonly login:string; 
    readonly email:string;
    readonly avatar_url:string;
    readonly public_repos:number;
    readonly followers:number
}