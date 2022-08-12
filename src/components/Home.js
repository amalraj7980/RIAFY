import { Text, View, Modal,TouchableOpacity, Pressable,FlatList, StyleSheet, SafeAreaView, TextInput } from 'react-native'
import React, { Component } from 'react'
import { Button,FAB } from 'react-native-elements';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            err: null,
            data: [],
            text:"",
            isLoading: true,
            modalVisible:false
        }
    }
    componentDidMount() {
        this.getallUsers();
    }
    componentDidUpdate(){
        this.getallUsers();
    }
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
      }
    async getallUsers() {
        try {
            const res = await
                fetch(`https://crudcrud.com/api/56f64c6334334424afa3eef694a80823/test`);
            const response = await res.json();
            this.setState({ data: response });
        }
        catch (err) {
            console.log(err);
        }
    }
    async addUser(){
      const response=  fetch(`https://crudcrud.com/api/56f64c6334334424afa3eef694a80823/test`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                id:'1',
                name:this.state.text,
            })
        })
        const res= await response.json();
        if(res&&res.length>0){
            this.setModalVisible(false);
        }
        else{
            alert("err");
        }
      
        
    }
    render() {
        const { modalVisible } = this.state;

        const { data } = this.state;
        return (
            <>
                <SafeAreaView style={{ flex: 1 }}>
                    <FlatList style={styles.list}
                        data={this.state.data}
                        renderItem={({ item }) => (
                        
                                <View style={styles.card} key={item._id}>
                                    <Text>User ID :{item._id}</Text>
                                    <Text>User Name :{item.name}</Text>
                                </View>
                        
                        )} />
                                            <FAB title="Create"  onPress={() => this.setModalVisible(true)} />

                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                this.setModalVisible(!modalVisible);
                            }}
                            >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <TextInput style={styles.input}/>
                                    <View style={styles.btnView} 
                                    onChangeText={text=>{this.setState({text:text}) }}>
                                    <TouchableOpacity
                                        style={styles.Addbutton}
                                        onPress={() => this.addUser()}
                                        >
                                        <Text style={{color:"white"}}>Cancel</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                        style={styles.button}
                                        onPress={() => this.setModalVisible(!modalVisible)}
                                        >
                                        <Text style={{color:"white"}}>Cancel</Text>
                                        </TouchableOpacity>
                                    </View>
                               
                                </View>
                            </View>
                            </Modal>



                </SafeAreaView>

            </>
        )
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        margin: 7,
    },
    input:{
        height:45,
        width:"80%",
        margin:12,
        borderWidth:0.5,
        padding:10,borderRadius:10,
    },
    card: {
        flex: 1,
        margin: 5,
        borderWidth: 0.5,
        borderColor: "gray",
        borderRadius: 8,
        padding: 5,
        overflow: 'hidden'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
    modalView: {
        width:"80%",
        height:"40%",
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      btnView:{
        width:"85%",
        flex:1,
        height:200,
        alignItems:"center",
        justifyContent:"space-between"
      },
      Addbutton:{
        borderRadius: 15,
        padding: 10,
        elevation: 2,
        backgroundColor:"#088e7f"
      },
      button: {
        borderRadius: 15,
        padding: 10,
        elevation: 2,
        color:"white",
        backgroundColor:"gray"
      },
    
})