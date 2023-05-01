
export function SideMenu() {
  return (
    <div>
      <div className="border grid grid-rows-1 grid-cols-3 fixed bottom-0 z-50 w-[calc(100vw-12px)]  lg:hidden">
        <div className="bg-stone-500">
          <li className="py-3 pl-2 pr-2 items-center grid-flow-col  border-r-[1px] hover:bg-stone-400 flex sm:pl-12">
            <div className="w-10 h-10 bg-white ml-2 mr-2 rounded-lg "></div>
            <p className="font-serif text-xs text-white">ユサンチェって？</p>
          </li>
        </div>
        <div className="bg-stone-500">
          <li className="py-3 pl-2 pr-2 items-center grid-flow-col  border-r-[1px]  flex sm:pl-12">
            <div className="w-10 h-10 bg-white ml-2 mr-2 rounded-lg"></div>
            <p className="font-serif text-xs text-white">商品ラインナップ</p>
          </li>
        </div>
        <div className="bg-stone-500">
          <li className="py-3 pl-2 pr-2 items-center grid-flow-col  border-r-[1px] hover:bg-stone-400 flex sm:pl-12">
            <div className="w-10 h-10 bg-white ml-2 mr-2 rounded-lg"></div>
            <p className="font-serif text-xs text-white">ご利用までの流れ</p>
          </li>
        </div>
      </div>

    </div>
  );
}
