import React from "react";

export default function About() {
  return (
    <div className="font-poppins">
      <header class="bg-orange-400 p-4 text-white text-center ">
        <h1 class="text-3xl font-semibold">Broccoli Restaurant</h1>
        <p class="text-sm">Serving Delicious and Healthy Meals</p>
      </header>

      <main class="container mx-auto mt-8 p-4">
        <section class="bg-white p-8 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold mb-4">About Us</h2>
          <p class="mb-4">
            Welcome to Broccoli Restaurant, where we are passionate about
            serving you delicious and healthy meals made with fresh and
            high-quality ingredients.
          </p>
          <p class="mb-4">
            At Broccoli Restaurant, we believe in the power of good food to
            bring people together. Our menu is carefully crafted to offer a
            variety of options that cater to different tastes and dietary
            preferences.
          </p>
          <p>
            We pride ourselves on creating a warm and inviting atmosphere for
            our guests. Whether you're here for a quick lunch or a leisurely
            dinner, our attentive staff is dedicated to ensuring you have a
            memorable dining experience.
          </p>
        </section>
      </main>
    </div>
  );
}
