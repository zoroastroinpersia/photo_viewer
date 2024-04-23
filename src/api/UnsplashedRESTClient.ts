import Photo from '../model/Photo'
import Topic from '../model/Topic'
import PhotoJSON from './PhotoJSON'
import TopicJSON from './TopicJSON'
import UnsplashedClient from './UnplashedClient'

class UnsplashedRESTClient implements UnsplashedClient {

    static readonly UNSPLASH_URL: string = 'https://api.unsplash.com'

    private readonly apiKey: string

    constructor(apiKey: string) {
        this.apiKey = apiKey
    }

    async getTopics(): Promise<Topic[]> {
        let url:string = `${UnsplashedRESTClient.UNSPLASH_URL}/topics?client_id=${this.apiKey}`

        try {
            const response = await fetch(url);
            const data = await response.json();
            let topics: Topic[] = data.map((topicJSON: TopicJSON) => new Topic(topicJSON));

            return topics;
        } catch (error) {
            console.log(error)
            return []
        }
    }
    
    async getPhotos(topic_id: string): Promise<Photo[]> {
        let url:string = `${UnsplashedRESTClient.UNSPLASH_URL}/topics/${topic_id}/photos?client_id=${this.apiKey}`

        try {
            const response = await fetch(url);
            const data = await response.json();
            let photos: Photo[] = data.map((photoJSON: PhotoJSON) => new Photo(photoJSON));

            return photos;
        } catch (error) {
            console.log(error)
            return []
        }
    }

}

export default UnsplashedRESTClient







