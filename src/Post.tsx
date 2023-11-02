import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'

import Container from "@mui/material/Container";
import Markdown from 'react-markdown'


export default function Post() {
    // let { name } = useParams()

    const [md, setMd] = useState<any>();

    const url = 'https://raw.githubusercontent.com/dmytrotkk/ipdf/develop/README.md'

    useEffect(() => {
        loadMd()
    }, []);

    async function loadMd() {
        try {
            const response = await fetch(url);
            const mdText = await response.text();
            setMd(mdText)
        } catch (err) {
            console.error(err)
        } finally {

        }
    }


    return (<div>
        <Container maxWidth="md">
            <p className='p3 gray date'>
                Post by dmtk
            </p>
            <Markdown
                children={md}
                components={{
                    code(props) {
                        const { children, className, node, ...rest } = props
                        return <code {...rest} className={className}>
                            {children}
                        </code>
                    }
                }}
            />
        </Container>
    </div>)
}