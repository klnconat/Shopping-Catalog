import axiosHelper from './axios-helper';

export default {
    getTagList() {
        return axiosHelper.get('https://api.extrazone.com/tags/list');
    },
    getPromotionList() {
        return axiosHelper.get('https://api.extrazone.com/promotions/list?Channel=PWA');
    },
    getPromotionDetail(id: number) {
        return axiosHelper.get(`https://api.extrazone.com/promotions?Id=${id}`);
    }
}