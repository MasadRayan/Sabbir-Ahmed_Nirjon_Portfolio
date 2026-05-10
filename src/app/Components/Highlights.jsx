import Image from 'next/image';
import React from 'react';

const Highlights = () => {
    return (
        <div className=''>
            <div className="flex items-center gap-4 mx-5 md:max-w-[1300px] md:mx-auto my-10 md:my-3">
                <hr className="flex-1 border-[#6B7770] border-2" />
                <div className="text-4xl font-semibold text-[#6B7770]">Highlights</div>
                <hr className="flex-1 border-[#6B7770] border-2" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:max-w-[1300px] lg:mx-auto gap-15 md:gap-10 mx-5 my-10 md:my-4 ">
                {/* card1 */}
                <div className='flex flex-col justify-center items-center gap-8'>
                    {/* image */}
                    <div className='md:h-70 md:w-70  flex flex-col justify-center items-center'>
                        <Image
                            src="/home/Picture1.png"
                            alt="hapcompass"
                            width={200}
                            height={200}
                            className="w-full h-full object-contain hover:scale-115 transition-all duration-300 mb-4"
                        />
                        <div className='text-2xl font-semibold text-[#6B7770]'>LCG Attention</div>
                    </div>
                    {/* description */}
                    <div>
                        <p className='text-[#6B7770] leading-8 max-w-10/12 md:max-w-full mx-auto text-center md:text-start'>
                            LCG Attention model is a novel deep neural network which fuses an attention enhanced CNN layer with another attention enhanced LSTM. The model is validated across the five different regional datasets achieving 0.98 - 0.99 r2score outperforming sota models. It is primarily benchmarked for load forecasting, a time-series application and can be pioneered for other forecasting methods and NLP.
                        </p>
                    </div>
                </div>
                {/* card 2 */}
                <div className='flex flex-col justify-center items-center gap-8'>
                    {/* image */}
                    <div className='md:h-70 md:w-70  flex flex-col justify-center items-center my-8 md:my-0'>
                        <Image
                            src="/home/Picture2.png"
                            alt="Biisq"
                            width={200}
                            height={200}
                            className="w-full h-full object-contain hover:scale-115 transition-all duration-300 mb-8 md:mb-4"
                        />
                        <div className='text-2xl font-semibold text-[#6B7770]'>Leaf disease classification</div>
                    </div>
                    {/* description */}
                    <div>
                        <p className='text-[#6B7770] leading-8 max-w-10/12 md:max-w-full mx-auto text-center md:text-start'>
                            A hybrid deep learning-based architecture is
                            established using CNN with attention mechanisms,residual connections, and transfer learning to classify and detect 10 different diseases
                            in tomato leaves. This model demonstrates the potential of channel and spatial attention to identify irregularities in leaves, as proven through its
                            99.69% accuracy in the tomato leaf image dataset.
                        </p>
                    </div>
                </div>
                {/* card 3 */}
                <div className='flex flex-col justify-center items-center gap-8'>
                    {/* image */}
                    <div className='md:h-50 md:w-60 flex flex-col justify-center items-center md:mb-5 md:mt-15'>
                        <Image
                            src="/home/mri.png"
                            alt="cse5825"
                            width={90}
                            height={40}
                            className="w-full h-full object-contain hover:scale-115 transition-all duration-300 mb-4"
                        />
                        <div className='text-2xl font-semibold md:mt-2 md:mb-5 text-[#6B7770]'>Lightweight Brain Tumor Segmentation Model</div>
                    </div>
                    {/* description */}
                    <div>
                        <p className='text-[#6B7770] leading-8 max-h-100 overflow-auto max-w-10/12 md:max-w-full mx-auto text-center md:text-start mt-5'>
                            The proposed <strong>Brain Tumor Segmentation Model</strong> is a lightweight, two-stage deep learning framework designed for the efficient detection and segmentation of Lower-Grade Gliomas (LGG) from MRI images. The model employs a basic encoder-decoder architecture inspired from UNet while emplying depth-wise convolutions as backbone  for high-efficiency feature extraction. It also integrates Attention into the skip connections to filter redundant noise and emphasize tumor-relevant features. Operating through a cascaded pipeline, the system first classifies the presence of a tumor before performing pixel-wise segmentation, significantly reducing unnecessary computational overhead. Experimental results demonstrate state-of-the-art performance, achieving a mean Dice score of 0.95 and a mean IoU of 0.91, while maintaining a significantly lower parameter count compared to traditional models like UNet.

                        </p>
                    </div>
                </div>
                {/* card 4 */}
                <div className='flex flex-col justify-center items-center gap-8'>
                    {/* image */}
                    <div className='md:h-70 md:w-70  flex flex-col justify-center items-center md:mt-15'>
                        <Image
                            src="/home/language.png"
                            alt="explore"
                            width={200}
                            height={200}
                            className="w-full h-full object-contain hover:scale-115 transition-all duration-300 mb-8"
                        />
                        <div className='text-2xl font-semibold text-[#6B7770] text-center md:text-start'>NLP Chakma Sentiment Analysis</div>
                    </div>
                    {/* description */}
                    <div>
                        <p className='text-[#6B7770] leading-8 max-h-100 overflow-auto max-w-10/12 md:max-w-full mx-auto text-center md:text-start'>
                            Natural Language Processing (NLP) is one of the trending topics in AI. Text classification, text completion, and sentiment analysis have been carried out for various languages, including English, Bengali, and Spanish. However, there are still languages where the potential of NLP is unexplored. The Chakma dialect, spoken by a significant ethnic group in the Chittagong Hill Tracts of Bangladesh, is one such area. This study makes a novel contribution by assessing sentiment classification in the Chakma language for the first time. A Chakma language dataset is formed by collecting some frequently used texts from social media networks and Chakma peers. It contains more than 8000 text samples with three different labels: positive, negative, and neutral. To classify this low-resource language effectively, several Bert-based classifiers are fine-tuned and validated using accuracy metrics and confusion metrics. Among the classifiers, bert-base-uncased obtained 0.85 accuracy and 0.46 validation loss, surpassing the others. This study will work as a pioneer for other low-resource ethnic languages that are still unexplored in this domain.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Highlights;