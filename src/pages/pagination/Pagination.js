import { Pagination } from '@material-ui/lab';
import React from 'react'
import {createMuiTheme, ThemeProvider} from '@material-ui/core'

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark'
    }
});


const CustomPagination = ({ setPage, setNumOfPage = 10}) => {
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0,0)
    }
    return (
        <div
        style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}
        >
            <ThemeProvider theme={darkTheme}>
            <Pagination
            onChange={(e) => handlePageChange(e.target.textContent)}
            count={setNumOfPage}
            color='primary'
            hideNextButton
            hidePrevButton
            />
            </ThemeProvider>
        </div>
    )
}

export default CustomPagination;
