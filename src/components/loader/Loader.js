import React, { useState , useEffect } from 'react'

const Loader = () => {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay for demonstration purposes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="wpa-loader-main">
        {/* You can customize the loader here */}
        <div className="wpa-loader"></div>
      </div>
    );
  }
  return (
    <div>
      
    </div>
  )
}

export default Loader

