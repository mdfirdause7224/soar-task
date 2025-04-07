function Profile() {
  return (
    <div className="max-w-6xl mx-auto p-6 mt-8 bg-slate-300 rounded-xl shadow-md">
      <div className="flex gap-6 border-b border-gray-200 mb-2">
        <button type="button" className="text-gray-500">
          Edit Profile
        </button>
        <button type="button" className="text-gray-500">
          Preferences
        </button>
        <button type="button" className="text-gray-500">
          Security
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mt-8">
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32">
            <img
              src="https://avatar.iran.liara.run/public?4"
              alt=""
              className="rounded-full w-full h-full object-cover"
            />
          </div>
        </div>

        <form className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label className="block mb-2 font-medium">
              Your Name
              <input
                type="text"
                defaultValue="Charlene Reed"
                className="w-full border rounded-xl p-2"
              />
            </label>
          </div>
          <div>
            <label className="block mb-2 font-medium">
              User Name
              <input
                type="text"
                defaultValue="Charlene Reed"
                className="w-full border rounded-xl p-2"
              />
            </label>
          </div>
          <div>
            <label className="block mb-2 font-medium">
              Email
              <input
                type="email"
                defaultValue="charlenereed@gmail.com"
                className="w-full border rounded-xl p-2"
              />
            </label>
          </div>
          <div>
            <label className="block mb-2 font-medium">
              Password\
              <input
                type="password"
                defaultValue="••••••••"
                className="w-full border rounded-xl p-2"
              />
            </label>
          </div>
          <div>
            <label className="block mb-2 font-medium">
              Date of Birth
              <input
                type="date"
                defaultValue="1990-01-25"
                className="w-full border rounded-xl p-2"
              />
            </label>
          </div>
          <div>
            <label className="block mb-2 font-medium">
              Present Address
              <input
                type="text"
                defaultValue="San Jose, California, USA"
                className="w-full border rounded-xl p-2"
              />
            </label>
          </div>
          <div>
            <label className="block mb-2 font-medium">
              Permanent Address
              <input
                type="text"
                defaultValue="San Jose, California, USA"
                className="w-full border rounded-xl p-2"
              />
            </label>
          </div>
          <div>
            <label className="block mb-2 font-medium">
              City
              <input type="text" defaultValue="San Jose" className="w-full border rounded-xl p-2" />
            </label>
          </div>
          <div>
            <label className="block mb-2 font-medium">
              Postal Code
              <input type="text" defaultValue="45962" className="w-full border rounded-xl p-2" />
            </label>
          </div>
          <div>
            <label className="block mb-2 font-medium">
              Country
              <input type="text" defaultValue="USA" className="w-full border rounded-xl p-2" />
            </label>
          </div>

          <div className="md:col-span-2 flex justify-end">
            <button type="submit" className="bg-black text-white px-6 py-2 rounded-xl font-medium">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
