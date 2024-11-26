

const _Box = ({ children, bgColor = 'bg-gray-200', marginTop = 'mt-0', marginBottom = 'mb-0' }) => {
    return (
      <div className={`max-w-[1312px] w-full h-[880px] ${bgColor} ${marginTop} ${marginBottom} rounded-[40px] opacity-100 mx-[64px] shadow-lg p-4 overflow-auto`}>
        {children}
      </div>
    );
  };
  
  export default _Box;