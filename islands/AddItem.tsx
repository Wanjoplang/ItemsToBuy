/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import { tw } from '@twind'

const items: {itemname: string, quantity: number, unit: string}[] = [];

interface AddItemProps{
    itemname: string;
    quantity: number;
    unit: string;
}

export default function AddItem(props: AddItemProps){
    const [itemname, setItemName] = useState(props.itemname);
    const [quantity, setQuantity] = useState(props.quantity);
    const [unit, setUnit] = useState(props.unit);
    return (
        <div class={tw`flex justify-between flex-col h-screen`}>
            <div class={tw`p-4`}>
                <p hidden>{itemname}{quantity}{unit}</p>
                <div class={tw`text-lg font-semibold my-3`}>List of Items</div>
                {
                    items.map((item, index)=>{
                        return(
                            <div class={tw`flex justify-between items-center p-2 bg-gray-100 border-2 rounded mb-4`} id={index+"_id"}>
                                <div class={tw`flex gap-2`}>
                                    <span>{item.itemname}</span>
                                    <span>{item.quantity}</span>
                                    <span>{item.unit}</span>
                                </div>
                                <button data-key={index} class={tw`text-xs bg-red-400 p-2 text-white font-semibold rounded`} onClick={(e)=>{
                                    const key = e.currentTarget.dataset.key;
                                    items.splice(key,1);
                                    document.getElementById(key+"_id")?.remove();
                                }}>Remove</button>
                            </div>
                        );
                    })
                }   
            </div>
            <nav class={tw`p-4 bg-green-100 sticky bottom-0`}>
                <div class={tw`flex items-center justify-between mb-1`}>
                    <span class={tw`font-semibold text-lg`}>Items To Buy</span>
                    <button class={tw`text-xs bg-green-400 py-2 px-4 rounded shadow-md font-semibold`} onClick={()=>{
                        let itemname = "", quantity = 0, unit = "";
                        document.querySelectorAll('input').forEach(input=>{
                            if(input.id === "itemname"){
                                itemname = input.value;
                            }else if(input.id === "quantity"){
                                quantity = parseInt(input.value);
                            }else if(input.id === "unit"){
                                unit = input.value;
                            }
                        });
                        setItemName(itemname);
                        setQuantity(quantity);
                        setUnit(unit);
                        items.push({itemname, quantity, unit});

                        document.querySelectorAll('input').forEach(input=>{
                            input.value = "";
                            console.log(input.id);
                        })
                    }}>ADD</button>
                </div>
                <div class={tw`flex`}>
                    <div class={tw`w-8/12 mr-2`}>
                        <label class={tw`text-xs text-green-500`} htmlFor="itemname">Item Name</label>
                        <input class={tw`bg-transparent border-1 border-green-300 rounded w-full p-2 outline-none`} type="search" id="itemname"/>
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