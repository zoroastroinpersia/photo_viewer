import Topic from '../model/Topic'
import Photo from '../model/Photo'

interface UnsplashedClient {

    getTopics: () => Promise<Topic[]>;

    getPhotos: (topic: string) => Promise<Photo[]>;
    
}

export default UnsplashedClient
