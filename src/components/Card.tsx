interface LabelValueProps {
  label: string
  value: React.ReactNode
}

function LabelValue(props: LabelValueProps) {
  return (
    <div>
      <label className="text-xs leading-none whitespace-nowrap opacity-50">{props.label}</label>
      <h4 className="font-bold text-lg leading-none whitespace-nowrap">{props.value}</h4>
    </div>
  )
}

interface CardProps {
  balance: string
  name: string
  expiry: string
  cardNumber: string
  variant?: string
}

function Card(props: CardProps) {
  const { balance, cardNumber, expiry, name, variant = 'dark' } = props
  const isDark = variant === 'dark'
  const DarkTheme = {
    container: 'bg-gradient-to-r from-gray-600 to-black text-white',
    footer: 'bg-gradient-to-r from-white/10 to-white/0'
  }
  return (
    <div
      id="card-box"
      className={`${isDark ? DarkTheme.container : 'bg-white text-black border-2 border-solid border-black'} rounded-3xl w-80 min-w-80 max-w-96 m-[14px] font-sans flex flex-col justify-between overflow-auto box-border`}
    >
      <header
        id="first-line"
        className="flex flex-row justify-between px-[30px] py-[22px] text-left"
      >
        <div id="insiders" className="w-[63px] h-[38px]">
          <LabelValue label="Balance" value={`${balance}`} />
        </div>
        <img
          id="chip"
          src={isDark ? 'download.svg' : 'card-chip-dark.svg'}
          alt="chip"
          className="w-[34.89px] h-[34.89px] flex items-center justify-center"
        />
      </header>
      <section id="second-line" className="flex gap-10 px-[30px] py-[6px] text-left">
        <span id="user-detail">
          <LabelValue label="CARD HOLDER" value={name} />
        </span>
        <span id="card-expiry">
          <LabelValue label="VALID THRU" value={expiry} />
        </span>
      </section>
      <footer
        id="third-line"
        className={`${isDark ? DarkTheme.footer : 'bg-white text-black border-t-[3px] '} flex justify-between items-center px-[30px] py-[20px] mt-3.5 text-lg`}
      >
        <span id="card-number" className="font-bold text-lg tracking-widest">
          {cardNumber}
        </span>
        <span id="card-icon" className="flex">
          <div
            className={`${isDark ? 'bg-[rgba(240,236,236,0.5)]' : 'bg-[rgba(0,0,0,0.5)]'} w-[30px] h-[30px] rounded-full`}
          ></div>
          <div
            className={`${isDark ? 'bg-[rgba(240,236,236,0.5)]' : 'bg-[rgba(0,0,0,0.5)]'} w-[30px] h-[30px] rounded-full -ml-[15px]`}
          ></div>
        </span>
      </footer>
    </div>
  )
}

export default Card
