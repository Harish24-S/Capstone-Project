import React from 'react'

function SignupCard() {
    return (
        

            <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-white py-10 px-5 rounded-lg">
                <form className="space-y-6">
                    <div className="flex items-center justify-between gap-10">
                        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://bit.ly/ryan-florence" alt="Bonnie image" />
                        <button className="bg-orange-400 text-white py-2 text-sm rounded-lg flex-1 hover:bg-orange-500">Choose Avatar</button>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-orange-400 hover:text-orange-500">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full px-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Already a member?{' '}
                    <a href="#" className="font-semibold leading-6 text-orange-400 hover:text-orange-500">
                        Login
                    </a>
                </p>
            </div>
    )
}

export default SignupCard





