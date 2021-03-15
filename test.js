const axios = require('axios')

const allProps = {
    a: 12,
    b: 45,
    c: 5652
}
async function postData(){
    await axios.post('https://db4075c934e4.ngrok.io/save',{
          "data": allProps
      }).then( response => {
          console.log(response.data);
      });
}

postData()