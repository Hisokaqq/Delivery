import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategorieCard from './CategorieCard'

const Categories = () => {
  return (
    <View className="px-4">
    <ScrollView 
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
        paddingTop:10,
    }}
    >
        {[1,2,3,5,6,7,8].map((categorie, id)=><CategorieCard
        imgUrl="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1349&q=80"
        title="Testing"
        key={id}
        first={id==0}
        last={id+1==[1,2,3,5,6,7,8].length}
        />
        )}
    </ScrollView>
    </View>
  )
}

export default Categories