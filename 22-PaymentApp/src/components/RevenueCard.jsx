export const RevenueCard = ({ title, orderCount, amount }) => {
  return (
    <div className="bg-white rounded shadow-sm">
      <div className="flex">
        <div>{title}</div>
        <div className = "flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="w-3 h-3"
          >
            <path
              fill-rule="evenodd"
              d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-6 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7.293 5.293a1 1 0 1 1 .99 1.667c-.459.134-1.033.566-1.033 1.29v.25a.75.75 0 1 0 1.5 0v-.115a2.5 2.5 0 1 0-2.518-4.153.75.75 0 1 0 1.061 1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="font-bold">Rs {amount}</div>
        {orderCount ? (
          <div className="flex">
            <div className="bg-blue-700 cursor-pointer">
              {orderCount} order(s)
            </div>
            <svg
              className="fill-blue-700 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
          </div>
        ) : null}
      </div>
    </div>
  );
};
