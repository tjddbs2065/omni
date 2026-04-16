import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { AgeResponse, BasicAge } from "../api/ageApi";

interface agePrintBoxProps {
    header: React.ReactNode; 
    children: Record<string, BasicAge> | undefined;
}

const AgePrintBox = ({header, children}: agePrintBoxProps) => {
    return (
        <Card className="shadow-md">
            <CardHeader>{header}</CardHeader>
            <CardContent>
                
                {Object.entries(children ?? {}).map(([key, value]) => (
                    <div key={key} className="my-2"> 
                        <div>나이: {value.internationalAge}세</div>
                        <div>한국 나이: {value.koreanAge}세</div>
                        <div>살아온 일수: {value.daysAlive}일</div>                
                    </div>
                ))}

            </CardContent>
        </Card>
    );
};

export default AgePrintBox;