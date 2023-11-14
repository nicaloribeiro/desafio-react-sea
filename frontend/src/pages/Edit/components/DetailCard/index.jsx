const DetailCard = ({ info, className, ...props }) => {
  return (
    <div
      className={`flex items-center justify-center w-auto h-auto p-1 text-xs bg-primary-blue rounded-[36px] ${className}`}
      {...props}
    >
      {info}
    </div>
  );
};
export default DetailCard;
