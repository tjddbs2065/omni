import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAgeCalc } from "@/features/age/hooks/useAgeCalc";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";


const index = () => {

    return (
        <div>
            <Card className="w-[500px]">
                <CardHeader>
                    <CardTitle>나이 계산 서비스</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <div className="w-[140px] flex items-center justify-center gap-2"> 
                            <div className="w-[100px]">
                                <span>{date?.toLocaleDateString() || "날짜를 선택하세요."} </span>
                            </div>
                            <div>
                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild>
                                        <Button data-empty={!date}>
                                            <CalendarIcon />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            defaultMonth={date}
                                            captionLayout="dropdown"
                                            onSelect={(date)=>{
                                                setDate(date);
                                                setOpen(false);
                                            }}
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                        <div>
                            <Button>계산하기</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>

    );
};

export default index;