export function Input(props) {
  return (
    <>
      <div className={props.margin}>
        <input
          type={props.type}
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
        />
        <div className="text-red-500">{props.error}</div>
      </div>
    </>
  );
}
