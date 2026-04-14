const MaxWidth = ({ children, customClass = "" }) => {
  return (
    <div
      className={`max-w-[1390px] 2xl:max-w-[1250px] m-auto xl:max-w-full xl:px-[30px] lg:px-[20px] md:px-[0px]  ${customClass}`}
    >
      {children}
    </div>
  );
};

export default MaxWidth;
