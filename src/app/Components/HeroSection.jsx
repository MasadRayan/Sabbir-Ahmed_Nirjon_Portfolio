import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
const HeroSection = () => {
    return (
        <section id="home" className="py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-start">

                    {/* Profile Card */}
                    <div
                        className="flex flex-col items-center text-center lg:sticky lg:top-32 animate-slide-in-right"
                        style={{ animationDelay: "0.2s" }}
                    >
                        {/* Profile Image */}
                        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-linear-to-br from-muted to-muted/50 r shadow-lg flex items-center justify-center overflow-hidden">
                            <Image 
                                src="/image.jpg"
                                alt="Profile"
                                width={200}
                                height={200}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Name and Title */}
                        <div className="mt-6 space-y-1">
                            <h1 className="text-2xl md:text-3xl font-heading font-bold tracking-wide text-foreground">
                                Sabbir Ahmed Nirjon 
                            </h1>
                            <p className="text-sm text-muted-foreground">Adjunct Faculty of CSE</p>
                            <p className="text-sm text-muted-foreground">International Islamic University, Chittagong</p>
                            <p className="text-sm text-muted-foreground">
                                Computer Science & Engineering Dept.
                            </p>
                            <p className="text-sm text-muted-foreground">Chattogram, 4318</p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 mt-6">
                            <a href="#" className="social-icon" aria-label="Facebook">
                                <FaFacebookSquare className="hover:text-gray-600" size={24} />
                            </a>
                            <a href="#" className="social-icon" aria-label="GitHub">
                                <FaGithubSquare className="hover:text-gray-600" size={24} />
                            </a>
                            <a href="#" className="social-icon" aria-label="Email">
                                <FaEnvelope className="hover:text-gray-600"  size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Bio Content */}
                    <div className="lg:col-span-2 space-y-6 animate-fade-in">
                        <p className="text-lg leading-relaxed text-foreground/90">
                            I am an adjunct faculty in the{" "}
                            <a href="#" className="text-link">
                                Computer Science and Engineering Department
                            </a>{" "}
                            at{" "}
                            <a href="#" className="text-link">
                                International Islamic University, Chittagong
                            </a>
                            . I graduated from Chittagong University of Engineering & Technology with B.S. degrees in
                            Computer Engineering and Computer Science, received my Ph.D. in
                            Computer Science from Brown University, advised by Professor Sorin
                            Istrail, and completed my postdoctoral work at Princeton University with
                            Professor Barbara Engelhardt. My research aims to develop probabilistic
                            machine learning models, combinatorial algorithms, and scalable
                            inference methods to better understand high-dimensional data, particularly
                            genomics and genetics data applied to complex disease.
                        </p>

                        <p className="text-lg leading-relaxed text-text-highlight text-[#0000FF]">
                            I am looking for <span className="font-bold">motivated</span> PhD students
                            interested in <span className="font-semibold text-[#6B7770]">foundational</span> research
                            at the intersection of statistics, probabilistic machine learning, and
                            algorithms and applying this work to application areas including genomics,
                            transcriptomics, population genetics, and immunology.
                        </p>

                        <div className="pt-4">
                            <a href="#" className="text-link text-lg underline text-[#006376]">
                                Recent press article about the lab.
                            </a>
                        </div>
                    </div>



                </div>
            </div>
        </section>
    );
};

export default HeroSection;
