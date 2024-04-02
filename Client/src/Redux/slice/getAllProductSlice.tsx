import { createSlice} from '@reduxjs/toolkit';


const initialState :any = []


// export const getAllProduct = createAsyncThunk('product', async()=>{
//   console.log("api call=====>")
//   const response = await axios.get(`${URL}/getAll`);
//   return response.data;
// })


const getAllProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
      addProduct:(state, action)=>{
        console.log("first", action.payload, state)
        // state.push(action.payload)
        return {
          ...state,
          product: action.payload
        }
      }
    }
});

export const { addProduct} = getAllProductSlice.actions;


export default getAllProductSlice.reducer;
