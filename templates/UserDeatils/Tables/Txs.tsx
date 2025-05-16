import TooltipEle from "@/components/TooltipEle";

const TsxTable = () => {
  const tx = [
    {
      id: '123abc456def789',
      type: 'Sell',
      amount: '100 BNB',
      exchange: 'Binance',
      date: '2023-05-01'
    },
    {
      id: '123abc456def789',
      type: 'Buy',
      amount: '1 BTC',
      exchange: 'Kucoin',
      date: '2023-05-01'
    },
    {
      id: '123abc456def789',
      type: 'Buy',
      amount: '100 ETH',
      exchange: 'Kucoin',
      date: '2023-05-01'
    }
  ]
  return (
    <div className="mt-5 md:-mx-4 w-full overflow-x-auto rounded-lg border border-theme-stroke shadow-default">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-caption-2m capitalize py-3 pl-4 text-left text-theme-secondary md:hidden">
              Tx ID
            </th>
            <th className="text-caption-2m capitalize py-3 pl-4 text-left text-theme-secondary md:hidden">
              Type
            </th>
            <th className="text-caption-2m capitalize py-3 pl-4 text-left text-theme-secondary md:hidden">
              Amount
            </th>
            <th className="text-caption-2m capitalize py-3 pl-4 text-left text-theme-secondary md:hidden">
              Exchange
            </th>
            <th className="text-caption-2m capitalize py-3 pl-4 text-left text-theme-secondary md:hidden">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {tx.map((item) => (
            <tr className="" key={item.id}>
              <td className="text-base-1s border-t border-theme-stroke text-left py-3 pl-4 text-theme-secondary md:hidden">
                <TooltipEle title={item.id}>
                  {item.id}
                </TooltipEle>
              </td>
              <td className="text-base-1s border-t border-theme-stroke text-left py-3 pl-4 text-theme-secondary md:hidden">
                {item.type}
              </td>
              <td className="text-base-1s border-t border-theme-stroke text-left py-3 pl-4 text-theme-secondary md:hidden">
                {item.amount}
              </td>
              <td className="text-base-1s border-t border-theme-stroke text-left py-3 pl-4 text-theme-secondary md:hidden">
                {item.exchange}
              </td>
              <td className="text-base-1s border-t border-theme-stroke text-left py-3 pl-4 text-theme-secondary md:hidden">
                {item.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TsxTable;
