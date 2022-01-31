import React from 'react';
import {
    Image,
    ImageStyle,
    StyleProp,
    Text,
    TextStyle,
    View,
} from 'react-native';

interface HeartProps {
    likeCount: number;
    containerStyle?: StyleProp<any>;
    imageStyle?: StyleProp<ImageStyle>;
    textStyle?: StyleProp<TextStyle>;
}

export const LikeHeart = (props: HeartProps) => {
    return (
        <View
            style={[
                {
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    alignItems: 'center',
                    width: 80,
                    borderRadius: 8,
                },
                props.containerStyle,
            ]}>
            <Image
                source={require('../assets/images/heart.png')}
                style={[
                    {
                        width: 30,
                        height: 30,
                        resizeMode: 'center',
                    },
                    props.imageStyle,
                ]}
            />
            <Text style={[{fontSize: 20, padding: 5}, props.textStyle]}>
                {props.likeCount}
            </Text>
        </View>
    );
};
