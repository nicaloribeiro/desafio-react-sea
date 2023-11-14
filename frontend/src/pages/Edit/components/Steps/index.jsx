import { formSteps } from "./helper";

const FormSteps = ({ currentStep, storeSteps }) => {
  return (
    <div className="flex flex-wrap items-center justify-around min-h-[160px] bg-white rounded-[20px] py-4 px-6 lg:py-0">
      {formSteps.map((stepEl, index) => (
        <div
          key={`${stepEl.name}-${index}`}
          className="flex flex-col items-center z-20 p-2 lg:p-0"
        >
          <div
            className={`flex items-center justify-center w-12 h-12 lg:h-[70px] lg:w-[70px] rounded-lg lg:rounded-[20px] bg-primary-blue z-20 shadow-md shadow-gray-500 ${
              stepEl.step === currentStep &&
              "border-solid border-2 border-blue-600"
            }`}
          >
            <img src={stepEl.icon} className="h-4 w-4 lg:h-8 lg:w-8" />
          </div>
          <div className="flex flex-col items-center justify-start h-12">
            <p className="text-primary-blue mt-2 text-xs">{stepEl.name}</p>
            {storeSteps[stepEl.step]?.isDone && (
              <p className="text-primary-blue text-xs">CONCLUÍDO</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FormSteps;
