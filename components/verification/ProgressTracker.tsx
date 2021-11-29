import React from 'react';
import { NavigationComponentProps } from 'react-step-builder';
import Style from './tracker.module.scss';

interface progressTrackerProps extends NavigationComponentProps {}

const ProgressTracker: React.FC<progressTrackerProps> = props => {
  const { allSteps, current: currentStep } = props;

  return (
    <section className="tw-bg-white-100 tw-py-10 tw-px-2 md:tw-px-8 tw-flex tw-justify-between tw-rounded-md">
      {allSteps.map(({ title }, index) => {
        const iconTheme =
          index >= currentStep
            ? 'tw-border-brown-kwek400'
            : 'tw-border-green-success tw-bg-green-success';
        const textTheme = index < currentStep && 'tw-text-green-success';
        const barTheme =
          index >= currentStep
            ? 'tw-border-gray-kwek400'
            : 'tw-border-green-success tw-bg-green-success';
        return (
          <>
            <div
              key={index}
              className="tw-flex tw-flex-col tw-items-center tw-flex-1 tw-text-center"
            >
              <div
                className={`tw-border-2 tw-border-solid tw-rounded-full tw-h-7 tw-w-7${iconTheme}`}
              ></div>
              <p className={`tw-text-xs tw-font-medium tw-mt-2 ${textTheme}`}>
                {title}
              </p>
            </div>
            {/* <div className="tw-border-b-2 tw-border-dotted tw-border-gray-kwek100 tw-opacity-50 tw-w-[100%]"></div> */}
          </>
        );
      })}
    </section>
  );
};

export default ProgressTracker;
