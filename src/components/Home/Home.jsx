import React from 'react';
import { FaLaptopCode, FaUserGraduate, FaChalkboardTeacher, FaCertificate } from 'react-icons/fa';
import heroImage from '../../assets/images/lOGOFOOTER.jpg';

const Home = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section - Updated with red background */}
            <section className="relative bg-gradient-to-t from-blue-600 via-red-500 to-red-600 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                                Transform Your Future with Technology Education
                            </h1>
                            <p className="text-xl text-gray-100">
                                Discover cutting-edge courses and professional training to advance your career in technology.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="/courses"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                                >
                                    Explore Courses
                                </a>
                                <a
                                    href="/contact"
                                    className="border border-white hover:bg-white hover:text-red-600 px-6 py-3 rounded-lg transition-colors"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <img
                                src={heroImage}
                                alt="Technology Education"
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section - Updated with white background */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-red-600">Why Choose Life Computer?</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {/* Feature 1 */}
                        <div className="text-center space-y-4">
                            <div className="inline-block p-4 bg-red-100 rounded-full">
                                <FaLaptopCode className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-red-600">Modern Curriculum</h3>
                            <p className="text-gray-700">
                                Industry-aligned courses updated with the latest technologies
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="text-center space-y-4">
                            <div className="inline-block p-4 bg-red-100 rounded-full">
                                <FaUserGraduate className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-red-600">Expert Instructors</h3>
                            <p className="text-gray-700">
                                Learn from industry professionals with real-world experience
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="text-center space-y-4">
                            <div className="inline-block p-4 bg-red-100 rounded-full">
                                <FaChalkboardTeacher className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-red-600">Hands-on Learning</h3>
                            <p className="text-gray-700">
                                Practical projects and real-world applications
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="text-center space-y-4">
                            <div className="inline-block p-4 bg-red-100 rounded-full">
                                <FaCertificate className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-red-600">Certification</h3>
                            <p className="text-gray-700">
                                Industry-recognized certificates upon completion
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Courses Section - Updated with light red background */}
            <section className="py-16 bg-red-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-red-600">Popular Courses</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Course Cards - Updated with new color scheme */}
                        {[1, 2, 3].map((index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img
                                    src={`/course${index}-image.jpg`}
                                    alt={`Course ${index}`}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6 space-y-4">
                                    <h3 className="text-xl font-semibold text-red-600">
                                        {index === 1 ? "Web Development" : 
                                         index === 2 ? "Data Science" : "Cybersecurity"}
                                    </h3>
                                    <p className="text-gray-700">
                                        {index === 1 ? "Learn modern web development with HTML, CSS, and JavaScript" :
                                         index === 2 ? "Master data analysis, visualization, and machine learning" :
                                         "Learn to protect systems and networks from cyber threats"}
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-blue-600 font-semibold">
                                            ${index === 1 ? "299" : index === 2 ? "399" : "499"}
                                        </span>
                                        <a
                                            href={`/course${index}`}
                                            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-gradient-to-r from-red-600 to-blue-600 text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">What Our Students Have To Say</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                                <img
                                    src="/student1.jpg"
                                    alt="Student 1"
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h4 className="font-semibold">John Doe</h4>
                                    <p className="text-sm text-gray-300">Web Development Graduate</p>
                                </div>
                            </div>
                            <p className="text-gray-100">
                                "The courses at Life Computer transformed my career. The hands-on learning approach and expert instructors made all the difference."
                            </p>
                            <div className="flex text-yellow-400 mt-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                ))}
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                                <img
                                    src="/student2.jpg"
                                    alt="Student 2"
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h4 className="font-semibold">Jane Smith</h4>
                                    <p className="text-sm text-gray-300">Data Science Student</p>
                                </div>
                            </div>
                            <p className="text-gray-100">
                                "The practical approach to learning data science has been incredible. I'm now confident in handling real-world data challenges."
                            </p>
                            <div className="flex text-yellow-400 mt-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                ))}
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                                <img
                                    src="/student3.jpg"
                                    alt="Student 3"
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h4 className="font-semibold">Mike Johnson</h4>
                                    <p className="text-sm text-gray-300">Cybersecurity Expert</p>
                                </div>
                            </div>
                            <p className="text-gray-100">
                                "The cybersecurity program provided me with the skills I needed to advance in my career. The instructors are top-notch!"
                            </p>
                            <div className="flex text-yellow-400 mt-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Filter Section - New Addition */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-red-600">Our Courses</h2>
                    
                    {/* Course Filter Tabs */}
                    <div className="flex justify-center space-x-4 mb-8">
                        <button className="px-6 py-2 rounded-full bg-red-600 text-white hover:bg-red-700">
                            All Courses
                        </button>
                        <button className="px-6 py-2 rounded-full border border-red-600 text-red-600 hover:bg-red-50">
                            Recommended
                        </button>
                        <button className="px-6 py-2 rounded-full border border-red-600 text-red-600 hover:bg-red-50">
                            Exclusive
                        </button>
                    </div>

                    {/* Course Grid - Updated with more courses */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Similar course cards as before, but with more variety */}
                    </div>
                </div>
            </section>

            {/* Multiple Facebook Videos Section - Updated */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-red-600">Success Stories</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Video 1 */}
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                src="https://www.facebook.com/plugins/video.php?href=FACEBOOK_VIDEO_URL_1"
                                className="w-full h-[300px] rounded-lg shadow-lg"
                                style={{ border: 'none', overflow: 'hidden' }}
                                scrolling="no"
                                frameBorder="0"
                                allowFullScreen={true}
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            ></iframe>
                        </div>
                        
                        {/* Video 2 */}
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                src="https://www.facebook.com/plugins/video.php?href=FACEBOOK_VIDEO_URL_2"
                                className="w-full h-[300px] rounded-lg shadow-lg"
                                style={{ border: 'none', overflow: 'hidden' }}
                                scrolling="no"
                                frameBorder="0"
                                allowFullScreen={true}
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            ></iframe>
                        </div>
                        
                        {/* Video 3 */}
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                src="https://www.facebook.com/plugins/video.php?href=FACEBOOK_VIDEO_URL_3"
                                className="w-full h-[300px] rounded-lg shadow-lg"
                                style={{ border: 'none', overflow: 'hidden' }}
                                scrolling="no"
                                frameBorder="0"
                                allowFullScreen={true}
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            ></iframe>
                        </div>
                        
                        {/* Video 4 */}
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                src="https://www.facebook.com/plugins/video.php?href=FACEBOOK_VIDEO_URL_4"
                                className="w-full h-[300px] rounded-lg shadow-lg"
                                style={{ border: 'none', overflow: 'hidden' }}
                                scrolling="no"
                                frameBorder="0"
                                allowFullScreen={true}
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section - Updated with blue background */}
            <section className="bg-blue-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
                    <p className="text-xl mb-8">
                        Join thousands of students who have transformed their careers with us.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                    >
                        Get Started Today
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;
