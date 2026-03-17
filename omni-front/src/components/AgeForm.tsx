import type { AgeRequest } from "../features/age/api/ageApi";
import { useForm } from "react-hook-form";

interface AgeFormProps{
    onSubmit: (data: AgeRequest) => void;
    disabled: boolean;
}

const AgeForm = ({onSubmit, disabled} : AgeFormProps) => {
    const { register, handleSubmit } = useForm<AgeRequest>();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div>
                    <input type="number" {...register('year')} placeholder="2000"/>년
                </div>
                <div>
                    <input type="number" {...register('month')} placeholder="1"/>월
                </div>
                <div>
                    <input type="number" {...register('day')} placeholder="1"/>일
                </div>
            </div>
            <div>
                <select {...register('gender')}>
                    <option value="MALE">남성</option>
                    <option value="FEMALE">여성</option>
                </select>
            </div>
            <div>
                <button type="submit" disabled={disabled}>
                    {disabled ? '계산 중...' : '나이 계산하기'}
                </button>
            </div>
        </form>
    );
};


export default AgeForm;