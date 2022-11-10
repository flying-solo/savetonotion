import { data } from "../assets/data.json";

function SocialMedia() {
  console.log(data);
  return (
    <div className="mx-5 w-1/4 bg-slate-400 p-5">
      <h3 className="text-center text-xl font-bold">Social Media</h3>
      {data.map((item, key) => {
        return (
          <div key={key} className=" mt-5">
            <h3 className="text-lg font-semibold p-3 bg-slate-600 shadow-xl text-white rounded-md">
              {item.media}
            </h3>
            <div className="ml-5 text-base font-semibold text-black rounded-md flex flex-col gap-4 mt-5">
              {item.userName.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="p-3 bg-orange-600 shadow-xl rounded-md draggable"
                  >
                    {item.user}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SocialMedia;
