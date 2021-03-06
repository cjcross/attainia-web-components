import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {withInfo} from '@storybook/addon-info'
import {ThemeProvider} from 'styled-components'
import styled from 'styled-components'

import theme from '../../src/theme'
import {DataTable, ColumnType} from '../../src/components/data-table'
import {
    getMockDataNoneSelected,
    getMockDataFirstSelected,
    getMockDataAllSelected,
    getMockHeadersFirstFixed,
    getMockHeadersNoneFixed,
    getSortDataFirstAsc,
    getSortDataFirstDesc,
    getSortDataThirdAsc,
    getSortDataThirdDesc
} from './dataTableMockData'

const CenterDiv = styled.div`
    margin-left: auto;
    margin-right: auto;
`

storiesOf('DataTable', module)
    .addDecorator(StoryComponent => (
        <ThemeProvider theme={theme}>
            <CenterDiv>
                <StoryComponent />
            </CenterDiv>
        </ThemeProvider>
    ))
    .add('Without check column, no sort',
        withInfo('A DataTable without a checkbox column, no sorting data for any column, and the name column is fixed.')(() =>
            <DataTable
                rowHeight={50}
                tableWidth={1253}
                tableHeight={500}
                headerHeight={50}
                hasCheckColumn={false}
                getNextPage={action('nextPage')}
                rowSelected={action('selectRow')}
                getSortedData={action('sortData')}
                headers={getMockHeadersFirstFixed()}
                data={{
                    sortData: {},
                    pageData: {
                        page: 1,
                        total: 10
                    },
                    rows: getMockDataNoneSelected(10)
                }}
            />
        )
    )
    .add('Without check column, no sort, no fixed col',
        withInfo('A DataTable without a checkbox column and no sorting data for any column.')(() =>
            <DataTable
                rowHeight={50}
                tableWidth={1253}
                tableHeight={500}
                headerHeight={50}
                hasCheckColumn={false}
                getNextPage={action('nextPage')}
                rowSelected={action('selectRow')}
                getSortedData={action('sortData')}
                headers={getMockHeadersNoneFixed()}
                data={{
                    sortData: {},
                    pageData: {
                        page: 1,
                        total: 10
                    },
                    rows: getMockDataNoneSelected(10)
                }}
            />
        )
    )
    .add('Check column, no sort',
        withInfo('A DataTable with a checkbox column and no sorting data for any column, and the check and name columns are fixed.')(() =>
            <DataTable
                rowHeight={50}
                tableWidth={1253}
                tableHeight={500}
                headerHeight={50}
                hasCheckColumn={true}
                getNextPage={action('nextPage')}
                rowSelected={action('selectRow')}
                getSortedData={action('sortData')}
                headers={getMockHeadersFirstFixed()}
                data={{
                    sortData: {},
                    pageData: {
                        page: 1,
                        total: 10
                    },
                    rows: getMockDataNoneSelected(10)
                }}
            />
        )
    )
    .add('Check column, no sort, first row selected',
        withInfo('A DataTable with a checkbox column and no sorting data for any column, and the check and name columns are fixed.  Also, the first row is selected')(() =>
            <DataTable
                rowHeight={50}
                tableWidth={1253}
                tableHeight={500}
                headerHeight={50}
                hasCheckColumn={true}
                getNextPage={action('nextPage')}
                rowSelected={action('selectRow')}
                getSortedData={action('sortData')}
                headers={getMockHeadersFirstFixed()}
                data={{
                    sortData: {},
                    pageData: {
                        page: 1,
                        total: 10
                    },
                    rows: getMockDataFirstSelected(10)
                }}
            />
        )
    )
    .add('Check column, no sort, all rows selected',
        withInfo('A DataTable with a checkbox column and no sorting data for any column, and the check and name columns are fixed.  Also, all rows are selected')(() =>
            <DataTable
                rowHeight={50}
                tableWidth={1253}
                tableHeight={500}
                headerHeight={50}
                hasCheckColumn={true}
                getNextPage={action('nextPage')}
                rowSelected={action('selectRow')}
                getSortedData={action('sortData')}
                headers={getMockHeadersFirstFixed()}
                data={{
                    sortData: {},
                    pageData: {
                        page: 1,
                        total: 10
                    },
                    rows: getMockDataAllSelected(10)
                }}
            />
        )
    )
    .add('Check column, first col sorted asc',
        withInfo('A DataTable with a checkbox column and no sorting data for any column, and the check and name columns are fixed.  Also, the first column is sorted, ascending.')(() =>
            <DataTable
                rowHeight={50}
                tableWidth={1253}
                tableHeight={500}
                headerHeight={50}
                hasCheckColumn={true}
                getNextPage={action('nextPage')}
                rowSelected={action('selectRow')}
                getSortedData={action('sortData')}
                headers={getMockHeadersFirstFixed()}
                data={{
                    sortData: getSortDataFirstAsc(),
                    pageData: {
                        page: 1,
                        total: 10
                    },
                    rows: getMockDataNoneSelected(10)
                }}
            />
        )
    )
    .add('Check column, first col sorted desc',
        withInfo('A DataTable with a checkbox column and no sorting data for any column, and the check and name columns are fixed.  Also, the first column is sorted, descending.')(() =>
            <DataTable
                rowHeight={50}
                tableWidth={1253}
                tableHeight={500}
                headerHeight={50}
                hasCheckColumn={true}
                getNextPage={action('nextPage')}
                rowSelected={action('selectRow')}
                getSortedData={action('sortData')}
                headers={getMockHeadersFirstFixed()}
                data={{
                    sortData: getSortDataFirstDesc(),
                    pageData: {
                        page: 1,
                        total: 10
                    },
                    rows: getMockDataNoneSelected(10)
                }}
            />
        )
    )
    .add('Check column, number col sorted asc',
        withInfo('A DataTable with a checkbox column and no sorting data for any column, and the check and name columns are fixed.  Also, the number column is sorted, ascending.')(() =>
            <DataTable
                rowHeight={50}
                tableWidth={1253}
                tableHeight={500}
                headerHeight={50}
                hasCheckColumn={true}
                getNextPage={action('nextPage')}
                rowSelected={action('selectRow')}
                getSortedData={action('sortData')}
                headers={getMockHeadersFirstFixed()}
                data={{
                    sortData: getSortDataThirdAsc(),
                    pageData: {
                        page: 1,
                        total: 10
                    },
                    rows: getMockDataNoneSelected(10)
                }}
            />
        )
    )
    .add('Check column, number col sorted desc',
        withInfo('A DataTable with a checkbox column and no sorting data for any column, and the check and name columns are fixed.  Also, the number column is sorted, descending.')(() =>
            <DataTable
                rowHeight={50}
                tableWidth={1253}
                tableHeight={500}
                headerHeight={50}
                hasCheckColumn={true}
                getNextPage={action('nextPage')}
                rowSelected={action('selectRow')}
                getSortedData={action('sortData')}
                headers={getMockHeadersFirstFixed()}
                data={{
                    sortData: getSortDataThirdDesc(),
                    pageData: {
                        page: 1,
                        total: 10
                    },
                    rows: getMockDataNoneSelected(10)
                }}
            />
        )
    )
