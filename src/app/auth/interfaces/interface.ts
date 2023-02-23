export interface AuthResponse {
    ok: string,
    uid?: string,
    name?: string,
    token?: string,
}

export interface Usuario {
    uid: string;
    name:string;
}