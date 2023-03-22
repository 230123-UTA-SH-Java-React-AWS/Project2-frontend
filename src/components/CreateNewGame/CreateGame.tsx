import "./CreateGame.css";
import { Formik, Field, Form, useFormik } from "formik";
import axios, { AxiosRequestConfig } from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL, GAME_PORT } from "../../static/defaults";
import { useState } from "react";

interface NewGameValues {
    gameName: string;
    lobbyIsPrivate: boolean;
}

function CreateNewGameForm() {
    const navigate = useNavigate();

    const handleNewGame = (game: { gameName: string, lobbyIsPrivate: boolean }) => {
        //e.preventDefault();
        //e: React.MouseEvent<HTMLButtonElement>

        const requestConfig: AxiosRequestConfig = {
            baseURL: `http://${BASE_URL}:${GAME_PORT}`,
            headers: {
                'gameName': game.gameName,
                'lobbyIsPrivate': "" + game.lobbyIsPrivate,
                'Content-Type': 'application/json'
            }
        }

        console.log(requestConfig);


        const CREATEPATH = `/createBlackjackGame`;
        const JOINPATH = `/joinBlackjackGame`;

        // User creates game and joins at the same time, then redirects to queue page
        axios.post<string>(CREATEPATH, {}, requestConfig)
            .then((res) => {
                console.log(res.data);
                // navigate('/' + 'queue' + '/' + res.data);
                const config: AxiosRequestConfig = {
                    baseURL: `http://${BASE_URL}:${GAME_PORT}`,
                    headers: {
                        "gameId": res.data
                    }
                };
                axios.put<string>(JOINPATH, {}, config).then((res) => {
                    navigate('/' + 'queue' + '/' + res.data);
                });
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className="game-form-div">
            <Formik
                initialValues={{ gameName: "", lobbyIsPrivate: false, }}
                onSubmit={(values) => {
                    handleNewGame(values);
                }}>
                {({ values }) => (
                    <Form className="new-game-form">
                        <label className="name-label">Enter a name for your game</label>
                        <Field id="gameName" name="gameName" value={values.gameName} />

                        <label className="checkbox-label"><Field id="check" type="checkbox" name="lobbyIsPrivate" />Set table to private</label>
                        <div className="button-div"><button className="create-game" type="submit">Submit</button></div>
                    </Form>
                )}

            </Formik>
        </div>

    )
};

export default CreateNewGameForm;



