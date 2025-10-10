import {BasePagination} from "@/types/interfaces/BasePagination";
import {BaseResponse} from "@/types/interfaces/BaseResponse";


interface MyReviewResponseDataReviewUser {
    id: number;

    name: string;

    avatarUrl: string;
}

interface MyReviewResponseDataReviewProduct {
    id: number;
    
    title: string;
    
    images: string[];
}

interface MyReviewResponseDataReview {
    id: number;

    star: number;

    comment: string;

    createdAt: Date;

    user: MyReviewResponseDataReviewUser;
    
    product: MyReviewResponseDataReviewProduct;
}


interface MyReviewResponseData {
    reviews: MyReviewResponseDataReview[];

    pagination: BasePagination;
}


export interface MyReviewsResponse extends BaseResponse {
    data: MyReviewResponseData;
}
