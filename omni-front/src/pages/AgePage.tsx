import AgeForm from "../components/AgeForm";
import AgeResult from "../components/AgeResult";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { useAgeCalc } from "../features/age/hooks/useAgeCalc";
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover";
import { useState } from "react";
import { Calendar } from "../components/ui/calendar";

const AgePage = () => {
    const { result, isLoading, calculate } = useAgeCalc();
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState<Date>();

    return (
        <main>
            <div>
                <h3 className="text-3xl font-bold underline text-red-500"></h3>
                <AgeForm onSubmit={calculate} disabled={isLoading} />
                <br></br>
                {result && <AgeResult data={result} />}

                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>나이 계산 서비스</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div>
                            <Popover open={open} onOpenChange={setOpen}>
                                <PopoverTrigger asChild>
                                    <Button data-empty={!date}>
                                        {date ? date.toLocaleDateString() : "Select date"}
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
                    </CardContent>
                </Card>
            </div>
        </main>
    );
};

export default AgePage;