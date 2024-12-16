import React from 'react';

const SignButton = ({ isReturningUser , isLoading, isDisabled }) => {
  return (
    <button
    type='submit'
      className={`flex overflow-hidden flex-col justify-center px-3 py-5 w-full text-base text-center text-white  rounded-2xl min-h-[56px]
        ${isDisabled ? 'bg-gray-400 text-gray-200 cursor-not-allowed' : 'bg-gray-800 text-white hover:[#272B35] focus:outline-none focus:ring-2 focus:ring-blue-300'}
        ${isLoading ? 'bg-blue-300' : ''}
      `}
      disabled={isDisabled}
    >
      {isLoading ? (
        <span className="flex items-center">
          <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
          Loading...
        </span>
      ) : (
        <span className="flex-1 shrink gap-2 self-stretch w-full">
          {isReturningUser  ? "ورود" : "ثبت نام"}
        </span>
      )}
    </button>
  );
};

export default SignButton;