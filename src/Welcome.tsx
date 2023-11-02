import Container from "@mui/material/Container";
import Markdown from 'react-markdown'
import { Link } from 'react-router-dom'

const markdown = `## hello there 👀

just setting up my [dmtk.work](https://dmtk.work)

in the meantime, check out:

[twitter](https://twitter.com/dmtkatwork)   
[github](https://github.com/dmytrotkk)

`

export default function Welcome(props: { className?: string }) {
    return (<div className={props.className}>
        <Container maxWidth="md">
            <p className='p3 gray date'>
                Post by dmtk
            </p>
            <Markdown
                children={markdown}
                components={{
                    code(props) {
                        const { children, className, node, ...rest } = props
                        return <code {...rest} className={className}>
                            {children}
                        </code>
                    }
                }}
            />

            <Link to='/posts/ipdf'>ipdf framework by dmtk</Link>

        </Container>
    </div>)
}