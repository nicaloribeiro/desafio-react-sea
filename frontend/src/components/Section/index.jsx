const Section = ({ children, className, ...props }) => {
  return (
    <div
      className={`w-full h-auto flex flex-wrap items-center justify-center lg:justify-between p-2 border-[1px] border-solid border-primary-blue rounded-[20px] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
export default Section;
