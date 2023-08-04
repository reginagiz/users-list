export type User = {
  readonly id: number;
  readonly login: string;
  readonly email?: string;
  readonly name?: string;
  readonly avatar_url: string;
  readonly public_repos?: number;
  readonly followers?: number;
  readonly following?: number;
  readonly html_url?: string;
  readonly location?: string;
  readonly created_at?: string;
};
