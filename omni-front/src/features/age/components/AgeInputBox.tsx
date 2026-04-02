import { Field, FieldContent, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";
import { PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar, CalendarIcon } from "lucide-react";
import { Label, Popover, RadioGroup } from "radix-ui";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import z from "zod";

interface AgeInputBoxProps {
    header: React.ReactNode;
    children: React.ReactNode;
    onSubmit: (data: z.infer<typeof formSchema>) => void;
}

// form 스키마 구성(Validation)
const formSchema = z.object({
    username: z.string()
        .min(3, "Bug title must be at least 5 characters.")
        .max(32, "Bug title must be at most 32 characters."),
    birthdate: z.date(),
    gender: z.string(),
});

const AgeInputBox = ({header, children, onSubmit}: AgeInputBoxProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            birthdate: new Date(),
            gender: "MALE",
        },
    });

    return (
        <form id="ageForm" onSubmit = { form.handleSubmit(onSubmit) }>
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
                                    <InputGroupInput id="age-form-birthdate" value={field.value.toLocaleDateString()} onChange={field.onChange} readOnly />
                                    {/* <Input {...field} value={date?.toLocaleDateString()} id="age-form-birthdate" /> */}
                                    <InputGroupAddon align="inline-end">
                                        <Popover open={isOpen} onOpenChange={setIsOpen}>
                                            <PopoverTrigger asChild>
                                                <InputGroupButton>
                                                    <CalendarIcon />
                                                </InputGroupButton>
                                            </PopoverTrigger> 
                                            <PopoverContent
                                                onPointerDownOutside={(e)=>{
                                                    if(e.target instanceof Element && e.target.closest("select")){
                                                        e.preventDefault();
                                                    }
                                                }}
                                                onFocusOutside={(e)=>{
                                                    e.preventDefault();
                                                }}>
                                                <Calendar mode="single" 
                                                    selected={field.value}
                                                    onSelect={(date)=> {
                                                        field.onChange(date);
                                                        // field.onChange(date?.toLocaleDateString());
                                                        setIsOpen(false);
                                                    }
                                                }
                                                disabled={(date)=> date > new Date()}
                                                captionLayout="dropdown-years"
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
                                    <RadioGroupItem value="MALE" id="r1" />
                                    <Label htmlFor="r1">남</Label>
                                </div>
                                <div className="flex items-center gap-3">
                                    <RadioGroupItem value="FEMALE" id="r2" />
                                    <Label htmlFor="r2">여</Label>
                                </div>
                            </RadioGroup>
                        </FieldContent>
                        { fieldState.invalid && <FieldError errors={[fieldState.error]} /> }
                    </Field>
                )}
                />
                <div>
                    <Button variant="outline" type="submit" form="ageForm" disabled={mutation.isPending} className="w-20">
                        {mutation.isPending ? "계산 중..." : "계산"}
                    </Button>
                </div>
            </FieldGroup>
        </form>
    );
};

export default AgeInputBox;