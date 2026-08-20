import { useState } from "react";
import { CurrencyChart } from "./CurrencyChart";
import { CurrencySelect } from "./CurrencySelect";

export const CurrencyView = () =>{
    const [currencyType, setCurrencyType] = useState(1);
    return (
        <>
            <div>
                <CurrencySelect value={currencyType} onCurrencyIdChange={setCurrencyType}></CurrencySelect>
            </div>
            <div>
                <CurrencyChart currencyType={currencyType} fromDate="20260520" toDate="20260609" />
            </div>
        </>
    );
};