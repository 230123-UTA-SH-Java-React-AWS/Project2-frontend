import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"; 
import { AxiosError } from "axios";
import { getJwt } from "../util/getJwt";
import lobbyClient from "../util/lobbyClient";
import { GameRepresentation } from "../model/GameRepresentation";

//Below is for later when I can finally retrieve existing games data from servers
interface TableListObject {
    [tableID: number] : GameRepresentation;
}

interface TableState {
    tableList: GameRepresentation[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

const initialState: TableState = {
    tableList: [],
    status: "idle",
    error: null
} 

interface NewTablePayload {
    gameName: string,
    lobbyIsPrivate: boolean,
}

export const tableSlice = createSlice({
    name: "tables", 
    initialState,
    reducers: {
        loadTablesSuccess: (
            state,
            action: PayloadAction<GameRepresentation[]>
        ) => {
            state.tableList = action.payload;
            state.error = null;
        },
    }
});

export const { loadTablesSuccess } = tableSlice.actions;

export default tableSlice.reducer;