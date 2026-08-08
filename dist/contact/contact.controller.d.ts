import { ContactService } from './contact.service';
export declare class ContactController {
    private readonly contactService;
    constructor(contactService: ContactService);
    create(createContactDto: any): Promise<import("./contact.schema").Contact>;
    findAll(): Promise<import("./contact.schema").Contact[]>;
}
