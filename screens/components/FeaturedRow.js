import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestrauntCard from './RestrauntCard'

const FeaturedRow = ({id, title, description, featuredCategory}) => {
  return (
    <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className="fint-bold text-lg">{title}</Text>
            <ArrowRightIcon color="#00CCBB" />
        </View>
        <Text className="text-xs text-gray-500 px-4">{description}</Text>

        <View className="px-4">
            <ScrollView 
            horizontal
            contentContainerStyle={{
                paddingTop:10,
                
            }}
            showsHorizontalScrollIndicator={false}
            className="pt-4"
            >
                {[0,1,2,3,4,5].map((r, id)=> <RestrauntCard 
                id={id}
                imgUrl="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1349&q=80"
                title="yo! suSHie"
                rating="4.5"
                genre="gapanese"
                address="1080 Neubaugase 78-79"
                short_discription="This is a text description"
                dishes={[]}
                long={20}
                lat={0}
                key={id}
                first={id==0}
                last={id+1==[1,2,3,5,6,7,8].length}
                />
                )}

            </ScrollView>
        </View>
    </View>

  )
}

export default FeaturedRow