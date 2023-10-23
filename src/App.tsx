import Container from "@mui/material/Container";
import Markdown from 'react-markdown'

const markdown = `## hello there 👀

just setting up my [dmtk.work](https://dmtk.work)

in the meantime, check out:

[twitter](https://twitter.com/dmtkatwork)   
[github](https://github.com/dmytrotkk)

`

export default function App() {

    // const [md, setMd] = useState<any>();

    // const url = 'https://raw.githubusercontent.com/remarkjs/react-markdown/main/readme.md'

    // useEffect(() => {
    //     // loadMd()
    // }, []);

    // async function loadMd() {
    //     try {
    //         const response = await fetch(url);
    //         const mdText = await response.text();
    //         setMd(mdText)
    //     } catch (err) {
    //         console.error(err)
    //     } finally {

    //     }
    // }

    return (<div>
        <Container maxWidth="md">
            <p className='p3 gray date'>
                Oct 23, 2023
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
        </Container>
    </div>)
}