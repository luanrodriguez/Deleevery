import { Outlet } from 'react-router-dom'
import { LayoutContainer, LayoutHeader, LayoutNavBar, LayoutNavBarOption, LayoutTitle} from "./styles";

export function Layout() {
    return (
        <LayoutContainer>
            <LayoutHeader>
                <LayoutTitle>Deleevery</LayoutTitle>
                <LayoutNavBar>
                    <LayoutNavBarOption href="/">Cadastro</LayoutNavBarOption>
                    <LayoutNavBarOption href="/list">Lista de entregas</LayoutNavBarOption>
                </LayoutNavBar>
            </LayoutHeader>
            <Outlet />
        </LayoutContainer>
    )
}