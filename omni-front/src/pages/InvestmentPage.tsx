import { CurrencyView } from "@/features/investment/ExchangeRate/components/CurrencyView";
import { BaseRateChart } from "@/features/investment/InterestRate/components/BaseRateChart";

const InvestmentPage = () => {
    return (
        <>
            <main className="flex-1 flex gap-6">
                <div className="w-220 h-150 p-10 shadow-lg rounded-lg border gap-4">
                    <CurrencyView></CurrencyView>
                </div>
                <div className="w-220 h-150 p-10 shadow-lg rounded-lg border gap-4">
                    <BaseRateChart></BaseRateChart>
                </div>
            </main>
        </>
    );
};

export default InvestmentPage;