interface CpiBreakdownSectionProps {
    values: string[]
}

const CpiBreakdownSection = ({values}: CpiBreakdownSectionProps) => {
    return (
        <>
            <div className="flex flex-col p-3 bg-gray-200 rounded-sm">
                {values.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </div>
        </>
    );
};

export default CpiBreakdownSection;