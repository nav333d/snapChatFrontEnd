import Axios from 'axios';
import RNFS from 'react-native-fs';
import RNFetchBlob from 'react-native-fetch-blob'


Axios.defaults.baseURL = 'http://192.168.1.104:5000/api';

//Axios.defaults.baseURL = 'https://testing1server.herokuapp.com/api'
class APIs {

    constructor() {
        this.registration = ``
    }
    async registerUser(args) {
        try {
            const { data } = await Axios.post(`/user/register`, { ...args })

            return data

        } catch (e) {
            console.log(e)
        }
    }

    async sendMail(args) {
        try {
            const { data } = await Axios.post(`/send`, { ...args })

            return data

        }
        catch (e) {
            console.log(e)
        }
    }

    async registerVote(args){
        
        try{
            const { data } = await Axios.post(`/registerVote`,{...args})
            return data
        }
        catch(e){
            console.log(e)
        }
     }

    matchEmailId = async (args) => {
        console.log(args)
        try {

            const { data } = await Axios.post('/matchEmailId', { ...args });
            return data
        }
        catch (e) {
            return e;
        }
    }

    async userLogin(args) {
        try {
            const { data } = await Axios.post('/user/login', { ...args })
            console.log(data)
            return data
        }
        catch (e) {
            return e
        }
    }
    async getAllVideosOfSingleUSer(args){
        try{
            const {data} = await Axios.post('/getAllVideo', {...args})
            return data
        }
        catch(e){
            return e
        }vvv
    }

    async sendVideo(args) {

        const splitedpath = args.split('/')
        const videoFile = splitedpath[9]
      //  var uploadUrl = 'https://testing1server.herokuapp.com/api/uploadVideo'
        var uploadUrl =   'http://192.168.1.103:5000/api/uploadVideo'
        const base64image = await RNFS.readFile(args, 'base64');
        // var data = new FormData()
        // data.append('haha', 'input')
        

        RNFetchBlob.fetch('POST', uploadUrl, { 
             'Content-Type' : 'application/octet-stream',
        }, [{name : 'file',filename : videoFile ,  data : base64image}])
            .uploadProgress((written, total) =>{
                console.log('uploaded', Math.floor(written / total * 100) + '%')
            })
            .progress((received, total) =>{
                console.log('progress', Math.floor(received / total * 100) +  '%')
            })
            .then((res) => {
                console.log('.then' + res.text())
            })
            .catch((err) => {
              
            })
  
    }

    async getVideos(args) {

        const { data } = await Axios.post('/getVideos');

        return data;
  
    }

}



export { APIs }