import TopicsList from "./TopicsList";
import PhotosList from "./PhotosList";
import { Dispatch, SetStateAction, useState } from "react";

interface PhotosBodyProps {
    setActivePanels: Dispatch<SetStateAction<boolean[]>>
}

function PhotosBody ({setActivePanels} : PhotosBodyProps) {

    const [topicId, setTopicId ] = useState('')

    return (
        <div className="PhotosBody">
            <TopicsList setTopicId={setTopicId} setActivePanels={setActivePanels}></TopicsList>
            <PhotosList topicId={topicId} setActivePanels={setActivePanels}></PhotosList>
        </div>
    );
}

export default PhotosBody;