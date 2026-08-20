import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { currencyApi } from "../api/currencyApi";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface CurrencyChartProps {
    currencyType: number,
    fromDate: string,
    toDate: string,
}

export const CurrencyChart = ({currencyType, fromDate, toDate}: CurrencyChartProps) => {
    const chartConfig = {
        date: {
            label: "날짜",
            color: "#2563eb",
        },
        value: {
            label: "환율",
            color: "#60a5fa",
        },
    } satisfies ChartConfig

    const {data, isLoading, isError} = useQuery({
        queryKey: ['currencyInfo', currencyType],
        queryFn: async () => {
            const response = await currencyApi.getCurrencyInfo({typeId:currencyType, fromDate:fromDate, toDate:toDate})
            return {info: response};
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

    if(data?.info.length == 0){
        return <div>
            <div className="flex items-center justify-center min-h-[200px]">
            <Button variant="outline" disabled size="sm">
                데이터가 없습니다.
            </Button>
        </div>
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
        <ChartContainer config={chartConfig}>
            <LineChart data={data?.info}>
                <CartesianGrid vertical={false} />
                <XAxis 
                    dataKey="date"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value)=>value.slice(5, 10)}
                />
                <YAxis 
                    domain={['dataMin - 50', 'dataMax + 50']}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                {/* <Bar dataKey="date" fill="var(--color-date)" radius={4} /> */}
                <Line dataKey="value" fill="var(--color-value)" radius={6} />
            </LineChart>
        </ChartContainer>
    );
};