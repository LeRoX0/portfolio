import { createSlice } from '@reduxjs/toolkit'

type initialStateType = {
    percent: number,
    title: string,
}
    
const initialState : initialStateType[] = 
[
    {percent:1, title:'javascript'},
    {percent:1,title:'html'},
    {percent:1, title:'css'},
    
]
    
export const experience = createSlice({
    name: 'experience',
    initialState,
    reducers:{
        counterPercent: (state) => {
           state.map((item)=>{
            if (item.percent < 100) {   
                item.percent = item.percent + 1
            }
            return item 
           })
        }
    }
})


