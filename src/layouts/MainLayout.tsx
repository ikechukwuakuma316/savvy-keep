import Header from "../components/partials/Header";
import React, {FC, Fragment} from "react";

interface Props {
    children: React.ReactNode;
}

const MainLayout: FC<Props> = ({children}) => {
    return (
        <Fragment>
            <Header/>
            {children}
        </Fragment>
    )
}


export default React.memo(MainLayout);

