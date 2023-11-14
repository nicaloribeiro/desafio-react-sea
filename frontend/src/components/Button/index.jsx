const Button = ({
  text,
  transparent,
  large,
  full,
  spacing,
  className,
  ...props
}) => {
  return (
    <button
      className={`flex text-xs items-center justify-center 
      mt-${spacing} mb-${spacing}
      ${large ? "h-16" : "h-8"} 
      ${full ? "w-full" : "lg:w-1/3"}
      ${
        transparent
          ? "bg-transparent text-primary-blue border-[1px] border-solid border-primary-blue"
          : "bg-primary-blue"
      } w-full rounded-[10px] ${className}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
