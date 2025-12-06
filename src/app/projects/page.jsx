import React from 'react';

const ProjectPage = () => {
    return (
        <div className="max-w-[1300px] mx-auto px-4 md:px-0">

            {/* SIDEBAR — visible only on md+ */}
            <aside className="hidden md:flex flex-col justify-start gap-8 w-64 fixed mt-10">
                <h1 className="text-[#6B7770] text-3xl font-bold uppercase mb-5">
                    Software
                </h1>
                <div>
                    <p>
                        <a href="#biisq" className="text-xl text-[#6B7770] font-bold uppercase pb-2 block">
                            BIISQ
                        </a>
                    </p>
                    
                </div>
                <hr className='w-10/12 border border-[#6B7770]' />
                <div>
                    <p>
                        <a href="#hapcompass" className="text-xl text-[#6B7770] font-bold uppercase pb-2 block">
                            HapCompass
                        </a>
                    </p>
                </div>
                <hr className='w-10/12 border border-[#6B7770]' />
                <div>
                    <p>
                        <a href="#tractatus" className="text-xl text-[#6B7770] font-bold uppercase pb-2 block">
                            Tractatus
                        </a>
                    </p>
                </div>
                <hr className='w-10/12 border border-[#6B7770]' />
                <div>
                    <p>
                        <a href="#delishus" className="text-xl text-[#6B7770] font-bold uppercase pb-2 block">
                            DELISHUS
                        </a>
                    </p>
                </div>
                <hr className='w-10/12 border border-[#6B7770]' />
                <div>
                    <p>
                        <a href="#cyrene" className="text-xl text-[#6B7770] font-bold uppercase pb-2 block">
                            CYRENE
                        </a>
                    </p>
                    
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="md:ml-80 md:w-[calc(100%-288px)]">
                <div className="md:pt-10 text-[#6B7770]">
                    <h1 className='text-3xl md:text-5xl uppercase font-bold mb-10'>
                        Software
                    </h1>
                    <div>
                        <p className='text-lg mb-15'>
                            We are in the process of developing the group GitHub. For now, many of these links refer to <span className='underline text-[#006376]'><a href="https://istrail-lab.github.io/sorin-istrail/" target='_blank'>Istrail Lab</a></span> or <span className='underline text-[#006376]'><a href="">Engelhardt</a></span> Lab resources.
                        </p>
                        <ul className='list-disc pl-4 space-y-3 text-lg'>
                            <li>Bayesian nonparametric discovery of Isoforms and Individual Specific Quantification with BIISQ. Version 1.0.0. <span className='underline text-[#006376]'><a href="https://github.com/bee-hive/BIISQ" target='_blank'>[code]</a></span> </li>
                            <li>HapCompass: fast cycle basis algorithms for accurate diploid and  <span className='underline text-[#006376]'><a href="">[code]</a></span> </li>
                            <li>Tractatus: an exact and subquadratic algorithm for inferring identity-by-descent multi-shared haplotype tracts. Version 0.0.1. <span className='underline text-[#006376]'><a href="">[code]</a></span> </li>
                            <li>A quantitative reference transcriptome for Nematostella vectensis earlyembryonic development: a pipeline for de novo assembly in emergingmodel systems. Version 1.0.0.  <span className='underline text-[#006376]'><a href="https://link.springer.com/article/10.1186/2041-9139-4-16#App1" target='_blank'>[code]</a></span> </li>
                            <li>DELISHUS: an e cient and exact algorithm for genome-wide detection of deletion polymorphism in autism. Version 0.1.0.  <span className='underline text-[#006376]'><a href="">[code]</a></span> </li>
                            <li>CYRENE cis-Regulatory Genome Browser. Version 1.0.0.  <span className='underline text-[#006376]'><a href="">[code]</a></span> </li>
                        </ul>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default ProjectPage;