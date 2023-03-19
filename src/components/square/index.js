import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { saveSvg } from "../../functions/generateSVG";

const style = {
  stroke: "#fa9668",
  strokeWidth: "1px",
};

const SguareChart = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState();

  const onSubmit = (data) => {
    setOpen(true);
    setData(data);
  };

  return (
    <div className="sguare-box">
      <div className="sguare-box-button">
        {/* <button >draw</button> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          Length:
          <input
            type="text"
            {...register("length", { required: true })}
            onChange={() => setOpen(false)}
          />
          Width:
          <input
            type="text"
            {...register("width", { required: true })}
            onChange={() => setOpen(false)}
          />
          Heigh:
          <input
            type="text"
            {...register("heigh", { required: true })}
            onChange={() => setOpen(false)}
          />
          <button type="submit" className="ms-2">
            Create
          </button>
        </form>
        <button
          onClick={() => {
            saveSvg("sguare", "sguare.svg");
          }}
          disabled={!open}
        >
          Download
        </button>
      </div>
      {/* 
      90*140*60 (mm)
      */}
      {open && data && (
        <div>
          <svg width="600" height="800" id="sguare">
            {/* 身體最大塊 */}
            <line
              x1={5 + 0}
              y1={5 + (10 + parseInt(data.heigh))}
              x2={5 + (parseInt(data.heigh) * 2 + parseInt(data.width) * 2)}
              y2={5 + (10 + parseInt(data.heigh))}
              style={style}
            ></line>
            <line
              x1={5 + (parseInt(data.heigh) * 2 + parseInt(data.width) * 2)}
              y1={5 + (10 + parseInt(data.heigh))}
              x2={5 + (parseInt(data.heigh) * 2 + parseInt(data.width) * 2)}
              y2={5 + (10 + parseInt(data.heigh) + parseInt(data.length))}
              style={style}
            ></line>
            <line
              x1={5 + (parseInt(data.heigh) * 2 + parseInt(data.width) * 2)}
              y1={5 + (10 + parseInt(data.heigh) + parseInt(data.length))}
              x2={5 + 0}
              y2={5 + (10 + parseInt(data.heigh) + parseInt(data.length))}
              style={style}
            ></line>
            <line
              x1={5 + 0}
              y1={5 + (10 + parseInt(data.heigh) + parseInt(data.length))}
              x2={5 + 0}
              y2={5 + (10 + parseInt(data.heigh))}
              style={style}
            ></line>

            {/* three line */}
            <line
              x1={5 + parseInt(data.heigh)}
              y1={5 + (10 + parseInt(data.heigh))}
              x2={5 + parseInt(data.heigh)}
              y2={5 + (10 + parseInt(data.heigh) + parseInt(data.length))}
              style={style}
            ></line>
            <line
              x1={5 + parseInt(data.heigh) + parseInt(data.width)}
              y1={5 + (10 + parseInt(data.heigh))}
              x2={5 + parseInt(data.heigh) + parseInt(data.width)}
              y2={5 + (10 + parseInt(data.heigh) + parseInt(data.length))}
              style={style}
            ></line>
            <line
              x1={
                5 +
                parseInt(data.heigh) +
                parseInt(data.width) +
                parseInt(data.heigh)
              }
              y1={5 + (10 + parseInt(data.heigh))}
              x2={
                5 +
                parseInt(data.heigh) +
                parseInt(data.width) +
                parseInt(data.heigh)
              }
              y2={5 + (10 + parseInt(data.heigh) + parseInt(data.length))}
              style={style}
            ></line>

            {/* 最左邊耳朵 */}
            <line
              x1={5 + 0}
              y1={5 + (10 + parseInt(data.heigh))}
              x2={5 + 20}
              y2={5 + (10 + parseInt(data.heigh) - 20)}
              style={style}
            ></line>
            <line
              x1={5 + 20}
              y1={5 + (10 + parseInt(data.heigh) - 20)}
              x2={5 + (parseInt(data.heigh) - 5)}
              y2={5 + (parseInt(data.heigh) + 10 - 20)}
              style={style}
            ></line>
            <line
              x1={5 + (parseInt(data.heigh) - 5)}
              y1={5 + (10 + parseInt(data.heigh) - 20)}
              x2={5 + (parseInt(data.heigh) - 5)}
              y2={5 + (parseInt(data.heigh) + 10 - 20 + 15)}
              style={style}
            ></line>
            <line
              x1={5 + (parseInt(data.heigh) - 5)}
              y1={5 + (parseInt(data.heigh) + 10 - 20 + 15)}
              x2={5 + parseInt(data.heigh)}
              y2={5 + (parseInt(data.heigh) + 10)}
              style={style}
            ></line>

            {/* top block */}
            <line
              x1={5 + parseInt(data.heigh)}
              y1={5 + (parseInt(data.heigh) + 10)}
              x2={5 + parseInt(data.heigh)}
              y2={5 + 0}
              style={style}
            ></line>
            <line
              x1={5 + parseInt(data.heigh)}
              y1={5 + 0}
              x2={5 + parseInt(data.heigh) + parseInt(data.width)}
              y2={5 + 0}
              style={style}
            ></line>
            <line
              x1={5 + parseInt(data.heigh) + parseInt(data.width)}
              y1={5 + 0}
              x2={5 + parseInt(data.heigh) + parseInt(data.width)}
              y2={5 + (10 + parseInt(data.heigh))}
              style={style}
            ></line>
            <line
              x1={5 + parseInt(data.heigh)}
              y1={5 + 10}
              x2={5 + (parseInt(data.heigh) + parseInt(data.width))}
              y2={5 + 10}
              style={style}
            ></line>

            {/* right ear */}
            <line
              x1={5 + (parseInt(data.heigh) + parseInt(data.width))}
              y1={5 + (10 + parseInt(data.heigh))}
              x2={5 + (parseInt(data.heigh) + parseInt(data.width) + 5)}
              y2={5 + (10 + parseInt(data.heigh) - 5)}
              style={style}
            ></line>
            <line
              x1={5 + (parseInt(data.heigh) + parseInt(data.width) + 5)}
              y1={5 + (10 + parseInt(data.heigh) - 5)}
              x2={5 + (parseInt(data.heigh) + parseInt(data.width) + 5)}
              y2={5 + (10 + parseInt(data.heigh) - 20)}
              style={style}
            ></line>
            <line
              x1={5 + (parseInt(data.heigh) + parseInt(data.width) + 5)}
              y1={5 + (10 + parseInt(data.heigh) - 20)}
              x2={
                5 +
                (parseInt(data.heigh) +
                  parseInt(data.width) +
                  (parseInt(data.heigh) - 20))
              }
              y2={5 + (10 + parseInt(data.heigh) - 20)}
              style={style}
            ></line>
            <line
              x1={
                5 +
                (parseInt(data.heigh) +
                  parseInt(data.width) +
                  (parseInt(data.heigh) - 20))
              }
              y1={5 + (10 + parseInt(data.heigh) - 20)}
              x2={
                5 +
                (parseInt(data.heigh) +
                  parseInt(data.width) +
                  parseInt(data.heigh))
              }
              y2={5 + (10 + parseInt(data.heigh))}
              style={style}
            ></line>

            {/* most of right ear body */}
            <line
              x1={5 + (parseInt(data.heigh) * 2 + parseInt(data.width) * 2)}
              y1={5 + (10 + parseInt(data.heigh))}
              x2={
                5 + (parseInt(data.heigh) * 2 + parseInt(data.width) * 2 + 10)
              }
              y2={5 + (10 + parseInt(data.heigh) + 10)}
              style={style}
            ></line>
            <line
              x1={
                5 + (parseInt(data.heigh) * 2 + parseInt(data.width) * 2 + 10)
              }
              y1={5 + (10 + parseInt(data.heigh) + 10)}
              x2={
                5 + (parseInt(data.heigh) * 2 + parseInt(data.width) * 2 + 10)
              }
              y2={
                5 + (10 + parseInt(data.heigh) + (parseInt(data.length) - 10))
              }
              style={style}
            ></line>
            <line
              x1={
                5 + (parseInt(data.heigh) * 2 + parseInt(data.width) * 2 + 10)
              }
              y1={
                5 + (10 + parseInt(data.heigh) + (parseInt(data.length) - 10))
              }
              x2={5 + (parseInt(data.heigh) * 2 + parseInt(data.width) * 2)}
              y2={5 + (10 + parseInt(data.heigh) + parseInt(data.length))}
              style={style}
            ></line>

            {/*one of bottom ears */}
            <line
              x1={5 + 0}
              y1={5 + (10 + parseInt(data.heigh) + parseInt(data.length))}
              x2={5 + 10}
              y2={5 + (10 + parseInt(data.heigh) + parseInt(data.length) + 10)}
              style={style}
            ></line>
            <line
              x1={5 + 10}
              y1={5 + (10 + parseInt(data.heigh) + parseInt(data.length) + 10)}
              x2={5 + 10}
              y2={5 + (10 + parseInt(data.heigh) + parseInt(data.length) + 20)}
              style={style}
            ></line>
            <line
              x1={5 + 10}
              y1={5 + (10 + parseInt(data.heigh) + parseInt(data.length) + 20)}
              x2={5 + (parseInt(data.heigh) - 2)}
              y2={5 + (10 + parseInt(data.heigh) + parseInt(data.length) + 20)}
              style={style}
            ></line>
            <line
              x1={5 + (parseInt(data.heigh) - 2)}
              y1={5 + (10 + parseInt(data.heigh) + parseInt(data.length) + 20)}
              x2={5 + (parseInt(data.heigh) - 2)}
              y2={5 + (10 + parseInt(data.heigh) + parseInt(data.length))}
              style={style}
            ></line>

            {/*two of bottom ears */}
            <line
              x1={5 + (parseInt(data.heigh) + 2)}
              y1={5 + (10 + parseInt(data.heigh) + parseInt(data.length))}
              x2={5 + (parseInt(data.heigh) + 2)}
              y2={5 + (10 + parseInt(data.heigh) + parseInt(data.length) + 20)}
              style={style}
            ></line>
            <line
              x1={5 + (parseInt(data.heigh) + 2)}
              y1={5 + (10 + parseInt(data.heigh) + parseInt(data.length) + 20)}
              x2={5 + (parseInt(data.heigh) + (parseInt(data.width) - 2))}
              y2={5 + (10 + parseInt(data.heigh) + parseInt(data.length) + 20)}
              style={style}
            ></line>
            <line
              x1={5 + (parseInt(data.heigh) + (parseInt(data.width) - 2))}
              y1={5 + (10 + parseInt(data.heigh) + parseInt(data.length) + 20)}
              x2={5 + (parseInt(data.heigh) + (parseInt(data.width) - 2))}
              y2={5 + (10 + parseInt(data.heigh) + parseInt(data.length))}
              style={style}
            ></line>

            {/*three of bottom ears */}
            <line
              x1={5 + (parseInt(data.heigh) + parseInt(data.width) + 2)}
              y1={5 + (10 + parseInt(data.heigh) + parseInt(data.length))}
              x2={5 + (parseInt(data.heigh) + parseInt(data.width) + 2)}
              y2={5 + (10 + parseInt(data.heigh) + parseInt(data.length) + 20)}
              style={style}
            ></line>
            <line
              x1={5 + (parseInt(data.heigh) + parseInt(data.width) + 2)}
              y1={5 + (10 + parseInt(data.heigh) + parseInt(data.length) + 20)}
              x2={
                5 +
                (parseInt(data.heigh) +
                  parseInt(data.width) +
                  (parseInt(data.heigh) - 2))
              }
              y2={5 + (10 + parseInt(data.heigh) + parseInt(data.length) + 20)}
              style={style}
            ></line>
            <line
              x1={
                5 +
                (parseInt(data.heigh) +
                  parseInt(data.width) +
                  (parseInt(data.heigh) - 2))
              }
              y1={5 + (10 + parseInt(data.heigh) + parseInt(data.length) + 20)}
              x2={
                5 +
                (parseInt(data.heigh) +
                  parseInt(data.width) +
                  (parseInt(data.heigh) - 2))
              }
              y2={5 + (10 + parseInt(data.heigh) + parseInt(data.length))}
              style={style}
            ></line>

            {/*four of bottom ears */}
            <line
              x1={5 + (parseInt(data.heigh) * 2 + parseInt(data.width) + 2)}
              y1={5 + (10 + parseInt(data.heigh) + parseInt(data.length))}
              x2={5 + (parseInt(data.heigh) * 2 + parseInt(data.width) + 2)}
              y2={5 + (10 + parseInt(data.heigh) + parseInt(data.length) + 20)}
              style={style}
            ></line>
            <line
              x1={5 + (parseInt(data.heigh) * 2 + parseInt(data.width) + 2)}
              y1={5 + (10 + parseInt(data.heigh) + parseInt(data.length) + 20)}
              x2={
                5 +
                (parseInt(data.heigh) * 2 +
                  parseInt(data.width) +
                  (parseInt(data.width) - 2))
              }
              y2={5 + (10 + parseInt(data.heigh) + parseInt(data.length) + 20)}
              style={style}
            ></line>
            <line
              x1={
                5 +
                (parseInt(data.heigh) * 2 +
                  parseInt(data.width) +
                  (parseInt(data.width) - 2))
              }
              y1={5 + (10 + parseInt(data.heigh) + parseInt(data.length) + 20)}
              x2={
                5 +
                (parseInt(data.heigh) * 2 +
                  parseInt(data.width) +
                  (parseInt(data.width) - 2))
              }
              y2={5 + (10 + parseInt(data.heigh) + parseInt(data.length))}
              style={style}
            ></line>
          </svg>
        </div>
      )}
    </div>
  );
};

export default SguareChart;
