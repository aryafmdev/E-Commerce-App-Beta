import {apiClient} from "@/lib/api-client";
import {MyReviewsEligibleRequest} from "@/types/interfaces/MyReviewsEligibleRequest";
import {MyReviewsEligibleResponse} from "@/types/interfaces/MyReviewsEligibleResponse";


export const myReviewsEligibleService = async(params: MyReviewsEligibleRequest) => {
    const url = `page=${params.page}&limit=${params.limit}`;

    const {data} = await apiClient.get<MyReviewsEligibleResponse>(`/reviews/my/eligible?${url}`);

    return data;
};
