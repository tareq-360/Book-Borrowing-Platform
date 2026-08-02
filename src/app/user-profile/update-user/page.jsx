'use client'
import { authClient } from "@/app/lib/auth-client";
import Link from "next/link";
import { Form, useForm } from "react-hook-form";

const UpdateUser = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const { name, image } = data;
        await authClient.updateUser({
            image: image,
            name: name,
            
        })
        alert("Update successful ");
        console.log("Name ", name, " url ", image);

    }

    return (
        <div className=" container flex justify-center items-center mx-auto min-h-screen">
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <h1 className=" text-xl font-bold text-center py-5">Update Your Name Account</h1>

                        <label className="label">Name</label>
                        <input {...register("name")} type="text" className="input text-white" placeholder="Change Name" />
                        <label className="label">Image</label>
                        <input {...register("image")} type="text" className="input text-white" placeholder="Change Image URL" />
                        <button className="btn btn-primary mt-4">Update</button>
                    </fieldset>
                </form>

            </div>
        </div>
    );
};

export default UpdateUser;