import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { removeFromBasket, selectBasketItems, selectBasketItemTotal } from '../features/BasketSlice'
import { useNavigation } from '@react-navigation/native'
import { XCircleIcon } from 'react-native-heroicons/solid'
import Currency from "react-currency-formatter"
import { useDispatch } from 'react-redux'
const BasketScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const items = useSelector(selectBasketItems)
    const basketTotal = useSelector(selectBasketItemTotal)
    const [group, setGroup] = useState([])
    useMemo(()=>{
        const groupedItems = items.reduce((results, item)=>{
            (results[item.id] = results[item.id] || []).push(item)
            return results
        },{})

        setGroup(groupedItems)
    }, [items])
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100 ">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
            <View>
                <Text className="text-lg font-bold text-center">Basket</Text>
            </View>
            <TouchableOpacity  onPress={navigation.goBack}
                className="rounded-full bg-gray-100 absolute top-3 right-5"
            >
                <XCircleIcon color="#00CCBB" size={50}/>
            </TouchableOpacity>
        </View>
        {/* <View className="flex-row items-center space-x-4 py-3 pb-white my-5">
            <Image className="h-7 w-7 bg-gray-300 p-4 rounded-full" source={{url:"https://links.papareact.com/wru"}}/>
        </View> */}
        <ScrollView className="flex-1 divide-y divide-gray-200">
            {Object.entries(group).map(([key,items])=>(
                <View key={key} className="flex-row items-center space-x-3 bg-white py-1 px-4">
                    <Text className="text-[#00CCBB]">{items.length} x </Text>
                    <Image 
                        source={{url: items[0]?.image}}
                        className="h-12 w-12 rounded-full"
                    />
                    <Text className="flex-1">{items[0]?.name}</Text>
                    <Text className="text-gray-600">
                        <Currency quantity={items[0]?.price} currency="EUR"/>
                    </Text>
                    <TouchableOpacity onPress={()=>dispatch(removeFromBasket({id: key}))}>
                        <Text  className="text-[#00CCBB] text-xs">
                            Remove
                        </Text>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
        <View className="bg-white border-t border-[#00CCBB]  p-4 space-y-4">
            <View className="flex-row justify-between">
                <Text className="text-gray-400">Subtotal</Text>
                <Text className="text-gray-400">
                <Currency quantity={basketTotal} currency="EUR"/>
                </Text>
            </View>

            <View className="flex-row justify-between">
                <Text className="text-gray-400">Delivery</Text>
                <Text className="text-gray-400">
                <Currency quantity={basketTotal} currency="EUR"/>
                </Text>
            </View>
            <View className="flex-row justify-between">
                <Text>Order Total</Text>
                <Text className="font-extrabold">
                <Currency quantity={basketTotal + basketTotal} currency="EUR"/>
                </Text>
            </View>
            <TouchableOpacity onPress={()=> navigation.navigate("PreparingOrder")} className="rounded-lg bg-[#00CCBB] p-4">
                <Text className="text-center text-white text-xl">Place Order</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen