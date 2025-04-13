import { useCallback, useState, useRef, useEffect  } from "react";
import { Link, useNavigate  } from "react-router-dom";

const MultiStepForm = () => {
  const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    useEffect(() => {
      const attemptPlay = () => {
        const video = videoRef.current;
        if (!video) return;
        
        // Ensure video is muted (Firefox requirement)
        video.muted = true;
        
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsPlaying(true))
            .catch(error => {
              console.log("Autoplay prevented:", error);
              // Fallback: show play button and let user initiate playback
              setIsPlaying(false);
            });
        }
      };
    
      // Add event listener for when Firefox might allow playback
      videoRef.current?.addEventListener('canplaythrough', attemptPlay);
      
      attemptPlay();
      
      return () => {
        videoRef.current?.removeEventListener('canplaythrough', attemptPlay);
      };
    }, []);
  
    const togglePlayPause = () => {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    };
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState([]);

  const steps = [
    { id: 1, name: 'Plan Selection' },
    { id: 2, name: 'Project Details' },
    { id: 3, name: 'Attach Files' },
    { id: 4, name: 'Target Platform' },
    { id: 5, name: 'Complete Payment' },
    { id: 6, name: '' }
  ];

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const navigate = useNavigate();

  const handleContinue = () => {
    if (currentStep === steps.length) {
      navigate('/'); // Navigate to home on last step
    } else if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  // Drag and Drop functions
  const formatFileSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1048576).toFixed(1)} MB`;
  };
  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(prevFiles => {
      // Combine previous files with new ones
      const combined = [...prevFiles, ...droppedFiles];
      
      // Remove duplicates (optional)
      const uniqueFiles = combined.filter(
        (file, index, self) => index === self.findIndex(f => 
          f.name === file.name && f.size === file.size
        )
      );
      
      return uniqueFiles;
    });
  };

  // File input handler
  const handleFileInput = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(prevFiles => [...prevFiles, ...selectedFiles]);
    e.target.value = ''; // Reset input
  };

  const removeFile = useCallback((indexToRemove) => {
    setFiles(prevFiles => prevFiles.filter((_, index) => index !== indexToRemove));
  }, []);

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="max-w-[706px] mx-auto xl:pt-[142px] pt-10 px-5 xl:px-0">
            <h1 className="text-3xl xl:text-[57.07px] leading-10 xl:leading-[60px] tracking-[-2.4px] text-[rgba(20,20,19,0.9)]">
              Simple Pricing—<br />Select One Package or Both.
            </h1>
            <div className="flex items-center gap-2 xl:mt-12 mt-8">
              <p className="text-[13.34px] tracking-[-0.14px] leading-4 text-black">Pick a package—need help? </p>
              <Link className="text-[13.34px] tracking-[-0.14px] leading-4 text-black relative">
                Talk to Sales for Details<span className="absolute left-0 top-full bg-[rgba(0,0,0,0.11)] h-0.5 w-full"></span>
              </Link>
              <img src="/images/arow-top-right.svg" alt="Arrow Top Right" />
            </div>
            <div className="mt-8 xl:mt-[76px]">
              <div 
                className="flex items-center gap-3.5 p-3 bg-white border border-[#E5E7EB] rounded-lg cursor-pointer"
                onClick={() => handleOptionChange('estimation')}
              >
                <div className="relative">
                  <input
                    type="radio"
                    name="package"
                    value="estimation"
                    checked={selectedOption === 'estimation'}
                    onChange={() => {}}
                    className="absolute opacity-0 w-0 h-0"
                  />
                  <span className={`w-5 h-5 rounded-full border flex items-center justify-center 
                    ${selectedOption === 'estimation' ? 'border-[#212121] bg-[#212121]' : 'border-[#E5E7EB] bg-white'}`}
                  >
                    {selectedOption === 'estimation' && (
                      <span className="w-5 h-5 rounded-full bg-black"></span>
                    )}
                  </span>
                </div>
                <div className="flex flex-col">
                  <p className="text-[rgba(20,20,19,0.9)] text-xs leading-5">Estimation Package - € 599</p>
                  <div className="flex items-center gap-2">
                    <p className="text-[#6B7280] text-xs leading-5">72 hours delivery</p>
                    <span className="h-0.5 w-0.5 bg-[#6B7280] rounded-full hidden xl:visible"></span>
                    <p className="text-[#6B7280] text-xs leading-5">CTO & Tech Lead Approved</p>
                    <span className="h-0.5 w-0.5 bg-[#6B7280] rounded-full hidden xl:visible"></span>
                    <p className="text-[#6B7280] text-xs leading-5">Get a Detailed PDF</p>
                  </div>
                </div>
              </div>
              <div 
                className="flex items-center gap-3.5 p-3 bg-white border border-[#E5E7EB] rounded-lg mt-2.5 cursor-pointer"
                onClick={() => handleOptionChange('screening')}
              >
                <div className="relative">
                  <input
                    type="radio"
                    name="package"
                    value="screening"
                    checked={selectedOption === 'screening'}
                    onChange={() => {}}
                    className="absolute opacity-0 w-0 h-0"
                  />
                  <span className={`w-5 h-5 rounded-full border flex items-center justify-center 
                    ${selectedOption === 'screening' ? 'border-[#212121] bg-[#212121]' : 'border-[#E5E7EB] bg-white'}`}
                  >
                    {selectedOption === 'screening' && (
                      <span className="w-5 h-5 rounded-full bg-black"></span>
                    )}
                  </span>
                </div>
                <div className="flex flex-col">
                  <p className="text-[rgba(20,20,19,0.9)] text-xs leading-5">Screening Package - € 999</p>
                  <div className="flex items-center gap-2">
                    <p className="text-[#6B7280] text-xs leading-5">We'll help by the next workday — usually faster, even weekends</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return <div className="max-w-[706px] mx-auto xl:pt-[142px] pt-10 px-5 xl:px-0">
          <h1 className="text-3xl xl:text-[57.07px] leading-10 xl:leading-[60px] tracking-[-2.4px] text-[rgba(20,20,19,0.9)]">We'd love to hear about your project, and where things currently stand.</h1>
          <div className="flex flex-col gap-1.5 xl:mt-[71px] mt-8">
            <p className="text-xs leading-5 text-[rgba(20,20,19,0.9)]">Project Title</p>
            <p className="text-xs leading-5 text-[#6B7280]">Keep your product title short and clear. Aim for 50–60 characters.</p>
            <div className="p-3 bg-[#FBFBFB] border border-[#E5E7EB] rounded-lg mt-4">
              <p className="text-xs leading-5 text-[rgba(20,20,19,0.9)]">Project Title<span className="text-[#F43F5E]">*</span></p>
              <input type="text" placeholder="e.g Online Shop for Fashion Ware, Mobile App for Traveling" className="text-xs leading-5 text-[#9CA3AF] placeholder:text-[#9CA3AF] w-full focus:outline-0" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 mt-5">
            <p className="text-xs leading-5 text-[rgba(20,20,19,0.9)]">Project description</p>
            <p className="text-xs leading-5 text-[#6B7280]">Write a clear, concise project description. Aim for 120–160 characters.</p>
            <div className="p-3 bg-[#FBFBFB] border border-[#E5E7EB] rounded-lg mt-4">
              <p className="text-xs leading-5 text-[rgba(20,20,19,0.9)]">Description<span className="text-[#F43F5E]">*</span></p>
              <textarea 
                placeholder="Describe your project .." 
                className="text-xs leading-5 h-52 text-[#9CA3AF] placeholder:text-[#9CA3AF] w-full focus:outline-0 resize-none align-top"
              />
            </div>
          </div>
        </div>;
      case 3:
        return <div className="max-w-[706px] mx-auto xl:pt-[142px] pt-10 px-5 xl:px-0">
          <h1 className="text-3xl xl:text-[57.07px] leading-10 xl:leading-[60px] tracking-[-2.4px] text-[rgba(20,20,19,0.9)]">Sharing your documents helps us better understand your vision.</h1>
          <div className="flex flex-col gap-1.5 xl:mt-[91px] mt-8">
            <p className="text-xs leading-5 text-[rgba(20,20,19,0.9)]">Upload Files</p>
            <p className="text-xs leading-5 text-[#6B7280]">Upload PDFs and screenshots to share more details—this helps us better understand your project and vision.</p>
          </div>
          {/* File drag and drop code here */}
          <div className="mt-6">
            <div
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              className={`w-full h-[191px] border-2 border-dashed rounded-lg flex flex-col items-center justify-center ${
                isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'
              }`}
            >
              <input
                type="file"
                id="file-upload"
                className="hidden"
                multiple
                onChange={handleFileInput}
              />
              <p className="text-xs leading-5 text-[#9CA3AF]">
                Drop your images & PDFs here, or <label htmlFor="file-upload" className="text-xs leading-5 text-black cursor-pointer">click to browse</label>
              </p>
              <p className="text-xs leading-5 text-[#9CA3AF]">Allowed formats: JPG, PNG, PDF (max 10MB each)</p>
            </div>

            {/* File list display */}
            {files.length > 0 && (
              <div className="mt-4">
                <ul className="flex items-center gap-x-7 gap-y-2 flex-wrap ">
                  {files.map((file, index) => (
                    <li key={index} className="flex flex-col items-start justify-between relative">
                      <span className="text-xs leading-5 text-black">
                        {file.name}
                      </span>
                      <p className="text-xs leading-5 text-[#6B7280]">
                        {formatFileSize(file.size)}
                      </p>
                      <button 
                        onClick={() => removeFile(index)}
                        className="absolute -right-4 top-2 cursor-pointer"
                      >
                        <img src="/images/file-delete.svg" className="w-2" alt="File Close" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>;
      case 4:
        return <div className="max-w-[706px] mx-auto xl:pt-[142px] pt-10 px-5 xl:px-0">
          <h1 className="text-3xl xl:text-[57.07px] leading-10 xl:leading-[60px] tracking-[-2.4px] text-[rgba(20,20,19,0.9)]">What is your intended use case or current application?</h1>
            <div 
              className="flex items-center gap-3.5 px-3 py-[22px] bg-white border border-[#E5E7EB] rounded-lg cursor-pointer xl:mt-[60px] mt-8"
              onClick={() => handleOptionChange('use-case-1')}
            >
              <div className="relative">
                <input
                  type="radio"
                  name="package"
                  value="use-case-1"
                  checked={selectedOption === 'use-case-1'}
                  onChange={() => {}}
                  className="absolute opacity-0 w-0 h-0"
                />
                <span className={`w-[15px] h-[15px] rounded-full border flex items-center justify-center 
                  ${selectedOption === 'use-case-1' ? 'border-[#212121] bg-[#212121]' : 'border-[#E5E7EB] bg-white'}`}
                >
                  {selectedOption === 'use-case-1' && (
                    <span className="w-[15px] h-[15px] rounded-full bg-black"></span>
                  )}
                </span>
              </div>
              <div className="flex flex-col">
                <p className="text-[rgba(20,20,19,0.9)] text-xs leading-5">Web (Website, Software as A Service)</p>
              </div>
            </div>
            <div 
              className="flex items-center gap-3.5 px-3 py-[22px] bg-white border border-[#E5E7EB] rounded-lg cursor-pointer mt-[10px]"
              onClick={() => handleOptionChange('use-case-2')}
            >
              <div className="relative">
                <input
                  type="radio"
                  name="package"
                  value="use-case-2"
                  checked={selectedOption === 'use-case-2'}
                  onChange={() => {}}
                  className="absolute opacity-0 w-0 h-0"
                />
                <span className={`w-[15px] h-[15px] rounded-full border flex items-center justify-center 
                  ${selectedOption === 'use-case-2' ? 'border-[#212121] bg-[#212121]' : 'border-[#E5E7EB] bg-white'}`}
                >
                  {selectedOption === 'use-case-2' && (
                    <span className="w-[15px] h-[15px] rounded-full bg-black"></span>
                  )}
                </span>
              </div>
              <div className="flex flex-col">
                <p className="text-[rgba(20,20,19,0.9)] text-xs leading-5">Mobile App </p>
              </div>
            </div>
            <div 
              className="flex items-center gap-3.5 px-3 py-[22px] bg-white border border-[#E5E7EB] rounded-lg cursor-pointer mt-[10px]"
              onClick={() => handleOptionChange('use-case-3')}
            >
              <div className="relative">
                <input
                  type="radio"
                  name="package"
                  value="use-case-3"
                  checked={selectedOption === 'use-case-3'}
                  onChange={() => {}}
                  className="absolute opacity-0 w-0 h-0"
                />
                <span className={`w-[15px] h-[15px] rounded-full border flex items-center justify-center 
                  ${selectedOption === 'use-case-3' ? 'border-[#212121] bg-[#212121]' : 'border-[#E5E7EB] bg-white'}`}
                >
                  {selectedOption === 'use-case-3' && (
                    <span className="w-[15px] h-[15px] rounded-full bg-black"></span>
                  )}
                </span>
              </div>
              <div className="flex flex-col">
                <p className="text-[rgba(20,20,19,0.9)] text-xs leading-5">Online Shop</p>
              </div>
            </div>
            <div 
              className="flex items-center gap-3.5 px-3 py-[22px] bg-white border border-[#E5E7EB] rounded-lg cursor-pointer mt-[10px]"
              onClick={() => handleOptionChange('use-case-4')}
            >
              <div className="relative">
                <input
                  type="radio"
                  name="package"
                  value="use-case-4"
                  checked={selectedOption === 'use-case-4'}
                  onChange={() => {}}
                  className="absolute opacity-0 w-0 h-0"
                />
                <span className={`w-[15px] h-[15px] rounded-full border flex items-center justify-center 
                  ${selectedOption === 'use-case-4' ? 'border-[#212121] bg-[#212121]' : 'border-[#E5E7EB] bg-white'}`}
                >
                  {selectedOption === 'use-case-4' && (
                    <span className="w-[15px] h-[15px] rounded-full bg-black"></span>
                  )}
                </span>
              </div>
              <div className="flex flex-col">
                <p className="text-[rgba(20,20,19,0.9)] text-xs leading-5">Content Management System</p>
              </div>
            </div>
            <div 
              className="flex items-center gap-3.5 px-3 py-[22px] bg-white border border-[#E5E7EB] rounded-lg cursor-pointer mt-[10px]"
              onClick={() => handleOptionChange('use-case-5')}
            >
              <div className="relative">
                <input
                  type="radio"
                  name="package"
                  value="use-case-5"
                  checked={selectedOption === 'use-case-5'}
                  onChange={() => {}}
                  className="absolute opacity-0 w-0 h-0"
                />
                <span className={`w-[15px] h-[15px] rounded-full border flex items-center justify-center 
                  ${selectedOption === 'use-case-5' ? 'border-[#212121] bg-[#212121]' : 'border-[#E5E7EB] bg-white'}`}
                >
                  {selectedOption === 'use-case-5' && (
                    <span className="w-[15px] h-[15px] rounded-full bg-black"></span>
                  )}
                </span>
              </div>
              <div className="flex flex-col">
                <p className="text-[rgba(20,20,19,0.9)] text-xs leading-5">Other e.g Artificial Intelligence)</p>
              </div>
            </div>
        </div>;
      case 5:
      return <div className="max-w-[706px] mx-auto xl:pt-[142px] pt-10 px-5 xl:px-0">
        <h1 className="text-3xl xl:text-[57.07px] leading-10 xl:leading-[60px] tracking-[-2.4px] text-[rgba(20,20,19,0.9)]">Final step—Complete the payment and let’s get started.</h1>
        <div className="flex flex-col mt-[50px] gap-[30px]">
          <p className="text-base text-[#666666]">Contact information</p>
          <span className="text-sm leading-5 text-[#333333] p-3 rounded-md bg-[#F7F7F7] border border-[#E7EAEB]"><b className="text-[#4D4D4D] pr-3">Email</b><input type="text" placeholder="00Chukwudaniel@gmail.com" className="text-sm leading-5 text-[#333333] placeholder:text-[#333333] focus:outline-none" /></span>
        </div>
        <div className="flex flex-col mt-[30px]">
          <p className="text-base text-[#333333] mb-[15px]">Payment method</p>
          <p className="text-sm text-[#666666] leading-5 mb-1">Card information</p>
          <div className="relative">
            <input type="text" placeholder="Enter text" className="rounded-tr-md border-b-0  rounded-tl-md ps-4 text-sm placeholder:text-[rgba(0,0,0,0.5)] border border-[#E7EAEB] bg-white h-[34px] w-full focus:outline-none" />
            <img src="/images/debit-cards.svg" className="absolute top-1/2 -translate-y-1/2 right-4" alt="Debit Cards" />
          </div>
          <div className="flex items center justify-between">
            <div className="relative flex-1">
              <input type="text" placeholder="MM / YY" className="ps-4 rounded-bl-md text-sm placeholder:text-[rgba(0,0,0,0.5)] border border-[#E7EAEB] bg-white h-[34px] w-full focus:outline-none" />
            </div>
            <div className="relative flex-1">
              <input type="text" placeholder="CVC" className="ps-4 rounded-br-md text-sm placeholder:text-[rgba(0,0,0,0.5)] border border-[#E7EAEB] bg-white h-[34px] w-full focus:outline-none" />
              <img src="/images/cvc.svg" className="absolute top-1/2 -translate-y-1/2 right-4" alt="CVC" />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-[30px]">
          <p className="text-sm text-[#666666] leading-5 mb-1">Cardholder name</p>
          <input type="text" placeholder="Full name on card" className="ps-4 rounded-md text-sm placeholder:text-[rgba(0,0,0,0.5)] border border-[#E7EAEB] bg-white h-[34px] w-full focus:outline-none" />
        </div>
        <div className="flex flex-col mt-[30px]">
          <p className="text-sm text-[#666666] leading-5 mb-1">Country or region</p>
          <select name="country" id="country" className="ps-4 rounded-tl-md  border-b-0 rounded-tr-md text-sm text-[#333333] border border-[#E7EAEB] bg-white h-[34px] w-full focus:outline-none">
            <option value="Nigeria">Nigeria</option>
            <option value="Nigeria">United States</option>
            <option value="Nigeria">Autralia</option>
            <option value="Nigeria">Africa</option>
          </select>
          <input type="text" placeholder="Address line 2" className="ps-4 border-b-0 text-sm placeholder:text-[rgba(0,0,0,0.5)] border border-[#E7EAEB] bg-white h-[34px] w-full focus:outline-none" />
          <div className="flex items center justify-between">
            <div className="relative flex-1">
              <input type="text" placeholder="City" className="ps-4 text-sm border-b-0 border-r-0 placeholder:text-[rgba(0,0,0,0.5)] border border-[#E7EAEB] bg-white h-[34px] w-full focus:outline-none" />
            </div>
            <div className="relative flex-1">
              <input type="text" placeholder="Postal code" className="ps-4 text-sm placeholder:text-[rgba(0,0,0,0.5)] border border-[#E7EAEB] border-b-0 bg-white h-[34px] w-full focus:outline-none" />
            </div>
          </div>
          <select name="country" id="country" className="ps-4 rounded-bl-md rounded-br-md text-sm text-[rgba(0,0,0,0.5)] border border-[#E7EAEB] bg-white h-[34px] w-full focus:outline-none">
            <option value="State">State</option>
            <option value="State">State</option>
            <option value="State">State</option>
            <option value="State">State</option>
          </select>
        </div>
      </div>;
      case 6:
      return <div className="max-w-[706px] mx-auto xl:pt-[142px] pt-10 px-5 xl:px-0">
      <h1 className="text-3xl xl:text-[57.07px] leading-10 xl:leading-[60px] tracking-[-2.4px] text-[rgba(20,20,19,0.9)]">Tada! Payment completed successfully. Your Project Number is #1221. </h1>
      <small className="text-xs text-[rgba(20,20,19,0.9)] leading-5 xl:mt-12 mt-8 block">We'll get back to you via your email address shortly.</small>
      <div className="flex flex-col xl:mt-[35px] mt-8 gap-[30px]">
        <p className="text-base text-[#666666]">Contact information</p>
        <span className="text-sm leading-5 text-[#333333] p-3 rounded-md bg-[#F7F7F7] border border-[#E7EAEB]"><b className="text-[#4D4D4D] pr-3">Email</b>00Chukwudaniel@gmail.com</span>
      </div>
    </div>;
      default:
        return null;
    }
  };

  return (
    <>
      <header className={`header h-[60px] fixed top-0 right-0 left-0 flex items-center px-4 w-full bg-[#191919] border-b border-[#191919] font-stk z-[1000]`}>
        <div className="w-full flex items-center justify-between">
          {/* Logo - Always visible */}
          <Link to="/" className="w-14 shrink-0">
            <img src="/images/logo.svg" className="w-full" alt="LEAP Logo" />
          </Link>

          {/* Steps - Hidden on mobile, visible on md+ screens */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4 xl:gap-[46px]">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center gap-2 lg:gap-4 xl:gap-[46px]">
                {index > 0 && index < steps.length - 1 && (
                  <span className={`w-4 lg:w-[23px] h-[1px] ${currentStep >= step.id ? 'bg-white' : 'bg-[#C5C5C5]'}`}></span>
                )}
                <p 
                  className={`text-xs md:text-[13.45px] tracking-[-0.14px] leading-4 whitespace-nowrap ${
                    currentStep >= step.id ? 'text-white' : 'text-[rgba(255,255,250,0.6)]'
                  }`}
                >
                  {step.name}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile Step Indicator - Visible only on mobile */}
          <div className="md:hidden text-white text-sm">
            Step {currentStep} of {steps.length}
          </div>
        </div>
      </header>

      <div className="flex xl:flex-row flex-col items-stretch justify-between h-auto max-h-[calc(100vh-60px)] mt-[60px] font-stk">
        <div className="flex-1 xl:flex-[65%] overflow-y-auto max-h-[calc(100vh-60px)] pb-10">
          {renderStepContent()}
          <div className="max-w-[706px] mx-auto mt-8 flex gap-4 px-5 xl:px-0">
            {currentStep > 1 && (
              <button 
                onClick={handleBack}
                className="w-[114px] h-9 bg-white text-[#212121] border border-[#212121] text-[13.45px] leading-4 tracking-[-0.14px] rounded-[160px] cursor-pointer"
              >
                Back
              </button>
              )}
              <button 
                onClick={handleContinue}
                className={`w-[114px] h-9 text-[13.45px] leading-4 tracking-[-0.14px] rounded-[160px] cursor-pointer ${
                  currentStep === steps.length 
                    ? 'bg-[#212121] text-white' 
                    : 'bg-[#212121] text-white'
                }`}
              >
              <button 
                onClick={handleContinue}
                className="w-[114px] h-9 bg-[#212121] text-white text-[13.45px] leading-4 tracking-[-0.14px] rounded-[160px] cursor-pointer"
                >
                {(() => {
                  if (currentStep === 5) return 'Buy Plan';
                  if (currentStep === 6) return 'Back Home';
                  return 'Continue';
                })()}
              </button>
            </button>
          </div>
        </div>
        <div className="flex-1 hidden lg:block xl:flex-[35%] overflow-hidden w-full h-full min-h-[calc(100vh-60px)] xl:max-h-[calc(100vh-60px)] relative">
        {currentStep === 5 ? (
          // Content to show for step 5 (payment completion)
          <div className="flex flex-col items-start xl:items-stretch justify-center bg-[#212121] absolute right-0 top-0 bottom-0 left-0 h-full w-full xl:max-h-[calc(100vh-60px)]">
            <div className="max-w-[401px] w-full xl:ml-[85px] px-5 xl:px-0">
              <p className="textsm text-white leading-4.5">Estimation Package</p>
              <div className="flex flex-col gap-2 py-8">
                <p className="text-base leading-[100%] text-[rgba(255,255,255,0.8)]">72 hours delivery</p>
                <div className="flex items-center gap-2.5">
                  <h4 className="text-4xl leading-[100%] text-white tracking-[-6%] font-abaliss">€ 599</h4>
                  <small className="text-sm leading-[100%] text-[rgba(255,255,255,0.8)]">Per project</small>
                </div>
              </div>
              <div className="flex flex-col gap-[15px] py-4 border-b border-t border-[rgba(255,255,255,0.5)]">
                <div className="flex items-center justify-between">
                  <small className="text-base leading-5 text-white">Subtotal</small>
                  <small className="text-base leading-5 text-white">$96.00</small>
                </div>
                <div className="flex items-center justify-between">
                  <small className="text-base leading-5 text-white">Tax</small>
                  <small className="text-base leading-5 text-[rgba(255,255,255,0.5)]">$0.00</small>
                </div>
              </div>
                <div className="flex items-center justify-between mt-[15px]">
                  <small className="text-base leading-5 text-white">Total due today</small>
                  <small className="text-base leading-5 text-white">$96.00</small>
                </div>
            </div>
          </div>
          ) : (
            // Default content for other steps
            // <img 
            //   src="/images/form-image.png" 
            //   className="w-full h-full object-cover object-top" 
            //   alt="Man Standing" 
            // />
            <div className="absolute inset-0 flex flex-col bg-[#212121] h-[calc(100vh-60px)]">
              <div className="relative flex-1 w-full">
                {/* Video Element */}
                  <video
                      ref={videoRef}
                      className="absolute inset-0 w-full h-full object-cover"
                      autoPlay
                      muted
                      playsInline
                      loop
                      controls={false}
                      >
                      <source src="/videos/v7.mp4" type="video/mp4" />
                      <source src="/videos/v7.webm" type="video/webm" /> {/* Add WebM version as fallback */}
                  </video>
                  {/* Play/Pause Button (Bottom Right) */}
                  <button
                    onClick={togglePlayPause}
                    className="absolute bottom-[74px] right-[53px] bg-white  rounded-full h-12 w-12 flex items-center justify-center transition-colors z-50 cursor-pointer"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      
                        <img src="/images/pause.svg" className="w-5" alt="" />
                    ) : (
                        <img src="/images/play-btn.svg" className="w-3" alt="" />
                    )}
                  </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MultiStepForm;