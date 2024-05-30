import React, { memo } from "react";

const InputForm = ({
  label,
  value,
  setValue,
  keyObject,
  invalidFields,
  setInvalidFields,
  type,
}) => {
  return (
    <div>
      <label htmlFor="phone" className="text-xs">
        {label}
      </label>
      <input
        type={type}
        id="phone"
        className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
        onChange={(e) =>
          setValue((pre) => ({ ...pre, [keyObject]: e.target.value }))
        }
        onFocus={() => setInvalidFields("")}
      />
      {invalidFields.length > 0 &&
        invalidFields.some((item) => item.name === keyObject) && (
          <small className="text-red-500 italic">
            {invalidFields.find((i) => i.name === keyObject)?.message}
          </small>
        )}
    </div>
  );
};

export default memo(InputForm);
