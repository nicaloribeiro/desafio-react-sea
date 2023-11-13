const EmptyMessage = ({ message }) => {
  return (
    <div className="w-full flex justify-center items-center h-[55px] rounded-[20px] bg-primary-blue text-white text-center text-xl">
      {message}
    </div>
  );
};

export default EmptyMessage;
