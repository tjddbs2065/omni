import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { currencyApi } from "../api/currencyApi";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface CurrencySelectProps {
    value: number,
    onCurrencyIdChange: (value: number) => void;
}

export const CurrencySelect = ({value, onCurrencyIdChange}: CurrencySelectProps) => {
    const {data, isLoading, isError} = useQuery({
        queryKey: ['currencyList'],
        queryFn: async () => {
            const response = await currencyApi.getCurrencyList()
            return {list: response};
        },
        retry: 0,
    });

    if(isLoading){
        return <div className="flex items-center justify-center min-h-[200px]">
            <Button variant="outline" disabled size="sm">
                <Spinner data-icon="inline-start" />
                로딩 중...
            </Button>
        </div>
    }

    if(isError){
        return <div  className="flex items-center justify-center min-h-[200px]">
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>오류 발생</AlertTitle>
                <AlertDescription>{"네트워크 문제로 데이터를 보여줄 수 없습니다."}</AlertDescription>
            </Alert>
        </div>
    }

    return (
        <Select value={String(value)} onValueChange={(value) => onCurrencyIdChange(Number(value))}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="환율" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {data?.list?.map((item) => (
                        <SelectItem key={item.id} value={String(item.id)}>{item.nation}</SelectItem>)
                    )}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};