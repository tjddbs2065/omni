import KpiCard from "@/components/common/KpiCard";
import PageBreadcrumb from "@/components/common/PageBreadcrumb";
import PageHeader from "@/components/common/PageHeader";
import CpiBreakdownSection from "@/features/indicator/cpi/components/CpiBreakdownSection";
import CpiKpiSection from "@/features/indicator/cpi/components/CpiKpiSection";

const CPIPage = () => {
    return (
        <>
            <main className="flex-1 flex flex-col w-full gap-2 p-2">
                <div>
                    <PageBreadcrumb>
                        {'[OMNI] > 매크로 > 미국 소비자물가지수(CPI)'}
                    </PageBreadcrumb>
                </div>
                <div>
                    <PageHeader>
                        미국 소비자물가지수
                    </PageHeader>
                </div>
                <div>
                    <CpiKpiSection>
                        <KpiCard value="+ 314.1 %" comment="(예상: 314.0 | ▲0.1)">최신 CPI 지수</KpiCard>
                        <KpiCard value="+ 3.0 %" comment="(예상: + 3.1% | ▼0.1%p)">YoY(전년 동기 대비)</KpiCard>
                        <KpiCard value="+ 0.2 %" comment="(예상: + 0.2% | 부합)">MoM(전월 대비)</KpiCard>
                        <KpiCard value="2026-07-11 21:30 (EST)" comment="(D-29)">근원(Core) YoY</KpiCard>
                        <KpiCard value="2026-07-11 21:30 (EST)" comment="(D-29)">다음 발표 예정일</KpiCard>
                    </CpiKpiSection>
                </div>
                <div className="flex-1">
                    {/* <CpiTrendChartSection></CpiTrendChartSection> */}
                    <CpiBreakdownSection values={["주거비", "에너지", "식품", "중고차"]}></CpiBreakdownSection>
                </div>
                {/* <div className="flex flex-row flex-1 justify-between gap-5 p-5 bg-gray-100 rounded-xl">
                    <div className="flex-1 p-3 bg-gray-200 rounded-sm">
                        메인 트렌드 차트
                        <div>

                        </div>
                    </div>
                    <div className="flex flex-col gap-5 w-100">
                        <div className="flex flex-col flex-1 p-3 bg-gray-200 rounded-sm">
                            [세부 항목별 기여도]
                            <span>주거비</span>
                            <span>에너지</span>
                            <span>식품</span>
                            <span>중고차</span>
                        </div>
                        <div className="flex flex-col p-3 bg-gray-200 rounded-sm h-40">
                            [Headline vs Core CPI]
                            <span>Core</span>
                            <span>Headline</span>
                        </div>
                    </div>
                </div> */}
                <div className="flex flex-row justify-between p-5 bg-gray-100 rounded-xl gap-5">
                    <div className="flex-2 bg-gray-200 rounded-sm p-5">
                        <span>[시장 반응]</span>
                        <div className="flex flex-col gap-4">
                            <span>• S&P 500       : 5,420.10  (▼ 0.3%)</span>
                            <span>• 미 10년 국채   : 4.25%     (▲ 5bp)</span>
                            <span>• 달러 인덱스   : 104.2     (▲ 0.2%)</span>
                            <span>• 9월 금리 동결 : 78%확률    (▲ 5%p)</span>
                        </div>
                    </div>
                    <div className="flex-3 bg-gray-200 rounded-sm p-5">
                        <span>[과거 발표]</span>
                        <div className="flex flex-col gap-4">
                            <span>날짜       발표    예상    이전   MoM</span>
                            <span>2026.08   2.9%    2.8%    3.1%   +0.1%</span>
                            <span>2026.07   3.1%    3.1%    3.3%   +0.2%</span>
                            <span>2026.06   3.3%    3.2%    3.4%   +0.2%</span>
                            <span>2026.05   3.4%    3.4%    3.5%   +0.3%</span>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default CPIPage;