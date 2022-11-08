import Row from "./Row";
export default function index(props) {
  const filter = props.data.filter((item) => {
    return item.date.getFullYear() == props.chosenYear;
  });
  return (
    <>
      {filter.map((item) => {
        return (
          <Row
            key={item.id}
            date={item.date}
            title={item.title}
            price={item.price}
          />
        );
      })}
    </>
  );
}
