export interface IBookingCreate {
    user_id: string;
    agent_id: string;
    start_at: Date;
    finish_at: Date;
}
