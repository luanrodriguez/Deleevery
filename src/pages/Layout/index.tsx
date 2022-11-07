import { Outlet } from 'react-router-dom'
import { LayoutContainer, LayoutNavBar, LayoutNavBarOption} from "./styles";

export function Layout() {
    return (
        <LayoutContainer>
            <LayoutNavBar>
                <LayoutNavBarOption href="/">Cadastro</LayoutNavBarOption>
                <LayoutNavBarOption href="/list">Lista de entregas</LayoutNavBarOption>
            </LayoutNavBar>
            <Outlet />
        </LayoutContainer>
    )
}