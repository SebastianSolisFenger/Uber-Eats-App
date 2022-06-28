import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';

// import 'shopping-bag';
// import ImageView from 'react-native-image-viewing';

const items = [
  // {
  //   uri: 'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4',
  //   text: 'Bakery Items',
  // },
  {
    image: require('../assets/images/shopping-bag.png'),
    text: 'Pick-up',
  },
  {
    image: require('../assets/images/soft-drink.png'),
    text: 'Soft Drinks',
  },
  {
    image: require('../assets/images/bread.png'),
    text: 'Bakery Items',
  },
  {
    image: require('../assets/images/fast-food.png'),
    text: 'Fast Foods',
  },
  {
    image: require('../assets/images/deals.png'),
    text: 'Deals',
  },
  {
    image: require('../assets/images/coffee.png'),
    text: 'Coffee & Tea',
  },
  {
    image: require('../assets/images/desserts.png'),
    text: 'Desserts',
  },
];

export default function Categories() {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        marginTop: 5,
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: 'center', marginRight: 30 }}>
            <Image
              source={item.image}
              style={{ width: 50, height: 40, resizeMode: 'contain' }}
            />
            <Text style={{ fontSize: 13, fontWeight: '900' }}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
