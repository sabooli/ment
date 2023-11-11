import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import Form from "react-bootstrap/Form";
import { AiFillStar } from "react-icons/ai";
import Explain from "./explain";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CartContext from "./cartContext";

export default function Counsel() {
const { t, i18n } = useTranslation();
const { id } = useParams();
const [item, setItem] = useState({
  id: "",
  Fname: "",
  Lname: "",
  avatar: "",
  university: "",
  type_madrak: "",
  Specialties: "",
  stars: "",
});
const [categories, setCategories] = useState([]);
const [categoryId, setCategoryId] = useState();
const [subcategoryId, setSubcategoryId] = useState();
const [subcategories, setSubcategories] = useState([]);
const { dispatch } = useContext(CartContext);
const [selectedCategoryTitle, setSelectedCategoryTitle] = useState("");
const [selectedSubcategoryTitle, setSelectedSubcategoryTitle] = useState("");
const [comments, setComments] = useState([]);
const [weeklyPlan, setWeeklyPlan] = useState([]);
const [selectedComments, setSelectedComments] = useState(null);


const weeklyPlanUrl =
  `https://portals.mentalland.com/api/V1/homepage/weekly_plan/${id}?lang=` +
  i18n.language;

useEffect(() => {
  fetch(weeklyPlanUrl)
    .then((response) => response.json())
    .then((data) => {
      setWeeklyPlan(data.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, [weeklyPlanUrl]);


useEffect(() => {
  const selectedSubcategory = subcategories.find(
    (subcategory) => subcategory.id === subcategoryId
  );

  if (selectedSubcategory) { i18n.language === "fa" ? (setSelectedSubcategoryTitle(selectedSubcategory.subcategory_title)) :
    setSelectedSubcategoryTitle(selectedSubcategory.title_en)
  } else {
    setSelectedSubcategoryTitle("") }
}, [subcategoryId, subcategories]);

useEffect(() => {
  const selectedCategory = categories.find(
    (category) => category.id === categoryId
  );

  if (selectedCategory) { i18n.language === "fa" ? (setSelectedCategoryTitle(selectedCategory.title_category)) :
    setSelectedCategoryTitle(selectedCategory.title_category_en)
  } else {
    setSelectedCategoryTitle("")
  }
}, [categoryId, categories]);

const commnetUrl = `https://portals.mentalland.com/api/V1/homepage/comments_consts/${id}?lang=` + i18n.language;

 useEffect(() => {
   fetch(commnetUrl)
     .then((response) => response.json())
     .then((data) => {
       setComments(data.data);
     })
     .catch((error) => {
       console.log(error);
     });
 }, [commnetUrl]);

 useEffect(() => {
   const foundComment = comments.filter((comment) => comment.const_id === id);
   setSelectedComments(foundComment);
 }, [comments, id]);


const priceUrl = `https://portals.mentalland.com/api/V1/get_const_price/${id}`;

const requestBody = {
  category_id: categoryId,
  subcategory_id: subcategoryId,
};

const handlePrice = () => {
fetch(priceUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(requestBody),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data.data);
    if (i18n.language === "en") {
       dispatch({
         type: "UPDATE_CART_DATA",
         payload: {
           titleEvent: selectedCategoryTitle + " " + selectedSubcategoryTitle,
           dateEvent: new Date().toISOString().split("T")[0],
           priceEvent: data.data[0].price_dollar,
           id: item.id,
         },
       });
      } else {
         dispatch({
           type: "UPDATE_CART_DATA",
           payload: {
             titleEvent: selectedCategoryTitle + " " + selectedSubcategoryTitle,
             dateEvent: new Date().toISOString().split("T")[0],
             priceEvent: data.data[0].price,
             id: item.id,
           },
         });
      }
  })
  .catch((error) => {
    console.error(error);
  });                          
}

useEffect(() => {
    const lang = i18n.language;
    const url =
      "https://portals.mentalland.com/api/V1/homepage/consts_list_homepage_" + lang;
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.json())
    .then((data) => {
      const selectedItem = data.data.find(item => item.id.toString() === id.toString());
      setItem(selectedItem);
    })
    .catch((error) => console.log(error));
}, []);

useEffect(() => {
  fetch("https://portals.mentalland.com/api/V1/homepage/category_const_rezerv")
    .then((response) => response.json())
    .then((data) => {
      setCategories(data.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}, []);

useEffect(() => {
  fetch(
    `https://portals.mentalland.com/api/V1/homepage/subcategory_const_rezerv/${categoryId}`)
    .then((response) => response.json())
    .then((data) => {
      setSubcategories(data.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}, [categoryId]);


    return (
      <div>
        <Header className="whatsapp" />
        <Navbar />
        <div className="contain">
          <div className="connect">
            <div className="gbar">
              <div className="part">
                {item ? (
                  <img
                    src={`https://portals.mentalland.com/image/users/cons/degree/${item.avatar}`}
                    className="photo"
                    alt="personal"
                  />
                ) : (
                  "Loading..."
                )}
              </div>
              <div className="part container-fluid">
                <div className="sub who">
                  <h2 className="drname">
                    {item ? `${item.Fname} ${item.Lname}` : "Loading..."}
                  </h2>
                  <h3 className="dreducation">
                    {" "}
                    {item ? `${item.type_madrak}` : "Loading..."}
                  </h3>
                  <div className="level mt-4 mb-3">
                    <AiFillStar className="star" />
                    <span className="rate">
                      {" "}
                      {item ? `${item.stars}` : "Loading..."}
                    </span>
                    <span className="experience">+1000 Consultations</span>
                  </div>
                </div>
                {item ? (
                  <div className="workField">
                    <span>
                      {item.Specialties &&
                        JSON.parse(item.Specialties).map((specialty, index) => (
                          <>
                            {index > 0 ? " " : ""}
                            <span className="field">{specialty}</span>
                          </>
                        ))}
                    </span>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className="part mt-4 container-fluid">
                {i18n.language === "fa" ? (
                  <div>
                    {" "}
                    <Form.Select
                      aria-label="category"
                      onChange={(e) => setCategoryId(e.target.value)}
                      className="mb-2"
                    >
                      <option value="">انتخاب دسته بندی</option>
                      {categories &&
                        categories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.title_category}
                          </option>
                        ))}
                    </Form.Select>
                    <Form.Select
                      aria-label="session"
                      onChange={(e) => setSubcategoryId(e.target.value)}
                    >
                      <option value="">جلسات</option>
                      {subcategories &&
                        subcategories.map((subcategory) => (
                          <option key={subcategory.id} value={subcategory.id}>
                            {subcategory.subcategory_title}
                          </option>
                        ))}
                    </Form.Select>{" "}
                  </div>
                ) : (
                  <div>
                    {" "}
                    <Form.Select
                      aria-label="category"
                      onChange={(e) => setCategoryId(e.target.value)}
                      className="mb-2"
                    >
                      <option value="">Select Category</option>
                      {categories &&
                        categories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.title_category_en}
                          </option>
                        ))}
                    </Form.Select>
                    <Form.Select
                      aria-label="session"
                      onChange={(v) => setSubcategoryId(v.target.value)}
                    >
                      <option value="">Sessions</option>
                      {subcategories &&
                        subcategories.map((subcategory) => (
                          <option key={subcategory.id} value={subcategory.id}>
                            {subcategory.title_en}
                          </option>
                        ))}
                    </Form.Select>
                  </div>
                )}
                <div className="hhh mt-3">
                  <Link onClick={handlePrice} className="counsel">
                    <div className="justnow">{t("StartCounseling")}</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Explain data={item} comments={selectedComments} plan={weeklyPlan} />
        </div>
        <Footer />
      </div>
    );
}