import axios from "axios";
import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import ProjectCards from "../../../ui/project/ProjectCards";

import classes from "../mytabs.module.css"

const UploadProject = () => {
    const [projects, setProjects] = useState([])
    const cookies = new Cookies()
    const token = cookies.get('user_token')

    const findPost = () => {
        axios.get("http://192.168.0.74:3000/mypage/upload" ,{headers : {'user_token': token}})
        .then(response => {
            console.log(response.data)
            setProjects(response.data)
        })
        .catch(e => {
            console.log(e)
        })
    }

    useEffect(() => {
        findPost();
    }, [])

    return(
        <div>
            {projects.length !== 0 ?
                <div>
                    <div className={classes.upprolength}><span>{projects.length}</span>개의 프로젝트가 있습니다.</div>
                    <div className={classes.upprojectbox}>
                        {projects.map((prol, key) => (
                            <div key={key}>
                                <ProjectCards project={prol} setProjects={setProjects} size={'xl'} />
                            </div>
                        ))}
                    </div>
                </div>
                :
                <div>
                    <div className={classes.upprolength}><span>{projects.length}</span>개의 프로젝트가 있습니다.</div>
                    <div>올린 프로젝트가 없습니다</div>
                </div>
            }
        </div>
    )
}

export default UploadProject