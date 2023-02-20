import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import Currency from "react-currency-formatter"
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsWithId } from '../features/BasketSlice'

const DishRow = ({id, name, image, price, descrption}) => {
    const [isPressed, setIsPressed] = useState(false)
    const dispatch = useDispatch()
    const items = useSelector(state => selectBasketItemsWithId(state, id))

    const addItemToBasket = () => {
        dispatch(addToBasket({id, name, image, price, descrption}))
    }
    const removeItemFromBasket = () => {
        if(items.length>0) dispatch(removeFromBasket({id}))
    }
  return (
    <TouchableOpacity onPress={()=>setIsPressed(!isPressed)} className={`bg-white  p-4  border-t border-gray-200 `}>
        <View className="flex-row">
        <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{descrption}</Text>
            <Text className="text-gray-400 mt-2">
                <Currency quantity={price} currency="EUR"/>
            </Text>
      </View>
      <View>
        <Image 
            source={{url:image}}
            className="h-20 w-20 bg-gray-300 p-4"
            style={{
                borderWidth: 1,
                borderColor: "#F3F3F4"
            }}
        />
      </View>
      </View>
      {isPressed&&
        <View className="bg-white mt-6">
            <View className="flex-row items-center space-x-2 ">
                <TouchableOpacity onPress={removeItemFromBasket} >
                    <MinusCircleIcon  size={35} color={items.length>0 ? "#00CCBB" : "gray"}/>
                </TouchableOpacity>
                <Text>
                    {items.length}
                </Text>
                <TouchableOpacity onPress={addItemToBasket}>
                    <PlusCircleIcon size={35} color="#00CCBB"/>
                </TouchableOpacity>
            </View>
        </View>
    }
    </TouchableOpacity>
  )
}

export default DishRow