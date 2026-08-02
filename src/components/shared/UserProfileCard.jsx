import { auth } from '@/app/lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';

export default async function UserProfileCard() {
    // Fallback demo data if no props are passed


    const session = await auth.api.getSession({
        headers: await headers()
    })
    // console.log("session data ",session.user);
    const userData = () => {
        if (session) {
            const data = session.user;
            return data;
        }

    }

    const data = userData();
    const joinDate = data?.createdAt
        ? new Date(data.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
        : 'N/A';
    console.log(joinDate);

    return (
        <div className="max-w-md mx-auto bg-[#1e293b] border border-slate-700/60 rounded-2xl p-6 shadow-2xl text-slate-200">
            {/* Header Profile Section */}
            <div className="flex flex-col items-center text-center">
                {/* Profile Image with Ring Border */}
                <div className="relative mb-4">
                    <img
                        src={data?.image}
                        alt={data?.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-blue-600 shadow-lg"
                    />
                    <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-[#1e293b] rounded-full" title="Active"></span>
                </div>

                {/* User Info */}
                <h2 className="text-2xl font-bold text-white">{data?.name}</h2>
                <p className="text-slate-400 text-sm mb-2">{data?.email}</p>

                {/* Role Badge */}
                <span className="bg-blue-500/20 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full border border-blue-500/40 uppercase tracking-wide">
                    Member
                </span>
            </div>

            {/* Divider */}
            <hr className="my-6 border-slate-700/60" />

            {/* Quick Stats Grid */}
            {/* <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-[#0f172a] p-3 rounded-xl border border-slate-800">
                    <p className="text-2xl font-bold text-white">{userInfo.booksBorrowed}</p>
                    <p className="text-xs text-slate-400">Total Borrowed</p>
                </div>
                <div className="bg-[#0f172a] p-3 rounded-xl border border-slate-800">
                    <p className="text-2xl font-bold text-blue-400">{userInfo.currentlyReading}</p>
                    <p className="text-xs text-slate-400">Currently Reading</p>
                </div>
            </div> */}

            {/* Action Buttons */}
            <div className="mt-6 space-y-2">
                <Link href="/user-profile/update-user">
                    <button className=" w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-xl transition-colors duration-200 text-sm">
                        Edit Profile
                    </button>
                </Link>
                {/* <button className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium py-2 rounded-xl transition-colors duration-200 text-sm border border-slate-700">
                    Borrowed History
                </button> */}
            </div>

            {/* Member Since Footnote */}
            <p className="text-center text-xs text-slate-500 mt-4">
                Member since {joinDate}
            </p>
        </div>
    );
}