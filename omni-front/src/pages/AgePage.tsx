import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";

const AgePage = () => {
    return (
        <main className="flex-1 flex gap-2">
            <div className="w-[350px] h-100 flex">
                <Card className="flex-1">
                    <CardHeader>입력 조건</CardHeader>
                    <CardContent>
                        <div className=""><div className="w-20">이름</div><div><Input placeholder="이름을 입력하세요."></Input> </div></div>
                        <div className="flex flex-1">
                            <div className="w-20">생년월일</div>
                            <div className="flex">
                                <div>날짜를 선택하세요</div>
                                <Popover>
                                    <PopoverTrigger>
                                        <Button><CalendarIcon /></Button>
                                    </PopoverTrigger> 
                                    <PopoverContent>
                                        <Calendar mode="single" captionLayout="dropdown">

                                        </Calendar>
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                        <div className="flex"><div className="w-20">성별</div><div><></></div></div>
                        <div className="w-20"></div>
                    </CardContent>
                </Card>
            </div>
            <div className="flex-1 flex flex-col gap-4">
                <Card>
                    <CardHeader>현재 나이</CardHeader>
                    <CardContent>
                        <div>

                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>학교 나이</CardHeader>
                    <CardContent></CardContent>
                </Card>
                <Card>
                    <CardHeader>군대 나이</CardHeader>
                    <CardContent></CardContent>
                </Card>
            </div>
        </main>
    );
};

export default AgePage;