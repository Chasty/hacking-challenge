// import logo from './images/logo-rimac.svg';
import './Home.css';
import Dropdown from '../dropdown/Dropdown';
import NavBar from '../nav/Nav';
import { useState } from 'react';
import axios from 'axios';
// inport CarData
import { useHistory } from "react-router-dom";
// import { useLocation } from 'react-router';
// import CarData from '../car-data/CarData';



function App() {

    const history = useHistory();

    function goToHome() {
        history.push('/datos-auto')

    }

    async function getUser() {
        await axios('https://jsonplaceholder.typicode.com/users').then(response => {
            user.name = response.data[0].name;
            user.email = response.data[0].email;
            console.log(user);
            goToHome();
        });
    }

    // const [data, setData] = useState(null);
    const [checked, setChecked] = useState(false);
    const [user, setUser] = useState({
        doc: '',
        phone: '',
        number: '',
        name: '',
        email: '',
        term: checked
    })

    // const [error, setError] = useState(false);

    const handleInputChange = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const onTapButton = () => {
        if (user.doc !== "" && user.phone !== "" && user.term && user.number !== "") {
            getUser();


        } else {

        }
    }

    // useEffect(()=> {
    // }, []);

    // useEffect(() => {
    //     if (data) {
    //         // console.log(data.name)
    //         user.name = data.name;
    //         user.email = data.email;
    //         // setUser({...user, name: data.name, email: data.email});
    //         // console.log(user);


    //     }
    // }, [data, user])

    // console.log(data);
    // console.log(user);

    return (


        <div className="Content">
            <NavBar />
            <div className="Group1">
                <div className="Content-Group1">
                    <div className="Empty"></div>
                    <div className="Content-Group1-Filled">
                        <div className="Image">

                        </div>
                        <div className="Content-Info">
                            <h4 className="IncreaseH4">¡NUEVO!</h4>
                            <h2 className="IncreaseH2">Seguro <span>Vehicular Tracking</span></h2>
                            <h5 className="IncreaseH5">Cuentanos donde le haras seguimiento a tu seguro</h5>
                        </div>
                    </div>
                    <div className="footer-left">© 2020 RIMAC Seguros y Reaseguros.</div>
                </div>
            </div>
            <div className="ContentGroup2">
                <h2 className="IncreaseH2">Dejanos tus datos</h2>
                <div className="Input">

                    <div className="DropDownContent2">
                        <Dropdown />
                        <input
                            type="text"
                            // className="FormControl FormControlSM"
                            className={`FormControl FormControlSM ${user.doc === "" ? "ShowError FormControl2" : ""}`}
                            placeholder="Nro. de doc"
                            name="doc"
                            onChange={e => handleInputChange(e)}
                        />

                    </div>
                    <div className={`${user.doc === "" ? "TextError" : "None"}`}>complete este campo</div>


                    <div className="Column">
                        <input
                            type="text"
                            // className="FormControl "
                            className={`FormControl ${user.phone === "" ? "ShowError FormControl2" : ""}`}
                            placeholder="Celular"
                            name="phone"
                            onChange={e => handleInputChange(e)}
                        />
                        <div className={`${user.phone === "" ? "TextError" : "None"}`}>complete este campo</div>
                        <div className="Divider-sm"></div>
                        <input
                            type="text"
                            // className="FormControl"
                            className={`FormControl ${user.number === "" ? "ShowError FormControl2" : ""}`}
                            placeholder="Placa"
                            name="number"
                            onChange={e => handleInputChange(e)}
                        />
                        <div className={`${user.number === "" ? "TextError TextErrorPadding" : "None"}`}>complete este campo</div>
                    </div>

                    <div className="TermsConditionsContent">


                        <div className="checkbox-container">
                            <label className="checkbox-label checkbox-label-border-color">
                                <input
                                    value={checked}
                                    type="checkbox"
                                    onClick={() => { setChecked(user.term = !checked) }}
                                ></input>
                                <span className={`checkbox-custom ${!user.term ? "checkbox-custom-border-color" : ""}`}></span>
                            </label>
                        </div>

                        {/* <input type="checkbox" color="red" /> */}
                        <div className="TermsConditions" >
                            Acepto
                            <a className="HREF" href="https://www.w3schools.com/">la Política de Protección de Datos Personales</a>
                            y los
                            <a className="HREF" href="https://www.w3schools.com/">Términos y Condiciones.</a>
                        </div>

                    </div>

                    <div className={`${!user.term ? "TextError" : "None"}`}>Acepte los Términos y Condiciones</div>

                    <div onClick={onTapButton} className="Btn-Cot">COTÍZALO</div>

                </div>
            </div>

        </div>



    );
}

export default App;
