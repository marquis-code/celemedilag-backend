import { StatsService } from './stats.service';
export declare class StatsController {
    private readonly statsService;
    constructor(statsService: StatsService);
    getDashboardStats(): Promise<{
        events: number;
        sermons: number;
        news: number;
        alumni: number;
    }>;
}
