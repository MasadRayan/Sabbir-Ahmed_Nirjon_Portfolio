import Image from 'next/image';
import React from 'react';

const Highlights = () => {
    return (
        <div className='mb-100'>
            <div className="flex items-center gap-4 mx-5 md:max-w-[1300px] md:mx-auto my-10">
                <hr className="flex-1 border-[#6B7770] border-2" />
                <div className="text-4xl font-semibold text-[#6B7770]">Highlights</div>
                <hr className="flex-1 border-[#6B7770] border-2" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:max-w-[1300px] lg:mx-auto gap-15 md:gap-5 mx-5 my-10 ">
                {/* card1 */}
                <div className='flex flex-col justify-center items-center gap-8'>
                    {/* image */}
                    <div className='flex flex-col justify-center items-center'>
                        <Image
                            src="/home/1.png"
                            alt="hapcompass"
                            width={200}
                            height={200}
                            className="w-full h-full object-cover mb-4"
                        />
                        <div className='text-2xl font-semibold text-[#6B7770]'>HAPCOMPASS</div>
                    </div>
                    {/* description */}
                    <div>
                        <p className='text-[#6B7770] leading-8 max-w-10/12 mx-auto text-center'>
                            HapCompass is a state-of-the-art haplotype assembler presented at ISMB 2013 and published in Bioinformatics and the Journal of Computational Biology. It is extremely accurate and efficient and the only haplotype assembly algorithm capable of polyploid haplotype assembly.
                        </p>
                    </div>
                </div>
                {/* card 2 */}
                <div className='flex flex-col justify-center items-center gap-8'>
                    {/* image */}
                    <div className='flex flex-col justify-center items-center'>
                        <Image
                            src="/home/2.png"
                            alt="Biisq"
                            width={200}
                            height={200}
                            className="w-full h-full object-cover mb-4"
                        />
                        <div className='text-2xl font-semibold text-[#6B7770]'>BIISQ</div>
                    </div>
                    {/* description */}
                    <div>
                        <p className='text-[#6B7770] leading-8 max-w-10/12 mx-auto text-center'>
                            BIISQ is a Bayesian nonparametric model for isoform discovery and individual specific quantification from short-read RNA-seq data. BIISQ does not require isoform reference sequences but instead estimates an isoform catalog shared across samples.
                        </p>
                    </div>
                </div>
                {/* card 3 */}
                <div className='flex flex-col justify-center items-center gap-8'>
                    {/* image */}
                    <div className='flex flex-col justify-center items-center'>
                        <Image
                            src="/home/3.png"
                            alt="cse5825"
                            width={200}
                            height={200}
                            className="w-full h-full object-cover mb-4"
                        />
                        <div className='text-2xl font-semibold text-[#6B7770]'>CSE5825 BAYESIAN ML</div>
                    </div>
                    {/* description */}
                    <div>
                        <p className='text-[#6B7770] leading-8 max-w-10/12 mx-auto text-center'>
                            In Bayesian Machine Learning, we cover the three fundamental components of Bayesian Machine Learning: probabilistic modeling, inference algorithms, and model checking.
                        </p>
                    </div>
                </div>
                {/* card 4 */}
                <div className='flex flex-col justify-center items-center gap-8'>
                    {/* image */}
                    <div className='flex flex-col justify-center items-center'>
                        <Image
                            src="/home/4.png"
                            alt="explore"
                            width={200}
                            height={200}
                            className="w-full h-full object-cover mb-4"
                        />
                        <div className='text-2xl font-semibold text-[#6B7770]'>EXPLORE ENGINEERING</div>
                    </div>
                    {/* description */}
                    <div>
                        <p className='text-[#6B7770] leading-8 max-w-10/12 mx-auto text-center'>
                            Explore Engineering is a one-week STEM summer camp for high schoolers where they are introduced to engineering. Students who choose the CSE track are introduced to Programming, Data Science, Machine Learning and Artificial Intelligence.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Highlights;