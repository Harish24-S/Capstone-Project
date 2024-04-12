import React, { useRef, useState } from 'react'

function SignupCard({ isInstructor = false }) {

    const [inputs, setInputs] = useState((isInstructor ? {
        email: "",
        fullName: "",
        password: "",
        company: "",
        experience: "",
        designation: "",
    } : {
        fullName: "",
        email: "",
        password: "",
    }
    ))
    const avatarRef = useRef(null);

    const handleSignup = async (e) => {
        e.preventDefault();
            try {
                const res = await fetch(!isInstructor ? '/api/user/register' :  "/api/instructor/register", {
                    method: 'POST',
                    body: new FormData(e.target)
                })
                const data = await res.json();
                console.log(data);
                if (data.success === false) {
                    console.log("Error occured");
                } else {
                    console.log("sign up successfully",data);
                }
            } catch (error) {
                console.log("Error", error);
            }

    }
    return (
        <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-white py-10 px-5 rounded-lg">
            <form  className="space-y-6" onSubmit={handleSignup}>
                <div className="flex items-center justify-between gap-10">
                    <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png" alt="Bonnie image" />
                    <input type="file" name='avatar' accept='image/jpeg, image/jpg, image/png' hidden ref={avatarRef} />
                    <button className="bg-orange-400 text-white py-2 text-sm rounded-lg flex-1 hover:bg-orange-500" onClick={(e) => {
                        e.preventDefault();
                        avatarRef.current.click()
                    }}
                    >Choose Avatar</button>
                </div>
                <div>
                    <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-gray-900">
                        Full Name
                    </label>
                    <div className="mt-2">
                        <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            required
                            className="block w-full bg-[#e8f0fe] px-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>
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
                            required
                            value={inputs.email}
                            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                            className="block w-full rounded-md border-0 py-1.5 bg-[#e8f0fe] px-1 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
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
                            required
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                            className="block w-full px-1 rounded-md border-0 py-1.5 bg-[#e8f0fe] text-gray-900 shadow-sm  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                {
                    isInstructor && <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Experience
                        </label>
                        <div className="mt-2">
                            <input
                                id="experience"
                                name="experience"
                                type="number"
                                required
                                value={inputs.experience}
                                onChange={(e) => setInputs({ ...inputs, experience: e.target.value })}
                                className="block w-full rounded-md border-0 py-1.5 bg-[#e8f0fe] px-1 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                }
                {
                    isInstructor && <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Company
                        </label>
                        <div className="mt-2">
                            <input
                                id="company"
                                name="company"
                                type="text"
                                required
                                value={inputs.company}
                                onChange={(e) => setInputs({ ...inputs, company: e.target.value })}
                                className="block w-full rounded-md border-0 py-1.5 bg-[#e8f0fe] px-1 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                }
                {
                    isInstructor && <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Designation
                        </label>
                        <div className="mt-2">
                            <input
                                id="designation"
                                name="designation"
                                type="text"
                                required
                                value={inputs.designation}
                                onChange={(e) => setInputs({ ...inputs, designation: e.target.value })}
                                className="block w-full rounded-md border-0 py-1.5 bg-[#e8f0fe] px-1 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                }

                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Sign up
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





