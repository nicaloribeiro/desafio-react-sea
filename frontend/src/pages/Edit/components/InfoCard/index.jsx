import personIcon from "/src/assets/person.svg";
const InfoCard = () => {
  return (
    <div className="relative lg:pb-[60px] mt-5 lg:mt-0 lg:w-1/3">
      <div className="bg-white shadow-sm rounded-[20px] z-0 h-[484px] lg:h-full lg:w-full px-[15px] pt-[26px]">
        <p className="text-[#707070] text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit
          suscipit porttitor. Suspendisse ex lorem, rhoncus nec ante eu,
          venenatis aliquam turpis. Nulla facilisi. Curabitur nec mattis dolor.
          Nulla finibus bibendum ligula tempus vehicula. Ut at tristique libero,
          nec efficitur dui. Aliquam erat volutpat. Fusce quam sem, tempus nec
          justo eget, luctus scelerisque velit. Nam sollicitudin purus urna,
          vitae ornare neque tincidunt vel. Proin ac lacinia erat, et commodo
          felis. Phasellus tempor tellus eu vulputate tempus.
        </p>
      </div>
      <img
        className="absolute z-20 bottom-0 w-36 h-40 ml-[21px]"
        src={personIcon}
      />
    </div>
  );
};
export default InfoCard;
