import Api from './Api'
export default {
    getPageData(url) {
        return Api().post('wikipedia/get-page-data', url);
    }
}