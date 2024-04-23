import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import UnsplashedAppContext from "../../state/UnsplashedAppContext";
import Photo from "../../model/Photo";

const PHOTO_COUNT = 6

interface PhotosListProps {
    topicId: string;
    setActivePanels: Dispatch<SetStateAction<boolean[]>>
}

function PhotosList ({ topicId, setActivePanels } : PhotosListProps) {

    const { apiClient } = useContext(UnsplashedAppContext);
    const [ photos, setPhotos ] = useState([] as Photo[]);
    const [ fromIndex, setFromIndex ] = useState(0);
    const [ toIndex, setToIndex ] = useState(0);

    useEffect(() => {
        if(topicId !== "") {
            apiClient.getPhotos(topicId).then((photos) => {                 
                setPhotos(photos)
                setFromIndex(0)
                setToIndex(photos.length >= PHOTO_COUNT ? PHOTO_COUNT : photos.length)
            })
        }
    }, [topicId, apiClient]);    

    const setPhotosActive = () => {
        setActivePanels([false, true])
    }

    return (
        <div className="PhotosList" onMouseEnter={setPhotosActive}>
            {photos.slice(fromIndex, toIndex).map((photo) => (
                <div key={photo.getId()} className="photo-item">
                    <img src={photo.getUrl()} alt={photo.getDescription()} />
                </div>
            ))}
        </div>
    );
}

export default PhotosList;