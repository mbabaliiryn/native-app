import React from 'react'
import { PureComponent } from 'react'
import { View, Text } from 'react-native'
import { SIZES, COLORS } from '../constants'


const OrderDelivery = () => {
    return (
        <view
        style={{
            position: 'absolute',
            bottom: 50,
            left: 0,
            right: 0,
            alignItems: 'center',
            justifyContent: 'center'
        }}
        >
            <View
            style={{
                width: SIZES.width *0.9,
                paddingVertical: SIZES.padding *3,
                paddingHorizontal: SIZES.padding *2,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.white
            }} 
            >
                

            </View>
            <Text>OrderDelivery</Text>
        </view>
    )
}
function renderButtons() {
    return (
        <View
            style={{
                position: 'absolute',
                bottom: SIZES.height * 0.35,
                right: SIZES.padding * 2,
                width: 60,
                height: 130,
                justifyContent: 'space-between'
            }}
        >
            {/* Zoom In */}
            <TouchableOpacity
                style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    backgroundColor: COLORS.white,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={() => zoomIn()}
            >
                <Text style={{ ...FONTS.body1 }}>+</Text>
            </TouchableOpacity>

            {/* Zoom Out */}
            <TouchableOpacity
                style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    backgroundColor: COLORS.white,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={() => zoomOut()}
            >
                <Text style={{ ...FONTS.body1 }}>-</Text>
            </TouchableOpacity>
        </View>

    )
}

export default OrderDelivery;
