import React from "react";

const Card = ({title}) => {
  return (
    <>
      <div class="bg-white rounded-lg shadow-md mt-2 mr-2 p-6 max-w-sm">
        <img
          src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
          alt="Card Image"
          class="w-full rounded-t-lg mb-4"
        />
        <h3 class="text-xl text-gray-800 font-bold mb-2">{title}</h3>
        <p class="text-gray-700 mb-3">Card description goes here.</p>
        <a
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
        >
          Read More
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </>
  );
};

export default Card;
