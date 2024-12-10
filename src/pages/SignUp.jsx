import React from 'react'
import image from '../utility/images/homeimg4.jpg'
import Template from '../components/Template';

const SignUp = ({setIsLoggedIn}) => {
  const title = "Join Our Foodie Family for Exclusive Perks!";
  const desc1 = "Sign up for exclusive deals and updates!";
  const desc2 = "Join us today and enjoy special offers, personalized recommendations, and a delicious journey like no other!";
  const formType = "signup";

  return (
    <Template
      title={title}
      desc1={desc1}
      desc2={desc2}
      image={image}
      formType={formType}
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default SignUp;