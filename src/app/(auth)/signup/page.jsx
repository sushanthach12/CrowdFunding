
import GetToken from '@/utils/GetToken'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { FcGoogle } from 'react-icons/fc'
import { ToastContainer } from 'react-toastify'

const SignUp = async() => {
  const token = await GetToken()
  console.log(token)
  const handleSubmit = async (e) => {
    'use server';

    const username = e.get('username').toString();
    const email = e.get('email').toString();
    const password = e.get('password').toString();

    if (!username | !email || !password) return;

    const res = await fetch('http://localhost:5000/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ username: username, email: email, password: password })
    });

    const response = await res.json();
    if (response.Success) {
      setTimeout(() => {
        redirect('/')
      }, 1000);
    }
  }

  return (
    <div className=" bg-white">
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /> */}
          <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">Sign up to continue</h2>
        </div>

        <div className="mt-2 text-center text-sm text-gray-500">
          <p>not a member?<Link href="/signin" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-2 underline">Signin</Link></p>

        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-3" action={handleSubmit}>

            <div>
              <label htmlFor="username" className="block text-sm font-semibold leading-6 text-gray-900">Name</label>
              <div className="mt-2">
                <input id="username" name="username" type="text" required className="block w-full rounded-md border-0 py-1.5 ring-2 ring-gray-300 text-gray-900 shadow-sm px-3 placeholder:text-gray-400  sm:text-sm sm:leading-6" placeholder='Enter username' />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email address</label>
              <div className="mt-2">
                <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 ring-2 ring-gray-300 text-gray-900 shadow-sm px-3 placeholder:text-gray-400  sm:text-sm sm:leading-6" placeholder='Enter email' />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                {/* <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                  </div> */}
              </div>
              <div className="mt-2">
                <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">Password</label>
                <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 ring-2 ring-gray-300 px-3  text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6" placeholder='Enter password' />
              </div>
            </div>

            <div className='pt-4'>
              <button type="submit" className="flex w-full justify-center rounded-md bg-blue-500 hover:bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>

            </div>
          </form>
          <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p class="mx-4 mb-0 text-center font-semibold ">Or</p>
          </div>
          <div className='mt-4'>
            <button type="button" className="flex w-full justify-center rounded-md border-2 border-gray-50 bg-white px-3 py-2 text-sm font-semibold leading-6 text-black shadow-md shadow-gray-200 hover:bg-gray-50 items-center gap-2"> <FcGoogle size={20} /> Sign in with Google</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SignUp