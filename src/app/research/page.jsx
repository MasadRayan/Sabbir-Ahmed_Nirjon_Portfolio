import Image from 'next/image';
import React from 'react';

const ResearchPage = () => {
    return (
        <div className="max-w-[1300px] mx-auto px-4 md:px-0">

            {/* SIDEBAR — visible only on md+ */}
            <aside className="hidden md:flex flex-col justify-start gap-6 w-64 fixed mt-10">
                <h1 className="text-[#6B7770] text-3xl font-bold uppercase mb-5">
                    Projects
                </h1>
                <div>
                    <p>
                        <a href="#probabilistic-modeling" className="text-xl text-[#6B7770] font-bold uppercase pb-2 block">
                            Probabilistic Modelling
                        </a>
                    </p>
                    <div className='text-lg text-[#A1CD9B] leading-relaxed'>
                        <p>
                            <a href="#probabilistic-modeling" className=" block">
                                Isoform Admixture Model
                            </a>
                        </p>
                        <p>
                            <a href="#haplotype" className=" block">
                                Haplotype Cluster Graphs
                            </a>
                        </p>
                    </div>
                </div>
                <hr className='w-10/12 border border-[#6B7770]' />
                <div>
                    <p>
                        <a href="#genomics-algorithms" className="text-xl text-[#6B7770] font-bold uppercase pb-2 block">
                            Genomics Algorithms
                        </a>
                    </p>
                    <div className='text-lg text-[#A1CD9B] leading-relaxed'>
                        <p>
                            <a href="#genomics-algorithms" className=" block ">
                                Haplotype Assembly <br />
                            </a>
                        </p>
                        <p>
                            <a href="#identity" className=" block ">
                                Identity-by-descent <br />
                            </a>
                        </p>
                        <p>
                            <a href="#variant" className=" block ">
                                Variant Calling <br />
                            </a>
                        </p>
                        <p>
                            <a href="#phasing" className=" block ">
                                Haplotype Phasing <br />
                            </a>
                        </p>
                    </div>
                </div>
                <hr className='w-10/12 border border-[#6B7770]' />
                <div>
                    <p>
                        <a href="#miscellaneous" className="text-xl text-[#6B7770] font-bold uppercase pb-2 block">
                            Miscellaneous
                        </a>
                    </p>
                    <div className='text-lg text-[#A1CD9B] leading-relaxed'>
                        <p>
                            <a href="#ml" className="block">
                                ML and the Law
                            </a>
                        </p>
                        <p>
                            <a href="#other" className="block">
                                Other Work
                            </a>
                        </p>
                    </div>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="md:ml-80 md:w-[calc(100%-288px)]">
                <div className="md:pt-10 text-[#6B7770]">
                    <h1 className='text-3xl md:text-5xl uppercase font-bold mb-10'>
                        Research Projects
                    </h1>
                    {/* Probabilistic Modelling */}
                    <div id='probabilistic-modeling' className='mb-10 scroll-mt-24'>
                        <h2 className='text-xl md:text-2xl font-semibold uppercase mb-5'>Isoform Admixture Model</h2>
                        <div className='flex flex-col md:flex-row justify-center gap-8 items-start'>
                            <div>
                                <p className='text-lg'>
                                    Most human protein-coding genes can be transcribed into multiple distinct mRNA isoforms. These alternative splicing patterns encourage molecular diversity, and dysregulation of isoform expression plays an important role in disease. But, isoforms are difficult to characterize from short-read RNA-seq data because they share identical subsequences and occur in different frequencies across tissues and samples. We developed BIISQ, a Bayesian nonparametric model for Isoform discovery and Individual Specific Quantification from short-read RNA-seq data.
                                </p>
                                <p className='mt-10'>
                                    <span className='text-lg font-bold'>Highlights</span>
                                </p>
                                <ul className='list-disc pl-4 text-[#006376] underline space-y-2'>
                                    <li><a href="">[manuscript] Bayesian nonparametric discovery of isoforms and individual specific quantification</a></li>
                                    <li><a href="">Software</a></li>
                                </ul>
                            </div>
                            <Image
                                src="/research/1.png"
                                alt="hapcompass"
                                width={500}
                                height={500}
                                className="w-full h-full object-cover mb-4  border-2 border-[#006376] rounded-lg"
                            />
                        </div>
                    </div>
                    {/* Haplotype */}
                    <div id='haplotype' className='mb-10 scroll-mt-24'>
                        <h2 className='text-xl md:text-2xl font-semibold uppercase mt-12 mb-2'>haplotype</h2>
                        <p className='text-lg'>
                            Genetic models cluster genetic sequences by allelic similarity as a proxy for ancestry. These models form the base for population genetics problems, for example, infer demography, resolve haplotype phase, impute missing genotypes, or identify selection. We developed the haplotype cluster graph genetic model that computes graphs where clusters of haplotypes are separated by ancestral recombination and mutations. Updates on the code and manuscript coming soon.
                        </p>
                        <Image
                            src="/research/2.png"
                            alt="hapcompass"
                            width={500}
                            height={1200}
                            className="w-full h-full object-cover my-4 "
                        />
                    </div>
                    {/* genomics-algorithms */}
                    <div id='genomics-algorithms' className='mb-10 scroll-mt-24'>
                        <h2 className='text-xl md:text-2xl font-semibold uppercase mt-12 mb-2'>Haplotype Assembly: HapCompass</h2>
                        <p className='text-lg mb-10'>
                            The genome sequence of a human individual can be modeled as 23 pairs of sequences of four nucleotide bases, A, C, G and T. However, ~99.5% of any two individuals’ genome sequences is shared within a population. The remaining ~0.5% of the nucleotide bases vary within a population. The sequences of these genomic variants with the non-varying DNA removed is referred to as a haplotype. Reference-based genome assembly algorithms produce assemblies where the DNA of homologous chromosomes is mixed. But, sequence reads are derived from a single haploid fragment and thus provide valuable phase information when they contain two or more variants. The haplotype assembly problem aims to compute the haplotype sequences for each chromosome given a set of aligned sequence reads to the genome and variant information. The haplotype phase of variants is inferred from assembling overlapping sequence reads.
                        </p>
                        <div className='flex flex-col md:flex-row gap-5 justify-center items-start'>
                            <p className='text-lg'>
                                Our group developed <strong>HapCompass</strong> an algorithm for haplotype assembly that operates on a graph where variants are nodes and edges are defined by sequence reads and viewed as supporting evidence of co-occuring SNP alleles in a haplotype. Haplotype phasings correspond to spanning trees and each spanning tree uniquely defines a cycle basis. We define new optimization problems, analysis of their theoretical complexity, and a formalization of the polyploid haplotype assembly problem.
                            </p>
                            <Image
                                src="/research/3.png"
                                alt="hapcompass"
                                width={400}
                                height={500}
                                className="w-full h-full object-cover mb-4 border-2 border-[#006376] rounded-lg"
                            />
                        </div>
                        <p className='mt-10'>
                            <span className='text-lg font-bold'>Highlights</span>
                        </p>
                        <ul className='list-disc pl-4 text-[#006376] underline space-y-2'>
                            <li><a href="">[manuscript] HapCompass: A Fast Cycle Basis Algorithm for Accurate Haplotype Assembly of Sequence Data</a></li>
                            <li><a href="">[manuscript] Haplotype assembly in polyploid genomes and identical by descent shared tracts</a></li>
                            <li><a href="">Software</a></li>
                        </ul>
                    </div>
                    {/* identity */}
                    <div id='identity' className='mb-10 scroll-mt-24'>
                        <h2 className='text-xl md:text-2xl font-semibold uppercase mt-12 mb-4'>Identity-by-descent: Tractatus</h2>
                        <div className='flex flex-col md:flex-row gap-5 justify-center items-start'>
                            <p className='text-lg'>
                                Characterizing patters of linkage disequilibrium in a genome-wide population sample is a major challenge in population genomics. It is an important first step to imputing missing data, characterizing relatedness, and inferring recombination or selection. We developed Tractatus, an exact algorithm for computing all IBD haplotype tracts in time linear in the size of the input. Tractatus resolves a long standing open problem, breaking optimally the (worst-case) quadratic time barrier of previous methods often cited as a bottleneck in haplotype analysis of genome-wide association study-sized data.
                            </p>
                            <Image
                                src="/research/4.png"
                                alt="hapcompass"
                                width={400}
                                height={500}
                                className="w-full h-full object-cover mb-4 border-2 border-[#006376] rounded-lg"
                            />
                        </div>
                        <Image
                            src="/research/5.png"
                            alt="hapcompass"
                            width={500}
                            height={1200}
                            className="w-full h-full object-cover my-4 "
                        />
                        <p className='mt-10'>
                            <span className='text-lg font-bold'>Highlights</span>
                        </p>
                        <ul className='list-disc pl-4 text-[#006376] underline space-y-2'>
                            <li><a href="">[manuscript] DELISHUS: an efficient and exact algorithm for genome-wide detection of deletion polymorphism in autism</a></li>
                            <li><a href="">Software</a></li>
                        </ul>
                    </div>
                    {/* variant */}
                    <div id='variant' className='mb-10 scroll-mt-24'>
                        <h2 className='text-xl md:text-2xl font-semibold uppercase mt-12 mb-4'>Variant Calling</h2>
                        <div className='flex flex-col md:flex-row gap-5 justify-center items-start'>
                            <p className='text-lg leading-relaxed'>
                                Our work on variant calling was focused on computing deletions in genotype array data with applications to Autism. We developed a method that implements exact algorithms for inferring regions of hemizygosity containing genomic deletions of all sizes and frequencies in genotype data based on Mendelian inheritance patterns.
                            </p>
                            <Image
                                src="/research/6.png"
                                alt="hapcompass"
                                width={400}
                                height={500}
                                className="w-full h-full object-cover mb-4 border-2 border-[#006376] rounded-lg"
                            />
                        </div>
                        <p className='mt-10'>
                            <span className='text-lg font-bold'>Highlights</span>
                        </p>
                        <ul className='list-disc pl-4 text-[#006376] underline space-y-2'>
                            <li><a href="">[manuscript] DELISHUS: an efficient and exact algorithm for genome-wide detection of deletion polymorphism in autism</a></li>
                            <li><a href="">Software</a></li>
                        </ul>
                    </div>
                    {/* phasing */}
                    <div id='phasing' className='mb-10 scroll-mt-24'>
                        <h2 className='text-xl md:text-2xl font-semibold uppercase mt-12 mb-4'>Haplotype Phasing</h2>
                        <div className='flex flex-col md:flex-row gap-5 justify-center items-start'>
                            <p className='text-lg leading-relaxed'>
                                Genome-wide association studies identify a number of individuals carrying a disease or a trait and comparing these individuals to those that do not or are not known to carry the disease/trait. Both sets of individuals are then genotyped for a large number of genetic variants which are then tested for association to the disease/trait. Current technologies, suitable for large-scale variant screening only yield the genotype information at each SNP site. The actual haplotypes in the typed region can only be obtained at a considerably high experimental cost or via haplotype phasing.
                            </p>
                            <Image
                                src="/research/7.png"
                                alt="hapcompass"
                                width={400}
                                height={500}
                                className="w-full h-full object-cover mb-4 border-2 border-[#006376] rounded-lg"
                            />
                        </div>
                        <p className='mt-10'>
                            <span className='text-lg font-bold'>Highlights</span>
                        </p>
                        <ul className='list-disc pl-4 text-[#006376] underline space-y-2'>
                            <li><a href="">[author manuscript] The Clark Phase-able Sample Size Problem Long-range Phasingand Loss of Heterozygosity in GWAS</a></li>
                        </ul>
                    </div>
                    {/* miscellaneous */}
                    <div id='miscellaneous' className='mb-10 scroll-mt-24'>
                        <h2 className='text-xl md:text-2xl font-semibold uppercase mt-12 mb-4'>Miscellaneous</h2>
                        <p className='text-lg leading-relaxed'>
                            Our group actively collaborates with professionals in many disciplines to solve problems in many areas outside of computer science, including life sciences, law, and sociology.
                        </p>
                    </div>
                    {/* ml */}
                    <div id='ml' className='mb-10 scroll-mt-24'>
                        <h2 className='text-xl md:text-2xl font-semibold uppercase mt-12 mb-4'>ML and the Law</h2>
                        <p className='text-lg leading-relaxed'>
                            Our group is working on several problems at the intersection of Machine Learning and law. We are particularly interested in modelling court cases and interpretability in legal settings in Connecticut.
                        </p>
                    </div>
                    {/* other */}
                    <div id='other' className='mb-10 scroll-mt-24'>
                        <h2 className='text-xl md:text-2xl font-semibold uppercase mt-12 mb-4'>Other Work</h2>
                        <ul className='list-disc pl-4 space-y-2'>
                            <li><a href="" className='underline text-[#006376] '>[author manuscript] The Clark Phase-able Sample Size Problem Long-range Phasingand Loss of Heterozygosity in GWAS</a></li>
                            <li><a href="">[contact for details] Immunogenomics - alternative interpretations of the genetic code</a></li>
                            <li><a href="">[contact for details] Exact algorithms to optimize probe selection for HIV allele-specific PCR</a></li>
                        </ul>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default ResearchPage;
