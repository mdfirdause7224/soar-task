import {
  CartesianGrid,
  Line,
  LineChart,
  //   Tooltip,
  //   Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

const data = [
  {
    name: 'Jul',
    value: 100
  },
  {
    name: 'Aug',
    value: 320
  },
  {
    name: 'Sep',
    value: 480
  },
  {
    name: 'Oct',
    value: 750
  },
  {
    name: 'Nov',
    value: 280
  },
  {
    name: 'Dec',
    value: 580
  },
  {
    name: 'Jan',
    value: 600
  }
];

const BalanceHistory = () => {
  return (
    <div>
      <ResponsiveContainer width={800} height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3" horizontal={true} vertical={true} />
          <YAxis ticks={[0, 200, 400, 600, 800]} />
          <XAxis dataKey="name" />
          <Tooltip contentStyle={{ borderRadius: '8px' }} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: '#8884d8', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceHistory;
