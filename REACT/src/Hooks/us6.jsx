import { useState } from "react";
function US6(){
    const[formdata,setformdata]=useState({});
    function handlechange(e){
        const{name,value}=e.target
        setformdata({...formdata,[name]:value})
    }
    function handlesubmit(e){
        e.preventDefault()
        if (formdata.un === "" || formdata.eid === "")
        {
            alert("Please enter username and email")
        }
        else if (formdata.pass.length > 8)
        {
            alert("Please enter valid password(length<8)")
        }
        else if (formdata.pass !== formdata.pass)
        {
            alert("Pass and confirm pass are not same!")
        }
        else
        {
            alert(`Thank you! Welcome ${formdata.un}!
                Email: ${formdata.eid}
                Gender: ${formdata.gender}`)
        }
    }
    return(
        <>
            <form onSubmit={handlesubmit} action="">
                <label htmlFor="">username:</label>
                <input type="text" name="un" id="" onChange={handlechange} required/>
                <label htmlFor="">email :</label>
                <input type="email" name="eid" id="" onChange={handlechange} required/>
                <label htmlFor="">password:</label>
                <input type="password" name="pass" id="" onChange={handlechange} required/>
                <label htmlFor="">confirm password:</label>
                <input type="password" name="cpass" id="" onChange={handlechange} required/>
                <label htmlFor="">msg</label>
                <textarea name="msg"onChange={handlechange} value="a"></textarea>
                <label htmlFor="" >gender</label>
                <input type="radio" name="gender" value="male" onChange={handlechange} id="" />male
                <input type="radio" name="gender" value="female" onChange={handlechange} id="" />female
                <select name="city" onChange={handlechange} id="">
                    <option value="ahmedabad">ahmedabad</option>
                    <option value="rajkot">rajkot</option>
                </select>
                <input type="submit" onSubmit={handlesubmit} />
            </form>
        </>
    )
}
export default US6;