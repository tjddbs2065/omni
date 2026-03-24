import { Controller, Form, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAgeCalc } from "@/features/age";
import type { AgeRequest } from "@/features/age/api/ageApi";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Field, FieldContent, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";
import { parseISO } from "date-fns";

// form 스키마 구성
const formSchema = z.object({
    username: z.string()
        .min(3, "Bug title must be at least 5 characters.")
        .max(32, "Bug title must be at most 32 characters."),
    birthdate: z.string(),
    gender: z.string(),
});

const AgePage = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { calculate } = useAgeCalc();

    // form hook 구성
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            birthdate: new Date().toLocaleDateString(),
            gender: "male",
        },
    })

    // form submit 메서드 구성
    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data);
    }

    return (
        <main className="flex-1 flex gap-6">
            <div className="w-[400px] flex">
                <Card className="flex-1 shadow-md">
                    <CardHeader>입력 조건</CardHeader>
                    <CardContent className="flex flex-col gap-6">
                        {/* 여기서부터 form 구성 */}
                        <form id="ageForm" onSubmit={form.handleSubmit(onSubmit)}>
                            <FieldGroup>
                                <Controller name="username" control={form.control} render={({field, fieldState}) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="age-form-username">
                                            이름
                                        </FieldLabel>
                                        <FieldContent>
                                            <Input {...field} id="age-form-username" placeholder="이름을 입력하세요." autoComplete="false" />
                                        </FieldContent>
                                        { fieldState.invalid && <FieldError errors={[fieldState.error]} /> }
                                    </Field>
                                    )} 
                                />
                                <Controller name="birthdate" control={form.control} render={({field, fieldState}) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="age-form-birthdate">
                                            생년월일
                                        </FieldLabel>
                                        <FieldContent>
                                            <div>
                                                <InputGroup>
                                                    <InputGroupInput id="age-form-birthdate" value={field.value} onChange={field.onChange} readOnly />
                                                    {/* <Input {...field} value={date?.toLocaleDateString()} id="age-form-birthdate" /> */}
                                                    <InputGroupAddon align="inline-end">
                                                        <Popover open={isOpen} onOpenChange={setIsOpen}>
                                                            <PopoverTrigger asChild>
                                                                <InputGroupButton>
                                                                    <CalendarIcon />
                                                                </InputGroupButton>
                                                            </PopoverTrigger> 
                                                            <PopoverContent>
                                                                <Calendar mode="single" 
                                                                    selected={parseISO(field.value) || undefined}
                                                                    onSelect={(date)=> {
                                                                        // field.onChange(date);
                                                                        field.onChange(date?.toLocaleDateString());
                                                                        setIsOpen(false);
                                                                    }
                                                                }
                                                                disabled={(date)=> date > new Date()}
                                                                />
                                                            </PopoverContent>
                                                        </Popover>
                                                    </InputGroupAddon>
                                                </InputGroup>
                                            </div>
                                        </FieldContent>
                                        { fieldState.invalid && <FieldError errors={[fieldState.error]} /> }
                                    </Field>
                                    )} 
                                />
                                <Controller name="gender" control={form.control} render={({field, fieldState}) => (
                                    <Field>
                                        <FieldLabel htmlFor="age-form-gender">성별</FieldLabel>
                                        <FieldContent>
                                            <RadioGroup id="age-form-gender" className="flex flex-1 justify-start gap-10"
                                                value={field.value} onValueChange={field.onChange} disabled={field.disabled} >
                                                <div className="flex items-center gap-3">
                                                    <RadioGroupItem value="male" id="r1" />
                                                    <Label htmlFor="r1">남</Label>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <RadioGroupItem value="female" id="r2" />
                                                    <Label htmlFor="r2">여</Label>
                                                </div>
                                            </RadioGroup>
                                        </FieldContent>
                                        { fieldState.invalid && <FieldError errors={[fieldState.error]} /> }
                                    </Field>
                                )}
                                />
                                <div>
                                    <Button variant="outline" type="submit" form="ageForm">계산</Button>
                                </div>
                            </FieldGroup>

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