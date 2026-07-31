import Link from "next/link";

const Register = () => {
    return (
        <div className=" container flex justify-center items-center mx-auto min-h-screen">
            <div>
                <form>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <h1 className=" text-xl font-bold text-center py-5">Register Your Account</h1>

                        <label className="label">Name</label>
                        <input type="text" className="input" placeholder="Your Name " />

                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />

                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />

                        <button className="btn btn-neutral mt-4">Register</button>
                        <p className=" p-2">Do You Have Account? <span className=" text-blue-600 font-bold"><Link href="/login">Login</Link></span></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;