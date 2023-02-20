import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { 
    ChevronDownIcon,
    UserIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon
 } from "react-native-heroicons/outline";
import FeaturedRow from '../components/FeaturedRow';
import Categories from '../components/Categories';

const HomeScreen = () => {
    const navigation = useNavigation()
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        })
    },[])
    
  return (
    <SafeAreaView className="bg-white pt-5">
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
            <Image source={{url:'https://links.papareact.com/wru'}} 
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />
            <View className="flex-1">
                <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                <Text className="font-bold text-xl">
                    Current Location
                    <ChevronDownIcon size={20} color="#00CCBB"/>
                </Text>
            </View>
            <UserIcon size={35} color="#00CCBB"/>
        </View>
        <View className="flex-row items-center space-x-2 pb-2 mx-4 ">
            <View className="flex-row flex-1 space-x-2  bg-gray-200 p-3">
                 <MagnifyingGlassIcon color="gray" size={20}/>
                 <TextInput placeholder='Restraunts and cuisines' keyboardType='default'/>
            </View>
            <AdjustmentsVerticalIcon   color="#00CCBB"/>
        </View>
        <ScrollView className="bg-gray-100"
        contentContainerStyle={{
            paddingBottom:100,
        }}
        >
            <Categories/>
            {[1,2,3,4].map((f,id)=>
                <FeaturedRow
                id={id}
                title="Featured"
                description="nice meal"
                featuredCategory="featured"
                key={id}
            />
            )}
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen