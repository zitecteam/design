
import { Injectable } from '@angular/core';
import { AppService } from '../app.service';

@Injectable()
export class LayoutDocsPublicFlow {
    constructor(
        public readonly appService: AppService
    ) { }

    public isRTL(): boolean {
        return this.appService.isRTL;
    }
}
