interface propsTypes {
  date: string;
  transaction?: boolean;
  message: string;
  amount: number;
  image?: string;
}

function RecentTransactions(props: propsTypes) {
  const { image = 'https://avatar.iran.liara.run/public?', amount = 0 } = props;
  return (
    <div className="items-center flex gap-10 rounded-3xl mx-4 my-8">
      <div id="forImage" className="rounded-full flex items-center justify-center w-10 h-10">
        <img src={image} alt="" />
      </div>
      <div className="flex items-center flex-1 gap-10 justify-between">
        <div id="Transaction-details">
          <p>{props.message}</p>
          <p className="text-gray-500">{props.date}</p>
        </div>
        <p
          id="Transaction-amount"
          className={`${props.transaction ? 'text-green-900' : 'text-red-900'}`}
        >
          {props.transaction ? `+$${amount} ` : `-$${props.amount}`}
        </p>
      </div>
    </div>
  );
}

export default RecentTransactions;
