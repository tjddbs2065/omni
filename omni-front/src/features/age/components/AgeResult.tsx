import type { AgeResponse } from "../features/age/api/ageApi";

interface Props {
    data: AgeResponse;
}

const AgeResult: React.FC<Props> = ({data}) => {
    return (
        <div className="card">
            <h2>계산 결과</h2>
            <p>만 나이: { data.currentAge.currentAge.internationalAge }세</p>
            <p>한국 나이: { data.currentAge.currentAge.koreanAge }세</p>
        </div>
    );
};

export default AgeResult;