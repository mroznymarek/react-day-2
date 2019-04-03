import React from 'react'
import Button from '@material-ui/core/Button'
import PaperRefined from '../../Components/PaperRefined'

const MUIPlayground = (props) => (
    <div>
        <PaperRefined
            doNotDisplayChildren={true}
        >
                <Button
                variant={'contained'}
                color={'primary'}
                onClick={() => alert('Klik!')}
            >
                Kliknij
            </Button>
            </PaperRefined>
    </div>
)

export default MUIPlayground
