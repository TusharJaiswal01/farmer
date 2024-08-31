// // src/components/HomePage.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const HomePage = () => {
//     return (
//         <main className="bg-gray-100">
//             {/* Hero Section */}

//             <section className="relative text-white" style={{ height: '80vh' }}>
//                 <video
//                     autoPlay
//                     loop
//                     muted
//                     className="absolute inset-0 w-full h-full object-cover"
//                 >
//                     <source
//                         src="https://videos.pexels.com/video-files/2848072/2848072-sd_640_360_30fps.mp4"
//                         type="video/mp4"
//                     />

//                 </video>
//                 <div className="absolute inset-0 bg-black opacity-50"></div>
//                 <div className="relative container mx-auto px-6 py-32 text-center">
//                     <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to the Farmer Community</h1>
//                     <p className="text-lg mb-6">Connect with fellow farmers, share knowledge, and stay updated with the latest trends in agriculture.</p>
//                     <a href="#features" className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">Get Started</a>
//                 </div>
//             </section>

//             {/* Featured Content Section */}
//             <section id="features" className="py-10">
//                 <div className="container mx-auto px-6 ">
//                     <h2 className="text-3xl font-bold text-center mb-12">Explore Our Features</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {/* Feature 1 */}
//                         <div className="bg-green-600 text-white p-6 rounded-lg shadow-lg">
//                             <h3 className="text-3xl font-semibold mb-4">Discussion Forums</h3>
//                             <p className="text-white mb-4">Engage with other farmers, ask questions, and share your knowledge in our vibrant community forums.</p>
//                             <Link to="/discussion-forum" className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">Get Started</Link>
//                         </div>
//                         {/* Feature 2 */}
//                         <div className="bg-green-600 p-6 rounded-lg shadow-lg text-white">
//                             <h3 className="text-3xl font-semibold mb-4">Crop Disease Prevention</h3>
//                             <p className="text-white mb-4">Upload photos of your plants to get insights and advice on preventing and treating crop diseases.</p>
//                             <a href="#features" className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">Get Started</a>
//                         </div>
//                         {/* Feature 3 */}
//                         <div className="bg-green-600 p-6 rounded-lg shadow-lg text-white">
//                             <h3 className="font-semibold mb-4 text-3xl">Community Events</h3>
//                             <p className="text-white mb-4">Stay informed about upcoming events, workshops, and meet-ups in your area.</p>
//                             <Link
//                                 to="/community-events"
//                                 className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
//                             >
//                                 Get Started
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </section>


//             {/* Testimonials Section */}
//             <section className="bg-gray-200 py-16">
//                 <div className="container mx-auto px-6">
//                     <h2 className="text-3xl font-bold text-center mb-12">What Our Members Say</h2>
//                     <div className="flex flex-wrap justify-center">
//                         {/* Testimonial 1 */}
//                         <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-4 mb-6">
//                             <p className="text-gray-700 mb-4">"This community has been a game-changer for my farming practices. I've learned so much from other farmers and the resources available here."</p>
//                             <p className="font-semibold">Ms Dhoni</p>
//                             <p className="text-gray-500">Farmer</p>
//                         </div>
//                         {/* Testimonial 2 */}
//                         <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-4 mb-6">
//                             <p className="text-gray-700 mb-4">"The crop disease prevention tool is incredibly useful. It has helped me identify and treat issues before they become serious problems."</p>
//                             <p className="font-semibold">Ms Dhoni</p>
//                             <p className="text-gray-500">Agronomist</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </main>
//     );
// }

// export default HomePage;
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <main className="bg-gray-100">
            {/* Hero Section */}
            <section className="relative text-white" style={{ height: '50vh' }}>
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source
                        src="https://videos.pexels.com/video-files/2848072/2848072-sd_640_360_30fps.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative container mx-auto px-6 py-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to the Farmer Community</h1>
                    <p className="text-lg mb-6">Connect with fellow farmers, share knowledge, and stay updated with the latest trends in agriculture.</p>
                    <a href="#features" className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">Get Started</a>
                </div>
            </section>

            {/* Featured Content Section */}
            <section id="features" className="py-5">
                <div className="container mx-auto px-6 ">
                    <h2 className="text-3xl font-bold text-center mb-12">Explore Our Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-green-600 text-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-3xl font-semibold mb-4">Discussion Forums</h3>
                            <p className="text-white mb-4">Engage with other farmers, ask questions, and share your knowledge in our vibrant community forums.</p>
                            <Link to="/discussion-forum" className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">Get Started</Link>
                        </div>
                        {/* Feature 2 */}
                        <div className="bg-green-600 p-6 rounded-lg shadow-lg text-white">
                            <h3 className="text-3xl font-semibold mb-4">Sikayat Kendra</h3>
                            <p className="text-white mb-4">A dedicated platform for farmers to file complaints and seek resolution for agricultural issues swiftly and effectively</p>
                            <Link
                                to="/sikayat-kendra"
                                className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
                            >
                                Get Started
                            </Link>
                        </div>
                        {/* Feature 3 */}
                        <div className="bg-green-600 p-6 rounded-lg shadow-lg text-white">
                            <h3 className="font-semibold mb-4 text-3xl">Community Events</h3>
                            <p className="text-white mb-4">Stay informed about upcoming events, workshops, and meet-ups in your area.</p>
                            <Link
                                to="/community-events"
                                className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-gray-200 py-10">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">What Our Members Say</h2>
                    <div className="flex flex-wrap justify-center">
                        {/* Testimonial 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-4 mb-6">
                            <p className="text-gray-700 mb-4">"This community has been a game-changer for my farming practices. I've learned so much from other farmers and the resources available here."</p>
                            <p className="font-semibold">Ms Dhoni</p>
                            <p className="text-gray-500">Farmer</p>
                        </div>
                        {/* Testimonial 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-4 mb-6">
                            <p className="text-gray-700 mb-4">"The crop disease prevention tool is incredibly useful. It has helped me identify and treat issues before they become serious problems."</p>
                            <p className="font-semibold">Ms Dhoni</p>
                            <p className="text-gray-500">Agronomist</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default HomePage;
