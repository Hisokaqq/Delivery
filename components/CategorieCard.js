import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategorieCard = ({imgUrl, title, first, last}) => {
  return (
    <TouchableOpacity className={`${first ? "ml-0" : "ml-1"} ${last ? "mr-0" : "mr-1"} relative`}>
      <Image 
      source={{url:imgUrl}}
      className="h-20 w-20 rounded"
      />
        <Text className="absolute bottom-1 left-1 text-white font-bold">
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default CategorieCard