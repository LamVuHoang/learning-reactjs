export function SubmitButton(props) {
  return (
    <div className={props.margin}>
      <button
        type="submit"
        className={`${props.disabled ? "bg-gray-300 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-100" : "bg-indigo-600 hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800"} inline-block px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out`}
        disabled={props.disabled}
      >
        {props.label}
      </button>
    </div>
  );
}
