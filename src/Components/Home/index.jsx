import foodList from "../../food.json";

export default function index() {
  return (
    <div className="bg-black h-max">
      <div className="">abc</div>
      <div className="bg-white rounded-3xl md:ml-auto md:mr-auto md:w-1/2">
        <div className="p-6">
          {foodList.map((item) => {
            return (
              <div key={item.id}>
                <div className="flex pb-3">
                  <div className="grow">
                    <div className="text-xl font-bold pb-1">{item.title}</div>
                    <div className="text-xs font-serif italic">
                      {item.content}
                    </div>
                    <div className="text-amber-700 font-bold">
                      ${item.price}
                    </div>
                  </div>
                  <div className="mr-0 ml-auto">
                    <div className="flex w-auto text-right">
                      <span className="pr-2 font-bold">Amount</span>
                      <span>
                        <input
                          className="w-10 rounded-sm text-center border border-gray-300"
                          type="text"
                          defaultValue="1"
                        />
                      </span>
                    </div>
                    <div className="text-right pt-2">
                      <button className="border bg-amber-700 p-2 pl-6 pr-6 rounded-xl font-bold text-white text-xs">
                        + Add
                      </button>
                    </div>
                  </div>
                </div>
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
