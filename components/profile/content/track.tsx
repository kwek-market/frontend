import React from 'react';
import Button from '@/components/buttons/Button';
import TextInput from '@/components/input/textInput';

const Track = function ({ activeBtn }) {
  const [track, setTrack] = React.useState<string>('');
  function checkOrder() {}
  return (
    <>
      <div className="tw-border-b tw-border-gray-500 tw-border-opacity-50">
        <h4 className="tw-text-black-stock tw-font-semibold tw-text-base md:tw-text-xl lg:tw-text-3xl">{activeBtn}</h4>
      </div>
      <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between md:tw-p-10 tw-p-3">
        <TextInput hide="tw-hidden" text="Enter tracking number" type="text" value={track} setValue={setTrack} />
        <Button
          buttonStyle="tw-p-2 tw-bg-green-success tw-rounded-sm tw-text-white-100 tw-mt-3 md:tw-mt-0"
          text="Track Order"
          cmd={checkOrder}
        />
      </div>
    </>
  );
};

export default Track;
