import React, {useState} from 'react';
import './App.css';


function Home() {
    let base64string = '';
    const [file, setFile] = useState();
    window.flag = 1;
    // const [data0, setData] = useState();

    const onChange = (e) => {
        const file = e.target.files[0];
        setFile(URL.createObjectURL(e.target.files[0]));
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            base64string = reader.result;
            base64string = base64string.split(',')[1];
            // console.log(base64string);

            const headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "Content-Type": "application/json"
               }
               
            const bodyContent = JSON.stringify({
                "img_base64": base64string
            });
            
            fetch("http://127.0.0.1:8000/get_data",{
                method:"POST",
                body: bodyContent,
                headers: headersList
            }).then((res => res.json()))
            .then((Data=>{
                document.getElementById("img-input").style.display = "none";
                document.getElementById("img").style.display = "block";
                window.flag = Data.Result
                console.log(window.flag);
            })).catch((error)=>{
                console.log(error)
            })
        };
    }
    function showresult() {
        // The user is <b>{window.flag ? 'currently' : 'not1'}</b> logged in.
        alert(`The image is ${window.flag ? 'Fake' : 'Real'} Image.`);
      }
    
    return (
    
    <div className='Home' >
        <h3>Welcome</h3><br />
        <p>
        Choose Image and Click on Show Result to check the image is Fake or Not.<br /><br />
        </p>
        <form>
            <input id="img-input" type="file" onChange={onChange} /><br /><br />
            <img   id="img" src={file} alt="Unloaded File" height="10%"  width="10%"  /><br /><br />
            <button onClick={() => showresult()}>Show  Result</button>
            
        </form>
    </div>
    
    );
}

export default Home;