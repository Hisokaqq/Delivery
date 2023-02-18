import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import {MapPinIcon} from 'react-native-heroicons/outline'
const RestrauntCard = ({
    imgUrl,
    title,
    rating,
    genre,
    address,

    first,
    last
}) => {
  return (
    <TouchableOpacity className={`${first ? "ml-0" : "ml-1"} ${last ? "mr-0" : "mr-1"} bg-white`}>
      <Image 
        source={{url:imgUrl}}
        className="h-36 w-64 rounded-sm"
       />
       <View className="px-4 pb-4">
        <Text className={"font-bold text-lg pt-2"}>{title}</Text>
        <View className="flex-row items-center space-x-1 ">
            <StarIcon color="green" opacity={.5} size={22}/>
            <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text> • {genre}
            </Text>
        </View>
        <View className="flex-row items-center space-x-1">
            <MapPinIcon color="gray" opacity={.4} size={22}/>
            <Text className="text-xs text-gray-500">
                Nearby shop • {address}
            </Text>
        </View>
       </View>
    </TouchableOpacity>
  )
}

export default RestrauntCard