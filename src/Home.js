import React, {useState} from 'react';
import './App.css';



function Home() {
    let base64string = '';
    const [file, setFile] = useState();
    // const [Data, setData] = useState();

    const onChange = (e) => {
        const file = e.target.files[0];
        setFile(URL.createObjectURL(e.target.files[0]));
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            base64string = reader.result;
            base64string = base64string.split(',')[1];
            console.log(base64string);
            const Data = getData()
            console.log(Data);
        };
    }
    
    function getData(){
        const headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Content-Type": "application/json"
           }
           
        const bodyContent = JSON.stringify({
            "img_base64": base64string
        });
        
        fetch("https://deep-face-detection-api.herokuapp.com/get_data",{
            method:"POST",
            body: bodyContent,
            headers: headersList
        }).then((response)=>{
            response.text()
        }).then((data)=>{
            this.result = data
            this.trigger("resultRecieved")
        }).catch((error)=>{
            console.log(error)
        })
    }

    return (
    <div className='Home'>
        <h3>Welcome</h3><br /><br />
        <p>
        This is my Minor Project of React App.<br /><br />
        </p>
        <form>
            <input type="file" onChange={onChange} /><br /><br />
            <img src={file} alt="Uloaded File" height="20%" width="20%" /><br /><br />
            {/* <button onClick={getData}>GET DATA</button> */}
        </form>
    </div>
    );
}

export default Home;