type propTypes = {
  pageTitle: string;
};

function Header(props: propTypes) {
  return (
    <div className="flex justify-between items-center px-6 py-6 w-full h-20 bg-white border">
      <h2 className="text-2xl font-semibold text-[#343c6a]">{props.pageTitle}</h2>
      <div className="flex gap-4 items-center">
        <input
          type="text"
          placeholder="Search for something"
          className="px-6 py-2 rounded-full bg-slate-200 outline-none"
        />
        <div id="setting" className="border-black border rounded-full w-8 h-8"></div>
        <div id="notification" className="border-black border rounded-full w-8 h-8"></div>
        <div id="pic" className="border-black border rounded-full w-10 h-10">
          <img src="https://avatar.iran.liara.run/public?" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
