import React, { useCallback, useEffect, useState } from "react";
import Header from "../components/Header";
import Apartment from "../components/Apartment";
import apartment from "../utils/apartment.json";
import Footer from "../components/Footer";
import footerData from "../utils/footer.json";
import FooterModal from "../components/FooterModal";

const Home = ({ setModal }) => {
  const [category, setCategory] = useState("Rooms");
  const [data, setData] = useState();
  const [showModal, setShowModal] = useState(false);

  const selectedCategory = useCallback((selected) => {
    let filter = apartment?.filter((item) => item.category === selected);
    setData(filter);
  }, []);

  useEffect(() => {
    selectedCategory(category);
  }, [category]);

  return (
    <div className='relative'>
      <Header setShowModal={setModal} setCategory={setCategory} />
      <Apartment selected={data} />
      <Footer
        footer={footerData}
        setShowModal={setShowModal}
        showModal={showModal}
      />
      <FooterModal setShowModal={setShowModal} showModal={showModal} />
    </div>
  );
};

export default Home;
