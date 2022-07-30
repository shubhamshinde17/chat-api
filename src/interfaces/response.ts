export default interface APIResponse {
    code: number,
    success: boolean,
    message: string,
    token?: string,
}