import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAgeCalc } from "@/features/age";
import type { AgeRequest } from "@/features/age/api/ageApi";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
    currentAge: z.string(),
});

const AgePage = () => {
    const [date, setDate] = useState<Date>();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const {register, handleSubmit} = useForm<AgeRequest>();
    const { calculate } = useAgeCalc();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            currentAge: "",
        },
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data);
    }

    return (
        <main className="flex-1 flex gap-6">
            <div className="w-[400px] flex">
                <Card className="flex-1 shadow-md">
                    <CardHeader>입력 조건</CardHeader>
                    <CardContent className="flex flex-col gap-6">
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="flex w-full">
                            <div className="w-20 flex items-start">이름:</div>
                            <div className="flex-1"><Input placeholder="이름을 입력하세요."></Input> </div>
                        </div>
                        <div className="flex flex-1 w-full">
                            <div className="w-20 flex items-start">생년월일:</div>
                            <div className="flex-1 flex justify-between">
                                <div>{date?.toLocaleDateString() || "날짜를 선택하세요"}</div>
                                <div>
                                    <Popover open={isOpen} onOpenChange={setIsOpen}>
                                        <PopoverTrigger>
                                            <Button><CalendarIcon /></Button>
                                        </PopoverTrigger> 
                                        <PopoverContent>
                                            <Calendar mode="single" captionLayout="dropdown" selected={date} onSelect={(date)=> {setIsOpen(false); setDate(date)}}/>
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-20 flex items-start">성별: </div>
                            <div className="flex-1 flex">
                                <RadioGroup className="flex flex-1 justify-start gap-10" {...register("gender")}>
                                    <div className="flex items-center gap-3">
                                        <RadioGroupItem value="male" id="r1" />
                                        <Label htmlFor="r1">남</Label>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <RadioGroupItem value="female" id="r2" />
                                        <Label htmlFor="r2">여</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                        </div>
                        <div>
                            <Button variant="outline" type="submit">계산</Button>
                        </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
            <div className="flex-1 flex flex-col gap-6">
                <Card className="shadow-md">
                    <CardHeader>현재 나이</CardHeader>
                    <CardContent>
                        <div>

                        </div>
                    </CardContent>
                </Card>
                <Card className="shadow-md">
                    <CardHeader>학교 나이</CardHeader>
                    <CardContent></CardContent>
                </Card>
                <Card className="shadow-md">
                    <CardHeader>군대 나이</CardHeader>
                    <CardContent></CardContent>
                </Card>
                <Card className="shadow-md">
                    <CardHeader>청년 나이</CardHeader>
                    <CardContent></CardContent>
                </Card>
            </div>
        </main>
    );
};

export default AgePage;