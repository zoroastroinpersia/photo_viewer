import PhotoJSON from "../api/PhotoJSON";
import UrlsJSON from "../api/UrlsJSON";

class Urls {

    private raw: string;
    private full: string;
    private regular: string;
    private small: string;
    private thumb: string;
    private small_s3: string;
    
    constructor(data : UrlsJSON) {
        this.raw = data.raw;
        this.full = data.full;
        this.regular = data.regular;
        this.small = data.small;
        this.thumb = data.thumb;
        this.small_s3 = data.small_s3;
    }

    public getRaw(): string {
        return this.raw;
    }
    public getFull(): string {
        return this.full;
    }
    public getRegular(): string {
        return this.regular;
    }   
    public getSmall(): string {
        return this.small;
    }
    public getThumb(): string {
        return this.thumb;
    }
    public getSmallS3(): string {
        return this.small_s3;
    }
}

export default Urls;