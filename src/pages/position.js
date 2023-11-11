import React from "react";
import { useTranslation } from "react-i18next";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";


export default function Position({ onClick, business }) {
  const {i18n} = useTranslation();
                 return (
                   <div>
                     <div className="posbar mb-4">
                       <div className="postitle">{business.ad_title}</div>
                       <div className="category">{business.full_category}</div>
                       <div className="cotype">{business.Type_cooperation}</div>
                       <div className="postime">
                         <span className="cotype">
                           {business.minimum_salary}
                         </span>
                         <span className="cotype">
                           {business.Relevant_work_experience} work experience
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
                       <div className="posfrom">
                         <span>{business.date_register}</span>
                         <span className="">
                           { i18n.language === "en" ? business.full_country_en : business.full_country_fa}
                         </span>
                       </div>

                       <div className="postime">
                         <Link
                           onClick={() => onClick(business)}
                           className="gotopos mt-sm-5 mt-md-0 text-center"
                         >
                         { i18n.language === "en" ? <HiArrowLongRight className="arrow" /> : <HiArrowLongLeft className="arrow" /> }
                         </Link>
                       </div>
                     </div>
                   </div>
                 );
               }