'use client'
import { authClient } from "@/app/lib/auth-client";
import Link from "next/link";
import { Form, useForm } from "react-hook-form";

const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async(data) => {
        const {email,password}=data;
        const { data: res, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            rememberMe: true,
            callbackURL: "/",
        });
    }
    return (
        <div className=" container flex justify-center items-center mx-auto min-h-screen">
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <h1 className=" text-xl font-bold text-center py-5">Login Your Account</h1>

                        <label className="label">Email</label>
                        <input {...register("email", { required: "email field is empty!" })} type="email" className="input text-white" placeholder="Email" />
                        {errors.email && <span className=" text-red-500 font-bold p-2">{errors.email.message}</span>}
                        <label className="label">Password</label>
                        <input {...register("password", { required: "You have to give password!" })} type="password" className="input text-white" placeholder="Password" />
                        {errors.password && <span className=" text-red-500 font-bold p-2">{errors.password.message}</span>}
                        <button className="btn btn-neutral mt-4">Login</button>
                        <p className=" p-2">Don't You Have Account? <span className=" text-blue-600 font-bold"><Link href="/register">Register</Link></span></p>
                    </fieldset>
                </form>

            </div>
        </div>
    );
};

export default Login;