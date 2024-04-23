import { createContext } from 'react';
import UnsplashedRESTClient from '../api/UnsplashedRESTClient';
import Topic from '../model/Topic';

// Create the context with a default value

const UNSPLASH_API_KEY = 'Insert your own key'

let selectedTopicId = "";
let uiState = [true, false]

const UnsplashedAppContext = createContext({
    apiClient : new UnsplashedRESTClient(UNSPLASH_API_KEY),
});

export default UnsplashedAppContext;
