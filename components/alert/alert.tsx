import React from 'react';

const Alert = function ({ message, cmd }) {
  return (
    <div className="tw-mb-2 tw-p-2 tw-rounded-sm tw-flex tw-justify-between tw-bg-red-100 tw-text-error">
      <span>{message}</span>
      <i className="fas fa-times" onClick={cmd} />
    </div>
  );
};

export default Alert;
