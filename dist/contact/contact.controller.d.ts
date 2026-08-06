import { ContactService } from './contact.service';
export declare class ContactController {
    private readonly contactService;
    constructor(contactService: ContactService);
    create(createContactDto: any): Promise<{
        message: string;
        data: import("./contact.schema").Contact;
    }>;
    findAll(): Promise<{
        data: import("./contact.schema").Contact[];
    }>;
}
