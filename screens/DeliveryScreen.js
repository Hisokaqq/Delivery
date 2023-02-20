import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { XMarkIcon } from 'react-native-heroicons/solid'
import { Image } from 'react-native'
import * as Progress from 'react-native-progress';
import MapView from 'react-native-maps';

const DeliveryScreen = () => {
    const navigation = useNavigation()
  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between p-5 items-center">
            <TouchableOpacity>
                <XMarkIcon color="white" size={30}/>
            </TouchableOpacity>
            <Text className="font-light text-white text-lg ">Order Help </Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md ">
            <View className="flex-row justify-between">
            <View>
                <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                <Text className="text-3xl font-bold">45-55 minutes</Text>
            </View>
            <Image source={{url:'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDA1ODViODZiNmI2OWNhYTU1NGQxZTNhM2ViYTcwNjYwODc4NTA5MyZjdD1z/2QRMIUObJdNWdlRHME/giphy.gif'}}  className="h-20 w-20" />
            </View>
            <Progress.Bar size={30} color="#00CCBB" indeterminate={true}/>
        </View>
      </SafeAreaView>
      <MapView
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
    className="flex-1 -mt-10 z-0"
    mapType='mutedStandart'
  />
  
  
    </View>
  )
}

export default DeliveryScreen