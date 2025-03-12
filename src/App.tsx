import './App.css'
import Card from './components/Card'
import Transfer from './components/Transfer'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from './components/ui/carousel'

const users = [
  { title: 'Director', name: 'Yasir', img: 'https://avatar.iran.liara.run/public?' },
  { title: 'Designer', name: 'Lubaba', img: 'https://avatar.iran.liara.run/public?1' },
  { title: 'CEO', name: 'Firdause', img: 'https://avatar.iran.liara.run/public?2' },
  { title: 'Director', name: 'Thazeem', img: 'https://avatar.iran.liara.run/public?3' },
  { title: 'Designer', name: 'Rahman', img: 'https://avatar.iran.liara.run/public?4' },
  { title: 'CEO', name: 'Arafath', img: 'https://avatar.iran.liara.run/public?5' },
  { title: 'Director', name: 'Yasir', img: 'https://avatar.iran.liara.run/public?6' }
]

function App() {
  return (
    <>
      <div>
        <div className="flex">
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
        </div>
      </div>
      <div className="bg-white/85 p-4 border-2 border-solid rounded-3xl w-[600px] ml-20">
        <div className="ml-10 mr-10">
          <Carousel>
            <CarouselContent>
              {users.map((user, index) => (
                <CarouselItem key={index} className="basis-1/3 ml-2">
                  <Transfer name={user.name} title={user.title} img={user.img} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="w-12 h-12 bg-gray-300 shadow-xl border-0" />
            <CarouselNext className="w-12 h-12 bg-gray-300 shadow-xl border-0" />
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
    </>
  )
}

export default App
