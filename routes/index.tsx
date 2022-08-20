/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
// import Counter from "../islands/Counter.tsx";

// export default function Home() {
//   return (
//     <div class={tw`p-4 mx-auto max-w-screen-md`}>
//       <img
//         src="/logo.svg"
//         height="100px"
//         alt="the fresh logo: a sliced lemon dripping with juice"
//       />
//       <p class={tw`my-6`}>
//         Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
//         file, and refresh.
//       </p>
//       <Counter start={3} />
//     </div>
//   );
// }

export default function Home(){
  return (
    <div class={tw`mx-auto max-w-screen-md`}>
      <nav class={tw`p-4 bg-green-100 fixed right-0 bottom-0 left-0 overflow-auto`}>
        <div class={tw`flex items-center justify-between mb-1`}>
          <span class={tw`font-semibold text-lg`}>Items To Buy</span>
          <button class={tw`text-xs bg-green-400 py-2 px-4 rounded shadow-md font-semibold`}>ADD</button>
        </div>
        <div class={tw`flex`}>
          <div class={tw`w-8/12 mr-2`}>
            <label class={tw`text-xs text-green-500`} htmlFor="item-name">Item Name</label>
            <input class={tw`bg-transparent border-1 border-green-300 rounded w-full p-2 outline-none`} type="search" id="item-name"/>
          </div>
          <div class={tw`w-2/12 mr-2`}>
            <label class={tw`text-xs text-green-500`} htmlFor="quantity">Quantity</label>
            <input class={tw`bg-transparent border-1 border-green-300 rounded w-full p-2 outline-none`} type="number" id="quantity"/>
          </div>
          <div class={tw`w-2/12`}>
            <label class={tw`text-xs text-green-500`} htmlFor="unit">Unit</label>
            <input class={tw`bg-transparent border-1 border-green-300 rounded w-full p-2 outline-none`} type="search" id="unit"/>
          </div>
        </div>
      </nav>
    </div>
  );
}
