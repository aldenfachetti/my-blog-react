import styled from "styled-components"

import { Link } from "gatsby"

export const MenuBarWrapper = styled.aside`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  right: 0;
  padding: 0.8rem 0;
  width: 3.75rem;
  height: 100vh;
  background: #192734;
  border-left: 1px solid #38444d;
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuBarLink = styled(Link)`
  display: block;
`

export const MenuBarItem = styled.span`
  position: relative;
  display: block;
  width: 1.75rem;
  height: auto;
  padding: 1rem;
  color: #8899a6;
  cursor: pointer;

  &:hover {
    color: #1fa1f2;
  }
`
