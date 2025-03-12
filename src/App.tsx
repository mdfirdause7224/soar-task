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
      <div className="bg-white/85 p-4 border-2 border-solid rounded-xl w-96 ml-20">
        <div>
          <Carousel>
            <CarouselContent>
              {users.map((user, index) => (
                <CarouselItem key={index} className="basis-1/2">
                  <Transfer name={user.name} title={user.title} img={user.img} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default App
