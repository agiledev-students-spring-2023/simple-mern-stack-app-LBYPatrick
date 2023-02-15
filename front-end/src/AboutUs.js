import axios from 'axios'
import {useEffect, useState} from "react";

const AboutUs = props => {

    const [retrived,setRetrived] = useState({});
    const [loaded, setLoaded] = useState(false);


    const fetchMsg = async () => {

        try {
            const res = await axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about-us`);

            setRetrived(res.data["content"] ?? {});
            setLoaded(true);

        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchMsg();

    },[])

    return <>

        {loaded && <h2>{retrived["message"]??""}</h2>}
        <div/>
        {loaded && <img src={retrived["image"]??""} alt="hmmm?"/>}

    </>
};

export {AboutUs}