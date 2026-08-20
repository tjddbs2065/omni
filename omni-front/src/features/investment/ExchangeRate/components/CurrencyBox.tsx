import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { CurrencyListResponse } from "../api/currencyResponse";

interface CurrencyBoxProps {
    children: CurrencyListResponse
}

export const CurrencyBox = ({children}: CurrencyBoxProps) => {
    return (
        <Card className="shadow-md">
            <CardHeader></CardHeader>
            <CardContent>
                <div>{children?.nation}</div>
            </CardContent>
        </Card>
    );
};