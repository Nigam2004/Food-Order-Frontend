import React from "react";

export default function About() {
  return (
    <div className="font-poppins">
      <header class="bg-orange-400 p-4 text-white text-center ">
        <h1 class="text-3xl font-semibold">Quick Bite Restaurant</h1>
        <p class="text-sm">Serving Delicious and Healthy Meals</p>
      </header>

      <main class="container mx-auto mt-8 p-4">
        <section class="bg-white p-8 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold mb-4">About Us</h2>
          <p class="mb-4">
            Welcome to Quick Bite Restaurant, where we are passionate about
            serving you delicious and healthy meals made with fresh and
            high-quality ingredients.
          </p>
          <p class="mb-4">
            At Quick Bite Restaurant, we believe in the power of good food to
            bring people together. Our menu is carefully crafted to offer a
            variety of options that cater to different tastes and dietary
            preferences.
          </p>
          <p class="mb-4">
            Craving a quick lunch? We've got you covered. Choose from a
            selection of savory wraps, hearty salads, or our signature rice
            bowls, all customizable with your favorite proteins and toppings.
            Need a satisfying dinner for the whole family? Look no further than
            our family-sized portions of classic Indian curries, sizzling
            tandoori platters, and comforting biryanis. We also offer a variety
            of vegetarian and vegan options, ensuring everyone finds something
            to love.
          </p>
          <p class="mb-4">
            <span className="font-bold">
              Don't feel like leaving the house?{" "}
            </span>{" "}
            No problem! Quick Bite delivers straight to your doorstep. Simply
            browse our extensive menu online or through our app, place your
            order, and sit back and relax. We take pride in our fast and
            efficient delivery service, ensuring your food arrives piping hot
            and ready to enjoy.
          </p>
          <p class="mb-4">
            <span className="font-bold">
              Here's what sets Quick Bite apart:
            </span>{" "}
            Fresh, high-quality ingredients: We source the freshest ingredients
            daily to create dishes bursting with flavor. Made-to-order meals: No
            pre-made food here! Every dish is prepared fresh after you order,
            guaranteeing a taste sensation. Speed and convenience: We value your
            time. Get your delicious meal quickly, dine-in or delivered. Variety
            to satisfy all cravings: Whether you're a meat lover, vegetarian, or
            vegan, we have something to tantalize your taste buds.
          </p>
        </section>
      </main>
    </div>
  );
}
