'use client'
import { authClient } from "@/app/lib/auth-client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const Register = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const { name, email, password } = data;
        // console.log("Name = ",name);
        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            // image: "https://example.com/image.png",
            callbackURL: "/login",
        });
        // console.log(res? `data = ${res}` : `error= ${error.message}`);
        if(res){
            alert("Register Successful ")
            router.push("/login");
        }
        else{
            alert(error.message)
        }
        // {res? alert("Register Successful ") : alert(error.message)};
        // console.log("Password ",password);
    }
    return (
        <div className=" container flex justify-center items-center mx-auto min-h-screen">
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <h1 className=" text-xl font-bold text-center py-5">Register Your Account</h1>

                        <label className="label">Name</label>
                        <input {...register("name", { required: "name field is empty!" })} type="text" className="input text-white" placeholder="Your Name " />
                        {errors.name && <span className=" text-red-500 font-bold p-2">{errors.name.message}</span>}

                        <label className="label">Email</label>
                        <input {...register("email", { required: "email field is empty!" })} type="email" className="input text-white" placeholder="Email" />
                        {errors.email && <span className=" text-red-500 font-bold p-2">{errors.email.message}</span>}

                        <label className="label">Password</label>
                        <input {...register("password", { required: "password field is empty!" })} type="password" className="input text-white" placeholder="Password" />
                        {errors.password && <span className=" text-red-500 font-bold p-2">{errors.password.message}</span>}

                        <button className="btn btn-neutral mt-4">Register</button>
                        <p className=" p-2">Do You Have Account? <span className=" text-blue-600 font-bold"><Link href="/login">Login</Link></span></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;