export default function SignInPage(){
  return(
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">

        <h1 className="text-3xl font-bold text-center mb-6">Sign In </h1>

        <form className="space-y-5">

          <div>
            <label className="block mb-2 text-sm font-medium"> Email</label>
            <input type="email" placeholder="Enter your email" className="w-full border rounded-md px-4 py-3 outline-none focus:border-green-500"/>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Password</label>
            <input type="password" placeholder="Enter your password" className="w-full border rounded-md px-4 py-3 outline-none focus:border-green-500"/>
          </div>

          <button type="submit"className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition"> Sign In</button>

        </form>

      </div>
    </main>
  );
}