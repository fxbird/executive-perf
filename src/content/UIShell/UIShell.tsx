import React from "react";
import {
    HeaderContainer, Header, SkipToContent, HeaderMenuButton, HeaderName,
    HeaderNavigation, HeaderMenu, HeaderMenuItem, HeaderGlobalBar,
    HeaderGlobalAction, SideNav, SideNavItems, Content,
    SideNavMenu, SideNavMenuItem, Theme, ExpandableSearch, ToastNotification, HeaderPanel, SwitcherItem, SwitcherDivider, Switcher
} from '@carbon/react';
import {
    Notification,
    Search,
    Switcher as SwitcherIcon,
    Fade,
} from '@carbon/react/icons';

import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import ErrorBoundary from "../../components/ErrorBoundary";
import LandingPage from '../LandingPage';
import NotFound from '../../components/NotFound';
import {Contributing} from "../contributing/contributing.tsx";
import {HeaderContainerRenderProps} from "@carbon/react/lib/components/UIShell/HeaderContainer";

interface StateType{
    activeItem: string,
    expandingAction:string
}

export  class UIShell extends React.Component {
    state: StateType;
    constructor(props:any) {
        super(props);
        this.state = {
            activeItem: `/${window.location.pathname.split('/')[1] ?? ''}`,
            expandingAction:''
        };
        this.setExpandingAction = this.setExpandingAction.bind(this);
    }

    async setExpandingAction(action:string){
        await this.setState(()=>{
            return {expandingAction:action};
        })
    }


    render() {
        return (
            <BrowserRouter>
                <Theme theme='g90'>
                    <HeaderContainer  render={({ isSideNavExpanded, onClickSideNavExpand }:HeaderContainerRenderProps) => (
                            <div>
                                <Header aria-label="IBM Executive Performance Platform">
                                    <SkipToContent />
                                    <HeaderMenuButton aria-label="Open menu" onClick={onClickSideNavExpand} isActive={isSideNavExpanded}/>
                                    <HeaderName href="/" prefix="Carbon">Template</HeaderName>
                                    <HeaderNavigation aria-label="Carbon React App">
                                        <HeaderMenuItem href="/contributing">Contributing</HeaderMenuItem>
                                        <HeaderMenuItem>Contact</HeaderMenuItem>
                                        <HeaderMenu aria-label="How To" menuLinkName="How To">
                                            <HeaderMenuItem href="#one">Sub-link 1</HeaderMenuItem>
                                            <HeaderMenuItem href="#two">Sub-link 2</HeaderMenuItem>
                                            <HeaderMenuItem href="#three">Sub-link 3</HeaderMenuItem>
                                        </HeaderMenu>
                                    </HeaderNavigation>
                                    <HeaderGlobalBar>
                                        <div >
                                            <ExpandableSearch  size="lg" labelText="Search" closeButtonLabelText="Clear search input" id="search-expandable-1" onChange={() => {}} onKeyDown={() => {}} />
                                        </div>
                                       {/* <HeaderGlobalAction aria-label="Search" tooltipAlignment="start">
                                            <ExpandableSearch    size="lg" labelText="Search" closeButtonLabelText="Clear search input" id="search-expandable-1" onChange={() => {}} onKeyDown={() => {}} />
                                        </HeaderGlobalAction>*/}
                                        <HeaderGlobalAction aria-label="Notifications" aria-expanded={isSideNavExpanded} isActive={isSideNavExpanded}
                                                            onClick={()=>{onClickSideNavExpand();}} tooltipAlignment="end">
                                            <Notification  size={20}  />
                                        </HeaderGlobalAction>
                                        <HeaderGlobalAction aria-label={isSideNavExpanded ? 'Close switcher' : 'Open switcher'} aria-expanded={isSideNavExpanded} isActive={isSideNavExpanded}
                                                            onClick={()=>{onClickSideNavExpand();}} tooltipAlignment="end" >
                                            <SwitcherIcon size={20} />
                                        </HeaderGlobalAction>
                                    </HeaderGlobalBar>

                                    {/*notification panel */}
                                    <HeaderPanel expanded={isSideNavExpanded} onHeaderPanelFocus={onClickSideNavExpand} href="#notification">
                                        <Switcher aria-label="Switcher Container" expanded={isSideNavExpanded}>
                                            <SwitcherItem aria-label="Link 1" href="#">
                                                Successfully Created a performance report
                                            </SwitcherItem>
                                            <SwitcherDivider />
                                            <SwitcherItem href="#" aria-label="Link 2">
                                                You've got a evaluation from PEM
                                            </SwitcherItem>
                                        </Switcher>
                                    </HeaderPanel>

                                    {/*app switcher panel */}
                                    <HeaderPanel expanded={isSideNavExpanded} onHeaderPanelFocus={onClickSideNavExpand}>
                                        <Switcher aria-label="Switcher Container" expanded={isSideNavExpanded}>
                                            <SwitcherItem aria-label="Link 1" href="#">
                                                Link 1
                                            </SwitcherItem>
                                            <SwitcherDivider />
                                            <SwitcherItem href="#" aria-label="Link 2">
                                                Link 2
                                            </SwitcherItem>
                                            <SwitcherItem href="#" aria-label="Link 3">
                                                Link 3
                                            </SwitcherItem>
                                            <SwitcherItem href="#" aria-label="Link 4">
                                                Link 4
                                            </SwitcherItem>
                                            <SwitcherItem href="#" aria-label="Link 5">
                                                Link 5
                                            </SwitcherItem>
                                            <SwitcherDivider />
                                            <SwitcherItem href="#" aria-label="Link 6">
                                                Link 6
                                            </SwitcherItem>
                                        </Switcher>

                                    </HeaderPanel>
                                    <ErrorBoundary>
                                        <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
                                            <SideNavItems>
                                                <SideNavMenuItem element={Link} to='/'
                                                    isActive={this.state.activeItem === '/'}
                                                    onClick={() => { this.setState({ activeItem: '/' }) }}>
                                                    Overview
                                                </SideNavMenuItem>
                                                <SideNavMenu renderIcon={Fade} title="Inventory" defaultExpanded>
                                                    <SideNavMenuItem element={Link} to='/inventory/items'
                                                        isActive={this.state.activeItem === '/inventory/items'}
                                                        onClick={() => { this.setState({ activeItem: '/inventory/items' }) }}>
                                                        Items
                                                    </SideNavMenuItem>
                                                </SideNavMenu>
                                                <SideNavMenu renderIcon={Fade} title="Management">
                                                    <SideNavMenuItem href="#">
                                                        Link
                                                    </SideNavMenuItem>
                                                    <SideNavMenuItem href="#">
                                                        Link
                                                    </SideNavMenuItem>
                                                    <SideNavMenuItem href="#">
                                                        Link
                                                    </SideNavMenuItem>
                                                </SideNavMenu>
                                                <SideNavMenu
                                                    renderIcon={Fade}
                                                    title="Docs">
                                                    <SideNavMenuItem href="#">
                                                        Link
                                                    </SideNavMenuItem>
                                                    <SideNavMenuItem href="#">
                                                        Link
                                                    </SideNavMenuItem>
                                                </SideNavMenu>
                                            </SideNavItems>
                                        </SideNav>
                                    </ErrorBoundary>
                                </Header>
                            </div>
                        )}
                    />
                </Theme>
                <Content className='content'>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/contributing" element={<Contributing />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Content>
            </BrowserRouter>
        );
    }
}

