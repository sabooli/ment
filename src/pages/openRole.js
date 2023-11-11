import React from "react";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Openrole({ onClick, business }) {
  const { i18n } = useTranslation();
                 return (
                   <div>
                     <div className="rolebar" key={business.id}>
                      
                       <div className="rolebarcontext">
                         <div className="roleform">
                           <span className="roletitle">
                             {business.ad_title}
                           </span>
                           <span
                             className="originRole"
                             style={{ whiteSpace: "nowrap" }}
                           >
                             {business.date_register}
                           </span>
                         </div>
                         <div className="cotype">
                           {business.Type_cooperation}
                         </div>
                         <div className="roletime">
                           <span className="cotype">
                             {business.minimum_salary}
                           </span>
                           <span className="cotype">
                             {business.Relevant_work_experience} Work Experience
                           </span>
                         </div>
                         <div className="posexp">
                           -
                           {business.ad_content
                             .split(" ")
                             .slice(0, 18)
                             .join(" ")}
                           ...
                         </div>
                         <Link
                           onClick={() => onClick(business)}
                           className="gotorole text-center"
                         >
                           { i18n.language === "en" ? <HiArrowLongRight className="arrow" /> : <HiArrowLongLeft className="arrow" /> }
                         </Link>
                       </div>
                     </div>
                   </div>
                 );
               }
