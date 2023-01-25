import React, { useState } from 'react'
import uuid from 'react-uuid';
import * as Queries from '../graphql/queries';
import * as Mutations from '../graphql/mutations';
import { Amplify, API, graphqlOperation  } from 'aws-amplify';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);

export default function AddMissionary() {
    const [f_name, setF_name ] = useState("")
    const [l_name, setL_name] = useState("")
    const [sex, setSex] = useState("")
    const [drives, setDrives]= useState("")

    const handleSubmit = (event) => {

        async function postMissionary() {
            const newMissionary = {
                id: uuid(),
                first_name: f_name,
                last_name: l_name,
                sex: sex,
                can_drive: String(drives),
                is_senior_companion: "",
                language: "ENGLISH",
                joined_mission: "",
                leaving_mission: "",
                hometown: "",
                notes: ""
            }

            const response = await API.graphql(graphqlOperation(Mutations.createMissionary, {input: newMissionary})).then((resp_data) => {
                console.log("Got response:\n")
                console.log(resp_data)
                window.location.reload(true);
            })
        }
        
        event.preventDefault();
        //alert(`You've added a missionary: ${f_name + " " + l_name + " " + sex + " " + drives}`)
        postMissionary()
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>
            First Name:
            <input type="text" name="f_name" value={f_name} onChange={(e) => setF_name(e.target.value)} />
            </label>
            <label>
            Last Name:
            <input type="text" name="l_name" value={l_name} onChange={(e) => setL_name(e.target.value)} />
            </label>
            <label leftMargin="2">
            Sex:
            <select required={true} name="sex" value={sex} onChange={(e) => setSex(e.target.value)} >
                <option value=""></option>
                <option value="MALE">MALE</option>
                <option value="FEMALE">FEMALE</option>
            </select>
            </label>
            <label>
            Can Drive:
            <select required={true} name="drives" value={drives} onChange={(e) => setDrives(e.target.value)} >
                <option value=""></option>
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
            </label>
            <input type="submit" value="Add" />
        </form>
        </>
    )
}
