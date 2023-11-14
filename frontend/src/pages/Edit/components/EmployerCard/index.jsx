import { formatCpf } from "/src/utils/formatString";
import DetailCard from "../DetailCard";

const EmployerCard = ({ employer, ...props }) => {
  return (
    <div
      {...props}
      className="flex justify-between my-2 w-full bg-[#EDF1F5] rounded-[10px] min-h-20"
    >
      <div className="flex flex-col w-full p-2">
        <p className="text-[#707070]">{employer.name}</p>
        <div className="flex flex-wrap items-center justify-start w-full p-2">
          <DetailCard info={formatCpf(employer.cpf)} />
          {employer.activities.map((activity, index) => (
            <DetailCard
              key={`${activity.activity}-${index}`}
              info={activity.activity}
              className="m-2"
            />
          ))}
          <DetailCard info={employer.role} />
        </div>
      </div>
      <div className="flex justify-center items-center font-bold bg-primary-blue rounded-r-[10px] h-auto w-12">
        ...
      </div>
    </div>
  );
};

export default EmployerCard;
