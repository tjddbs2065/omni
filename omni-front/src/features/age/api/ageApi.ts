import axios from "axios";

export interface AgeRequest{
    year: number;
    month: number;
    day: number;
    gender: 'MALE' | 'FEMALE';
}

export interface AgeResponse{
    birthDate: string;
    currentAge: {
        currentAge: BasicAge;
    }
    schoolAges:{
        elementary: BasicAge;
        middle: BasicAge;
        high: BasicAge;
        university: BasicAge;
    };
    militaryAge: {
        militaryAge: BasicAge;
    };
}

export interface BasicAge{
    koreanAge: number;
    internationalAge: number;
    daysLived: number;
}

const BASE_URL = "http://localhost:10102/api/age";

export const ageApi = {
    calculateAge: async(data: AgeRequest): Promise<AgeResponse> => {
        const response = await axios.post<AgeResponse>(`${BASE_URL}/calculate`, data);
        return response.data;
    }
}