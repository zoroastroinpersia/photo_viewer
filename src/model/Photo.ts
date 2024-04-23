import PhotoJSON from "../api/PhotoJSON";
import Urls from "./Urls";

// define the Photo class based on this json above


class Photo {

    private id: string;
    private description: string;
    private urls: Urls;

    constructor(data: PhotoJSON) {
        this.id = data.id;
        this.description = data.description;
        this.urls = new Urls(data.urls);
    }

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string): void {
        this.description = description;
    }

    public getUrl(): string {
        return this.urls.getRaw();
    }

}

export default Photo;