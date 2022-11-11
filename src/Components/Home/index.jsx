import foodList from "../../food.json";
import Item from "./Item";

export default function index() {
  return (
    <div className="bg-black h-max">
      <div className="">abc</div>
      <div className="bg-white rounded-3xl md:ml-auto md:mr-auto md:w-1/2">
        <div className="p-6">
          {foodList.map((item) => {
            return (
              <div key={item.id}>
                <Item item={item} />
                <div className="border-t-2 border-gray-200 pt-2"></div>
              </div>
            );
          })}
        </div>
      </div>
      <div>asd</div>
    </div>
  );
}
