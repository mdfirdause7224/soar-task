// function SideBar() {
//   return (
//     <>
//       <div className="bg-white w-[250px] h-[700px] py-3">
//         <div className="flex p-4 px-8 gap-2 font-extrabold text-2xl text-blue-900 hover:text-black hover:font-semibold">
//           <img src="./downloads.svg" alt="opacity-60" />
//           Soar Task
//         </div>
//         <div className="flex p-4 px-10 gap-5 text-gray-400 hover:text-black font-semibold">
//           <img className="opacity-60 hover:opacity-100" src="./download (1).svg" alt="opacity-60" />
//           Dashboard
//         </div>
//         <div className="flex p-4 px-10 gap-5 text-gray-400 hover:text-black font-semibold">
//           <img className="opacity-60 hover:opacity-100" src="./download (2).svg" alt="opacity-60" />
//           Transactions
//         </div>
//         <div className="flex p-4 px-10 gap-5 text-gray-400 hover:text-black font-semibold">
//           <img className="opacity-60 hover:opacity-100" src="./download (3).svg" alt="opacity-60" />
//           Accounts
//         </div>
//         <div className="flex p-4 px-10 gap-5 text-gray-400 hover:text-black font-semibold">
//           <img className="opacity-60 hover:opacity-100" src="./download (4).svg" alt="opacity-60" />
//           Investments
//         </div>
//         <div className="flex p-4 px-10 gap-5 text-gray-400 hover:text-black font-semibold">
//           <img className="opacity-60 hover:opacity-100" src="./9.svg" alt="opacity-60" />
//           Credit Cards
//         </div>
//         <div className="flex p-4 px-10 gap-5 text-gray-400 hover:text-black font-semibold">
//           <img className="opacity-60 hover:opacity-100" src="./download (5).svg" alt="opacity-60" />
//           Loans
//         </div>
//         <div className="flex p-4 px-10 gap-5 text-gray-400 hover:text-black font-semibold">
//           <img className="opacity-60 hover:opacity-100" src="./download (6).svg" alt="opacity-60" />
//           Services
//         </div>
//         <div className="flex p-4 px-10 gap-5 text-gray-400 hover:text-black font-semibold">
//           <img className="opacity-60 hover:opacity-100" src="./download (7).svg" alt="opacity-60" />
//           My Privileges
//         </div>
//         <div className="flex p-4 px-10 gap-5 text-gray-400 hover:text-black font-semibold">
//           <img className="opacity-60 hover:opacity-100" src="./download (8).svg" alt="opacity-60" />
//           Setting
//         </div>
//       </div>
//     </>
//   );
// }

// export default SideBar;

import { NavLink } from 'react-router';

type MenuItemProps = {
  title: string;
  path: string;
  img: string;
};

const menu: MenuItemProps[] = [
  { title: 'Dashboard', path: '/dashboard', img: 'Dashboard.svg' },
  { title: 'Transactions', path: '/transactions', img: 'Transactions.svg' },
  { title: 'Accounts', path: '/accounts', img: 'Accounts.svg' },
  { title: 'Investments', path: '/investments', img: 'Investments.svg' },
  { title: 'Credit Cards', path: '/cards', img: 'CreditCards.svg' },
  { title: 'Loans', path: '/loans', img: 'Loans.svg' },
  { title: 'Services', path: '/services', img: 'Services.svg' },
  { title: 'My Privileges', path: '/privileges', img: 'MyPrivileges.svg' },
  { title: 'Settings', path: '/settings', img: 'Setting.svg' }
];

function MenuItem({ title, path, img }: MenuItemProps) {
  return (
    <div className="flex">
      <NavLink
        to={path}
        className={({ isActive }) =>
          `px-[16px] py-2 flex gap-6 hover:text-black hover:opacity-100 transition-all ${
            isActive
              ? 'border-l-[4px] pl-[12px] opacity-100 text-black font-bold border-black'
              : 'text-black opacity-50'
          }`
        }
      >
        <img src={img} alt={title} />
        {title}
      </NavLink>
    </div>
  );
}

function Navbar() {
  return (
    <div className="bg-white min-h-screen">
      <div className="flex gap-6 px-4 py-2">
        <img src="SoarTask.svg" alt="Soar Task Logo" />
        <h1 className="font-bold text-xl">Soar Task</h1>
      </div>
      <div className="w-60 max-w-72 flex flex-col gap-4 py-4">
        {menu.map((item) => (
          <MenuItem key={item.title} path={item.path} title={item.title} img={item.img} />
        ))}
      </div>
    </div>
  );
}

export default Navbar;
