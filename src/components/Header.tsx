type propTypes = {
  pageTitle: string;
};

function Header(props: propTypes) {
  return (
    <div className="flex justify-between items-center px-6 py-6 w-full h-20 bg-white border">
      <h2 className="text-2xl font-semibold text-[#343c6a]">{props.pageTitle}</h2>
      <div className="flex gap-4 items-center">
        <div className="relative w-64">
          <img
            src="/search.png"
            alt="search"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
          />
          <input
            type="text"
            placeholder="Search for something"
            className="w-full pl-10 py-2 rounded-full bg-slate-200 outline-none"
          />
        </div>
        <div
          id="setting"
          className="w-8 h-8 border border-black rounded-full flex items-center justify-center"
        >
          <img className="w-4 h-4" src="/Setting.svg" alt="Settings Icon" />
        </div>
        <div
          id="notification"
          className="w-8 h-8 border border-black rounded-full flex items-center justify-center"
        >
          <img className="w-4 h-4" src="/notification.png" alt="" />
        </div>
        <div id="pic" className="border-black border rounded-full w-10 h-10">
          <img src="https://avatar.iran.liara.run/public?" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
