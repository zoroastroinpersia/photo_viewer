import { useState, useEffect, useContext, SetStateAction, Dispatch } from 'react';
import Topic from '../../model/Topic';
import UnsplashedAppContext from '../../state/UnsplashedAppContext';

interface TopicsListProps {
    setTopicId: Dispatch<SetStateAction<string>>;
    setActivePanels: Dispatch<SetStateAction<boolean[]>>
}

function TopicsList ({ setTopicId, setActivePanels} : TopicsListProps) {

    const { apiClient } = useContext(UnsplashedAppContext);
    const [ topics, setTopics ] = useState([] as Topic[]);

    useEffect(() => {
        apiClient.getTopics().then((topics) => { 
            setTopics(topics)
            setTopicId(topics[0].getId())
        })
    }, []);    

    const topicSelectionHandler = (topic : Topic) => {
        setTopicId(topic.getId())
        console.log(`AT TopicsList. Selected Topic. name: ${topic.getTitle()}, Id: ${topic.getId()}`)
    }

    const setTopicsActive = () => {
        setActivePanels([true, false])
    }

    return (
        <div className="TopicsList" onMouseEnter={setTopicsActive}>
            <ul>
                {topics.map(topic => (
                <li key={topic.getId()} onClick={() => topicSelectionHandler(topic)}>{topic.getTitle()}</li>
                ))}  
            </ul>
        </div>    
    );
}

export default TopicsList;