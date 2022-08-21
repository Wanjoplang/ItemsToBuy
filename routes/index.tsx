/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import AddItem from "../islands/AddItem.tsx";

export default function Home(){
  return (
    <div class={tw`mx-auto max-w-screen-md`}>
      <AddItem itemname="" quantity={0} unit=""/>
    </div>
  );
}
