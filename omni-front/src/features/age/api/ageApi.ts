import axios from "axios";
import z from "zod";

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
    schoolAge:{
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
    daysAlive: number;
}

const BASE_URL = "http://localhost:10102/api/age";

export const ageApi = {
    calculateAge: async(data: AgeRequest): Promise<AgeResponse> => {
        const response = await axios.post<AgeResponse>(`${BASE_URL}/calculate`, data);
        return response.data;
    }
}

// form 스키마 구성(Validation)
export const formSchema = z.object({
    username: z.string()
        .min(3, "Bug title must be at least 5 characters.")
        .max(32, "Bug title must be at most 32 characters."),
    birthdate: z.date(),
    gender: z.string(),
});

// request fetch(API call)
export const fetchAgeCalculation = async (data: z.infer<typeof formSchema>)=>{
    const birthDate = data.birthdate;
    
    const response = await ageApi.calculateAge({
        year: birthDate.getFullYear(),
        month: birthDate.getMonth() + 1,
        day: birthDate.getDate(),
        gender: "MALE"
    });
    
    return response;
}