import BalanceHistory from '../BalanceHistory';
import Card from '../Card';
import ExpenseStatistics from '../ExpenseStatistics';
import Header from '../Header';
import RecentTransactions from '../RecentTransactions';
import Transfer from '../Transfer';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '../ui/carousel';
import WeeklyActivity from '../WeeklyActivity';

const users = [
  { title: 'Director', name: 'Yasir', img: 'https://avatar.iran.liara.run/public?' },
  { title: 'Designer', name: 'Lubaba', img: 'https://avatar.iran.liara.run/public?1' },
  { title: 'CEO', name: 'Firdause', img: 'https://avatar.iran.liara.run/public?2' },
  { title: 'Director', name: 'Thazeem', img: 'https://avatar.iran.liara.run/public?3' },
  { title: 'Designer', name: 'Rahman', img: 'https://avatar.iran.liara.run/public?4' },
  { title: 'CEO', name: 'Arafath', img: 'https://avatar.iran.liara.run/public?5' },
  { title: 'Director', name: 'Yasir', img: 'https://avatar.iran.liara.run/public?6' }
];

const data = [
  { name: 'Groceries', value: 450 },
  { name: 'Utilities', value: 120 },
  { name: 'Leisure', value: 200 },
  { name: 'Transport', value: 180 },
  { name: 'Healthcare', value: 250 }
];
function Dashboard() {
  return (
    <div className="w-[1280px]">
      <div className="flex-row">
        <div className="w-full">
          <Header pageTitle="Overview" />
        </div>
        <div>
          <div className="flex gap-4">
            <div className="bg-slate-200">
              <h2 className="text-left pt-6 pl-6 font-semibold text-3xl">My Cards</h2>
              <div className="overflow-x-auto w-[850px] scrollbar-hide">
                <div className="flex gap-4 min-w-max p-2">
                  <Card
                    balance="&#36;5,757"
                    name="Firdause Moghal"
                    expiry="02/28"
                    cardNumber={'7856 **** **** 5536'}
                    variant="dark"
                  />
                  <Card
                    balance="&#36;4,538"
                    name="Yasir Arafath"
                    expiry="10/14"
                    cardNumber={'8764 **** **** 5432'}
                    variant="white"
                  />
                  <Card
                    balance="&#36;4,736"
                    name="Rahman Shaik"
                    expiry="09/20"
                    cardNumber={'3253 **** **** 5365'}
                    variant="dark"
                  />
                  <Card
                    balance="&#36;4,538"
                    name="Yasir Arafath"
                    expiry="10/14"
                    cardNumber={'8764 **** **** 5432'}
                    variant="white"
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-left pt-6 pb-4 font-semibold text-3xl">Recent Transactions</h2>
              <div className="h-64 w-[410px] overflow-y-auto p-2 border-0 rounded-3xl bg-slate-200 scrollbar-hide">
                <div className="">
                  <RecentTransactions
                    date={'28 January 2022'}
                    message={'Deposit from Card'}
                    amount={3463}
                  />
                  <RecentTransactions
                    transaction
                    image="https://avatar.iran.liara.run/public?5"
                    date={'29 January 2022'}
                    message={'Credited from Card'}
                    amount={3234}
                  />
                  <RecentTransactions
                    date={'28 January 2022'}
                    message={'Deposit from Card'}
                    amount={3463}
                  />
                  <RecentTransactions
                    transaction
                    image="https://avatar.iran.liara.run/public?5"
                    date={'29 January 2022'}
                    message={'Credited from Card'}
                    amount={3234}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pl-6 pr-6">
            <div>
              <h2 className="text-left pt-6 pl-6 font-semibold text-3xl">Weekly Activity</h2>
              <div className="w-full md:w-[600px] border-0 bg-slate-200 rounded-3xl pt-6 pr-6 pb-6 mt-4">
                <WeeklyActivity />
              </div>
            </div>
            <div className=" md:flex-1">
              <h2 className="text-left pt-6 pl-6 font-semibold text-3xl">Expense Statistics</h2>
              <div className="h-[350px] mt-4 border-0 bg-slate-300 rounded-3xl pt-12">
                <ExpenseStatistics data={data} />
              </div>
            </div>
          </div>
          <div className="flex pl-6 gap-6">
            <div>
              <h2 className="text-left pt-6 pl-6 font-semibold text-3xl">Quick Transfer</h2>
              <div className="bg-slate-300 p-4 border-0 border-solid rounded-3xl w-[600px] h-[350px] mt-6 pt-10">
                <div className="ml-10 mr-10">
                  <Carousel>
                    <CarouselContent>
                      {users.map((user, index) => (
                        <CarouselItem key={index} className="basis-1/3 ml-2">
                          <Transfer name={user.name} title={user.title} img={user.img} />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="disabled:hidden w-12 h-12 bg-gray-300 shadow-xl border-0" />
                    <CarouselNext className="disabled:hidden w-12 h-12 bg-gray-300 shadow-xl border-0" />
                  </Carousel>
                </div>
                <div className="flex gap-4 justify-between pt-4">
                  <p className="text-left p-5">Write Amount</p>
                  <div className="flex flex-1 rounded-full bg-white border-0">
                    <input placeholder="534.50" className="flex-1 outline-none rounded-full p-5" />
                    <button
                      type="button"
                      className="bg-gray-500 px-10 text-lg font-semibold p-5 rounded-full flex gap-4 text-white"
                    >
                      Send
                      <img className="w-6 h-6" src="sender.png" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-left pt-6 pl-6 font-semibold text-3xl">Balance History</h2>
              <div className="mt-6 border-0 rounded-3xl bg-slate-200 p-6">
                <BalanceHistory />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
