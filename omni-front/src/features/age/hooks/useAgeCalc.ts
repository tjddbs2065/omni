import { useState } from "react"
import { ageApi, type AgeRequest, type AgeResponse } from "../api/ageApi"

export const useAgeCalc = () => {
    const [result, setResult] = useState<AgeResponse | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const calculate = async (params: AgeRequest) => {
        setIsLoading(true);
        setError(null);

        try{
            const data = await ageApi.calculateAge(params);
            setResult(data);
        }
        catch(err){
            setError("나이 계산 중 오류가 발생했습니다.");
            console.error(err);
        }
        finally{
            setIsLoading(false);
        }
    };

    return {result, isLoading, error, calculate};
}