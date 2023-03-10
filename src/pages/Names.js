// import { all } from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { getNames, getActivity } from "../api/utils"
import NameCard from "../components/NameCard"
import DropdownName from '../components/DropdownName'
import axios from 'axios'


const style = {
    div: {
        display: "flex",
        backgroundColor: 'orange',
        width: "25rem",
        height: "45rem",
        justifyContent: "center",
        flexDirection: "column",
        // backgroundColor: 'blue',
        alignItems: "center",

    },
    centerDiv: {
        display: "flex",
        width: "20rem",
        height: "20rem",
        backgroundColor: 'white',
        paddingLeft: '15px',
        marginTop: "20px",
        justifyContent: "center",
        alignItems: "center",


    },
    btn: {
        display: "flex",
        borderRadius: "10px",
        backgroundColor: 'white',
        marginTop: "10px",
        height: "30px",
        justifyContent: "center",
        alignItems: "center"

    }
}


function Names() {

    const [allUsers, setAllUsers] = useState([])
    const [getUsername, setGetUsername] = useState('')
    const [getMail, setGetMail] = useState('')
    const [getName, setGetName] = useState('')
    const [activity, setActivity] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const namesData = await getNames();
            const parsedData = namesData.map((user) => ({ label: user.username, value: user.name }))
            setAllUsers(parsedData)
            // console.log(parsedData)
        }
        fetchData();
    }, [])

    const handleChange = async selectedOption => {
        // console.log(selectedOption)

        const allData = await getNames(selectedOption);
        const selectedOptionData = allData.find(user => {
            if (user.username === selectedOption.label) return user
        })
        // console.log(selectedOptionData)
        const {
            username,
            email,
            name
        }
            = selectedOptionData
        // console.log('asta e somedata:', allData)
        setGetUsername(username)
        setGetName(name)
        setGetMail(email)
        // console.log(email)
        // console.log(name)

    }
    const diffrentActivity = async () => {
        // console.log("cevaceva")
        const activity = await getActivity()
        setActivity(activity)
        // console.log("data aici", activity)

    }

    return (
        <div className="NAMES">
            <div style={{ display: "flex", justifyContent: "center", paddingTop: "40px" }}>
                <div style={style.div}>
                    <DropdownName
                        handleChange={handleChange}
                        setGetUsername={setGetUsername}
                        setGetMail={setGetMail}
                        allUsers={allUsers}
                    />
                    <div style={style.centerDiv}>
                        <NameCard
                            getMail={getMail}
                            getName={getName}
                        />
                    </div>
                    <button onClick={diffrentActivity} style={style.btn} >If bored click here</button>
                    <span style={{ display: "flex", marginTop: "20px" }}>{activity}</span>

                </div>
            </div>
        </div>
    )
}

export default Names
