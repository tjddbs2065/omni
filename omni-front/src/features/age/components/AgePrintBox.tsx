import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { AgeResponse } from "../api/ageApi";

interface agePrintBoxProps {
    header: React.ReactNode; // 헤더 전용 속성
    children: AgeResponse | undefined; // 어떤 것이든 담을 수 있는 가장 유연한 타입
}

const AgePrintBox = ({header, children}: agePrintBoxProps) => {
    return (
        <Card className="shadow-md">
            <CardHeader>{header}</CardHeader>
            <CardContent>
                <div>{children?.currentAge.currentAge.internationalAge}</div>
                <div>{children?.currentAge.currentAge.koreanAge}</div>
            </CardContent>
        </Card>
    );
};

export default AgePrintBox;