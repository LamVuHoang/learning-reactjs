import "./style.css";

const index = (props) => {
  const years = [...new Set(props.data.map((item) => item.date.getFullYear()))];

  const handleSelect = (event) => {
    props.setChosenYear(event.target.value.toString());
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.chosenYear} onChange={handleSelect}>
          {years.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default index;
