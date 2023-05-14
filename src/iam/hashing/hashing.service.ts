import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class HashingService {
    abstract hash(plainText: string | Buffer): Promise<string>;
    /**
     * will compare the data and encrypted string and if matched will return true
     * otherwise false
     * @param data 
     * @param encrypted 
     */
    abstract compare(data: string | Buffer, encrypted: string): Promise<boolean>;
}
