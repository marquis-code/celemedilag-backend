export declare class CreatePatronDto {
    name: string;
    role?: string;
    type?: string;
    avatar?: string;
    email?: string;
    phone?: string;
    bio?: string;
    isActive?: boolean;
    order?: number;
    socialLinks?: {
        twitter?: string;
        linkedin?: string;
        instagram?: string;
        facebook?: string;
        tiktok?: string;
        snapchat?: string;
    };
}
