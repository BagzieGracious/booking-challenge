export {}

declare global {
    namespace Express {
        interface Request {
            agent?: any;
        }
    }
}
