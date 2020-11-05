export interface ConnectSessionInfo {
    room: string;
    trainerToken: string;
    isTrainer: boolean;
}

export interface UserSession extends ConnectSessionInfo {
    connectionId: string;
}

