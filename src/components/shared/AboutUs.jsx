export default function AboutUs() {
    return (
        <div className="min-h-screen bg-[#0f172a] text-slate-200">
            <main className="max-w-6xl mx-auto px-6 py-16">

                {/* Hero Section */}
                <section className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                        Our Mission
                    </h1>
                    <div className="bg-[#1e293b] border border-slate-700/60 rounded-xl p-8 shadow-xl max-w-3xl mx-auto my-8 text-center">
                        
                        <h2 className="text-2xl font-bold text-white mt-4 mb-3">
                            Empowering Readers Through Shared Knowledge
                        </h2>
                        <p className="text-slate-300 leading-relaxed">
                            We are on a mission to make books accessible to everyone by creating a seamless,
                            community-driven borrowing platform. By connecting passionate readers and encouraging
                            book sharing, we ensure that knowledge keeps moving and no book sits unread on a shelf.
                        </p>
                    </div>
                </section>

                {/* Info Cards Grid - Styled like your screenshot cards */}
                <section className="grid md:grid-cols-3 gap-6 mb-16">
                    {/* Card 1 */}
                    <div
                        className="bg-[#1e293b] border border-slate-700/60 rounded-xl p-6 shadow-xl flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <span
                                    className="bg-orange-500/20 text-orange-400 text-xs font-semibold px-2.5 py-1 rounded border border-orange-500/40">
                                    Mission
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Easy Access to Books</h3>
                            <p className="text-slate-400 text-sm">
                                We believe knowledge should be accessible to everyone. Browse our library and borrow books
                                without hassle.
                            </p>
                        </div>
                        <div
                            className="mt-6 pt-4 border-t border-slate-700/50 flex justify-between items-center text-xs text-slate-400">
                            <span>Unlimited Access</span>
                            <span className="text-blue-400 font-semibold">100% Free</span>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div
                        className="bg-[#1e293b] border border-slate-700/60 rounded-xl p-6 shadow-xl flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <span
                                    className="bg-blue-500/20 text-blue-400 text-xs font-semibold px-2.5 py-1 rounded border border-blue-500/40">
                                    Community
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Share & Connect</h3>
                            <p className="text-slate-400 text-sm">
                                Connect with other readers, exchange thoughts, and build a vibrant community of book
                                enthusiasts.
                            </p>
                        </div>
                        <div
                            className="mt-6 pt-4 border-t border-slate-700/50 flex justify-between items-center text-xs text-slate-400">
                            <span>Active Readers</span>
                            <span className="text-blue-400 font-semibold">Growing Fast</span>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div
                        className="bg-[#1e293b] border border-slate-700/60 rounded-xl p-6 shadow-xl flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <span
                                    className="bg-emerald-500/20 text-emerald-400 text-xs font-semibold px-2.5 py-1 rounded border border-emerald-500/40">
                                    Variety
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Tech to Stories</h3>
                            <p className="text-slate-400 text-sm">
                                Whether you are looking for tech documentation, personal growth, or fiction, we have it all.
                            </p>
                        </div>
                        <div
                            className="mt-6 pt-4 border-t border-slate-700/50 flex justify-between items-center text-xs text-slate-400">
                            <span>Multiple Categories</span>
                            <span className="text-blue-400 font-semibold">Updated Daily</span>
                        </div>
                    </div>
                </section>

                {/* Call To Action Box */}
                <section
                    className="bg-gradient-to-r from-blue-900/40 to-slate-800 border border-blue-500/30 rounded-2xl p-8 text-center shadow-2xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        Ready to Start Reading?
                    </h2>
                    <p className="text-slate-300 mb-6 max-w-lg mx-auto">
                        Explore our collection and find your next favorite book today.
                    </p>
                    <a href="/all-books"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg transition-colors duration-200">
                        Browse All Books
                    </a>
                </section>

            </main>
        </div>
    );
}