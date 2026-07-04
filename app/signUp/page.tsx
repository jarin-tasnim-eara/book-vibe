export default function SignUpPage(){
  return(
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">

        <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>

        <form className="space-y-5">

          <div>
            <label className="block mb-2 text-sm font-medium">Name </label>
            <input type="text" placeholder="Enter your name" className="w-full border rounded-md px-4 py-3 outline-none focus:border-green-500"/>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium"> Email</label>
            <input type="email" placeholder="Enter your email" className="w-full border rounded-md px-4 py-3 outline-none focus:border-green-500"/>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Password </label>
            <input type="password" placeholder="Create password" className="w-full border rounded-md px-4 py-3 outline-none focus:border-green-500"/>
          </div>

          <button type="submit" className="w-full bg-[#59C6D2] text-white py-3 rounded-md hover:opacity-90 transition">Sign Up</button>

        </form>

      </div>
    </main>
  );
}