import React from 'react';
import { Button } from './ui/button';

type Props = {
  open: boolean;
  onToggle: () => void;
  title: string;
  titlePlaceholder: string;
  onRemoveClick: () => void;
  removeText: string;
};

function AccordianHeader({
  onToggle,
  open,
  title,
  onRemoveClick,
  titlePlaceholder,
  removeText,
}: Props) {
  return (
    <div
      className={`flex items-center justify-between cursor-pointer ${
        open ? 'border-b pb-2' : ''
      }`}
      onClick={onToggle}>
      <p
        className={`text-[14px] ${
          title === '' ? 'text-slate-500' : 'text-black font-semibold'
        }`}>
        {title === '' ? titlePlaceholder : title}
      </p>
      <div className="flex items-center gap-4">
        <Button variant="destructive" onClick={onRemoveClick}>
          {removeText}
        </Button>
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </div>
    </div>
  );
}

export default AccordianHeader;
