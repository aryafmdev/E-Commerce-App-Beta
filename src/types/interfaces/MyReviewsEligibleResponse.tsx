import {BasePagination} from "@/types/interfaces/BasePagination";
import {BaseResponse} from "@/types/interfaces/BaseResponse";
import {Product} from "@/types/interfaces/Product";


interface MyReviewsEligibleResponseData {
    products: Product[];

    pagination: BasePagination;
}


export interface MyReviewsEligibleResponse extends BaseResponse {
    data: MyReviewsEligibleResponseData;
}