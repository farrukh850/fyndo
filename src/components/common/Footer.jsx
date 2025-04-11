import { Link } from "react-router-dom";
import "../../../src/assets/css/main.css";

const Footer = () => {
  return (
    <div className="py-[21px] bg-[#111111] border-t border-[rgba(255,255,255,0.11)]">
      <div className="container">
        <div className="flex items-center justify-between font-stk  flex-col lg:flex-row gap-4 lg:gap-0">
          <ul className="flex items-center gap-4">
            <li><Link to="#" className="text-[13.34px] leading-4 tracking-[-0.14px] text-[rgba(255,255,250,0.6)]">Terms</Link></li>
            <li><Link to="#" className="text-[13.34px] leading-4 tracking-[-0.14px] text-[rgba(255,255,250,0.6)]">Privacy Policy</Link></li>
            <li><Link to="#" className="text-[13.34px] leading-4 tracking-[-0.14px] text-[rgba(255,255,250,0.6)]">Cookie Policy</Link></li>                                    
          </ul>
          <ul className="flex items-center gap-4">
            <li><Link to="#" className="text-[13.34px] leading-4 tracking-[-0.14px] text-[rgba(255,255,250,0.6)]">LinkedIn</Link></li>
            <li><Link to="#" className="text-[13.34px] leading-4 tracking-[-0.14px] text-[rgba(255,255,250,0.6)]">Youtube</Link></li>
            <li><Link to="#" className="text-[13.34px] leading-4 tracking-[-0.14px] text-[rgba(255,255,250,0.6)]">X - formerly Twitter</Link></li>
            <li><Link to="#" className="text-[13.34px] leading-4 tracking-[-0.14px] text-[rgba(255,255,250,0.6)]">GitHub</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;