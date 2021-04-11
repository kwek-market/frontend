import React, { useState, useEffect } from "react";
import Link from "next/link";

interface Selected {
  id: number;
  value: string;
  url: string;
  action: () => void;
}

const Dropdown = ({ options, className }: any) => {
  const [selected, setSelected] = useState<Selected>();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setSelected(options[0]);
  }, []);

  if (!selected) {
    return (
      <div className="dropdown">
        <button>loading...</button>
      </div>
    );
  }

  const onClick = (option: any) => {
    setSelected(option);
    setExpanded(false);
    option.action();
  };

  return (
    <div className="dropdown">
      <button
        className={`dropdown__btn ${className}`}
        onClick={() => setExpanded(!expanded)}
      >
        {selected.value}{" "}
        {!expanded ? (
          <i className="fas fa-chevron-down"></i>
        ) : (
          <i className="fas fa-chevron-up"></i>
        )}
      </button>

      {expanded && (
        <ul className="dropdown__menu">
          {options.map((option: any, index: number) => (
            <li
              key={index}
              className={`dropdown__item ${
                index === selected.id && "dropdown__item--selected"
              }`}
              onClick={() => onClick(option)}
            >
              <Link href={option.url}>
                <a className="dropdown__link">{option.value}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
