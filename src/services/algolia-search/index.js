import {ALGOLIA_API_KEY, ALGOLIA_APP_ID} from '../../constants';
import algoliasearch from 'algoliasearch';

// Connect and authenticate with your Algolia app

export const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);

export const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);

// Create a new index and add a record
export const algoliaIndex = client.initIndex('groups');
