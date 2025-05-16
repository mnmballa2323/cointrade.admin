const AssetTalbe = () => {

  const assets = [
    {
      id: 1,
      name: 'BTC',
      value: '$1000,000',
      balance: '0.5 BTC',
    },
    {
      id: 2,
      name: 'ETH',
      value: '$1000,000',
      balance: '0.5 BTC',
    },
    {
      id: 3,
      name: 'BNB',
      value: '$1000,000',
      balance: '0.5 BTC',
    },
    {
      id: 4,
      name: 'SOL',
      value: '$1000,000',
      balance: '0.5 BTC',
    },
  ]
  return (
    <div className=" mt-5 md:-mx-4 w-full overflow-x-auto rounded-lg border border-theme-stroke shadow-default">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-caption-2m capitalize py-3 pl-4 text-left text-theme-secondary md:hidden">
              ID
            </th>
            <th className="text-caption-2m capitalize py-3 pl-4 text-left text-theme-secondary md:hidden">
              Name
            </th>
            <th className="text-caption-2m capitalize py-3 pl-4 text-left text-theme-secondary md:hidden">
              Value
            </th>
            <th className="text-caption-2m capitalize py-3 pl-4 text-left text-theme-secondary md:hidden">
              Balance
            </th>
         
          </tr>
        </thead>
        <tbody>
          {assets.map((item)=>(
            <tr className="" key={item.id}>
              <td className="text-base-1s border-t border-theme-stroke text-left py-3 pl-4 text-theme-secondary md:hidden">
                {item.id}
              </td>
              <td className="text-base-1s border-t border-theme-stroke text-left py-3 pl-4 text-theme-secondary md:hidden">
                {item.name}
              </td>
              <td className="text-base-1s border-t border-theme-stroke text-left py-3 pl-4 text-theme-secondary md:hidden">
                {item.value}
              </td>
              <td className="text-base-1s border-t border-theme-stroke text-left py-3 pl-4 text-theme-secondary md:hidden">
                {item.balance}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetTalbe;
