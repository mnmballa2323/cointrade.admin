type CurrencyFormatProps = {
  className?: string;
  value: number;
  currency?: string;
  sameColor?: boolean;
  hideFraction?: boolean;
};

const CurrencyFormat = ({
  className,
  value,
  currency,
  sameColor,
  hideFraction,
}: CurrencyFormatProps) => {
  const parts = value.toFixed(2).toString().split('.');
  const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  let decimalPart = parts[1];

  return (
    <div className={className || ''}>
      {currency}
      {integerPart}
      {!hideFraction && (
        <span
          className={`${sameColor ? '' : 'text-theme-tertiary'}`}
        >{`.${decimalPart}`}</span>
      )}
    </div>
  );
};

export default CurrencyFormat;
