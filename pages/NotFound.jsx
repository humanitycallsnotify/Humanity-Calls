import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-9xl font-bold text-[#B71C1C]">404</h1>
      <h2 className="text-3xl font-semibold mt-4 text-[#1A1A1A]">Page Not Found</h2>
      <p className="text-[#4A4A4A] mt-2 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/">
        <Button className="px-8 py-3">
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
