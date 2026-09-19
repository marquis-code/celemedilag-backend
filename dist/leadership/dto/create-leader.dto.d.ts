export declare class CreateLeaderDto {
    name: string;
    position: string;
    tenure: string;
    isPastExco?: boolean;
    session?: string;
    avatar?: string;
    email?: string;
    phone?: string;
    bio?: string;
    order?: number;
    courseOfStudy?: string;
    socialLinks?: {
        twitter?: string;
        linkedin?: string;
        instagram?: string;
        facebook?: string;
        tiktok?: string;
        snapchat?: string;
    };
}
