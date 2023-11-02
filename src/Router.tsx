import { Routes, Route } from 'react-router-dom'

import Welcome from './Welcome'
import Post from './Post'

export default function Router() {

    return (<div>
        <Routes>
            <Route index element={<Welcome />} />
            <Route path="posts">
                <Route
                    path=":name"
                    element={<Post />}
                />
            </Route>
        </Routes>
    </div>)
}