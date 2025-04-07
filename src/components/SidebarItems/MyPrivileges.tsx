import Header from '../Header';

function MyPrivileges() {
  return (
    <div>
      <div className="w-[1295px]">
        <Header pageTitle="My Privileges" />
      </div>
      <div className="flex justify-center p-6">
        <div className="w-[680px] text-center p-10 bg-slate-300 border-0 rounded-3xl">
          <h1 className="font-bold text-4xl leading-loose">Coming Soon</h1>
          <h2 className="font-medium text-xl tracking-wide">
            We&apos;re working hard to bring you the My Privileges feature. Stay tuned!
          </h2>
          <div className="flex justify-center mt-6">
            <a href="/Dashboard">
              <button
                type="button"
                className="flex items-center gap-2 bg-white py-2 px-3 m-4 border-0 rounded-xl font-semibold hover:bg-slate-400"
              >
                <img className="w-4" src="/arrow_transparent.png" alt="" />
                <h2>Back To Dashboard</h2>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPrivileges;
