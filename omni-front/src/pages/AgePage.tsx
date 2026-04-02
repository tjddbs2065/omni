import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from '@tanstack/react-query';
import { ageApi } from "@/features/age/api/ageApi";
import AgePrintBox from "@/features/age/components/AgePrintBox";
import AgeInputBox from "@/features/age/components/AgeInputBox";



// request fetch(API call)
const fetchAgeCalculation = async (data: z.infer<typeof formSchema>)=>{
    const birthDate = data.birthdate;
    const response = await ageApi.calculateAge({
        year: birthDate.getFullYear(),
        month: birthDate.getMonth() + 1,
        day: birthDate.getDate(),
        gender: "MALE"
    });
    return response;
}

const AgePage = () => {

    // tanstack mutation call
    const mutation = useMutation({
        mutationFn: fetchAgeCalculation,
        onSuccess: (responseData) => {
            console.log(responseData);
        },
        onError: (error) => {
            console.log(error);
        }
    });

    return (
        <>
            <main className="flex-1 flex gap-6">
                <div className="w-[400px] flex">
                    <Card className="flex-1 shadow-md">
                        <CardHeader>입력 조건</CardHeader>
                        <CardContent className="flex flex-col gap-6">
                            {/* 여기서부터 form 구성 */}
                            <AgeInputBox
                                header=""
                                onSubmit={(data) => mutation.mutate(data)}
                            >
                                <div></div>
                            </AgeInputBox>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex-1 flex flex-col gap-6">
                    <AgePrintBox header="현재 나이">
                        {mutation.data}
                    </AgePrintBox>
                    <AgePrintBox header="학교 나이">
                        {mutation.data}
                    </AgePrintBox>
                    <AgePrintBox header="군대 나이">
                        {mutation.data}
                    </AgePrintBox>
                </div>
            </main>
        </>
    );
};

export default AgePage;