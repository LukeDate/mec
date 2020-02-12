import SearchService from './searchApi';
import { observable, decorate } from 'mobx';

class SearchStore {
    constructor() {
        this.searchService = new SearchService();
    }

    searchData = {
        data: []
    }

    imageData = {
        image: []
    }

    error = "false"
    getSearchData = async(query) => {
        try {
            const data = await this.searchService.get(query);
            this.searchData = data.products;
            this.imageData = data.products.map(image => image.default_image_urls.main_image_url)
        } catch {
            this.error = "true"
            console.log(this.error);
            return this.error;
        }
    }
}

decorate(SearchStore, {
    searchData: observable
})

export default new SearchStore();