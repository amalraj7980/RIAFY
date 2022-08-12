import {
    Text, View,
    Image, ScrollView,
    StyleSheet, SafeAreaView, TextInput
} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import React, { Component } from 'react'
import { SearchBar } from 'react-native-elements';
import TestJson from '../assects/Test.json';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [] = TestJson,
            search: '',
        }
    }
    updateSearch = (search) => {
        this.setState({ search });
    };
    componentDidMount() {
    }

    render() {
        const { search } = this.state;
        return (
            <>
                <SafeAreaView style={styles.container}>
                    <View style={{ flex: 1 }}>
                        <SearchBar
                            containerStyle={{ height: 80, backgroundColor: '#fff' }}
                            inputContainerStyle={{backgroundColor:"#F7F7F7"}}
                            inputStyle={{fontSize:14,fontFamily:'Montserrat-Regular'}}
                            placeholder="Food name"
                            placeholderTextColor="#30384d"
                            lightTheme
                            platform="ios"
                            autoFocus={true}
                            showLoading={false}
                            autoCorrect={false}
                            value={this.state.search}
                            onChangeText={this.updateSearch}

                        />
                        <View style={{ paddingLeft: 15,paddingBottom:10,paddingTop:10 }}>
                            <Text style={styles.SectionHeader}>Foods</Text>
                        </View>
                        <FlatList style={styles.list}
                            numColumns={2}
                            scrollEnabled={true}
                            scrollToItem={false}
                            data={this.state.data}
                            renderItem={({ item }) => (<>
                            <View style={{ margin: 5, flex: 1 }}>
                                <View style={styles.Products_card}>
                                    <Image style={styles.Product_image}
                                        resizeMode="center" source={{ uri: `${item.imageUrl}` }}>
                                    </Image>
                                    <View style={{ flex: 1, }}>
                                        <Text style={styles.ItemName}>{item.Ingredient}</Text>
                                        <Text style={styles.ItemContent}>{item.Short_text}</Text>
                                    </View>
                                </View>
                            </View>
                            </>

                            )} />
                    </View>
                </SafeAreaView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 4,
        backgroundColor:"#F7F7F7",
        borderTopWidth:2.5,
        marginTop:0,
        borderColor:"#32394E"
        
    },

    Products_card: {
        flex: 1,
        padding: 5,
        overflow: "hidden",
    },
    Product_image: {
        height: 120,
        width: "100%",
        borderRadius: 7,
        borderColor: "lightgray",
        overflow: "hidden"
    },
    SectionHeader: {
        fontSize: 20,
        color: "#30384d",
        fontWeight: "bold",
        fontFamily:'Montserrat-Regular'
    },

    ItemName: {
        color: "#30384d",
        fontWeight: "700",
        fontSize: 14,
        paddingTop: 5,
        paddingBottom: 2,
        fontFamily:'Montserrat-Regular'

    },
    ItemContent: {
        color: "#7e8a9a",
        fontWeight: "500",
        fontSize: 12,
        fontFamily:'Montserrat-Regular'
    },
    list: {
        flex: 1,
    },
})