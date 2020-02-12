const searchApi = "http://www.mec.ca/api/v1/products/search?keywords=";

class SearchService {

    get = async(query) => {
        const options = {
            method: 'get'
        }

        const request = new Request(searchApi + query, options);
        const response = await fetch(request);
        return response.json();
    }
}

export default SearchService;
