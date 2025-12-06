import Image from 'next/image';
import React from 'react';

const TeachingPage = () => {
    return (
        <div className="max-w-[1300px] mx-auto px-4 md:px-0">

            {/* SIDEBAR — visible only on md+ */}
            <aside className="hidden md:flex flex-col justify-start gap-8 w-64 fixed mt-10">
                <h1 className="text-[#6B7770] text-3xl font-bold uppercase mb-5">
                    Courses
                </h1>
                <div>
                    <p>
                        <a href="#machine" className="text-xl text-[#6B7770] font-bold uppercase pb-2 block">
                            Bayesian Machine Learning                                </a>
                    </p>
                </div>
                <hr className='w-10/12 border border-[#6B7770]' />
                <div>
                    <p>
                        <a href="#complexity" className="text-xl text-[#6B7770] font-bold uppercase pb-2 block">
                            Algorithms and Complexity
                        </a>
                    </p>
                </div>
                <hr className='w-10/12 border border-[#6B7770]' />
                <div>
                    <p>
                        <a href="#archive" className="text-xl text-[#6B7770] font-bold uppercase pb-2 block">
                            Archive
                        </a>
                    </p>
                    <div className='text-lg text-[#A1CD9B] leading-relaxed'>
                        <p>
                            <a href="#ml" className="block">
                                CSCI1820 (at Brown)
                            </a>
                        </p>
                        <p>
                            <a href="#other" className="block">
                                CSCI2820 (at Brown)
                            </a>
                        </p>
                    </div>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="md:ml-80 md:w-[calc(100%-288px)]">
                <div className="md:pt-10 text-[#6B7770]">
                    <h1  id='machine'  className='text-3xl md:text-5xl uppercase font-bold mb-10 scroll-mt-24'>
                        Bayesian Machine Learning
                    </h1>
                    {/* machine */}
                    <div className='mb-10 '>
                        <div className='flex flex-col md:flex-row justify-center gap-8 items-start'>
                            <div>
                                <p className='text-lg'>
                                    The probabilistic (or Bayesian) machine learning paradigm provides a unifying methodology for reasoning about uncertainty in modeling complex data. In this class, we will cover the three fundamental components of this paradigm: probabilistic modeling, inference algorithms, and model checking. <span className='text-[#006376] underline'><a href="https://www.derekaguiar.com/resources/bayesian_ml_syllabus.pdf">See the syllabus.</a></span>
                                </p>
                                <p className='text-lg mt-8'>
                                    We will reinforce class lectures by developing a research-quality project (ideally connected to your research) on real data that implements this probabilistic framework from problem specification to model checking. To realize this, you should be comfortable with (or willing to learn):
                                </p>
                            </div>
                            <Image
                                src="/teaching/1.png"
                                alt="Bayes"
                                width={500}
                                height={500}
                                className="w-full h-full object-cover mb-4 border-2 border-[#006376] rounded-lg"
                            />
                        </div>
                        <ul className='list-disc pl-4 space-y-2 mt-10'>
                            <li>basic probability, statistics, and calculus</li>
                            <li>writing software to analyze large data and some statistical supportive programming language like Python</li>
                            <li>scientific writing</li>
                        </ul>
                        <Image
                            src="/teaching/2.png"
                            alt="Bayes"
                            width={500}
                            height={500}
                            className="w-full h-full object-cover mb-4 "
                        />
                    </div>
                    {/* complexity */}
                    <div id='complexity' className='mb-10 scroll-mt-24'>
                        <h2 className='text-3xl md:text-5xl font-semibold uppercase mb-10'>Algorithms and Complexity</h2>
                        <div className='flex flex-col md:flex-row justify-center gap-8 items-start'>
                            <p className='text-lg leading-relaxed'>
                                Algorithmic thinking is a powerful way to view the field of computer science and algorithms themselves are at the core of scientific endeavours across many disciplines. For example, careful algorithmic design and implementation is what enabled researchers at Celera Genomics to assemble tens of millions of DNA reads into the sequence of the human genome. This course will cover algorithmic design and analysis, advanced data structures, and computational complexity. Specific topics include divide-and-conquer, dynamic programming, greedy, and graphical algorithmic design techniques; seminal algorithms, e.g., sorting, hashing, network flow; advanced data structures, e.g., search trees, heaps; NP-completeness and intractability; and, time permitting, more advanced topics. <span className='text-[#006376] underline'><a href="https://www.derekaguiar.com/resources/Spring19.3500.1.syllabus.pdf">See the syllabus</a></span>.
                            </p>
                            <Image 
                                src="/teaching/3.png"
                                alt="Complexity"
                                width={500}
                                height={500}
                                className="w-full h-full object-cover mb-4 border-2 border-[#006376] rounded-lg"
                            />    
                        </div>
                        <div className='flex flex-col md:flex-row justify-center gap-8 items-start my-10'>
                            <p className='text-lg leading-relaxed'>
                                The prerequisites for this class include CSE 2050 or 2100, and 2500. CSE 3500 is only open to students in the School of Engineering, Cognitive Science majors, and declared Computer Science minors.
                            </p>
                            <Image
                                src="/teaching/4.png"
                                alt="Complexity"
                                width={300}
                                height={300}
                                className="w-full h-full object-cover mb-4 border-2 border-[#006376] rounded-lg"
                            />    
                        </div>
                    </div>

                </div>
            </main>

        </div>
    );
};

export default TeachingPage;