import * as React from "react";

export function PasswordInput({ label, showHint }) {
  return (
    <div className="flex flex-col justify-center w-full">
      <label htmlFor={`password-${label}`} className="flex-1 shrink gap-2 self-stretch px-1 w-full text-base font-extralight text-right text-gray-700">
        {label}
      </label>
      <div className="flex gap-2.5 items-center px-2.5 py-2 mt-3 w-full rounded-2xl bg-neutral-100 min-h-[56px]">
        <div className="flex gap-2 justify-center items-center self-stretch p-2 my-auto w-10">
          <img
            loading="lazy"
            src="/Images/lockIcon.png"
            alt="lockIcon"
            className="object-contain self-stretch my-auto w-6 aspect-square"
          />
        </div>
        <input
          type="password"
          id={`password-${label}`}
          className="flex-1 shrink gap-2 self-stretch my-auto text-base font-extralight bg-transparent border-none outline-none min-w-[240px] text-neutral-300"
          placeholder="********"
          aria-label={label}
        />
        <div className="flex gap-2 justify-center items-center self-stretch p-2 my-auto w-10">
          <img
            loading="lazy"
            src="/Images/EyeIcon.png"
            alt="EyeIcon"
            className="object-contain self-stretch my-auto w-6 aspect-square"
          />
        </div>
      </div>
      {showHint && (
        <div className="flex-1 shrink gap-2 self-stretch px-1 mt-3 w-full text-xs font-extralight text-right text-slate-500">
          شامل حداقل ۸ کاراکتر،‌ حروف بزرگ و کوچک و اعداد.
        </div>
      )}
    </div>
  );
}