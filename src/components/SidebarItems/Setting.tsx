import Header from '../Header';
import Profile from '../Profile';

function Setting() {
  return (
    <div>
      <div className="w-[1295px]">
        <Header pageTitle="Settings" />
      </div>
      <div>
        <Profile />
      </div>
    </div>
  );
}

export default Setting;
