import React, { Fragment } from "react";
import { NavigationComponentProps } from "react-step-builder";

interface progressTrackerProps extends NavigationComponentProps {}

const ProgressTracker: React.FC<progressTrackerProps> = props => {
  const { allSteps, current: currentStep, size: stepLength } = props;

  return (
    <section className='tw-bg-white-100 tw-py-10 tw-px-0 md:tw-px-[10rem] lg:tw-flex tw-justify-around tw-items-center tw-rounded-md tw-overflow-auto'>
      {allSteps.map(({ title }, index) => {
        const currentProgress = currentStep - 1 > index;

        const iconTheme = currentProgress
          ? "tw-border-green-success tw-text-green-success"
          : "tw-border-brown-kwek400 tw-border-2";
        const textTheme = currentProgress
          ? "tw-text-green-success"
          : currentStep === index + 1
          ? "tw-text-black"
          : "tw-text-gray-kwek400";
        const barTheme = currentProgress ? "tw-border-green-success" : "tw-border-gray-kwek400";

        return (
          <Fragment key={title}>
            <div className='tw-flex tw-flex-col tw-items-center tw-text-center tw-relative tw-mb-5'>
              <div className={`tw-border-solid tw-rounded-full tw-h-7 tw-w-7 ${iconTheme} `}>
                {currentProgress && (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='tw-w-7 tw-h-7'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clipRule='evenodd'
                    />
                  </svg>
                )}
              </div>
              <p
                className={`tw-text-xs tw-font-medium ${textTheme} ${
                  index === 0 ? "tw-mr-2" : "tw-mr-0"
                } tw-absolute tw-top-7 tw-truncate`}
              >
                {title}
              </p>
            </div>

            {index + 1 < stepLength && (
              <>
                <div
                  className={`tw-hidden lg:tw-block lg:tw-w-full ${barTheme} tw-border-b-4 tw-border-dotted tw-mb-5 tw-opacity-50`}
                ></div>
                <div
                  className={`tw-block lg:tw-hidden  ${barTheme} tw-mb-1 tw-opacity-50 tw-flex tw-justify-center tw-items-center`}
                >
                  <div
                    className={`${barTheme} tw-border-r-4 tw-w-1 lg:tw-w-full tw-h-3 tw-border-dotted`}
                  ></div>
                </div>
              </>
            )}
          </Fragment>
        );
      })}
    </section>
  );
};

export default ProgressTracker;
