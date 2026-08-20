import axios from "axios";
import { BASE_URL } from "@/features/global/api/globalApi";
import type { CurrencyInfoResponse, CurrencyListResponse } from "./currencyResponse";
import type { CurrencyInfoRequest } from "./currencyRequest";

export const CURRENCY_URL = "/investment";

export const currencyApi = {
    getCurrencyList: async () => {
        const response = await axios.get<Array<CurrencyListResponse>>(`${BASE_URL}${CURRENCY_URL}/CurrencyList`);
        return response.data;
    },

    getCurrencyInfo: async (params: CurrencyInfoRequest) =>{
        const response = await axios.get<Array<CurrencyInfoResponse>>(
            `${BASE_URL}${CURRENCY_URL}/ExchangeRates`, 
            {params: params}
        );
        return response.data;
    }
}