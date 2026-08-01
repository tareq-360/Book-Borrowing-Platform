'use client'

import { authClient } from "@/app/lib/auth-client";
import { useRouter } from "next/navigation"; 



const Logout = () => {
    const router = useRouter();
    const logOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/");
                    router.refresh();
                },
            },
        });
    }
    return (
        <div>
            <button onClick={() => logOut()} className=" btn btn-primary">Log Out</button>
        </div>
    );
};

export default Logout;