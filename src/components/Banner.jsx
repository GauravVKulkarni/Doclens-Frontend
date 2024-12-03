// components/Banner.jsx
const Banner = ({text}) => {
    return (
      <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white text-left pt-40 pb-20">
        <h1 className="text-2xl font-semibold px-16 py20">{text}</h1>
      </div>
    );
  };
  
  export default Banner;