import { BASE_URL } from "@/features/global/api/globalApi"
import axios from "axios";
import type { baseRateRequest } from "./baseRateRequest";
import type { baseRateResponse } from "./baseRateResponse";

export const CURRENCY_URL = "/investment";

export const interestRateApi = {
    getBaseRates: async (params: baseRateRequest) => {
        const response = await axios.get<Array<baseRateResponse>>(
            `${BASE_URL}${CURRENCY_URL}/BaseRates`, 
            {params: params}
        );
        return response.data;
    }
}