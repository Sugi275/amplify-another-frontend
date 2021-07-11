import React from 'react';
import Box from '@material-ui/core/Box';
import ViewTable from './table';

export default function Display() {
    return (
        <div style={{ width: '100%' }}>
            <Box display="flex" p={1} bgcolor="background.paper">
                <ViewTable />
            </Box>
        </div>
    );
}