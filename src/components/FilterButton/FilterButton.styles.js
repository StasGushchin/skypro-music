import { styled } from 'styled-components'

export const MainCenterblock = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const FilterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  background: transparent;
  color: #ffffff;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
  &:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }
`

export const FilterListItems = styled.ul`
  list-style-type: none;
`

export const FilterListItem = styled.li`
  padding: 8px 16px;
`

export const FilterList = styled.div`
  width: 248px;
  min-height: 196px;
  max-height: 200px;
  padding: 34px 34px 0;
  border-radius: 12px;
  overflow-y: auto;
  background: #313131;
  color: #ffffff;
  font-family: StratosSkyeng;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  &::-webkit-scrollbar {
    width: 6px;
    height: 237px;
    background-color: #4b4949;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    border-radius: 5px;
  }
`
